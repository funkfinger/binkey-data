---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Various Single & Double Row Female Headers
description: Assorted Single Row and Double Row 0.1" Spacing Female Headers
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, Standard Headers]
connectivity: [PCB, Breadboard, Development boards, Modules]
compatibility: [Arduino, Raspberry Pi, Standard 0.1" male headers, Jumper wires]
location: [Cabinet-3/Bin-46]
quantity: Various
status: available
price_range: $0.05-1.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic components)
tags: [headers, connectors, female, single-row, double-row, 0.1-spacing, pcb, arduino, cabinet-3, bin-46, status-available]
date_added: 2025-01-13
---

# Various Female Headers - 0.1" Spacing

## Details

- **Location**: Cabinet-3, Bin 46
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Assorted Single & Double Row Female Headers
- **Package**: Through-hole
- **Quantity**: Various counts and configurations
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Gender**: Female (sockets)
- **Configurations**: Single row and double row varieties

## Description

This collection contains various single row and double row female headers with standard 0.1" (2.54mm) pitch spacing. These versatile PCB connectors are essential building blocks for electronics prototyping and production. The assortment includes different pin counts and configurations to accommodate a wide range of applications, from simple sensor connections to complex development board interfaces. All headers feature standard through-hole mounting and are compatible with standard male headers, jumper wires, and breadboard connections.

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

### Common Configurations
- **Single Row**: 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 36, 40 pins
- **Double Row**: 2x2, 2x3, 2x4, 2x5, 2x8, 2x10, 2x13, 2x20 pins
- **Row Spacing**: 0.1" (single), 0.6" (double row typical)

### Key Features
- Standard 0.1" (2.54mm) pitch spacing
- Multiple pin count options
- Single and double row configurations
- Through-hole mounting for secure attachment
- Compatible with breadboards and perfboards
- Gold-plated contacts for reliability
- Low profile design

## Applications

Common use cases and applications for this component collection:
- Arduino shield connections
- Raspberry Pi expansion interfaces
- Sensor module connections
- Development board prototyping
- Custom PCB interfaces
- Breadboard connections
- Module interconnections
- Signal breakout boards

## Pin Count Varieties

### Single Row Headers
- **2-pin**: Power connections, I2C, simple signals
- **3-pin**: Servo connections, analog sensors
- **4-pin**: SPI connections, UART with power
- **5-pin**: Extended interfaces
- **6-pin**: ISP programming, extended sensors
- **8-pin**: Microcontroller connections
- **10-pin**: Standard development interfaces
- **16-pin**: IC socket replacements
- **20-pin**: Extended GPIO interfaces
- **40-pin**: Full GPIO breakouts

### Double Row Headers
- **2x2**: Compact power/signal
- **2x3**: ISP programming headers
- **2x4**: Compact interfaces
- **2x5**: Standard 10-pin interfaces
- **2x8**: 16-pin wide interfaces
- **2x10**: 20-pin development headers
- **2x13**: 26-pin ribbon cable interfaces
- **2x20**: 40-pin GPIO (Raspberry Pi style)

## Circuit Examples

### Arduino Shield Interface
```
Arduino Uno
    ↓ (Female headers on shield)
Shield PCB with various headers:
- 2x3 for ISP programming
- 1x8 for digital pins
- 1x6 for analog pins
- 2x1 for power rails
```

### Sensor Module Connections
```
Main Controller PCB
├── 1x3 headers for servo connections
├── 1x4 headers for I2C sensors
├── 1x6 headers for SPI modules
└── 2x5 headers for expansion modules
```

## Installation Examples

### PCB Design Considerations
```cpp
// Standard header footprints:
// Single row: 0.1" pitch, 0.040" holes
// Double row: 0.1" x 0.1" grid, 0.6" row spacing
// Pad size: 0.070" diameter typical
// Via size: 0.020" for routing

// Common pin assignments:
// Power headers: VCC, GND
// Communication: TX, RX, CLK, DATA
// Programming: MISO, MOSI, SCK, RESET, VCC, GND
```

### Modular System Design
```
Base PCB
├── Various female headers for modules
├── Standardized pinouts
├── Power distribution
└── Signal routing

Plug-in Modules
├── Matching male headers
├── Specific functionality
├── Hot-swappable design
└── Modular expansion
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Pin Count Selection**: Choose appropriate pin count for application
- **Mechanical Stress**: Provide adequate PCB support for larger headers
- **Signal Integrity**: Consider crosstalk for high-speed signals
- **Power Distribution**: Use multiple pins for high current applications
- **Insertion Force**: Larger headers require more insertion force
- **Alignment**: Critical for multi-row headers
- **Soldering**: Wave soldering preferred for production quantities
- **Testing**: Verify continuity and proper seating

## Assembly Guidelines

Best practices for using various female headers:
- **Planning**: Select appropriate header sizes during design phase
- **Footprints**: Use standard library footprints when possible
- **Orientation**: Mark pin 1 clearly on PCB silkscreen
- **Spacing**: Maintain proper clearances for mating connectors
- **Support**: Add mechanical support for large headers
- **Documentation**: Clearly label all header functions
- **Testing**: Include test points for critical signals

## Common Pin Assignments

### Power Headers (2-pin)
- Pin 1: VCC (+3.3V or +5V)
- Pin 2: GND

### I2C Headers (4-pin)
- Pin 1: VCC
- Pin 2: GND
- Pin 3: SDA
- Pin 4: SCL

### SPI Headers (6-pin)
- Pin 1: VCC
- Pin 2: GND
- Pin 3: MISO
- Pin 4: MOSI
- Pin 5: SCK
- Pin 6: CS

### ISP Programming (2x3)
```
MISO  VCC
SCK   MOSI
RESET GND
```

## Quality Considerations

Factors affecting header reliability:
- **Contact Plating**: Gold plating preferred for reliability
- **Insertion Cycles**: Typical rating 100-1000 cycles
- **Environmental**: Consider humidity and temperature
- **Cleaning**: Keep contacts clean and flux-free
- **Storage**: Anti-static packaging recommended
- **Handling**: Avoid touching contact surfaces

## Inventory Management

Tips for managing header assortment:
- **Organization**: Sort by pin count and row configuration
- **Labeling**: Clear identification of each type
- **Stock Levels**: Maintain adequate quantities of common sizes
- **Standardization**: Prefer standard pin counts when possible
- **Documentation**: Track usage patterns for restocking

## Compatibility

Compatible with:
- Standard 0.1" pitch male headers
- Dupont jumper wires
- Breadboard connections
- Arduino and Raspberry Pi ecosystems
- Standard IC sockets (pin-compatible)
- IDC ribbon cables (appropriate pin counts)

## Tags

headers, connectors, female, single-row, double-row, 0.1-spacing, pcb, arduino #cabinet-3 #bin-46 #status-available

## Notes

This assorted collection of female headers provides flexibility for various prototyping and production needs. Having multiple pin counts and configurations available enables rapid prototyping and custom PCB development. The 0.1" spacing standard ensures compatibility across the electronics ecosystem. Keep this collection well-organized and stocked as these are fundamental components used in virtually every electronics project. Consider standardizing on common pin counts (2, 3, 4, 6, 8, 10, 20, 40) for most applications while keeping specialty sizes for specific requirements.
