---
type: part
title: MakersBox Yet Another Programming Shield
description: Arduino shield for programming AVR microcontrollers with ZIF socket and multiple chip support
manufacturer: MakersBox
part_number: YAPS
category: programming-tools
subcategory: arduino-shields
tags: [yaps, programming-shield, arduino, avr, zif-socket, atmega, attiny, makersbox, diy, kit]
quantity: 1
location: [cabinet-1-bin-38]
purchase_url: https://www.tindie.com/products/makersbox/yet-another-programming-shield/
price: 22.50
currency: USD
date_added: 2025-01-09
status: active
---

# MakersBox Yet Another Programming Shield (YAPS)

## Overview

The Yet Another Programming Shield (YAPS) from MakersBox is an Arduino shield designed for programming AVR microcontrollers. Featuring a zero insertion force (ZIF) socket and jumper system, this shield allows programming of 8, 14, 20, and 28-pin AVR chips using a single socket, making it an essential tool for AVR development and prototyping.

## Specifications

- **Compatibility**: Arduino Uno, Duemilanove, Mega (with jumpers)
- **Socket Type**: 28-pin ZIF (Zero Insertion Force) socket
- **Chip Support**: 8, 14, 20, and 28-pin DIP packages
- **Programming Method**: Arduino as ISP (In-System Programmer)
- **Voltage**: 5V operation (3.3V compatible with modifications)
- **Indicators**: Status LEDs for programming feedback

## Key Features

### Universal ZIF Socket
- **28-pin ZIF Socket**: Accommodates multiple chip sizes
- **Easy Insertion**: Zero insertion force for chip protection
- **Jumper Configuration**: Simple jumper system for different pin counts
- **Secure Connection**: Reliable electrical contact during programming

### Programming Capabilities
- **Arduino as ISP**: Uses Arduino board as programmer
- **Bootloader Installation**: Install bootloaders on ATmega328P
- **Firmware Upload**: Program custom firmware to AVR chips
- **Fuse Programming**: Configure fuse bits for chip operation

### Status Indicators
- **Programming LEDs**: Visual feedback during programming
- **Power Indicator**: Shows shield power status
- **Activity LED**: Connected to pin D3 for blink testing
- **Error Indication**: Programming status feedback

## Supported Microcontrollers

### ATmega Series
- **ATmega328P**: Arduino Uno/Nano microcontroller
- **ATmega168**: Older Arduino microcontroller
- **ATmega8**: Classic 8KB microcontroller
- **ATmega32**: 32KB flash microcontroller

### ATtiny Series
- **ATtiny85**: Popular 8-pin microcontroller
- **ATtiny84**: 14-pin microcontroller
- **ATtiny2313**: 20-pin microcontroller
- **ATtiny4313**: Enhanced 20-pin variant

### Package Configurations
- **8-pin DIP**: ATtiny85, ATtiny13, etc.
- **14-pin DIP**: ATtiny84, ATtiny44, etc.
- **20-pin DIP**: ATtiny2313, ATtiny4313, etc.
- **28-pin DIP**: ATmega328P, ATmega168, ATmega8, etc.

## Programming Software Support

### Arduino IDE
- **ArduinoISP Sketch**: Built-in programmer sketch
- **ATtiny Core**: Support for ATtiny microcontrollers
- **Board Definitions**: Various AVR board definitions
- **Easy Programming**: Upload using programmer option

### Compatible Software
- **AdafruitISP**: Enhanced ISP sketch with buzzer support
- **AdaLoader**: Standalone programming software
- **avrdude**: Command-line programming utility
- **Microchip Studio**: Professional development environment

## Assembly and Setup

### Kit Contents
- 1x PCB board (designed and manufactured in Oregon)
- 1x 28-pin ZIF socket (red or blue)
- 1x 16-MHz resonator
- 1x Tactile button
- 1x 10µF capacitor
- 1x 3" of 6-conductor ribbon cable
- 2x 6-pin ribbon crimp connectors
- 3x Indicator LEDs
- 3x 330-ohm resistors
- 1x 32-pin male header
- 4x 2x3 pin male headers

