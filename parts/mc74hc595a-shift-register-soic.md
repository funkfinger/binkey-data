---
type: electronic-component
category: Logic ICs
subcategory: Shift Registers
brand: ON Semiconductor
part_number: MC74HC595A
model: MC74HC595A
description: 8-bit serial-in parallel-out shift register with tri-state outputs in SOIC package for surface mount applications
manufacturer: ON Semiconductor
package: 16-SOIC
size: 0.295" (7.5mm) width
voltage: 2V ~ 6V wide supply range
current: Low power CMOS consumption
power: High-speed CMOS technology with low power
interface: [Serial Input, Parallel Output, SPI Compatible]
connectivity: [Surface mount pins]
compatibility: [Microcontrollers, Arduino, TTL Logic, CMOS Logic]
location: [Cabinet-3/Bin-35/Section-D]
quantity: 31
status: available
price_range: $0.50-1.20
datasheet: https://www.onsemi.com/pdf/datasheet/mc74hc595a-d.pdf
product_url: https://www.onsemi.com/products/logic/shift-registers/mc74hc595a
tags: [shift-register, serial-to-parallel, io-expander, spi-compatible, soic-package, surface-mount, on-semiconductor, cabinet-3, bin-35, status-available]
date_added: 2025-01-13
---

# MC74HC595A - 8-Bit Serial-In Parallel-Out Shift Register (SOIC)

## Details

