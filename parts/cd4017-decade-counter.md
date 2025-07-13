---
type: electronic-component
category: Logic ICs
subcategory: Counters
brand: Various
part_number: CD4017
model: CD4017BE
description: CMOS decade counter/divider with 10 decoded outputs for sequencing and counting applications
manufacturer: Various (Texas Instruments, STMicroelectronics, etc.)
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: 3V ~ 15V
current: Low power CMOS consumption
power: Low power with wide voltage range
interface: [Digital Logic, Clock Input]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, TTL Compatible, 555 Timer, Oscillators]
location: [Cabinet-3/Bin-33/Section-H]
quantity: 2
status: available
price_range: $0.75-1.50
datasheet: https://www.ti.com/lit/ds/symlink/cd4017b.pdf
product_url: https://www.ti.com/product/CD4017B
tags: [counter-ic, decade-counter, sequencer, cmos, cd4017, johnson-counter, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# CD4017 - CMOS Decade Counter/Divider

## Details

- **Location**: Cabinet-3, Bin 33, Section H
- **Category**: Logic ICs
- **Brand**: Various (TI, STMicroelectronics, etc.)
- **Part Number**: CD4017 / CD4017BE
- **Package**: 16-DIP
- **Quantity**: 2
- **Status**: Available
- **Price Range**: $0.75-1.50
- **Datasheet**: [CD4017B Datasheet](https://www.ti.com/lit/ds/symlink/cd4017b.pdf)
- **Product URL**: https://www.ti.com/product/CD4017B

## Description

The CD4017 is a CMOS Johnson decade counter with 10 decoded outputs. It advances through a sequence of 10 states (0-9) on each positive clock edge, with only one output being HIGH at any given time while all others remain LOW. After reaching the 9th state, it automatically resets to the 0th state on the next clock pulse. This makes it ideal for sequential LED displays, frequency division, and various timing applications where a repeating 10-step sequence is needed.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: 3V ~ 15V (wide voltage range)
- **Supply Current**: Very low (µA range in static conditions)
- **Output Current**: 10-20mA per output (typical)
- **Clock Frequency**: DC to several MHz
- **Propagation Delay**: ~100ns @ 10V, ~200ns @ 5V
- **Input Threshold**: 0.3 × VDD (LOW), 0.7 × VDD (HIGH)

### Physical Characteristics  
- **Package**: 16-DIP (Dual In-line Package)
- **Dimensions**: 0.600" (15.24mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -55°C to +125°C

### Key Features
- Johnson decade counter (divide-by-10)
- 10 decoded outputs (Q0-Q9)
- Asynchronous reset capability
- Wide operating voltage range
- Low power CMOS technology
- TTL compatible inputs and outputs

## Pinout Diagram

```
    CD4017 16-Pin DIP
    ┌─────────────────┐
Q5  │1             16│ VDD
Q1  │2             15│ RESET
Q0  │3             14│ CLOCK
Q2  │4             13│ CLOCK ENABLE
Q6  │5             12│ CARRY OUT
Q7  │6             11│ Q9
Q3  │7             10│ Q4
VSS │8              9│ Q8
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | Q5   | Output 5 |
| 2   | Q1   | Output 1 |
| 3   | Q0   | Output 0 (initial state) |
| 4   | Q2   | Output 2 |
| 5   | Q6   | Output 6 |
| 6   | Q7   | Output 7 |
| 7   | Q3   | Output 3 |
| 8   | VSS  | Ground (0V) |
| 9   | Q8   | Output 8 |
| 10  | Q4   | Output 4 |
| 11  | Q9   | Output 9 |
| 12  | CARRY OUT | Goes HIGH during Q5-Q9 states |
| 13  | CLOCK ENABLE | Enable/disable clock (active LOW) |
| 14  | CLOCK | Clock input (positive edge triggered) |
| 15  | RESET | Asynchronous reset (active HIGH) |
| 16  | VDD  | Positive power supply |

## Operation Sequence

**Count Sequence (Q0 through Q9):**
| Clock Pulse | Active Output | State |
|-------------|---------------|-------|
| 0 (Reset)   | Q0           | 0     |
| 1           | Q1           | 1     |
| 2           | Q2           | 2     |
| 3           | Q3           | 3     |
| 4           | Q4           | 4     |
| 5           | Q5           | 5     |
| 6           | Q6           | 6     |
| 7           | Q7           | 7     |
| 8           | Q8           | 8     |
| 9           | Q9           | 9     |
| 10          | Q0           | 0 (repeats) |

## Applications

Common use cases for the CD4017:
- LED chasers and sequencers (Knight Rider effects)
- Frequency dividers (divide by 10)
- Digital counters and displays
- Sequential control systems
- State machines and timing circuits
- Sound and light show controllers
- Educational electronics projects
- Cascaded counting systems

## Circuit Examples

### Basic LED Chaser Circuit
```
555 Timer ---- Clock (Pin 14)
VDD ---- Reset (Pin 15) via 10kΩ resistor
GND ---- Clock Enable (Pin 13)
Each Q output ---- LED + Current Limiting Resistor ---- GND
```

### Frequency Divider
```
Input Signal ---- Clock (Pin 14)
Carry Out (Pin 12) ---- Output (1/10 frequency)
VDD ---- Reset (Pin 15) via 10kΩ resistor
GND ---- Clock Enable (Pin 13)
```

### Cascaded Counter (Count to 100)
```
CD4017 #1 Carry Out ---- CD4017 #2 Clock Input
Common VDD, GND, and Reset connections
Provides 100 unique states (10 × 10)
```

## Programming Examples

### Arduino Control Example
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
  // Generate clock pulses
  digitalWrite(CLOCK_PIN, HIGH);
  delay(500);
  digitalWrite(CLOCK_PIN, LOW);
  delay(500);
}
```

### Variable Speed Sequencer
```cpp
int speed = 100; // milliseconds between steps

void loop() {
  digitalWrite(CLOCK_PIN, HIGH);
  delayMicroseconds(10); // Short pulse
  digitalWrite(CLOCK_PIN, LOW);
  delay(speed);
  
  // Vary speed based on potentiometer
  speed = analogRead(A0);
}
```

## Technical Notes

Important considerations for the CD4017:
- **Reset on Power-up**: Always include reset circuitry for predictable startup
- **Clock Enable**: Tie to GND for normal operation, or use for gating
- **Carry Out**: Useful for cascading multiple CD4017s
- **Output Current**: Use current limiting resistors for LED loads
- **Decoupling**: Use 0.1µF capacitor between VDD and VSS
- **Clock Signal**: Ensure clean clock edges for reliable operation

## Tags

counter-ic, decade-counter, sequencer, cmos, cd4017, johnson-counter #cabinet-3 #bin-33 #status-available

## Notes

The CD4017 is one of the most popular and versatile counter ICs in electronics. Having 2 of these chips provides excellent flexibility for creating sequential displays, frequency dividers, and timing circuits. The wide voltage range (3V-15V) makes them compatible with both 5V and higher voltage systems. They're perfect for learning digital logic concepts, creating visual effects with LEDs, and building timing circuits. The Johnson counter architecture ensures that only one output is active at a time, making it ideal for multiplexing applications and sequential control systems. These ICs are excellent for both educational projects and practical applications where reliable sequential operation is needed.
