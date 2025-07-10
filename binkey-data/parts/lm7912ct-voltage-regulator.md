---
title: LM7912CT -12V Voltage Regulator
description: Texas Instruments LM7912CT negative 12V linear voltage regulator in TO-220 package
manufacturer: Texas Instruments
part_number: LM7912CT
datasheet_url: https://www.ti.com/lit/ds/symlink/lm79.pdf
supplier: Digikey
supplier_part_number: LM7912CT/NOPB-ND
supplier_url: https://www.digikey.com/en/products/detail/texas-instruments/LM7912CT/3695321
quantity: 3
location: 
  - cabinet: 3
  - bin: 23
package: TO-220
voltage_output: -12V
voltage_input_min: -14.5V
voltage_input_max: -35V
current_output_max: 1A
tolerance: ±4%
dropout_voltage: 2V
operating_temp_min: 0°C
operating_temp_max: 125°C
tags: [voltage-regulator, linear-regulator, negative-voltage, to-220, texas-instruments]
categories: [power-management, voltage-regulators]
---

# LM7912CT -12V Voltage Regulator

## Overview

The LM7912CT is a negative voltage regulator from Texas Instruments that provides a fixed -12V output from a negative input voltage. Part of the LM79xx series of negative linear voltage regulators.

## Key Specifications

- **Output Voltage**: -12V ±4%
- **Input Voltage Range**: -14.5V to -35V
- **Maximum Output Current**: 1A
- **Package**: TO-220 (3-pin)
- **Dropout Voltage**: 2V typical
- **Operating Temperature**: 0°C to 125°C

## Pinout (TO-220)

```
   ┌─────┐
   │  1  │ Input (-Vin)
   │  2  │ Ground (Common)
   │  3  │ Output (-12V)
   └─────┘
```

## Applications

- Negative supply rails for op-amps
- Dual supply circuits
- Audio amplifier power supplies
- Analog circuit biasing
- Split-rail power supplies

## Features

- Fixed -12V output
- Internal thermal overload protection
- Internal short circuit current limiting
- Output transistor safe area protection
- No external components required

## Usage Notes

- Requires adequate heat sinking for currents above 500mA
- Input capacitor (0.33µF) recommended if regulator is far from filter capacitor
- Output capacitor (0.1µF) improves transient response
- Ground pin must be connected to circuit common

## Inventory

- **Quantity**: 3 units
- **Location**: Cabinet 3, Bin 23
- **Condition**: New
- **Source**: Digikey

## Related Parts

- [[lm7805ct-voltage-regulator]] - +5V positive regulator
- [[lm7812ct-voltage-regulator]] - +12V positive regulator
- [[lm7824t-voltage-regulator]] - +24V positive regulator
- [[ld1117av18-voltage-regulator]] - 1.8V low-dropout regulator
