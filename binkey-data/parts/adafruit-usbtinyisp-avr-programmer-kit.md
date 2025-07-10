---
type: part
title: Adafruit USBtinyISP AVR Programmer Kit
description: Open-source USB AVR programmer kit based on USBtinyISP design, perfect for programming AVR microcontrollers
manufacturer: Adafruit
part_number: 46
category: programming-tools
subcategory: avr-programmers
tags: [usbtinyisp, avr, programmer, usb, open-source, kit, atmega, attiny, isp, spi, diy]
quantity: 1
location: [cabinet-1-bin-37]
datasheet_url: https://learn.adafruit.com/usbtinyisp
purchase_url: https://www.adafruit.com/product/46
price: 22.00
currency: USD
date_added: 2025-01-09
status: discontinued
---

# Adafruit USBtinyISP AVR Programmer Kit

## Overview

The Adafruit USBtinyISP is an open-source USB AVR programmer kit based on the popular USBtinyISP design by Dick Streefland. This compact and affordable programmer allows you to program AVR microcontrollers directly from your computer via USB, making it perfect for hobbyists, students, and professionals working with AVR-based projects.

## Specifications

- **Target Architecture**: AVR microcontrollers (ATmega, ATtiny, etc.)
- **Interface**: USB 2.0 Full Speed
- **Programming Protocol**: In-System Programming (ISP) via SPI
- **Target Voltage**: 3.3V or 5V (selectable via jumper)
- **Programming Speed**: Moderate speed, suitable for most applications
- **Power**: USB powered, can optionally power target
- **Dimensions**: 67mm x 42mm x 24mm (2.5in x 1.7in x 0.9in)
- **Weight**: 43.5g / 1.5oz

## Kit Features

### Open Source Design
- **Hardware**: Open-source PCB design and schematics
- **Firmware**: Open-source firmware based on V-USB
- **Documentation**: Comprehensive build and usage instructions
- **Community Support**: Large community of users and contributors

### Hardware Components
- **Microcontroller**: ATtiny2313 or ATtiny85 (depending on version)
- **USB Interface**: V-USB software USB implementation
- **Connectors**: 6-pin and 10-pin ISP headers
- **Power Options**: USB power with optional target power supply
- **Status LEDs**: Power and programming activity indicators

### Programming Capabilities
- **ISP Programming**: Standard In-System Programming via SPI
- **Fuse Programming**: Read and write fuse bits
- **EEPROM Access**: Read and write EEPROM data
- **Flash Programming**: Upload compiled programs to target
- **Verification**: Automatic verification after programming

## Supported Devices

### ATmega Series
- **ATmega328P**: Arduino Uno/Nano microcontroller
- **ATmega168**: Older Arduino microcontroller
- **ATmega32**: 32KB flash microcontroller
- **ATmega16**: 16KB flash microcontroller
- **ATmega8**: Classic 8KB microcontroller

### ATtiny Series
- **ATtiny85**: Popular 8-pin microcontroller
- **ATtiny84**: 14-pin microcontroller
- **ATtiny2313**: 20-pin microcontroller
- **ATtiny13**: Minimal 8-pin microcontroller

### Limitations
- **Flash Size**: Cannot program chips with more than 64K of flash
- **No Support**: ATmega1280/1281, ATmega2560/2561
- **Programming Methods**: Does not support JTAG or High Voltage programming

## Software Support

### AVR Development Tools
- **avrdude**: Primary programming software (cross-platform)
- **AVR Studio**: Atmel's development environment (Windows)
- **Arduino IDE**: With appropriate board definitions
- **PlatformIO**: Modern development platform

### Operating System Support
- **Windows**: Native driver support with libusb (XP tested, Vista/7 may vary)
- **macOS**: Native support with libusb
- **Linux**: Native support, no additional drivers needed
- **Cross-platform**: Works on any system with avrdude

## Applications

