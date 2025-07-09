---
type: electronic-component
category: Microcontroller Boards
subcategory: Bluetooth LE Development Board
brand: Adafruit
part_number: 4481
model: ItsyBitsy nRF52840 Express
microcontroller: nRF52840
architecture: ARM Cortex-M4F
clock_speed: 64MHz
voltage: 3.3V
flash: 1024KB
ram: 256KB
qspi_flash: 2MB
connectivity: [Bluetooth_LE, USB]
interface: [USB, I2C, SPI, UART, I2S]
gpio_pins: 21
analog_inputs: 6
pwm_outputs: 12
dimensions: 36.0mm x 17.6mm x 5.3mm
weight: 3.0g
usb_native: true
location: [Cabinet-1/Bin-28]
quantity: 1
status: available
price_range: $15-20
tags: [microcontroller, bluetooth-le, nrf52840, arm, cortex-m4, usb, circuitpython, arduino, adafruit, itsybitsy]
---

# Adafruit ItsyBitsy nRF52840 Express - Bluetooth LE

## Details

- **Location**: Cabinet-1, Bin 28
- **Category**: Microcontroller Boards
- **Type**: Bluetooth LE Development Board
- **Microcontroller**: Nordic nRF52840
- **Brand**: Adafruit
- **Part Number**: 4481
- **Quantity**: 1
- **Product URL**: https://www.adafruit.com/product/4481

## Description

Compact Bluetooth LE development board featuring the Nordic nRF52840 processor in the popular ItsyBitsy form factor. Combines powerful ARM Cortex-M4F processing with built-in Bluetooth LE radio, making it perfect for wireless IoT projects, wearables, and connected devices. Supports both Arduino IDE and CircuitPython for easy development.

## Specifications

- **Part Number**: 4481
- **Microcontroller**: Nordic nRF52840
- **Architecture**: 32-bit ARM Cortex-M4F with FPU
- **Clock Speed**: 64MHz
- **Operating Voltage**: 3.3V
- **Input Voltage**: 3.3V-5.5V (via USB or VIN)
- **Flash Memory**: 1024KB (1MB)
- **RAM**: 256KB
- **QSPI Flash**: 2MB for file storage and CircuitPython code
- **Dimensions**: 36.0mm × 17.6mm × 5.3mm
- **Weight**: 3.0g

## Image

![Adafruit ItsyBitsy nRF52840 Express Bluetooth LE](../attachments/itsybitsy-nrf52840-4481.jpg)

## Features

- **Bluetooth LE**: Built-in 2.4GHz radio with +8dBm output power
- **ARM Cortex-M4F**: High-performance processor with floating-point unit
- **USB Native**: Built-in USB support with UF2 bootloader
- **CircuitPython**: Drag-and-drop programming support
- **Arduino Compatible**: Full Arduino IDE support
- **Compact Size**: ItsyBitsy form factor (1.4" × 0.7")
- **Rich I/O**: 21 GPIO pins with multiple functions

## Bluetooth Capabilities

- **Protocol**: Bluetooth Low Energy (BLE) 5.0
- **Frequency**: 2.4GHz ISM band
- **Output Power**: Up to +8dBm
- **Range**: Typical 10-100m depending on environment
- **Modes**: Central and Peripheral operation
- **Certification**: FCC/IC/TELEC certified module
- **Profiles**: HID, UART, custom profiles supported

## Pin Configuration

- **Digital I/O**: 21 pins
- **Analog Inputs**: 6 pins (12-bit ADC)
- **PWM Outputs**: Up to 12 pins (3 PWM modules × 4 outputs each)
- **Communication**:
  - Hardware SPI, UART, I2C on any pins
  - I2S digital audio support
- **Special Pins**:
  - Vhigh output pin for 5V logic devices
  - Digital 5 level-shifted output
  - Built-in LED (pin 13)
  - DotStar RGB LED for status indication

## Programming & Software

- **Arduino IDE**: Full support with Adafruit board package
- **CircuitPython**: Drag-and-drop Python programming
- **UF2 Bootloader**: Appears as USB drive for easy programming
- **USB Modes**: Serial, HID (Keyboard/Mouse), Mass Storage
- **Libraries**: Extensive Bluetooth and sensor libraries available
- **Development**: Web-based and desktop IDEs supported

## Memory & Storage

- **Program Flash**: 1MB for application code
- **RAM**: 256KB for variables and buffers
- **QSPI Flash**: 2MB for:
  - CircuitPython filesystem
  - Data logging
  - Audio/image files
  - User data storage

## Power Management

- **USB Power**: 5V via micro-USB connector
- **Battery Power**: 3.3V-5.5V via VIN pin or JST connector
- **Low Power**: Hardware sleep modes for battery operation
- **Power LED**: Indicates power status
- **Current Draw**: Varies by application and radio usage

## Communication Interfaces

- **USB**: Native USB 2.0 Full Speed (12 Mbps)
- **Bluetooth LE**: 2.4GHz wireless communication
- **UART**: Multiple hardware serial ports
- **I2C**: Hardware I2C with clock stretching
- **SPI**: High-speed serial peripheral interface
- **I2S**: Digital audio interface

## Applications

- **IoT Devices**: Wireless sensors and actuators
- **Wearables**: Smart clothing and accessories
- **Home Automation**: Bluetooth-connected home devices
- **Health Monitoring**: Fitness trackers and medical devices
- **Asset Tracking**: Location and movement monitoring
- **Audio Projects**: Bluetooth audio streaming and processing
- **Educational**: Learning Bluetooth and embedded programming

## Advantages

- **Wireless Connectivity**: Built-in Bluetooth LE radio
- **Easy Programming**: CircuitPython and Arduino support
- **Compact Size**: Perfect for space-constrained projects
- **Low Power**: Optimized for battery-powered applications
- **Rich Peripherals**: Multiple communication interfaces
- **Community Support**: Extensive documentation and examples
- **Professional Grade**: FCC certified for commercial use

## Development Tools

- **Arduino IDE**: Traditional C/C++ development
- **CircuitPython**: Python-based development
- **Visual Studio Code**: Advanced IDE with extensions
- **Mu Editor**: Simple Python editor for beginners
- **Web-based IDEs**: Browser-based development options

## Kit Contents

- ItsyBitsy nRF52840 Express board
- Headers (not pre-soldered)
- Quick start documentation

## Notes

- Headers require soldering for breadboard use
- Compatible with ItsyBitsy form factor accessories
- Bluetooth range depends on antenna design and environment
- Low power modes require careful programming
- CircuitPython provides beginner-friendly development
- Arduino libraries provide advanced functionality
