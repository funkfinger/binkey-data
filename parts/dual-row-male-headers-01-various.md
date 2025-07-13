---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Dual Row Male Headers - 0.1" Spacing Various Lengths
description: Assorted dual row male headers with 0.1" pitch in various pin counts and lengths
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Female headers]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" female headers, IDC connectors]
location: [Cabinet-3/Bin-59]
quantity: 50+
status: available
price_range: $0.25-2.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, male, dual-row, 0.1-spacing, various-lengths, pcb, arduino, cabinet-3, bin-59, status-available]
date_added: 2025-01-13
---

# Dual Row Male Headers - 0.1" Spacing Various Lengths

## Details

- **Location**: Cabinet-3, Bin 59
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Dual Row Male Headers Collection
- **Package**: Through-hole
- **Quantity**: 50+ in various lengths
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Male (pins)
- **Configuration**: Dual row

## Description

This comprehensive collection of dual row male headers provides versatile connectivity solutions for electronics projects. With standard 0.1" (2.54mm) pitch spacing and various pin counts, these headers are essential for creating custom PCB interfaces, development board connections, and prototype assemblies. The dual row configuration maximizes pin density while maintaining mechanical stability, making them ideal for high pin count applications like GPIO interfaces, shield connections, and module interconnects.

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

## Pin Configuration Examples

### ISP Programming Header (2x3)
```
MISO  VCC
SCK   MOSI
RESET GND
```

### Standard 10-pin Programming (2x5)
```
VCC   SWDIO/TMS
GND   SWCLK/TCK
GND   TDO
GND   TDI
GND   RESET
```

### Raspberry Pi GPIO (2x20)
```
3.3V  5V
GPIO2 5V
GPIO3 GND
GPIO4 GPIO14
GND   GPIO15
... (continues for 40 pins)
```

### Custom Module Interface (2x8)
```
VCC   GND
D0    D1
D2    D3
D4    D5
D6    D7
CLK   CS
MISO  MOSI
INT   RST
```

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

### Development Board Interconnect
```
Main Controller Board
    ↓ (Various dual row headers)
Expansion Modules
├── Sensor Interfaces
├── Communication Modules
├── Power Management
└── User Interface
```

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

## Usage Recommendations

### Length Selection Guide
- **2x2 to 2x5**: Compact interfaces, programming headers
- **2x6 to 2x10**: Medium density applications, development boards
- **2x13 to 2x20**: High density GPIO, ribbon cable interfaces
- **2x25+**: Specialized high pin count applications

### Project Planning
- **Pin Count**: Select appropriate length for application
- **Mechanical**: Consider connector height and clearance
- **Electrical**: Plan for current capacity and signal integrity
- **Cost**: Balance between functionality and price
- **Standardization**: Use common lengths when possible

## Compatibility

### Standard Interfaces
- **Arduino**: Shield and development board connections
- **Raspberry Pi**: GPIO and HAT interfaces
- **Development Boards**: Universal compatibility
- **Breadboards**: Standard breadboard compatibility
- **IDC Connectors**: Ribbon cable interfaces

### Mating Connectors
- Standard 0.1" pitch dual row female headers
- IDC ribbon cable connectors
- Custom cable assemblies
- Development board sockets
- Breadboard connections

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

## Breakable Headers

### Custom Length Creation
- **Scoring**: Most headers have break-away scoring
- **Tools**: Use flush cutters or break by hand
- **Planning**: Count pins carefully before breaking
- **Waste**: Minimize waste by planning cuts
- **Quality**: Ensure clean breaks without damage

### Breaking Techniques
1. **Count Pins**: Determine required length
2. **Score Line**: Locate break point between pins
3. **Bend**: Gently bend at score line
4. **Clean**: File or sand rough edges if needed
5. **Test**: Verify fit before final installation

## Inventory Management

### Stock Organization
- **Length Sorting**: Organize by pin count
- **Quality Levels**: Separate by quality grades
- **Usage Tracking**: Monitor consumption patterns
- **Bulk Storage**: Use compartmented storage
- **Documentation**: Maintain inventory records

### Purchasing Considerations
- **Variety Pack**: Consider assorted length packages
- **Common Sizes**: Stock popular lengths (6, 10, 20, 40-pin)
- **Quality**: Balance cost vs. reliability needs
- **Supplier**: Maintain consistent supplier for quality
- **Quantity**: Buy in bulk for better pricing

## Tags

headers, connectors, male, dual-row, 0.1-spacing, various-lengths, pcb, arduino #cabinet-3 #bin-59 #status-available

## Notes

This collection of dual row male headers provides excellent versatility for electronics projects requiring high pin density connections. The various lengths ensure you have the right connector for any application, from simple 6-pin ISP programming headers to complex 40-pin GPIO interfaces. The dual row configuration offers superior mechanical stability compared to single row headers, making them ideal for permanent installations and high-reliability applications. With 50+ units in various lengths, this collection provides comprehensive coverage for most project requirements. Consider this your "go-to" source for male header connections in development boards, shields, and custom PCB interfaces.
