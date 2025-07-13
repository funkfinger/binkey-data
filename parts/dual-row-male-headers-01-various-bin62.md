---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Dual Row Male Headers - 0.1" Spacing Various Lengths (Bin 62)
description: Additional assorted dual row male headers with 0.1" pitch in various pin counts and lengths
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Female headers]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" female headers, IDC connectors]
location: [Cabinet-3/Bin-62]
quantity: 50+
status: available
price_range: $0.25-2.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, male, dual-row, 0.1-spacing, various-lengths, pcb, arduino, cabinet-3, bin-62, status-available]
date_added: 2025-01-13
---

# Dual Row Male Headers - 0.1" Spacing Various Lengths (Bin 62)

## Details

- **Location**: Cabinet-3, Bin 62
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Dual Row Male Headers Collection (Additional Stock)
- **Package**: Through-hole
- **Quantity**: 50+ in various lengths
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Male (pins)
- **Configuration**: Dual row

## Description

This additional collection of dual row male headers provides supplementary high-density connectivity solutions for electronics projects. With standard 0.1" (2.54mm) pitch spacing and various pin counts, these headers complement the existing dual row male header stock in Bin 59, ensuring adequate inventory for projects requiring multiple high pin count connections. The dual row configuration maximizes pin density while maintaining mechanical stability, making them ideal for GPIO interfaces, shield connections, and module interconnects.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Row Spacing**: 0.1" (2.54mm) between rows
- **Pin Material**: Brass with gold plating (typical)
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole
- **Pin Length**: Standard 3mm insertion length

### Key Features
- Standard 0.1" (2.54mm) pitch spacing
- Dual row configuration for high pin density
- Various lengths available for different applications
- Through-hole mounting for secure attachment
- Compatible with breadboards and perfboards
- Gold-plated contacts for reliability
- Breakable for custom lengths

## Common Pin Count Varieties

### Typical Dual Row Configurations
- **2x2 (4-pin)**: Compact power and signal connections
- **2x3 (6-pin)**: ISP programming headers, compact interfaces
- **2x4 (8-pin)**: Extended interfaces, small modules
- **2x5 (10-pin)**: Standard programming interfaces
- **2x6 (12-pin)**: Medium density applications
- **2x7 (14-pin)**: Custom interface requirements
- **2x8 (16-pin)**: IC replacement, development headers
- **2x10 (20-pin)**: Extended GPIO, development boards
- **2x13 (26-pin)**: Ribbon cable interfaces
- **2x15 (30-pin)**: High density applications
- **2x17 (34-pin)**: Floppy disk interfaces, high pin count
- **2x20 (40-pin)**: Raspberry Pi GPIO, maximum density

## Applications

Common use cases and applications for this component collection:
- **Raspberry Pi GPIO**: 40-pin GPIO header connections
- **Arduino Shields**: Various pin count shield interfaces
- **Development Boards**: Custom board-to-board connections
- **ISP Programming**: 6-pin and 10-pin programming headers
- **Module Interfaces**: High-density module connections
- **Ribbon Cable**: IDC connector interfaces
- **Prototype Boards**: Custom PCB interconnections
- **Breakout Boards**: GPIO and signal breakout applications

## Inventory Management

### Dual Stock Benefits
- **High Availability**: Ensures adequate stock for large projects
- **Project Flexibility**: Multiple projects can use different pin counts simultaneously
- **Backup Stock**: Reduces risk of running out during critical projects
- **Bulk Projects**: Supports projects requiring many connectors
- **Development**: Enables parallel development of multiple prototypes

### Stock Distribution
- **Bin 59**: Primary dual row male header stock
- **Bin 62**: Additional dual row male header stock (this collection)
- **Combined**: Total 100+ dual row male headers in various lengths
- **Redundancy**: Ensures continuous availability for projects

## Comparison with Bin 59 Stock

