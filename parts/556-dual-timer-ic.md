---
type: electronic-component
category: Analog ICs
subcategory: Timers
brand: Various
part_number: NE556
model: 556
description: Dual precision timing circuit IC (two 555 timers in one package)
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 14-DIP
size: 0.300" (7.62mm) width
voltage: 4.5V ~ 16V
current: 6mA supply current (2x 555)
power: Low power consumption
interface: [Analog, Digital Logic]
connectivity: [Through-hole pins]
compatibility: [TTL, CMOS Logic]
location: [Cabinet-3/Bin-36/Section-B]
quantity: 6
status: available
price_range: $0.50-1.25
datasheet: https://www.ti.com/lit/ds/symlink/ne556.pdf
product_url: https://www.ti.com/product/NE556
tags: [timer-ic, analog-ic, dual-timer, precision-timer, astable, monostable, 556, cabinet-3, bin-36, status-available]
date_added: 2025-01-12
---

# 556 Dual Timer IC - Dual Precision Timing Circuit

## Details

- **Location**: Cabinet-3, Bin 36, Section B
- **Category**: Analog ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: NE556 / LM556
- **Package**: 14-DIP
- **Quantity**: 6
- **Status**: Available
- **Price Range**: $0.50-1.25
- **Datasheet**: [NE556 Datasheet](https://www.ti.com/lit/ds/symlink/ne556.pdf)
- **Product URL**: https://www.ti.com/product/NE556

## Description

The 556 timer is a dual version of the popular 555 timer IC, containing two independent 555 timer circuits in a single 14-pin package. Each timer section operates identically to a standard 555 timer and can be configured independently as astable multivibrators (oscillators), monostable multivibrators (one-shots), or bistable multivibrators (flip-flops). This IC is ideal for applications requiring two timing functions in a compact package.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 4.5V ~ 16V
- **Supply Current**: 6mA (typical, both timers)
- **Output Current**: 200mA per timer (source/sink)
- **Frequency Range**: 0.1Hz to 500kHz per timer
- **Temperature Stability**: 50ppm/°C
- **Timing Accuracy**: ±1% (with proper components)

### Physical Characteristics  
- **Package**: 14-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 14-pin DIP package
- **Operating Temperature**: 0°C ~ 70°C (commercial), -55°C ~ 125°C (military)
- **Mounting Type**: Through Hole

### Key Features
- Two independent 555 timer circuits in one package
- Each timer can operate in astable or monostable mode
- High output current capability (200mA per timer)
- Wide supply voltage range (4.5V-16V)
- Temperature stable operation
- TTL and CMOS compatible outputs
- Shared power supply pins
- Independent control for each timer

## Image

*Image needed - Standard 14-pin DIP package IC with NE556 or LM556 markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (14-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | GND | Ground (shared) |
| 2 | TRIGGER 1 | Timer 1 trigger input (active low) |
| 3 | OUTPUT 1 | Timer 1 output |
| 4 | RESET 1 | Timer 1 reset input (active low) |
| 5 | CONTROL 1 | Timer 1 control voltage input |
| 6 | THRESHOLD 1 | Timer 1 threshold input |
| 7 | DISCHARGE 1 | Timer 1 open collector discharge output |
| 8 | VCC | Positive power supply (shared) |
| 9 | DISCHARGE 2 | Timer 2 open collector discharge output |
| 10 | THRESHOLD 2 | Timer 2 threshold input |
| 11 | CONTROL 2 | Timer 2 control voltage input |
| 12 | RESET 2 | Timer 2 reset input (active low) |
| 13 | OUTPUT 2 | Timer 2 output |
| 14 | TRIGGER 2 | Timer 2 trigger input (active low) |

## Applications

Common use cases and applications for this component:
- Dual LED flashers with different rates
- Sequential timing circuits
- Dual tone generators
- PWM circuits with two channels
- Clock generators for digital systems
- Dual delay circuits
- Missing pulse detectors (dual channel)
- Complementary oscillators

## Circuit Examples

### Dual Astable Oscillator (Different Frequencies)
```
VCC (Pin 8) ---- +5V to +15V
GND (Pin 1) ---- Ground

Timer 1:
RESET 1 (Pin 4) -- VCC
CONTROL 1 (Pin 5) - 0.01µF capacitor to ground
TRIGGER 1 (Pin 2) - Connected to THRESHOLD 1 (Pin 6)
THRESHOLD 1 (Pin 6) - R1A+R2A to VCC, C1A to ground
DISCHARGE 1 (Pin 7) - R2A to THRESHOLD 1
OUTPUT 1 (Pin 3) -- Output signal 1

Timer 2:
RESET 2 (Pin 12) -- VCC
CONTROL 2 (Pin 11) - 0.01µF capacitor to ground
TRIGGER 2 (Pin 14) - Connected to THRESHOLD 2 (Pin 10)
THRESHOLD 2 (Pin 10) - R1B+R2B to VCC, C1B to ground
DISCHARGE 2 (Pin 9) - R2B to THRESHOLD 2
OUTPUT 2 (Pin 13) -- Output signal 2
```

### Sequential Timer (One-Shot Chain)
```
Timer 1 configured as astable (clock generator)
Timer 2 configured as monostable (triggered by Timer 1 output)
OUTPUT 1 (Pin 3) -> TRIGGER 2 (Pin 14) through coupling capacitor
Creates sequential timing pulses
```

## Technical Notes

Important technical considerations and features:
- Each timer section operates independently with identical characteristics to 555
- Use 0.01µF bypass capacitors on both CONTROL pins (Pins 5 & 11)
- RESET pins (Pins 4 & 12) should be tied to VCC if not used for control
- Each output can source or sink up to 200mA independently
- Shared power supply pins reduce package size but both timers share supply current
- Cross-coupling between timers can create complex timing relationships
- Maximum frequency per timer limited by propagation delays (~500kHz)
- Both DISCHARGE pins provide paths to discharge respective timing capacitors
- Can be used to create complementary or sequential timing signals

## Tags

timer-ic, analog-ic, dual-timer, precision-timer, astable, monostable, 556 #cabinet-3 #bin-36 #status-available

## Notes

The 556 dual timer is essentially two 555 timers in a single package, making it ideal for applications requiring two timing functions. It's particularly useful for creating sequential timing circuits, dual-rate flashers, or complementary oscillators. The shared power supply pins make it more compact than using two separate 555 ICs, while maintaining full independence of each timer section. Having 6 of these ICs provides good flexibility for complex timing projects that require multiple synchronized or independent timing functions.
