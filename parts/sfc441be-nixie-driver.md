---
type: electronic-component
category: Integrated Circuits
subcategory: Display Drivers
brand: SESCOSEM
part_number: SFC441BE
model: SFC 441 BE 7441A
description: European BCD to Decimal Decoder/Driver for Nixie Tubes
manufacturer: SESCOSEM (Poland/Eastern Europe)
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: 12V (typical)
current: 10-20mA per output
power: 200mW (typical)
interface: [TTL, BCD]
connectivity: [Nixie Tubes, Cold Cathode Displays]
compatibility: [SN7441 equivalent, Nixie clocks, retro displays]
location: [Cabinet-3/Bin-42/Section-C]
quantity: 2
status: available
price_range: Rare/Vintage
datasheet: Limited availability (Eastern European documentation)
product_url: N/A (vintage component)
tags: [nixie, driver, sescosem, european, bcd-decoder, display-driver, sfc441, cabinet-3, bin-42, status-available]
date_added: 2025-01-13
---

# SFC441BE SESCOSEM Nixie Tube Driver

## Details

- **Location**: Cabinet-3, Bin 42, Section C
- **Category**: Integrated Circuits - Display Drivers
- **Brand**: SESCOSEM (Poland/Eastern Europe)
- **Part Number**: SFC441BE
- **Chip Marking**: SFC 441 BE 7441A
- **Package**: 16-pin DIP
- **Quantity**: 2
- **Status**: Available
- **Era**: 1970s-1980s (Eastern European)
- **Equivalent**: SN7441 (functional equivalent)

## Description

The SFC441BE is a rare Eastern European BCD (Binary Coded Decimal) to decimal decoder/driver integrated circuit manufactured by SESCOSEM in Poland during the 1970s-1980s. This IC was designed specifically for driving Nixie tubes and other cold cathode display devices. It converts 4-bit BCD input into one-of-ten outputs suitable for directly driving the cathodes of Nixie tubes. The chip is functionally equivalent to the Western SN7441 but was manufactured for the Eastern European market during the Cold War era.

## Specifications

### Electrical Characteristics
- **Operating Voltage**: +12V (typical, higher than standard TTL)
- **Logic Family**: TTL-compatible inputs
- **Output Current**: 10-20mA per output (sink)
- **Power Consumption**: ~200mW typical
- **Output Type**: Open collector (current sink)
- **Input Type**: 4-bit BCD (Binary Coded Decimal)
- **High Voltage Capability**: Designed for direct Nixie tube drive

### Physical Characteristics  
- **Package**: 16-pin DIP (0.600" width)
- **Dimensions**: ~19.05mm x 6.35mm x 3.3mm
- **Weight**: ~2g
- **Operating Temperature**: 0°C to +70°C (typical industrial spec)
- **Marking**: SFC 441 BE 7441A with date codes

### Key Features
- BCD to decimal decoder/driver
- 10 open-collector outputs (0-9)
- Higher voltage operation than standard TTL
- Direct Nixie tube cathode drive capability
- European/Eastern European industrial grade construction
- SN7441 functional equivalent

## Applications

Common use cases and applications for this component:
- Nixie tube clocks and displays
- Vintage calculator displays
- Scientific instrument readouts
- Eastern European equipment restoration
- Cold cathode display systems
- Industrial control panels

## Pinout (16-pin DIP)

```
    SFC441BE
   ┌─────────┐
A  │1      16│ VCC (+12V)
B  │2      15│ Output 0
C  │3      14│ Output 1  
D  │4      13│ Output 2
   │5      12│ Output 3
   │6      11│ Output 4
   │7      10│ Output 5
GND│8       9│ Output 6
   └─────────┘
   
Additional outputs 7, 8, 9 on remaining pins
```

*Note: Pinout similar to SN7441 but verify with original documentation*

## Circuit Examples

### Basic Nixie Tube Connection
```
BCD Input (A-D) ---- SFC441BE inputs
+12V -------------- Pin 16 (VCC)
GND --------------- Pin 8 (GND)
Nixie Cathodes ----- SFC441BE outputs (0-9)
Nixie Anode -------- +170V through current limiting resistor
```

### Typical Nixie Clock Application
```
Microcontroller BCD → SFC441BE → Nixie Tube Cathodes
                                      ↓
                              High Voltage Supply
                                 (+170V-200V)
```

## Programming Examples

### Arduino BCD Output for SFC441BE
```cpp
// Define BCD output pins for SFC441BE
#define BCD_A 2
#define BCD_B 3  
#define BCD_C 4
#define BCD_D 5

void setup() {
  pinMode(BCD_A, OUTPUT);
  pinMode(BCD_B, OUTPUT);
  pinMode(BCD_C, OUTPUT);
  pinMode(BCD_D, OUTPUT);
}

void displayDigit(int digit) {
  // Convert digit to BCD and output to SFC441BE
  digitalWrite(BCD_A, digit & 0x01);
  digitalWrite(BCD_B, (digit >> 1) & 0x01);
  digitalWrite(BCD_C, (digit >> 2) & 0x01);
  digitalWrite(BCD_D, (digit >> 3) & 0x01);
}

void loop() {
  // Count 0-9 on nixie tube
  for(int i = 0; i < 10; i++) {
    displayDigit(i);
    delay(1000);
  }
}
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Rare Component**: These are Eastern European ICs with very limited availability
- **Higher Voltage**: Operates at +12V unlike standard +5V TTL logic
- **High Voltage**: Nixie tubes require 150-200V DC supply - use appropriate safety precautions
- **Current Limiting**: Always use current limiting resistors with Nixie tubes (typically 10-22kΩ)
- **SN7441 Equivalent**: Can often be substituted with SN7441 but check voltage requirements
- **Documentation**: Original SESCOSEM datasheets are extremely rare
- **Testing**: Seller verified functionality using neon bulbs as test loads
- **Multiplexing**: When multiplexing multiple tubes, add "dead time" to prevent ghosting

## Historical Context

SESCOSEM was a Polish semiconductor manufacturer that was part of Eastern Europe's electronics industry during the Cold War era. In 1968, Poland contracted with SESCOSEM to create one of the largest and most modern IC production capabilities in Eastern Europe. The company produced TTL-compatible integrated circuits for the Eastern Bloc countries. The SFC441BE represents the Eastern European approach to nixie tube driver technology, designed to compete with Western equivalents like the SN7441.

## Tags

nixie, driver, sescosem, european, bcd-decoder, display-driver, sfc441 #cabinet-3 #bin-42 #status-available

## Notes

These are extremely rare Eastern European nixie tube driver ICs from SESCOSEM in Poland. The seller on the Polish site verified their functionality using neon bulbs as test loads, confirming they work properly for driving nixie tubes. The marking "SFC 441 BE 7441A" suggests compatibility with the 7441 series. These chips represent a fascinating piece of Cold War electronics history and are becoming increasingly difficult to find. Perfect for authentic vintage nixie clock projects or Eastern European electronics restoration.
