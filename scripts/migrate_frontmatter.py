#!/usr/bin/env python3
"""
migrate_frontmatter.py — Normalize binkey-data parts frontmatter to canonical schema.

Usage:
    python3 scripts/migrate_frontmatter.py [--apply] [--file <path>] [--verbose]

Without --apply, runs in dry-run mode and prints what would change.
Requires: pip install ruamel.yaml
"""

import argparse
import io
import re
import sys
from pathlib import Path

try:
    from ruamel.yaml import YAML
except ImportError:
    sys.exit("Missing dependency: pip install ruamel.yaml")

# ── paths ─────────────────────────────────────────────────────────────────────
REPO_ROOT = Path(__file__).parent.parent
PARTS_DIR = REPO_ROOT / "parts"

# ── type inference ─────────────────────────────────────────────────────────────
# Direct mapping for unambiguous type values
TYPE_MAP = {
    "hardware": "mechanical",
    "electrical": "ic",
    "connector": "other",
    "component": "other",
    "capacitor": "passive",
    "parts-index": "other",
    "mechanical-parts-kit": "kit",
    "electronic-test-instrument": "module",
}

CANONICAL_TYPES = {"ic", "dev-board", "mechanical", "passive", "module", "kit", "other"}

# Category/subcategory keyword hints for resolving "electronic-component" / "part"
# Checked in order; first match wins.
CATEGORY_TYPE_HINTS = [
    # dev-board first — boards often have "microcontroller" in category too
    ("feather", "dev-board"),
    ("arduino", "dev-board"),
    ("raspberry pi", "dev-board"),
    ("development board", "dev-board"),
    ("dev board", "dev-board"),
    ("dev-board", "dev-board"),
    ("microcontroller board", "dev-board"),
    # passives
    ("capacitor", "passive"),
    ("resistor", "passive"),
    ("inductor", "passive"),
    ("diode", "passive"),
    ("led", "passive"),
    ("crystal", "passive"),
    ("oscillator", "passive"),
    ("potentiometer", "passive"),
    ("passive", "passive"),
    # mechanical
    ("mechanical", "mechanical"),
    ("hardware", "mechanical"),
    ("fastener", "mechanical"),
    ("knob", "mechanical"),
    ("screw", "mechanical"),
    ("bearing", "mechanical"),
    ("heat-set", "mechanical"),
    ("rubber feet", "mechanical"),
    # kits
    ("kit", "kit"),
    ("assortment", "kit"),
    ("parts book", "kit"),
    # modules
    ("sensor", "module"),
    ("camera", "module"),
    ("display", "module"),
    ("wireless", "module"),
    ("wifi", "module"),
    ("bluetooth", "module"),
    ("gps", "module"),
    ("breakout", "module"),
    ("shield", "module"),
    ("hat", "module"),
    ("module", "module"),
    # ICs — broad catch-all after everything else
    ("integrated circuit", "ic"),
    ("voltage reference", "ic"),
    ("voltage regulator", "ic"),
    ("op-amp", "ic"),
    ("opamp", "ic"),
    ("logic", "ic"),
    ("memory", "ic"),
    ("flash", "ic"),
    ("eeprom", "ic"),
    ("microcontroller", "ic"),
    ("driver", "ic"),
    ("comparator", "ic"),
    ("timer", "ic"),
    ("adc", "ic"),
    ("dac", "ic"),
    ("interface", "ic"),
    ("multiplexer", "ic"),
    ("encoder", "ic"),
]


def infer_type(raw_type: str, category: str, subcategory: str):
    """
    Return (canonical_type, was_changed).
    Returns (raw_type, False) with a warning if no mapping found.
    """
    rt = (raw_type or "").strip().lower()

    # Already canonical
    if rt in CANONICAL_TYPES:
        return rt, False

    # Direct unambiguous mapping
    if rt in TYPE_MAP:
        return TYPE_MAP[rt], True

    # Ambiguous ("electronic-component", "part") — try category hints
    if rt in ("electronic-component", "part", ""):
        search = ((category or "") + " " + (subcategory or "")).lower()
        for keyword, canonical in CATEGORY_TYPE_HINTS:
            if keyword in search:
                return canonical, True
        # Default fallback for "electronic-component"
        if rt == "electronic-component":
            return "other", True
        if rt == "part":
            return "other", True

    # Unknown — leave as-is
    return rt, False


