---
type: electronic-component
category: Digital Potentiometer
subcategory: Dual Channel
brand: Dallas Semiconductor
part_number: DS1267-100
size: DIP-14
color: Black
location: [Cabinet-3/Bin-33/Section-D]
quantity: 1
status: available
price_range: $8-20
tags:
  [
    digital-potentiometer,
    dual-channel,
    100k-ohm,
    serial-interface,
    dallas,
    dip-14,
    vintage,
    cabinet-3,
    bin-33,
    section-d,
    status-available,
  ]
---

# Dallas DS1267-100 Dual Digital Potentiometer

## Details

- **Location**: Cabinet-3, Bin 33, Section D
- **Category**: Digital Potentiometer
- **Quantity**: 1
- **Status**: Available
- **Package**: 14-pin DIP (Dual In-line Package)
- **Datasheet**: [DS1267 Datasheet](https://cdn-reichelt.de/documents/datenblatt/A200/DS1267~DAL.pdf)

## Description

The DS1267-100 is a dual digital potentiometer from Dallas Semiconductor featuring two independent 100kΩ potentiometers with 256 wiper positions each. Communication and control is accomplished via a 3-wire serial port interface, making it ideal for microcontroller-based applications requiring precise resistance control.

### Key Features

- **Dual Independent Potentiometers**: Two separate 100kΩ potentiometers
- **256 Wiper Positions**: 8-bit resolution for fine control
- **3-Wire Serial Interface**: Simple SPI-compatible communication
- **Non-Volatile Memory**: Wiper positions stored in EEPROM
- **Wide Supply Range**: +4.5V to +5.5V operation
- **Low Power**: Minimal current consumption
- **Temperature Stable**: Reliable operation across temperature range
- **End-to-End Resistance**: 100kΩ ±20% tolerance

### Technical Specifications

- **Package**: 14-pin DIP (0.3" width)
- **Technology**: CMOS with EEPROM
- **Resistance Value**: 100kΩ (±20%)
- **Resolution**: 8-bit (256 positions)
- **Wiper Resistance**: Typically 300Ω
- **Supply Voltage**: +4.5V to +5.5V
- **Supply Current**: 3mA maximum (active), 100μA (standby)
- **Operating Temperature**: -40°C to +85°C
- **Interface**: 3-wire serial (SPI compatible)

## Typical Pinout (DIP-14)

```
    DS1267-100
    ┌─────────────┐
VCC │1          14│ GND
CLK │2          13│ DQ
RST │3          12│ POT1_H
POT0_H│4        11│ POT1_W
POT0_W│5        10│ POT1_L
POT0_L│6         9│ NC
NC  │7           8│ NC
    └─────────────┘
```

### Pin Descriptions

- **VCC (Pin 1)**: Power supply (+4.5V to +5.5V)
- **CLK (Pin 2)**: Serial clock input
- **RST (Pin 3)**: Reset input (active low)
- **POT0_H (Pin 4)**: Potentiometer 0 high terminal
- **POT0_W (Pin 5)**: Potentiometer 0 wiper
- **POT0_L (Pin 6)**: Potentiometer 0 low terminal
- **NC (Pins 7, 8, 9)**: No connection
- **POT1_L (Pin 10)**: Potentiometer 1 low terminal
- **POT1_W (Pin 11)**: Potentiometer 1 wiper
- **POT1_H (Pin 12)**: Potentiometer 1 high terminal
- **DQ (Pin 13)**: Serial data input/output
- **GND (Pin 14)**: Ground

## Serial Interface

### Communication Protocol

- **3-Wire Interface**: Clock (CLK), Data (DQ), Reset (RST)
- **Data Format**: 8-bit commands and data
- **Clock Rate**: Up to 5MHz
- **Bidirectional Data**: Single DQ line for input/output

### Command Structure

- **Write Potentiometer**: Set wiper position (0-255)
- **Read Potentiometer**: Read current wiper position
- **Write Control Register**: Configure device operation
- **Read Control Register**: Read device status

## Applications

- **Audio Volume Control**: Stereo volume and balance adjustment
- **Bias Voltage Control**: Setting reference voltages in circuits
- **Gain Control**: Adjustable amplifier gain stages
- **Filter Tuning**: Active filter frequency adjustment
- **Calibration**: Precision trimming of analog circuits
- **LCD Contrast Control**: Display contrast adjustment
- **Motor Speed Control**: PWM duty cycle adjustment
- **Sensor Calibration**: Offset and span adjustment

## Circuit Examples

### Basic Volume Control

- Connect POT0_H to signal input, POT0_L to ground
- POT0_W provides variable output for volume control
- Use POT1 for balance control in stereo applications

### Voltage Divider

- Connect POT_H to positive reference, POT_L to ground
- POT_W provides programmable voltage output
- Resolution: Vref × (wiper_position / 255)

## Advantages

- **Digital Control**: Precise, repeatable settings
- **Non-Volatile**: Settings retained without power
- **Dual Channel**: Two independent potentiometers
- **Microcontroller Friendly**: Simple serial interface
- **No Mechanical Wear**: Solid-state operation
- **Remote Control**: Can be located away from control circuit

## Programming Notes

- **Wiper Position**: 0 = minimum resistance, 255 = maximum resistance
- **Power-On State**: Wiper positions restored from EEPROM
- **Write Cycles**: EEPROM rated for 50,000 write cycles
- **Interface Timing**: Observe setup and hold times for reliable operation

## Tags

digital-potentiometer, dual-channel, 100k-ohm, serial-interface, dallas, dip-14, vintage #cabinet-3 #bin-33 #section-d #status-available

## Notes

This is a vintage digital potentiometer from Dallas Semiconductor (now part of Maxim Integrated/Analog Devices). While discontinued, it remains useful for:

- Vintage audio equipment restoration
- Educational projects demonstrating digital potentiometer concepts
- Legacy system maintenance
- Hobbyist projects requiring dual-channel resistance control

Modern equivalents include:

- **MCP4131/4132**: Microchip 7/8-bit digital potentiometers
- **AD5204**: Analog Devices quad digital potentiometer
- **MAX5160**: Maxim 256-tap digital potentiometer
- **DS1803**: Dallas/Maxim dual digital potentiometer (newer)

The DS1267-100 is particularly valued for its non-volatile memory feature, which maintains wiper positions through power cycles. This makes it ideal for applications where settings need to be preserved.
