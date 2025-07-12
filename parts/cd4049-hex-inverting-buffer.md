---
type: electronic-component
category: Logic ICs
subcategory: Buffers/Inverters
brand: Texas Instruments
part_number: CD4049
model: CD4049UB
description: CMOS hex inverting buffer/converter IC
manufacturer: Texas Instruments
package: 16-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 18V
current: Low power CMOS
power: Low power consumption
interface: [Digital Logic]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible]
location: [Cabinet-3/Bin-34/Section-F]
quantity: 5
status: available
price_range: $0.50-1.00
datasheet: https://www.ti.com/lit/ds/symlink/cd4049ub.pdf
product_url: https://www.ti.com/product/CD4049UB
tags:
  [
    logic-ic,
    buffer,
    inverter,
    hex-buffer,
    cmos,
    texas-instruments,
    cabinet-3,
    bin-34,
    status-available,
  ]
date_added: 2025-01-12
---

# CD4049 - CMOS Hex Inverting Buffer

## Details

- **Location**: Cabinet-3, Bin 34, Section F
- **Category**: Logic ICs
- **Brand**: Texas Instruments
- **Part Number**: CD4049
- **Package**: 16-DIP
- **Quantity**: 5
- **Status**: Available
- **Price Range**: $0.50-1.00
- **Datasheet**: [CD4049UB Datasheet](https://www.ti.com/lit/ds/symlink/cd4049ub.pdf)
- **Product URL**: https://www.ti.com/product/CD4049UB

## Description

The CD4049 is a CMOS hex inverting buffer/converter IC from Texas Instruments. This device contains six independent inverting buffers, each capable of converting logic levels and providing signal inversion. It's commonly used for logic level conversion, signal buffering, and interfacing between different logic families. The wide operating voltage range makes it suitable for various applications.

## Specifications

### Electrical Characteristics

- **Operating Voltage**: 3V ~ 18V
- **Current**: Low power CMOS consumption
- **Power**: Low power consumption
- **Interface**: Digital Logic
- **Logic Type**: Inverting Buffer
- **Number of Buffers**: 6 (Hex)

### Physical Characteristics

- **Package**: 16-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 16-pin DIP package
- **Operating Temperature**: -55°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features

- Six independent inverting buffers
- Wide operating voltage range (3V-18V)
- CMOS technology for low power consumption
- TTL compatible when powered at 5V or higher
- High noise immunity
- Symmetrical output characteristics

## Image

_Image needed - Standard 16-pin DIP package IC with CD4049 markings on top and manufacturer logo. Consider taking a photo of actual component for documentation._

## Pinout Diagram

### Pin Descriptions

| Pin | Name      | Function                 |
| --- | --------- | ------------------------ |
| 1   | Input A   | Buffer A input           |
| 2   | Output A' | Buffer A inverted output |
| 3   | Input B   | Buffer B input           |
| 4   | Output B' | Buffer B inverted output |
| 5   | Input C   | Buffer C input           |
| 6   | Output C' | Buffer C inverted output |
| 7   | VSS       | Ground                   |
| 8   | NC        | Not connected            |
| 9   | Output F' | Buffer F inverted output |
| 10  | Input F   | Buffer F input           |
| 11  | Output E' | Buffer E inverted output |
| 12  | Input E   | Buffer E input           |
| 13  | Output D' | Buffer D inverted output |
| 14  | Input D   | Buffer D input           |
| 15  | NC        | Not connected            |
| 16  | VDD       | Positive power supply    |

## Applications

Common use cases and applications for this component:

- Logic level conversion between different voltage systems
- Signal buffering and fan-out expansion
- Logic signal inversion
- Interface circuits between CMOS and TTL
- Clock signal buffering and inversion
- General purpose digital logic applications

## Circuit Examples

### Basic Inverter Circuit

```
VDD (Pin 16) ---- +3V to +18V
VSS (Pin 7)  ---- Ground
Input (Pin 1) --- Logic input signal
Output (Pin 2) -- Inverted logic output
```

### Level Conversion Example

```
High voltage logic (12V) -> CD4049 input
CD4049 powered at 5V -> TTL compatible output
Useful for interfacing 12V CMOS to 5V TTL systems
```

## Technical Notes

Important technical considerations and features:

- All six buffers are independent and can be used separately
- Unused inputs should be tied to VDD or VSS to prevent floating
- Output can drive standard CMOS and TTL loads
- Propagation delay is typically 50-250ns depending on supply voltage
- Input protection diodes prevent damage from static discharge

## Tags

logic-ic, buffer, inverter, hex-buffer, cmos, texas-instruments #cabinet-3 #bin-34 #status-available

## Notes

The CD4049 is part of the CD4000 series of CMOS logic ICs and is widely used for logic level conversion applications. It's particularly useful when interfacing between systems operating at different voltage levels. The device can operate over a wide voltage range, making it versatile for various applications. When using multiple buffers, ensure proper power supply decoupling with capacitors near the power pins.
