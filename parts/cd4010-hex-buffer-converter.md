---
type: electronic-component
category: Logic Gates
subcategory: Buffer/Converter
brand: Various (CD4010 Standard)
part_number: CD4010
size: DIP-16
color: Black
location: [Cabinet-3/Bin-34/Section-A]
quantity: 9
status: available
price_range: $1-5
tags: [logic-gate, buffer, converter, hex, cmos, voltage-level, dip-16, cd4010, cabinet-3, bin-34, section-a, status-available]
---

# CD4010 Hex Buffer/Converter

## Details

- **Location**: Cabinet-3, Bin 34, Section A
- **Category**: Logic Gates
- **Quantity**: 9
- **Status**: Available
- **Package**: 16-pin DIP (Dual In-line Package)
- **Datasheet**: [CD4010B Datasheet](https://www.ti.com/lit/ds/symlink/cd4010b-q1.pdf)

## Description

The CD4010 is a CMOS Hex Buffer/Converter that provides six independent non-inverting buffers with voltage level conversion capability. It is designed to interface between different logic families and voltage levels, making it particularly useful for CMOS to TTL conversion and vice versa.

### Key Features

- **Six Independent Buffers**: Non-inverting buffer gates
- **Voltage Level Conversion**: CMOS to TTL or TTL to CMOS conversion
- **Dual Power Supply**: Separate VDD and VCC for level shifting
- **High Input Impedance**: Typical CMOS characteristics
- **Wide Supply Range**: VDD: 3V to 18V, VCC: 4.5V to 18V
- **High Sink Current**: Up to 8.8mA sink capability
- **Temperature Stable**: Reliable operation across temperature range
- **4000 Series Compatible**: Part of the CD4000 CMOS logic family

### Technical Specifications

- **Package**: 16-pin DIP (0.6" width)
- **Technology**: CMOS (Complementary Metal-Oxide-Semiconductor)
- **Logic Function**: Non-inverting buffer with level conversion
- **Supply Voltage VDD**: 3V - 18V (CMOS side)
- **Supply Voltage VCC**: 4.5V - 18V (TTL side)
- **Input Voltage Range**: 0V to VDD
- **Output Voltage Range**: 0V to VCC
- **Propagation Delay**: Typically 250ns at 5V
- **Operating Temperature**: -55°C to +125°C
- **Sink Current**: 8.8mA typical at VCC = 5V

## Typical Pinout (DIP-16)

```
    CD4010
    ┌─────────────┐
VCC │1          16│ VDD
1A  │2          15│ 6A
1Y  │3          14│ 6Y
2A  │4          13│ 5A
2Y  │5          12│ 5Y
3A  │6          11│ 4A
3Y  │7          10│ 4Y
VSS │8           9│ NC
    └─────────────┘
```

### Pin Descriptions

- **VCC (Pin 1)**: TTL supply voltage (+4.5V to +18V)
- **VDD (Pin 16)**: CMOS supply voltage (+3V to +18V)
- **VSS (Pin 8)**: Ground (0V)
- **NC (Pin 9)**: No connection
- **1A-6A (Pins 2,4,6,11,13,15)**: Buffer inputs
- **1Y-6Y (Pins 3,5,7,10,12,14)**: Buffer outputs

## Logic Function

### Buffer Truth Table
| Input A | Output Y |
|---------|----------|
|    0    |    0     |
|    1    |    1     |

**Logic Equation**: Y = A

The output follows the input with no inversion, providing buffering and level conversion.

## Voltage Level Conversion

### CMOS to TTL Conversion
- **VDD**: Connect to CMOS supply (3V-18V)
- **VCC**: Connect to TTL supply (typically 5V)
- **Input**: CMOS logic levels (0V to VDD)
- **Output**: TTL compatible levels (0V to VCC)

### TTL to CMOS Conversion
- **VDD**: Connect to CMOS supply (typically 5V or higher)
- **VCC**: Connect to TTL supply (typically 5V)
- **Input**: TTL logic levels
- **Output**: CMOS logic levels

## Applications

- **Logic Level Translation**: Converting between different voltage levels
- **Interface Circuits**: CMOS to TTL and TTL to CMOS interfacing
- **Signal Buffering**: Driving multiple loads from single source
- **Voltage Level Shifting**: Up or down conversion of logic levels
- **Bus Driving**: Buffering data and address buses
- **Clock Distribution**: Buffering clock signals
- **Signal Isolation**: Isolating different circuit sections
- **Load Driving**: Providing current drive capability

## Circuit Examples

### Basic Buffer
- Input signal → Buffer input → Buffered output
- Same voltage levels on both sides

### Level Converter
- CMOS input (VDD supply) → Buffer → TTL output (VCC supply)
- Different supply voltages enable level conversion

### Bus Buffer
- Multiple inputs buffered to drive bus lines
- Provides isolation and current drive capability

## Design Considerations

- **Supply Voltages**: VCC should be ≥ VDD for proper operation
- **Input Protection**: CMOS inputs are sensitive to static discharge
- **Unused Inputs**: Should be tied to VDD or VSS (not left floating)
- **Power Supply Decoupling**: Use bypass capacitors on both VCC and VDD
- **Output Loading**: Consider current drive limitations

## Advantages

- **Voltage Flexibility**: Wide range of supply voltages
- **Level Conversion**: Built-in voltage level translation
- **High Input Impedance**: Minimal loading on driving circuits
- **Good Drive Capability**: Can sink significant current
- **4000 Series Compatibility**: Works with other CD4000 series devices

## Tags

logic-gate, buffer, converter, hex, cmos, voltage-level, dip-16, cd4010 #cabinet-3 #bin-34 #section-a #status-available

## Notes

The CD4010 is a versatile buffer/converter from the 4000 series CMOS family. While older technology, it remains useful for:
- Interfacing between different logic families
- Vintage computer and electronics restoration
- Educational projects demonstrating level conversion
- Hobby projects requiring voltage level translation

Modern equivalents include:
- **74LVC245**: Octal bus transceiver with direction control
- **74ALVC164245**: 16-bit bus transceiver with voltage translation
- **SN74LV1T34**: Single buffer with voltage level shifting
- **TXB0108**: 8-bit bidirectional voltage-level translator

The CD4010 is particularly useful because it provides both buffering and level conversion in a single package, making it ideal for interfacing between 3V and 5V systems or between CMOS and TTL logic families.
