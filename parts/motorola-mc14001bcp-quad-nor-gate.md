---
type: electronic-component
category: Logic Gates
subcategory: NOR Gate
brand: Motorola
part_number: MC14001BCP
size: DIP-14
color: Black
location: [Cabinet-3/Bin-33/Section-C]
quantity: 1
status: available
price_range: $2-8
tags: [logic-gate, nor-gate, quad, cmos, motorola, dip-14, vintage, cabinet-3, bin-33, section-c, status-available]
---

# Motorola MC14001BCP Quad 2-Input NOR Gate

## Details

- **Location**: Cabinet-3, Bin 33, Section C
- **Category**: Logic Gates
- **Quantity**: 1
- **Status**: Available
- **Package**: 14-pin DIP (Dual In-line Package)
- **Series**: 4000/14000/40000 Series CMOS

## Description

The MC14001BCP is a CMOS Quad 2-Input NOR Gate integrated circuit from Motorola's B-suffix series. This device contains four independent 2-input NOR gates in a single 14-pin package, providing fundamental logic operations for digital circuits.

### Key Features

- **Four Independent NOR Gates**: Each with 2 inputs and 1 output
- **CMOS Technology**: Low power consumption and high noise immunity
- **B-Suffix Series**: Enhanced performance characteristics
- **Wide Supply Range**: Typically 3V to 18V operation
- **High Input Impedance**: Typical CMOS characteristics
- **Symmetrical Output**: Equal source and sink current capabilities
- **Temperature Stable**: Reliable operation across temperature range

### Technical Specifications

- **Package**: 14-pin DIP (0.3" width)
- **Technology**: CMOS (Complementary Metal-Oxide-Semiconductor)
- **Logic Function**: NOR (NOT OR)
- **Supply Voltage**: 3V - 18V (typical 5V operation)
- **Propagation Delay**: Typically 60ns at 5V, 50pF load
- **Power Dissipation**: Very low static power consumption
- **Operating Temperature**: -55°C to +125°C
- **Logic Family**: 4000 Series CMOS

## Typical Pinout (DIP-14)

```
    MC14001BCP
    ┌─────────────┐
1A  │1          14│ VDD
1B  │2          13│ 4B
1Y  │3          12│ 4A
2A  │4          11│ 4Y
2B  │5          10│ 3B
2Y  │6           9│ 3A
VSS │7           8│ 3Y
    └─────────────┘
```

### Pin Descriptions

- **VDD (Pin 14)**: Positive supply voltage (+3V to +18V)
- **VSS (Pin 7)**: Ground (0V)
- **Gate 1**: Inputs 1A (Pin 1), 1B (Pin 2) → Output 1Y (Pin 3)
- **Gate 2**: Inputs 2A (Pin 4), 2B (Pin 5) → Output 2Y (Pin 6)
- **Gate 3**: Inputs 3A (Pin 9), 3B (Pin 10) → Output 3Y (Pin 8)
- **Gate 4**: Inputs 4A (Pin 12), 4B (Pin 13) → Output 4Y (Pin 11)

## Logic Function

### NOR Gate Truth Table
| Input A | Input B | Output Y |
|---------|---------|----------|
|    0    |    0    |    1     |
|    0    |    1    |    0     |
|    1    |    0    |    0     |
|    1    |    1    |    0     |

**Logic Equation**: Y = !(A + B) or Y = !A • !B

The output is HIGH (1) only when both inputs are LOW (0).

## Applications

- **Basic Logic Operations**: Fundamental building block for digital circuits
- **Logic Design**: Implementation of Boolean functions
- **Memory Circuits**: Flip-flops and latches
- **Control Logic**: State machines and control circuits
- **Interface Circuits**: Level conversion and signal processing
- **Oscillator Circuits**: RC and crystal oscillators
- **Decoder Circuits**: Address and data decoding
- **Arithmetic Circuits**: Part of larger computational systems

## Circuit Examples

### Basic NOR Operation
- Two input signals → NOR gate → Inverted OR output
- Useful for implementing NOT-OR logic functions

### Set-Reset Latch
- Cross-coupled NOR gates create basic memory element
- Fundamental building block for flip-flops

### Logic Implementation
- NOR gates are functionally complete
- Any Boolean function can be implemented using only NOR gates

## Design Considerations

- **Unused Inputs**: Must be tied to VDD or VSS (not left floating)
- **Power Supply Decoupling**: Use bypass capacitors near VDD/VSS pins
- **Input Protection**: CMOS inputs are sensitive to static discharge
- **Output Loading**: Consider fan-out limitations
- **Propagation Delay**: Increases with supply voltage decrease

## Tags

logic-gate, nor-gate, quad, cmos, motorola, dip-14, vintage #cabinet-3 #bin-33 #section-c #status-available

## Notes

This is a vintage CMOS logic device from Motorola's 4000 series. While discontinued, it remains useful for:
- Educational projects demonstrating basic logic operations
- Vintage computer and electronics restoration
- Digital logic design and prototyping
- Replacement in legacy systems

Modern equivalents include:
- **74HC02**: High-speed CMOS quad 2-input NOR gate
- **CD4001**: Pin-compatible CMOS alternative
- **SN74LVC2G02**: Dual-gate modern alternative in smaller package

The MC14001BCP is part of the 4000 series CMOS family and is compatible with other devices in this series. NOR gates are particularly useful because they are functionally complete - any Boolean logic function can be implemented using only NOR gates.
