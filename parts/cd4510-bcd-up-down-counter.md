---
type: electronic-component
category: Logic ICs
subcategory: Counters
brand: Texas Instruments
part_number: CD4510
model: CD4510B
description: CMOS presettable BCD up/down counter IC
manufacturer: Texas Instruments
package: 16-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 18V
current: Low power CMOS
power: Low power consumption
interface: [Digital Logic, BCD Input/Output]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible]
location: [Cabinet-3/Bin-35/Section-B]
quantity: 30
status: available
price_range: $0.75-1.25
datasheet: https://www.ti.com/lit/ds/symlink/cd4510b.pdf
product_url: https://www.ti.com/product/CD4510B
tags: [logic-ic, counter, bcd-counter, up-down-counter, presettable, cmos, texas-instruments, cabinet-3, bin-35, status-available]
date_added: 2025-01-12
---

# CD4510 - CMOS Presettable BCD Up/Down Counter

## Details

- **Location**: Cabinet-3, Bin 35, Section B
- **Category**: Logic ICs
- **Brand**: Texas Instruments
- **Part Number**: CD4510
- **Package**: 16-DIP
- **Quantity**: 30
- **Status**: Available
- **Price Range**: $0.75-1.25
- **Datasheet**: [CD4510B Datasheet](https://www.ti.com/lit/ds/symlink/cd4510b.pdf)
- **Product URL**: https://www.ti.com/product/CD4510B

## Description

The CD4510 is a CMOS presettable BCD (Binary Coded Decimal) up/down counter IC from Texas Instruments. This versatile counter can count up or down in BCD format (0-9) and can be preset to any BCD value. It features synchronous operation and is ideal for applications requiring decimal counting, frequency division, and digital control systems.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 3V ~ 18V
- **Current**: Low power CMOS consumption
- **Power**: Low power consumption
- **Interface**: BCD Input/Output, Digital Logic
- **Technology**: CMOS
- **Count Range**: 0-9 (BCD)

### Physical Characteristics  
- **Package**: 16-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 16-pin DIP package
- **Operating Temperature**: -55°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features
- Presettable BCD up/down counter
- Synchronous operation with clock input
- Up/down count control
- Preset enable for loading specific values
- Carry out and borrow out for cascading
- CMOS technology for low power consumption
- Wide operating voltage range (3V-18V)

## Image

*Image needed - Standard 16-pin DIP package IC with CD4510 markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (16-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | Q0 | BCD output bit 0 (LSB) |
| 2 | Q1 | BCD output bit 1 |
| 3 | Q2 | BCD output bit 2 |
| 4 | Q3 | BCD output bit 3 (MSB) |
| 5 | P0 | Preset input bit 0 (LSB) |
| 6 | P1 | Preset input bit 1 |
| 7 | P2 | Preset input bit 2 |
| 8 | VSS | Ground |
| 9 | P3 | Preset input bit 3 (MSB) |
| 10 | PE | Preset Enable (active high) |
| 11 | U/D | Up/Down control (high=up, low=down) |
| 12 | CLK | Clock input |
| 13 | CO | Carry Out (for cascading) |
| 14 | BO | Borrow Out (for cascading) |
| 15 | RST | Reset input (active high) |
| 16 | VDD | Positive power supply |

## Applications

Common use cases and applications for this component:
- Digital frequency counters
- Event counters and timers
- BCD data processing systems
- Digital clocks and time displays
- Process control counters
- Cascaded multi-digit counters
- Programmable dividers
- Industrial control systems

## Circuit Examples

### Basic BCD Counter
```
VDD (Pin 16) ---- +5V to +18V
VSS (Pin 8)  ---- Ground
CLK (Pin 12) ---- Clock input signal
U/D (Pin 11) ---- Up/Down control (high=up, low=down)
RST (Pin 15) ---- Reset control (tie low if not used)
PE (Pin 10)  ---- Preset enable (tie low if not used)
Q0-Q3 (Pins 1-4) -- BCD output to display decoder
```

### Cascaded Multi-Digit Counter
```
Counter 1 CO (Pin 13) -> Counter 2 CLK (Pin 12)
Counter 1 BO (Pin 14) -> Counter 2 U/D (Pin 11)
Connect all reset and control signals in parallel
```

## Technical Notes

Important technical considerations and features:
- Counts in BCD format (0000 to 1001, representing 0-9)
- Preset inputs (P0-P3) allow loading any BCD value when PE is high
- Up/Down control determines counting direction
- Carry Out (CO) goes high when counting up from 9 to 0
- Borrow Out (BO) goes high when counting down from 0 to 9
- Reset input clears counter to 0000 when high
- Synchronous operation ensures clean counting transitions
- Can be cascaded for multi-digit BCD counting
- Proper power supply decoupling recommended near VDD/VSS pins

## Tags

logic-ic, counter, bcd-counter, up-down-counter, presettable, cmos, texas-instruments #cabinet-3 #bin-35 #status-available

## Notes

The CD4510 is an essential IC for BCD counting applications and digital systems requiring decimal counting. Its presettable feature makes it very flexible for applications where you need to start counting from a specific value. The up/down capability and cascading outputs make it ideal for building multi-digit counters and complex counting systems. This IC is commonly used in digital clocks, frequency counters, and industrial control applications.
