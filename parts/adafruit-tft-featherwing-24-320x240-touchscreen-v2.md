---
type: part
title: Adafruit TFT FeatherWing 2.4" 320x240 Touchscreen V2
description: 2.4 inch color TFT display with resistive touchscreen and microSD card slot for Feather boards
manufacturer: Adafruit
part_number: 3315
category: featherwings
subcategory: display-wings
tags: [featherwing, tft, display, touchscreen, 320x240, ili9341, tsc2007, microsd, stemma-qt, adafruit]
quantity: 1
location: [cabinet-1-bin-35]
purchase_url: https://www.adafruit.com/product/3315
price: 34.95
currency: USD
date_added: 2025-01-09
status: active
---

# Adafruit TFT FeatherWing 2.4" 320x240 Touchscreen V2

## Overview

The Adafruit TFT FeatherWing is a beautiful 2.4" color touchscreen display shield designed for all Feather boards. This V2 revision features a bright 320x240 pixel TFT display with resistive touchscreen, built-in microSD card socket, STEMMA QT connector, and improved touchscreen controller for enhanced functionality.

## Specifications

- **Display Type**: TFT LCD with LED backlight
- **Screen Size**: 2.4" diagonal
- **Resolution**: 320x240 pixels (QVGA)
- **Colors**: 16-bit color (65,536 colors)
- **Backlight**: 4 white LEDs
- **Touchscreen**: Resistive touch panel
- **Touch Controller**: TSC2007 (V2 upgrade from STMPE811)
- **Display Controller**: ILI9341
- **Interface**: SPI for display, I2C for touch
- **PCB Dimensions**: 65.0mm x 53.0mm x 9.5mm / 2.6" x 2.1" x 0.4"
- **Weight**: 32.2g / 1.1oz

## Features

- **High Resolution Color Display**: 320x240 pixels with 16-bit color depth
- **Resistive Touchscreen**: Pressure-sensitive touch detection
- **MicroSD Card Slot**: Store images, data, and files
- **STEMMA QT Connector**: Easy connection to sensors and peripherals
- **Reset Button**: Right-angle reset button for easy access
- **On/Off Switch**: Connected to Feather Enable pin
- **Dual Socket Design**: Two sockets per pin for wire connections
- **Mounting Holes**: Four mounting holes for secure installation
- **Fast SPI Interface**: Optimized for quick display updates

## Pinout & Connections

### Display (SPI)
- **MOSI**: SPI data output
- **MISO**: SPI data input
- **SCK**: SPI clock
- **CS**: Chip select for display
- **DC**: Data/Command selection
- **RST**: Reset pin

### Touchscreen (I2C)
- **SDA**: I2C data line
- **SCL**: I2C clock line
- **IRQ**: Optional interrupt output

### MicroSD Card (SPI)
- **CS**: Chip select for SD card
- **Shared SPI**: Uses same SPI bus as display

### Power & Control
- **3.3V/5V**: Power supply
- **GND**: Ground
- **EN**: Enable pin (connected to on/off switch)

## Applications

- Graphical user interfaces
- Touch-based control panels
- Image and video display
- Data visualization dashboards
- Interactive menus and settings
- Gaming displays
- Weather stations with graphics
- IoT device interfaces

## Compatibility

- **All Feather Boards**: ESP8266, ESP32, M0, M4, RP2040, etc.
- **Arduino IDE**: Full library support
- **CircuitPython**: Native displayio support
- **STEMMA QT/Qwiic**: Compatible with sensor ecosystem
- **Note**: Teensy 3.x Feather does not support Enable pin switch

## Programming Support

### Arduino Libraries
- Adafruit ILI9341 library
- Adafruit GFX library for graphics
- Adafruit TSC2007 library (V2)
- SD card libraries

### CircuitPython
- displayio support
- Built-in graphics and touch capabilities
- SD card file system support

## V2 Improvements (Oct 2023)

- **New Touch Controller**: TSC2007 replaces discontinued STMPE811
- **STEMMA QT Port**: Added for easy sensor connections
- **Right-Angle Reset**: Improved reset button design
- **Updated Libraries**: New touch libraries required for V2

## Important Notes

- **Library Compatibility**: V2 requires updated touchscreen libraries
- **Pin Usage**: Uses multiple SPI and I2C pins
- **Power Consumption**: LED backlight increases power usage
- **Touch Sensitivity**: Resistive touch requires pressure
- **Assembly**: Comes fully assembled with dual sockets

## Package Contents

- 1x TFT FeatherWing V2 PCB (fully assembled)
- 1x Set of dual socket headers (pre-installed)
- Documentation and tutorial links

## Storage & Display

- **MicroSD Support**: Store images, fonts, and data files
- **Image Formats**: BMP files supported natively
- **Graphics**: Full Adafruit GFX library compatibility
- **Text**: Multiple font sizes and custom fonts supported