# ── location normalisation ─────────────────────────────────────────────────────

def _title_segment(s: str) -> str:
    """Capitalize first letter of each hyphen-separated word."""
    if not s:
        return s
    parts = s.split("-")
    result = []
    for p in parts:
        if p.isdigit():
            result.append(p)
        elif p:
            result.append(p[0].upper() + p[1:])
    return "-".join(result)


def _normalize_one_location(raw: str) -> str:
    """
    Normalize a single location string to Title-Case slash-delimited format.

    Examples:
        "cabinet-1-bin-35"        → "Cabinet-1/Bin-35"
        "Cabinet-3/Bin-7"         → "Cabinet-3/Bin-7"
        "cabinet-4"               → "Cabinet-4"
        "cabinet-3-bin-7-section-a" → "Cabinet-3/Bin-7/Section-A"
        "SMT-Parts-Book-1"        → "SMT-Parts-Book-1"
    """
    raw = raw.strip()
    if not raw:
        return raw

    # Already has slashes — normalize each segment
    if "/" in raw:
        return "/".join(_title_segment(p) for p in raw.split("/"))

    # Detect old hyphen-only cabinet format: cabinet-N[-bin-M][-section-X]
    lowered = raw.lower()
    cabinet_match = re.match(
        r"^cabinet-(\d+)(?:-bin-(\w+))?(?:-section-(\w+))?$",
        lowered,
    )
    if cabinet_match:
        cab, bin_, sec = cabinet_match.groups()
        parts = [f"Cabinet-{cab}"]
        if bin_:
            parts.append(f"Bin-{bin_.upper() if len(bin_) == 1 else bin_.capitalize()}")
        if sec:
            parts.append(f"Section-{sec.upper()}")
        return "/".join(parts)

    # Fall through — apply title casing
    return _title_segment(raw)


def _is_cabinet_segment(s: str) -> bool:
    return bool(re.match(r"^[Cc]abinet-\d+$", s.strip()))


def _is_bin_segment(s: str) -> bool:
    return bool(re.match(r"^[Bb]in-\d+$", s.strip()))


def normalize_location(raw):
    """
    Accept any location representation and return a list of canonical strings,
    or None if the location should be left untouched (empty/missing).
    """
    if raw is None:
        return None
    if isinstance(raw, list):
        items = [str(x).strip() for x in raw if str(x).strip()]
        if not items:
            return None
        # Detect "exploded" format: ["Cabinet-3", "Bin-27"] → merge to "Cabinet-3/Bin-27"
        if (
            len(items) == 2
            and _is_cabinet_segment(items[0])
            and _is_bin_segment(items[1])
        ):
            merged = f"{_title_segment(items[0])}/{_title_segment(items[1])}"
            return [merged]
        # Otherwise normalize each independently
        return [_normalize_one_location(x) for x in items if x]
    s = str(raw).strip()
    if not s:
        return None
    return [_normalize_one_location(s)]


# ── Details section stripping ──────────────────────────────────────────────────

# Matches "## Details" through (but not including) the next ## heading or EOF
DETAILS_PATTERN = re.compile(
    r"^## Details[ \t]*\n"   # ## Details heading line
    r"(?:(?!^##[ \t]).*\n)*",  # all subsequent lines that don't start a new ## heading
    re.MULTILINE,
)


def strip_details_section(body: str) -> str:
    """Remove the '## Details' section block from body text."""
    new_body = DETAILS_PATTERN.sub("", body)
    # Collapse multiple consecutive blank lines to at most two
    new_body = re.sub(r"\n{3,}", "\n\n", new_body)
    return new_body


