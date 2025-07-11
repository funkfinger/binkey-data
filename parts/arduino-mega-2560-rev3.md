---
type: part
title: Arduino Mega 2560 Rev3
description: 8-bit microcontroller board based on ATmega2560 with 54 digital I/O pins, 16 analog inputs, and 4 serial ports
manufacturer: Arduino
part_number: A000067
category: microcontrollers
subcategory: arduino-boards
tags:
  [
    arduino,
    mega,
    atmega2560,
    microcontroller,
    development-board,
    8-bit,
    usb,
    official,
  ]
quantity: 2
location: [cabinet-1-bin-39]
datasheet_url: http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2549-8-bit-AVR-Microcontroller-ATmega640-1280-1281-2560-2561_datasheet.pdf
purchase_url: https://store.arduino.cc/products/arduino-mega-2560-rev3
price: 52.80
currency: EUR
date_added: 2025-01-09
status: active
---

# Arduino Mega 2560 Rev3

## Overview

The Arduino Mega 2560 Rev3 is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 15 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with an AC-to-DC adapter or battery to get started.

## Specifications

- **Microcontroller**: ATmega2560
- **Operating Voltage**: 5V
- **Input Voltage (recommended)**: 7-12V
- **Input Voltage (limit)**: 6-20V
- **Digital I/O Pins**: 54 (of which 15 provide PWM output)
- **Analog Input Pins**: 16
- **DC Current per I/O Pin**: 20 mA
- **DC Current for 3.3V Pin**: 50 mA
- **Flash Memory**: 256 KB of which 8 KB used by bootloader
- **SRAM**: 8 KB
- **EEPROM**: 4 KB
- **Clock Speed**: 16 MHz
- **LED_BUILTIN**: 13
- **Length**: 101.52 mm
- **Width**: 53.3 mm
- **Weight**: 37 g

## Pinout Reference

**Official Pinout Diagram**: [Arduino Mega 2560 Pinout PDF](../attachments/arduino-mega-2560-pinout.pdf)

### Pin Layout Overview

```
Digital Pins: 0-53 (PWM: 2-13, 44-46)
Analog Pins: A0-A15
Serial Ports: Serial (0,1), Serial1 (19,18), Serial2 (17,16), Serial3 (15,14)
SPI: 50 (MISO), 51 (MOSI), 52 (SCK), 53 (SS)
I2C: 20 (SDA), 21 (SCL)
```

## Basic Wiring Examples

### LED Blink Circuit

```
Arduino Mega Pin 13 → LED Anode (long leg)
LED Cathode (short leg) → 220Ω Resistor → GND

Note: Pin 13 has built-in LED
```

### Button Input Circuit

```
5V → 10kΩ Pull-up Resistor → Arduino Pin 2
Arduino Pin 2 → Button → GND

Code: digitalRead(2) returns HIGH when not pressed, LOW when pressed
```

### Multiple Analog Sensors

```
Sensor 1 Output → Arduino Pin A0
Sensor 2 Output → Arduino Pin A1
Sensor 3 Output → Arduino Pin A2
...up to A15

All sensors: 5V → Sensor VCC, GND → Sensor GND
Code: analogRead(A0) returns 0-1023 (0-5V)
```

### I2C Device Connection

```
Arduino 5V → Device VCC
Arduino GND → Device GND
Arduino Pin 20 (SDA) → Device SDA
Arduino Pin 21 (SCL) → Device SCL
Add 4.7kΩ pull-up resistors on SDA and SCL lines
```

### SPI Device Connection

```
Arduino 5V → Device VCC
Arduino GND → Device GND
Arduino Pin 52 (SCK) → Device SCK
Arduino Pin 50 (MISO) → Device MISO
Arduino Pin 51 (MOSI) → Device MOSI
Arduino Pin 53 (SS) → Device CS/SS
```

### Multiple Serial Devices

```
Device 1: Serial (pins 0,1) - USB programming port
Device 2: Serial1 (pins 19,18) - GPS module
Device 3: Serial2 (pins 17,16) - Bluetooth module
Device 4: Serial3 (pins 15,14) - WiFi module

Each serial port can operate independently
```

## Programming Examples

### Multiple Serial Ports

