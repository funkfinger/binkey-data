---
type: electronic-component
category: Integrated Circuits
subcategory: Display Drivers
brand: Soviet Union
part_number: K155NA1
model: K155ИД1
description: Soviet BCD to Decimal Decoder/Driver for Nixie Tubes
manufacturer: Soviet Electronics Industry
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: 5V
current: 20mA per output
power: 100mW (typical)
interface: [TTL, BCD]
connectivity: [Nixie Tubes, Cold Cathode Displays]
compatibility: [74141 equivalent, Nixie clocks, retro displays]
location: [Cabinet-3/Bin-42/Section-B]
quantity: 10
status: available
price_range: Rare/Vintage
datasheet: Soviet-era documentation (limited availability)
product_url: N/A (vintage component)
tags:
  [
    nixie,
    driver,
    soviet,
    vintage,
    bcd-decoder,
    display-driver,
    k155,
    cabinet-3,
    bin-42,
    status-available,
  ]
date_added: 2025-01-13
---

# K155NA1 Soviet Nixie Tube Driver

## Details

- **Location**: Cabinet-3, Bin 42, Section B
- **Category**: Integrated Circuits - Display Drivers
- **Brand**: Soviet Union
- **Part Number**: K155NA1
- **Cyrillic Model**: K155ИД1
- **Package**: 16-pin DIP
- **Quantity**: 10
- **Status**: Available
- **Era**: Soviet-era (1970s-1980s)
- **Equivalent**: Western 74141 (functional equivalent)

## Description

The K155NA1 (Cyrillic: K155ИД1) is a Soviet-era BCD (Binary Coded Decimal) to decimal decoder/driver integrated circuit specifically designed for driving Nixie tubes and other cold cathode display devices. This IC converts 4-bit BCD input into one-of-ten outputs suitable for directly driving the cathodes of Nixie tubes. It's functionally equivalent to the Western 74141 but manufactured in the Soviet Union during the Cold War era. The actual chip markings use Cyrillic characters (K155ИД1).

## Specifications

### Electrical Characteristics

- **Operating Voltage**: +5V (TTL compatible)
- **Logic Family**: TTL-compatible
- **Output Current**: ~20mA per output (sink)
- **Power Consumption**: ~100mW typical
- **Output Type**: Open collector (current sink)
- **Input Type**: 4-bit BCD (Binary Coded Decimal)

### Physical Characteristics

- **Package**: 16-pin DIP (0.600" width)
- **Dimensions**: ~19.05mm x 6.35mm x 3.3mm
- **Weight**: ~2g
- **Operating Temperature**: 0°C to +70°C (typical Soviet spec)
- **Marking**: K155ИД1 (Cyrillic characters) with date codes

### Key Features

- BCD to decimal decoder/driver
- 10 open-collector outputs (0-9)
- TTL-compatible inputs
- Direct Nixie tube cathode drive capability
- High-voltage output capability (up to ~200V)
- Soviet military/industrial grade construction

## Applications

Common use cases and applications for this component:

- Nixie tube clocks and displays
- Vintage calculator displays
- Scientific instrument readouts
- Retro electronics projects
- Cold cathode display systems
- Soviet-era equipment restoration

## Pinout (16-pin DIP)

```
    K155NA1
   ┌─────────┐
A  │1      16│ VCC (+5V)
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

_Note: Exact pinout may vary - verify with original Soviet documentation_

## Circuit Examples

### Basic Nixie Tube Connection

```
BCD Input (A-D) ---- K155NA1 inputs
+5V -------------- Pin 16 (VCC)
GND -------------- Pin 8 (GND)
Nixie Cathodes ---- K155NA1 outputs (0-9)
Nixie Anode ------- +170V through current limiting resistor
```

### Typical Nixie Clock Application

```
Microcontroller BCD → K155NA1 → Nixie Tube Cathodes
                                      ↓
                              High Voltage Supply
                                 (+170V-200V)
```

## Programming Examples

### Arduino BCD Output for K155NA1

```cpp
// Define BCD output pins
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
  // Convert digit to BCD and output to K155NA1
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

- **Vintage Component**: These are Soviet-era ICs and may have different characteristics than modern equivalents
- **High Voltage**: Nixie tubes require 150-200V DC supply - use appropriate safety precautions
- **Current Limiting**: Always use current limiting resistors with Nixie tubes (typically 10-22kΩ)
- **Slow Switching**: Soviet ICs may have slower switching speeds than modern equivalents
- **Multiplexing**: When multiplexing multiple tubes, add "dead time" to prevent ghosting
- **Equivalent**: Can often be substituted with 74141, SN74141, or K155ID1 in many applications
- **Documentation**: Original Soviet datasheets are rare - use 74141 specifications as reference

## Historical Context

The K155 series was part of the Soviet Union's effort to create TTL-compatible logic families during the 1970s-1980s. These chips were manufactured for military, industrial, and consumer applications within the Soviet bloc. The K155NA1 specifically was used in calculators, scientific instruments, and display systems throughout the Eastern Bloc countries.

## Tags

nixie, driver, soviet, vintage, bcd-decoder, display-driver, k155 #cabinet-3 #bin-42 #status-available

## Notes

These are genuine Soviet-era components with historical significance. They're becoming increasingly rare and valuable to collectors and vintage electronics enthusiasts. While functionally similar to the Western 74141, they may have slightly different electrical characteristics and slower switching speeds. Perfect for authentic vintage Nixie clock projects or Soviet electronics restoration. Handle with care as replacements are difficult to find.
