---
type: electronic-component
category: OLED Displays
subcategory: I2C OLED Module
brand: Frienda
part_number: B08CDN5PSJ
size: 0.91 inch
color: blue
resolution: 128x32
driver: SSD1306
interface: I2C
voltage: 3.3V-5V
current: 20mA
location: Cabinet-1/Bin-21
quantity: 5
status: available
price_range: $12-15
tags: [oled-display, i2c, ssd1306, blue, 128x32, frienda, arduino, raspberry-pi]
---

# Frienda 0.91" I2C OLED Display Module

## Details
- **Location**: Cabinet-1, Bin 21
- **Category**: OLED Displays
- **Type**: I2C OLED Display Module
- **Size**: 0.91 inch diagonal
- **Resolution**: 128x32 pixels
- **Quantity**: 5
- **Product URL**: https://www.amazon.com/Pieces-Display-Module-SSD1306-3-3V-5V/dp/B08CDN5PSJ

## Description
Frienda 5 pieces I2C OLED display module with 0.91 inch screen size and 128x32 pixel resolution. Features SSD1306 driver chip with I2C interface for easy connection to microcontrollers. Self-illuminated OLED technology provides excellent contrast and visibility.

## Specifications
- **Display Size**: 0.91 inch diagonal
- **Resolution**: 128x32 pixels
- **Driver IC**: SSD1306
- **Interface**: I2C (SDA, SCL)
- **Display Color**: Blue
- **Operating Voltage**: 3.3V to 5V
- **Current Consumption**: ~20mA (typical)
- **Viewing Angle**: >160°
- **Operating Temperature**: -40°C to +85°C
- **Package**: PCB module without pin headers

## Image
![Frienda 0.91 inch I2C OLED Display Module](../attachments/frienda-oled-091.jpg)

## Features
- **Self-Illuminated**: No backlight required, each pixel emits light
- **High Contrast**: Excellent visibility in various lighting conditions
- **Low Power**: Efficient OLED technology with low current consumption
- **Wide Voltage Range**: Compatible with 3.3V and 5V systems
- **I2C Interface**: Simple 2-wire communication (SDA, SCL)
- **Compact Size**: Small form factor perfect for portable projects
- **No Pin Headers**: Requires soldering of header pins for breadboard use

## Pinout
- **VCC**: Power supply (3.3V to 5V)
- **GND**: Ground
- **SDA**: I2C data line
- **SCL**: I2C clock line

## Applications
- Arduino and microcontroller projects
- Raspberry Pi displays
- IoT device status displays
- Portable instruments
- Data loggers
- Weather stations
- Digital clocks
- Menu systems
- Status indicators
- Wearable electronics

## Compatibility
- **Arduino**: All Arduino boards (Uno, Nano, ESP32, etc.)
- **Raspberry Pi**: All models (requires I2C enable)
- **ESP8266/ESP32**: Native I2C support
- **STM32**: Compatible with HAL I2C libraries
- **Microcontrollers**: Any MCU with I2C capability

## Libraries & Resources
- **Arduino**: Adafruit SSD1306 library
- **CircuitPython**: adafruit_ssd1306
- **Raspberry Pi**: luma.oled library
- **Documentation**: SSD1306 datasheet available online
- **I2C Address**: Typically 0x3C or 0x3D

## Interface Requirements
- **Power Supply**: 3.3V or 5V regulated
- **I2C Pullups**: Usually built-in on development boards
- **Pin Headers**: Requires soldering for breadboard connections
- **Current**: Ensure adequate power supply capacity

## Notes
- **No Pin Headers**: Displays come without headers, soldering required
- **I2C Address**: Check address with I2C scanner if multiple devices
- **Power Consumption**: Lower when fewer pixels are lit
- **Lifespan**: OLED displays may dim over extended continuous use
- **Fragile**: Handle carefully, OLED screens can crack easily
- **Static Sensitive**: Use anti-static precautions during handling

## Usage Tips
- Solder 4-pin header for easy breadboard prototyping
- Use pull-up resistors if not present on your development board
- Start with lower brightness settings to extend display life
- Consider sleep modes for battery-powered applications
- Test I2C address before connecting multiple I2C devices

## Programming Examples
- Display text and graphics
- Real-time sensor data visualization
- Menu navigation systems
- Progress bars and status indicators
- Simple animations and scrolling text

## Tags
oled-display, i2c, ssd1306, blue, 128x32, frienda, arduino, raspberry-pi
