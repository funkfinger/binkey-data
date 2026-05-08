---
type: electronic-component
category: Potentiometers
subcategory: Rotary Potentiometers
brand: Tayda Electronics
part_number: A-6333
model: Rotary 100K OHM Linear Taper 14mm Potentiometer Transparent Spline Shaft
description: 100K ohm linear taper 14mm rotary potentiometer with transparent spline shaft, PCB mount
manufacturer: Tayda Electronics
package: Through-hole, PCB mount
size: 14mm body, T18 spline shaft 6mm dia x 17mm length
voltage: N/A
current: N/A
power: 0.1W
interface: [Analog, Potentiometer]
connectivity: [Through-hole pins]
compatibility: [Eurorack, audio circuits, synthesizers, effect pedals]
location: [Cabinet-3/Bin-7]
quantity: 10
status: available
price_range: $1.30
datasheet: N/A
product_url: https://www.taydaelectronics.com/rotary-100-ohm-linear-taper-potentiometer-14mm-spline-shaft.html
tags: [potentiometer, pot, 100k, linear, taper, spline-shaft, 14mm, pcb-mount, eurorack, audio, cabinet-3, bin-7, status-available]
date_added: 2026-05-07
added_date: 2026-05-07
---

# Tayda A-6333 - 100K Linear Taper 14mm Potentiometer, Spline Shaft

## Details

- **Location**: Cabinet-3, Bin 7
- **Category**: Potentiometers — Rotary Potentiometers
- **Brand**: Tayda Electronics
- **Part Number**: A-6333
- **Package**: Through-hole, PCB mount
- **Quantity**: 10
- **Status**: Available
- **Price Range**: $1.30
- **Product URL**: [Tayda A-6333](https://www.taydaelectronics.com/rotary-100-ohm-linear-taper-potentiometer-14mm-spline-shaft.html)

## Description

100K ohm linear (type B) taper rotary potentiometer with a 14mm body and T18 spline shaft. The transparent spline shaft makes it easy to confirm shaft engagement when fitting knobs. PCB-mount version with standard 3-pin through-hole footprint.

Widely used in Eurorack synthesizer modules, effects pedals, and general audio circuits. The 100K value is a common choice for CV inputs, attenuators, and tone controls. The spline shaft accepts standard split-shaft knobs (6mm, 18-tooth).

## Specifications

### Electrical Characteristics

- **Resistance**: 100K ohm (100,000Ω)
- **Taper**: Linear (Type B)
- **Power Rating**: 0.1W
- **Rotation Angle**: 300° ± 5°

### Physical Characteristics

- **Body Diameter**: 14mm
- **Shaft Type**: T18 Spline Shaft (transparent)
- **Shaft Diameter**: 6mm
- **Shaft Length**: 17mm (10.5mm + 6.5mm above bushing)
- **Thread Length**: 6.5mm
- **Mounting Hole**: 7.5mm
- **Base Diameter**: 16mm
- **Mounting Type**: Through Hole, PCB mount

### Key Features

- Linear taper — even resistance change across full rotation
- T18 spline shaft accepts standard split-shaft knobs
- Transparent shaft for easy knob alignment
- Standard 14mm body fits common panel cutouts
- PCB-mount legs for direct board soldering

## Image

*No photo yet — please take a photo of the actual component and add it to `binkey-data/attachments/` as `tayda-a-6333-100k-linear-pot-14mm-spline.jpg`, then replace this line with `![Tayda A-6333 100K Pot](../attachments/tayda-a-6333-100k-linear-pot-14mm-spline.jpg)`*

## Pinout Diagram

### Pin Descriptions (3-pin Through-Hole)

| Pin | Name | Function                        |
|-----|------|---------------------------------|
| 1   | CW   | Clockwise end of resistive track |
| 2   | W    | Wiper (output)                  |
| 3   | CCW  | Counter-clockwise end of track  |

## Applications

- Eurorack module CV attenuators and controls
- Audio volume and tone controls
- Effects pedal parameter controls
- Synthesizer filter cutoff and resonance
- General analog signal attenuation

## Circuit Examples

### Basic Voltage Divider / Attenuator

```
VIN ── Pin 1 (CW)
        Wiper (Pin 2) ── VOUT (0 to VIN)
GND ── Pin 3 (CCW)
```

### Eurorack CV Attenuator

```
CV IN ── Pin 1
          Pin 2 (Wiper) ── CV OUT (attenuated)
GND   ── Pin 3
```

## Technical Notes

- Spline shaft requires a split-shaft (T18) knob — D-shaft knobs will not fit
- 14mm body is standard for Eurorack panel pots; pairs with 7mm panel hole
- Linear taper is ideal for CV control; use audio taper (A) for volume controls
- Add a 100Ω series resistor on the wiper when driving op-amp inputs to avoid oscillation

## Tags

#potentiometer #pot #100k #linear #spline-shaft #14mm #pcb-mount #eurorack #audio #cabinet-3 #bin-7 #status-available

## Notes

Pairs well with the T18 split-shaft knobs also in Cabinet 7 Bin 16. For D-shaft knobs, look for Tayda's round-shaft or D-shaft pot variants instead.