- **Location**: Cabinet-3, Bin 35, Section D
- **Category**: Logic ICs
- **Brand**: ON Semiconductor
- **Part Number**: MC74HC595A
- **Package**: 16-SOIC (Surface Mount)
- **Quantity**: 31
- **Status**: Available
- **Price Range**: $0.50-1.20
- **Datasheet**: [MC74HC595A Datasheet](https://www.onsemi.com/pdf/datasheet/mc74hc595a-d.pdf)
- **Product URL**: [ON Semiconductor Product Page](https://www.onsemi.com/products/logic/shift-registers/mc74hc595a)

## Description

The MC74HC595A is an 8-bit serial-in, parallel-out shift register with output latches and tri-state outputs, manufactured by ON Semiconductor in a surface mount SOIC package. This device is functionally equivalent to the popular SN74HC595N but optimized for surface mount applications. It features separate shift and storage register clocks, allowing data to be shifted in serially while maintaining stable parallel outputs. The tri-state outputs enable multiple devices to share a common bus, making it ideal for LED displays, relay control, and general-purpose digital output expansion in surface mount designs.

## Specifications

### Electrical Characteristics
- **Supply Voltage (VCC)**: 2V ~ 6V (wide range operation)
- **Input Logic Levels**: TTL and CMOS compatible
- **Output Drive Current**: ±6mA per output (typical)
- **Maximum Clock Frequency**: Up to 25MHz @ 4.5V
- **Propagation Delay**: ~18ns typical @ 5V
- **Power Consumption**: Low power CMOS technology
- **Operating Temperature**: -40°C to +85°C

### Physical Characteristics  
- **Package**: 16-pin SOIC (Small Outline Integrated Circuit)
- **Dimensions**: 0.295" (7.5mm) width
- **Pin Pitch**: 0.050" (1.27mm)
- **Lead Material**: Standard SOIC leads
- **Mounting**: Surface mount technology (SMT)

### Key Features
- 8-bit serial-to-parallel shift register
- Separate shift register and storage register clocks
- Tri-state outputs for bus sharing capability
- Serial data output for cascading multiple devices
- Wide operating voltage range (2V-6V)
- High-speed CMOS technology
- TTL and CMOS logic level compatible
- Surface mount package for automated assembly

## Pinout Diagram

```
    MC74HC595A 16-Pin SOIC
    ┌─────────────────┐
QB  │1             16│ VCC
QC  │2             15│ QA
QD  │3             14│ SER
QE  │4             13│ OE
QF  │5             12│ RCLK
QG  │6             11│ SRCLK
QH  │7             10│ SRCLR
GND │8              9│ QH'
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | QB   | Parallel output B |
| 2   | QC   | Parallel output C |
| 3   | QD   | Parallel output D |
| 4   | QE   | Parallel output E |
| 5   | QF   | Parallel output F |
| 6   | QG   | Parallel output G |
| 7   | QH   | Parallel output H |
| 8   | GND  | Ground |
| 9   | QH'  | Serial output (for cascading) |
| 10  | SRCLR| Shift register clear (active LOW) |
| 11  | SRCLK| Shift register clock |
| 12  | RCLK | Register (latch) clock |
| 13  | OE   | Output enable (active LOW) |
| 14  | SER  | Serial data input |
| 15  | QA   | Parallel output A |
| 16  | VCC  | Power supply (+5V typical) |

## Applications

Common use cases for the MC74HC595A:
- Surface mount LED matrix and display control
- Digital output expansion for microcontrollers
- Seven-segment display multiplexing
- Cascaded shift register systems
- Bus driving and buffering applications
- Arduino and embedded system I/O expansion
- Industrial control and automation systems
- Compact PCB designs requiring SMT components

## Circuit Examples

### Basic SMT Arduino Interface
```
Arduino Pin 8 ---- SRCLK (Pin 11) - Shift Register Clock
Arduino Pin 9 ---- RCLK (Pin 12)  - Register Clock (Latch)
Arduino Pin 10 --- SER (Pin 14)   - Serial Data Input
Arduino Pin 11 --- OE (Pin 13)    - Output Enable (optional)
VCC (Pin 16) ---- +5V
GND (Pin 8) ---- Ground
SRCLR (Pin 10) ---- +5V (or control pin for reset)
```

### SMT LED Array Control
```
Each output (QA-QH) ---- Current Limiting Resistor (220Ω) ---- LED ---- GND
Provides 8 individually controllable LED outputs
Can be cascaded for larger LED arrays
Compact surface mount design
```

### Cascaded SMT Configuration
```
First MC74HC595A:
QH' (Pin 9) ---- SER (Pin 14) of second MC74HC595A
Common SRCLK and RCLK connections
Provides 16 outputs with same control pins
Efficient use of PCB space with SOIC packages
```

## Programming Examples

### Arduino Basic Control (Same as DIP version)
```cpp
#define DATA_PIN 10   // SER
#define CLOCK_PIN 8   // SRCLK
#define LATCH_PIN 9   // RCLK

void setup() {
  pinMode(DATA_PIN, OUTPUT);
  pinMode(CLOCK_PIN, OUTPUT);
  pinMode(LATCH_PIN, OUTPUT);
}

void shiftOut595(byte data) {
  digitalWrite(LATCH_PIN, LOW);
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, data);
  digitalWrite(LATCH_PIN, HIGH);
}

void loop() {
  // Light up LEDs in sequence
  for(int i = 0; i < 8; i++) {
    shiftOut595(1 << i);
    delay(200);
  }
}
```

### SMT LED Matrix Control
```cpp
// Control 8x8 LED matrix using cascaded MC74HC595A
void displayPattern(uint64_t pattern) {
  digitalWrite(LATCH_PIN, LOW);
  
  // Send 8 bytes for 8x8 matrix
  for(int row = 7; row >= 0; row--) {
    byte rowData = (pattern >> (row * 8)) & 0xFF;
    shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, rowData);
  }
  
  digitalWrite(LATCH_PIN, HIGH);
}
```

## Technical Notes

Important considerations for the MC74HC595A:
- **Surface Mount**: Requires SMT soldering techniques
- **PCB Design**: Consider trace routing for SOIC package
- **Power Supply**: Stable power supply essential for reliable operation
- **Decoupling**: Use 0.1µF ceramic capacitor close to VCC and GND
- **Output Current**: Each output can source/sink ~6mA safely
- **Cascading**: QH' output connects to SER input of next device
- **Clock Timing**: Ensure proper setup and hold times for reliable shifting

## Design Considerations

### Surface Mount Advantages
- **Compact Size**: Smaller footprint than DIP package
- **Automated Assembly**: Compatible with pick-and-place machines
- **Better Performance**: Shorter lead lengths reduce parasitic effects
- **Cost Effective**: Lower assembly costs in production
- **Higher Density**: More components per unit area

### PCB Layout Guidelines
- **Trace Width**: Use appropriate trace widths for current requirements
- **Via Placement**: Minimize vias in high-speed signal paths
- **Ground Plane**: Use solid ground plane for noise reduction
- **Decoupling**: Place decoupling capacitors close to power pins
- **Thermal Relief**: Consider thermal management for high current applications

## Comparison with SN74HC595N

| Parameter | MC74HC595A (SOIC) | SN74HC595N (DIP) |
|-----------|-------------------|------------------|
| Package | 16-SOIC | 16-DIP |
| Mounting | Surface Mount | Through-hole |
| Width | 0.295" (7.5mm) | 0.600" (15.24mm) |
| Pin Pitch | 0.050" (1.27mm) | 0.100" (2.54mm) |
| Function | Identical | Identical |
| Performance | Similar | Similar |

## Tags

shift-register, serial-to-parallel, io-expander, spi-compatible, soic-package, surface-mount, on-semiconductor #cabinet-3 #bin-35 #status-available

## Notes

The MC74HC595A in SOIC package is functionally identical to the popular SN74HC595N but optimized for surface mount applications. Having 31 of these ICs provides excellent capability for compact, high-density PCB designs requiring I/O expansion. The surface mount package offers advantages in automated assembly, smaller footprint, and better high-frequency performance due to shorter lead lengths. These components are perfect for production designs, compact embedded systems, and any application where board space is at a premium. The SOIC package requires SMT soldering techniques but enables much more compact and professional PCB layouts compared to through-hole alternatives.
