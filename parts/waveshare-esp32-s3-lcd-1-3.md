---
type: part
title: WaveShare ESP32-S3-LCD-1.3
description: ESP32-S3 development board with 1.3-inch 240×240 color LCD display, built-in ST7789V2 chip and 6-axis IMU
manufacturer: WaveShare
part_number: ESP32-S3-LCD-1.3
category: development-boards
subcategory: esp32-boards
tags: [esp32-s3, lcd-display, st7789v2, imu, wifi, bluetooth, development-board, 240x240, spi]
quantity: 2
location: [cabinet-1-bin-40]
datasheet_url: https://www.waveshare.com/wiki/ESP32-S3-LCD-1.3
purchase_url: https://www.waveshare.com/product/arduino/boards-kits/esp32-s3/esp32-s3-lcd-1.3.htm
price: 13.99
currency: USD
date_added: 2025-01-09
status: active
---

# WaveShare ESP32-S3-LCD-1.3

## Overview

The WaveShare ESP32-S3-LCD-1.3 is a compact development board featuring the powerful ESP32-S3 microcontroller with an integrated 1.3-inch color LCD display. This board combines wireless connectivity, processing power, and visual output in a small form factor, making it ideal for IoT projects, wearable devices, and portable applications that require both computation and display capabilities.

## Specifications

- **Microcontroller**: ESP32-S3 dual-core Xtensa LX7 @ 240MHz
- **Memory**: 512KB SRAM, 384KB ROM, 8MB PSRAM, 16MB Flash
- **Display**: 1.3-inch IPS LCD, 240×240 pixels, 262K colors
- **Display Driver**: ST7789V2 chip with SPI interface
- **IMU**: 6-axis inertial measurement unit
- **Connectivity**: WiFi 802.11 b/g/n, Bluetooth 5.0 LE
- **Interface**: USB-C for programming and power
- **Operating Voltage**: 3.3V

## Key Features

### ESP32-S3 Processor
- **Dual-Core Architecture**: Two Xtensa LX7 cores at 240MHz
- **Large Memory**: 8MB PSRAM and 16MB Flash for complex applications
- **AI Acceleration**: Vector instructions for AI/ML workloads
- **Low Power**: Multiple power modes for battery operation
- **Rich Peripherals**: Multiple UART, SPI, I2C, PWM, ADC interfaces

### Integrated Display
- **1.3-inch IPS LCD**: High-quality color display with wide viewing angles
- **240×240 Resolution**: Square format ideal for watch-style interfaces
- **262K Colors**: 18-bit color depth for vibrant graphics
- **ST7789V2 Driver**: Proven display controller with SPI interface
- **Fast Refresh**: Smooth animation and video playback capabilities

### Motion Sensing
- **6-Axis IMU**: 3-axis accelerometer and 3-axis gyroscope
- **Motion Detection**: Gesture recognition and orientation sensing
- **Low Power**: Efficient sensor operation for battery devices
- **Interrupt Support**: Wake-on-motion capabilities
- **Calibration**: Software calibration for accurate measurements

### Wireless Connectivity
- **WiFi 802.11 b/g/n**: 2.4GHz wireless networking
- **Bluetooth 5.0 LE**: Low energy Bluetooth for device connections
- **Dual Mode**: Can operate WiFi and Bluetooth simultaneously
- **Antenna**: Built-in PCB antenna for compact design
- **Range**: Good range for typical IoT applications

## Hardware Components

### Display System
- **IPS Technology**: Superior color reproduction and viewing angles
- **SPI Interface**: High-speed serial communication with display
- **Backlight Control**: PWM-controlled LED backlight
- **Touch Support**: Can be extended with touch overlay
- **Graphics Acceleration**: Hardware-accelerated drawing operations

### Sensor Integration
- **Accelerometer**: Measures linear acceleration in 3 axes
- **Gyroscope**: Measures angular velocity in 3 axes
- **Digital Interface**: I2C or SPI communication with sensors
- **Interrupt Pins**: Hardware interrupt support for events
- **Low Noise**: High-quality sensors with low noise characteristics

### Power Management
- **USB-C Power**: Modern connector for reliable power delivery
- **3.3V Operation**: Single voltage rail for all components
- **Low Power Modes**: Deep sleep and light sleep modes
- **Power Monitoring**: Built-in power management unit
- **Battery Support**: Can be powered by external battery

## Software Support

### Development Environments
- **Arduino IDE**: Full Arduino framework support
- **ESP-IDF**: Native Espressif development framework
- **PlatformIO**: Advanced IDE with library management
- **MicroPython**: Python-based development option
- **CircuitPython**: Adafruit's Python variant (community support)

### Display Libraries
- **TFT_eSPI**: Popular Arduino display library
- **LovyanGFX**: High-performance graphics library
- **Adafruit GFX**: Standard graphics library
- **LVGL**: Advanced GUI library for embedded systems
- **Custom Drivers**: Direct ST7789V2 control

