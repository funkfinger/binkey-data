---
type: other
category: Soldering & Rework
subcategory: Flux
part_number: SMD291
manufacturer: Chip Quik
description: No-clean tack flux in 10cc syringe — holds SMD parts in place during rework and improves solder flow
location: Cabinet-2/Bin-42/Section-A
quantity: 1
status: available
price: $10
datasheet: https://www.chipquik.com/datasheets/SMD291.pdf
product_url: https://www.chipquik.com/store/product_info.php?products_id=24010
date_added: 2026-05-29
tags: [flux, tack-flux, no-clean, smd, rework, soldering, chip-quik, syringe, cabinet-2, bin-42, status-available]
---

# Chip Quik SMD291 No-Clean Tack Flux

## Description

Chip Quik SMD291 is a no-clean tack flux supplied in a 10cc syringe with a tapered dispensing tip. The flux has a gel-like consistency that holds surface-mount components in place on the PCB during placement and reflow, while activating at solder melt temperatures to dramatically improve wetting and joint formation.

This is the workhorse flux for SMD rework — applying a small bead before drag-soldering QFP/SOIC pins, before placing 0402/0603 passives, or before using the SMD1 low-melt removal alloy. The no-clean formulation leaves a minimal, non-conductive residue that doesn't strictly need to be cleaned, though IPA cleanup is recommended for high-impedance circuits and aesthetics.

## Specifications

### Chemical & Physical Characteristics

- **Type**: No-clean tack flux (ROL0 classification)
- **Form**: Gel / paste, syringe-dispensed
- **Volume**: 10cc (per syringe)
- **Activation Temperature**: ~150°C (302°F) and above
- **Halide Content**: None (halide-free)
- **Solids Content**: ~50%
- **Color**: Pale amber / clear
- **Shelf Life**: 12 months at room temperature (refrigeration extends)
- **Storage**: Cool, dry place; refrigerate for long-term

### Key Features

- Holds SMD parts in place during placement and reflow
- No-clean formula — residue is non-conductive and non-corrosive
- Halide-free (compatible with sensitive components)
- Syringe + tapered tip allows precise placement on individual pads
- Compatible with leaded and lead-free solder
- Pairs with Chip Quik SMD1 removal alloy for desoldering multi-pin SMDs

## Image

*No photo yet — add photo to `binkey-data/attachments/chip-quik-smd291-tack-flux.jpg` and replace this line with `![Chip Quik SMD291](../attachments/chip-quik-smd291-tack-flux.jpg)`*

## Installation Notes

### Drag-Soldering QFP / SOIC Pins

1. Apply a thin bead of SMD291 across all pins on one side of the chip.
2. Tin the iron, then drag across the pins — flux pulls solder cleanly between leads.
3. Wick away bridges with desoldering braid (no extra flux needed — there's plenty).
4. Wipe residue with IPA on a swab if desired.

### Placing 0402 / 0603 / 0805 Passives

1. Dab a tiny amount of SMD291 on one pad.
2. Place the part in the flux — it'll stay put.
3. Reflow with iron tip or hot air.
4. Add solder to the second pad.

### Using with SMD1 Removal Alloy

1. Coat all pins of the target SMD with SMD291.
2. Apply SMD1 alloy across all pins (see [[chip-quik-smd1-low-melt-removal-alloy]]).
3. Iron-melt the combined alloy mass; lift the part off cleanly.

## Applications

- SMD component placement (passives, ICs, BGAs)
- Drag-soldering fine-pitch QFP and SOIC packages
- Reflow rework of cold or bridged joints
- Hand-soldering 0402 / 0603 / 0805 passives
- BGA reballing prep
- Companion flux for low-melt removal of multi-pin SMDs
- Cleaning up oxidized pads before resoldering

## Technical Notes

- **Use sparingly** — a tiny dab per pad is enough. Too much flux makes the joint messy and harder to inspect.
- **Refrigeration** extends shelf life well past 12 months. Let it warm to room temp before dispensing or the syringe plunger will fight you.
- **Tip clogging**: keep the cap on between uses; if the tip dries, swap in a fresh tip rather than forcing through.
- **No-clean residue** is safe to leave on most boards but can interfere with conformal coating adhesion and ICT/in-circuit test pads. Clean with IPA in those cases.
- **Not the same as paste flux for stencil printing** — SMD291 is for hand rework, not for screening solder paste.

## Notes

The Chip Quik SMD removal kit on Amazon typically bundles SMD291 with the SMD1 alloy and a small bottle of IPA — both items are stocked together in Cabinet-2/Bin-42. For larger projects, the SMD291NL250T5 (250g jar) or SMD291SNL10 (10cc syringe, lead-free compatible) variants are available. The paired removal alloy is [[chip-quik-smd1-low-melt-removal-alloy]].
