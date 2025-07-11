---
type: part
title: Adafruit FunHouse - WiFi Home Automation Development Board
description: ESP32-S2 based home automation board with built-in sensors, 1.54" color display, and extensive connectivity options
manufacturer: Adafruit
part_number: 4985
category: iot-boards
subcategory: home-automation
tags: [funhouse, esp32-s2, wifi, home-automation, iot, sensors, display, circuitpython, stemma]
quantity: 1
location: [cabinet-1-bin-40]
datasheet_url: https://cdn-learn.adafruit.com/downloads/pdf/adafruit-funhouse.pdf
purchase_url: https://www.adafruit.com/product/4985
price: 34.95
currency: USD
date_added: 2025-01-09
status: active
---

# Adafruit FunHouse - WiFi Home Automation Development Board

## Overview

The Adafruit FunHouse is a comprehensive WiFi-enabled home automation development board built around the ESP32-S2 microcontroller. Designed to make home automation projects easy and accessible, it features a color TFT display, multiple built-in sensors, extensive connectivity options, and support for both CircuitPython and Arduino development environments.

## Specifications

- **Processor**: ESP32-S2 240MHz Tensilica processor
- **Memory**: 4MB Flash, 2MB PSRAM (WROVER module)
- **Display**: 1.54" Color TFT (240x240 pixels)
- **Connectivity**: WiFi 802.11 b/g/n, USB-C
- **Power**: USB-C or external power input
- **Dimensions**: 85mm x 56mm x 10.8mm
- **Weight**: 26.6g

## Key Features

### ESP32-S2 Processor
- **240MHz Performance**: Fast processing for IoT applications
- **Native USB**: Acts as keyboard, mouse, MIDI device, or disk drive
- **WiFi Connectivity**: Built-in 802.11 b/g/n WiFi with antenna
- **FCC/CE Certified**: WROVER module with regulatory approval
- **Large Memory**: 4MB Flash and 2MB PSRAM for data buffers

### Built-in Sensors
- **DPS310**: Barometric pressure and temperature sensor
- **AHT20**: Relative humidity and temperature sensor
- **Light Sensor**: Front-facing ambient light detection
- **PIR Socket**: Plug-in socket for mini PIR motion sensor (sold separately)

### Display and Interface
- **1.54" TFT Display**: 240x240 pixel color display with SPI interface
- **Controllable Backlight**: Adjustable brightness
- **Five RGB LEDs**: Mini DotStar LEDs for status indication
- **Three Buttons**: User input and wake-from-sleep functionality
- **Capacitive Touch**: Three touch pads and one 5-element slider

### Connectivity Options
- **STEMMA QT**: I2C connector for sensors and devices
- **Three STEMMA 3-pin**: Digital/analog/PWM connections
- **USB-C**: Power and data with native USB support
- **Speaker/Buzzer**: Built-in audio output for notifications

## Hardware Components

### Environmental Sensors
- **DPS310 Pressure Sensor**: ±0.002 hPa precision, temperature compensation
- **AHT20 Humidity Sensor**: ±2% RH accuracy, -40°C to +85°C range
- **Light Sensor**: Ambient light detection for automatic display brightness
- **Temperature Monitoring**: Dual temperature sensors for accuracy

### User Interface
- **Color Display**: High-quality IPS TFT with wide viewing angles
- **Touch Interface**: Capacitive touch pads and slider
- **Physical Buttons**: Three tactile buttons for reliable input
- **LED Indicators**: Five programmable RGB LEDs
- **Audio Feedback**: Built-in buzzer for audible notifications

### Expansion Capabilities
- **STEMMA QT**: Connect I2C devices like additional sensors
- **STEMMA 3-pin**: Connect NeoPixels, servos, relays, or sensors
- **PIR Socket**: Easy connection for motion detection
- **GPIO Access**: Additional pins available for custom connections

## Software Support

### CircuitPython
- **Native Support**: Optimized CircuitPython support
- **Rapid Development**: Quick prototyping and testing
- **Extensive Libraries**: Access to CircuitPython ecosystem
- **Interactive Development**: REPL for real-time coding
- **File System**: Appears as USB drive for easy file management

### Arduino IDE
- **ESP32 Support**: Full Arduino IDE compatibility
- **Arduino Libraries**: Access to vast Arduino library ecosystem
- **Familiar Environment**: Standard Arduino development workflow
- **Community Support**: Large ESP32 Arduino community

