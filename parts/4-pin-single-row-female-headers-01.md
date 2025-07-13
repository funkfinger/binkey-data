---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: 4-pin Single Row Female Headers - 0.1" Spacing
description: Standard 4-pin single row female headers with 0.1" pitch for versatile connections
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Modules]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" male headers, Jumper wires]
location: [Cabinet-3/Bin-57/Section-B]
quantity: 50+
status: available
price_range: $0.15-0.50 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, female, single-row, 4-pin, 0.1-spacing, pcb, arduino, cabinet-3, bin-57, status-available]
date_added: 2025-01-13
---

# 4-pin Single Row Female Headers - 0.1" Spacing

## Details

- **Location**: Cabinet-3, Bin 57, Section B
- **Category**: Connectors & Cables - Header Connectors
- **Type**: 4-pin Single Row Female Headers
- **Package**: Through-hole
- **Quantity**: 50+
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Female (sockets)
- **Configuration**: Single row

## Description

These versatile 4-pin single row female headers are essential components for electronics prototyping and production. With standard 0.1" (2.54mm) pitch spacing, they provide reliable connections for development boards, shields, sensors, and custom PCB interfaces. The 4-pin configuration is perfect for power and signal applications, offering an ideal balance between functionality and compact size. These headers are compatible with standard male headers, jumper wires, and breadboard connections.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Pin Count**: 4 pins in single row
- **Socket Diameter**: 0.025" (0.64mm) typical
- **Overall Length**: ~10.16mm (0.4")
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Contact Material**: Brass with gold plating (typical)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole

### Key Features
- Standard 0.1" (2.54mm) pitch spacing
- Compact 4-pin configuration
- Single row design saves PCB space
- Through-hole mounting for secure attachment
- Compatible with breadboards and perfboards
- Gold-plated contacts for reliability
- Low profile design

## Applications

Common use cases and applications for this component:
- **Power Connections**: VCC, GND, and two signal lines
- **Sensor Interfaces**: I2C sensors (VCC, GND, SDA, SCL)
- **SPI Connections**: Power and SPI signals (VCC, GND, MISO, MOSI)
- **UART Interfaces**: Power and serial communication (VCC, GND, TX, RX)
- **Servo Connections**: Power, ground, and control signal
- **LED Strip Connections**: Power and data/clock signals
- **Module Interfaces**: Standard 4-pin module connections
- **Breakout Boards**: Custom interface connections

## Pin Configuration Examples

### Common 4-Pin Arrangements

#### Power + I2C Interface
```
Pin 1: VCC (3.3V or 5V)
Pin 2: GND
Pin 3: SDA (I2C Data)
Pin 4: SCL (I2C Clock)
```

#### Power + UART Interface
```
Pin 1: VCC (3.3V or 5V)
Pin 2: GND
Pin 3: TX (Transmit)
Pin 4: RX (Receive)
```

#### Servo Connection
```
Pin 1: VCC (5V)
Pin 2: GND
Pin 3: Signal (PWM)
Pin 4: NC (Not Connected) or secondary signal
```

#### SPI Interface (Partial)
```
Pin 1: VCC (3.3V or 5V)
Pin 2: GND
Pin 3: MISO (Master In, Slave Out)
Pin 4: MOSI (Master Out, Slave In)
```

## Circuit Examples

### I2C Sensor Interface
```
Microcontroller PCB
    ↓ (4-pin female header)
I2C Sensor Module
├── Pin 1: VCC → Sensor Power
├── Pin 2: GND → Sensor Ground
├── Pin 3: SDA → I2C Data Line
└── Pin 4: SCL → I2C Clock Line
```

### Arduino Shield Connection
```
Arduino Board
    ↓ (4-pin female header on shield)
Custom Shield PCB
├── Pin 1: 5V Power Rail
├── Pin 2: Ground Rail
├── Pin 3: Digital Pin Connection
└── Pin 4: Analog Pin Connection
```

### LED Strip Interface
```
Controller PCB
    ↓ (4-pin female header)
LED Strip Connection
├── Pin 1: VCC (5V or 12V)
├── Pin 2: GND
├── Pin 3: Data Signal
└── Pin 4: Clock Signal (if required)
```

## Installation Guidelines

### PCB Design Considerations
```cpp
// Standard footprint specifications:
// Single row: 0.1" pitch, 0.040" holes
// Pad size: 0.070" diameter typical
// Via size: 0.020" for routing
// Keep-out: 0.1" around header for clearance

// Pin assignments by application:
// Power: VCC, GND, Signal1, Signal2
// I2C: VCC, GND, SDA, SCL
// UART: VCC, GND, TX, RX
// SPI: VCC, GND, MISO, MOSI
```

### Assembly Best Practices
- **Alignment**: Use breadboards or jigs for straight mounting
- **Soldering**: Standard through-hole soldering techniques
- **Support**: Ensure adequate PCB support during soldering
- **Testing**: Verify continuity and proper seating
- **Documentation**: Clear pin labeling on silkscreen
- **Orientation**: Mark pin 1 clearly on PCB

## Usage Recommendations

### Project Applications
- **Sensor Modules**: Perfect for I2C and simple sensor interfaces
- **Communication**: UART and basic SPI connections
- **Power Distribution**: Compact power and signal distribution
- **Prototyping**: Flexible connections for development
- **Module Interfaces**: Standard 4-pin module connections
- **Breakout Boards**: Custom interface development

### Design Considerations
- **Pin Assignment**: Plan pin functions during PCB design
- **Signal Integrity**: Keep high-speed signals short
- **Power Distribution**: Use appropriate trace widths
- **Mechanical Support**: Provide adequate PCB thickness
- **Accessibility**: Ensure easy access for mating connectors

## Compatibility

### Standard Interfaces
- **Arduino**: Compatible with Arduino pin spacing
- **Raspberry Pi**: Works with GPIO breakout applications
- **Breadboards**: Standard breadboard compatibility
- **Perfboards**: Perfect fit for 0.1" perfboard
- **Development Boards**: Universal compatibility

### Mating Connectors
- Standard 0.1" pitch male headers
- 4-pin Dupont jumper wires
- Breadboard jumper wires
- Custom cable assemblies
- Male header pins

## Quality Considerations

### Selection Criteria
- **Contact Plating**: Gold plating preferred for reliability
- **Insertion Cycles**: 100-1000 cycles typical
- **Mechanical Stability**: Adequate for most applications
- **Environmental**: Consider operating conditions
- **Cost**: Balance between quality and price

### Storage and Handling
- **Organization**: Keep in anti-static packaging
- **Protection**: Avoid touching contact surfaces
- **Inventory**: Track usage for restocking
- **Quality**: Inspect for bent or damaged pins

## Comparison with Other Pin Counts

### Header Pin Count Selection
- **2-pin**: Basic power connections
- **3-pin**: Servo and simple sensor connections
- **4-pin**: Balanced power + signal applications ← **This component**
- **5-pin**: Extended interfaces
- **6-pin**: ISP programming and complex sensors
- **8-pin**: Standard development interfaces
- **10-pin**: Extended GPIO applications

## Advantages of 4-Pin Configuration

### Optimal Balance
- **Functionality**: Sufficient pins for most applications
- **Size**: Compact footprint on PCB
- **Cost**: Economical for moderate pin count needs
- **Versatility**: Handles power + dual signal applications
- **Standardization**: Common in many interface standards

### Common Standards Using 4-Pin
- **I2C Modules**: VCC, GND, SDA, SCL
- **UART Modules**: VCC, GND, TX, RX
- **Servo Connectors**: VCC, GND, Signal, (spare)
- **Simple SPI**: VCC, GND, MISO, MOSI

## Inventory Management

### Stock Considerations
- **High Usage**: 4-pin headers are very commonly used
- **Bulk Purchasing**: Consider quantity discounts
- **Mixed Inventory**: Keep various pin counts in stock
- **Quality Levels**: Balance cost vs. reliability needs
- **Supplier**: Maintain consistent supplier for quality

### Usage Tracking
- **Project Types**: Monitor which applications use most
- **Consumption Rate**: Track usage for restocking
- **Quality Issues**: Note any recurring problems
- **Cost Analysis**: Evaluate cost per project

## Tags

headers, connectors, female, single-row, 4-pin, 0.1-spacing, pcb, arduino #cabinet-3 #bin-57 #status-available

## Notes

These 4-pin single row female headers are among the most versatile connectors in electronics prototyping. The 4-pin configuration provides the perfect balance between functionality and size, making them ideal for power + signal applications. They're particularly useful for I2C sensor modules, UART communication, servo connections, and simple SPI interfaces. With 50+ units in stock, this quantity provides excellent coverage for multiple projects. The standard 0.1" spacing ensures compatibility across the entire electronics ecosystem. Consider these as the "go-to" choice for moderate pin count applications where 2-pin is insufficient but 6+ pins would be overkill.
