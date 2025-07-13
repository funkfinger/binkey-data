---
type: electronic-component
category: Interface ICs
subcategory: I/O Expanders
brand: Microchip Technology
part_number: MCP23017-E/SP
model: MCP23017-E/SP
description: 16-bit I/O expander with I2C interface
manufacturer: Microchip Technology
package: 28-SPDIP
size: 0.300" (7.62mm) width
voltage: 1.8V ~ 5.5V
current: 1mA quiescent current
power: Low power consumption
interface: [I2C]
connectivity: [Through-hole pins]
compatibility: [Arduino, Raspberry Pi, Microcontrollers]
location: [Cabinet-3/Bin-38/Section-A]
quantity: 24
status: available
price_range: $1.28-1.69
datasheet: https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf
product_url: https://www.digikey.com/en/products/detail/microchip-technology/MCP23017-E-SP/894272
tags: [io-expander, interface-ic, i2c, gpio, microchip, mcp23017, cabinet-3, bin-38, status-available]
date_added: 2025-01-12
---

# MCP23017-E/SP - 16-Bit I/O Expander with I2C Interface

## Details

- **Location**: Cabinet-3, Bin 38, Section A
- **Category**: Interface ICs
- **Brand**: Microchip Technology
- **Part Number**: MCP23017-E/SP
- **Package**: 28-SPDIP
- **Quantity**: 24
- **Status**: Available
- **Price Range**: $1.28-1.69
- **Datasheet**: [MCP23017 Datasheet](https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/microchip-technology/MCP23017-E-SP/894272

## Description

The MCP23017 is a 16-bit I/O expander that provides additional GPIO pins for microcontrollers through an I2C interface. It features two 8-bit ports (Port A and Port B) that can be configured independently as inputs or outputs. This IC is ideal for expanding the I/O capabilities of Arduino, Raspberry Pi, and other microcontroller systems when you need more digital pins than are available on the main controller.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 1.8V ~ 5.5V
- **Supply Current**: 1mA (quiescent), 1µA (standby)
- **Clock Frequency**: 1.7MHz (I2C)
- **Output Current**: 25mA per pin
- **Logic Levels**: 
  - Logic Low: max 0.2 × VDD
  - Logic High: min 0.8 × VDD

### Physical Characteristics  
- **Package**: 28-SPDIP (0.300", 7.62mm)
- **Dimensions**: Standard 28-pin DIP package
- **Operating Temperature**: -40°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features
- 16 GPIO pins (two 8-bit ports)
- I2C interface (up to 8 devices on same bus)
- Configurable interrupt output
- Power-on reset (POR)
- Push-pull outputs
- Individual pin direction control
- Hardware address pins for multiple devices
- 3.3V and 5V compatible

## Image

*Image needed - Standard 28-pin DIP package IC with MCP23017-E/SP markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (28-SPDIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | GPB0 | Port B bit 0 |
| 2 | GPB1 | Port B bit 1 |
| 3 | GPB2 | Port B bit 2 |
| 4 | GPB3 | Port B bit 3 |
| 5 | GPB4 | Port B bit 4 |
| 6 | GPB5 | Port B bit 5 |
| 7 | GPB6 | Port B bit 6 |
| 8 | GPB7 | Port B bit 7 |
| 9 | VDD | Power supply (+1.8V to +5.5V) |
| 10 | VSS | Ground |
| 11 | NC | Not connected |
| 12 | SCL | I2C clock |
| 13 | SDA | I2C data |
| 14 | NC | Not connected |
| 15 | A0 | Address select bit 0 |
| 16 | A1 | Address select bit 1 |
| 17 | A2 | Address select bit 2 |
| 18 | RESET | Reset input (active low) |
| 19 | INTB | Interrupt output for Port B |
| 20 | INTA | Interrupt output for Port A |
| 21 | GPA0 | Port A bit 0 |
| 22 | GPA1 | Port A bit 1 |
| 23 | GPA2 | Port A bit 2 |
| 24 | GPA3 | Port A bit 3 |
| 25 | GPA4 | Port A bit 4 |
| 26 | GPA5 | Port A bit 5 |
| 27 | GPA6 | Port A bit 6 |
| 28 | GPA7 | Port A bit 7 |

## Applications

Common use cases and applications for this component:
- Arduino and Raspberry Pi GPIO expansion
- LED matrix control
- Keypad/button matrix scanning
- Sensor input expansion
- Relay control boards
- Industrial control systems
- Home automation projects
- Robot control systems

## Circuit Examples

### Basic I2C Connection
```
VDD (Pin 9) ---- +3.3V or +5V
VSS (Pin 10) --- Ground
SCL (Pin 12) --- I2C Clock (Arduino A5, RPi GPIO 3)
SDA (Pin 13) --- I2C Data (Arduino A4, RPi GPIO 2)
RESET (Pin 18) - VDD (or control pin)
A0-A2 (Pins 15-17) - Address selection (GND/VDD)
```

### LED Control Example
```
GPA0-GPA7 (Pins 21-28) -> LEDs with current limiting resistors
GPB0-GPB7 (Pins 1-8) -> Additional LEDs or other outputs
Configure all pins as outputs in software
```

### Button Input Example
```
GPA0-GPA7 (Pins 21-28) -> Buttons with pull-up resistors
Configure pins as inputs with internal pull-ups enabled
Use interrupt pins (INTA/INTB) for change detection
```

## Technical Notes

Important technical considerations and features:
- **I2C Address**: Base address 0x20, configurable with A0-A2 pins
- **Multiple Devices**: Up to 8 MCP23017s on same I2C bus (addresses 0x20-0x27)
- **Pull-up Resistors**: Internal 100kΩ pull-ups available on all GPIO pins
- **Interrupt Capability**: Separate interrupt outputs for each port
- **Power Supply Decoupling**: Use 0.1µF ceramic capacitor near VDD pin
- **I2C Pull-ups**: Require external pull-up resistors on SCL/SDA lines (4.7kΩ typical)
- **Reset Pin**: Can be tied to VDD if not used for control
- **Pin Current**: Maximum 25mA per pin, 125mA total per port

## Programming Notes

- **Arduino Libraries**: Available libraries like "Adafruit MCP23017" simplify usage
- **Register Access**: Direct register manipulation possible for advanced control
- **Initialization**: Requires setting IODIR registers to configure pin directions
- **Interrupt Handling**: Can trigger on pin change or compare against reference value
- **Port Operations**: Can read/write entire 8-bit ports or individual pins

## Tags

io-expander, interface-ic, i2c, gpio, microchip, mcp23017 #cabinet-3 #bin-38 #status-available

## Notes

The MCP23017 is one of the most popular and widely-used I/O expanders in the maker and embedded systems community. Its I2C interface makes it easy to add 16 additional GPIO pins using only two wires from your microcontroller. The ability to chain up to 8 devices on the same bus means you can potentially add 128 GPIO pins with minimal pin usage on your main controller. Having 24 of these ICs provides excellent flexibility for projects requiring extensive I/O expansion, from simple LED control to complex industrial automation systems.
