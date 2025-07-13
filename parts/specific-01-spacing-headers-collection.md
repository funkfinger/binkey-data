---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Specific 0.1" Spacing Headers Collection
description: Specific Count Collection of 0.1" Spacing Single and Dual Row Female Headers
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Modules]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" male headers, Jumper wires]
location: [Cabinet-3/Bin-48/Section-A]
quantity: Various specific counts
status: available
price_range: $0.10-2.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, female, single-row, dual-row, 0.1-spacing, specific-counts, pcb, arduino, cabinet-3, bin-48, status-available]
date_added: 2025-01-13
---

# Specific 0.1" Spacing Headers Collection

## Details

- **Location**: Cabinet-3, Bin 48, Section A
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Specific Count Collection of 0.1" Spacing Headers
- **Package**: Through-hole
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Female (sockets)
- **Configurations**: Single row and dual row varieties

## Description

This collection contains specific quantities of standard 0.1" (2.54mm) pitch female headers in commonly used configurations. These headers are essential for electronics prototyping and production, providing reliable connections for development boards, shields, and custom PCB interfaces. The collection includes both single row and dual row configurations in pin counts that are frequently needed for Arduino, Raspberry Pi, and general electronics projects.

## Inventory Breakdown

### Dual Row Female Headers
- **40-pin (2x20)**: 5 units
  - Perfect for Raspberry Pi GPIO interfaces
  - Arduino Mega compatibility
  - High-density development boards
  
- **6-pin (2x3)**: 10 units
  - ISP programming headers
  - Compact module interfaces
  - Power and signal distribution

### Single Row Female Headers
- **16-pin (1x16)**: 20 units
  - IC socket replacements
  - Arduino shield connections
  - Standard development interfaces
  
- **12-pin (1x12)**: 7 units
  - Extended GPIO interfaces
  - Sensor module connections
  - Custom PCB interfaces
  
- **6-pin (1x6)**: 5 units
  - ISP programming
  - Sensor connections
  - Power distribution

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Socket Diameter**: 0.025" (0.64mm) typical
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Contact Material**: Brass with gold plating (typical)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole

### Key Features
- Standard 0.1" (2.54mm) pitch spacing
- Multiple pin count options
- Single and dual row configurations
- Through-hole mounting for secure attachment
- Compatible with breadboards and perfboards
- Gold-plated contacts for reliability

## Applications by Pin Count

### 40-pin Dual Row (2x20)
- **Raspberry Pi GPIO**: Complete GPIO breakout
- **Arduino Mega**: Shield connections
- **Development Boards**: High pin count interfaces
- **Data Acquisition**: Multi-channel systems

### 16-pin Single Row (1x16)
- **IC Sockets**: DIP-16 IC replacements
- **Arduino Shields**: Digital pin arrays
- **Module Interfaces**: Standard development headers
- **Expansion Boards**: GPIO extensions

### 12-pin Single Row (1x12)
- **Custom Interfaces**: Specific pin count needs
- **Sensor Arrays**: Multi-sensor connections
- **Control Panels**: User interface connections
- **Extension Modules**: Moderate pin count interfaces

### 6-pin Headers (Both Single & Dual Row)
- **ISP Programming**: In-System Programming
- **Power Distribution**: Multiple power rails
- **I2C/SPI**: Communication interfaces with power
- **Sensor Modules**: Power and signal connections

## Circuit Examples

### Raspberry Pi GPIO Breakout (40-pin)
```
Raspberry Pi 40-pin GPIO
    ↓
40-pin Dual Row Female Header
    ↓
Breakout PCB with:
- Screw terminals
- LED indicators
- Protection circuits
- Level shifters
```

### Arduino Shield Interface (16-pin)
```
Arduino Digital Pins
    ↓
16-pin Single Row Female Header
    ↓
Shield PCB with:
- Digital I/O connections
- Pull-up/pull-down resistors
- Signal conditioning
- User interface
```

### ISP Programming Interface (6-pin dual row)
```
ISP Programmer
    ↓
2x3 Female Header
    ↓
Target PCB with:
- MISO, MOSI, SCK
- RESET, VCC, GND
- Programming capability
```

## Installation Guidelines

### PCB Design Considerations
```cpp
// Standard footprint specifications:
// Single row: 0.1" pitch, 0.040" holes
// Dual row: 0.1" x 0.1" grid
// Pad size: 0.070" diameter typical
// Via size: 0.020" for routing

// Pin assignments by application:
// Power: VCC, GND
// Communication: TX, RX, CLK, DATA
// Programming: MISO, MOSI, SCK, RESET
// GPIO: Digital I/O pins
```

### Assembly Best Practices
- **Alignment**: Use breadboards or jigs for straight mounting
- **Soldering**: Wave soldering preferred for production
- **Support**: Provide mechanical support for larger headers
- **Testing**: Verify continuity and proper seating
- **Documentation**: Clear pin labeling on silkscreen

## Usage Recommendations

### Project Planning
- **40-pin**: Reserve for Raspberry Pi and high-density applications
- **16-pin**: Standard for Arduino shields and IC replacements
- **12-pin**: Custom interfaces requiring moderate pin counts
- **6-pin**: ISP programming and compact module interfaces

### Inventory Management
- **High Usage**: 16-pin and 6-pin headers (most common)
- **Moderate Usage**: 40-pin for Raspberry Pi projects
- **Specific Usage**: 12-pin for custom applications
- **Restock Priority**: Monitor 16-pin and 6-pin levels closely

## Compatibility

### Standard Interfaces
- **Raspberry Pi**: 40-pin GPIO (2x20)
- **Arduino**: Various pin counts for shields
- **ISP Programming**: 6-pin (2x3) standard
- **Development Boards**: All pin counts commonly used

### Mating Connectors
- Standard 0.1" pitch male headers
- Dupont jumper wires
- IDC ribbon cables (appropriate pin counts)
- Breadboard connections

## Quality Considerations

### Selection Criteria
- **Contact Plating**: Gold plating preferred
- **Insertion Cycles**: 100-1000 cycles typical
- **Mechanical Stability**: Dual row preferred for high pin counts
- **Environmental**: Consider operating conditions

### Storage and Handling
- **Organization**: Sort by pin count and configuration
- **Protection**: Anti-static packaging
- **Labeling**: Clear identification of each type
- **Inventory**: Track usage patterns for restocking

## Tags

headers, connectors, female, single-row, dual-row, 0.1-spacing, specific-counts, pcb, arduino #cabinet-3 #bin-48 #status-available

## Notes

This specific collection provides commonly needed header configurations for electronics projects. The quantities reflect typical usage patterns - more 16-pin headers for general use, adequate 40-pin for Raspberry Pi projects, and sufficient 6-pin headers for programming and compact interfaces. The 12-pin headers fill the gap for custom applications requiring moderate pin counts. Keep this collection well-stocked as these are fundamental components used across many project types. Consider the specific quantities when planning projects to ensure adequate inventory levels.
