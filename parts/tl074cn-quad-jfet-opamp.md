---
type: electronic-component
category: Analog ICs
subcategory: Op-Amps
brand: STMicroelectronics
part_number: TL074CN
model: TL074CN
description: Quad JFET-input operational amplifier IC
manufacturer: STMicroelectronics
package: 14-DIP
size: 0.300" (7.62mm) width
voltage: 6V ~ 36V (±3V ~ ±18V)
current: 1.4mA (x4 channels)
power: Low power consumption
interface: [Analog]
connectivity: [Through-hole pins]
compatibility: [Analog circuits, Audio applications]
location: [Cabinet-3/Bin-37/Section-C]
quantity: 16
status: available
price_range: $1.00-2.00
datasheet: https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/734/TL074_A_B.pdf
product_url: https://www.digikey.com/en/products/detail/stmicroelectronics/TL074CN/599651
tags: [op-amp, analog-ic, quad-opamp, jfet-input, audio, precision, stmicroelectronics, cabinet-3, bin-37, status-available]
date_added: 2025-01-12
---

# TL074CN - Quad JFET-Input Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 37, Section C
- **Category**: Analog ICs
- **Brand**: STMicroelectronics
- **Part Number**: TL074CN
- **Package**: 14-DIP
- **Quantity**: 16
- **Status**: Available (Note: Part is obsolete)
- **Price Range**: $1.00-2.00
- **Datasheet**: [TL074CN Datasheet](https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/734/TL074_A_B.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/stmicroelectronics/TL074CN/599651

## Description

The TL074CN is a quad operational amplifier featuring JFET inputs, providing low noise and high-speed performance. It contains four independent op-amps in a single 14-pin package, each with JFET input transistors that deliver high input impedance and extremely low input bias currents. This makes it ideal for precision analog applications, audio circuits, and instrumentation.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 6V ~ 36V (±3V ~ ±18V)
- **Supply Current**: 1.4mA per channel (5.6mA total)
- **Slew Rate**: 13V/µs
- **Gain Bandwidth Product**: 3 MHz
- **Input Bias Current**: 30 pA (extremely low due to JFET inputs)
- **Input Offset Voltage**: 3 mV
- **Output Current**: 40 mA per channel

### Physical Characteristics  
- **Package**: 14-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 14-pin DIP package
- **Operating Temperature**: 0°C ~ 70°C
- **Mounting Type**: Through Hole

### Key Features
- Four independent operational amplifiers
- JFET input stage for ultra-low bias current
- High input impedance
- Low noise performance
- Wide supply voltage range
- Short-circuit protection on outputs
- Low total harmonic distortion (~0.003%)
- High slew rate for fast signal processing

## Image

*Image needed - Standard 14-pin DIP package IC with TL074CN markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (14-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | OUT A | Op-amp A output |
| 2 | IN A- | Op-amp A inverting input |
| 3 | IN A+ | Op-amp A non-inverting input |
| 4 | VCC- | Negative power supply |
| 5 | IN B+ | Op-amp B non-inverting input |
| 6 | IN B- | Op-amp B inverting input |
| 7 | OUT B | Op-amp B output |
| 8 | OUT C | Op-amp C output |
| 9 | IN C- | Op-amp C inverting input |
| 10 | IN C+ | Op-amp C non-inverting input |
| 11 | VCC+ | Positive power supply |
| 12 | IN D+ | Op-amp D non-inverting input |
| 13 | IN D- | Op-amp D inverting input |
| 14 | OUT D | Op-amp D output |

## Applications

Common use cases and applications for this component:
- Audio mixers and preamplifiers
- Active filters and equalizers
- Instrumentation amplifiers
- Signal conditioning circuits
- Voltage followers and buffers
- Precision analog circuits
- Audio effects processors
- Motor drive circuits
- Solar energy inverters
- UPS (Uninterruptible Power Supply) systems

## Circuit Examples

### Basic Non-Inverting Amplifier
```
VCC+ (Pin 11) ---- +15V
VCC- (Pin 4)  ---- -15V
IN A+ (Pin 3) ---- Input signal
IN A- (Pin 2) ---- Feedback from output through voltage divider
OUT A (Pin 1) ---- Amplified output

Gain = 1 + (R2/R1) where R2 is feedback resistor, R1 is ground resistor
```

### Active Low-Pass Filter
```
Input signal -> R1 -> IN A+ (Pin 3)
IN A- (Pin 2) connected to output through feedback network
C1 from IN A+ to ground for frequency response
OUT A (Pin 1) -> Filtered output
```

### Quad Channel Audio Mixer
```
Four independent input channels, each using one op-amp
Mix outputs through summing resistors
Final stage amplification using external op-amp
Ideal for audio mixing applications
```

## Technical Notes

Important technical considerations and features:
- JFET inputs provide extremely high input impedance (>10^12 Ω)
- Very low input bias current makes it suitable for high-impedance sources
- Each op-amp is independent and can be used separately
- Requires dual supply for best performance (±3V to ±18V)
- Can operate on single supply with proper biasing
- Output short-circuit protection prevents damage
- Use proper power supply decoupling (0.1µF ceramic capacitors)
- Avoid input voltages exceeding supply rails
- Excellent for audio applications due to low noise and distortion

## Status Note

**Important**: The TL074CN is marked as obsolete by the manufacturer. Direct substitutes include:
- **TL074IN** (Texas Instruments) - Direct replacement
- **LF347N** (Texas Instruments) - Similar JFET quad op-amp
- **AD704JNZ** (Analog Devices) - Higher performance alternative

## Tags

op-amp, analog-ic, quad-opamp, jfet-input, audio, precision, stmicroelectronics #cabinet-3 #bin-37 #status-available

## Notes

The TL074CN is a classic and widely-used quad op-amp that has been a staple in analog circuit design for decades. Its JFET input stage makes it particularly valuable for high-impedance applications and audio circuits where low noise is critical. While the part is now obsolete, existing stock remains useful for repairs, prototyping, and educational purposes. The four independent op-amps in a single package make it very cost-effective for multi-channel applications.
