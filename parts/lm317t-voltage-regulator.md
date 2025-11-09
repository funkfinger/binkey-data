---
title: LM317T Adjustable Positive Linear Voltage Regulator
description: Texas Instruments LM317T adjustable positive linear voltage regulator in TO-220 package
manufacturer: Texas Instruments
part_number: LM317T
datasheet_url: https://www.ti.com/lit/ds/symlink/lm317.pdf
supplier: Digikey
supplier_part_number: LM317T/NOPB-ND
supplier_url: https://www.digikey.com/en/products/detail/texas-instruments/LM317T-NOPB/363396
quantity: 5
location: 
  - cabinet: 3
  - bin: 24
  - section: D
package: TO-220
voltage_output_min: 1.25V
voltage_output_max: 37V
voltage_input_min: 3V
voltage_input_max: 40V
current_output_max: 1.5A
tolerance: ±4%
dropout_voltage: 2.5V
operating_temp_min: 0°C
operating_temp_max: 125°C
tags: [voltage-regulator, adjustable-regulator, linear-regulator, positive-voltage, to-220, texas-instruments, lm317]
categories: [power-management, voltage-regulators, adjustable-regulators]
date_added: 2025-11-03
---

# LM317T Adjustable Positive Linear Voltage Regulator

## Overview

The LM317T is an adjustable positive voltage regulator from Texas Instruments that provides a variable output voltage from 1.25V to 37V. It's one of the most popular and versatile voltage regulators, widely used in power supply design, battery chargers, and precision reference circuits.

## Key Specifications

- **Output Voltage Range**: 1.25V to 37V (adjustable)
- **Input Voltage Range**: 3V to 40V
- **Maximum Output Current**: 1.5A
- **Package**: TO-220 (3-pin)
- **Dropout Voltage**: 2.5V typical
- **Operating Temperature**: 0°C to 125°C
- **Line Regulation**: 0.01% typical
- **Load Regulation**: 0.1% typical

## Pinout (TO-220)

```
   ┌─────┐
   │  1  │ Adjust (ADJ)
   │  2  │ Output (OUT)
   │  3  │ Input (IN)
   └─────┘
```

## Applications

- Variable power supplies
- Battery chargers
- Precision voltage references
- Audio circuit power supplies
- Adjustable current sources
- Precision reference voltages for audio circuits

## Features

- Excellent line and load regulation
- Internal thermal overload protection
- Internal short circuit current limiting
- Output transistor safe area protection
- Adjustable output voltage with simple resistor network
- Low output noise (ideal for audio applications)

## Output Voltage Calculation

The output voltage is set using two resistors (R1 and R2):

```
Vout = 1.25V × (1 + R2/R1)
```

Where:
- R1 is typically 240Ω to 1kΩ (fixed resistor)
- R2 is the adjustment resistor

### Example Calculations

For common output voltages:
- **5V**: R1 = 240Ω, R2 = 730Ω
- **10V**: R1 = 240Ω, R2 = 1.8kΩ
- **12V**: R1 = 240Ω, R2 = 2.2kΩ
- **15V**: R1 = 240Ω, R2 = 2.7kΩ

## Typical Application Circuit

```
Vin ──[C_in]── Pin 3 (Input)
                    │
                   LM317
                    │
              Pin 2 (Output) ──[C_out]── Vout
                    │
              Pin 1 (Adjust)
                    │
                   R1
                    │
                   GND
                    │
                   R2
                    │
                  Vout
```

## Usage Notes

- Requires adequate heat sinking for currents above 500mA
- Input capacitor (0.33µF) recommended if regulator is far from filter capacitor
- Output capacitor (10µF) improves transient response and stability
- Adjustment pin capacitor (0.1µF) recommended for noise reduction
- Minimum load current: 5mA for proper regulation
- Excellent for audio circuits due to low noise characteristics

## Inventory

- **Quantity**: 5 units
- **Location**: Cabinet 3, Bin 24, Section D
- **Condition**: New
- **Source**: Digikey

## Related Parts

- [[lm7805ct-voltage-regulator]] - +5V fixed regulator
- [[lm7812ct-voltage-regulator]] - +12V fixed regulator
- [[lm7912ct-voltage-regulator]] - -12V negative regulator
- [[ld1117av18-voltage-regulator]] - 1.8V low-dropout regulator
- [[lm2596-switching-regulator]] - Switching step-down regulator

## Notes

The LM317T is ideal for creating custom voltage references and adjustable power supplies. For audio applications requiring a 10V reference, this regulator provides excellent performance with low noise output. The simple resistor divider network makes it easy to set any voltage between 1.25V and 37V.

