---
type: electronic-component
category: Integrated Circuits
subcategory: Voltage Reference ICs
brand: Texas Instruments
part_number: REF3040AIDBZR
model: REF3040AIDBZR
description: 4.096V ±0.2% precision series voltage reference, 25mA, SOT-23-3
manufacturer: Texas Instruments
package: SOT-23-3 (DBZ)
size: 2.92mm x 2.37mm
voltage: 4.146V ~ 5.5V input, 4.096V output
current: 42µA quiescent (typical), 25mA load (max)
power: Low power
interface: [Analog]
connectivity: [Surface-mount pins]
compatibility: [Microcontrollers, ADCs, DACs, Precision analog circuits]
location: [Cabinet-3/Bin-50]
quantity: 10
status: available
price_range: $0.35-0.40
datasheet: https://www.ti.com/lit/gpn/ref30
product_url: https://www.lcsc.com/product-detail/Voltage-References_TI_REF3040AIDBZR_REF3040AIDBZR_C19415.html
tags: [voltage-reference, vref, precision, 4.096V, sot23, ti, texas-instruments, cabinet-3, bin-50, status-available]
date_added: 2026-05-04
added_date: 2026-05-04
---

# REF3040AIDBZR - 4.096V Precision Voltage Reference

## Details

- **Location**: Cabinet-3, Bin 50
- **Category**: Integrated Circuits — Voltage Reference ICs
- **Brand**: Texas Instruments
- **Part Number**: REF3040AIDBZR
- **Package**: SOT-23-3 (DBZ)
- **Quantity**: 10
- **Status**: Available
- **Price Range**: $0.35–0.40
- **Datasheet**: [REF30 Datasheet](https://www.ti.com/lit/gpn/ref30)
- **Product URL**: [LCSC C19415](https://www.lcsc.com/product-detail/Voltage-References_TI_REF3040AIDBZR_REF3040AIDBZR_C19415.html)

## Description

The REF3040AIDBZR is a precision 4.096V series voltage reference from Texas Instruments' REF30 family. It delivers a stable 4.096V output (±0.2% initial accuracy) from a tiny SOT-23-3 package with only 42µA quiescent current — making it ideal for battery-powered precision analog designs.

The 4.096V output is especially convenient for 12-bit ADC systems: with a 4.096V reference, each LSB equals exactly 1mV, simplifying code-to-voltage conversion. The REF30 family is notable for not requiring an output load capacitor for stability, though a small bypass cap is still recommended for noise reduction.

## Specifications

### Electrical Characteristics

- **Output Voltage**: 4.096V ±0.2% (±8.2mV max)
- **Input Voltage Range**: 4.146V ~ 5.5V
- **Quiescent Current**: 42µA typical, 50µA max
- **Load Current**: 25mA maximum
- **Temperature Coefficient**: 75 ppm/°C maximum
- **Line Regulation**: 125µV/V typical
- **Load Regulation**: 175µV/mA typical

### Physical Characteristics

- **Package**: SOT-23-3 (DBZ)
- **Dimensions**: 2.92mm x 2.37mm
- **Operating Temperature**: –40°C to +125°C (A-grade)
- **Mounting Type**: Surface Mount

### Key Features

- ±0.2% initial accuracy (A-grade)
- No output capacitor required for stability
- Ultra-low 42µA quiescent current
- 25mA output current capability
- Industrial temperature range (–40°C to +125°C)
- 4.096V output = 1mV/LSB for 12-bit ADCs at full scale

## Image

*No photo yet — please take a photo of the actual component and add it to `binkey-data/attachments/` as `ref3040aidbzr-vref.jpg`, then replace this line with `![REF3040AIDBZR](../attachments/ref3040aidbzr-vref.jpg)`*

## Pinout Diagram

### Pin Descriptions (SOT-23-3 / DBZ Package)

| Pin | Name | Function                        |
|-----|------|---------------------------------|
| 1   | OUT  | Reference voltage output (4.096V) |
| 2   | GND  | Ground                          |
| 3   | IN   | Supply voltage input (4.146V–5.5V) |

## Applications

- Precision ADC/DAC voltage reference (especially 12-bit systems where 4.096V = 1mV/LSB)
- Data acquisition systems
- Battery-powered instrumentation
- Sensor signal conditioning
- Calibration references
- Industrial measurement equipment
- Portable precision analog circuits

## Circuit Examples

### Basic Connection (with decoupling)

```
        100nF
VCC ----+----[IN (Pin 3)]
        |         REF3040AIDBZR
       GND    [OUT (Pin 1)]---- VREF (4.096V)
              [GND (Pin 2)]---- GND

Optional: 100nF cap from OUT to GND to reduce noise
```

### 12-bit ADC Reference

```
VCC (5V) --> REF3040AIDBZR --> 4.096V VREF --> ADC VREF pin
                                               (1 LSB = 1mV for 12-bit ADC)
```

## Technical Notes

- Place a 100nF ceramic decoupling cap close to the IN pin; add another 100nF at OUT for noise filtering
- Input must stay ≥50mV above the 4.096V output — 5V supply works; 3.3V does NOT (output > supply)
- Output is stable without a load cap, but a 100nF–1µF cap improves transient response
- A-grade suffix guarantees ±0.2% accuracy; standard (no A) is ±0.5%
- The "R" suffix in AIDBZR = tape-and-reel packaging

## Tags

#voltage-reference #vref #precision #4.096V #sot23 #ti #texas-instruments #cabinet-3 #bin-50 #status-available

## Notes

The REF3040 output of 4.096V pairs perfectly with 12-bit ADCs — no scaling math needed. Closely related parts: REF3025 (2.5V), REF3030 (3.0V), REF3033 (3.3V). All share the same SOT-23-3 footprint and pinout, so the footprint is reusable across the family. LCSC part number C19415.
