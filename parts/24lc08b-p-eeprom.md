---
type: electronic-component
category: Memory
subcategory: EEPROM
brand: Microchip Technology
part_number: 24LC08B/P
model: 24LC08B-P
description: 8K-bit I2C Serial EEPROM in 8-pin DIP package
manufacturer: Microchip Technology
package: 8-PDIP
size: 0.300" (7.62mm) width
voltage: 2.5V - 5.5V
current: 1mA (write), 1µA (standby)
power: 5mW (typical)
interface: [I2C]
connectivity: [I2C Bus]
compatibility: [Arduino, Raspberry Pi, microcontrollers]
location: [Cabinet-3/Bin-42/Section-A]
quantity: 20
status: available
price_range: $0.40-0.50
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/24AA08-24LC08B-24FC08-8K-I2C-Serial-EEPROM-20001710M.pdf
product_url: https://www.digikey.com/en/products/detail/microchip-technology/24LC08B-P/170160
tags: [eeprom, memory, i2c, serial, non-volatile, microchip, cabinet-3, bin-42, status-available]
date_added: 2025-01-13
---

# 24LC08B-P I2C Serial EEPROM

## Details

- **Location**: Cabinet-3, Bin 42, Section A
- **Category**: Memory
- **Brand**: Microchip Technology
- **Part Number**: 24LC08B/P
- **Package**: 8-PDIP
- **Quantity**: 20
- **Status**: Available
- **Price Range**: $0.40-0.50
- **Datasheet**: [24LC08B/P Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/24AA08-24LC08B-24FC08-8K-I2C-Serial-EEPROM-20001710M.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/microchip-technology/24LC08B-P/170160

## Description

The 24LC08B-P is an 8K-bit (1024 x 8) serial EEPROM from Microchip Technology. This non-volatile memory device uses the I2C protocol for communication and is ideal for storing configuration data, calibration values, and small amounts of user data in embedded systems. The device features a wide operating voltage range and low power consumption, making it suitable for battery-powered applications.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 2.5V - 5.5V
- **Current**: 1mA (write), 1µA (standby)
- **Power**: 5mW (typical)
- **Interface**: I2C (400 kHz max)

### Physical Characteristics  
- **Package**: 8-pin DIP (0.300" width)
- **Dimensions**: 9.27mm x 6.35mm x 3.3mm
- **Weight**: ~1g
- **Operating Temperature**: 0°C to +70°C (Commercial)

### Key Features
- 8K-bit (1024 x 8) EEPROM memory
- I2C serial interface (400 kHz)
- Page write capability (16 bytes)
- Hardware write protection
- 1,000,000 erase/write cycles
- 100-year data retention
- Self-timed write cycle (5ms typical)

## Applications

Common use cases and applications for this component:
- Configuration data storage
- Calibration value storage
- User settings and preferences
- Serial number storage
- Small data logging applications
- Firmware parameter storage

## Circuit Examples

### Basic I2C Connection
```
VCC (Pin 8) ---- +5V or +3.3V
GND (Pin 4) ---- Ground
SDA (Pin 5) ---- I2C Data Line (with 4.7kΩ pullup)
SCL (Pin 6) ---- I2C Clock Line (with 4.7kΩ pullup)
WP  (Pin 7) ---- Ground (write enable) or VCC (write protect)
A0  (Pin 1) ---- Ground or VCC (address bit 0)
A1  (Pin 2) ---- Ground or VCC (address bit 1)  
A2  (Pin 3) ---- Ground or VCC (address bit 2)
```

## Programming Examples

### Arduino Example
```cpp
#include <Wire.h>

#define EEPROM_ADDR 0x50  // Base address (A2,A1,A0 = 0,0,0)

void setup() {
  Wire.begin();
  Serial.begin(9600);
  
  // Write data
  writeEEPROM(0x00, 0x42);  // Write 0x42 to address 0x00
  
  // Read data
  byte data = readEEPROM(0x00);
  Serial.print("Read: 0x");
  Serial.println(data, HEX);
}

void writeEEPROM(int address, byte data) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address);
  Wire.write(data);
  Wire.endTransmission();
  delay(5);  // Write cycle time
}

byte readEEPROM(int address) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address);
  Wire.endTransmission();
  Wire.requestFrom(EEPROM_ADDR, 1);
  return Wire.read();
}

void loop() {
  // Main code here
}
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- Requires pullup resistors (4.7kΩ) on SDA and SCL lines
- Address pins (A0, A1, A2) allow up to 8 devices on same I2C bus
- Write protection pin (WP) prevents accidental writes when high
- Page write mode allows writing up to 16 bytes at once
- 5ms write cycle time must be observed between writes

## Tags

eeprom, memory, i2c, serial, non-volatile, microchip #cabinet-3 #bin-42 #status-available

## Notes

This is a reliable, industry-standard EEPROM perfect for storing small amounts of non-volatile data. The DIP package makes it breadboard-friendly for prototyping. Compatible with both 3.3V and 5V systems. Consider the 24LC08B-I/P variant for industrial temperature range (-40°C to +85°C) if needed for harsh environments.
