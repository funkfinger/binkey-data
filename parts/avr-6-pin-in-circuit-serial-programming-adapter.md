---
type: part
title: AVR 6 Pin In-Circuit Serial Programming Adapter
description: Breadboard-friendly breakout adapter for 6-pin AVR ISP/ICSP programming with 2x3 IDC header and breadboard pins
manufacturer: Generic
part_number: AVR-ICSP-6PIN
category: programming-tools
subcategory: programming-adapters
tags: [avr, icsp, isp, programming, adapter, breadboard, arduino, atmega, attiny, 6-pin, debugging]
quantity: 1
location: [cabinet-1-bin-37]
datasheet_url: https://learn.adafruit.com/program-an-avr-or-arduino-using-raspberry-pi-gpio-pins
purchase_url: https://www.adafruit.com/product/1465
price: 0.95
currency: USD
date_added: 2025-01-09
status: active
---

# AVR 6 Pin In-Circuit Serial Programming Adapter

## Overview

The AVR 6 Pin In-Circuit Serial Programming (ICSP) Adapter is a compact breakout board that provides a breadboard-friendly interface for programming AVR microcontrollers. This adapter converts the standard 2x3 IDC header used by AVR programmers to individual breadboard-compatible pins, making it easy to program AVR chips during prototyping and development.

## Specifications

- **Connector Type**: 2x3 IDC box header (0.1" pitch)
- **Breakout Pins**: 6 individual 0.1" header pins
- **Pin Spacing**: Standard 0.1" (2.54mm) breadboard compatible
- **PCB Size**: Approximately 17.77mm x 15.14mm (0.69" x 0.59")
- **Material**: High-quality PCB with gold-plated contacts
- **Assembly**: Requires basic soldering skills

## Pin Configuration

### 2x3 IDC Header Pinout
```
MISO  VCC
 SCK  MOSI
 RST  GND
```

### Standard AVR ISP Signals
- **VCC**: Target power (3.3V or 5V)
- **GND**: Ground reference
- **MOSI**: Master Out, Slave In (programming data)
- **MISO**: Master In, Slave Out (programming data)
- **SCK**: Serial Clock
- **RST**: Reset signal (active low)

## Features

- **Breadboard Compatible**: Direct insertion into standard breadboards
- **Compact Design**: Minimal footprint for space-constrained projects
- **Standard Pinout**: Compatible with all AVR ISP programmers
- **Durable Construction**: High-quality PCB with reliable connections
- **Easy Assembly**: Simple soldering required for headers
- **Cost Effective**: Affordable solution for AVR programming

## Compatible Programmers

### USB Programmers
- **USBtinyISP**: Popular open-source USB programmer
- **AVRISP mkII**: Official Atmel/Microchip programmer
- **USBasp**: Low-cost USB programmer
- **Arduino as ISP**: Arduino board configured as programmer

### Development Boards
- **Arduino Uno/Nano/Pro Mini**: Using Arduino as ISP
- **Raspberry Pi**: Using GPIO pins with avrdude
- **STK500**: Classic Atmel development board
- **AVR Dragon**: Advanced debugging and programming tool

## Supported Microcontrollers

### ATmega Series
- **ATmega328P**: Arduino Uno/Nano microcontroller
- **ATmega32U4**: Arduino Leonardo/Pro Micro microcontroller
- **ATmega2560**: Arduino Mega microcontroller
- **ATmega168/88/48**: Smaller ATmega variants

### ATtiny Series
- **ATtiny85**: Popular 8-pin microcontroller
- **ATtiny84**: 14-pin microcontroller
- **ATtiny2313**: 20-pin microcontroller
- **ATtiny4313**: Enhanced 20-pin variant

### Other AVR Microcontrollers
- Most AVR microcontrollers with ISP capability
- Custom AVR-based designs
- Legacy AVR microcontrollers

## Applications

### Development and Prototyping
- Programming AVR microcontrollers on breadboards
- Firmware development and testing
- Bootloader installation
- Fuse bit configuration

### Educational Projects
- Learning AVR programming
- Microcontroller course projects
- STEM education applications
- Arduino programming without Arduino board

### Production and Maintenance
- Initial programming of custom AVR boards
- Firmware updates and bug fixes
- Quality testing and validation
- Field programming and updates

## Assembly Instructions

1. **Prepare Components**: PCB, 2x3 IDC header, 0.1" header strip
2. **Install IDC Header**: Insert 2x3 header on top side, solder all pins
3. **Prepare Breadboard Headers**: Break header strip into two 3-pin sections
4. **Position Headers**: Place in breadboard to hold steady during soldering
5. **Install Breakout**: Place adapter on headers and solder side pins
6. **Test Connections**: Verify continuity between IDC and breakout pins

## Usage Instructions

### Basic Setup
1. **Insert in Breadboard**: Place adapter in breadboard with pins in separate rows
2. **Connect Target**: Wire breakout pins to target AVR microcontroller
3. **Connect Programmer**: Attach ISP programmer to 2x3 IDC header
4. **Power Target**: Ensure target circuit has proper power supply
5. **Program**: Use avrdude or IDE to program microcontroller

### Wiring Example (ATtiny85)
```
Adapter Pin -> ATtiny85 Pin
VCC        -> Pin 8 (VCC)
GND        -> Pin 4 (GND)
MOSI       -> Pin 5 (PB0/MOSI)
MISO       -> Pin 6 (PB1/MISO)
SCK        -> Pin 7 (PB2/SCK)
RST        -> Pin 1 (PB5/RST)
```

## Programming Software

### Command Line Tools
- **avrdude**: Universal AVR programming utility
- **avr-gcc**: AVR compiler toolchain
- **make**: Build automation tool

### Integrated Development Environments
- **Arduino IDE**: With ATtiny board support
- **Atmel Studio**: Official Microchip IDE
- **PlatformIO**: Modern development platform
- **Code::Blocks**: Open-source IDE with AVR support

## Troubleshooting

### Common Issues
- **Connection Problems**: Check wiring and solder joints
- **Power Issues**: Verify target power supply voltage
- **Programming Failures**: Check programmer compatibility and drivers
- **Fuse Bit Errors**: Use proper fuse settings for target microcontroller

### Best Practices
- **Double-check Wiring**: Verify all connections before programming
- **Use Proper Voltage**: Match programmer and target voltage levels
- **Backup Fuses**: Read and save original fuse settings
- **Test Continuity**: Verify adapter connections with multimeter

## Package Contents

- 1x AVR ICSP Adapter PCB
- 1x 2x3 IDC box header
- 1x 0.1" header strip (6 pins)
- Assembly instructions

## Important Notes

- **Assembly Required**: Basic soldering skills needed
- **Voltage Compatibility**: Ensure programmer and target voltage match
- **Proper Orientation**: Check IDC header orientation before connecting
- **Static Protection**: Use anti-static precautions when handling
- **Documentation**: Keep AVR datasheet handy for pinout reference

## Advantages

- **Breadboard Friendly**: Easy prototyping and development
- **Universal Compatibility**: Works with all standard AVR programmers
- **Compact Size**: Minimal breadboard real estate usage
- **Cost Effective**: Affordable programming solution
- **Reusable**: Durable construction for repeated use
- **Educational Value**: Great for learning AVR programming concepts
