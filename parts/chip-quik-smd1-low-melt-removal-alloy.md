---
type: other
category: Soldering & Rework
subcategory: Solder & Removal Alloy
part_number: SMD1
manufacturer: Chip Quik
description: Low-melt (~136°F / 58°C) bismuth-indium removal alloy for one-pass desoldering of multi-pin SMD packages
location: Cabinet-2/Bin-42/Section-B
quantity: 1
status: available
price: $15
datasheet: https://www.chipquik.com/datasheets/SMD1.pdf
product_url: https://www.chipquik.com/store/product_info.php?products_id=10010
date_added: 2026-05-29
tags: [solder, removal-alloy, low-melt, desoldering, smd, rework, chip-quik, bismuth, indium, cabinet-2, bin-42, status-available]
---

# Chip Quik SMD1 Low-Melt Removal Alloy

## Description

Chip Quik SMD1 is a specialized low-melting-point alloy designed for removing multi-pin surface-mount components in a single pass. When applied across the leads of a QFP, SOIC, SOT, or similar SMD package — together with tack flux — it mixes with the existing solder to form a eutectic that stays molten at ~58°C (136°F), well below normal solder reflow temperatures. This means all pins of a chip can be melted simultaneously with just an iron tip, allowing the part to be lifted off cleanly without heat-damaging the PCB or neighboring components.

This is the standard SMD desoldering technique for hobbyists and rework techs working without a hot-air station or a preheater. It's the gentlest way to remove a 100-pin QFP, and the only practical hand-tool option for desoldering large multi-pin packages without lifting pads.

## Specifications

### Chemical & Physical Characteristics

- **Alloy Composition**: Bismuth / Indium / Tin (plus small Pb fraction in original SMD1)
- **Melting Point**: ~58°C (136°F) when mixed with existing tin-lead solder
- **Form**: Solid wire on a small spool / coil
- **Diameter**: ~0.064" (1.63mm)
- **Length**: Sufficient for ~10–20 typical SMD removals per coil
- **Storage**: Cool, dry; indefinite shelf life if kept sealed

### Key Features

- Single-pass removal of multi-pin SMD packages (QFP, SOIC, SOT, etc.)
- Mixes with existing solder to lower the joint melt point dramatically
- Works with just a soldering iron — no hot air or preheater required
- Does not damage PCB pads or solder mask when used correctly
- Pairs with Chip Quik SMD291 tack flux (always use together)
- Compatible with leaded and lead-free boards (technique adjusts)

## Image

*No photo yet — add photo to `binkey-data/attachments/chip-quik-smd1-low-melt-removal-alloy.jpg` and replace this line with `![Chip Quik SMD1](../attachments/chip-quik-smd1-low-melt-removal-alloy.jpg)`*

## Installation Notes

### Removing a Multi-Pin SMD (QFP / SOIC)

1. Apply a generous bead of [[chip-quik-smd291-tack-flux|SMD291 tack flux]] across all pins on every side of the target chip.
2. Touch the SMD1 alloy to a tinned iron tip and lay a thick bead of the molten alloy across each row of pins. Keep adding alloy until each row holds a continuous puddle.
3. Repeat for all sides of the chip. For QFPs, you want one continuous molten puddle around the perimeter.
4. With tweezers or a vacuum pickup, gently rock and lift the chip — it'll release with all pins simultaneously molten.
5. **Cleanup**: wick the SMD1/solder mixture off the pads with desoldering braid + fresh flux. The pads must be cleaned to bare copper / tinned solder before placing the replacement part — leftover SMD1 will contaminate the new joint.

### Cleanup After Removal

- Wick all visible alloy off the pads with desoldering braid.
- Apply fresh SMD291 flux and re-tin each pad with normal solder.
- Wipe with IPA to remove flux residue.

## Applications

- Desoldering damaged or wrong-orientation QFP / TQFP packages
- Salvaging ICs from scrap boards
- Removing SOIC / SSOP / TSSOP packages without hot air
- Pulling SOT-23 / SOT-223 regulators cleanly
- Reworking high pin-count chips on dense boards
- Removing connectors with many SMD legs
- Field rework where a hot-air station isn't available

## Technical Notes

- **Always use with tack flux** ([[chip-quik-smd291-tack-flux|SMD291]]). Without flux the alloy won't wet the pins and you'll heat-stress the chip.
- **Do NOT reuse the contaminated solder on the pads.** The bismuth/indium mixture is brittle and unreliable — wick it all off and start fresh with normal solder before installing the replacement part.
- **Eutectic temperature only applies after mixing.** Pure SMD1 alone melts higher; the magic happens once it dissolves into the existing solder joint.
- **Brittle alloy** — finished joints with SMD1 in them will crack under stress. Treat this as a removal aid only, never as a permanent solder.
- **Lead-free boards** need more flux and slightly higher iron temperature; the SAC305 solder is harder to mix into the SMD1 puddle.
- **Don't ingest** — bismuth-indium alloys are relatively safe but not food-grade. Wash hands after handling.

## Notes

This is the alloy in the famous "Chip Quik SMD removal kit" sold under various Amazon listings including https://a.co/d/07sqUpwl. Kits typically bundle SMD1 with [[chip-quik-smd291-tack-flux|SMD291 flux]] and IPA — both stocked in Cabinet-2/Bin-42. For lead-free work, Chip Quik offers SMDLFLF (lead-free low-melt variant) but the standard SMD1 still works on lead-free boards. Plenty of alloy in one coil — a single spool removes 10–20 typical chips.
