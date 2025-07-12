---
type: electronic-component
category: Logic ICs
subcategory: Counters
brand: Texas Instruments
part_number: CD4040BE
model: CD4040BE
description: 12-bit binary ripple carry counter IC
manufacturer: Texas Instruments
package: 16-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 18V
current: Low power CMOS
power: Low power consumption
interface: [Digital Logic]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible]
location: [Cabinet-3/Bin-34/Section-E]
quantity: 9
status: available
price_range: $0.91
datasheet: https://www.ti.com/general/docs/suppproductinfo.tsp?distId=10&gotoUrl=https%3A%2F%2Fwww.ti.com%2Flit%2Fgpn%2Fcd4020b
product_url: https://www.digikey.com/en/products/detail/texas-instruments/CD4040BE/67285
tags:
  [
    logic-ic,
    counter,
    binary-counter,
    cmos,
    texas-instruments,
    cabinet-3,
    bin-34,
    status-available,
  ]
date_added: 2025-01-12
---

# CD4040BE - 12-Bit Binary Counter

## Details

- **Location**: Cabinet-3, Bin 34, Section E
- **Category**: Logic ICs
- **Brand**: Texas Instruments
- **Part Number**: CD4040BE
- **Package**: 16-DIP
- **Quantity**: 9
- **Status**: Available
- **Price Range**: $0.91
- **Datasheet**: [CD4040BE Datasheet](https://www.ti.com/general/docs/suppproductinfo.tsp?distId=10&gotoUrl=https%3A%2F%2Fwww.ti.com%2Flit%2Fgpn%2Fcd4020b)
- **Product URL**: https://www.digikey.com/en/products/detail/texas-instruments/CD4040BE/67285

## Description

The CD4040BE is a 12-stage binary ripple carry counter IC from Texas Instruments. This CMOS logic device counts binary pulses applied to its clock input and provides 12 separate output stages (Q1-Q12) representing different binary divisions. It's commonly used in frequency division, timing circuits, and digital counting applications where multiple binary outputs are needed.

## Specifications

### Electrical Characteristics

- **Operating Voltage**: 3V ~ 18V
- **Current**: Low power CMOS consumption
- **Power**: Low power consumption
- **Interface**: Digital Logic
- **Count Rate**: 12 MHz maximum
- **Trigger Type**: Negative Edge

### Physical Characteristics

- **Package**: 16-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 16-pin DIP package
- **Operating Temperature**: -55°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features

- 12-bit binary ripple carry counter
- Asynchronous reset capability
- Clock inhibit function
- CMOS technology for low power consumption
- Wide operating voltage range (3V-18V)

## Image

_Standard 16-pin DIP package IC - CD4040BE markings on top with manufacturer logo_

## Pinout Diagram

### Pin Descriptions

| Pin | Name          | Function                 |
| --- | ------------- | ------------------------ |
| 1   | Q4            | Output bit 4             |
| 2   | Q5            | Output bit 5             |
| 3   | Q6            | Output bit 6             |
| 4   | Q7            | Output bit 7             |
| 5   | Q8            | Output bit 8             |
| 6   | Q9            | Output bit 9             |
| 7   | Q10           | Output bit 10            |
| 8   | GND           | Ground                   |
| 9   | Q11           | Output bit 11            |
| 10  | Q12           | Output bit 12            |
| 11  | Reset         | Asynchronous reset input |
| 12  | Clock Inhibit | Disables clock when high |
| 13  | Clock         | Clock input              |
| 14  | Q1            | Output bit 1             |
| 15  | Q2            | Output bit 2             |
| 16  | VDD           | Positive power supply    |

## Applications

Common use cases and applications for this component:

- Frequency dividers and prescalers
- Digital timing circuits
- Event counters
- Clock generation circuits
- Binary sequence generators
- Pulse counting applications

## Circuit Examples

### Basic Counter Circuit

```
VDD (Pin 16) ---- +5V to +15V
GND (Pin 8)  ---- Ground
Clock (Pin 13) -- Input clock signal
Reset (Pin 11) -- Reset control (active high)
Clock Inhibit (Pin 12) -- Clock disable (active high)
Q1-Q12 (Various pins) -- Binary outputs
```

### Frequency Divider Usage

```
Input frequency at Clock pin divides by:
Q1: ÷2, Q2: ÷4, Q3: ÷8, Q4: ÷16, Q5: ÷32, Q6: ÷64
Q7: ÷128, Q8: ÷256, Q9: ÷512, Q10: ÷1024, Q11: ÷2048, Q12: ÷4096
```

## Technical Notes

Important technical considerations and features:

- Ripple carry design means outputs change sequentially, not simultaneously
- Reset input is asynchronous and active high
- Clock inhibit allows pausing the counter without losing count
- All outputs are buffered and can drive standard CMOS/TTL loads
- Maximum count is 4095 (2^12 - 1) before rolling over to 0

## Tags

logic-ic, counter, binary-counter, cmos, texas-instruments #cabinet-3 #bin-34 #status-available

## Notes

This is a classic CMOS counter IC that's been widely used in digital electronics for decades. The CD4040 series is known for reliability and low power consumption. When using in circuits, ensure proper decoupling capacitors near the power pins and consider the ripple delay when timing is critical. The wide voltage range makes it suitable for both 5V and higher voltage applications.
