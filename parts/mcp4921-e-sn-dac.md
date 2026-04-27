---
type: electronic-component
category: Integrated Circuits
subcategory: DAC ICs
brand: Microchip Technology
part_number: MCP4921-E/SN
model: MCP4921-E/SN
description: 12-bit single-channel SPI DAC with rail-to-rail output, 8-SOIC package
manufacturer: Microchip Technology
package: 8-SOIC
size: 4.9mm x 3.9mm (SOIC-8)
voltage: 2.7V - 5.5V
current: ~175µA typical active
power: Low power with shutdown mode (~150nA shutdown current)
interface: [SPI]
connectivity: [Surface-mount pins]
compatibility: [Arduino, Raspberry Pi, Microcontrollers]
location: [Cabinet-3/Bin-37/Section-G]
quantity: 15
status: available
price_range: $1.50-$2.50
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/21897B.pdf
product_url: https://www.microchip.com/en-us/product/mcp4921
tags: [dac, spi, 12-bit, single-channel, soic-8, microchip, rail-to-rail, cabinet-3, bin-37, status-available]
date_added: 2026-04-27
added_date: 2026-04-27
---

# MCP4921-E/SN - 12-Bit Single-Channel SPI DAC

## Details

- **Location**: Cabinet-3, Bin 37, Section G
- **Category**: Integrated Circuits > DAC ICs
- **Brand**: Microchip Technology
- **Part Number**: MCP4921-E/SN
- **Package**: 8-SOIC
- **Quantity**: 15
- **Status**: Available
- **Price Range**: $1.50-$2.50
- **Datasheet**: [MCP4921 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/21897B.pdf)
- **Product URL**: https://www.microchip.com/en-us/product/mcp4921

## Description

The MCP4921 is a 12-bit, single-channel digital-to-analog converter (DAC) from Microchip's MCP492X family. It communicates over SPI and operates from 2.7V to 5.5V, making it compatible with both 3.3V and 5V microcontroller systems without level-shifting concerns on the power rail. The rail-to-rail output amplifier allows the output to swing very close to both GND and VDD, maximizing usable output range.

A key feature is the selectable gain: you can configure the full-scale output to equal VREF (gain = 1x) or 2×VREF (gain = 2x) via a control bit in the write command. The MCP4921 also supports double-buffered operation using the LDAC pin, which lets you preload a new value into the input register and then latch it to the DAC output simultaneously with other MCP492X devices — useful for multi-channel coordinated updates. A software-controlled shutdown mode reduces current to about 150nA when the DAC output isn't needed.

Compared to its sibling the MCP4922 (dual-channel), the MCP4921 is single-channel and comes in the smaller 8-SOIC footprint. If you need two channels independently controlled, look at the MCP4922 or use two MCP4921s with separate CS lines.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 2.7V to 5.5V
- **Supply Current**: ~175µA typical (active), ~150nA (shutdown)
- **Interface**: SPI (modes 0,0 and 1,1)
- **Resolution**: 12 bits (4096 steps)
- **Output Type**: Rail-to-rail voltage output
- **Settling Time**: 4.5µs typical
- **DNL**: ±0.5 LSB max
- **INL**: ±1 LSB max
- **Max SPI Clock**: 20MHz at 5V

### Physical Characteristics
- **Package**: 8-SOIC (SOIC-8)
- **Dimensions**: 4.9mm × 3.9mm body
- **Operating Temperature**: -40°C to +125°C (E suffix = extended)
- **Mounting Type**: Surface Mount

### Key Features
- 12-bit resolution (4096 output levels)
- Single-supply, 2.7V to 5.5V operation
- Rail-to-rail output amplifier
- Selectable gain: 1x or 2x (via write command bit)
- Double-buffered with LDAC pin for synchronous multi-DAC updates
- Software shutdown mode (~150nA)
- Fast SPI interface up to 20MHz
- -40°C to +125°C extended temperature range

## Image

*No photo yet — please take a photo of the actual component and add it to
`binkey-data/attachments/` as `mcp4921-e-sn-dac.jpg`, then replace this line with
`![MCP4921-E/SN DAC](../attachments/mcp4921-e-sn-dac.jpg)`*