### Development Tools
- **Adafruit Libraries**: Comprehensive sensor and display libraries
- **Example Projects**: Multiple ready-to-use examples
- **Documentation**: Extensive guides and tutorials
- **Web IDE**: Browser-based development options

## Applications

### Home Automation
- **Environmental Monitoring**: Temperature, humidity, pressure tracking
- **Smart Displays**: Weather stations, status displays
- **Motion Detection**: Security and automation triggers
- **Remote Control**: WiFi-controlled devices and systems

### IoT Projects
- **Sensor Networks**: Multi-sensor data collection
- **Cloud Integration**: Connect to IoT platforms and services
- **Data Logging**: Local and cloud data storage
- **Remote Monitoring**: Access data from anywhere

### Educational Use
- **STEM Education**: Teaching IoT and automation concepts
- **Programming Courses**: CircuitPython and Arduino learning
- **Science Projects**: Environmental data collection
- **Maker Education**: Hands-on technology learning

## Connectivity Features

### WiFi Capabilities
- **802.11 b/g/n**: Standard WiFi connectivity
- **WPA/WPA2**: Secure wireless connections
- **Access Point Mode**: Can create its own WiFi network
- **Station Mode**: Connect to existing WiFi networks
- **SSL/TLS**: Secure communications support

### Internet Integration
- **HTTP/HTTPS**: Web client and server capabilities
- **MQTT**: IoT messaging protocol support
- **REST APIs**: Easy integration with web services
- **Cloud Services**: Connect to AWS, Google Cloud, Azure
- **Adafruit IO**: Native support for Adafruit's IoT platform

## Power Management

### Power Options
- **USB-C**: Primary power and programming interface
- **External Power**: VIN pin for battery or adapter power
- **Low Power Modes**: Deep sleep for battery operation
- **Power Monitoring**: Built-in power management features

### Battery Operation
- **LiPoly Support**: Can be powered by lithium polymer batteries
- **Charging Circuit**: Built-in battery charging (with appropriate circuit)
- **Sleep Modes**: Extended battery life with deep sleep
- **Wake Sources**: Wake from buttons, sensors, or timers

## Environmental Monitoring

### Sensor Capabilities
- **Temperature**: Dual sensors for accuracy and redundancy
- **Humidity**: Precise relative humidity measurement
- **Pressure**: Barometric pressure for weather monitoring
- **Light**: Ambient light for automatic adjustments
- **Motion**: PIR sensor support for occupancy detection

### Data Collection
- **Real-time Monitoring**: Continuous sensor reading
- **Data Logging**: Store data locally or in cloud
- **Trend Analysis**: Track environmental changes over time
- **Alerts**: Trigger notifications based on sensor values

## Package Contents

- 1x FunHouse development board
- Documentation and getting started guide
- Example code and libraries
- Mounting hardware (varies by version)

## Important Notes

- **PIR Sensor**: Motion sensor sold separately
- **WiFi Range**: Performance depends on WiFi signal strength
- **Power Requirements**: Check power needs for connected devices
- **Development Environment**: CircuitPython recommended for beginners
- **Sensor Calibration**: Some sensors may need calibration

## Advantages

- **All-in-One**: Complete home automation platform
- **Easy Development**: CircuitPython makes programming simple
- **Extensive Sensors**: Multiple built-in environmental sensors
- **Expandable**: Multiple expansion options
- **WiFi Ready**: Built-in connectivity for IoT projects

## Getting Started

### Basic Setup
1. **Install CircuitPython**: Flash latest CircuitPython firmware
2. **Connect USB-C**: Use USB-C cable for power and programming
3. **Install Libraries**: Add required CircuitPython libraries
4. **Run Examples**: Start with built-in sensor examples
5. **Configure WiFi**: Set up wireless connectivity

### First Project
- **Sensor Display**: Show environmental data on screen
- **WiFi Connection**: Connect to home network
- **Data Logging**: Log sensor data to file
- **Web Interface**: Create simple web server
- **IoT Integration**: Connect to cloud service

## Recommended Accessories

- Mini PIR motion sensor (Adafruit #4871)
- STEMMA QT sensors for additional monitoring
- LiPoly battery for portable operation
- Mounting plate and stand
- External speakers for audio projects
