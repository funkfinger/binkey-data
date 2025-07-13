---
type: electronic-component
category: Logic ICs
subcategory: Buffers
brand: Various
part_number: CD4050
model: CD4050
description: CMOS hex non-inverting buffer IC
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 16-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 15V
current: Low power CMOS
power: Very low power consumption
interface: [Digital Logic]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Logic]
location: [Cabinet-3/Bin-35/Section-C]
quantity: 12
status: available
price_range: $0.50-1.50
datasheet: https://www.ti.com/lit/ds/symlink/cd4050b.pdf
product_url: https://www.ti.com/product/CD4050B
tags: [logic-ic, buffer, cmos, hex-buffer, non-inverting, cd4050, cabinet-3, bin-35, status-available]
date_added: 2025-01-12
---

# CD4050 - CMOS Hex Non-Inverting Buffer

## Details

- **Location**: Cabinet-3, Bin 35, Section C
- **Category**: Logic ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: CD4050 / CD4050B
- **Package**: 16-DIP
- **Quantity**: 12
- **Status**: Available
- **Price Range**: $0.50-1.50
- **Datasheet**: [CD4050B Datasheet](https://www.ti.com/lit/ds/symlink/cd4050b.pdf)
- **Product URL**: https://www.ti.com/product/CD4050B

## Description

The CD4050 is a CMOS hex non-inverting buffer IC containing six independent buffer gates. Each buffer provides signal amplification and isolation without signal inversion, making it ideal for driving loads that require more current than typical logic gates can provide. The CMOS technology offers high noise immunity, wide operating voltage range, and very low power consumption.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 3V ~ 15V (wide voltage range)
- **Supply Current**: Very low (µA range in static conditions)
- **Input High Voltage**: 0.7 × VDD (typical)
- **Input Low Voltage**: 0.3 × VDD (typical)
- **Output Current**: ±10mA (typical)
- **Propagation Delay**: ~50ns @ 10V, ~100ns @ 5V
- **Noise Immunity**: 45% of VDD

### Physical Characteristics  
- **Package**: 16-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 16-pin DIP package
- **Operating Temperature**: -55°C ~ 125°C (extended range)
- **Mounting Type**: Through Hole

### Key Features
- Six independent non-inverting buffers
- Wide operating voltage range (3V-15V)
- High noise immunity
- Low power consumption (CMOS technology)
- TTL and CMOS compatible inputs
- High output drive capability
- Schmitt trigger inputs (some variants)

## Image

*Image needed - Standard 16-pin DIP package IC with CD4050 markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (16-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | A | Input A |
| 2 | Y1 | Output A |
| 3 | B | Input B |
| 4 | Y2 | Output B |
| 5 | C | Input C |
| 6 | Y3 | Output C |
| 7 | VSS | Ground |
| 8 | Y4 | Output D |
| 9 | D | Input D |
| 10 | Y5 | Output E |
| 11 | E | Input E |
| 12 | Y6 | Output F |
| 13 | F | Input F |
| 14 | VDD | Power supply (+3V to +15V) |
| 15 | NC | Not connected |
| 16 | NC | Not connected |

## Applications

Common use cases and applications for this component:
- Signal buffering and amplification
- Logic level conversion (voltage translation)
- Driving high-capacitance loads
- Clock signal distribution
- Interface between different logic families
- LED drivers (with current limiting resistors)
- Signal isolation and protection
- Fan-out expansion for logic signals

## Circuit Examples

### Basic Buffer Application
```
VDD (Pin 14) ---- +5V to +15V
VSS (Pin 7) ----- Ground
Input A (Pin 1) - Logic signal input
Output Y1 (Pin 2) - Buffered output (same logic level as input)
```

### LED Driver Circuit
```
Input (Pin 1) --- Logic signal
Output (Pin 2) -- Current limiting resistor -- LED -- Ground
Each buffer can drive LEDs with appropriate current limiting
```

### Logic Level Translation
```
3.3V Logic ---- Input (Pin 1)
VDD = 5V
Output (Pin 2) ---- 5V Logic level output
Useful for interfacing 3.3V and 5V systems
```

## Technical Notes

Important technical considerations and features:
- **Non-Inverting**: Output follows input (Y = A, no inversion)
- **High Input Impedance**: CMOS inputs draw virtually no current
- **Wide Voltage Range**: Can operate from 3V to 15V supply
- **Power Supply Decoupling**: Use 0.1µF ceramic capacitor near VDD pin
- **Unused Inputs**: Should be tied to VDD or VSS, never left floating
- **Output Drive**: Can source/sink up to 10mA per output
- **Speed vs. Voltage**: Higher supply voltage = faster switching
- **ESD Protection**: Built-in protection diodes on all pins

## Comparison with Related ICs

- **CD4049**: Hex inverting buffer (inverts signal)
- **CD4050**: Hex non-inverting buffer (this IC)
- **74HC244**: Octal buffer with tri-state outputs
- **74HC125**: Quad tri-state buffer
- **CD4069**: Hex inverter (single input/output per gate)

## Logic Function

For each buffer:
- **Input Low (0)** → **Output Low (0)**
- **Input High (1)** → **Output High (1)**
- **Truth Table**: Y = A (non-inverting)

## Tags

logic-ic, buffer, cmos, hex-buffer, non-inverting, cd4050 #cabinet-3 #bin-35 #status-available

## Notes

The CD4050 is a fundamental building block in digital electronics, particularly useful when you need to buffer or amplify logic signals without changing their polarity. Its wide voltage range makes it versatile for interfacing between different voltage domains, and the CMOS technology ensures very low power consumption. The six independent buffers in a single package make it cost-effective for multiple signal buffering applications. Having 12 of these ICs provides excellent flexibility for various digital logic projects requiring signal buffering, level translation, or load driving capabilities.
