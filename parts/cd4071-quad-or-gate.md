---
type: electronic-component
category: Logic ICs
subcategory: Logic Gates
brand: Various
part_number: CD4071
model: CD4071BE
description: CMOS quad 2-input OR gate IC
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 14-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 18V
current: Low power CMOS
power: Low power consumption
interface: [Digital Logic]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible]
location: [Cabinet-3/Bin-33/Section-F]
quantity: 1
status: available
price_range: $0.50-1.00
datasheet: https://www.ti.com/lit/ds/symlink/cd4071b.pdf
product_url: https://www.ti.com/product/CD4071B
tags: [logic-ic, or-gate, quad-gate, cmos, cd4071, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# CD4071 - CMOS Quad 2-Input OR Gate

## Details

- **Location**: Cabinet-3, Bin 33, Section F
- **Category**: Logic ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: CD4071 / CD4071BE
- **Package**: 14-DIP
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $0.50-1.00
- **Datasheet**: [CD4071B Datasheet](https://www.ti.com/lit/ds/symlink/cd4071b.pdf)
- **Product URL**: https://www.ti.com/product/CD4071B

## Description

The CD4071 is a CMOS quad 2-input OR gate IC containing four independent 2-input OR gates. Each gate performs the logical OR function where the output is HIGH (1) when one or both inputs are HIGH (1), and LOW (0) only when both inputs are LOW (0). This device is part of the 4000B series CMOS logic family and offers wide operating voltage range, high noise immunity, and very low power consumption.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 3V ~ 18V (wide voltage range)
- **Supply Current**: Very low (µA range in static conditions)
- **Input High Voltage**: 0.7 × VDD (typical)
- **Input Low Voltage**: 0.3 × VDD (typical)
- **Output Current**: ±10mA (typical)
- **Propagation Delay**: ~50ns @ 10V, ~100ns @ 5V
- **Noise Immunity**: 45% of VDD

### Physical Characteristics  
- **Package**: 14-DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -55°C to +125°C

### Key Features
- Four independent 2-input OR gates
- Wide operating voltage range (3V-18V)
- High noise immunity
- Low power CMOS technology
- TTL compatible inputs and outputs

## Pinout Diagram

```
    CD4071 14-Pin DIP
    ┌─────────────┐
 A1 │1         14│ VDD
 B1 │2         13│ A4
 Y1 │3         12│ B4
 A2 │4         11│ Y4
 B2 │5         10│ A3
 Y2 │6          9│ B3
VSS │7          8│ Y3
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | A1   | Gate 1 input A |
| 2   | B1   | Gate 1 input B |
| 3   | Y1   | Gate 1 output |
| 4   | A2   | Gate 2 input A |
| 5   | B2   | Gate 2 input B |
| 6   | Y2   | Gate 2 output |
| 7   | VSS  | Ground (0V) |
| 8   | Y3   | Gate 3 output |
| 9   | B3   | Gate 3 input B |
| 10  | A3   | Gate 3 input A |
| 11  | Y4   | Gate 4 output |
| 12  | B4   | Gate 4 input B |
| 13  | A4   | Gate 4 input A |
| 14  | VDD  | Positive power supply |

## Logic Function

**OR Gate Truth Table:**
| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**Boolean Expression**: Y = A + B (where + represents logical OR)

## Applications

Common use cases for the CD4071:
- Digital logic circuits and Boolean algebra implementation
- Signal combining and selection circuits
- Alarm and security systems (multiple trigger inputs)
- Control logic for automation systems
- Interface circuits between different logic families
- Educational projects demonstrating OR gate functionality
- Building complex logic functions using basic gates

## Circuit Examples

### Basic OR Gate Circuit
```
VDD (Pin 14) ---- +5V to +18V
VSS (Pin 7) ----- Ground
Input A (Pin 1) - Logic signal A
Input B (Pin 2) - Logic signal B
Output Y (Pin 3) - A OR B result
```

### Multiple Input Alarm System
```
Sensor 1 ----[A1]---\
                     OR Gate 1 ---- Alarm Output
Sensor 2 ----[B1]---/

Sensor 3 ----[A2]---\
                     OR Gate 2 ---- Status LED
Sensor 4 ----[B2]---/
```

## Technical Notes

Important considerations for the CD4071:
- **Input Protection**: CMOS inputs are sensitive to static discharge
- **Unused Inputs**: Tie unused inputs to VDD or VSS to prevent floating
- **Power Supply Decoupling**: Use 0.1µF capacitor between VDD and VSS
- **Logic Levels**: Ensure input signals are within CMOS logic level specifications
- **Fan-out**: Consider current drive capability when connecting to multiple inputs

## Tags

logic-ic, or-gate, quad-gate, cmos, cd4071 #cabinet-3 #bin-33 #status-available

## Notes

The CD4071 is a fundamental building block in digital logic design and part of the widely-used 4000B series CMOS logic family. OR gates are essential for implementing Boolean logic functions and are commonly used in control circuits, alarm systems, and digital signal processing. This single IC provides four independent OR gates, making it cost-effective for projects requiring multiple OR operations. The wide operating voltage range makes it suitable for both 5V and higher voltage applications, and its CMOS technology ensures very low power consumption, making it ideal for battery-powered projects.