## Pinout Diagram

### Pin Descriptions (8-SOIC Package)

| Pin | Name   | Function                                                    |
|-----|--------|-------------------------------------------------------------|
| 1   | VDD    | Supply voltage (2.7V – 5.5V)                               |
| 2   | CS     | Chip Select, active low — frame the 16-bit write command    |
| 3   | SCK    | SPI clock input                                             |
| 4   | SDI    | SPI data input (MOSI)                                       |
| 5   | LDAC   | Latch DAC — pull low to transfer input reg → DAC reg; tie low for immediate update |
| 6   | SHDN   | Shutdown — active low; tie to VDD for normal operation, pull low to shut down output |
| 7   | VSS    | Ground                                                      |
| 8   | VOUT   | Analog voltage output                                       |

The device has no VREF pin — it uses VDD as the reference. Full-scale output = VDD (gain=1x) or 2×VDD/2 = VDD (gain=2x, but VREF is VDD/2 internally derived).

## Applications

- Audio signal generation and waveform synthesis
- Setting bias voltages or threshold references in analog circuits
- Analog control signals for VCA, VCF in synthesizer/eurorack projects
- Calibration reference voltage generation
- Arbitrary waveform generation (with MCU timer + DMA)
- Driving analog panel meters from digital readings
- Closed-loop feedback control output (PID controllers)
- Test equipment — programmable voltage source

## Circuit Examples

### Basic Connection (Arduino / 5V SPI)

```
MCP4921      Arduino Uno
--------     -----------
VDD  (1) --- +5V
CS   (2) --- D10 (SS / any GPIO)
SCK  (3) --- D13 (SCK)
SDI  (4) --- D11 (MOSI)
LDAC (5) --- GND  (tie low = immediate latch on CS rising edge)
SHDN (6) --- +5V  (tie high = always enabled)
VSS  (7) --- GND
VOUT (8) --- [Analog output to load / next stage]

Optional: 100nF decoupling cap from VDD to GND, close to pin 1.
Optional: 10Ω series resistor on VOUT to prevent oscillation with capacitive loads.
```

### SPI Write Command Format (16 bits, MSB first)

```
Bit 15:   /A1 — DAC select (always 0 for MCP4921)
Bit 14:   BUF — 0=unbuffered VREF, 1=buffered VREF (VDD reference, BUF is don't-care)
Bit 13:   /GA  — Gain: 0 = 2x, 1 = 1x
Bit 12:   /SHDN — 0 = shutdown output, 1 = active
Bits 11-0: D11–D0 — 12-bit data value (MSB first)
```

## Technical Notes

- Add a 100nF ceramic decoupling capacitor from VDD (pin 1) to VSS (pin 7), placed as close to the chip as possible.
- If LDAC is tied permanently to GND, the DAC output updates immediately on the rising edge of CS — this is the simplest wiring for single-chip use.
- If driving capacitive loads (> a few nF), add a 10–100Ω resistor in series with VOUT to prevent oscillation; the output amp is not unconditionally stable into heavy capacitance.
- The `E` suffix in MCP4921**-E**/SN = extended temperature (-40°C to +125°C), suitable for non-climate-controlled enclosures.
- SHDN pin (active low) controls the output stage only — the SPI interface remains active in shutdown, so you can preload a value before enabling the output.
- SPI modes 0,0 (CPOL=0, CPHA=0) and 1,1 (CPOL=1, CPHA=1) are both supported.

## Tags

#dac #spi #12-bit #single-channel #soic-8 #microchip #rail-to-rail #cabinet-3 #bin-37 #status-available

## Notes

- Part of the MCP492X family: MCP4901 (8-bit), MCP4911 (10-bit), MCP4921 (12-bit), MCP4922 (dual 12-bit).
- The MCP4921 and MCP4922 share the same SPI command protocol — only the channel-select bit (bit 15) differs.
- For higher precision or external VREF support, consider the MCP4821 (12-bit, internal 2.048V reference) or DAC8552 (already in inventory at Cabinet 3, Bin 37E).
- LCSC part number: C43499 — good for bulk SMT orders.
