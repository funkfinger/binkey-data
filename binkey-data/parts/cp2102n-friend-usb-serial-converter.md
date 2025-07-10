---
type: part
title: CP2102N Friend - USB to Serial Converter
description: USB-C to serial converter breakout board with CP2102N chip, compatible with FTDI cables and Arduino programming
manufacturer: Generic/Compatible
part_number: CP2102N-FRIEND
category: programming-tools
subcategory: usb-serial-converters
tags: [cp2102n, usb-serial, converter, usb-c, ftdi-compatible, arduino, programming, uart, breakout]
quantity: 1
location: [cabinet-1-bin-38]
datasheet_url: https://www.silabs.com/documents/public/data-sheets/cp2102n-datasheet.pdf
price: 5.95
currency: USD
date_added: 2025-01-09
status: active
---

# CP2102N Friend - USB to Serial Converter

## Overview

The CP2102N Friend is a USB-C to serial converter breakout board featuring the Silicon Labs CP2102N USB-to-UART bridge chip. This board provides a modern USB-C interface while maintaining compatibility with FTDI cable pinouts, making it perfect for programming microcontrollers, debugging serial communications, and general UART applications.

## Specifications

- **USB Interface**: USB-C connector
- **Chip**: Silicon Labs CP2102N USB-to-UART bridge
- **Data Rate**: Up to 3 Mbps (faster than CP2104)
- **Voltage Levels**: 3.3V logic (5V tolerant)
- **Power Output**: +5V and +3.3V available
- **Auto-Reset**: Built-in auto-reset for Arduino/ATmega328 boards
- **Drivers**: No drivers needed for most modern operating systems
- **Dimensions**: 30.0mm x 18.0mm x 5.0mm (1.2" x 0.7" x 0.2")

## Key Features

### Modern USB-C Interface
- **USB-C Connector**: Reversible, modern connector
- **High Speed**: 3 Mbps maximum data transfer rate
- **Reliable Connection**: Robust USB-C connector design
- **Future-Proof**: Modern interface standard

### FTDI Compatibility
- **Pin-Compatible**: Matches FTDI cable pinout
- **Drop-in Replacement**: Can replace FTDI cables in most applications
- **Arduino Compatible**: Works with Arduino boards and clones
- **Standard Pinout**: 6-pin header with standard UART signals

### Advanced Features
- **Auto-Reset**: Automatic reset for Arduino programming
- **Status LEDs**: RX/TX activity indicators
- **Voltage Selection**: 3.3V and 5V power options
- **Flow Control**: RTS/CTS hardware flow control support

## Pin Configuration

### 6-Pin Header (FTDI-Compatible)
1. **GND**: Ground reference
2. **CTS**: Clear to Send (flow control)
3. **VCC**: Power output (+5V or +3.3V selectable)
4. **TXD**: Transmit Data (from CP2102N)
5. **RXD**: Receive Data (to CP2102N)
6. **RTS**: Request to Send (auto-reset for Arduino)

### Additional Pins
- **DTR**: Data Terminal Ready
- **DSR**: Data Set Ready
- **DCD**: Data Carrier Detect
- **RI**: Ring Indicator

## Applications

### Microcontroller Programming
- **Arduino Programming**: Upload sketches to Arduino boards
- **ESP32/ESP8266**: Program WiFi microcontrollers
- **STM32**: Program ARM Cortex-M microcontrollers
- **Custom Boards**: Program any UART-bootloader equipped board

### Serial Communication
- **Debug Output**: Monitor serial debug messages
- **Sensor Data**: Collect data from serial sensors
- **Device Configuration**: Configure serial devices
- **Protocol Analysis**: Analyze serial communication protocols

### Development and Testing
- **Firmware Development**: Upload and test firmware
- **Serial Debugging**: Debug embedded applications
- **Data Logging**: Log serial data to computer
- **Communication Testing**: Test UART communication

## Software Support

### Operating Systems
- **Windows**: Automatic driver installation via Windows Update
- **macOS**: Native support, no drivers needed
- **Linux**: Built-in kernel support
- **Android**: USB OTG support with appropriate apps

### Development Environments
- **Arduino IDE**: Full support for Arduino programming
- **PlatformIO**: Native support in PlatformIO
- **Microchip Studio**: External programmer support
- **STM32CubeIDE**: Serial communication support

### Terminal Software
- **PuTTY**: Popular Windows terminal emulator
- **Screen**: Linux/macOS command-line tool
- **Arduino Serial Monitor**: Built-in Arduino IDE tool
- **CoolTerm**: Cross-platform serial terminal

## Advantages Over CP2104

### Performance Improvements
- **Higher Speed**: 3 Mbps vs 2 Mbps maximum
- **Better Drivers**: Improved driver support
- **Reprogrammable**: Field-updatable configuration
- **Enhanced Features**: Additional GPIO and customization options

### Modern Design
- **USB-C**: Modern, reversible connector
- **Improved Reliability**: Better signal integrity
- **Future-Proof**: Long-term connector standard
- **Robust Construction**: Durable USB-C connector

## Usage Instructions

### Basic Setup
1. **Connect USB-C**: Plug into computer USB-C port or adapter
2. **Install Drivers**: Usually automatic on modern systems
3. **Connect Target**: Wire 6-pin header to target device
4. **Configure Software**: Set up terminal or programming software
5. **Test Connection**: Verify communication with target

### Arduino Programming
1. **Connect Board**: Wire to Arduino programming header
2. **Select Port**: Choose correct COM port in Arduino IDE
3. **Upload Sketch**: Use normal Arduino upload process
4. **Monitor Serial**: Use serial monitor for debugging

### Serial Communication
1. **Open Terminal**: Launch terminal software
2. **Configure Port**: Set baud rate and parameters
3. **Connect**: Open serial port connection
4. **Communicate**: Send and receive data

## Package Contents

- 1x CP2102N Friend breakout board
- 1x Right-angle socket header
- 1x Male header strip
- Documentation and setup guides

## Important Notes

- **Voltage Selection**: Default is +5V power output
- **Logic Levels**: 3.3V logic, but 5V tolerant
- **Auto-Reset**: RTS pin provides auto-reset functionality
- **Driver Support**: Best support on Windows 10+ and modern Linux
- **USB-C Adapter**: May need USB-A to USB-C adapter for older computers

## Troubleshooting

### Common Issues
- **Driver Problems**: Update to latest OS version for best support
- **Connection Issues**: Check cable connections and orientation
- **Programming Failures**: Verify correct COM port selection
- **Power Problems**: Check target power requirements

### Best Practices
- **Check Connections**: Verify all wiring before powering up
- **Use Correct Voltage**: Match target voltage requirements
- **Monitor Activity**: Watch RX/TX LEDs for communication
- **Test with Known Good**: Verify with working target first

## Recommended Accessories

- USB-A to USB-C adapter (if needed)
- 6-pin extension cable for remote connections
- Breadboard and jumper wires for prototyping
- Logic analyzer for signal debugging
- Various microcontroller development boards
