---
type: electronic-component
category: Logic Gates
subcategory: Analog Switch
brand: Texas Instruments
part_number: CD4066BE
size: DIP-14
color: Black
location: [Cabinet-3/Bin-34/Section-C]
quantity: 10
status: available
price_range: $0.50-2
tags: [logic-gate, analog-switch, bilateral-switch, quad, multiplexer, cmos, texas-instruments, dip-14, cabinet-3, bin-34, section-c, status-available]
---

# CD4066BE Quad Bilateral Switch

## Details

- **Location**: Cabinet-3, Bin 34, Section C
- **Category**: Logic Gates
- **Quantity**: 10
- **Status**: Available
- **Package**: 14-pin DIP (Dual In-line Package)
- **Datasheet**: [CD4066B Datasheet](https://www.ti.com/lit/ds/symlink/cd4066b.pdf)

## Description

The CD4066BE is a CMOS Quad Bilateral Switch from Texas Instruments that contains four independent analog switches. Each switch is bidirectional and can handle both analog and digital signals. The switches are controlled by digital control inputs, making it ideal for signal routing, multiplexing, and analog signal processing applications.

### Key Features

- **Four Independent Switches**: Each switch operates independently
- **Bilateral Operation**: Signals can flow in either direction through each switch
- **Analog and Digital Compatible**: Handles both signal types
- **Low On-Resistance**: Typically 240Ω maximum
- **CMOS Technology**: Low power consumption and high noise immunity
- **Wide Supply Range**: 3V to 18V operation
- **Control Logic**: TTL/CMOS compatible control inputs
- **Break-Before-Make**: Prevents signal overlap during switching

### Technical Specifications

- **Package**: 14-pin DIP (0.3" width)
- **Technology**: CMOS (4000B Series)
- **Switch Type**: SPST (Single Pole Single Throw)
- **Number of Switches**: 4
- **On-Resistance**: 240Ω maximum at VDD = 15V
- **Supply Voltage**: 3V - 18V (typical 5V operation)
- **Control Voltage**: CMOS/TTL compatible
- **Operating Temperature**: -55°C to +125°C
- **Bandwidth**: 40MHz typical
- **Channel Capacitance**: 8pF typical

## Typical Pinout (DIP-14)

```
    CD4066BE
    ┌─────────────┐
1A  │1          14│ VDD
1B  │2          13│ 1C
2A  │3          12│ 4C
2B  │4          11│ 4B
2C  │5          10│ 4A
3A  │6           9│ 3C
VSS │7           8│ 3B
    └─────────────┘
```

### Pin Descriptions

- **VDD (Pin 14)**: Positive supply voltage (+3V to +18V)
- **VSS (Pin 7)**: Ground (0V)
- **Switch 1**: 1A (Pin 1), 1B (Pin 2), Control 1C (Pin 13)
- **Switch 2**: 2A (Pin 3), 2B (Pin 4), Control 2C (Pin 5)
- **Switch 3**: 3A (Pin 6), 3B (Pin 8), Control 3C (Pin 9)
- **Switch 4**: 4A (Pin 10), 4B (Pin 11), Control 4C (Pin 12)

## Switch Operation

### Control Logic
- **Control HIGH (Logic 1)**: Switch is CLOSED (conducting)
- **Control LOW (Logic 0)**: Switch is OPEN (non-conducting)

### Signal Flow
- When switch is closed: Signal flows bidirectionally between A and B pins
- When switch is open: A and B pins are isolated (high impedance)

### Truth Table (per switch)
| Control | Switch State | A to B |
|---------|--------------|--------|
|    0    |     OPEN     |  OFF   |
|    1    |    CLOSED    |   ON   |

## Applications

- **Analog Multiplexing**: Selecting between multiple analog inputs
- **Signal Routing**: Directing signals to different paths
- **Audio Switching**: Audio signal routing and mixing
- **Data Acquisition**: Multiplexing sensor inputs
- **Instrumentation**: Test equipment signal switching
- **Communication Systems**: Signal path selection
- **Analog Computers**: Analog signal processing
- **Chopper Circuits**: Signal modulation and demodulation

## Circuit Examples

### Basic Analog Multiplexer
- Connect multiple analog sources to A pins
- Connect common output to B pins
- Use control pins to select which input reaches output

### Digital Signal Router
- Route digital signals between different circuit sections
- Control pins determine signal path
- Useful for bus switching applications

### Audio Mixer
- Switch audio signals in and out of mixing circuits
- Control pins enable/disable audio channels
- Low distortion for audio applications

## Design Considerations

- **On-Resistance**: Affects signal attenuation and distortion
- **Control Signal Levels**: Ensure proper logic levels for reliable switching
- **Power Supply Decoupling**: Use bypass capacitors near VDD/VSS
- **Signal Levels**: Input signals should not exceed supply voltage
- **Switching Speed**: Consider propagation delays in high-speed applications
- **Crosstalk**: Minimize coupling between adjacent switches

## Advantages

- **Versatile**: Handles both analog and digital signals
- **Low Power**: CMOS technology for minimal power consumption
- **Simple Control**: Standard logic levels for switch control
- **Bidirectional**: Signal can flow in either direction
- **Multiple Switches**: Four independent switches in one package
- **Wide Voltage Range**: Flexible power supply requirements

## Comparison with Similar ICs

### CD4066 vs CD4016
- **CD4066**: Lower on-resistance, better performance
- **CD4016**: Higher on-resistance, older design

### CD4066 vs 74HC4066
- **CD4066**: Wider voltage range (3V-18V)
- **74HC4066**: Faster switching, narrower voltage range (2V-6V)

## Tags

logic-gate, analog-switch, bilateral-switch, quad, multiplexer, cmos, texas-instruments, dip-14 #cabinet-3 #bin-34 #section-c #status-available

## Notes

The CD4066BE is part of the 4000B series CMOS logic family and remains popular for:
- Analog signal switching applications
- Educational electronics projects
- Audio equipment design
- Instrumentation and test equipment
- Hobby projects requiring signal routing

Modern alternatives include:
- **74HC4066**: High-speed CMOS version
- **ADG1414**: Precision analog switches
- **MAX4617**: Low-voltage analog switches
- **CD74HC4066**: Pin-compatible high-speed version

The CD4066BE is particularly valued for its simplicity, reliability, and ability to handle both analog and digital signals with minimal distortion. It's an excellent choice for applications requiring signal routing, multiplexing, or analog switching with digital control.
