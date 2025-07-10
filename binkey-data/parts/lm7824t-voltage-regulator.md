---
title: LM7824T +24V Voltage Regulator
description: Taejin LM7824T positive 24V linear voltage regulator in TO-220 package
manufacturer: Taejin
part_number: LM7824T
datasheet_url: https://www.taejin.co.kr/en/product/product_view.php?idx=47
supplier: Digikey
supplier_part_number: LM7824T-ND
supplier_url: https://www.digikey.com/en/products/detail/taejin/LM7824T/22237262
quantity: 2
location: 
  - cabinet: 3
  - bin: 23
package: TO-220
voltage_output: +24V
voltage_input_min: 26.5V
voltage_input_max: 35V
current_output_max: 1A
tolerance: ±4%
dropout_voltage: 2.5V
operating_temp_min: 0°C
operating_temp_max: 125°C
tags: [voltage-regulator, linear-regulator, positive-voltage, to-220, taejin, 24v]
categories: [power-management, voltage-regulators]
---

# LM7824T +24V Voltage Regulator

## Overview

The LM7824T is a positive voltage regulator from Taejin that provides a fixed +24V output from a positive input voltage. Compatible with the LM78xx series of positive linear voltage regulators.

## Key Specifications

- **Output Voltage**: +24V ±4%
- **Input Voltage Range**: 26.5V to 35V
- **Maximum Output Current**: 1A
- **Package**: TO-220 (3-pin)
- **Dropout Voltage**: 2.5V typical
- **Operating Temperature**: 0°C to 125°C

## Pinout (TO-220)

```
   ┌─────┐
   │  1  │ Input (+Vin)
   │  2  │ Ground (Common)
   │  3  │ Output (+24V)
   └─────┘
```

## Applications

- 24V motor driver power supplies
- Industrial control systems
- High-voltage LED drivers
- Stepper motor controllers
- 24V sensor power supplies

## Features

- Fixed +24V output
- Internal thermal overload protection
- Internal short circuit current limiting
- Output transistor safe area protection
- No external components required
- Standard LM78xx pinout

## Usage Notes

- Requires adequate heat sinking for all current levels due to high voltage drop
- Input capacitor (0.33µF) recommended if regulator is far from filter capacitor
- Output capacitor (0.1µF) improves transient response
- Minimum load current: 5mA for proper regulation
- High power dissipation - calculate heat sink requirements carefully

## Power Dissipation

With 30V input and 1A output:
- Power dissipated = (30V - 24V) × 1A = 6W
- Requires substantial heat sinking

## Inventory

- **Quantity**: 2 units
- **Location**: Cabinet 3, Bin 23
- **Condition**: New
- **Source**: Digikey

## Related Parts

- [[lm7805ct-voltage-regulator]] - +5V positive regulator
- [[lm7812ct-voltage-regulator]] - +12V positive regulator
- [[lm7912ct-voltage-regulator]] - -12V negative regulator
- [[ld1117av18-voltage-regulator]] - 1.8V low-dropout regulator