### Assembly Instructions
1. **Install Components**: Solder resistors, capacitor, and resonator
2. **Add LEDs**: Install status indicator LEDs
3. **Install Socket**: Mount 28-pin ZIF socket
4. **Add Headers**: Install Arduino shield headers
5. **Test Assembly**: Verify connections and functionality

### Required Tools
- Soldering iron and solder
- Wire cutters and strippers
- Multimeter for testing
- Arduino board for testing

## Usage Instructions

### Basic Programming Setup
1. **Install ArduinoISP**: Upload ArduinoISP sketch to Arduino
2. **Insert Chip**: Place target AVR chip in ZIF socket
3. **Configure Jumpers**: Set jumpers for target chip pin count
4. **Select Programmer**: Choose "Arduino as ISP" in IDE
5. **Upload Code**: Use "Upload Using Programmer" option

### Jumper Configuration
- **8-pin chips**: Set jumpers for ATtiny85 configuration
- **14-pin chips**: Configure for ATtiny84 layout
- **20-pin chips**: Set for ATtiny2313 arrangement
- **28-pin chips**: Configure for ATmega328P layout

### Programming Examples
- **Bootloader Installation**: Install Arduino bootloader on ATmega328P
- **ATtiny Programming**: Program ATtiny85 with custom code
- **Fuse Configuration**: Set fuse bits for different clock sources
- **EEPROM Programming**: Write data to EEPROM memory

## Applications

### Educational Projects
- **Learning AVR Programming**: Hands-on microcontroller education
- **Arduino Alternatives**: Use cheaper AVR chips in projects
- **Prototyping**: Quick testing of AVR-based circuits
- **STEM Education**: Microcontroller programming courses

### Professional Development
- **Firmware Development**: Program custom AVR firmware
- **Product Prototyping**: Test code on target microcontrollers
- **Small Production**: Program chips for small-scale production
- **Repair Work**: Replace programmed chips in existing products

### Hobbyist Applications
- **Custom Projects**: Program AVR chips for specific applications
- **Arduino Clones**: Create custom Arduino-compatible boards
- **Sensor Projects**: Program ATtiny chips for sensor applications
- **Low-Power Projects**: Use ATtiny for battery-powered projects

## Package Contents

- 1x Yet Another Programming Shield kit (unassembled)
- Electronic components for assembly
- Detailed assembly instructions
- Programming guide and examples

## Important Notes

- **Assembly Required**: Basic soldering skills needed for kit assembly
- **Arduino Required**: Requires Arduino board to function as programmer
- **Voltage Compatibility**: Designed for 5V operation
- **Chip Orientation**: Ensure correct chip orientation in socket
- **Jumper Settings**: Verify correct jumper configuration for target chip

## Advantages

- **Versatile**: Single socket for multiple chip sizes
- **Educational**: Great for learning AVR programming
- **Cost-Effective**: Affordable alternative to dedicated programmers
- **Arduino Integration**: Works with familiar Arduino environment
- **Open Source**: Hardware design available for modification

## Troubleshooting

### Common Issues
- **Programming Failures**: Check jumper settings and chip orientation
- **Connection Problems**: Verify Arduino connections and power
- **Chip Recognition**: Ensure correct chip type selected in software
- **Power Issues**: Check power supply and voltage levels

### Best Practices
- **Double-check Jumpers**: Verify jumper settings before programming
- **Test Connections**: Use multimeter to verify continuity
- **Backup Settings**: Read original fuse settings before changes
- **Handle Carefully**: AVR chips are static-sensitive

## Recommended Accessories

- Arduino Uno or compatible board (required)
- Various AVR microcontrollers for programming
- Breadboard and jumper wires for testing
- External crystal oscillators for timing
- Anti-static wrist strap for chip handling
