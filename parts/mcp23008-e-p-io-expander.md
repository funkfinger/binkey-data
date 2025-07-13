---
type: electronic-component
category: Interface ICs
subcategory: I/O Expanders
brand: Microchip Technology
part_number: MCP23008-E/P
model: MCP23008-E/P
description: 8-bit I/O expander with I2C interface
manufacturer: Microchip Technology
package: 18-PDIP
size: 0.300" (7.62mm) width
voltage: 1.8V ~ 5.5V
current: 1mA quiescent current
power: Low power consumption
interface: [I2C]
connectivity: [Through-hole pins]
compatibility: [Arduino, Raspberry Pi, Microcontrollers]
location: [Cabinet-3/Bin-38/Section-B]
quantity: 14
status: available
price_range: $1.17-1.54
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf
product_url: https://www.digikey.com/en/products/detail/microchip-technology/MCP23008-E-P/735951
tags: [io-expander, interface-ic, i2c, gpio, microchip, mcp23008, cabinet-3, bin-38, status-available]
date_added: 2025-01-12
---

# MCP23008-E/P - 8-Bit I/O Expander with I2C Interface

## Details

- **Location**: Cabinet-3, Bin 38, Section B
- **Category**: Interface ICs
- **Brand**: Microchip Technology
- **Part Number**: MCP23008-E/P
- **Package**: 18-PDIP
- **Quantity**: 14
- **Status**: Available
- **Price Range**: $1.17-1.54
- **Datasheet**: [MCP23008 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/microchip-technology/MCP23008-E-P/735951

## Description

The MCP23008 is an 8-bit I/O expander that provides additional GPIO pins for microcontrollers through an I2C interface. It features a single 8-bit port that can be configured independently as inputs or outputs. This IC is ideal for expanding the I/O capabilities of Arduino, Raspberry Pi, and other microcontroller systems when you need additional digital pins but want to minimize the pin usage on your main controller.

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
- **Package**: 18-PDIP (0.300", 7.62mm)
- **Dimensions**: Standard 18-pin DIP package
- **Operating Temperature**: -40°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features
- 8 GPIO pins (single 8-bit port)
- I2C interface (up to 8 devices on same bus)
- Configurable interrupt output
- Power-on reset (POR)
- Push-pull outputs
- Individual pin direction control
- Hardware address pins for multiple devices
- 3.3V and 5V compatible

## Image

*Image needed - Standard 18-pin DIP package IC with MCP23008-E/P markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (18-PDIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | SCL | I2C clock |
| 2 | SDA | I2C data |
| 3 | A2 | Address select bit 2 |
| 4 | A1 | Address select bit 1 |
| 5 | A0 | Address select bit 0 |
| 6 | RESET | Reset input (active low) |
| 7 | NC | Not connected |
| 8 | INT | Interrupt output |
| 9 | VSS | Ground |
| 10 | GP0 | GPIO pin 0 |
| 11 | GP1 | GPIO pin 1 |
| 12 | GP2 | GPIO pin 2 |
| 13 | GP3 | GPIO pin 3 |
| 14 | GP4 | GPIO pin 4 |
| 15 | GP5 | GPIO pin 5 |
| 16 | GP6 | GPIO pin 6 |
| 17 | GP7 | GPIO pin 7 |
| 18 | VDD | Power supply (+1.8V to +5.5V) |

## Applications

Common use cases and applications for this component:
- Arduino and Raspberry Pi GPIO expansion
- LED control (up to 8 LEDs)
- Button/switch input expansion
- Sensor input expansion
- Small relay control
- Digital signal routing
- Simple automation projects
- Educational electronics projects

## Circuit Examples

### Basic I2C Connection
```
VDD (Pin 18) ---- +3.3V or +5V
VSS (Pin 9) ----- Ground
SCL (Pin 1) ----- I2C Clock (Arduino A5, RPi GPIO 3)
SDA (Pin 2) ----- I2C Data (Arduino A4, RPi GPIO 2)
RESET (Pin 6) --- VDD (or control pin)
A0-A2 (Pins 5-3) - Address selection (GND/VDD)
```

### LED Control Example
```
GP0-GP7 (Pins 10-17) -> LEDs with current limiting resistors
Configure all pins as outputs in software
Each pin can drive up to 25mA
```

### Button Input Example
```
GP0-GP7 (Pins 10-17) -> Buttons with pull-up resistors
Configure pins as inputs with internal pull-ups enabled
Use interrupt pin (INT) for change detection
```

## Technical Notes

Important technical considerations and features:
- **I2C Address**: Base address 0x20, configurable with A0-A2 pins
- **Multiple Devices**: Up to 8 MCP23008s on same I2C bus (addresses 0x20-0x27)
- **Pull-up Resistors**: Internal 100kΩ pull-ups available on all GPIO pins
- **Interrupt Capability**: Single interrupt output for all pins
- **Power Supply Decoupling**: Use 0.1µF ceramic capacitor near VDD pin
- **I2C Pull-ups**: Require external pull-up resistors on SCL/SDA lines (4.7kΩ typical)
- **Reset Pin**: Can be tied to VDD if not used for control
- **Pin Current**: Maximum 25mA per pin, 125mA total for all pins

## Programming Notes

- **Arduino Libraries**: Available libraries like "Adafruit MCP23008" simplify usage
- **Register Access**: Direct register manipulation possible for advanced control
- **Initialization**: Requires setting IODIR register to configure pin directions
- **Interrupt Handling**: Can trigger on pin change or compare against reference value
- **Port Operations**: Can read/write entire 8-bit port or individual pins

## Comparison with MCP23017

The MCP23008 is the smaller sibling of the MCP23017:
- **MCP23008**: 8 GPIO pins, 18-pin package, single port
- **MCP23017**: 16 GPIO pins, 28-pin package, dual ports
- **Same Interface**: Both use I2C with identical addressing scheme
- **Same Features**: Both support interrupts, pull-ups, and similar functionality
- **Use Case**: MCP23008 for smaller projects, MCP23017 for more I/O needs

## Tags

io-expander, interface-ic, i2c, gpio, microchip, mcp23008 #cabinet-3 #bin-38 #status-available

## Notes

The MCP23008 is the perfect choice when you need to add a moderate number of GPIO pins (8) to your microcontroller project without using many pins on your main controller. It's particularly useful for smaller projects where the 16-pin MCP23017 would be overkill. The I2C interface makes it easy to integrate, and the ability to chain up to 8 devices means you can potentially add 64 GPIO pins using only two wires from your microcontroller. Having 14 of these ICs provides excellent flexibility for various small to medium-scale I/O expansion needs.
