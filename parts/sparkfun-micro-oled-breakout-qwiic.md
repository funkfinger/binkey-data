---
type: part
title: SparkFun Micro OLED Breakout (Qwiic)
description: Small monochrome OLED display with Qwiic connectors, 64x48 pixels, blue-on-black
manufacturer: SparkFun
part_number: LCD-22495
category: oled-displays
subcategory: micro-oled
tags: [oled, display, qwiic, i2c, 64x48, sparkfun, micro, blue, ssd1306]
quantity: 1
location: [cabinet-1-bin-34]
datasheet_url: https://cdn.sparkfun.com/assets/learn_tutorials/3/0/8/SSD1306.pdf
purchase_url: https://www.sparkfun.com/sparkfun-micro-oled-breakout-qwiic-lcd-22495.html
price: 11.25
currency: USD
date_added: 2025-01-09
status: active
---

# SparkFun Micro OLED Breakout (Qwiic)

## Overview

The SparkFun Qwiic Micro OLED Breakout is a compact, high-contrast OLED display perfect for adding graphics and text to projects. Despite its small size, it delivers crisp, clear images with excellent readability. The Qwiic connectors make it incredibly easy to integrate into projects without soldering.

## Specifications

- **Screen Size**: 0.66 inches diagonal
- **Resolution**: 64x48 pixels
- **Display Type**: OLED (Organic Light Emitting Diode)
- **Colors**: Monochrome Blue-on-Black
- **Interface**: I2C via Qwiic connectors
- **Operating Voltage**: 3.3V
- **Operating Current**: 10mA (20mA max)
- **Controller**: SSD1306
- **Dimensions**: 1.08" x 1.17"

## Features

- **2x Qwiic Connectors**: Easy daisy-chaining without soldering
- **High Contrast Display**: Excellent readability in various lighting conditions
- **Self-Illuminating**: No backlight required
- **Built-in Pull-up Resistors**: 4.7kΩ I2C pull-ups included
- **Selectable I2C Address**: 0x3D (default) or 0x3C (alternate)
- **Mounting Holes**: Two mounting holes for secure installation
- **Detachable Cable Holder**: Convenient cable management

## Pinout & Connections

### Qwiic Connectors
- **Red**: 3.3V
- **Black**: Ground
- **Blue**: SDA (I2C Data)
- **Yellow**: SCL (I2C Clock)

### 0.1" Header Pins
- **GND**: Ground
- **3V3**: 3.3V power
- **SDA**: I2C data line
- **SCL**: I2C clock line

## Jumpers

- **I2C Pull-up Jumper**: Disable built-in pull-ups if external ones are used
- **ADDR Jumper**: Change I2C address from 0x3D to 0x3C

## Applications

- Status displays for embedded projects
- Diagnostic information display
- Small graphics and text output
- Menu systems
- Sensor data visualization
- Wearable electronics
- IoT device status indicators

## Compatibility

- Arduino (all variants)
- Raspberry Pi
- ESP32/ESP8266
- STM32
- Teensy
- Any microcontroller with I2C capability
- All Qwiic-enabled development boards

## Programming Support

### Arduino Libraries
- SparkFun Micro OLED Arduino Library
- SparkFun Qwiic OLED Arduino Library
- Adafruit SSD1306 library (compatible)

### Other Platforms
- Python package for Raspberry Pi
- MicroPython support
- C/C++ libraries available

## Notes

- Multiple displays require a Qwiic Mux for same I2C bus
- Compact size perfect for space-constrained projects
- Low power consumption suitable for battery applications
- Excellent for displaying simple graphics, text, and icons
- Fast refresh rate compared to E-Paper displays
- Self-illuminating display works well in dark environments
