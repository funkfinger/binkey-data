---
type: electronic-component
category: Analog ICs
subcategory: Op-Amps
brand: Various
part_number: LM741
model: LM741
description: General-purpose operational amplifier IC
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: ±3V ~ ±18V (±15V typical)
current: 1.7mA supply current
power: Low power consumption
interface: [Analog]
connectivity: [Through-hole pins]
compatibility: [Analog circuits, Audio applications]
location: [Cabinet-3/Bin-37/Section-A]
quantity: 16
status: available
price_range: $0.50-1.50
datasheet: https://www.ti.com/lit/ds/symlink/lm741.pdf
product_url: https://www.ti.com/product/LM741
tags: [op-amp, analog-ic, single-opamp, general-purpose, classic, lm741, cabinet-3, bin-37, status-available]
date_added: 2025-01-12
---

# LM741 - General-Purpose Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 37, Section A
- **Category**: Analog ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: LM741 / LM741CN
- **Package**: 8-DIP
- **Quantity**: 16
- **Status**: Available
- **Price Range**: $0.50-1.50
- **Datasheet**: [LM741 Datasheet](https://www.ti.com/lit/ds/symlink/lm741.pdf)
- **Product URL**: https://www.ti.com/product/LM741

## Description

The LM741 is a classic and widely-used general-purpose operational amplifier that has been a staple in analog circuit design for decades. It features internal frequency compensation, short-circuit protection, and offset voltage null capability. While not the fastest or most precise op-amp by modern standards, it remains popular for educational purposes and general analog applications where moderate performance is sufficient.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: ±3V ~ ±18V (±15V typical)
- **Supply Current**: 1.7mA (typical)
- **Input Offset Voltage**: 1mV (typical)
- **Input Bias Current**: 80nA (typical)
- **Slew Rate**: 0.5V/µs
- **Gain Bandwidth Product**: 1MHz
- **Open Loop Gain**: 200,000 (106dB)
- **Output Current**: ±25mA

### Physical Characteristics  
- **Package**: 8-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 8-pin DIP package
- **Operating Temperature**: 0°C ~ 70°C (commercial), -55°C ~ 125°C (military)
- **Mounting Type**: Through Hole

### Key Features
- Internal frequency compensation for stability
- Short-circuit protection on outputs
- Offset voltage null capability (pins 1 & 5)
- No latch-up when common mode range is exceeded
- Wide supply voltage range
- Industry standard pinout
- Proven reliability and availability

## Pinout Diagram

![LM741 Pinout Diagram](../attachments/lm741-pinout-diagram.svg)

*Pinout diagram: LM741 operational amplifier in DIP package (Creative Commons CC0, Wikimedia Commons)*

### Pin Descriptions (8-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | OFFSET N1 | Offset null (optional) |
| 2 | IN- | Inverting input |
| 3 | IN+ | Non-inverting input |
| 4 | V- | Negative power supply |
| 5 | OFFSET N2 | Offset null (optional) |
| 6 | OUTPUT | Op-amp output |
| 7 | V+ | Positive power supply |
| 8 | NC | Not connected |

## Applications

Common use cases and applications for this component:
- Basic amplifier circuits
- Active filters (low-pass, high-pass, band-pass)
- Voltage followers and buffers
- Comparators (with external feedback)
- Integrators and differentiators
- Instrumentation circuits
- Educational and learning projects
- Audio preamplifiers (low-frequency)
- DC amplification applications

## Circuit Examples

### Basic Non-Inverting Amplifier
```
V+ (Pin 7) ---- +15V
V- (Pin 4) ---- -15V
IN+ (Pin 3) ---- Input signal
IN- (Pin 2) ---- Feedback from output through voltage divider
OUTPUT (Pin 6) ---- Amplified output

Gain = 1 + (R2/R1) where R2 is feedback resistor, R1 is ground resistor
```

### Voltage Follower (Unity Gain Buffer)
```
V+ (Pin 7) ---- +15V
V- (Pin 4) ---- -15V
IN+ (Pin 3) ---- Input signal
IN- (Pin 2) ---- Connected directly to OUTPUT (Pin 6)
OUTPUT (Pin 6) ---- Buffered output (same voltage as input)
```

### Active Low-Pass Filter
```
Input signal -> R1 -> IN+ (Pin 3)
IN- (Pin 2) connected to output through feedback network
C1 from IN+ to ground for frequency response
OUTPUT (Pin 6) -> Filtered output
Cutoff frequency = 1/(2π × R1 × C1)
```

## Technical Notes

Important technical considerations and features:
- **Slew Rate Limitation**: 0.5V/µs limits high-frequency performance
- **Offset Nulling**: Use 10kΩ potentiometer between pins 1 and 5, wiper to V-
- **Power Supply Decoupling**: Use 0.1µF ceramic capacitors close to power pins
- **Input Protection**: Avoid input voltages exceeding supply rails
- **Frequency Compensation**: Internally compensated, stable for unity gain
- **Output Drive**: Can source/sink ±25mA, suitable for moderate loads
- **Common Mode Range**: Typically within 2V of supply rails
- **Single Supply Operation**: Possible with proper biasing (Vcc/2 reference)

## Historical Significance

The LM741 was introduced in the late 1960s and became the industry standard operational amplifier. It was one of the first op-amps to include internal frequency compensation, making it much easier to use than earlier designs like the LM709. Despite being superseded by newer designs in many applications, it remains widely used for education and general-purpose analog circuits.

## Modern Alternatives

For new designs, consider these improved alternatives:
- **TL071/TL081**: JFET input, higher speed, lower noise
- **LM358**: Dual op-amp, single supply operation
- **OPA2134**: Audio-grade, very low noise and distortion
- **LMC6482**: Rail-to-rail I/O, CMOS technology

## Tags

op-amp, analog-ic, single-opamp, general-purpose, classic, lm741 #cabinet-3 #bin-37 #status-available

## Notes

The LM741 is often called the "grandfather of op-amps" and remains one of the most recognizable ICs in electronics. While its performance is modest by today's standards, it's still excellent for learning analog circuit design principles and for applications where its limitations aren't critical. Its widespread availability, low cost, and extensive documentation make it a valuable component for educational projects and basic analog circuits. Having 16 of these provides good flexibility for various analog projects and experiments.
