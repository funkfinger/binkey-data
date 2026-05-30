---
type: other
category: Soldering & Rework
subcategory: Solder Paste
part_number: 4860P-35G
manufacturer: MG Chemicals
description: Sn63/Pb37 leaded no-clean solder paste, 35g jar — for SMT stencil printing and dispensed reflow
location: Cabinet-2/Bin-42/Section-C
quantity: 1
status: available
price: $20
datasheet: https://mgchemicals.com/wp-content/uploads/2020/05/4860P-TDS.pdf
product_url: https://mgchemicals.com/products/soldering/solder/no-clean-leaded-solder-paste/
date_added: 2026-05-29
tags: [solder-paste, leaded, sn63-pb37, no-clean, smt, reflow, stencil, mg-chemicals, cabinet-2, bin-42, status-available]
---

# MG Chemicals 4860P-35G Leaded Solder Paste

## Description

MG Chemicals 4860P is a Sn63/Pb37 leaded no-clean solder paste supplied in a 35-gram jar. The eutectic Sn63/Pb37 alloy melts cleanly at 183°C with no plastic phase, making it the forgiving choice for hand-stencil SMT work, hot-plate reflow, and dispensed paste rework. The no-clean flux activates around 150°C and leaves a minimal, non-corrosive residue.

This is the workhorse paste for hobbyist SMT — easier to work with than lead-free SAC305 (lower temperature, wider process window, shinier joints), and the jar format works well for spatula application onto a stencil. Refrigerated, the paste keeps for 6+ months; at room temperature, plan to use it within a couple of months.

## Specifications

### Chemical & Physical Characteristics

- **Alloy**: Sn63 / Pb37 (eutectic)
- **Melting Point**: 183°C (361°F) — single melting point, no pasty range
- **Particle Size**: Type 3 (25–45 µm) typical for this product line
- **Metal Content**: ~88.5% by weight
- **Flux Type**: No-clean, halide-free (ROL0 / J-STD-004)
- **Form**: Jar, 35g
- **Color**: Gray paste
- **Viscosity**: Suitable for stencil printing and syringe dispensing with proper tip
- **Storage**: Refrigerate at 0–10°C (32–50°F); shelf life ~6 months refrigerated
- **Working Time at RT**: ~8 hours after warming to room temperature

### Key Features

- Eutectic Sn63/Pb37 — single melting point, easy reflow
- No-clean residue (non-conductive, non-corrosive)
- Halide-free (ROL0 classification)
- Compatible with stencil printing, syringe dispensing, and manual application
- 35g jar — enough for hundreds of small SMT boards
- Reflows cleanly on hot plate, hot air, or convection oven

## Image

*No photo yet — add photo to `binkey-data/attachments/mg-chemicals-4860p-35g-solder-paste.jpg` and replace this line with `![MG Chemicals 4860P](../attachments/mg-chemicals-4860p-35g-solder-paste.jpg)`*

## Installation Notes

### Stencil Printing (Recommended)

1. Remove jar from refrigerator and let warm to room temperature (~2 hours, sealed).
2. Align stencil over board (Kapton + frame, or a laser-cut mylar / stainless stencil).
3. Apply a bead of paste at one edge; squeegee across at ~45° in a single firm pass.
4. Lift stencil straight up; inspect deposits under magnification.
5. Place components in the wet paste; reflow within 4–8 hours.

### Hot-Plate / Hot-Air Reflow Profile (Sn63/Pb37)

| Stage | Target | Time |
|-------|--------|------|
| Preheat ramp | 25 → 150°C | 60–90 s |
| Soak | 150 → 175°C | 60–120 s |
| Reflow peak | 215°C (above 183°C for 30–60 s) | 30–60 s |
| Cooldown | < 4°C/s ramp down | — |

### Dispensed Paste (Repair / Touch-Up)

1. Transfer a small amount of paste to a syringe with a 22–25 gauge tip.
2. Dispense a small dot on each pad (~half the pad area — paste collapses on reflow).
3. Place component, reflow with iron tip or hot air at 230–260°C.

## Applications

- Hand-stencil SMT prototyping (0402 / 0603 / 0805 / SOIC / QFP / QFN)
- Hot-plate reflow of small batches
- Toaster-oven reflow conversion projects
- Syringe-dispensed paste repair
- BGA reballing (with appropriate stencil)
- Educational SMT workshops (more forgiving than lead-free)

## Technical Notes

- **Always refrigerate** between uses. Tighten the lid firmly and return to fridge — leaving the jar at room temp shortens life from months to weeks.
- **Warm fully before opening** — opening cold paste invites condensation, which ruins the flux activation and can cause solder balling.
- **Stir gently** before each use if the paste has separated. Don't whip air into it.
- **Leaded — wash hands** after handling and don't reflow leaded paste in a kitchen oven you'll use for food. Use a dedicated toaster oven or hot plate.
- **For lead-free boards**, use a SAC305 paste instead (higher reflow temp, ~217°C melting point). Don't mix lead and lead-free pastes on the same joint.
- **Stencil deposits collapse** during reflow — aim for ~80% pad coverage on the stencil to avoid bridging.

## Notes

The leaded equivalent in syringe form is MG Chemicals 4860P-10ML. For lead-free work, MG's 4900P series uses SAC305. The Chip Quik counterpart in this same bin is [[chip-quik-smdsmd291ax-solder-paste]] — both are no-clean Sn63/Pb37 pastes, just in different packaging (jar vs syringe). For tack flux and SMD removal work, see [[chip-quik-smd291-tack-flux]] and [[chip-quik-smd1-low-melt-removal-alloy]] in the same drawer.
