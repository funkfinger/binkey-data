---
type: electronic-component
category: Logic Gates
subcategory: Inverter/Schmitt Trigger
brand: Texas Instruments
part_number: CD40106BE
size: DIP-14
color: Black
location: [Cabinet-3/Bin-34/Section-A]
quantity: 9
status: available
price_range: $0.50-1.00
tags: [logic-gate, inverter, schmitt-trigger, hex-inverter, cmos, texas-instruments, dip-14, cabinet-3, bin-34, section-a, status-available]
---

# CD40106BE Hex Schmitt-Trigger Inverter

## Details

- **Location**: Cabinet-3, Bin 34, Section A
- **Category**: Logic Gates
- **Quantity**: 9
- **Status**: Available
- **Package**: 14-pin DIP (Dual In-line Package)
- **Datasheet**: [CD40106B Datasheet](https://www.ti.com/lit/gpn/cd40106b)
- **DigiKey**: [CD40106BE](https://www.digikey.com/en/products/detail/texas-instruments/CD40106BE/376602)

## Description

The CD40106BE is a CMOS Hex Schmitt-Trigger Inverter from Texas Instruments. This IC contains six independent inverter gates with Schmitt-trigger inputs, providing hysteresis for noise immunity and clean digital switching. Each gate inverts the input signal while providing stable switching thresholds that differ for rising and falling edges.

### Key Features

- **Six Independent Inverters**: Each with Schmitt-trigger input characteristics
- **Hysteresis**: Different switching thresholds for noise immunity
- **CMOS Technology**: Low power consumption and high noise immunity
- **Wide Supply Range**: 3V to 18V operation
- **High Input Impedance**: Minimal loading on driving circuits
- **Fast Switching**: Clean digital transitions from analog inputs
- **Temperature Stable**: Consistent operation across temperature range

### Technical Specifications

- **Package**: 14-pin DIP (0.3" width)
- **Technology**: CMOS (4000B Series)
- **Logic Type**: Hex Schmitt-Trigger Inverter
- **Supply Voltage**: 3V - 18V (typical 5V operation)
- **Quiescent Current**: 4 µA (max)
- **Output Current**: 3.4mA (high/low)
- **Propagation Delay**: 120ns @ 15V, 50pF load
- **Operating Temperature**: -55°C to +125°C
- **Input Logic Low**: 0.9V - 4V (depending on VDD)
- **Input Logic High**: 3.6V - 10.8V (depending on VDD)

## Pinout (DIP-14)

```
    CD40106BE
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
- **1A-6A (Pins 1,3,5,9,11,13)**: Inverter inputs (Schmitt-trigger)
- **1Y-6Y (Pins 2,4,6,8,10,12)**: Inverter outputs (inverted inputs)

## Schmitt-Trigger Operation

### Hysteresis Characteristics
The Schmitt-trigger inputs provide different switching thresholds:
- **Positive-going threshold (VT+)**: Higher voltage needed to switch output LOW
- **Negative-going threshold (VT-)**: Lower voltage needed to switch output HIGH
- **Hysteresis voltage (VH)**: VT+ - VT- provides noise immunity

### Truth Table (per gate)
| Input (A) | Output (Y) |
|-----------|------------|
| LOW       | HIGH       |
| HIGH      | LOW        |

## Applications

- **Signal Conditioning**: Converting noisy analog signals to clean digital
- **Oscillator Circuits**: RC oscillators and square wave generators
- **Wave Shaping**: Converting sine waves to square waves
- **Switch Debouncing**: Eliminating mechanical switch bounce
- **Level Shifting**: Converting between different logic levels
- **Relay Drivers**: Clean switching for relay control circuits
- **Clock Signal Cleanup**: Removing noise from clock signals
- **Threshold Detection**: Comparing analog signals to reference levels

## Circuit Examples

### Basic Inverter
- Connect input signal to any A pin (1A, 2A, etc.)
- Output appears inverted at corresponding Y pin
- Use pull-up/pull-down resistors as needed

### RC Oscillator
- Connect output of one gate to RC network
- Feed RC output to input of same or different gate
- Frequency determined by R and C values
- Schmitt-trigger provides stable oscillation

### Switch Debouncer
- Connect mechanical switch through resistor to gate input
- Schmitt-trigger eliminates bounce noise
- Clean digital output suitable for logic circuits

## Design Considerations

- **Input Protection**: Inputs are protected but avoid exceeding VDD+0.5V
- **Unused Inputs**: Tie unused inputs to VDD or VSS to prevent oscillation
- **Power Supply**: Use bypass capacitors (0.1µF) near VDD/VSS pins
- **Output Loading**: Each output can drive standard CMOS/TTL loads
- **Hysteresis**: Typically 0.9V at VDD=5V, scales with supply voltage

## Advantages

- **Noise Immunity**: Hysteresis prevents false switching on noisy signals
- **Versatile**: Can handle both digital and analog input signals
- **Low Power**: CMOS technology for battery applications
- **Wide Voltage Range**: Single supply operation from 3V to 18V
- **Multiple Gates**: Six inverters in single package
- **Clean Switching**: Sharp output transitions regardless of input slew rate

## Tags

logic-gate, inverter, schmitt-trigger, hex-inverter, cmos, texas-instruments, dip-14 #cabinet-3 #bin-34 #section-a #status-available

## Notes

The CD40106BE is part of the 4000B series CMOS logic family and is widely used for:
- Signal conditioning in mixed analog/digital circuits
- Oscillator circuits requiring stable frequency generation
- Interface circuits between different logic families
- Educational projects demonstrating Schmitt-trigger operation

Modern alternatives include:
- **74HC14**: High-speed CMOS hex Schmitt-trigger inverter
- **74HCT14**: TTL-compatible version
- **SN74LVC1G14**: Single-gate version in small package
- **CD40106B**: Improved version with better specifications

The CD40106BE is particularly valued for its ability to convert slowly changing or noisy analog signals into clean digital outputs, making it essential for signal conditioning applications and robust digital circuit design.
