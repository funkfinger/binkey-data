---
type: electronic-component
category: Logic Gates
subcategory: Counter/Display Driver
brand: Texas Instruments
part_number: CD4026BE
size: DIP-16
color: Black
location: [Cabinet-3/Bin-34/Section-B]
quantity: 4
status: available
price_range: $1-3
tags: [logic-gate, counter, decade-counter, 7-segment-driver, display-driver, cmos, texas-instruments, dip-16, cabinet-3, bin-34, section-b, status-available]
---

# CD4026BE Decade Counter with 7-Segment Display Driver

## Details

- **Location**: Cabinet-3, Bin 34, Section B
- **Category**: Logic Gates
- **Quantity**: 4
- **Status**: Available
- **Package**: 16-pin DIP (Dual In-line Package)
- **Datasheet**: [CD4026B Datasheet](https://www.ti.com/lit/gpn/cd4026b)

## Description

The CD4026BE is a CMOS Decade Counter/Divider with Decoded 7-Segment Display Outputs and Display Enable from Texas Instruments. This versatile IC combines a decade counter (0-9) with a 7-segment display decoder/driver, making it ideal for digital counting applications with direct display capability.

### Key Features

- **Decade Counter**: Counts from 0 to 9 in decimal
- **7-Segment Decoder**: Direct drive capability for 7-segment displays
- **Display Enable**: Built-in display blanking control
- **Carry Output**: For cascading multiple counters
- **Reset Input**: Asynchronous reset to zero
- **Clock Input**: Positive edge triggered
- **CMOS Technology**: Low power consumption and high noise immunity
- **Wide Supply Range**: 3V to 18V operation

### Technical Specifications

- **Package**: 16-pin DIP (0.3" width)
- **Technology**: CMOS (4000B Series)
- **Logic Type**: Decade Counter with 7-Segment Driver
- **Supply Voltage**: 3V - 18V (typical 5V operation)
- **Count Rate**: Up to 16 MHz
- **Propagation Delay**: Typically 250ns at 5V
- **Operating Temperature**: -55°C to +125°C
- **Power Dissipation**: Very low static power consumption
- **Output Drive**: Can directly drive 7-segment LED displays

## Typical Pinout (DIP-16)

```
    CD4026BE
    ┌─────────────┐
CLK │1          16│ VDD
DIS │2          15│ f
RST │3          14│ g
CO  │4          13│ a
UNK │5          12│ b
UNK │6          11│ c
UNK │7          10│ d
VSS │8           9│ e
    └─────────────┘
```

### Pin Descriptions

- **VDD (Pin 16)**: Positive supply voltage (+3V to +18V)
- **VSS (Pin 8)**: Ground (0V)
- **CLK (Pin 1)**: Clock input (positive edge triggered)
- **DIS (Pin 2)**: Display enable (active high blanks display)
- **RST (Pin 3)**: Reset input (active high resets counter to 0)
- **CO (Pin 4)**: Carry output (goes high on count 9, low on count 0)
- **a-g (Pins 13,12,11,10,9,15,14)**: 7-segment display outputs
- **Pins 5,6,7**: Not connected or internal use

## 7-Segment Display Outputs

The IC provides direct outputs for a common-cathode 7-segment display:

```
    a
   ---
f |   | b
   -g-
e |   | c
   ---
    d
```

### Segment Mapping
- **a (Pin 13)**: Top horizontal segment
- **b (Pin 12)**: Top right vertical segment
- **c (Pin 11)**: Bottom right vertical segment
- **d (Pin 10)**: Bottom horizontal segment
- **e (Pin 9)**: Bottom left vertical segment
- **f (Pin 15)**: Top left vertical segment
- **g (Pin 14)**: Middle horizontal segment

## Operation

### Basic Counter Operation
1. **Clock Input**: Each positive edge increments the counter
2. **Count Sequence**: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0
3. **Carry Output**: Pulses high during count 9, returns low on count 0
4. **Reset**: Asynchronous reset to count 0 when RST is high

### Display Control
- **Normal Operation**: DIS pin low, display shows current count
- **Blanked Display**: DIS pin high, all segments off (counter continues)
- **Direct Drive**: Outputs can directly drive LED segments with current limiting resistors

## Applications

- **Digital Counters**: Event counting, frequency division
- **Digital Clocks**: Seconds, minutes display
- **Scoreboards**: Sports scoring systems
- **Production Counters**: Manufacturing line counting
- **Frequency Meters**: Digital frequency measurement
- **Educational Projects**: Learning digital logic and displays
- **Timer Circuits**: Visual countdown timers
- **Process Control**: Step counting in automated systems

## Circuit Examples

### Basic Single Digit Counter
- Connect CLK to pulse source (555 timer, switch, etc.)
- Connect a-g outputs to 7-segment display through current limiting resistors
- Connect VDD to +5V, VSS to ground
- Use RST for manual reset

### Multi-Digit Counter
- Cascade multiple CD4026BE ICs
- Connect CO of first IC to CLK of second IC
- Each IC drives its own 7-segment display
- Common reset and power connections

## Design Considerations

- **Current Limiting**: Use resistors (220Ω-470Ω) between outputs and LED segments
- **Display Type**: Designed for common-cathode 7-segment displays
- **Power Supply**: Bypass capacitors recommended near VDD/VSS pins
- **Clock Input**: Ensure clean clock edges for reliable counting
- **Reset Circuit**: Can use RC circuit for power-on reset

## Advantages

- **All-in-One**: Counter and display driver in single package
- **Easy Interface**: Direct connection to 7-segment displays
- **Cascadable**: Multiple ICs for multi-digit displays
- **Low Power**: CMOS technology for battery applications
- **Wide Voltage Range**: Flexible power supply requirements

## Tags

logic-gate, counter, decade-counter, 7-segment-driver, display-driver, cmos, texas-instruments, dip-16 #cabinet-3 #bin-34 #section-b #status-available

## Notes

The CD4026BE is part of the 4000B series CMOS logic family and remains popular for:
- Educational electronics projects
- Digital clock and counter circuits
- Hobby projects requiring simple counting displays
- Replacement in vintage equipment

Modern alternatives include:
- **74HC4026**: High-speed CMOS version
- **74HC4511**: BCD to 7-segment decoder/driver
- **MAX7219**: Serial-interface LED display driver
- **TM1637**: 4-digit 7-segment display driver with I2C

The CD4026BE is particularly valued for its simplicity - requiring minimal external components to create a functional digital counter with display. It's an excellent choice for beginners learning digital electronics and for applications where a simple, reliable counting display is needed.
