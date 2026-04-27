---
type: electronic-component
category: Integrated Circuits
subcategory: ADC ICs
brand: Microchip Technology
part_number: MCP3208-CI/SL
model: MCP3208-CI/SL
description: 8-channel 12-bit ADC with SPI interface
manufacturer: Microchip Technology
package: 16-SOIC
size: 9.90mm x 3.90mm (SOIC-16)
voltage: 2.7V ~ 5.5V
current: 500nA standby, 400µA active
power: Low power with shutdown mode
interface: [SPI]
connectivity: [Surface-mount pins]
compatibility: [Arduino, Raspberry Pi, Microcontrollers]
location: [Cabinet-3/Bin-47]
quantity: 10
status: available
price_range: $3.50-4.50
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/21298E.pdf
product_url: https://www.digikey.com/en/products/detail/microchip-technology/MCP3208-CI-SL/305929
tags: [adc, analog-to-digital, spi, 12-bit, 8-channel, microchip, mcp3208, soic, cabinet-3, bin-47, status-available]
date_added: 2026-04-27
added_date: 2026-04-27
---

# MCP3208-CI/SL - 8-Channel 12-Bit ADC with SPI Interface

## Details

- **Location**: Cabinet-3, Bin 47
- **Category**: Integrated Circuits
- **Brand**: Microchip Technology
- **Part Number**: MCP3208-CI/SL
- **Package**: 16-SOIC
- **Quantity**: 10
- **Status**: Available
- **Price Range**: $3.50-4.50
- **Datasheet**: [MCP3208 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/21298E.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/microchip-technology/MCP3208-CI-SL/305929

## Description

The MCP3208 is an 8-channel, 12-bit successive approximation ADC with an SPI-compatible serial interface. It supports both single-ended and pseudo-differential input modes, allowing flexible analog signal acquisition. Operating from 2.7V to 5.5V, it achieves up to 100 ksps at 5V, making it well-suited for data acquisition, sensor interfacing, and embedded control applications. The on-chip sample-and-hold circuit and low standby current (500 nA typical) make it ideal for battery-powered and mixed-signal designs.

## Specifications

### Electrical Characteristics

- **Operating Voltage**: 2.7V ~ 5.5V
- **Standby Current**: 500 nA typical
- **Active Current**: 400 µA typical at 5V
- **Interface**: SPI (modes 0,0 and 1,1)
- **Resolution**: 12-bit
- **Channels**: 8 single-ended or 4 pseudo-differential pairs

### Physical Characteristics

- **Package**: 16-SOIC
- **Dimensions**: 9.90mm x 3.90mm
- **Operating Temperature**: -40°C ~ 85°C (I-grade)
- **Mounting Type**: Surface Mount

### Key Features

- 12-bit resolution, 4096 count output
- 8 individually selectable input channels
- Single-ended or pseudo-differential input pairing
- SPI-compatible: modes 0,0 and 1,1
- 100 ksps max sample rate at VDD = 5V
- 50 ksps max sample rate at VDD = 2.7V
- On-chip sample-and-hold
- Shutdown mode via CS/SHDN pin

## Pinout Diagram

### Pin Descriptions (16-SOIC Package)

| Pin | Name     | Function                          |
|-----|----------|-----------------------------------|
| 1   | CH0      | Analog Input Channel 0            |
| 2   | CH1      | Analog Input Channel 1            |
| 3   | CH2      | Analog Input Channel 2            |
| 4   | CH3      | Analog Input Channel 3            |
| 5   | CH4      | Analog Input Channel 4            |
| 6   | CH5      | Analog Input Channel 5            |
| 7   | CH6      | Analog Input Channel 6            |
| 8   | CH7      | Analog Input Channel 7            |
| 9   | DGND     | Digital Ground                    |
| 10  | CS/SHDN  | Chip Select / Shutdown (active low)|
| 11  | DIN      | Serial Data In                    |
| 12  | DOUT     | Serial Data Out                   |
| 13  | CLK      | Serial Clock                      |
| 14  | AGND     | Analog Ground                     |
| 15  | VREF     | Reference Voltage Input           |
| 16  | VDD      | Power Supply (+2.7V to +5.5V)     |

## Applications

- Multi-channel analog sensor acquisition
- Temperature monitoring arrays
- Industrial process control
- Data logging systems
- Audio signal measurement
- Embedded system ADC expansion (Arduino, RP2040, etc.)
- Battery voltage monitoring

## Circuit Examples

### Basic SPI Connection (Arduino)

```
VDD (Pin 16) ---- +5V (or +3.3V)
AGND (Pin 14) --- GND
DGND (Pin 9) ---- GND
VREF (Pin 15) --- +5V (or external reference)
CLK (Pin 13) ---- Arduino pin 13 (SCK)
DOUT (Pin 12) --- Arduino pin 12 (MISO)
DIN (Pin 11) ---- Arduino pin 11 (MOSI)
CS/SHDN (Pin 10) Arduino pin 10 (CS)
CH0-CH7 (Pins 1-8) -> Analog signals (0V to VREF)
```

### Input Mode Selection (via DIN command byte)

```
Single-ended: SGL/DIFF bit = 1, select channel 0-7
Differential: SGL/DIFF bit = 0, select pairs (CH0+/CH1-, etc.)
```

## Technical Notes

- **VREF decoupling**: Place 0.1µF + 10µF caps on VREF to AGND
- **AGND/DGND**: Connect together at a single ground point; keep analog and digital grounds separate on PCB
- **CLK speed**: Max 2 MHz at 2.7V, max 2 MHz at 5V (check datasheet for full curve)
- **Shutdown**: Pull CS/SHDN high to enter low-power shutdown (500 nA); returns to active on next CS falling edge
- **SOIC footprint**: Standard 1.27mm pitch — use an SOIC-16 breakout board for breadboard prototyping

## Tags

adc, analog-to-digital, spi, 12-bit, 8-channel, microchip, mcp3208, soic #cabinet-3 #bin-47 #status-available

## Notes

10 units in stock. SOIC-16 surface-mount package — use a breakout adapter for through-hole breadboard use. The MCP3208 is a popular choice for adding 8 channels of 12-bit ADC to any SPI-capable microcontroller, comparable to the MCP3204 (4-channel) and MCP3201 (1-channel, 13-bit) from the same family.
