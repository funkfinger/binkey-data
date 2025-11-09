---
type: electronic-component
category: Memory & Storage
subcategory: Flash Memory - SPI
brand: Adafruit
part_number: 4763
model: GD25Q16C
description: 2MB SPI Flash Memory in 8-Pin SOIC package, 16 Megabit non-volatile storage, CircuitPython and Arduino compatible
manufacturer: GigaDevice (GD25Q16C)
package: SOIC-8
voltage: 2.7V-3.6V
current: 5mA (typical read), 40mA (typical write)
power: Low power consumption
interface: [SPI, Serial Peripheral Interface]
connectivity: [SPI Bus]
compatibility: [CircuitPython, Arduino, Microcontroller projects]
location: [Cabinet-6/Bin-1/Container-F]
quantity: 5
status: available
price_range: $3.95-5.00 each
datasheet: https://cdn-shop.adafruit.com/product-files/4763/4763_GD25Q16CTIGR.pdf
product_url: https://www.adafruit.com/product/4763
tags: [flash-memory, spi, gd25q16, 2mb, storage, soic-8, circuitpython, arduino, adafruit, cabinet-6, bin-1, status-available]
date_added: 2025-11-09
added_date: 2025-11-09
---

# Adafruit 4763 - GD25Q16C SPI Flash Memory

## Details

- **Location**: Cabinet-6, Bin 1, Container F
- **Category**: Memory & Storage
- **Brand**: Adafruit
- **Part Number**: 4763
- **Model**: GD25Q16C
- **Package**: SOIC-8 (8-pin DIP)
- **Quantity**: 5 units
- **Status**: Available
- **Price Range**: $3.95-5.00 per unit
- **Datasheet**: [GD25Q16C Datasheet](https://cdn-shop.adafruit.com/product-files/4763/4763_GD25Q16CTIGR.pdf)
- **Product URL**: [Adafruit - Product 4763](https://www.adafruit.com/product/4763)

## Description

The Adafruit 4763 is a GigaDevice GD25Q16C SPI Flash memory chip providing 2 MBytes (16 Megabits) of non-volatile storage in a standard 8-pin SOIC package. This chip is well-supported by CircuitPython and Arduino SPI Flash libraries, making it ideal for data logging, configuration storage, and firmware updates in microcontroller projects. The SPI interface allows easy integration with any microcontroller with SPI capability.

## Specifications

### Memory Characteristics

- **Total Capacity**: 2 MByte (16 Megabit)
- **Memory Type**: Serial Flash (NOR Flash)
- **Interface**: Serial Peripheral Interface (SPI)
- **SPI Speed**: Up to 104 MHz (standard mode), up to 208 MHz (dual/quad mode)
- **Erase Block Size**: 4KB, 32KB, 64KB
- **Page Size**: 256 bytes
- **Write Cycle Time**: 1.5ms (typical)
- **Erase Cycle Time**: 50ms (4KB block), 400ms (64KB block)

### Electrical Characteristics

- **Supply Voltage**: 2.7V to 3.6V (typical 3.3V)
- **Operating Current**: 5mA (typical read), 40mA (typical write)
- **Standby Current**: 10µA (typical)
- **Deep Power-Down Current**: 1µA (typical)
- **Operating Temperature**: -40°C to +85°C
- **Storage Temperature**: -40°C to +125°C

### Mechanical Characteristics

- **Package**: SOIC-8 (8-pin DIP)
- **Pin Count**: 8 pins
- **Mounting**: Through-hole or SMD adapter
- **RoHS Compliant**: Yes

### Pin Configuration

Standard SOIC-8 SPI Flash pinout:
```
Pin 1: CS (Chip Select)
Pin 2: DO (Data Out / MISO)
Pin 3: WP (Write Protect)
Pin 4: GND (Ground)
Pin 5: DI (Data In / MOSI)
Pin 6: CLK (Clock)
Pin 7: HOLD (Hold)
Pin 8: VCC (Power Supply +3.3V)
```

## Applications

- Data logging and storage
- Configuration memory for microcontroller projects
- Firmware update storage
- CircuitPython projects requiring persistent storage
- Arduino projects with SPI Flash requirements
- Embedded systems with non-volatile memory needs
- IoT device data storage
- Audio/video sample storage

## Key Features

- **2MB Capacity**: Sufficient for most embedded applications
- **SPI Interface**: Standard interface compatible with all microcontrollers
- **CircuitPython Support**: Direct library support for CircuitPython boards
- **Arduino Compatible**: Works with Arduino SPI Flash libraries
- **Low Power**: Ideal for battery-powered applications
- **Fast Access**: Up to 104 MHz SPI speed
- **Reliable**: Proven GigaDevice technology
- **SOIC-8 Package**: Standard DIP package for easy integration

## Circuit Integration

### Basic SPI Connection

Connect to microcontroller SPI bus:
- CS to GPIO pin (chip select)
- DO to MISO (Master In, Slave Out)
- DI to MOSI (Master Out, Slave In)
- CLK to SCK (Serial Clock)
- VCC to +3.3V
- GND to Ground
- WP to VCC (write protect disabled) or GPIO
- HOLD to VCC (hold disabled) or GPIO

### Typical Application Circuit

```
Microcontroller          GD25Q16C
    CS -------- Pin 1 (CS)
   MISO ------- Pin 2 (DO)
   MOSI ------- Pin 5 (DI)
   SCK ------- Pin 6 (CLK)
   +3.3V ----- Pin 8 (VCC)
   GND ------- Pin 4 (GND)
```

## Technical Notes

- Requires 3.3V supply (not 5V tolerant)
- SPI clock speed up to 104 MHz standard mode
- Supports dual and quad SPI modes for faster access
- Write protection pin (WP) can be used for hardware write protection
- Hold pin (HOLD) can pause SPI operations
- Typical erase/write cycle: 1.5ms write, 50ms-400ms erase
- Endurance: 100,000 erase cycles typical
- Data retention: 20 years typical

## Software Support

- **CircuitPython**: Built-in support via `adafruit_circuitpython_busio` and flash libraries
- **Arduino**: Compatible with Arduino SPI library and Adafruit SPI Flash library
- **MicroPython**: Supported via standard SPI interface
- **C/C++**: Direct SPI protocol implementation

## Tags

flash-memory, spi, gd25q16, 2mb, storage, soic-8, circuitpython, arduino, adafruit, cabinet-6, bin-1, status-available

## Notes

Excellent SPI Flash memory chips for CircuitPython and Arduino projects. The 2MB capacity is suitable for data logging, configuration storage, and firmware updates. Stock of 5 units provides good supply for multiple projects. These chips are widely used in Adafruit products and are well-documented with excellent library support.

