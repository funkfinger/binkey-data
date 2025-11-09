---
type: electronic-component
category: Discrete Semiconductors
subcategory: MOSFETs - P-Channel
brand: Toshiba
part_number: SSM3J328R
model: SSM3J328R
description: 20V P-Channel MOSFET, 6A, SOT-23-3 package, logic-level gate drive, power management switch
manufacturer: Toshiba Semiconductor
package: SOT-23-3
voltage: 20V (VDS)
current: 6A (ID at VGS=-10V)
power: Low power consumption
interface: [Switching, Logic Level]
connectivity: [Surface Mount]
compatibility: [Power management, Load switching, General-purpose switching]
location: [Cabinet-6/Bin-1/Container-C]
quantity: 20+
status: available
price_range: $0.15-0.35 each
datasheet: https://www.mouser.com/datasheet/2/408/SSM3J328R_datasheet_en_20211022-1916357.pdf
product_url: https://www.digikey.com/en/products/detail/toshiba-semiconductor-and-storage/SSM3J328R-LF/2753199
tags: [mosfet, p-channel, 20v, 6a, sot-23, logic-level, power-management, toshiba, digikey, cabinet-6, bin-1, status-available]
date_added: 2025-11-09
added_date: 2025-11-09
---

# Toshiba SSM3J328R P-Channel MOSFET

## Details

- **Location**: Cabinet-6, Bin 1, Container C
- **Category**: Discrete Semiconductors
- **Brand**: Toshiba Semiconductor
- **Part Number**: SSM3J328R
- **Model**: SSM3J328R
- **Package**: SOT-23-3
- **Quantity**: 20+ units
- **Status**: Available
- **Price Range**: $0.15-0.35 per unit
- **Datasheet**: [SSM3J328R Datasheet](https://www.mouser.com/datasheet/2/408/SSM3J328R_datasheet_en_20211022-1916357.pdf)
- **Product URL**: [DigiKey - SSM3J328R-LF](https://www.digikey.com/en/products/detail/toshiba-semiconductor-and-storage/SSM3J328R-LF/2753199)

## Description

The Toshiba SSM3J328R is a 20V P-Channel MOSFET designed for power management and general-purpose switching applications. With a maximum drain current of 6A and logic-level gate drive capability (1.5V drive), this device is ideal for load switching, battery protection, and power management circuits. The compact SOT-23-3 surface-mount package makes it suitable for space-constrained designs.

## Specifications

### Electrical Characteristics

- **Drain-Source Voltage (VDS)**: 20V (maximum)
- **Drain Current (ID)**: 6A (at VGS = -10V)
- **Gate-Source Voltage (VGS)**: ±8V (maximum)
- **Gate Threshold Voltage (VGS(th))**: -0.5V to -1.5V (typical)
- **On-State Resistance (RDS(on))**: 66mΩ (typical at VGS = -4.5V)
- **Power Dissipation**: Depends on application
- **Operating Temperature**: -40°C to +85°C
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

- Power management circuits
- Load switching and control
- Battery protection circuits
- LED driver circuits
- Motor control
- General-purpose switching
- Logic-level switching applications
- Portable device power management

## Key Features

- **20V Rating**: Suitable for various supply voltages
- **6A Drain Current**: Adequate for moderate power switching
- **Logic-Level Gate Drive**: 1.5V drive capability for direct microcontroller interfacing
- **Low On-Resistance**: 66mΩ typical reduces power dissipation
- **Compact Package**: SOT-23-3 saves PCB space
- **General-Purpose Design**: Versatile for many applications
- **Widely Available**: Multiple manufacturers ensure supply

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
- Surface-mount package requires SMD soldering or breakout board

## Tags

mosfet, p-channel, 20v, 6a, sot-23, logic-level, power-management, toshiba, digikey, cabinet-6, bin-1, status-available

## Notes

Versatile P-Channel MOSFETs for power management and general-purpose switching applications. The SSM3J328R's combination of 20V rating, 6A current capability, and logic-level gate drive makes it ideal for microcontroller-based switching circuits and power management applications. Stock of 20+ units provides excellent supply for multiple projects and prototyping work.