### Complementary Inventory
- **Same Specifications**: Identical electrical and mechanical characteristics
- **Same Applications**: Suitable for all the same use cases
- **Additional Capacity**: Doubles available inventory
- **Project Support**: Enables larger or multiple concurrent projects
- **Flexibility**: Allows specialization of stock by project type

### Usage Strategy
- **Primary Stock**: Use Bin 59 for initial project needs
- **Overflow Stock**: Use Bin 62 when Bin 59 is depleted
- **Large Projects**: Draw from both bins for high-volume needs
- **Specialization**: Consider dedicating bins to specific project types

## Installation Guidelines

### PCB Design Considerations
```cpp
// Standard footprint specifications:
// Dual row: 0.1" x 0.1" grid
// Hole diameter: 1.0mm (0.040")
// Pad diameter: 1.8mm (0.070")
// Row spacing: 2.54mm (0.1")
// Via size: 0.020" for routing

// Design considerations:
// - Provide adequate clearance around headers
// - Consider mating connector height
// - Plan for cable routing and strain relief
// - Mark pin 1 clearly on silkscreen
// - Use standard library footprints
```

### Assembly Best Practices
- **Alignment**: Use jigs or breadboards for straight mounting
- **Soldering**: Standard through-hole soldering techniques
- **Support**: Provide mechanical support during assembly
- **Testing**: Verify continuity and proper seating
- **Documentation**: Clear pin labeling and orientation marks
- **Quality**: Inspect for bent or damaged pins

## Circuit Examples

### Arduino Shield Interface
```
Arduino Board
    ↓ (Dual row male headers on shield)
Custom Shield PCB
├── Power Rails (VCC, GND)
├── Digital I/O Pins
├── Analog Input Pins
├── Communication Pins (SPI, I2C)
└── Special Function Pins
```

### Raspberry Pi HAT Connection
```
Raspberry Pi 40-pin GPIO
    ↓ (2x20 male header on HAT)
HAT PCB with:
├── GPIO Pin Access
├── Power Distribution
├── I2C Communication
├── SPI Interfaces
└── Custom Functionality
```

## Quality Considerations

### Selection Criteria
- **Pin Plating**: Gold plating preferred for reliability
- **Straightness**: Ensure pins are straight and aligned
- **Mechanical**: Check for proper pin retention
- **Electrical**: Verify contact resistance specifications
- **Environmental**: Consider operating conditions

### Storage and Handling
- **Protection**: Store in anti-static packaging
- **Organization**: Sort by pin count for easy access
- **Handling**: Avoid bending pins during handling
- **Inventory**: Track usage patterns for restocking
- **Quality**: Inspect before use in critical applications

## Advantages of Dual Row Configuration

### High Pin Density
- **Space Efficient**: Maximum pins in minimum footprint
- **Mechanical Stability**: Dual row provides better support
- **Signal Integrity**: Shorter connections possible
- **Cost Effective**: More pins per connector cost
- **Standardization**: Common in industry standards

### Design Benefits
- **Compact PCB Layout**: Saves board space
- **Robust Connections**: Better mechanical stability
- **High Pin Count**: Suitable for complex interfaces
- **Standard Spacing**: Compatible with existing designs

## Tags

headers, connectors, male, dual-row, 0.1-spacing, various-lengths, pcb, arduino #cabinet-3 #bin-62 #status-available

## Notes

This additional collection of dual row male headers provides valuable backup and overflow capacity for your electronics projects. Having dual stock of these essential connectors ensures you never run out during critical development phases. The 50+ units in Bin 62, combined with the 50+ units in Bin 59, provide over 100 dual row male headers in various lengths - sufficient for even the most demanding projects. Consider using this stock strategically: keep Bin 59 as your primary working stock and Bin 62 as overflow or for dedicated project types. This redundancy is particularly valuable for dual row headers since they're used in high pin count applications where running out mid-project would be particularly disruptive.
