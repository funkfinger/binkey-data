---
type: part
title: Microchip AVR Dragon Development Tool
description: Low-cost development tool for programming and debugging AVR microcontrollers with multiple interface support
manufacturer: Microchip Technology
part_number: ATAVRDRAGON
category: programming-tools
subcategory: development-tools
tags: [avr-dragon, avr, programmer, debugger, microchip, atmel, jtag, debugwire, isp, pdi, hvsp, hvpp]
quantity: 2
location: [cabinet-1-bin-38]
datasheet_url: http://ww1.microchip.com/downloads/en/DeviceDoc/doc2553.pdf
purchase_url: https://www.microchip.com/en-us/development-tool/atavrdragon
price: 49.99
currency: USD
date_added: 2025-01-09
status: discontinued
---

# Microchip AVR Dragon Development Tool

## Overview

The Microchip AVR Dragon is a low-cost development tool for programming and debugging AVR microcontrollers. Despite being discontinued, it remains a popular choice for AVR development due to its comprehensive feature set, multiple programming interfaces, and affordable price point. The Dragon supports most AVR devices and programming methods.

## Specifications

- **Target Architecture**: 8-bit AVR microcontrollers
- **Interface Support**: JTAG, debugWIRE, ISP, PDI, HVSP, HVPP
- **USB Interface**: Full-speed USB 2.0
- **Target Voltage**: 1.8V to 5.5V
- **Power Supply**: USB powered with target power capability
- **Programming Speed**: Fast programming for most AVR devices
- **Debug Capabilities**: Real-time debugging with breakpoints

## Programming Interfaces

### ISP (In-System Programming)
- **Protocol**: Serial Peripheral Interface (SPI)
- **Connector**: 6-pin ISP header
- **Speed**: Fast programming for most applications
- **Compatibility**: All AVR devices with ISP capability

### JTAG (Joint Test Action Group)
- **Protocol**: IEEE 1149.1 JTAG standard
- **Connector**: 10-pin JTAG header
- **Features**: Programming, debugging, boundary scan
- **Compatibility**: AVR devices with JTAG support

### debugWIRE
- **Protocol**: Single-wire debug interface
- **Connector**: Single wire plus power and ground
- **Features**: Real-time debugging, breakpoints
- **Compatibility**: Many ATmega and ATtiny devices

### PDI (Program and Debug Interface)
- **Protocol**: Two-wire interface for XMEGA
- **Connector**: 6-pin PDI header
- **Features**: Programming and debugging
- **Compatibility**: XMEGA family microcontrollers

### High Voltage Programming
- **HVSP**: High Voltage Serial Programming
- **HVPP**: High Voltage Parallel Programming
- **Purpose**: Recover devices with disabled ISP
- **Voltage**: 12V programming voltage

## Supported Devices

### ATmega Series
- ATmega328P, ATmega168, ATmega88, ATmega48
- ATmega2560, ATmega1280, ATmega644
- ATmega32, ATmega16, ATmega8
- Most other ATmega variants

### ATtiny Series
- ATtiny85, ATtiny84, ATtiny13
- ATtiny2313, ATtiny4313
- ATtiny25, ATtiny45
- Many other ATtiny variants

### XMEGA Series
- ATxmega128A1, ATxmega64A1
- ATxmega32A4, ATxmega16A4
- Other XMEGA family devices

### Legacy AVR
- AT90S series (older AVR devices)
- ATmega103 and similar legacy devices

## Development Environment Support

### Microchip Studio (formerly Atmel Studio)
- **Full Integration**: Complete programming and debugging
- **Project Management**: Integrated development environment
- **Simulator**: Seamless simulator integration
- **Code Analysis**: Advanced debugging features

### Third-Party Tools
- **AVR Studio 4**: Legacy development environment
- **WinAVR**: GCC-based toolchain
- **Arduino IDE**: Limited support as external programmer
- **avrdude**: Command-line programming utility

## Debug Features

### Hardware Debugging
- **Breakpoints**: Up to 4 hardware breakpoints
- **Single Stepping**: Step through code execution
- **Variable Watch**: Monitor variable values in real-time
- **Memory View**: Examine memory contents during debugging

### Programming Features
- **Flash Programming**: Upload compiled programs
- **EEPROM Programming**: Data memory programming
- **Fuse Bit Programming**: Configure device operation
- **Lock Bit Programming**: Protect code from reading

## Applications

### Educational Use
- **University Courses**: AVR microcontroller education
- **Student Projects**: Affordable development platform
- **Learning Platform**: Comprehensive AVR feature access
- **Prototyping**: Quick development and testing

### Professional Development
- **Firmware Development**: Professional AVR programming
- **Product Prototyping**: Early-stage development
- **Small Production**: Programming small batches
- **Legacy Support**: Maintaining older AVR-based products

### Hobbyist Projects
- **Arduino Development**: Programming Arduino boards
- **Custom Circuits**: Programming standalone AVR projects
- **Experimentation**: Learning advanced AVR features
- **Repair Work**: Recovering misconfigured devices

## Package Contents

- 1x AVR Dragon main unit
- 1x USB cable (Type A to Type B)
- 1x 6-pin ISP cable
- 1x 10-pin JTAG cable
- User manual and documentation

## Important Notes

- **Discontinued Product**: No longer in production but widely available
- **Target Voltage**: Ensure proper target voltage selection
- **Interface Selection**: Choose appropriate interface for target device
- **Power Limitations**: Limited target power supply capability
- **Software Support**: Best supported by Microchip Studio

## Advantages

- **Affordable**: Low-cost entry into professional AVR development
- **Comprehensive**: Multiple programming and debugging interfaces
- **Versatile**: Supports wide range of AVR devices
- **Educational**: Excellent for learning AVR development
- **Community**: Large user base and community support

## Limitations

- **Discontinued**: No longer manufactured by Microchip
- **Limited Power**: Cannot power high-current targets
- **USB Only**: No standalone operation capability
- **Legacy Software**: Best support in older development environments
- **Build Quality**: Consumer-grade construction

## Getting Started

1. **Install Software**: Download Microchip Studio or compatible IDE
2. **Connect Hardware**: Connect Dragon to computer via USB
3. **Select Interface**: Choose appropriate programming interface
4. **Connect Target**: Wire target device using appropriate cable
5. **Configure Project**: Set up project with correct device settings

## Troubleshooting

### Common Issues
- **Connection Problems**: Check cable connections and target power
- **Interface Issues**: Verify correct interface for target device
- **Programming Failures**: Check target voltage and fuse settings
- **Debug Problems**: Ensure target supports selected debug interface
- **USB Issues**: Try different USB ports or cables

### Best Practices
- **Backup Fuses**: Always read original fuse settings first
- **Check Voltage**: Verify target voltage before connecting
- **Use Protection**: Consider using current-limiting resistors
- **Keep Updated**: Use latest software versions when possible

## Recommended Accessories

- Additional programming cables for different interfaces
- Target development boards with standard connectors
- External power supply for target circuits
- Adapter boards for different package types
- Protective case for storage and transport
