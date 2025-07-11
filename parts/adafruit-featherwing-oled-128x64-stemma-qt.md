---
type: part
title: Adafruit FeatherWing OLED 128x64 STEMMA QT
description: 128x64 monochrome OLED display add-on for Feather boards with STEMMA QT connector and 3 user buttons
manufacturer: Adafruit
part_number: 4650
category: featherwings
subcategory: display-wings
tags: [featherwing, oled, display, 128x64, stemma-qt, qwiic, i2c, sh1107, adafruit, buttons]
quantity: 1
location: [cabinet-1-bin-35]
datasheet_url: https://cdn-shop.adafruit.com/product-files/4650/4650_C14586.pdf
purchase_url: https://www.adafruit.com/product/4650
price: 14.95
currency: USD
date_added: 2025-01-09
status: active
---

# Adafruit FeatherWing OLED 128x64 STEMMA QT

## Overview

The Adafruit FeatherWing OLED 128x64 is a gorgeous monochrome OLED display add-on that works with any Feather main board. This FeatherWing features a crisp 128x64 OLED display with high contrast and excellent readability, plus three user buttons (A, B, C) and a STEMMA QT connector for easy sensor integration.

## Specifications

- **Display Type**: OLED (Organic Light Emitting Diode)
- **Resolution**: 128x64 pixels
- **Colors**: Monochrome white on black
- **Screen Size**: ~1.3" diagonal
- **Display Area**: ~25.8mm / ~1.0"
- **Controller**: SH1107 (not SSD1306)
- **Interface**: I2C
- **Operating Voltage**: 3.3V/5V compatible
- **PCB Dimensions**: 22.9mm x 50.9mm / 0.9" x 2"

## Features

- **High Contrast Display**: Self-illuminating OLED pixels for excellent readability
- **No Backlight Required**: Each pixel generates its own light
- **3 User Buttons**: Tactile buttons labeled A, B, and C for user interface
- **STEMMA QT Connector**: Easy plug-and-play connection for sensors and peripherals
- **Reset Button**: Convenient reset functionality
- **I2C Interface**: Uses only 2 pins plus power and ground
- **Stackable Design**: Can be stacked with other FeatherWings
- **Pin Compatible**: Upgrade path from 128x32 OLED FeatherWing

## Pinout

- **Power**: 3.3V and Ground from Feather
- **I2C**: SDA and SCL pins
- **Reset**: Connected to Feather reset pin
- **Buttons**: A, B, C buttons accessible via I2C
- **STEMMA QT**: 4-pin JST SH connector (VCC, GND, SDA, SCL)

## Applications

- Status displays for IoT projects
- Menu systems and user interfaces
- Sensor data visualization
- Debug information display
- Portable device displays
- Weather stations
- Data logging displays

## Compatibility

- **All Feather Boards**: ESP8266, ESP32, M0, M4, RP2040, etc.
- **Arduino IDE**: Full library support
- **CircuitPython**: Native support
- **STEMMA QT/Qwiic**: Compatible with SparkFun Qwiic ecosystem
- **Grove**: Compatible with Grove I2C sensors via adapter cable

## Programming Support

### Arduino Libraries
- Adafruit SH1107 library
- Adafruit GFX library for graphics
- Button handling libraries

### CircuitPython
- displayio support
- Built-in graphics capabilities
- Easy button integration

## Important Notes

- **OLED Lifespan**: Pixels may dim after 1000+ hours of continuous use
- **Power Management**: Turn off display when not needed to preserve lifespan
- **Controller Difference**: Uses SH1107, not SSD1306 (requires specific library)
- **Pin Usage**: Uses I2C pins, can be stacked with other I2C devices
- **Assembly**: Comes with loose headers requiring soldering

## Package Contents

- 1x FeatherWing OLED 128x64 PCB
- 1x Set of 0.1" headers (unattached)
- Documentation and tutorial links

## Mounting

- **Feather Stacking Headers**: For permanent stacking installation
- **Feather Female Headers**: For removable connection
- **Direct Soldering**: Large square pads available for wire connections
- **Mounting Holes**: Available for secure enclosure mounting
