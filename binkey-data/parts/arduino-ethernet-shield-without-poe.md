---
type: part
title: Arduino Ethernet Shield (without PoE Module)
description: Arduino shield providing Ethernet connectivity via W5100 chip with microSD card slot
manufacturer: Arduino
part_number: A000072
category: shields
subcategory: communication-shields
tags: [ethernet-shield, w5100, networking, microsd, arduino, communication, tcp-ip]
quantity: 1
location: [cabinet-1-bin-42]
datasheet_url: https://docs.arduino.cc/retired/shields/arduino-ethernet-shield-without-poe-module/
purchase_url: ""
price: 45.00
currency: USD
date_added: 2025-01-09
status: retired
---

# Arduino Ethernet Shield (without PoE Module)

## Overview

**Note: This is a placeholder entry. Full documentation will be added when the Arduino documentation becomes accessible.**

The Arduino Ethernet Shield allows an Arduino board to connect to the internet. It is based on the Wiznet W5100 ethernet chip. The Wiznet W5100 provides a network (IP) stack capable of both TCP and UDP. It supports up to four simultaneous socket connections. Use the Ethernet library to write sketches which connect to the internet using the shield.

## Specifications

- **Ethernet Controller**: Wiznet W5100
- **Connection**: 10/100 Mbps Ethernet
- **microSD Card Slot**: For data storage
- **Power**: 5V from Arduino
- **Form Factor**: Arduino shield compatible

## Key Features

### Ethernet Connectivity
- **W5100 Chip**: Hardware TCP/IP stack
- **RJ45 Connector**: Standard Ethernet connection
- **10/100 Mbps**: Fast Ethernet speeds
- **Auto-negotiation**: Automatic speed and duplex detection

### Storage
- **microSD Slot**: Store web pages, data, or files
- **SPI Interface**: Shared with Ethernet controller
- **FAT16/FAT32**: Standard file system support

### Arduino Integration
- **Shield Compatible**: Standard Arduino shield form factor
- **SPI Communication**: Uses SPI bus for communication
- **Pin Usage**: Uses pins 10, 11, 12, 13 for SPI
- **Reset Circuit**: Hardware reset capability

## Pin Usage

- **Digital Pin 4**: SD card chip select
- **Digital Pin 10**: Ethernet chip select
- **Digital Pin 11**: SPI MOSI
- **Digital Pin 12**: SPI MISO
- **Digital Pin 13**: SPI SCK

## Applications

- **Web Servers**: Host simple web pages
- **IoT Projects**: Connect sensors to the internet
- **Data Logging**: Log data to remote servers
- **Remote Control**: Control Arduino over network
- **Email/Twitter**: Send notifications and updates

## Status

**Retired Product**: This shield has been discontinued by Arduino. Modern alternatives include:
- Arduino Ethernet Shield 2
- ESP32-based solutions
- Arduino MKR ETH Shield

## Important Notes

- **Retired**: No longer in production
- **W5100 Limitations**: Limited simultaneous connections
- **Power Requirements**: Requires adequate 5V power supply
- **Pin Conflicts**: Shares SPI pins with other devices
- **Documentation**: Full specs available when Arduino docs are accessible

## Package Contents

- 1x Arduino Ethernet Shield (without PoE)
- Documentation (when accessible)

*This entry will be updated with complete specifications and documentation when the Arduino documentation website becomes accessible.*
