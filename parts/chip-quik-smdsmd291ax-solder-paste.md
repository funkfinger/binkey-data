---
type: other
category: Soldering & Rework
subcategory: Solder Paste
part_number: SMDSMD291AX
manufacturer: Chip Quik
description: Sn63/Pb37 no-clean leaded solder paste in 35g syringe — for SMT reflow and dispensed rework
location: Cabinet-2/Bin-42/Section-D
quantity: 1
status: available
price: $18
datasheet: https://www.chipquik.com/datasheets/SMD291AX.pdf
product_url: https://www.chipquik.com/store/product_info.php?products_id=24050
date_added: 2026-05-29
tags: [solder-paste, leaded, sn63-pb37, no-clean, smt, reflow, syringe, chip-quik, cabinet-2, bin-42, status-available]
---

# Chip Quik SMDSMD291AX Solder Paste

## Description

Chip Quik SMDSMD291AX is a Sn63/Pb37 no-clean solder paste supplied in a 35g syringe with dispensing tip. Like the MG Chemicals counterpart, it uses the eutectic tin-lead alloy melting at 183°C, but the syringe format makes it ideal for dispensed application — squirting individual paste dots onto pads for SMT placement, repair work, or BGA reballing.

The "AX" suffix in Chip Quik's catalog typically denotes their no-clean, halide-free flux chemistry suitable for hand rework and benchtop reflow. The syringe form factor wastes less paste than a jar (no exposure to air during use), making it a better choice for occasional / hobbyist work where a 35g jar would oxidize before being used up.

## Specifications

### Chemical & Physical Characteristics

- **Alloy**: Sn63 / Pb37 (eutectic)
- **Melting Point**: 183°C (361°F) — single melting point
- **Particle Size**: Type 3 (25–45 µm) typical
- **Metal Content**: ~88.5% by weight
- **Flux Type**: No-clean, halide-free
- **Form**: Syringe, 35g, with dispensing tip
- **Color**: Gray paste
- **Storage**: Refrigerate at 0–10°C; shelf life ~6 months refrigerated
- **Working Time at RT**: ~8 hours after warming

### Key Features

- Eutectic Sn63/Pb37 — easy reflow, no plastic phase
- No-clean halide-free flux
- Syringe dispensing — minimal air exposure extends working life
- 35g syringe — enough for many small SMT boards
- Compatible with hot plate, hot air, convection oven, and iron-tip reflow
- Hobbyist-friendly low-temperature alternative to lead-free

## Image

*No photo yet — add photo to `binkey-data/attachments/chip-quik-smdsmd291ax-solder-paste.jpg` and replace this line with `![Chip Quik SMDSMD291AX](../attachments/chip-quik-smdsmd291ax-solder-paste.jpg)`*

## Installation Notes

### Dispensed Paste Application

1. Remove syringe from refrigerator, let warm to room temp ~2 hours (still capped).
2. Attach a 22–25 gauge tapered tip for fine work, 18–20 ga for larger pads.
3. Dispense a small dot per pad, sizing it to ~half the pad area (paste collapses on reflow).
4. Place SMD components into the wet paste — they self-align during reflow.
5. Reflow per profile below within 4–8 hours.

### Stencil Printing (Alternative)

The syringe paste can be transferred to a stencil application: squeeze a bead along the stencil edge, squeegee across in a single firm 45° pass, lift stencil straight up.

### Reflow Profile (Sn63/Pb37 Eutectic)

| Stage | Target | Time |
|-------|--------|------|
| Preheat | 25 → 150°C | 60–90 s |
| Soak | 150 → 175°C | 60–120 s |
| Reflow | Peak 215°C, above 183°C for 30–60 s | 30–60 s |
| Cooldown | < 4°C/s | — |

## Applications

- Dispensed paste application for SMT placement
- Iron-tip reflow of individual SMD parts
- Hot-plate or toaster-oven reflow of small boards
- Repair work — adding paste to a single bad joint
- BGA reballing with stencil
- Educational / hobbyist SMT projects

## Technical Notes

- **Always refrigerate** between uses. Cap the syringe tightly and store upright in the fridge — never the freezer.
- **Warm fully before use** — opening cold paste invites condensation that causes solder balling.
- **Replace dispensing tips** if they clog — don't try to clear them by forcing paste through.
- **Lead-bearing** — wash hands after handling. Don't reflow in a kitchen oven shared with food.
- **Tip choice matters** for dispensing accuracy: tapered (TT) tips for fine-pitch, blunt for larger pads.
- **Do not mix** with lead-free SAC305 paste on the same joint — different alloys behave unpredictably.

## Notes

The "AX" Chip Quik designation indicates their no-clean halide-free chemistry. The jar-format counterpart in this same drawer is [[mg-chemicals-4860p-35g-solder-paste]] — same Sn63/Pb37 alloy, different package. For tack flux (placement aid, not paste) see [[chip-quik-smd291-tack-flux]]; for SMD removal alloy see [[chip-quik-smd1-low-melt-removal-alloy]]. Chip Quik also sells SMD291SNL for lead-free SAC305 in the same form factor.
