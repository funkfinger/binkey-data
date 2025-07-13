---
type: electronic-component
category: Logic ICs
subcategory: Oscillators
brand: National Semiconductor
part_number: LM3909N
model: LM3909N
description: Low voltage LED flasher and oscillator IC capable of operating from single 1.5V battery
manufacturer: National Semiconductor (vintage/discontinued)
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 1.5V ~ 12V (optimized for low voltage)
current: Low power consumption for battery operation
power: Ultra-low power design for long battery life
interface: [LED Driver, Oscillator]
connectivity: [Through-hole pins]
compatibility: [LEDs, Battery circuits, Low voltage applications]
location: [Cabinet-3/Bin-33/Section-A]
quantity: 1
status: available
price_range: $5.00-15.00 (vintage/rare component)
datasheet: https://www.national.com/ds/LM/LM3909.pdf
product_url: https://www.ti.com/product/LM3909 (discontinued)
tags: [led-flasher, oscillator, low-voltage, vintage-ic, national-semiconductor, battery-operated, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# LM3909N - Low Voltage LED Flasher/Oscillator

## Details

- **Location**: Cabinet-3, Bin 33, Section A
- **Category**: Logic ICs
- **Brand**: National Semiconductor (vintage)
- **Part Number**: LM3909N
- **Package**: 8-DIP
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $5.00-15.00 (vintage/rare component)
- **Datasheet**: [LM3909 Datasheet](https://www.national.com/ds/LM/LM3909.pdf)
- **Product URL**: https://www.ti.com/product/LM3909 (discontinued)

## Description

The LM3909N is a vintage integrated circuit from National Semiconductor designed specifically as a low voltage LED flasher and oscillator. This remarkable IC can operate directly from a single 1.5V battery cell, making it ideal for simple battery-powered LED flashing applications. The IC integrates an oscillator and LED driver circuit that manages the charging and discharging cycles to drive LEDs in a pulsed manner, optimizing power consumption for extended battery life. This was a popular choice in vintage electronics projects due to its simplicity and ultra-low voltage operation.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 1.5V ~ 12V (optimized for single cell operation)
- **Minimum Operating Voltage**: 1.5V (single AA/AAA battery)
- **Supply Current**: Very low (designed for long battery life)
- **LED Drive Current**: Sufficient for standard LEDs
- **Flash Rate**: Adjustable via external timing components
- **Operating Temperature**: 0°C to +70°C (typical)

### Physical Characteristics  
- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Vintage Component**: Originally manufactured by National Semiconductor

### Key Features
- Ultra-low voltage operation (1.5V minimum)
- Integrated oscillator and LED driver
- Minimal external components required
- Optimized for battery-powered applications
- Adjustable flash rate with external R/C components
- Classic vintage IC design

## Pinout Diagram

```
    LM3909N 8-Pin DIP
    ┌─────────────┐
V+  │1          8│ LED+
C1  │2          7│ LED-
C2  │3          6│ R/C
GND │4          5│ R/C
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | V+   | Positive power supply (1.5V-12V) |
| 2   | C1   | Timing capacitor connection 1 |
| 3   | C2   | Timing capacitor connection 2 |
| 4   | GND  | Ground connection |
| 5   | R/C  | Resistor/Capacitor timing network |
| 6   | R/C  | Resistor/Capacitor timing network |
| 7   | LED- | LED cathode connection |
| 8   | LED+ | LED anode connection |

## Applications

Common use cases for the LM3909N:
- Battery-powered LED flashers and blinkers
- Low voltage indicator lights
- Emergency signaling devices
- Toy electronics and novelty items
- Educational electronics projects
- Vintage electronics restoration
- Ultra-low power warning indicators
- Single-battery LED circuits

## Circuit Examples

### Basic LED Flasher (1.5V Battery)
```
1.5V Battery + ---- V+ (Pin 1)
1.5V Battery - ---- GND (Pin 4)
LED Anode ---- LED+ (Pin 8)
LED Cathode ---- LED- (Pin 7)
Timing Capacitor (100µF) between C1 (Pin 2) and C2 (Pin 3)
Optional timing resistor between R/C pins (5,6) for rate adjustment
```

### Adjustable Flash Rate Circuit
```
V+ ---- 1.5V to 12V supply
GND ---- Ground
LED between LED+ and LED- pins
Timing capacitor (10µF-1000µF) between C1 and C2
Variable resistor (10kΩ-1MΩ) between R/C pins for rate control
```

### Multiple LED Flasher
```
Standard LM3909N circuit with:
LED+ ---- Multiple LEDs in parallel (with current limiting)
Each LED with appropriate current limiting resistor
Common cathode connection to LED- pin
```

## Technical Notes

Important considerations for the LM3909N:
- **Vintage Component**: This IC is discontinued and may be difficult to source
- **Low Voltage Optimization**: Specifically designed for 1.5V operation
- **Timing Components**: Flash rate determined by external R/C values
- **LED Selection**: Use standard LEDs with appropriate forward voltage
- **Battery Life**: Optimized for maximum battery life in flashing applications
- **Heat Dissipation**: Minimal heat generation due to pulsed operation

## Flash Rate Calculation

The flash rate can be estimated using:
- **Capacitor Value**: Larger capacitors = slower flash rate
- **Resistor Value**: Larger resistors = slower flash rate
- **Typical Range**: 0.1 Hz to 10 Hz depending on R/C values
- **Formula**: Approximate period = R × C (where R is in ohms, C is in farads)

## Tags

led-flasher, oscillator, low-voltage, vintage-ic, national-semiconductor, battery-operated #cabinet-3 #bin-33 #status-available

## Notes

The LM3909N is a fascinating vintage IC that represents elegant engineering from the era when battery-powered electronics required extreme efficiency. Having this component in your collection provides access to ultra-low voltage LED flashing capabilities that are difficult to achieve with modern ICs. It's perfect for vintage electronics restoration projects, educational demonstrations of low-power design, and unique battery-powered LED applications. Since this IC is discontinued, it has become somewhat of a collector's item among electronics enthusiasts. The ability to operate from a single 1.5V battery makes it invaluable for projects where power consumption is critical. This IC showcases how specialized components were designed to solve specific problems with minimal external circuitry.
