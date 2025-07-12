---
type: electronic-component
category: Logic Gates
subcategory: Analog Multiplexer
brand: Various (74HC Standard)
part_number: 74HC4051
size: DIP-16
color: Black
location: [Cabinet-3/Bin-34/Section-D]
quantity: 15
status: available
price_range: $0.50-2
tags: [logic-gate, analog-multiplexer, demultiplexer, 8-channel, sp8t, cmos, 74hc-series, dip-16, cabinet-3, bin-34, section-d, status-available]
---

# 74HC4051 8-Channel Analog Multiplexer/Demultiplexer

## Details

- **Location**: Cabinet-3, Bin 34, Section D
- **Category**: Logic Gates
- **Quantity**: 15
- **Status**: Available
- **Package**: 16-pin DIP (Dual In-line Package)
- **Datasheet**: [74HC4051 Datasheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT4051.pdf)

## Description

The 74HC4051 is a CMOS 8-Channel Analog Multiplexer/Demultiplexer that functions as a single-pole, 8-throw (SP8T) analog switch. It can route one of eight input signals to a single output (multiplexer mode) or route a single input to one of eight outputs (demultiplexer mode). The channel selection is controlled by a 3-bit binary address.

### Key Features

- **8-Channel Operation**: Single-pole, 8-throw analog switch
- **Bidirectional**: Can function as multiplexer or demultiplexer
- **Digital Control**: 3-bit address selects active channel (A0, A1, A2)
- **Enable Input**: Active-low enable for turning all channels off
- **Wide Signal Range**: Handles both analog and digital signals
- **Low On-Resistance**: Typically 120Ω at VCC = 4.5V
- **CMOS Technology**: Low power consumption and high noise immunity
- **74HC Series**: High-speed CMOS logic family

### Technical Specifications

- **Package**: 16-pin DIP (0.6" width)
- **Technology**: High-Speed CMOS (74HC Series)
- **Supply Voltage**: 2V - 6V (typical 5V operation)
- **On-Resistance**: 120Ω typical at VCC = 4.5V
- **Channel Selection**: 3-bit binary address (8 combinations)
- **Propagation Delay**: Typically 10ns
- **Operating Temperature**: -40°C to +85°C
- **Power Consumption**: Very low static power
- **Input/Output Voltage Range**: 0V to VCC

## Typical Pinout (DIP-16)

```
    74HC4051
    ┌─────────────┐
Y4  │1          16│ VCC
Y6  │2          15│ Y2
Y7  │3          14│ Y1
Y5  │4          13│ Y0
Y3  │5          12│ Z
INH │6          11│ A0
VEE │7          10│ A1
VSS │8           9│ A2
    └─────────────┘
```

### Pin Descriptions

- **VCC (Pin 16)**: Positive supply voltage (+2V to +6V)
- **VSS (Pin 8)**: Ground (0V)
- **VEE (Pin 7)**: Negative supply voltage (typically connected to VSS)
- **Y0-Y7 (Pins 13,14,15,2,1,4,3,5)**: Eight analog input/output channels
- **Z (Pin 12)**: Common input/output terminal
- **A0-A2 (Pins 11,10,9)**: 3-bit address inputs for channel selection
- **INH (Pin 6)**: Inhibit input (active low enable)

## Channel Selection

### Address Truth Table
| A2 | A1 | A0 | Selected Channel |
|----|----|----|------------------|
| 0  | 0  | 0  | Y0 (Pin 13)      |
| 0  | 0  | 1  | Y1 (Pin 14)      |
| 0  | 1  | 0  | Y2 (Pin 15)      |
| 0  | 1  | 1  | Y3 (Pin 5)       |
| 1  | 0  | 0  | Y4 (Pin 1)       |
| 1  | 0  | 1  | Y5 (Pin 4)       |
| 1  | 1  | 0  | Y6 (Pin 2)       |
| 1  | 1  | 1  | Y7 (Pin 3)       |

### Enable Control
- **INH = 0 (Low)**: Multiplexer enabled, selected channel connected to Z
- **INH = 1 (High)**: All channels disabled, Z is in high-impedance state

## Operation Modes

### Multiplexer Mode
- Multiple analog inputs (Y0-Y7) → Single output (Z)
- Address inputs select which input appears at output
- Common application: Analog input expansion for microcontrollers

### Demultiplexer Mode
- Single analog input (Z) → Multiple outputs (Y0-Y7)
- Address inputs select which output receives the input signal
- Common application: Analog signal distribution

## Applications

- **Analog Input Expansion**: Increase ADC channels for microcontrollers
- **Sensor Multiplexing**: Read multiple analog sensors with one ADC
- **Signal Routing**: Route audio or video signals
- **Data Acquisition**: Multi-channel data logging systems
- **Instrumentation**: Test equipment signal switching
- **Audio Applications**: Audio channel selection and mixing
- **Communication Systems**: Signal path selection
- **Analog Computers**: Analog signal processing

## Circuit Examples

### Basic Multiplexer
- Connect analog sensors to Y0-Y7
- Connect microcontroller ADC to Z
- Use digital outputs to control A0-A2
- Read different sensors by changing address

### Demultiplexer Application
- Connect DAC output to Z
- Connect different loads to Y0-Y7
- Select output channel with address inputs
- Drive different analog outputs

## Design Considerations

- **Signal Levels**: Input signals should not exceed VCC
- **On-Resistance**: Affects signal attenuation and accuracy
- **Switching Time**: Consider propagation delays in high-speed applications
- **Power Supply**: Use proper decoupling capacitors
- **Address Timing**: Ensure stable address before enabling
- **Load Impedance**: High impedance loads minimize signal loading

## Advantages

- **Versatile**: Both multiplexer and demultiplexer operation
- **Low Power**: CMOS technology for minimal power consumption
- **Simple Control**: Standard digital logic levels
- **Bidirectional**: Signal can flow in either direction
- **Multiple Channels**: Eight channels in single package
- **Fast Switching**: High-speed CMOS for quick channel changes

## Comparison with Similar ICs

### 74HC4051 vs CD4051
- **74HC4051**: Faster switching, narrower voltage range (2V-6V)
- **CD4051**: Slower switching, wider voltage range (3V-18V)

### 74HC4051 vs 74HC4052
- **74HC4051**: Single 8:1 multiplexer
- **74HC4052**: Dual 4:1 multiplexer

### 74HC4051 vs 74HC4067
- **74HC4051**: 8 channels, 3-bit address
- **74HC4067**: 16 channels, 4-bit address

## Tags

logic-gate, analog-multiplexer, demultiplexer, 8-channel, sp8t, cmos, 74hc-series, dip-16 #cabinet-3 #bin-34 #section-d #status-available

## Notes

The 74HC4051 is part of the 74HC high-speed CMOS logic family and is widely used for:
- Arduino and microcontroller projects requiring analog input expansion
- Data acquisition systems
- Audio and video signal routing
- Instrumentation and test equipment
- Educational electronics projects

Modern alternatives and related parts:
- **CD74HC4051**: Texas Instruments version
- **74HCT4051**: TTL-compatible inputs version
- **ADG508**: Precision analog multiplexer
- **MAX4617**: Low-voltage analog switches

The 74HC4051 is particularly popular in maker and hobbyist communities for expanding the analog input capabilities of microcontrollers like Arduino, allowing multiple sensors to share a single ADC input through time-division multiplexing.
