---
type: electronic-component
category: Power Management
subcategory: Voltage Regulators
brand: Texas Instruments
part_number: UA723CN
model: UA723CN
description: 150mA adjustable linear voltage regulator with precision reference and current limiting
manufacturer: Texas Instruments
package: 14-DIP
size: 0.300" (7.62mm) width
voltage: 2V ~ 37V adjustable output, up to 40V input
current: 150mA maximum output current
power: Linear voltage regulation with low dropout
interface: [Analog Voltage Regulation]
connectivity: [Through-hole pins]
compatibility: [Power supplies, Voltage references, Current limiters]
location: [Cabinet-3/Bin-33/Section-G]
quantity: 1
status: available
price_range: $1.00-3.00
datasheet: https://www.ti.com/lit/gpn/UA723
product_url: https://www.ti.com/product/UA723/part-details/UA723CN
tags: [voltage-regulator, linear-regulator, adjustable-regulator, precision-regulator, texas-instruments, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# UA723CN - Precision Adjustable Linear Voltage Regulator

## Details

- **Location**: Cabinet-3, Bin 33, Section G
- **Category**: Power Management
- **Brand**: Texas Instruments
- **Part Number**: UA723CN
- **Package**: 14-DIP
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $1.00-3.00
- **Datasheet**: [UA723 Datasheet](https://www.ti.com/lit/gpn/UA723)
- **Product URL**: https://www.ti.com/product/UA723/part-details/UA723CN

## Description

The UA723CN is a precision integrated-circuit voltage regulator featuring high ripple rejection, excellent input and load regulation, excellent temperature stability, and low standby current. The circuit consists of a temperature-compensated reference voltage amplifier, an error amplifier, a 150mA output transistor, and an adjustable-output current limiter. This classic IC can be configured for use in positive or negative power supplies as a series, shunt, switching, or floating regulator, making it extremely versatile for various power supply applications.

## Specifications

### Electrical Characteristics
- **Input Voltage**: Up to 40V maximum
- **Output Voltage**: Adjustable from 2V to 37V
- **Output Current**: 150mA maximum (without external pass transistor)
- **Load Regulation**: Excellent (typically <0.1%)
- **Line Regulation**: Excellent (typically <0.01%/V)
- **Temperature Coefficient**: Low (typically 0.002%/°C)
- **Ripple Rejection**: High (typically 74dB)
- **Standby Current**: Low power consumption

### Physical Characteristics  
- **Package**: 14-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: 0°C to +70°C

### Key Features
- Precision voltage regulation with excellent stability
- Adjustable current limiting capability
- High ripple rejection and low noise
- Temperature-compensated reference voltage
- Can be used in various regulator configurations
- External pass transistor capability for higher currents

## Pinout Diagram

```
    UA723CN 14-Pin DIP
    ┌─────────────────┐
NC  │1             14│ NC
CUR │2             13│ COMP
CUR │3             12│ VC
INV │4             11│ VC+
REF │5             10│ VOUT
NON │6              9│ V+
V-  │7              8│ VREF
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | NC   | No Connection |
| 2   | CUR  | Current Limit (sense resistor connection) |
| 3   | CUR  | Current Limit (sense resistor connection) |
| 4   | INV  | Inverting input of error amplifier |
| 5   | REF  | Reference voltage output (~7.15V) |
| 6   | NON  | Non-inverting input of error amplifier |
| 7   | V-   | Negative supply (ground in positive supplies) |
| 8   | VREF | Reference voltage input |
| 9   | V+   | Positive input voltage |
| 10  | VOUT | Regulated output voltage |
| 11  | VC+  | Collector of output transistor |
| 12  | VC   | Collector of output transistor |
| 13  | COMP | Frequency compensation |
| 14  | NC   | No Connection |

## Applications

Common use cases for the UA723CN:
- Adjustable bench power supplies
- Precision voltage references
- Battery chargers with voltage regulation
- Laboratory and test equipment power supplies
- Current-limited power supplies
- Positive and negative voltage regulators
- Switching regulator control circuits
- High-precision analog circuit power supplies

## Circuit Examples

### Basic Positive Voltage Regulator (5V Output)
```
Input (9-40V) ---- V+ (Pin 9)
Ground ---- V- (Pin 7)
VREF (Pin 8) ---- REF (Pin 5) via 2.2kΩ resistor
VOUT (Pin 10) ---- Output (5V)
Voltage divider: VOUT ---- 2.4kΩ ---- INV (Pin 4) ---- 3.9kΩ ---- Ground
NON (Pin 6) ---- VREF (Pin 8)
VC+ (Pin 11) ---- VC (Pin 12) ---- V+ (Pin 9)
COMP (Pin 13) ---- 100pF capacitor ---- INV (Pin 4)
```

### Current Limited Supply
```
Standard regulator circuit plus:
Current sense resistor (0.6Ω) between VOUT and load
CUR pins (2,3) connected across sense resistor
Provides ~1A current limiting
```

### High Current Regulator (with external pass transistor)
```
External NPN power transistor:
Base ---- VOUT (Pin 10)
Collector ---- Input voltage
Emitter ---- Regulated output
UA723 provides control, external transistor handles current
```

## Programming/Control Examples

### Variable Output Voltage
```
Use potentiometer in voltage divider:
VOUT ---- Fixed resistor ---- Potentiometer ---- Ground
Wiper of potentiometer ---- INV (Pin 4)
Allows continuous adjustment of output voltage
```

### Precision Current Source
```
Configure as current regulator:
Reference voltage across precision resistor
Provides constant current output
Useful for LED drivers and battery charging
```

## Technical Notes

Important considerations for the UA723CN:
- **Heat Dissipation**: Use adequate heat sinking for high power applications
- **Stability**: Frequency compensation may be needed for some configurations
- **Current Limiting**: Built-in current limiting protects against overload
- **External Pass Transistor**: Required for currents >150mA
- **Precision**: Excellent regulation makes it suitable for precision applications
- **Versatility**: Can be configured in many different regulator topologies

## Design Calculations

### Output Voltage Setting
```
VOUT = VREF × (1 + R1/R2)
Where:
- VREF ≈ 7.15V (internal reference)
- R1 = feedback resistor from output to INV pin
- R2 = resistor from INV pin to ground
```

### Current Limiting
```
ILIMIT = 0.6V / RSENSE
Where:
- 0.6V is the voltage across current limit pins
- RSENSE is the current sense resistor value
```

## Tags

voltage-regulator, linear-regulator, adjustable-regulator, precision-regulator, texas-instruments #cabinet-3 #bin-33 #status-available

## Notes

The UA723CN is a classic and highly versatile voltage regulator IC that has been a staple in power supply design for decades. Having this component in your collection provides access to precision voltage regulation with excellent stability and flexibility. It's perfect for building custom power supplies, voltage references, and current-limited supplies. The ability to configure it in various topologies (series, shunt, switching, floating) makes it invaluable for both learning power supply design principles and for practical applications. Despite being an older design, it remains relevant due to its precision, stability, and proven reliability. This IC is excellent for educational projects, precision analog circuits, and anywhere adjustable, stable voltage regulation is needed.
