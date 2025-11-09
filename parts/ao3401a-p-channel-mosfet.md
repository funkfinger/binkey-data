---
type: electronic-component
category: Discrete Semiconductors
subcategory: MOSFETs - P-Channel
brand: Alpha & Omega Semiconductor
part_number: AO3401A
model: AO3401A
description: 30V P-Channel MOSFET, 4A, SOT-23-3 package, general-purpose switching
manufacturer: Alpha & Omega Semiconductor Inc.
package: SOT-23-3
voltage: 30V (VDS)
current: 4A (ID at VGS=-10V)
power: Low power consumption
interface: [Switching, Logic Level]
connectivity: [Through-hole compatible, Surface Mount]
compatibility: [General-purpose switching, Load switching, Power management]
location: [Cabinet-6/Bin-1/Container-A]
quantity: 20+
status: available
price_range: $0.10-0.25 each
datasheet: https://aosmd.com/res/data_sheets/AO3401A.pdf
product_url: https://www.digikey.com/en/products/detail/alpha-omega-semiconductor-inc/AO3401A/1855773
tags: [mosfet, p-channel, 30v, 4a, sot-23, switching, logic-level, alpha-omega, digikey, cabinet-6, bin-1, status-available]
date_added: 2025-11-09
added_date: 2025-11-09
---

# Alpha & Omega Semiconductor AO3401A P-Channel MOSFET

## Details

- **Location**: Cabinet-6, Bin 1, Container A
- **Category**: Discrete Semiconductors
- **Brand**: Alpha & Omega Semiconductor Inc.
- **Part Number**: AO3401A
- **Model**: AO3401A
- **Package**: SOT-23-3
- **Quantity**: 20+ units
- **Status**: Available
- **Price Range**: $0.10-0.25 per unit
- **Datasheet**: [AO3401A Datasheet](https://aosmd.com/res/data_sheets/AO3401A.pdf)
- **Product URL**: [DigiKey - AO3401A](https://www.digikey.com/en/products/detail/alpha-omega-semiconductor-inc/AO3401A/1855773)

## Description

The AO3401A is a 30V P-Channel MOSFET from Alpha & Omega Semiconductor designed for general-purpose switching applications. With a maximum drain current of 4A and logic-level gate drive capability, this device is ideal for load switching, power management, and control applications. The compact SOT-23-3 surface-mount package makes it suitable for space-constrained designs.

## Specifications

### Electrical Characteristics

- **Drain-Source Voltage (VDS)**: 30V (maximum)
- **Drain Current (ID)**: 4A (at VGS = -10V)
- **Gate-Source Voltage (VGS)**: ±20V (maximum)
- **Gate Threshold Voltage (VGS(th))**: -0.5V to -1.5V (typical)
- **On-State Resistance (RDS(on))**: 0.6Ω (typical at VGS = -10V)
- **Power Dissipation**: Depends on application
- **Operating Temperature**: -55°C to +150°C
- **Junction Temperature**: 150°C (maximum)

### Mechanical Characteristics

- **Package**: SOT-23-3 (Surface Mount)
- **Pin Count**: 3 pins
- **Mounting**: Surface Mount
- **RoHS Compliant**: Yes

### Pin Configuration

Standard SOT-23-3 P-Channel MOSFET:
```
Pin 1: Gate (G)
Pin 2: Source (S)
Pin 3: Drain (D)
```

## Applications

- Load switching and control
- Power management circuits
- Battery protection circuits
- LED driver circuits
- Motor control
- General-purpose switching
- Logic-level switching applications
- Portable device power management

## Key Features

- **30V Rating**: Suitable for various supply voltages
- **4A Drain Current**: Adequate for moderate power switching
- **Logic-Level Gate Drive**: Can be driven directly from microcontroller outputs
- **Low On-Resistance**: 0.6Ω typical reduces power dissipation
- **Compact Package**: SOT-23-3 saves PCB space
- **General-Purpose Design**: Versatile for many applications

## Circuit Integration

### Basic Load Switching Circuit

Connect for P-Channel switching:
- Gate to control signal (logic level, 0V to -5V)
- Source to positive supply
- Drain to load
- Load return to ground

### Gate Drive Considerations

- Gate must be pulled to source voltage (or more negative) to turn OFF
- Gate pulled toward ground (or less negative) to turn ON
- Typical gate drive voltage: 0V to -5V for logic-level operation
- Pull-up resistor recommended on gate for reliable OFF state

## Technical Notes

- P-Channel device: Gate must be negative relative to source to conduct
- Logic-level gate drive simplifies circuit design
- Low on-resistance minimizes power dissipation
- Suitable for both DC and switching applications
- Thermal management may be required for high-current applications
- Gate protection diode recommended for inductive loads

## Tags

mosfet, p-channel, 30v, 4a, sot-23, switching, logic-level, alpha-omega, digikey, cabinet-6, bin-1, status-available

## Notes

Versatile P-Channel MOSFETs for general-purpose switching applications. The AO3401A's combination of 30V rating, 4A current capability, and logic-level gate drive makes it ideal for microcontroller-based switching circuits. Stock of 20+ units provides excellent supply for multiple projects and prototyping work.

