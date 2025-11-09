---
type: electronic-component
category: Interface & Expansion
subcategory: I/O Expanders
brand: Texas Instruments
part_number: TCA6424A
model: TCA6424ARGJR
description: 24-bit I2C/SMBus I/O expander with 32 GPIO pins, low-voltage operation, UQFN-32 package
manufacturer: Texas Instruments
package: UQFN-32 (Micro QFN)
voltage: 1.65V-5.5V
location: [Cabinet-6/Bin-1/Container-M]
quantity: 10
status: available
price_range: $0.50-0.80 each
datasheet: https://www.ti.com/lit/gpn/TCA6424A
product_url: https://www.ti.com/product/TCA6424A
tags:
  [
    i2c-expander,
    io-expander,
    gpio-expansion,
    24-bit,
    smbus,
    texas-instruments,
    ti,
    uqfn-32,
    microcontroller-interface,
    cabinet-6,
    bin-1,
    status-available,
  ]
date_added: 2025-11-09
added_date: 2025-11-09
---

## Details

The Texas Instruments TCA6424A is a low-voltage 24-bit I2C/SMBus I/O expander designed to expand the number of GPIO pins available on microcontrollers and other digital systems. It provides 24 programmable input/output pins organized as three 8-bit ports, all controlled via a simple 2-wire I2C/SMBus interface. This UQFN-32 package device is ideal for applications requiring GPIO expansion with minimal board space.

## Description

The TCA6424A is a parallel-to-serial interface chip that allows a microcontroller with limited GPIO pins to control or monitor up to 24 additional digital I/O lines. Each of the 24 I/O pins can be independently configured as either an input or output. The device communicates with the host microcontroller via the I2C/SMBus protocol, requiring only two signal lines (SDA and SCL) plus power and ground connections.

## Specifications

- **Type**: 24-bit I2C/SMBus I/O Expander
- **GPIO Pins**: 24 (organized as 3 ports of 8 pins each)
- **Interface**: I2C/SMBus (2-wire serial communication)
- **Supply Voltage**: 1.65V to 5.5V
- **Package**: UQFN-32 (Micro QFN, 32-pin)
- **Pin Configuration**: 8 pins per side
- **Operating Temperature**: -40°C to +85°C
- **I2C Address**: Configurable via address pins (multiple devices can be daisy-chained)
- **Features**:
  - Programmable input polarity inversion
  - Programmable I/O direction (input or output)
  - Interrupt output pin for input change detection
  - Low power consumption
  - 5V tolerant I/O pins
  - Schmitt trigger inputs

## Applications

- GPIO expansion for microcontrollers with limited I/O
- Keyboard and button matrix scanning
- LED control and display drivers
- Industrial control systems
- IoT and embedded systems
- Sensor interface expansion
- General-purpose digital I/O expansion
- Home automation systems

## Technical Notes

- Each I/O pin can sink or source up to 25mA
- Multiple TCA6424A devices can be connected to the same I2C bus using different address configurations
- The device includes programmable input polarity inversion for each port
- Interrupt output can be configured to signal when input pins change state
- Low power consumption makes it suitable for battery-powered applications
- 5V tolerant I/O allows interfacing with both 3.3V and 5V logic systems
- Requires pull-up resistors on I2C bus (typically 4.7kΩ)

## Pin Configuration

The TCA6424A features 32 pins in a Micro QFN package:
- 24 GPIO pins (Port 0, Port 1, Port 2 - 8 pins each)
- 2 I2C interface pins (SDA, SCL)
- 3 Address pins (A0, A1, A2)
- 1 Interrupt output pin (INT)
- Power and ground pins

## Tags

TCA6424A, I/O expander, GPIO expansion, I2C, SMBus, 24-bit, Texas Instruments, UQFN-32, microcontroller interface

