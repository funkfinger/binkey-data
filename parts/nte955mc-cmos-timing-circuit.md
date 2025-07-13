---
type: electronic-component
category: Logic ICs
subcategory: Timing Circuits
brand: NTE Electronics
part_number: NTE955MC
model: NTE955MC
description: CMOS timing circuit IC equivalent to NE555 timer with low power consumption
manufacturer: NTE Electronics
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 15V (some variants up to 18V)
current: Ultra-low power CMOS consumption (~100µA typical)
power: Low power CMOS design with high efficiency
interface: [Timing Control, PWM Generation]
connectivity: [Through-hole pins]
compatibility: [555 Timer circuits, CMOS Logic, Timing applications]
location: [Cabinet-3/Bin-33/Section-F]
quantity: 1
status: available
price_range: $1.00-3.00
datasheet: https://lcsc.com/datasheet/lcsc_datasheet_2411200016_NTE-Electronics-NTE955MC_C6345955.pdf
product_url: https://www.nteinc.com/
tags:
  [
    timing-circuit,
    cmos-timer,
    555-equivalent,
    low-power,
    nte-electronics,
    cabinet-3,
    bin-33,
    status-available,
  ]
date_added: 2025-01-13
---

# NTE955MC - CMOS Timing Circuit (555 Equivalent)

## Details

- **Location**: Cabinet-3, Bin 33, Section F
- **Category**: Logic ICs
- **Brand**: NTE Electronics
- **Part Number**: NTE955MC
- **Package**: 8-DIP
- **Quantity**: 2
- **Status**: Available
- **Price Range**: $1.00-3.00
- **Datasheet**: [NTE955MC Datasheet](https://lcsc.com/datasheet/lcsc_datasheet_2411200016_NTE-Electronics-NTE955MC_C6345955.pdf)
- **Product URL**: https://www.nteinc.com/

## Description

The NTE955MC is a CMOS timing circuit IC that is functionally equivalent to the popular NE555/SE555 timer but implemented with CMOS technology. This provides significant advantages including ultra-low power consumption, improved noise immunity, and better temperature stability compared to standard bipolar 555 timers. The IC can operate in both monostable (one-shot) and astable (oscillator) modes, making it versatile for timing, pulse generation, and PWM applications.

## Specifications

### Electrical Characteristics

- **Supply Voltage (VCC)**: 3V ~ 15V (some variants up to 18V)
- **Quiescent Current**: ~100µA typical (ultra-low power)
- **Output Drive Current**: 10-20mA (source/sink capability)
- **Input Impedance**: Very high (CMOS inputs)
- **Operating Temperature**: Typically -40°C to +85°C
- **Noise Immunity**: High due to CMOS design

### Physical Characteristics

- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Lead Material**: Standard DIP leads

### Key Features

- CMOS implementation of 555 timer functionality
- Ultra-low power consumption
- High noise immunity and temperature stability
- Pin-compatible with standard 555 timers
- Wide operating voltage range
- Improved performance over bipolar timers

## Pinout Diagram

```
    NTE955MC 8-Pin DIP
    ┌─────────────┐
GND │1          8│ VCC
TRG │2          7│ DIS
OUT │3          6│ THR
RST │4          5│ CONT
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description                 |
| --- | ---- | --------------------------- |
| 1   | GND  | Ground connection           |
| 2   | TRG  | Trigger input (active LOW)  |
| 3   | OUT  | Output (HIGH/LOW)           |
| 4   | RST  | Reset input (active LOW)    |
| 5   | CONT | Control voltage input       |
| 6   | THR  | Threshold input             |
| 7   | DIS  | Discharge transistor output |
| 8   | VCC  | Positive supply voltage     |

## Operating Modes

### Monostable Mode (One-Shot Timer)

- **Function**: Produces single output pulse when triggered
- **Timing**: T = 1.1 × R × C
- **Applications**: Delay circuits, pulse stretching, debouncing

### Astable Mode (Oscillator)

- **Function**: Continuous square wave output
- **Frequency**: f = 1.44 / ((R1 + 2×R2) × C)
- **Duty Cycle**: D = (R1 + R2) / (R1 + 2×R2)
- **Applications**: Clock generation, PWM, LED flashers

## Applications

Common use cases for the NTE955MC:

- Low power timing circuits
- Battery-powered oscillators
- Pulse width modulation (PWM)
- Delay and timing generators
- Clock signal generation
- LED flashers and blinkers
- Voltage-controlled oscillators (VCO)
- Precision timing applications

## Circuit Examples

### Basic Astable Oscillator

```
VCC ---- R1 ---- DIS (Pin 7) ---- R2 ---- THR (Pin 6) & TRG (Pin 2)
THR/TRG ---- Timing Capacitor ---- GND
CONT (Pin 5) ---- 0.01µF ---- GND (noise filtering)
RST (Pin 4) ---- VCC (or control switch)
OUT (Pin 3) ---- Load (LED + resistor, etc.)
```

### Monostable Timer

```
VCC ---- R ---- DIS (Pin 7) & THR (Pin 6)
THR ---- Timing Capacitor ---- GND
TRG (Pin 2) ---- Input trigger signal
RST (Pin 4) ---- VCC
CONT (Pin 5) ---- 0.01µF ---- GND
OUT (Pin 3) ---- Load
```

### PWM Generator

```
Standard astable configuration with:
CONT (Pin 5) ---- Variable voltage (0.33×VCC to 0.67×VCC)
Control voltage varies duty cycle
Output frequency remains relatively constant
```

## Design Calculations

### Monostable Timing

```
T = 1.1 × R × C
Where:
- T = output pulse width (seconds)
- R = timing resistor (ohms)
- C = timing capacitor (farads)
```

### Astable Frequency

```
f = 1.44 / ((R1 + 2×R2) × C)
Where:
- f = frequency (Hz)
- R1, R2 = timing resistors (ohms)
- C = timing capacitor (farads)
```

### Duty Cycle

```
D = (R1 + R2) / (R1 + 2×R2) × 100%
For 50% duty cycle: R1 << R2
```

## Technical Notes

Important considerations for the NTE955MC:

- **Low Power**: Ideal for battery-powered applications
- **CMOS Inputs**: High impedance, sensitive to static
- **Decoupling**: Use 0.1µF capacitor between VCC and GND
- **Control Voltage**: Pin 5 can be used for frequency/timing modulation
- **Reset Function**: Pin 4 must be HIGH for normal operation
- **Temperature Stability**: Better than bipolar 555 timers

## Advantages Over Standard 555

The CMOS implementation provides:

- **Ultra-low power consumption** (100µA vs 3mA for bipolar)
- **Higher input impedance** (better noise immunity)
- **Improved temperature stability**
- **Lower supply current variation**
- **Better performance at low voltages**
- **Reduced power supply noise**

## Tags

timing-circuit, cmos-timer, 555-equivalent, low-power, nte-electronics #cabinet-3 #bin-33 #status-available

## Notes

The NTE955MC is an excellent modern replacement for traditional 555 timers, especially in low-power applications. Having this CMOS timing circuit in your collection provides access to precision timing functionality with minimal power consumption. It's perfect for battery-powered projects, portable devices, and applications where power efficiency is important. The pin compatibility with standard 555 timers makes it a drop-in replacement for existing circuits while providing superior performance. This IC is ideal for learning timing circuit principles, creating efficient oscillators, and building low-power control systems. The ultra-low quiescent current makes it particularly valuable for always-on timing applications where battery life is critical.
