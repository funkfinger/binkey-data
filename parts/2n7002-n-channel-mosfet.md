---
type: electronic-component
category: Discrete Semiconductors
subcategory: MOSFETs - N-Channel
brand: Multiple (Nexperia, ON Semiconductor, STMicroelectronics)
part_number: 2N7002
model: 2N7002
description: 60V N-Channel Trench MOSFET, 300mA, SOT-23 package, general-purpose switching
manufacturer: Multiple (Nexperia, ON Semiconductor, STMicroelectronics)
package: SOT-23-3
voltage: 60V (VDS)
current: 300mA (ID)
power: Low power consumption
interface: [Switching, Logic Level]
connectivity: [Surface Mount]
compatibility: [General-purpose switching, Logic level conversion, ESD protection]
location: [Cabinet-6/Bin-1/Container-B]
quantity: 20+
status: available
price_range: $0.05-0.15 each
datasheet: https://assets.nexperia.com/documents/data-sheet/2N7002.pdf
product_url: https://www.digikey.com/en/products/detail/nexperia/2N7002/1232123
tags: [mosfet, n-channel, 60v, 300ma, sot-23, switching, logic-level, trench, digikey, cabinet-6, bin-1, status-available]
date_added: 2025-11-09
added_date: 2025-11-09
---

# 2N7002 N-Channel MOSFET

## Details

- **Location**: Cabinet-6, Bin 1, Container B
- **Category**: Discrete Semiconductors
- **Brand**: Multiple (Nexperia, ON Semiconductor, STMicroelectronics)
- **Part Number**: 2N7002
- **Model**: 2N7002
- **Package**: SOT-23-3
- **Quantity**: 20+ units
- **Status**: Available
- **Price Range**: $0.05-0.15 per unit
- **Datasheet**: [2N7002 Datasheet](https://assets.nexperia.com/documents/data-sheet/2N7002.pdf)
- **Product URL**: [DigiKey - 2N7002](https://www.digikey.com/en/products/detail/nexperia/2N7002/1232123)

## Description

The 2N7002 is a 60V N-Channel Trench MOSFET from multiple manufacturers (Nexperia, ON Semiconductor, STMicroelectronics) designed for general-purpose switching and logic-level applications. With a maximum drain current of 300mA and low on-resistance, this device is ideal for low-power switching, ESD protection, and logic level conversion circuits. The compact SOT-23 surface-mount package makes it one of the most popular small-signal MOSFETs.

## Specifications

### Electrical Characteristics

- **Drain-Source Voltage (VDS)**: 60V (maximum)
- **Drain Current (ID)**: 300mA (maximum)
- **Gate-Source Voltage (VGS)**: ±20V (maximum)
- **Gate Threshold Voltage (VGS(th))**: 0.5V to 1.5V (typical)
- **On-State Resistance (RDS(on))**: 5Ω (typical at VGS = 5V)
- **Power Dissipation**: Depends on application
- **Operating Temperature**: -55°C to +150°C
- **Junction Temperature**: 150°C (maximum)

### Mechanical Characteristics

- **Package**: SOT-23-3 (Surface Mount)
- **Pin Count**: 3 pins
- **Mounting**: Surface Mount
- **RoHS Compliant**: Yes

### Pin Configuration

Standard SOT-23-3 N-Channel MOSFET:
```
Pin 1: Gate (G)
Pin 2: Drain (D)
Pin 3: Source (S)
```

## Applications

- General-purpose switching
- Logic level conversion
- ESD protection circuits
- Low-power load switching
- Signal routing and multiplexing
- Microcontroller I/O switching
- Battery management circuits
- Portable device power management

## Key Features

- **60V Rating**: Suitable for various supply voltages
- **300mA Drain Current**: Adequate for low-power switching
- **Logic-Level Gate Drive**: Can be driven directly from microcontroller outputs
- **Low On-Resistance**: 5Ω typical reduces power dissipation
- **Compact Package**: SOT-23-3 saves PCB space
- **Widely Available**: Multiple manufacturers ensure supply
- **General-Purpose Design**: Versatile for many applications

## Circuit Integration

### Basic Switching Circuit

Connect for N-Channel switching:
- Gate to control signal (logic level, 0V to 5V)
- Drain to load or signal
- Source to ground
- Pull-down resistor on gate for reliable OFF state

### Gate Drive Considerations

- Gate must be pulled to ground to turn OFF
- Gate pulled toward positive supply to turn ON
- Typical gate drive voltage: 0V to 5V for logic-level operation
- Pull-down resistor (10kΩ typical) recommended on gate

### ESD Protection Application

- Gate connected to signal line
- Source to ground
- Drain to protected signal
- Provides low-impedance path for ESD events

## Technical Notes

- N-Channel device: Gate must be positive relative to source to conduct
- Logic-level gate drive simplifies circuit design
- Low on-resistance minimizes power dissipation
- Suitable for both DC and switching applications
- Very popular for ESD protection and logic level conversion
- Thermal management typically not required for low-current applications
- Multiple manufacturers ensure availability and compatibility

## Tags

mosfet, n-channel, 60v, 300ma, sot-23, switching, logic-level, trench, digikey, cabinet-6, bin-1, status-available

## Notes

Extremely popular and versatile N-Channel MOSFETs for general-purpose switching and logic applications. The 2N7002's combination of 60V rating, 300mA current capability, and logic-level gate drive makes it ideal for microcontroller-based circuits and ESD protection. Stock of 20+ units provides excellent supply for multiple projects and prototyping work. Available from multiple manufacturers ensuring consistent supply.