### Sensor Libraries
- **IMU Libraries**: Motion processing and filtering
- **Sensor Fusion**: Combine accelerometer and gyroscope data
- **Gesture Recognition**: Detect taps, tilts, and movements
- **Orientation Tracking**: Calculate device orientation
- **Calibration Tools**: Sensor calibration utilities

## Applications

### Wearable Devices
- **Smart Watches**: Time display with fitness tracking
- **Fitness Trackers**: Step counting and activity monitoring
- **Health Monitors**: Heart rate and activity tracking
- **Fashion Tech**: Interactive clothing and accessories

### IoT Projects
- **Smart Home Displays**: Status and control interfaces
- **Environmental Monitors**: Weather and air quality displays
- **Security Systems**: Camera viewers and alarm panels
- **Industrial HMI**: Human-machine interface applications

### Portable Devices
- **Handheld Games**: Simple gaming devices
- **Measurement Tools**: Digital multimeters and oscilloscopes
- **Communication Devices**: Walkie-talkies and messengers
- **Educational Tools**: Learning and demonstration devices

## Display Capabilities

### Graphics Performance
- **Fast Refresh**: Smooth animations and transitions
- **Color Depth**: 18-bit color for realistic images
- **Text Rendering**: Multiple font sizes and styles
- **Image Display**: JPEG, BMP, and raw image formats
- **Vector Graphics**: Lines, circles, and complex shapes

### User Interface
- **Touch Integration**: Can add capacitive touch overlay
- **Menu Systems**: Hierarchical navigation interfaces
- **Data Visualization**: Charts, graphs, and gauges
- **Icon Display**: Custom icons and symbols
- **Multi-language**: Unicode support for international text

## Motion Sensing Features

### Accelerometer Functions
- **Tilt Detection**: Detect device orientation changes
- **Tap Detection**: Single and double tap recognition
- **Free Fall**: Detect when device is dropped
- **Activity Recognition**: Walking, running, stationary states
- **Vibration Monitoring**: Detect mechanical vibrations

### Gyroscope Functions
- **Rotation Rate**: Measure angular velocity
- **Gesture Recognition**: Detect rotation gestures
- **Stabilization**: Image or display stabilization
- **Navigation**: Dead reckoning for position tracking
- **Gaming**: Motion controls for games

## Connectivity Features

### WiFi Capabilities
- **Station Mode**: Connect to existing WiFi networks
- **Access Point**: Create WiFi hotspot
- **Web Server**: Host web interfaces
- **HTTP Client**: Connect to web services and APIs
- **OTA Updates**: Over-the-air firmware updates

### Bluetooth Features
- **BLE Peripheral**: Act as Bluetooth device
- **BLE Central**: Connect to other Bluetooth devices
- **Custom Services**: Define application-specific services
- **Low Power**: Efficient Bluetooth LE operation
- **Mesh Networking**: Bluetooth mesh support

## Power Specifications

### Power Consumption
- **Active Mode**: ~80mA during normal operation
- **WiFi Active**: ~120mA during WiFi transmission
- **Light Sleep**: ~0.8mA with peripherals active
- **Deep Sleep**: ~10µA with RTC active
- **Display Power**: ~20mA for backlight (adjustable)

### Power Management
- **Dynamic Frequency**: Automatic CPU frequency scaling
- **Peripheral Control**: Disable unused peripherals
- **Sleep Modes**: Multiple sleep levels for power saving
- **Wake Sources**: Wake from timers, GPIO, or sensors
- **Battery Monitoring**: ADC for battery voltage monitoring

## Package Contents

- 1x ESP32-S3-LCD-1.3 development board
- Documentation and example code
- Pin reference guide
- Quick start instructions

## Important Notes

- **Display Orientation**: Default orientation may need software adjustment
- **Power Requirements**: USB-C provides sufficient power for all features
- **Heat Management**: May get warm during intensive processing
- **Antenna Performance**: Keep antenna area clear for best wireless performance
- **ESD Protection**: Handle with care to avoid static damage

## Advantages

- **Integrated Display**: No need for separate display module
- **Motion Sensing**: Built-in IMU for interactive applications
- **Compact Size**: Small form factor for portable projects
- **Wireless Ready**: Built-in WiFi and Bluetooth connectivity
- **Cost Effective**: Good value for features provided

## Getting Started

### Basic Setup
1. **Install ESP32 Support**: Add ESP32 boards to Arduino IDE
2. **Connect USB-C**: Use USB-C cable for programming
3. **Install Libraries**: Add display and sensor libraries
4. **Upload Example**: Start with basic display test
5. **Test Sensors**: Verify IMU functionality

### First Project
- **Hello World**: Display text on screen
- **Sensor Reading**: Show IMU data on display
- **WiFi Connection**: Connect to wireless network
- **Simple GUI**: Create basic user interface
- **Motion Response**: React to device movement

## Recommended Accessories

- USB-C cable for programming and power
- LiPo battery for portable operation
- Enclosure or case for protection
- Touch overlay for interactive applications
- External sensors via I2C/SPI connections