```cpp
void setup() {
  Serial.begin(9600);    // USB Serial
  Serial1.begin(9600);   // GPS on pins 19,18
  Serial2.begin(9600);   // Bluetooth on pins 17,16
  Serial3.begin(9600);   // WiFi on pins 15,14
}

void loop() {
  // Read from GPS
  if (Serial1.available()) {
    String gpsData = Serial1.readString();
    Serial.println("GPS: " + gpsData);
  }

  // Read from Bluetooth
  if (Serial2.available()) {
    String btData = Serial2.readString();
    Serial.println("BT: " + btData);
  }
}
```

### Multiple Analog Sensors

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  // Read all 16 analog inputs
  for (int i = 0; i < 16; i++) {
    int sensorValue = analogRead(i);
    float voltage = sensorValue * (5.0 / 1023.0);

    Serial.print("A");
    Serial.print(i);
    Serial.print(": ");
    Serial.print(voltage);
    Serial.print("V  ");
  }
  Serial.println();
  delay(1000);
}
```

### PWM Motor Control

```cpp
// Control multiple motors with PWM
int motor1Pin = 3;   // PWM pin
int motor2Pin = 5;   // PWM pin
int motor3Pin = 6;   // PWM pin

void setup() {
  pinMode(motor1Pin, OUTPUT);
  pinMode(motor2Pin, OUTPUT);
  pinMode(motor3Pin, OUTPUT);
}

