---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Single Row Male Headers - 0.1" Spacing Various Lengths
description: Assorted single row male headers with 0.1" pitch in various pin counts and lengths
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Female headers]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" female headers, Breadboard]
location: [Cabinet-3/Bin-62]
quantity: 50+
status: available
price_range: $0.10-1.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, male, single-row, 0.1-spacing, various-lengths, pcb, arduino, cabinet-3, bin-62, status-available]
date_added: 2025-01-13
---

# Single Row Male Headers - 0.1" Spacing Various Lengths

## Details

- **Location**: Cabinet-3, Bin 62
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Single Row Male Headers Collection
- **Package**: Through-hole
- **Quantity**: 50+ in various lengths
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Male (pins)
- **Configuration**: Single row

## Description

This comprehensive collection of single row male headers provides fundamental connectivity solutions for electronics projects. With standard 0.1" (2.54mm) pitch spacing and various pin counts, these headers are essential building blocks for PCB interfaces, development board connections, and prototype assemblies. The single row configuration offers space-efficient connectivity while maintaining compatibility with breadboards, perfboards, and standard female headers. These versatile connectors are among the most commonly used components in electronics prototyping and production.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Pin Material**: Brass with gold plating (typical)
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole
- **Pin Length**: Standard 3mm insertion length
- **Pin Diameter**: 0.025" (0.64mm) typical

### Key Features
- Standard 0.1" (2.54mm) pitch spacing
- Single row configuration for space efficiency
- Various lengths available for different applications
- Through-hole mounting for secure attachment
- Compatible with breadboards and perfboards
- Gold-plated contacts for reliability
- Breakable for custom lengths

## Common Pin Count Varieties

### Typical Single Row Configurations
- **2-pin**: Basic power connections, simple signals
- **3-pin**: Servo connections, basic sensor interfaces
- **4-pin**: Power + dual signal applications
- **5-pin**: Extended interfaces, custom applications
- **6-pin**: ISP programming, sensor modules
- **8-pin**: IC replacement, development headers
- **10-pin**: Standard development interfaces
- **12-pin**: Medium density applications
- **14-pin**: IC replacement, extended interfaces
- **16-pin**: Standard development headers
- **20-pin**: High density single row applications
- **24-pin**: Extended GPIO applications
- **36-pin**: Very high density applications
- **40-pin**: Maximum single row density

## Applications

Common use cases and applications for this component collection:
- **PCB Interfaces**: Custom board-to-board connections
- **Development Boards**: GPIO and signal breakouts
- **Sensor Connections**: Power and signal interfaces
- **Module Interfaces**: Standard module connections
- **Breadboard Prototyping**: Temporary connections
- **Arduino Projects**: Shield and expansion connections
- **Raspberry Pi**: GPIO breakout and HAT connections
- **IC Replacement**: Socket alternatives for testing

## Pin Configuration Examples

### Power Connection (2-pin)
```
Pin 1: VCC (3.3V or 5V)
Pin 2: GND
```

### Servo Interface (3-pin)
```
Pin 1: VCC (5V)
Pin 2: GND
Pin 3: Signal (PWM)
```

### I2C Interface (4-pin)
```
Pin 1: VCC (3.3V or 5V)
Pin 2: GND
Pin 3: SDA (I2C Data)
Pin 4: SCL (I2C Clock)
```

### ISP Programming (6-pin)
```
Pin 1: MISO
Pin 2: VCC
Pin 3: SCK
Pin 4: MOSI
Pin 5: RESET
Pin 6: GND
```

### Arduino Digital Pins (8-pin)
```
Pin 1: Digital Pin 0
Pin 2: Digital Pin 1
...
Pin 8: Digital Pin 7
```

## Circuit Examples

### Arduino Shield Interface
```
Arduino Board
    ↓ (Single row male headers)
Custom Shield PCB
├── Digital I/O connections
├── Analog input connections
├── Power rail connections
└── Communication interfaces
```

### Sensor Module Connection
```
Main Controller PCB
    ↓ (Single row male header)
Sensor Module
├── Power (VCC, GND)
├── Data signals
├── Control signals
└── Status indicators
```

### Development Board Breakout
```
Development Board
    ↓ (Various single row headers)
Breakout PCB with:
├── Screw terminals
├── LED indicators
├── Pull-up/pull-down resistors
└── Signal conditioning
```

## Installation Guidelines

