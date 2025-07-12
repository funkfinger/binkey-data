---
type: electronic-component
category: Logic Gates
subcategory: Schmitt Trigger Inverter
brand: Motorola
part_number: MC14584B
size: DIP-14
color: Black
location: [Cabinet-3/Bin-33/Section-B]
quantity: 1
status: available
price_range: $2-8
tags: [logic-gate, schmitt-trigger, inverter, hex, cmos, motorola, dip-14, vintage, cabinet-3, bin-33, section-b, status-available]
---

# Motorola MC14584B Hex Schmitt Trigger Inverter

## Details

- **Location**: Cabinet-3, Bin 33, Section B
- **Category**: Logic Gates
- **Quantity**: 1
- **Status**: Available
- **Package**: 14-pin DIP (Dual In-line Package)
- **Datasheet**: [MC14584B Datasheet](https://www.electronicoscaldas.com/datasheet/MC14584B_Motorola.pdf)

## Description

The MC14584B is a CMOS Hex Schmitt Trigger Inverter constructed with MOS P-channel and N-channel enhancement mode devices in a single monolithic structure. This device provides six independent Schmitt trigger inverters with hysteresis for improved noise immunity and signal conditioning.

### Key Features

- **Six Independent Inverters**: Each with Schmitt trigger input characteristics
- **Hysteresis**: Provides noise immunity and clean switching
- **CMOS Technology**: Low power consumption and high noise immunity
- **Wide Supply Range**: Typically 3V to 18V operation
- **High Input Impedance**: Typical CMOS characteristics
- **Symmetrical Output**: Equal source and sink current capabilities
- **Temperature Stable**: Reliable operation across temperature range

### Technical Specifications

- **Package**: 14-pin DIP (0.3" width)
- **Technology**: CMOS (Complementary Metal-Oxide-Semiconductor)
- **Supply Voltage**: 3V - 18V (typical 5V operation)
- **Input Hysteresis**: Provides noise immunity
- **Propagation Delay**: Typically 90ns at 5V, 50pF load
- **Power Dissipation**: Very low static power consumption
- **Operating Temperature**: -55°C to +125°C
- **Logic Family**: 4000 Series CMOS

## Typical Pinout (DIP-14)

```
    MC14584B
    ┌─────────────┐
1A  │1          14│ VDD
1Y  │2          13│ 6A
2A  │3          12│ 6Y
2Y  │4          11│ 5A
3A  │5          10│ 5Y
3Y  │6           9│ 4A
VSS │7           8│ 4Y
    └─────────────┘
```

### Pin Descriptions

- **VDD (Pin 14)**: Positive supply voltage (+3V to +18V)
- **VSS (Pin 7)**: Ground (0V)
- **1A-6A (Pins 1,3,5,9,11,13)**: Schmitt trigger inputs
- **1Y-6Y (Pins 2,4,6,8,10,12)**: Inverted outputs

## Schmitt Trigger Characteristics

- **Positive-Going Threshold (VT+)**: Typically 2/3 VDD
- **Negative-Going Threshold (VT-)**: Typically 1/3 VDD
- **Hysteresis**: VT+ - VT- provides noise immunity
- **Clean Switching**: Eliminates oscillation on slowly changing inputs

## Applications

- **Signal Conditioning**: Converting analog signals to clean digital levels
- **Noise Filtering**: Eliminating noise on digital signal lines
- **Oscillator Circuits**: RC oscillators and timing circuits
- **Level Shifting**: Converting between different logic levels
- **Debouncing**: Switch and contact debouncing circuits
- **Waveform Shaping**: Converting sine waves to square waves
- **Interface Circuits**: Between different logic families

## Circuit Examples

### Basic Inverter
- Input signal → Schmitt trigger input → Clean inverted output
- Hysteresis prevents oscillation on noisy inputs

### RC Oscillator
- Connect output to input through RC network
- Frequency determined by RC time constant and supply voltage

## Advantages

- **Noise Immunity**: Hysteresis prevents false triggering
- **Low Power**: CMOS technology provides minimal static current
- **Wide Supply Range**: Flexible power supply requirements
- **High Fan-out**: Can drive multiple CMOS inputs
- **Temperature Stable**: Consistent performance across temperature

## Tags

logic-gate, schmitt-trigger, inverter, hex, cmos, motorola, dip-14, vintage #cabinet-3 #bin-33 #section-b #status-available

## Notes

This is a vintage CMOS logic device from Motorola's 14000 series. While discontinued, it remains useful for:
- Educational projects demonstrating Schmitt trigger concepts
- Vintage computer and electronics restoration
- Signal conditioning in hobby projects
- Noise filtering applications

Modern equivalents include:
- **74HC14**: High-speed CMOS hex Schmitt trigger inverter
- **CD40106**: Pin-compatible CMOS alternative
- **SN74LVC1G14**: Single-gate modern alternative

The MC14584B is part of the 4000 series CMOS family and is compatible with other devices in this series. It provides excellent noise immunity due to its Schmitt trigger inputs, making it ideal for applications where signal integrity is important.
