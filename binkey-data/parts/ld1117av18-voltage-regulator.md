---
title: LD1117AV18 1.8V Low-Dropout Voltage Regulator
description: STMicroelectronics LD1117AV18 positive 1.8V low-dropout linear voltage regulator in TO-220 package
manufacturer: STMicroelectronics
part_number: LD1117AV18
datasheet_url: https://www.st.com/resource/en/datasheet/ld1117.pdf
supplier: Digikey
supplier_part_number: 497-1241-5-ND
supplier_url: https://www.digikey.com/en/products/detail/stmicroelectronics/LD1117AV18/586004
quantity: 12
location: 
  - cabinet: 3
  - bin: 23
package: TO-220
voltage_output: +1.8V
voltage_input_min: 2.5V
voltage_input_max: 15V
current_output_max: 800mA
tolerance: ±1%
dropout_voltage: 1.2V
operating_temp_min: 0°C
operating_temp_max: 125°C
tags: [voltage-regulator, ldo-regulator, low-dropout, positive-voltage, to-220, stmicroelectronics, 1.8v]
categories: [power-management, voltage-regulators, low-dropout-regulators]
---

# LD1117AV18 1.8V Low-Dropout Voltage Regulator

## Overview

The LD1117AV18 is a low-dropout (LDO) positive voltage regulator from STMicroelectronics that provides a fixed +1.8V output. It features very low dropout voltage and is ideal for battery-powered applications and modern digital circuits requiring 1.8V supplies.

## Key Specifications

- **Output Voltage**: +1.8V ±1%
- **Input Voltage Range**: 2.5V to 15V
- **Maximum Output Current**: 800mA
- **Package**: TO-220 (3-pin)
- **Dropout Voltage**: 1.2V @ 800mA
- **Operating Temperature**: 0°C to 125°C
- **Line Regulation**: 0.2% typical
- **Load Regulation**: 0.4% typical

## Pinout (TO-220)

```
   ┌─────┐
   │  1  │ Ground (Common)
   │  2  │ Output (+1.8V)
   │  3  │ Input (+Vin)
   └─────┘
```

**Note**: Pinout differs from LM78xx series - Ground and Output are swapped!

## Applications

- 1.8V core voltage for microprocessors
- FPGA and DSP core power supplies
- Modern microcontroller I/O voltage
- Battery-powered devices
- Low-voltage digital circuits
- DDR memory voltage rails

## Features

- Very low dropout voltage (1.2V max)
- High accuracy output (±1%)
- Internal current limiting
- Thermal overload protection
- Fast transient response
- Low quiescent current

## Usage Notes

- **Critical**: Pinout is different from LM78xx regulators!
- Requires 10µF tantalum capacitor on output for stability
- Input capacitor (0.33µF) recommended
- Excellent for 3.3V to 1.8V conversion
- Can be powered from 3V battery with good regulation

## Typical Application Circuit

```
Vin ──┤0.33µF├── Pin 3 (Input)
                    │
                Pin 1 (Ground) ── GND
                    │
                Pin 2 (Output) ──┤10µF├── 1.8V Out
                                    │
                                   GND
```

## Inventory

- **Quantity**: 12 units
- **Location**: Cabinet 3, Bin 23
- **Condition**: New
- **Source**: Digikey

## Related Parts

- [[lm7805ct-voltage-regulator]] - +5V standard regulator
- [[lm7812ct-voltage-regulator]] - +12V standard regulator
- [[lm7912ct-voltage-regulator]] - -12V negative regulator
- [[lm7824t-voltage-regulator]] - +24V standard regulator
