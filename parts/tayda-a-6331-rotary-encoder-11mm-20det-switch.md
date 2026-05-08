---
type: electronic-component
category: Encoders & Input Devices
subcategory: Rotary Encoders
brand: Tayda Electronics
part_number: A-6331
model: Rotary Encoder 11mm 20 Detents D-Shaft With Switch Vertical
description: EC11-compatible 11mm rotary encoder, 20 detents, 6mm D-shaft, integrated push switch, vertical terminals
manufacturer: Tayda Electronics
package: Through-hole, vertical terminals
size: 11mm body, 6mm D-shaft 15mm length
voltage: 5VDC (encoder), 16VDC (switch)
current: 10mA (encoder)
power: Low power
interface: [Quadrature, GPIO]
connectivity: [Through-hole pins]
compatibility: [Arduino, Raspberry Pi, Microcontrollers, Eurorack]
location: [Cabinet-3/Bin-32/Section-E]
quantity: 10
status: available
price_range: $1.59
datasheet: https://www.mouser.com/datasheet/2/15/EC11-1370808.pdf
product_url: https://www.taydaelectronics.com/rotary-encoder-11mm-20-detents-d-shaft-with-switch-vertical.html
tags: [encoder, rotary-encoder, ec11, 20-detents, d-shaft, switch, quadrature, eurorack, arduino, cabinet-3, bin-32, status-available]
date_added: 2026-05-07
added_date: 2026-05-07
---

# Tayda A-6331 - Rotary Encoder 11mm 20 Detents D-Shaft with Switch

## Details

- **Location**: Cabinet-3, Bin 32, Section E
- **Category**: Encoders & Input Devices — Rotary Encoders
- **Brand**: Tayda Electronics
- **Part Number**: A-6331
- **Package**: Through-hole, vertical terminals
- **Quantity**: 10
- **Status**: Available
- **Price Range**: $1.59
- **Datasheet**: [EC11 Datasheet](https://www.mouser.com/datasheet/2/15/EC11-1370808.pdf)
- **Product URL**: [Tayda A-6331](https://www.taydaelectronics.com/rotary-encoder-11mm-20-detents-d-shaft-with-switch-vertical.html)

## Description

EC11-compatible 11mm rotary encoder with 20 detents per revolution, 6mm D-shaft, and an integrated push-to-click switch. Vertical terminal orientation for PCB mounting. This is a mechanical incremental encoder — it outputs quadrature signals (A/B channels) as the shaft turns, with no fixed start/end position.

Ideal for Eurorack menu navigation, Arduino/microcontroller UI controls, and any application needing endless rotation with click feedback. The integrated switch adds a "select/enter" function without a separate component. Pairs with the D-shaft encoder knobs in Cabinet 7 Bin 15.

## Specifications

### Electrical Characteristics

- **Encoder Voltage**: 5VDC
- **Encoder Current**: 10mA max
- **Switch Rating**: 16VDC, 3A max (SPST momentary)
- **Output Type**: Quadrature (2-channel, A/B)
- **Resolution**: 20 detents per 360° revolution

### Physical Characteristics

- **Body Size**: 11mm
- **Shaft Type**: D-Shaft (flatted)
- **Shaft Diameter**: 6mm
- **Shaft Length**: 15mm
- **Mounting**: Through-hole, PCB mount
- **Terminal Orientation**: Vertical
- **Rotation**: Continuous (360°, no stop)

### Key Features

- 20 mechanical detents for tactile step feedback
- Integrated SPST push switch (click-to-select)
- Continuous rotation — no end stops
- Standard EC11 footprint
- D-shaft accepts matching D-shaft knobs

## Image

*No photo yet — please take a photo of the actual component and add it to `binkey-data/attachments/` as `tayda-a-6331-rotary-encoder-11mm-20det-switch.jpg`, then replace this line with `![Tayda A-6331 Encoder](../attachments/tayda-a-6331-rotary-encoder-11mm-20det-switch.jpg)`*

## Pinout Diagram

### Pin Descriptions (5-pin Through-Hole, Vertical)

| Pin | Name | Function                              |
|-----|------|---------------------------------------|
| 1   | A    | Encoder channel A (quadrature output) |
| 2   | GND  | Encoder ground (common)               |
| 3   | B    | Encoder channel B (quadrature output) |
| 4   | SW   | Switch terminal 1                     |
| 5   | SW   | Switch terminal 2 (momentary, SPST)   |

> Pins 4 & 5 are the push switch — connect one to GND, the other to a GPIO with pull-up.

## Applications

- Eurorack module menu navigation and parameter selection
- Arduino/microcontroller UI rotary controls
- Volume and parameter encoders in audio gear
- Menu navigation in embedded systems
- Motorized fader / endless scroll controls

## Circuit Examples

### Basic Arduino Connection

```
Encoder A (Pin 1) ── GPIO (with pull-up, e.g. D2)
Encoder GND (Pin 2) ── GND
Encoder B (Pin 3) ── GPIO (with pull-up, e.g. D3)
Switch (Pin 4) ── GND
Switch (Pin 5) ── GPIO (with pull-up, e.g. D4)

Use INPUT_PULLUP on all three GPIOs.
```

## Technical Notes

- Add 100nF caps from A and B pins to GND for hardware debouncing
- Pull-up resistors (10K) needed on A, B, and SW pins — use internal pull-ups or external
- Direction determined by which channel leads the other; swap A/B wires to reverse direction
- Switch is fully independent of encoder — connect SW pins like any momentary button

## Tags

#encoder #rotary-encoder #ec11 #20-detents #d-shaft #switch #quadrature #eurorack #arduino #cabinet-3 #bin-32 #status-available

## Notes

EC11-compatible footprint — standard across many brands. The "vertical" variant has terminals pointing straight down for PCB mounting; the horizontal variant has bent terminals for panel/wiring use. D-shaft encoder knobs (Tayda A-6887 black, A-7022 green) are in Cabinet 7 Bin 15.
