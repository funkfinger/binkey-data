---
type: electronic-component
category: Real-Time Clock
subcategory: RTC with RAM
brand: Motorola
part_number: MC68HC68T1P
size: DIP-16
color: Black
location: [Cabinet-3/Bin-33/Section-A]
quantity: 1
status: available
price_range: $5-15
tags:
  [
    rtc,
    real-time-clock,
    ram,
    serial-interface,
    motorola,
    dip-16,
    vintage,
    cabinet-3,
    bin-33,
    section-a,
    status-available,
  ]
---

# Motorola MC68HC68T1P Real-Time Clock

## Details

- **Location**: Cabinet-3, Bin 33, Section A
- **Category**: Real-Time Clock
- **Quantity**: 1
- **Status**: Available
- **Package**: 16-pin DIP (Dual In-line Package)
- **Datasheet**: [MC68HC68T1 Datasheet](https://www.alldatasheet.com/datasheet-pdf/pdf/4185/MOTOROLA/MC68HC68T1.html)

## Description

The MC68HC68T1P is a CMOS Real-Time Clock plus RAM peripheral that contains a real-time clock/calendar, 32×8 static RAM, and a synchronous, serial, three-wire interface for communication with a microcontroller or processor. This is the DIP-16 package version of the MC68HC68T1 series.

### Key Features

- **Full Clock Features**: Seconds, Minutes, Hours (AM/PM), Day-of-Week, Date, Month, Year (0-99), Auto Leap Year
- **32-Byte General Purpose RAM**: Static RAM for data storage
- **Serial Interface**: Direct interface to Motorola SPI and National MICROWIRE serial data ports
- **Low Power**: Minimum timekeeping voltage of 2.2V
- **Burst Mode**: Reading/writing successive addresses in Clock/RAM
- **Flexible Input**: Selectable crystal or 50/60 Hz line input frequency
- **BCD Data Format**: Clock registers utilize BCD (Binary Coded Decimal) data
- **Buffered Output**: Clock output for driving CPU clock, timer, colon, or LCD backplane
- **Power Management**: Power-on reset with first time-up bit
- **Freeze Circuit**: Eliminates software overhead during clock read
- **Interrupt Modes**: Three independent modes - Alarm, Periodic, or Power-Down
- **CPU Reset Output**: Provides orderly power-up/power-down
- **Watchdog Circuit**: Built-in watchdog functionality

### Technical Specifications

- **Package**: 16-pin DIP (0.6" width)
- **Technology**: HCMOS
- **Operating Voltage**: 2.2V - 5.5V (typical 5V operation)
- **Timekeeping Voltage**: 2.2V minimum
- **RAM Size**: 32 bytes (32×8 static RAM)
- **Interface**: 3-wire synchronous serial (SPI/MICROWIRE compatible)
- **Crystal Frequency**: Selectable (typically 32.768 kHz)
- **Chip Complexity**: 8500 FETs or 2125 equivalent gates

## Typical Pinout (DIP-16)

```
    MC68HC68T1P
    ┌─────────────┐
VCC │1          16│ VSS
X1  │2          15│ CE
X2  │3          14│ I/O
RST │4          13│ SCLK
IRQ │5          12│ DS
VRT │6          11│ R/W
CLK │7          10│ AS
WDI │8           9│ DS
    └─────────────┘
```

_Note: This is a typical pinout - consult the official datasheet for exact pin assignments_

### Pin Descriptions

- **VCC (Pin 1)**: Power supply (+5V typical)
- **X1/X2 (Pins 2-3)**: Crystal oscillator connections (32.768 kHz typical)
- **RST (Pin 4)**: Reset input (active low)
- **IRQ (Pin 5)**: Interrupt request output
- **VRT (Pin 6)**: RAM/RTC backup power input
- **CLK (Pin 7)**: Clock output
- **WDI (Pin 8)**: Watchdog input
- **DS (Pin 9)**: Data strobe
- **AS (Pin 10)**: Address strobe
- **R/W (Pin 11)**: Read/Write control
- **DS (Pin 12)**: Data strobe
- **SCLK (Pin 13)**: Serial clock
- **I/O (Pin 14)**: Serial data input/output
- **CE (Pin 15)**: Chip enable (active low)
- **VSS (Pin 16)**: Ground

## Applications

- **Embedded Systems**: Real-time clock for microcontroller projects
- **Data Logging**: Timestamping for data acquisition systems
- **Industrial Control**: Time-based control and scheduling
- **Legacy System Maintenance**: Replacement for vintage computer systems
- **Battery-Backed Timekeeping**: Low-power clock applications

## Interface Notes

- **SPI Compatible**: Direct connection to SPI-enabled microcontrollers
- **MICROWIRE Compatible**: Works with National Semiconductor MICROWIRE interface
- **3-Wire Serial**: Chip Enable (CE), Serial Clock (SCLK), and bidirectional Data (I/O)
- **Burst Mode**: Efficient reading/writing of consecutive memory locations

## Tags

rtc, real-time-clock, ram, serial-interface, motorola, dip-16, vintage #cabinet-3 #bin-33 #section-a #status-available

## Notes

This is a vintage component from Motorola's 68HC series. While discontinued, it remains useful for:

- Restoring vintage computer systems
- Educational projects demonstrating RTC concepts
- Legacy system maintenance
- Hobbyist projects requiring simple RTC functionality

The MC68HC68T1P is pin-for-pin compatible with the CDP68HC68T1 and can serve as a direct replacement. For new designs, consider modern RTC alternatives like DS1307, DS3231, or PCF8563 which offer similar functionality with better availability.

### Related Components

- **MC68HC68T1**: Same functionality, different package options
- **CDP68HC68T1**: Pin-compatible alternative
- **DS1307**: Modern I2C RTC alternative
- **DS3231**: High-precision I2C RTC with temperature compensation
- **PCF8563**: Low-power I2C RTC alternative
