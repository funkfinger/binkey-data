---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: Dual Row 40-Pin Female Headers
description: Dual Row 40-Pin Female Headers for GPIO and High-Density Connections
manufacturer: Various
package: Through-hole
size: 0.1" (2.54mm) pitch, dual row
voltage: 250V (typical)
current: 3A per pin (typical)
power: Variable
interface: [Through-hole, GPIO]
connectivity: [PCB, Raspberry Pi, Development boards, High-density connections]
compatibility: [Raspberry Pi GPIO, Arduino Mega, Development boards, IDC cables]
location: [Cabinet-3/Bin-44]
quantity: 20+
status: available
price_range: $0.50-2.00 per piece
datasheet: Generic connector specifications
product_url: N/A (generic component)
tags: [headers, connectors, female, dual-row, 40-pin, gpio, raspberry-pi, arduino, cabinet-3, bin-44, status-available]
date_added: 2025-01-13
---

# Dual Row 40-Pin Female Headers

## Details

- **Location**: Cabinet-3, Bin 44
- **Category**: Connectors & Cables - Header Connectors
- **Type**: Dual Row 40-Pin Female Headers
- **Package**: Through-hole
- **Quantity**: 20+
- **Status**: Available
- **Pitch**: 0.1" (2.54mm) standard
- **Gender**: Female (sockets)
- **Pin Count**: 40 pins (2x20 configuration)
- **Row Spacing**: 0.6" (15.24mm) typical

## Description

Dual row 40-pin female headers are high-density PCB connectors designed for GPIO interfaces, development boards, and complex digital systems. These headers feature 40 female sockets arranged in two parallel rows of 20 pins each, with standard 0.1" pitch spacing. They are most commonly used for Raspberry Pi GPIO connections, Arduino Mega interfaces, and custom development boards requiring high pin count connections. The dual row configuration provides excellent mechanical stability and efficient use of PCB space.

## Specifications

### Electrical Characteristics
- **Voltage Rating**: 250V AC/DC (typical)
- **Current Rating**: 3A per pin (typical)
- **Contact Resistance**: <20mΩ (typical)
- **Insulation Resistance**: >1000MΩ
- **Dielectric Strength**: 1000V AC (typical)

### Physical Characteristics  
- **Pitch**: 0.1" (2.54mm) standard spacing
- **Pin Count**: 40 pins (2 rows × 20 pins)
- **Row Spacing**: 0.6" (15.24mm) typical
- **Socket Diameter**: 0.025" (0.64mm) typical
- **Overall Length**: ~2.0" (50.8mm)
- **Overall Width**: ~0.6" (15.24mm)
- **Insulator Material**: Black plastic (typically nylon or PBT)
- **Contact Material**: Brass with gold plating (typical)
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole

### Key Features
- High-density 40-pin configuration
- Dual row design for mechanical stability
- Standard 0.1" (2.54mm) pitch spacing
- Through-hole mounting for secure PCB attachment
- Compatible with Raspberry Pi GPIO pinout
- Suitable for IDC ribbon cable connections
- Low profile design
- Gold-plated contacts for reliability

## Applications

Common use cases and applications for this component:
- Raspberry Pi GPIO breakout boards
- Arduino Mega shield connections
- Development board interfaces
- Custom microcontroller boards
- Data acquisition systems
- Industrial control interfaces
- Prototype expansion boards
- IDC ribbon cable termination

## Pin Configurations

### Raspberry Pi GPIO (40-pin)
```
Pin Layout (Top View):
 1  3  5  7  9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39
 2  4  6  8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40

Common Raspberry Pi GPIO functions:
- Power: 3.3V, 5V, GND
- GPIO: Digital I/O pins
- SPI: MOSI, MISO, SCLK, CE
- I2C: SDA, SCL
- UART: TX, RX
- PWM: Hardware PWM outputs
```

### Arduino Mega Compatibility
```
Can be used for Arduino Mega connections:
- Digital pins
- Analog inputs
- Power rails
- Communication interfaces
- PWM outputs
```

## Circuit Examples