void loop() {
  // Ramp up motors
  for (int speed = 0; speed <= 255; speed++) {
    analogWrite(motor1Pin, speed);
    analogWrite(motor2Pin, speed);
    analogWrite(motor3Pin, speed);
    delay(10);
  }

  // Ramp down motors
  for (int speed = 255; speed >= 0; speed--) {
    analogWrite(motor1Pin, speed);
    analogWrite(motor2Pin, speed);
    analogWrite(motor3Pin, speed);
    delay(10);
  }
}
```

## Key Features

### Extensive I/O Capabilities

- **54 Digital Pins**: More I/O than standard Arduino boards
- **16 Analog Inputs**: Extensive analog sensing capabilities
- **15 PWM Outputs**: For motor control and LED dimming
- **4 Hardware Serial Ports**: Multiple UART communications

### Power Management

- **Multiple Power Options**: USB, DC jack, or VIN pin
- **Automatic Power Selection**: Seamless switching between sources
- **Onboard Voltage Regulation**: 5V and 3.3V outputs
- **Power Protection**: Resettable polyfuse protection

### Communication Interfaces

- **USB**: Native USB communication for programming and serial
- **SPI**: Serial Peripheral Interface on pins 50, 51, 52, 53
- **I2C/TWI**: Two-wire interface on pins 20 (SDA) and 21 (SCL)
- **Multiple UARTs**: Four hardware serial ports for communication

## Pin Configuration

### Digital Pins (0-53)

- **Serial Communication**: Pins 0-1 (Serial), 19-18 (Serial1), 17-16 (Serial2), 15-14 (Serial3)
- **External Interrupts**: Pins 2, 3, 18, 19, 20, 21
- **PWM Output**: Pins 2-13 and 44-46
- **SPI**: Pins 50 (MISO), 51 (MOSI), 52 (SCK), 53 (SS)
- **Built-in LED**: Pin 13

### Analog Pins (A0-A15)

- **10-bit Resolution**: 1024 different values
- **Reference Voltage**: Ground to 5V (adjustable with AREF)
- **Input Range**: 0-5V (or AREF voltage)

### Power Pins

- **VIN**: Input voltage to board when using external power
- **5V**: Regulated 5V output from onboard regulator
- **3V3**: 3.3V output (50 mA max)
- **GND**: Ground pins
- **IOREF**: Voltage reference for shields

## Programming and Development

### Arduino IDE Support

- **Native Support**: Full compatibility with Arduino IDE
- **Extensive Libraries**: Access to thousands of Arduino libraries
- **Community Support**: Large community and extensive documentation
- **Easy Programming**: Simple upload via USB

### Bootloader

- **Pre-installed**: Comes with Arduino bootloader
- **USB Programming**: No external programmer needed
- **STK500 Protocol**: Compatible with standard Arduino tools
- **Firmware Updates**: Bootloader can be updated via ICSP

## Applications

### Large Projects

- **Complex Robotics**: Multiple motors, sensors, and communication
- **Data Logging**: Multiple sensors with SD card storage
- **Home Automation**: Multiple device control and monitoring
- **Industrial Control**: Multiple I/O for process control

### Educational Use

- **Advanced Arduino Courses**: Teaching complex microcontroller concepts
- **Engineering Projects**: Senior design and capstone projects
- **Research Platforms**: Academic research and development
- **STEM Education**: Advanced programming and electronics

### Prototyping

- **Large-scale Prototypes**: Projects requiring many I/O pins
- **Multi-sensor Systems**: Environmental monitoring stations
- **Communication Hubs**: Multiple serial device coordination
- **Motor Control**: Multi-axis motion control systems

## Shield Compatibility

### Standard Compatibility

- **Arduino Shields**: Compatible with most Arduino Uno shields
- **Pin Mapping**: Digital pins 0-13 in same locations as Uno
- **Power Headers**: Standard power pin arrangement
- **ICSP Header**: Standard programming interface

### Extended Features

- **Additional Pins**: Access to extra digital and analog pins
- **Multiple Serial**: Shields can use additional UART ports
- **Extended Analog**: More analog inputs for sensor shields
- **Power Capacity**: Can drive more demanding shields

## Memory Organization

### Flash Memory (256 KB)

- **Program Storage**: User sketches and libraries
- **Bootloader**: 8 KB reserved for Arduino bootloader
- **Available Space**: 248 KB for user programs
- **Non-volatile**: Retains programs when powered off

### SRAM (8 KB)

- **Variable Storage**: Runtime variables and arrays
- **Stack Space**: Function calls and local variables
- **Volatile**: Lost when power is removed
- **Shared Resource**: Used by all program components

### EEPROM (4 KB)

- **Persistent Storage**: Data that survives power cycles
- **Configuration**: Settings and calibration data
- **User Accessible**: Can be read/written by sketches
- **Limited Writes**: ~100,000 write cycles per location

## Communication Protocols

### Serial Communication

- **Serial (pins 0-1)**: Connected to USB for computer communication
- **Serial1 (pins 19-18)**: Additional UART for external devices
- **Serial2 (pins 17-16)**: Third UART for more devices
- **Serial3 (pins 15-14)**: Fourth UART for complex projects

### SPI Communication

- **High Speed**: Fast synchronous communication
- **Multiple Devices**: Chip select for device selection
- **Standard Protocol**: Compatible with many sensors and modules
- **Hardware Support**: Dedicated SPI peripheral

### I2C/TWI Communication

- **Two-wire Interface**: Clock and data lines
- **Multiple Devices**: Address-based device selection
- **Standard Protocol**: Compatible with many sensors
- **Pull-up Resistors**: May need external pull-ups

## Power Specifications

### Input Power

- **USB Power**: 5V from USB connection
- **DC Jack**: 2.1mm center-positive plug
- **VIN Pin**: Direct connection to voltage regulator input
- **Recommended Range**: 7-12V for optimal performance

### Output Power

- **5V Rail**: Up to 500mA (depending on input voltage)
- **3.3V Rail**: Up to 50mA
- **I/O Pins**: 20mA per pin, 200mA total
- **Power LED**: Indicates board is powered

## Getting Started

### Basic Setup

1. **Install Arduino IDE**: Download from arduino.cc
2. **Connect USB Cable**: Use standard USB A to B cable
3. **Select Board**: Choose "Arduino Mega 2560" in IDE
4. **Select Port**: Choose correct COM port
5. **Upload Sketch**: Start with built-in examples

### First Project

- **Blink LED**: Use built-in LED on pin 13
- **Serial Monitor**: Test communication with computer
- **Analog Read**: Read voltage from analog pins
- **Digital I/O**: Control external LEDs and read buttons

## Package Contents

- 1x Arduino Mega 2560 Rev3 board
- Documentation and getting started guide
- Stickers and promotional materials

## Important Notes

- **Power Considerations**: Check current requirements for connected devices
- **Pin Current Limits**: Don't exceed 20mA per pin or 200mA total
- **Voltage Levels**: 5V logic levels, not 3.3V compatible
- **Shield Compatibility**: Most Uno shields work, but check pin usage
- **Heat Management**: Board may get warm with high current loads

## Advantages

- **Extensive I/O**: More pins than standard Arduino boards
- **Multiple Serial Ports**: Ideal for complex communication projects
- **Large Memory**: More space for complex programs
- **Shield Compatible**: Works with existing Arduino ecosystem
- **Official Arduino**: Guaranteed compatibility and support

## Recommended Accessories

- USB cable (Type A to Type B)
- DC power adapter (7-12V, center positive)
- Breadboard and jumper wires
- Arduino shields for expanded functionality
- Sensors and actuators for projects