### PCB Design Considerations
```cpp
// Standard footprint specifications:
// Single row: 0.1" pitch, 0.040" holes
// Pad diameter: 1.8mm (0.070")
// Via size: 0.020" for routing
// Keep-out: 0.1" around header for clearance

// Design considerations:
// - Provide adequate clearance around headers
// - Consider mating connector access
// - Plan for cable routing
// - Mark pin 1 clearly on silkscreen
// - Use standard library footprints
```

### Assembly Best Practices
- **Alignment**: Use breadboards or jigs for straight mounting
- **Soldering**: Standard through-hole soldering techniques
- **Support**: Provide mechanical support during assembly
- **Testing**: Verify continuity and proper seating
- **Documentation**: Clear pin labeling and orientation marks
- **Quality**: Inspect for bent or damaged pins

## Usage Recommendations

### Length Selection Guide
- **2-4 pins**: Basic power and signal connections
- **5-8 pins**: Medium complexity interfaces
- **10-16 pins**: Standard development applications
- **20+ pins**: High density GPIO and complex interfaces

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
- **Breadboards**: Standard breadboard compatibility
- **Perfboards**: Perfect fit for 0.1" perfboard
- **Development Boards**: Universal compatibility

### Mating Connectors
- Standard 0.1" pitch single row female headers
- Dupont jumper wires (female)
- Breadboard connections
- Custom cable assemblies
- Development board sockets

## Advantages of Single Row Configuration

### Space Efficiency
- **Compact Footprint**: Minimal PCB space usage
- **Linear Layout**: Easy PCB routing
- **Breadboard Compatible**: Direct breadboard insertion
- **Cost Effective**: Lower cost than dual row
- **Simplicity**: Easy to understand and use

### Design Benefits
- **Flexible Routing**: Easy trace routing around connector
- **Component Placement**: More space for adjacent components
- **Mechanical**: Lower profile than dual row
- **Assembly**: Easier alignment and soldering

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

## Comparison with Other Header Types

### Single Row vs. Dual Row
- **Space**: Single row uses less PCB space
- **Pin Density**: Dual row provides more pins per length
- **Cost**: Single row typically less expensive
- **Complexity**: Single row easier to route and assemble
- **Applications**: Single row for moderate pin counts

### Male vs. Female Headers
- **Mating**: Male headers plug into female sockets
- **Protection**: Female headers protect pins better
- **Assembly**: Male headers easier to solder straight
- **Cost**: Male headers typically less expensive
- **Applications**: Male for permanent connections

## Inventory Management

### Stock Organization
- **Length Sorting**: Organize by pin count
- **Quality Levels**: Separate by quality grades
- **Usage Tracking**: Monitor consumption patterns
- **Bulk Storage**: Use compartmented storage
- **Documentation**: Maintain inventory records

### Purchasing Considerations
- **Variety Pack**: Consider assorted length packages
- **Common Sizes**: Stock popular lengths (2, 3, 4, 6, 8, 10, 16, 20-pin)
- **Quality**: Balance cost vs. reliability needs
- **Supplier**: Maintain consistent supplier for quality
- **Quantity**: Buy in bulk for better pricing

## Common Applications by Pin Count

### 2-Pin Headers
- Power connections (VCC, GND)
- Simple on/off switches
- LED connections
- Basic sensor power

### 3-Pin Headers
- Servo connections
- Analog sensors with power
- Simple communication interfaces
- Potentiometer connections

### 4-Pin Headers
- I2C interfaces (VCC, GND, SDA, SCL)
- UART with power (VCC, GND, TX, RX)
- SPI partial interfaces
- RGB LED connections

### 6-Pin Headers
- ISP programming interfaces
- Extended sensor connections
- SPI with power and control
- Custom module interfaces

### 8-Pin Headers
- Arduino digital pin groups
- IC socket replacements
- Extended communication interfaces
- Multi-sensor connections

### 10+ Pin Headers
- GPIO breakouts
- Development board interfaces
- High pin count modules
- Complex system interfaces

## Tags

headers, connectors, male, single-row, 0.1-spacing, various-lengths, pcb, arduino #cabinet-3 #bin-62 #status-available

## Notes

This collection of single row male headers is fundamental to electronics prototyping and development. The various lengths ensure you have the right connector for any application, from simple 2-pin power connections to complex 40-pin GPIO interfaces. Single row headers are particularly valuable for their space efficiency and ease of use in breadboard prototyping. With 50+ units in various lengths, this collection provides comprehensive coverage for most project requirements. These are among the most frequently used connectors in electronics, making this collection essential for any serious electronics inventory. Consider this your primary source for male header connections in development, prototyping, and production applications.
