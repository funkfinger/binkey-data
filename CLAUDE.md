# Binkey-Data Inventory — Claude Instructions

## Parts Lookup

When searching for parts, always do a full grep search across the `parts/` directory rather than relying on files already in context. Don't assume a part is absent just because it wasn't found in a previous search — run a targeted search specific to the current query before concluding nothing is in stock.

---

## Adding a New Part

Use the `add-part` skill in Claude Code. It handles research, file creation, cabinet file updates, and commits.

**Critical rules when adding parts manually:**

1. Use the canonical frontmatter schema below — no exceptions.
2. **Do NOT add a `## Details` section** to the body. The `FrontmatterTable` Quartz component renders all frontmatter fields as a properties panel automatically.
3. Body text should contain: Description, Specifications, Pinout, Applications, Circuit Examples, Technical Notes. These sections display below the auto-rendered properties panel.
4. Run the migration script after creating a file to validate it: `python3 scripts/migrate_frontmatter.py --file parts/<slug>.md`

---

## Canonical Frontmatter Schema

Every file in `parts/` must use these exact field names:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `type` | enum | ✓ | `ic` `dev-board` `mechanical` `passive` `module` `kit` `other` |
| `category` | string | ✓ | Broad grouping e.g. `Integrated Circuits` |
| `subcategory` | string | — | Narrower grouping e.g. `Voltage Reference ICs` |
| `part_number` | string | ✓ | Manufacturer or vendor part number |
| `manufacturer` | string | ✓ | Official manufacturer name |
| `description` | string | ✓ | One-line description |
| `location` | string or array | ✓ | Slash-delimited: `Cabinet-3/Bin-7/Section-A` |
| `quantity` | int or string | ✓ | Use `"200+"` for approximate |
| `status` | enum | ✓ | `available` `low-stock` `out-of-stock` `todo` |
| `price` | string | — | e.g. `"$3.95"` or `"$0.15-0.30"` |
| `product_url` | string (URI) | — | Purchase or product page URL |
| `datasheet` | string | — | Datasheet URL or `"N/A"` |
| `date_added` | string (date) | — | ISO 8601: `2026-05-14` |
| `tags` | array | ✓ | Lowercase, hyphen-separated |

### Deprecated Fields — Never Use

| Deprecated | Use Instead |
|-----------|-------------|
| `brand` | `manufacturer` |
| `price_range` | `price` |
| `purchase_url` | `product_url` |
| `supplier_url` | `product_url` |
| `digikey_url` | `product_url` |
| `datasheet_url` | `datasheet` |
| `added_date` | `date_added` |

### Type Values

| Value | Use for |
|-------|---------|
| `ic` | Bare ICs, chips, microcontrollers (die only) |
| `dev-board` | Arduino, Feather, Pi, eval/dev boards |
| `passive` | Resistors, capacitors, inductors, LEDs, diodes, potentiometers |
| `module` | Assembled modules: sensors, displays, cameras, breakouts |
| `mechanical` | Hardware, knobs, screws, fasteners, heat-set inserts |
| `kit` | Multi-piece kits or assortment sets |
| `other` | Anything that doesn't fit above |

### Location Format

Always use Title-Case slash-delimited segments:

```yaml
location: Cabinet-3/Bin-7               # single bin
location: Cabinet-3/Bin-43/Section-B    # with section
location: [Cabinet-1/Bin-15, Cabinet-1/Bin-23]  # multi-bin
location: SMT-Parts-Book-1/Page-5       # non-cabinet storage
```

---

## Collection Files vs Individual Pages

**Individual pages** are for unique named parts (a specific IC, dev board, tool, etc.).

**Collection files** are for bulk identical components where individual pages add no value:
- SMT resistor/cap books → `smt-parts-book-1.md`, `smt-parts-book-2.md`
- Through-hole assortment kits → `component-sets.md`
- Mixed LED collections → one page per physical container

Do NOT create individual pages for "100Ω 0402 resistor" or similar bulk passives.

---

## Migration Script

To normalize a single file after creation:
```bash
python3 scripts/migrate_frontmatter.py --file parts/<slug>.md
```

To run across all parts (dry-run first):
```bash
python3 scripts/migrate_frontmatter.py          # dry run
python3 scripts/migrate_frontmatter.py --apply  # apply changes
```

Requires: `pip install ruamel.yaml`

---

## Site Architecture

- **Quartz 4** static site in `web/`, deployed to https://funkfinger.github.io/binkey-data/
- **`FrontmatterTable`** component (`web/quartz/components/FrontmatterTable.tsx`) auto-renders frontmatter as a properties panel on every `parts/` page
- **`schema.json`** at repo root defines the canonical schema (JSON Schema draft-07)
- Cabinet index pages: `am-cabinet-1.md` … `am-cabinet-7.md`
- Parts index: `parts/index.md`