# ── frontmatter parsing / writing ──────────────────────────────────────────────

FRONTMATTER_PATTERN = re.compile(r"^---[ \t]*\n(.*?)\n---[ \t]*\n?", re.DOTALL)


def parse_file(path: Path):
    text = path.read_text(encoding="utf-8")
    m = FRONTMATTER_PATTERN.match(text)
    if not m:
        raise ValueError("No YAML frontmatter found")
    yaml = YAML()
    yaml.preserve_quotes = True
    yaml.width = 4096
    fm = yaml.load(io.StringIO(m.group(1)))
    body = text[m.end():]
    return fm, body, yaml


def serialize_file(fm, body: str, yaml_instance) -> str:
    buf = io.StringIO()
    buf.write("---\n")
    yaml_instance.dump(fm, buf)
    buf.write("---\n")
    buf.write(body)
    return buf.getvalue()


# ── per-file migration ─────────────────────────────────────────────────────────

def migrate(fm, body: str, path: Path, verbose: bool) -> tuple:
    changes = []
    warnings = []

    def log(msg):
        changes.append(msg)
        if verbose:
            print(f"    • {msg}")

    def warn(msg):
        warnings.append(f"WARNING: {msg}")
        if verbose:
            print(f"    ⚠ WARNING: {msg}")

    # ── 1. price synonyms → price ──────────────────────────────────────────
    for old in ("price_range", "cost_per_unit", "list_price"):
        if old in fm:
            if "price" not in fm or not fm["price"] or str(fm["price"]) in ("", "N/A"):
                fm["price"] = fm[old]
                log(f"renamed {old} → price")
            else:
                log(f"dropped duplicate {old} (price already set)")
            del fm[old]

    # ── 2. product_url synonyms ────────────────────────────────────────────
    for old in ("purchase_url", "supplier_url", "digikey_url"):
        if old in fm:
            if "product_url" not in fm or not fm["product_url"] or str(fm["product_url"]) in ("", "N/A"):
                fm["product_url"] = fm[old]
                log(f"renamed {old} → product_url")
            else:
                log(f"dropped duplicate {old} (product_url already set)")
            del fm[old]

    # ── 3. datasheet_url → datasheet ──────────────────────────────────────
    if "datasheet_url" in fm:
        if "datasheet" not in fm or not fm["datasheet"] or str(fm["datasheet"]) in ("", "N/A"):
            fm["datasheet"] = fm["datasheet_url"]
            log("renamed datasheet_url → datasheet")
        else:
            log("dropped duplicate datasheet_url (datasheet already set)")
        del fm["datasheet_url"]

    # ── 4. added_date → date_added ─────────────────────────────────────────
    if "added_date" in fm:
        if "date_added" not in fm or not fm["date_added"]:
            fm["date_added"] = fm["added_date"]
            log("renamed added_date → date_added")
        else:
            log("dropped duplicate added_date (date_added already set)")
        del fm["added_date"]

    # ── 5. brand / manufacturer ────────────────────────────────────────────
    if "brand" in fm and "manufacturer" in fm:
        brand_val = str(fm.get("brand") or "").strip()
        mfr_val = str(fm.get("manufacturer") or "").strip()
        if brand_val and not mfr_val:
            fm["manufacturer"] = brand_val
            log(f"used brand value for manufacturer: {brand_val!r}")
        elif brand_val != mfr_val and brand_val and mfr_val:
            log(f"kept manufacturer={mfr_val!r}, dropped conflicting brand={brand_val!r}")
        else:
            log("dropped duplicate brand (same as manufacturer)")
        del fm["brand"]
    elif "brand" in fm:
        fm["manufacturer"] = fm["brand"]
        del fm["brand"]
        log("renamed brand → manufacturer")

    # ── 6. type normalisation ──────────────────────────────────────────────
    raw_type = str(fm.get("type") or "").strip()
    canonical_type, changed = infer_type(
        raw_type,
        str(fm.get("category") or ""),
        str(fm.get("subcategory") or ""),
    )
    if changed:
        fm["type"] = canonical_type
        log(f"type: {raw_type!r} → {canonical_type!r}")
    elif canonical_type not in CANONICAL_TYPES and canonical_type:
        warn(f"unrecognised type {raw_type!r} — left unchanged")

    # ── 7. status normalisation ────────────────────────────────────────────
    raw_status = str(fm.get("status") or "").strip().lower()
    status_map = {
        "in-stock": "available", "in_stock": "available", "instock": "available",
        "active": "available",
        "discontinued": "out-of-stock", "deprecated": "out-of-stock", "retired": "out-of-stock",
    }
    if raw_status in status_map:
        fm["status"] = status_map[raw_status]
        log(f"status: {raw_status!r} → {status_map[raw_status]!r}")
    elif raw_status not in ("available", "low-stock", "out-of-stock", "todo", ""):
        warn(f"unrecognised status {raw_status!r} — left unchanged")

    # ── 8. location normalisation ──────────────────────────────────────────
    raw_loc = fm.get("location")
    if raw_loc is not None:
        normalized = normalize_location(raw_loc)
        if normalized is not None:
            # Compare as strings to detect actual change
            raw_str = str(raw_loc)
            if len(normalized) == 1:
                new_val = normalized[0]
            else:
                new_val = normalized
            if str(new_val) != raw_str:
                fm["location"] = new_val
                log(f"location: {raw_str!r} → {str(new_val)!r}")

    # ── 9. strip ## Details body section ──────────────────────────────────
    if re.search(r"^## Details[ \t]*$", body, re.MULTILINE):
        new_body = strip_details_section(body)
        if new_body != body:
            body = new_body
            log("stripped ## Details section from body")

    return fm, body, changes, warnings


