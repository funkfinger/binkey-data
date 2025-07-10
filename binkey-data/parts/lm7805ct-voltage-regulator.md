---
title: LM7805CT +5V Voltage Regulator
description: Texas Instruments LM7805CT positive 5V linear voltage regulator in TO-220 package
manufacturer: Texas Instruments
part_number: LM7805CT-NOPB
datasheet_url: https://www.ti.com/lit/ds/symlink/lm78.pdf
supplier: Digikey
supplier_part_number: LM7805CT/NOPB-ND
supplier_url: https://www.digikey.com/en/products/detail/texas-instruments/LM7805CT-NOPB/3901929
quantity: 10+
location: 
  - cabinet: 3
  - bin: 23
package: TO-220
voltage_output: +5V
voltage_input_min: 7V
voltage_input_max: 35V
current_output_max: 1A
tolerance: ±4%
dropout_voltage: 2V
operating_temp_min: 0°C
operating_temp_max: 125°C
tags: [voltage-regulator, linear-regulator, positive-voltage, to-220, texas-instruments, 5v]
categories: [power-management, voltage-regulators]
---

# LM7805CT +5V Voltage Regulator

## Overview

The LM7805CT is a positive voltage regulator from Texas Instruments that provides a fixed +5V output from a positive input voltage. Part of the LM78xx series of positive linear voltage regulators and one of the most commonly used voltage regulators.

## Key Specifications

- **Output Voltage**: +5V ±4%
- **Input Voltage Range**: 7V to 35V
- **Maximum Output Current**: 1A
- **Package**: TO-220 (3-pin)
- **Dropout Voltage**: 2V typical
- **Operating Temperature**: 0°C to 125°C

## Pinout (TO-220)

```
   ┌─────┐
   │  1  │ Input (+Vin)
   │  2  │ Ground (Common)
   │  3  │ Output (+5V)
   └─────┘
```

## Applications

- 5V supply for microcontrollers (Arduino, etc.)
- Digital logic circuits (TTL, CMOS)
- Sensor power supplies
- LED driver circuits
- General purpose 5V power supply

## Features

- Fixed +5V output
- Internal thermal overload protection
- Internal short circuit current limiting
- Output transistor safe area protection
- No external components required
- Industry standard pinout

## Usage Notes

- Requires adequate heat sinking for currents above 500mA
- Input capacitor (0.33µF) recommended if regulator is far from filter capacitor
- Output capacitor (0.1µF) improves transient response
- Minimum load current: 5mA for proper regulation
- Very common in Arduino and microcontroller projects

## Inventory

- **Quantity**: 10+ units
- **Location**: Cabinet 3, Bin 23
- **Condition**: New
- **Source**: Digikey

## Related Parts

- [[lm7812ct-voltage-regulator]] - +12V positive regulator
- [[lm7912ct-voltage-regulator]] - -12V negative regulator
- [[lm7824t-voltage-regulator]] - +24V positive regulator
- [[ld1117av18-voltage-regulator]] - 1.8V low-dropout regulator