### Raspberry Pi GPIO Breakout
```
Raspberry Pi 40-pin GPIO
    ↓
Dual Row 40-Pin Female Header
    ↓
Breakout PCB with:
- Screw terminals
- LED indicators
- Protection circuits
- Level shifters
```

### Development Board Interface
```
Microcontroller PCB
├── 40-pin dual row header socket
├── GPIO expansion capability
├── Standard pinout compatibility
└── Modular system design

Expansion Module
├── Plugs into 40-pin header
├── Additional peripherals
├── Signal conditioning
└── User interface elements
```

## Installation Examples

### PCB Mounting
```cpp
// Example: GPIO breakout board design

// PCB Layout Considerations:
// - 0.1" pitch spacing (2.54mm)
// - 0.6" row spacing (15.24mm)
// - Through-hole pad size: 0.040" (1.0mm)
// - Via size for routing: 0.020" (0.5mm)

// Pin numbering follows standard convention:
// Odd pins: 1, 3, 5, 7... (one row)
// Even pins: 2, 4, 6, 8... (other row)
```

### Raspberry Pi Hat Design
```
Standard Raspberry Pi HAT:
├── 40-pin female header for Pi connection
├── EEPROM for HAT identification
├── Proper mechanical spacing
├── 3.3V logic level compatibility
└── Standard mounting holes
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Pin Numbering**: Follow standard GPIO pin numbering conventions
- **Voltage Levels**: Ensure compatibility with target system voltage levels
- **Current Capacity**: Consider total current draw across all pins
- **Signal Integrity**: Use proper PCB layout for high-speed signals
- **Mechanical Stress**: Provide adequate PCB support for connector
- **Insertion Force**: May require significant force for 40-pin insertion
- **Alignment**: Critical to maintain proper pin alignment during assembly
- **Soldering**: Use wave soldering or careful hand soldering techniques

## Design Guidelines

Best practices for using 40-pin dual row headers:
- **PCB Layout**: Use ground planes for signal integrity
- **Decoupling**: Add decoupling capacitors near power pins
- **Protection**: Include ESD protection for exposed GPIO
- **Labeling**: Clearly mark pin 1 and important signals
- **Mechanical**: Design for proper mating connector support
- **Testing**: Include test points for critical signals
- **Documentation**: Provide clear pinout documentation

## Raspberry Pi Compatibility

Specific considerations for Raspberry Pi applications:
- **3.3V Logic**: Most GPIO pins are 3.3V logic level
- **5V Tolerant**: Some pins are 5V tolerant (check datasheet)
- **Current Limits**: Individual pin current limits (~16mA)
- **Power Pins**: 5V and 3.3V power available
- **Special Functions**: SPI, I2C, UART, PWM capabilities
- **HAT Specification**: Follow official HAT design guidelines

## Quality Considerations

Factors affecting connector reliability:
- **Contact Plating**: Gold plating preferred for reliability
- **Insertion Cycles**: Typical rating 100-1000 cycles
- **Environmental**: Consider humidity and temperature effects
- **Cleaning**: Keep contacts clean for reliable connection
- **Storage**: Store in anti-static packaging
- **Handling**: Avoid touching contact surfaces

## Compatibility

Compatible with:
- Raspberry Pi (all models with 40-pin GPIO)
- Arduino Mega (with appropriate pinout)
- Custom development boards
- IDC ribbon cables (40-conductor)
- Standard 0.1" pitch male headers
- Prototyping systems

## Tags

headers, connectors, female, dual-row, 40-pin, gpio, raspberry-pi, arduino #cabinet-3 #bin-44 #status-available

## Notes

These dual row 40-pin female headers are essential for high-density digital interfaces, particularly Raspberry Pi GPIO applications. They provide a reliable, standardized connection method for complex digital systems while maintaining the flexibility for custom PCB designs. The dual row configuration offers excellent mechanical stability and efficient PCB space utilization. Perfect for HAT development, GPIO breakout boards, and custom expansion modules. Keep adequate stock as they're frequently used in development and production systems requiring high pin count interfaces.
