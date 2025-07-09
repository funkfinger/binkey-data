---
type: part
title: Adafruit FeatherWing OLED 128x32
description: 128x32 monochrome OLED display add-on for Feather boards with 3 user buttons
manufacturer: Adafruit
part_number: 2900
category: featherwings
subcategory: display-wings
tags: [featherwing, oled, display, 128x32, i2c, ssd1306, adafruit, buttons]
quantity: 1
location: [cabinet-1-bin-35]
purchase_url: https://www.adafruit.com/product/2900
price: 14.95
currency: USD
date_added: 2025-01-09
status: active
---

# Adafruit FeatherWing OLED 128x32

## Overview

The Adafruit FeatherWing OLED 128x32 is a compact monochrome OLED display add-on that works with any Feather main board. This FeatherWing features a crisp 128x32 OLED display with high contrast and excellent readability, plus three user buttons (A, B, C) for creating interactive interfaces.

## Specifications

- **Display Type**: OLED (Organic Light Emitting Diode)
- **Resolution**: 128x32 pixels
- **Colors**: Monochrome white on black
- **Screen Size**: ~1" diagonal
- **Display Area**: ~25.8mm / ~1.0"
- **Controller**: SSD1306
- **Interface**: I2C (address 0x3C)
- **Operating Voltage**: 3.3V/5V compatible
- **PCB Dimensions**: 22.9mm x 50.9mm / 0.9" x 2"
- **Weight**: 4.8g

## Features

- **High Contrast Display**: Self-illuminating OLED pixels for excellent readability
- **No Backlight Required**: Each pixel generates its own light
- **3 User Buttons**: Tactile buttons labeled A, B, and C for user interface
- **Reset Button**: Convenient reset functionality
- **I2C Interface**: Uses only 2 pins plus power and ground
- **Stackable Design**: Can be stacked with other FeatherWings
- **Low Power**: Minimal power consumption
- **Wide Viewing Angle**: Clear visibility from multiple angles

## Pinout

- **Power**: 3.3V and Ground from Feather
- **I2C**: SDA and SCL pins
- **Reset**: Connected to Feather reset pin
- **Buttons**: A, B, C buttons connected to digital pins

## Applications

- Status displays for IoT projects
- Menu systems and user interfaces
- Sensor data visualization
- Debug information display
- Portable device displays
- Weather stations
- Data logging displays
- Badge displays

## Compatibility

- **All Feather Boards**: ESP8266, ESP32, M0, M4, RP2040, 32u4, etc.
- **Arduino IDE**: Full library support
- **CircuitPython**: Native support
- **I2C Devices**: Can be stacked with other I2C FeatherWings

## Programming Support

### Arduino Libraries
- Adafruit SSD1306 library
- Adafruit GFX library for graphics
- Button handling libraries

### CircuitPython
- displayio support
- Built-in graphics capabilities
- Easy button integration

## Important Notes

- **OLED Lifespan**: Pixels may dim after 1000+ hours of continuous use
- **Power Management**: Turn off display when not needed to preserve lifespan
- **I2C Address**: Fixed at 0x3C
- **Pin Usage**: Uses I2C pins, can be stacked with other I2C devices
- **Assembly**: Available with loose headers (soldering required) or pre-assembled

## Package Contents

- 1x FeatherWing OLED 128x32 PCB
- 1x Set of 0.1" headers (unattached for ID 2900)
- Documentation and tutorial links

## Mounting

- **Feather Stacking Headers**: For permanent stacking installation
- **Feather Female Headers**: For removable connection
- **Direct Soldering**: Large square pads available for wire connections

## Upgrade Path

- Compatible pin layout with 128x64 OLED FeatherWing for easy upgrades
- Same button configuration and I2C interface
- Code modifications needed for resolution differences
