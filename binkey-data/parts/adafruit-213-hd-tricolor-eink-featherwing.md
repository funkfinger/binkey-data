---
type: part
title: Adafruit 2.13" HD Tri-Color eInk FeatherWing
description: 2.13 inch tri-color e-paper display FeatherWing with 250x122 resolution, built-in SRAM and microSD slot
manufacturer: Adafruit
part_number: 4814
category: featherwings
subcategory: display-wings
tags: [featherwing, eink, epaper, display, tricolor, 250x122, ssd1680, sram, microsd, adafruit]
quantity: 1
location: [cabinet-1-bin-35]
purchase_url: https://www.adafruit.com/product/4814
price: 24.95
currency: USD
date_added: 2025-01-09
status: active
---

# Adafruit 2.13" HD Tri-Color eInk FeatherWing

## Overview

The Adafruit 2.13" HD Tri-Color eInk FeatherWing brings easy e-paper functionality to your Feather projects. This FeatherWing features a high-resolution 250x122 pixel tri-color e-ink display that can show black, white, and red content. The display retains its image even when powered off and includes built-in SRAM for frame buffering and a microSD slot for image storage.

## Specifications

- **Display Type**: E-Paper (Electronic Ink)
- **Screen Size**: 2.13" diagonal
- **Resolution**: 250x122 pixels (HD version)
- **Colors**: Tri-color (Black, White, Red)
- **Controller**: SSD1680
- **Panel Variant**: RW (Red/White)
- **Interface**: SPI
- **Built-in SRAM**: Frame buffer memory
- **Storage**: MicroSD card slot
- **Dimensions**: 61.5mm x 31.4mm x 6.6mm (excluding mounting holes)
- **Weight**: 14.5g / 0.5oz

## Features

- **Persistent Display**: Image remains visible without power
- **Ultra Low Power**: Only consumes power during refresh
- **High Resolution**: 250x122 pixels (upgraded from 212x104)
- **Tri-Color Support**: Black, white, and red ink
- **Built-in SRAM**: No need for large frame buffers in microcontroller
- **MicroSD Slot**: Store images and data files
- **Wide Viewing Angle**: Excellent readability from all angles
- **Sunlight Readable**: Perfect visibility in bright conditions
- **No Backlight Needed**: Reflective display technology

## Memory Management

- **SRAM Buffer**: Built-in memory chip for frame buffering
- **Shared SPI**: SRAM uses same SPI bus as display
- **Memory Efficient**: Reduces microcontroller RAM requirements
- **Frame Buffer Size**: 250 x 122 x 2 colors = ~7.5KB handled by SRAM

## Pinout & Connections

### SPI Interface
- **MOSI**: SPI data output
- **MISO**: SPI data input  
- **SCK**: SPI clock
- **CS**: Display chip select
- **SRAM CS**: SRAM chip select
- **SD CS**: MicroSD chip select
- **DC**: Data/Command selection
- **RST**: Reset pin
- **BUSY**: Busy status output

## Applications

- Electronic shelf labels
- Status displays for IoT devices
- Weather stations
- Digital signage
- E-readers and text displays
- Battery-powered displays
- Industrial instruments
- Smart home displays

## Compatibility

- **All Feather Boards**: ESP8266, ESP32, M0, M4, RP2040, 32u4, etc.
- **Arduino IDE**: Adafruit EPD library support
- **CircuitPython**: Native displayio support
- **Memory Requirements**: Works with low-memory microcontrollers

## Programming Support

### Arduino Libraries
- Adafruit EPD library
- Adafruit GFX library for graphics
- SD card libraries for file access

### CircuitPython
- displayio support
- Built-in graphics capabilities
- File system support for SD card

## Display Characteristics

- **Refresh Time**: Slower than LCD (typical for e-paper)
- **Refresh Types**: Full refresh and partial refresh supported
- **Viewing Angle**: Wide angle visibility
- **Contrast**: High contrast black and red on white
- **Durability**: No ghosting when properly refreshed
- **Temperature Range**: Optimal performance at room temperature

## Important Notes

- **Refresh Speed**: E-paper displays refresh slowly (several seconds)
- **Power Usage**: Only during refresh operations
- **Pin Requirements**: Uses multiple SPI pins for display, SRAM, and SD
- **Assembly**: Comes fully assembled with socket headers
- **Upgrade**: Higher resolution than previous 212x104 version

## Package Contents

- 1x 2.13" HD Tri-Color eInk FeatherWing (fully assembled)
- 1x Socket headers (pre-installed)
- Documentation and tutorial links

## File Storage

- **MicroSD Support**: Store images, fonts, and data
- **Image Formats**: BMP and other formats supported
- **File System**: Standard SD card file operations
- **Capacity**: Limited only by SD card size

## Best Practices

- **Static Content**: Ideal for slowly changing information
- **Power Management**: Turn off between updates for battery projects
- **Temperature**: Avoid extreme temperatures for best performance
- **Refresh Strategy**: Use full refresh periodically to prevent ghosting