# ── main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Migrate binkey-data frontmatter to canonical schema"
    )
    parser.add_argument("--apply", action="store_true", help="Write changes (default: dry run)")
    parser.add_argument("--file", metavar="PATH", help="Process a single file")
    parser.add_argument("--verbose", "-v", action="store_true", help="Per-field details")
    args = parser.parse_args()

    if args.file:
        files = [Path(args.file)]
    else:
        files = sorted(PARTS_DIR.glob("*.md"))

    total = len(files)
    changed_count = 0
    skipped_count = 0
    warned_count = 0

    for path in files:
        try:
            fm, body, yaml_instance = parse_file(path)
        except ValueError as e:
            if args.verbose:
                print(f"SKIP {path.name}: {e}")
            skipped_count += 1
            continue
        except Exception as e:
            print(f"ERROR {path.name}: {e}")
            skipped_count += 1
            continue

        if fm is None:
            skipped_count += 1
            continue

        new_fm, new_body, changes, warnings = migrate(fm, body, path, args.verbose)

        all_messages = changes + warnings
        if not all_messages:
            continue

        has_warning = bool(warnings)
        if has_warning:
            warned_count += 1

        mode = "APPLY" if args.apply else "DRY"
        print(f"{mode}  {path.name}")
        for msg in all_messages:
            prefix = "  ⚠" if msg.startswith("WARNING") else "  •"
            print(f"{prefix} {msg}")

        if args.apply:
            try:
                serialized = serialize_file(new_fm, new_body, yaml_instance)
                path.write_text(serialized, encoding="utf-8")
            except Exception as e:
                print(f"  ✗ WRITE ERROR: {e}")

        changed_count += 1

    print()
    print("─── Summary " + "─" * 38)
    print(f"  Files scanned : {total}")
    print(f"  Files changed : {changed_count}")
    print(f"  Files skipped : {skipped_count}")
    print(f"  Files warned  : {warned_count}")
    mode_str = "APPLIED" if args.apply else "DRY RUN — re-run with --apply to write"
    print(f"  Mode          : {mode_str}")


if __name__ == "__main__":
    main()
