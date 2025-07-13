---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: 2-Pin Female Stacking Headers
description: 2-Pin Female Stacking Headers for PCB Connections
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Stacking]
connectivity: [PCB, Breadboard, Shields, Modules]
compatibility: [Arduino, Raspberry Pi, Development boards, Power connections]
location: [Cabinet-3/Bin-43/Section-A]
quantity: 30+
status: available
price_range: $0.05-0.25 per piece
datasheet: Generic connector specifications
product_url: N/A (generic component)
tags: [headers, connectors, stacking, female, 2-pin, pcb, power, arduino, cabinet-3, bin-43, status-available]
date_added: 2025-01-13
---

# 2-Pin Female Stacking Headers

## Details

- **Location**: Cabinet-3, Bin 43, Section A
- **Category**: Connectors & Cables - Header Connectors
- **Type**: 2-Pin Female Stacking Headers
- **Package**: Through-hole
- **Quantity**: 30+
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard
- **Gender**: Female (sockets)
- **Pin Count**: 2 pins

## Description

2-pin female stacking headers are compact PCB connectors designed for power distribution, signal connections, and board stacking applications. These headers feature female sockets that extend both above and below the plastic insulator, enabling them to accept male pins while simultaneously providing female sockets for additional connections on top. They are commonly used for power rails, I2C connections, sensor interfaces, and modular electronics projects where space-efficient 2-pin connections are needed.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Pin Count**: 2 pins
- **Socket Diameter**: 0.025" (0.64mm) typical
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Contact Material**: Brass with gold plating (typical)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole

### Key Features
- Female sockets extend both above and below insulator
- Standard 0.1" (2.54mm) pitch spacing
- Stackable design for multi-level connections
- Through-hole mounting for secure PCB attachment
- Compact 2-pin configuration
- Compatible with standard male headers and jumper wires
- Low profile design

## Applications

Common use cases and applications for this component:
- Power distribution (VCC/GND connections)
- I2C bus connections (SDA/SCL)
- Sensor power and signal interfaces
- Battery connections
- LED strip power connections
- Serial communication interfaces
- Modular power distribution
- Breadboard power rails

## Pin Configurations

Typical 2-pin header applications:
- **Power**: VCC + GND
- **I2C**: SDA + SCL
- **Serial**: TX + RX (or with separate GND)
- **Analog**: Signal + GND
- **Digital**: Signal + GND
- **Differential**: Signal+ + Signal-

## Circuit Examples

### Power Distribution
```
Main PCB Power Rails
    ↓ (2-pin male headers)
2-Pin Female Stacking Headers
    ↓ (Female sockets extend upward)
Module Power Input
    ↓ (Optional additional stacking)
Additional modules
```

### I2C Bus Distribution
```
Microcontroller I2C (SDA/SCL)
    ↓
2-Pin Female Stacking Header
    ↓
I2C Sensor Module
    ↓ (Stacking sockets available)
Additional I2C devices
```

## Installation Examples

### Power Rail Stacking
```cpp
// Example: Power distribution using 2-pin stacking headers

// Main Board:
// Pin 1: +5V
// Pin 2: GND

// Module 1 (via stacking headers):
// Receives power from main board
// Passes power through to next level

// Module 2 (stacked on Module 1):
// Receives same power rails
// Can be final termination or continue stack
```

### Sensor Interface Chain
```
Base Controller
├── I2C Master (SDA/SCL)
└── 2-pin stacking headers

Sensor Module 1
├── I2C Slave device
├── Power from stacking header
└── Pass-through stacking capability

Sensor Module 2
├── Additional I2C device
├── Shared bus through stack
└── Final termination
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Current Capacity**: Ensure adequate current rating for power applications
- **Voltage Drop**: Consider voltage drop across multiple stacked connections
- **Signal Integrity**: Suitable for low-speed digital and analog signals
- **Mechanical Stress**: Avoid excessive force during insertion/removal
- **Pin Alignment**: Ensure proper alignment to prevent damage
- **Contact Reliability**: Clean contacts regularly for reliable connections
- **Soldering**: Use appropriate temperature to avoid melting plastic
- **Wire Gauge**: Match wire gauge to current requirements

## Assembly Tips

Best practices for using 2-pin female stacking headers:
- **Pre-fit Test**: Always test-fit before soldering
- **Polarity Marking**: Mark pin 1 or polarity on PCB silkscreen
- **Strain Relief**: Provide strain relief for wire connections
- **Cleaning**: Clean flux residue to prevent corrosion
- **Documentation**: Label pin functions clearly
- **Testing**: Verify continuity after assembly
- **Protection**: Use appropriate fusing for power applications

## Power Applications

Considerations for power distribution:
- **Current Rating**: Verify current capacity for application
- **Voltage Drop**: Calculate total voltage drop in stacked system
- **Wire Sizing**: Use appropriate wire gauge for current
- **Fusing**: Include appropriate overcurrent protection
- **Polarity**: Maintain consistent polarity throughout system
- **Decoupling**: Add decoupling capacitors at each level

## Compatibility

Compatible with:
- Standard 0.1" pitch male headers
- Dupont jumper wires
- Breadboard connections
- Arduino and Raspberry Pi projects
- Custom PCB designs
- Modular sensor systems

## Tags

headers, connectors, stacking, female, 2-pin, pcb, power, arduino #cabinet-3 #bin-43 #status-available

## Notes

These 2-pin female stacking headers are essential for compact, modular electronics projects. They provide an efficient way to distribute power and signals while maintaining the ability to stack additional modules. Perfect for sensor networks, power distribution systems, and modular development platforms. The 2-pin configuration is ideal for power rails (VCC/GND) and simple signal pairs like I2C buses. Keep plenty in stock as they're frequently used in prototyping and production systems.
