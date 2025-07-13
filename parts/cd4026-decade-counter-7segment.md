---
type: electronic-component
category: Logic ICs
subcategory: Counters
brand: Various
part_number: CD4026
model: CD4026BE
description: CMOS decade counter with 7-segment display decoder for driving common-cathode displays
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: 3V ~ 15V
current: Low power CMOS consumption
power: Low power with wide voltage range
interface: [Digital Logic, Clock Input, 7-Segment Display]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible, 7-Segment Displays, LED Displays]
location: [Cabinet-3/Bin-33/Section-F]
quantity: 1
status: available
price_range: $0.75-1.50
datasheet: https://www.ti.com/lit/ds/symlink/cd4026b.pdf
product_url: https://www.ti.com/product/CD4026B
tags: [counter-ic, decade-counter, 7-segment-decoder, display-driver, cmos, cd4026, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# CD4026 - CMOS Decade Counter with 7-Segment Display Decoder

## Details

- **Location**: Cabinet-3, Bin 33, Section F
- **Category**: Logic ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: CD4026 / CD4026BE
- **Package**: 16-DIP
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $0.75-1.50
- **Datasheet**: [CD4026B Datasheet](https://www.ti.com/lit/ds/symlink/cd4026b.pdf)
- **Product URL**: https://www.ti.com/product/CD4026B

## Description

The CD4026 is a CMOS decade counter with an integrated 7-segment display decoder. It counts from 0 to 9 on each positive clock edge and directly drives the segments of a common-cathode 7-segment LED display. Unlike the CD4017 which has individual decoded outputs, the CD4026 outputs the appropriate segment patterns (a-g) to display decimal digits 0-9. This makes it ideal for digital clocks, counters, and any application requiring numeric display without external decoding logic.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 3V ~ 15V (wide voltage range)
- **Supply Current**: Very low (µA range in static conditions)
- **Output Current**: 10-20mA per segment (typical)
- **Clock Frequency**: DC to several MHz
- **Propagation Delay**: ~100ns @ 10V, ~200ns @ 5V
- **Input Threshold**: 0.3 × VDD (LOW), 0.7 × VDD (HIGH)

### Physical Characteristics  
- **Package**: 16-DIP (Dual In-line Package)
- **Dimensions**: 0.600" (15.24mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -55°C to +125°C

### Key Features
- Decade counter (0-9) with 7-segment decoder
- Direct drive for common-cathode 7-segment displays
- Carry output for cascading multiple counters
- Clock enable and reset inputs
- Wide operating voltage range
- Low power CMOS technology

## Pinout Diagram

```
    CD4026 16-Pin DIP
    ┌─────────────────┐
CLK │1             16│ VDD
CLK │2             15│ f
RST │3             14│ g
VDD │4             13│ a
UNG │5             12│ b
UNG │6             11│ c
UNG │7             10│ d
VSS │8              9│ e
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | CLK  | Clock input (positive edge triggered) |
| 2   | CLK  | Clock inhibit (active HIGH) |
| 3   | RST  | Reset input (active HIGH) |
| 4   | VDD  | Positive power supply |
| 5   | UNG  | Ungated "C" segment output |
| 6   | UNG  | Ungated "C" segment output |
| 7   | UNG  | Ungated "C" segment output |
| 8   | VSS  | Ground (0V) |
| 9   | e    | Segment e output |
| 10  | d    | Segment d output |
| 11  | c    | Segment c output |
| 12  | b    | Segment b output |
| 13  | a    | Segment a output |
| 14  | g    | Segment g output |
| 15  | f    | Segment f output |
| 16  | VDD  | Positive power supply |

## 7-Segment Display Patterns

**Digit Display Patterns (segments a-g):**
| Digit | a | b | c | d | e | f | g | Display |
|-------|---|---|---|---|---|---|---|---------|
| 0     | 1 | 1 | 1 | 1 | 1 | 1 | 0 | ⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜ |
| 1     | 0 | 1 | 1 | 0 | 0 | 0 | 0 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| 2     | 1 | 1 | 0 | 1 | 1 | 0 | 1 | ⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| 3     | 1 | 1 | 1 | 1 | 0 | 0 | 1 | ⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜ |
| 4     | 0 | 1 | 1 | 0 | 0 | 1 | 1 | ⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜ |
| 5     | 1 | 0 | 1 | 1 | 0 | 1 | 1 | ⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜ |
| 6     | 1 | 0 | 1 | 1 | 1 | 1 | 1 | ⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜ |
| 7     | 1 | 1 | 1 | 0 | 0 | 0 | 0 | ⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜ |
| 8     | 1 | 1 | 1 | 1 | 1 | 1 | 1 | ⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜ |
| 9     | 1 | 1 | 1 | 1 | 0 | 1 | 1 | ⬜⬜⬜<br>⬜&nbsp;&nbsp;&nbsp;⬜<br>⬜⬜⬜<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬜ |

## Applications

Common use cases for the CD4026:
- Digital clocks and timers
- Event counters with numeric display
- Frequency counters
- Digital voltmeters and panel meters
- Score displays and scoreboards
- Educational electronics projects
- Multi-digit counting systems (when cascaded)
- Process control indicators

## Circuit Examples

### Basic Digital Counter
```
555 Timer ---- Clock (Pin 1)
VDD ---- Reset (Pin 3) via 10kΩ resistor
Each segment output ---- Current Limiting Resistor ---- 7-Segment Display
Common cathode of display ---- GND
```

### Cascaded Multi-Digit Counter
```
CD4026 #1 Carry Out ---- CD4026 #2 Clock Input
CD4026 #2 Carry Out ---- CD4026 #3 Clock Input
Common VDD, GND, and Reset connections
Each IC drives one digit of multi-digit display
```

### Event Counter with Reset Button
```
Input Signal ---- Clock (Pin 1)
Reset Button ---- Reset (Pin 3)
10kΩ pulldown on Reset pin
Each segment ---- 330Ω resistor ---- 7-Segment Display
```

## Programming Examples

### Arduino-Controlled Counter
```cpp
#define CLOCK_PIN 2
#define RESET_PIN 3

void setup() {
  pinMode(CLOCK_PIN, OUTPUT);
  pinMode(RESET_PIN, OUTPUT);
  
  // Reset the counter
  digitalWrite(RESET_PIN, HIGH);
  delay(1);
  digitalWrite(RESET_PIN, LOW);
}

void loop() {
  // Count up every second
  digitalWrite(CLOCK_PIN, HIGH);
  delay(10); // Short pulse
  digitalWrite(CLOCK_PIN, LOW);
  delay(1000);
}
```

### Frequency Counter Display
```cpp
volatile int pulseCount = 0;

void setup() {
  pinMode(2, INPUT_PULLUP); // Input signal
  pinMode(3, OUTPUT);       // Clock to CD4026
  pinMode(4, OUTPUT);       // Reset to CD4026
  
  attachInterrupt(0, countPulse, RISING);
}

void countPulse() {
  pulseCount++;
}

void loop() {
  // Reset display
  digitalWrite(4, HIGH);
  delay(1);
  digitalWrite(4, LOW);
  
  // Send pulses to display count
  for(int i = 0; i < pulseCount; i++) {
    digitalWrite(3, HIGH);
    delay(1);
    digitalWrite(3, LOW);
    delay(1);
  }
  
  pulseCount = 0;
  delay(1000);
}
```

## Technical Notes

Important considerations for the CD4026:
- **Common Cathode**: Designed for common-cathode 7-segment displays only
- **Current Limiting**: Always use current limiting resistors for each segment
- **Carry Output**: Available for cascading multiple digits
- **Reset Behavior**: Reset sets display to "0" and clears internal counter
- **Clock Inhibit**: Pin 2 can be used to gate the clock signal
- **Decoupling**: Use 0.1µF capacitor between VDD and VSS

## Tags

counter-ic, decade-counter, 7-segment-decoder, display-driver, cmos, cd4026 #cabinet-3 #bin-33 #status-available

## Notes

The CD4026 is an excellent choice when you need a simple numeric display without external decoding logic. Having this IC in your collection provides a direct solution for displaying decimal digits 0-9 on 7-segment displays. It's perfect for digital clocks, counters, and measurement displays. The integrated decoder eliminates the need for separate counter and decoder ICs, simplifying circuit design and reducing component count. This IC pairs well with the CD4017 decade counter already in your collection - use the CD4017 for sequential control and the CD4026 for numeric display applications.
