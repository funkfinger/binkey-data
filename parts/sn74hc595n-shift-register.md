---
type: electronic-component
category: Logic ICs
subcategory: Shift Registers
brand: Texas Instruments
part_number: SN74HC595N
model: SN74HC595N
description: 8-bit serial-in parallel-out shift register with tri-state outputs for I/O expansion
manufacturer: Texas Instruments
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: 2V ~ 6V wide supply range
current: Low power CMOS consumption
power: High-speed CMOS technology with low power
interface: [Serial Input, Parallel Output, SPI Compatible]
connectivity: [Through-hole pins]
compatibility: [Microcontrollers, Arduino, TTL Logic, CMOS Logic]
location: [Cabinet-3/Bin-38/Section-C]
quantity: 52
status: available
price_range: $0.70-1.40
datasheet: https://www.ti.com/lit/gpn/sn74hc595
product_url: https://www.digikey.com/en/products/detail/texas-instruments/SN74HC595N/277246
supplier: Digikey (high reliability source)
tags: [shift-register, serial-to-parallel, io-expander, spi-compatible, texas-instruments, digikey-sourced, cabinet-3, bin-38, status-available]
date_added: 2025-01-13
---

# SN74HC595N - 8-Bit Serial-In Parallel-Out Shift Register

## Details

- **Location**: Cabinet-3, Bin 38, Section C
- **Category**: Logic ICs
- **Brand**: Texas Instruments
- **Part Number**: SN74HC595N
- **Package**: 16-DIP
- **Quantity**: 52
- **Status**: Available
- **Price Range**: $0.70-1.40
- **Supplier**: **Digikey (high reliability source)**
- **Datasheet**: [SN74HC595 Datasheet](https://www.ti.com/lit/gpn/sn74hc595)
- **Product URL**: [Digikey Product Page](https://www.digikey.com/en/products/detail/texas-instruments/SN74HC595N/277246)

## Description

The SN74HC595N is an 8-bit serial-in, parallel-out shift register with output latches and tri-state outputs. This versatile IC is designed for I/O expansion applications where a microcontroller needs to control multiple outputs using minimal pins. The device features separate shift and storage register clocks, allowing data to be shifted in serially while maintaining stable parallel outputs. The tri-state outputs enable multiple devices to share a common bus, making it ideal for LED displays, relay control, and general-purpose digital output expansion.

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
- **Package**: 16-pin DIP (Dual In-line Package)
- **Dimensions**: 0.600" (15.24mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Lead Material**: Standard DIP leads

### Key Features
- 8-bit serial-to-parallel shift register
- Separate shift register and storage register clocks
- Tri-state outputs for bus sharing capability
- Serial data output for cascading multiple devices
- Wide operating voltage range (2V-6V)
- High-speed CMOS technology
- TTL and CMOS logic level compatible

## Pinout Diagram

```
    SN74HC595N 16-Pin DIP
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

Common use cases for the SN74HC595N:
- LED matrix and display control
- Digital output expansion for microcontrollers
- Relay and solenoid driver interfaces
- Seven-segment display multiplexing
- Cascaded shift register systems
- Bus driving and buffering applications
- Arduino and embedded system I/O expansion
- Industrial control and automation systems

## Circuit Examples

### Basic Arduino Interface
```
Arduino Pin 8 ---- SRCLK (Pin 11) - Shift Register Clock
Arduino Pin 9 ---- RCLK (Pin 12)  - Register Clock (Latch)
Arduino Pin 10 --- SER (Pin 14)   - Serial Data Input
Arduino Pin 11 --- OE (Pin 13)    - Output Enable (optional)
VCC (Pin 16) ---- +5V
GND (Pin 8) ---- Ground
SRCLR (Pin 10) ---- +5V (or control pin for reset)
```

### LED Array Control
```
Each output (QA-QH) ---- Current Limiting Resistor (220Ω) ---- LED ---- GND
Provides 8 individually controllable LED outputs
Can be cascaded for larger LED arrays
```

### Cascaded Configuration
```
First 74HC595:
QH' (Pin 9) ---- SER (Pin 14) of second 74HC595
Common SRCLK and RCLK connections
Provides 16 outputs with same control pins
```

## Programming Examples

### Arduino Basic Control
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

### LED Chaser Pattern
```cpp
void ledChaser() {
  byte patterns[] = {
    0b00000001, 0b00000010, 0b00000100, 0b00001000,
    0b00010000, 0b00100000, 0b01000000, 0b10000000,
    0b01000000, 0b00100000, 0b00010000, 0b00001000,
    0b00000100, 0b00000010
  };
  
  for(int i = 0; i < 14; i++) {
    shiftOut595(patterns[i]);
    delay(100);
  }
}
```

### Cascaded 16-bit Control
```cpp
void shiftOut16(uint16_t data) {
  digitalWrite(LATCH_PIN, LOW);
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, (data >> 8));   // High byte
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, (data & 0xFF)); // Low byte
  digitalWrite(LATCH_PIN, HIGH);
}
```

## Technical Notes

Important considerations for the SN74HC595N:
- **Power Supply**: Stable power supply essential for reliable operation
- **Decoupling**: Use 0.1µF ceramic capacitor between VCC and GND
- **Output Current**: Each output can source/sink ~6mA safely
- **Cascading**: QH' output connects to SER input of next device
- **Clock Timing**: Ensure proper setup and hold times for reliable shifting
- **Output Enable**: Use OE pin for blanking displays during updates

## Design Considerations

### Current Limiting
- **LED Applications**: Always use current limiting resistors
- **Total Current**: Consider total current draw from all active outputs
- **Power Dissipation**: Monitor IC temperature with high current loads

### Timing Requirements
- **Setup Time**: Data must be stable before clock edge
- **Hold Time**: Data must remain stable after clock edge
- **Clock Frequency**: Higher frequencies require stable power supply
- **Latch Timing**: RCLK pulse transfers shift register to output latches

## Tags

shift-register, serial-to-parallel, io-expander, spi-compatible, texas-instruments, digikey-sourced #cabinet-3 #bin-38 #status-available

## Notes

The SN74HC595N is one of the most popular and versatile shift register ICs in electronics. Having 52 of these high-quality Digikey-sourced units provides exceptional capability for I/O expansion projects. These ICs are perfect for LED displays, relay control, and any application requiring multiple digital outputs from minimal microcontroller pins. The tri-state outputs and cascading capability make them ideal for building large-scale display systems and control interfaces. The wide voltage range (2V-6V) ensures compatibility with both 3.3V and 5V systems. This substantial quantity enables multiple simultaneous projects and provides excellent backup availability for critical applications. The Digikey sourcing ensures authentic, reliable components with consistent performance across all units.
