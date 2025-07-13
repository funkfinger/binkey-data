---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Single Row Male Stacking Headers
description: Single Row Male Stacking Headers for PCB Connections
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Stacking]
connectivity: [PCB, Breadboard, Shields, Modules]
compatibility: [Arduino, Raspberry Pi, Development boards, Shields]
location: [Cabinet-3/Bin-43/Section-B]
quantity: 30+
status: available
price_range: $0.10-0.50 per piece
datasheet: Generic connector specifications
product_url: N/A (generic component)
tags: [headers, connectors, stacking, male, single-row, pcb, arduino, cabinet-3, bin-43, status-available]
date_added: 2025-01-13
---

# Single Row Male Stacking Headers

## Details

- **Location**: Cabinet-3, Bin 43, Section B
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Single Row Male Stacking Headers
- **Package**: Through-hole
- **Quantity**: 30+
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard
- **Gender**: Male (pins)

## Description

Single row male stacking headers are versatile PCB connectors that allow for both through-hole mounting and stacking of boards or shields. These headers feature male pins that extend both above and below the plastic insulator, enabling them to plug into female headers while simultaneously providing male pins for additional connections on top. They are commonly used in Arduino shields, Raspberry Pi HATs, development boards, and modular electronics projects where multiple boards need to be stacked together.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Pin Diameter**: 0.025" (0.64mm) typical
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Contact Material**: Brass with gold plating (typical)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole

### Key Features
- Male pins extend both above and below insulator
- Standard 0.1" (2.54mm) pitch spacing
- Stackable design for multi-level connections
- Through-hole mounting for secure PCB attachment
- Compatible with standard breadboards and perfboards
- Available in various pin counts (typically 6-40 pins)

## Applications

Common use cases and applications for this component:
- Arduino shield stacking
- Raspberry Pi HAT connections
- Development board prototyping
- Modular electronics systems
- PCB-to-PCB connections
- Breadboard interfacing
- Custom shield development
- Multi-level circuit assemblies

## Pin Configurations

Common single row stacking header configurations:
- **6-pin**: Small modules, sensors
- **8-pin**: Basic shields, breakout boards
- **10-pin**: Standard development headers
- **20-pin**: Raspberry Pi GPIO extensions
- **40-pin**: Full Raspberry Pi GPIO, large shields

## Circuit Examples

### Arduino Shield Stacking
```
Arduino Uno
    ↓ (Female headers on shield)
Shield 1 with stacking headers
    ↓ (Male pins extend upward)
Shield 2 with female headers
    ↓ (Optional additional stacking)
Shield 3
```

### Raspberry Pi HAT Connection
```
Raspberry Pi GPIO (40-pin)
    ↓
40-pin Stacking Header
    ↓
HAT/Shield PCB
    ↓ (Stacking pins available for expansion)
Additional modules
```

## Installation Examples

### Basic Shield Stacking Setup
```cpp
// Example: Using stacking headers for Arduino sensor shield

// Shield 1: Sensor breakout with stacking headers
// - Bottom pins connect to Arduino
// - Top pins available for additional shields

// Shield 2: Display shield stacked on top
// - Connects to stacking header pins
// - Can access same Arduino pins through stack

// All shields share the same pin connections
// but can be accessed independently
```

### Modular System Design
```
Base PCB
├── Power distribution
├── Microcontroller
└── Stacking headers for expansion

Module 1 (via stacking headers)
├── Sensor array
├── Signal conditioning
└── Pass-through stacking capability

Module 2 (stacked on Module 1)
├── Display interface
├── User controls
└── Final termination
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Pin Length**: Ensure adequate pin length for both bottom mounting and top connections
- **Current Capacity**: Consider current rating when stacking multiple high-power modules
- **Signal Integrity**: Long stacking chains may affect high-frequency signals
- **Mechanical Stress**: Avoid excessive force when inserting/removing stacked assemblies
- **Pin Alignment**: Ensure proper alignment to prevent bent pins during assembly
- **Height Considerations**: Account for total stack height in enclosure design
- **Soldering**: Use appropriate temperature to avoid melting plastic insulator
- **Pin Count**: Match pin count to application requirements

## Assembly Tips

Best practices for using stacking headers:
- **Pre-fit Test**: Always test-fit components before soldering
- **Alignment Jigs**: Use breadboards or fixtures to maintain alignment during soldering
- **Soldering Order**: Solder from bottom to top in stacked assemblies
- **Pin Protection**: Use pin protectors during handling to prevent damage
- **Cleaning**: Clean flux residue to prevent corrosion
- **Documentation**: Label pin functions for complex stacked systems

## Compatibility

Compatible with:
- Arduino Uno, Mega, Leonardo shields
- Raspberry Pi HATs and expansion boards
- BeagleBone capes
- Standard 0.1" pitch perfboards
- Breadboards and prototyping systems
- Custom PCB designs

## Tags

headers, connectors, stacking, male, single-row, pcb, arduino #cabinet-3 #bin-43 #status-available

## Notes

These single row male stacking headers are essential components for modular electronics projects. They provide the flexibility to create stackable systems while maintaining access to all connection points. Perfect for Arduino shield development, Raspberry Pi projects, and custom modular electronics systems. The stacking capability allows for clean, organized multi-level assemblies without the need for complex wiring harnesses. Keep a variety of pin counts in stock for different project requirements.
