---
type: electronic-component
category: Analog ICs
subcategory: Operational Amplifiers
brand: Texas Instruments
part_number: LM324N
model: LM324N
description: Quad operational amplifier with single supply operation and ground-sensing capability for general-purpose applications
manufacturer: Texas Instruments
package: 14-DIP
size: 0.600" (15.24mm) width
voltage: 3V ~ 32V single supply or ±1.5V ~ ±16V dual supply
current: Low input bias current (-20nA typical)
power: Low power consumption with wide supply range
interface: [Analog Signal Processing, Single Supply Operation]
connectivity: [Through-hole pins]
compatibility: [General-purpose circuits, Audio applications, Signal conditioning, Single-supply systems]
location: [Cabinet-3/Bin-33/Section-J]
quantity: 1
status: available
price_range: $0.50-1.50
datasheet: https://www.ti.com/lit/gpn/lm324
product_url: https://www.ti.com/product/LM324
tags: [quad-opamp, single-supply, ground-sensing, general-purpose, texas-instruments, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# LM324N - Quad General-Purpose Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 33, Section J
- **Category**: Analog ICs
- **Brand**: Texas Instruments
- **Part Number**: LM324N
- **Package**: 14-DIP
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $0.50-1.50
- **Datasheet**: [LM324 Datasheet](https://www.ti.com/lit/gpn/lm324)
- **Product URL**: [TI Product Page](https://www.ti.com/product/LM324)

## Description

The LM324N is a quad operational amplifier that provides four independent op-amps in a single 14-pin DIP package. Designed for single supply operation, it can operate from a single 3V to 32V supply or dual supplies of ±1.5V to ±16V. The key feature of the LM324 is its ability to operate with inputs at ground potential and output swing down to ground, making it ideal for single-supply applications. This classic general-purpose op-amp has been widely used for decades in audio, signal conditioning, and general analog circuit applications.

## Specifications

### Electrical Characteristics
- **Supply Voltage**: 3V to 32V single supply, ±1.5V to ±16V dual supply
- **Input Offset Voltage**: 3mV typical, 7mV maximum
- **Input Bias Current**: -20nA typical, -300nA maximum
- **Input Common-Mode Range**: 0V to (VCC - 1.5V)
- **Output Voltage Swing**: 0V to (VCC - 1.5V)
- **Large Signal Voltage Gain**: 100dB typical
- **Unity Gain Bandwidth**: 1MHz typical
- **Slew Rate**: 0.5V/µs typical

### Physical Characteristics  
- **Package**: 14-pin DIP (Dual In-line Package)
- **Dimensions**: 0.600" (15.24mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: 0°C to +70°C (commercial), -40°C to +85°C (industrial)
- **Lead Material**: Standard DIP leads

### Key Features
- Four independent operational amplifiers
- Single supply operation capability
- Input common-mode range includes ground
- Output can swing to ground potential
- Internally frequency compensated
- Wide supply voltage range
- Low power consumption

## Pinout Diagram

```
    LM324N 14-Pin DIP
    ┌─────────────────┐
OUT1│1             14│ OUT4
IN1-│2             13│ IN4-
IN1+│3             12│ IN4+
VCC │4             11│ VCC
IN2+│5             10│ IN3+
IN2-│6              9│ IN3-
OUT2│7              8│ OUT3
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | OUT1 | Output of amplifier 1 |
| 2   | IN1- | Inverting input of amplifier 1 |
| 3   | IN1+ | Non-inverting input of amplifier 1 |
| 4   | VCC  | Positive power supply |
| 5   | IN2+ | Non-inverting input of amplifier 2 |
| 6   | IN2- | Inverting input of amplifier 2 |
| 7   | OUT2 | Output of amplifier 2 |
| 8   | OUT3 | Output of amplifier 3 |
| 9   | IN3- | Inverting input of amplifier 3 |
| 10  | IN3+ | Non-inverting input of amplifier 3 |
| 11  | VCC  | Positive power supply (connected to pin 4) |
| 12  | IN4+ | Non-inverting input of amplifier 4 |
| 13  | IN4- | Inverting input of amplifier 4 |
| 14  | OUT4 | Output of amplifier 4 |

Note: Ground (VSS) connection is typically made through the circuit board ground plane.

## Applications

Common use cases for the LM324N:
- General-purpose amplification circuits
- Single-supply signal conditioning
- Audio preamplifiers and mixers
- Active filters and equalizers
- Voltage followers and buffers
- Comparator circuits (with external feedback)
- Sensor signal conditioning
- Battery-powered applications

## Circuit Examples

### Basic Non-Inverting Amplifier
```
Input Signal ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- Feedback Network ---- OUT1 (Pin 1)
Single supply: VCC (Pin 4) to +12V, VSS to Ground
Gain = 1 + (Rf/Rg)
```

### Quad Audio Mixer
```
Audio Input 1 ---- Amplifier 1 (Pins 2,3,1)
Audio Input 2 ---- Amplifier 2 (Pins 5,6,7)
Audio Input 3 ---- Amplifier 3 (Pins 9,10,8)
Audio Input 4 ---- Amplifier 4 (Pins 12,13,14)
All outputs summed through resistor network
```

### Active Low-Pass Filter
```
Input ---- R1 ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- R2 ---- OUT1 (Pin 1)
C1 from IN1+ to ground
C2 from IN1- to OUT1
Sallen-Key topology for smooth response
```

### Single-Supply Voltage Follower
```
Input Signal ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- OUT1 (Pin 1) (unity gain feedback)
VCC = +9V, VSS = Ground
Output follows input with high input impedance
```

## Programming Examples

### Arduino-Based Multi-Channel Monitor
```cpp
// Monitor four analog channels through LM324 amplifiers
#define CHANNEL_1 A0
#define CHANNEL_2 A1
#define CHANNEL_3 A2
#define CHANNEL_4 A3

void setup() {
  Serial.begin(9600);
  analogReference(EXTERNAL); // Use external reference
}

void loop() {
  // Read all four channels
  int ch1 = analogRead(CHANNEL_1);
  int ch2 = analogRead(CHANNEL_2);
  int ch3 = analogRead(CHANNEL_3);
  int ch4 = analogRead(CHANNEL_4);
  
  // Convert to voltages
  float v1 = (ch1 * 5.0) / 1023.0;
  float v2 = (ch2 * 5.0) / 1023.0;
  float v3 = (ch3 * 5.0) / 1023.0;
  float v4 = (ch4 * 5.0) / 1023.0;
  
  // Display results
  Serial.print("CH1: "); Serial.print(v1, 2); Serial.print("V  ");
  Serial.print("CH2: "); Serial.print(v2, 2); Serial.print("V  ");
  Serial.print("CH3: "); Serial.print(v3, 2); Serial.print("V  ");
  Serial.print("CH4: "); Serial.print(v4, 2); Serial.println("V");
  
  delay(500);
}
```

### Signal Quality Analyzer
```cpp
void analyzeSignalQuality() {
  static int samples[4][50]; // 50 samples per channel
  static int index = 0;
  
  // Collect samples from all channels
  samples[0][index] = analogRead(CHANNEL_1);
  samples[1][index] = analogRead(CHANNEL_2);
  samples[2][index] = analogRead(CHANNEL_3);
  samples[3][index] = analogRead(CHANNEL_4);
  
  index = (index + 1) % 50;
  
  // Calculate statistics for each channel
  for(int ch = 0; ch < 4; ch++) {
    long sum = 0;
    int min_val = 1023, max_val = 0;
    
    for(int i = 0; i < 50; i++) {
      sum += samples[ch][i];
      if(samples[ch][i] < min_val) min_val = samples[ch][i];
      if(samples[ch][i] > max_val) max_val = samples[ch][i];
    }
    
    int avg = sum / 50;
    int range = max_val - min_val;
    
    Serial.print("CH"); Serial.print(ch+1);
    Serial.print(" Avg:"); Serial.print(avg);
    Serial.print(" Range:"); Serial.print(range);
    Serial.print("  ");
  }
  Serial.println();
}
```

## Technical Notes

Important considerations for the LM324N:
- **Single Supply**: Designed for single supply operation
- **Ground Sensing**: Inputs can go to ground potential
- **Output Swing**: Output can swing to within 1.5V of supply rails
- **Frequency Compensation**: Internally compensated for unity gain
- **Power Supply**: Use 0.1µF ceramic capacitor for decoupling
- **Input Protection**: Consider input protection for sensitive applications

## Design Considerations

### Single Supply Applications
- **Input Biasing**: May need input bias for AC-coupled signals
- **Output Range**: Output cannot swing to negative voltages
- **Common Mode**: Input common mode range includes ground
- **Coupling**: Consider AC or DC coupling requirements

### General Purpose Use
- **Gain-Bandwidth**: 1MHz unity gain bandwidth suitable for audio
- **Slew Rate**: 0.5V/µs adequate for most general applications
- **Offset Voltage**: 3mV typical offset suitable for many applications
- **Temperature**: Consider temperature effects in precision applications

## Single Supply Advantages

The LM324's single supply capability provides:
- **Simplified Power Supply**: No need for negative supply rail
- **Ground Sensing**: Can amplify signals referenced to ground
- **Battery Operation**: Suitable for portable applications
- **Cost Effective**: Reduces power supply complexity and cost
- **Wide Voltage Range**: Operates from 3V to 32V

## Tags

quad-opamp, single-supply, ground-sensing, general-purpose, texas-instruments #cabinet-3 #bin-33 #status-available

## Notes

The LM324N is one of the most popular and widely used operational amplifiers in electronics, known for its versatility and single-supply capability. Having this classic IC provides excellent capability for general-purpose analog circuits, especially those requiring single-supply operation. The four independent amplifiers in one package make it ideal for multi-channel applications, audio mixing, and signal conditioning. The ability to operate with inputs at ground potential and output swing to ground makes it perfect for single-supply applications where negative supply rails are not available. This IC is an essential component for learning operational amplifier principles and building practical analog circuits.