### Hobbyist Projects
- **Arduino Development**: Programming Arduino boards and clones
- **Custom AVR Projects**: Programming standalone AVR circuits
- **Learning Platform**: Educational AVR programming
- **Prototyping**: Quick programming during development

### Educational Use
- **Microcontroller Courses**: Teaching AVR programming
- **Electronics Education**: Understanding ISP programming
- **DIY Projects**: Building and programming custom circuits
- **STEM Education**: Hands-on microcontroller learning

## Assembly Instructions

### Kit Contents
- 1x USBtinyISP PCB
- 1x ATtiny2313 or ATtiny85 microcontroller (pre-programmed)
- Electronic components (resistors, capacitors, connectors)
- USB connector
- Headers and jumpers
- Enclosure

### Assembly Process
1. **Prepare Workspace**: Clean, well-lit area with soldering equipment
2. **Install Components**: Solder resistors, capacitors, and IC socket
3. **Add Connectors**: Install USB connector and ISP headers
4. **Insert Microcontroller**: Place pre-programmed chip in socket
5. **Test Assembly**: Verify connections and test functionality

### Required Tools
- Soldering iron (25-40W recommended)
- Solder (rosin-core, 60/40 or lead-free)
- Wire cutters/strippers
- Multimeter for testing
- Computer for testing

## Usage Instructions

### Basic Setup
1. **Install Software**: Install avrdude and USB drivers if needed
2. **Connect Programmer**: Plug USBtinyISP into USB port
3. **Connect Target**: Wire ISP header to target AVR circuit
4. **Set Voltage**: Configure voltage jumper for target (3.3V or 5V)
5. **Program Device**: Use avrdude or IDE to upload code

### Command Line Programming
```bash
# Program flash memory
avrdude -c usbtiny -p atmega328p -U flash:w:program.hex

# Read fuse bits
avrdude -c usbtiny -p atmega328p -U lfuse:r:-:h

# Set fuse bits (example)
avrdude -c usbtiny -p atmega328p -U lfuse:w:0x62:m
```

### Arduino IDE Integration
- Install USBtinyISP support in Arduino IDE
- Select "USBtinyISP" as programmer
- Use "Upload Using Programmer" option
- Compatible with Arduino boards and ATtiny cores

## Package Contents

- 1x USBtinyISP kit (unassembled)
- 1x Pre-programmed microcontroller
- Electronic components for assembly
- Enclosure
- 6-inch 6&10 pin ISP cables
- Assembly instructions and documentation

## Important Notes

- **Kit Assembly Required**: Basic soldering skills needed
- **Programming Speed**: Slower than professional programmers
- **Target Power**: Can power small targets, check current limits
- **Fuse Bit Caution**: Incorrect fuse settings can brick devices
- **Open Source**: Hardware and software freely available
- **Discontinued**: No longer stocked by Adafruit

## Dual Functionality

### SpokePOV Dongle
- **Alternative Use**: Functions as a USB SpokePOV dongle
- **Persistence of Vision**: Create light patterns for bicycle wheels
- **Educational**: Demonstrates POV concepts
- **Fun Project**: Combines programming tool with entertainment

## Troubleshooting

### Common Issues
- **Device Not Recognized**: Check USB drivers and connections
- **Programming Failures**: Verify target connections and power
- **Slow Programming**: Normal for USBtinyISP, be patient
- **Fuse Bit Errors**: Double-check fuse values before writing

### Best Practices
- **Double-check Wiring**: Verify all ISP connections
- **Use Proper Voltage**: Match programmer and target voltage
- **Backup Fuses**: Read original fuse settings before changes
- **Test Connections**: Use multimeter to verify continuity

## Advantages

- **Affordable**: Low-cost entry into AVR programming
- **Open Source**: Complete design transparency
- **Educational**: Great for learning AVR programming
- **Compact**: Small form factor for portable use
- **Community**: Large user base and support community
- **Dual Purpose**: Programming tool and SpokePOV dongle
