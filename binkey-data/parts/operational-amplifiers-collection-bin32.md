---
title: Operational Amplifiers Collection - Bin 32
description: Collection of precision operational amplifiers and operational transconductance amplifiers for analog circuit design
part_number: Mixed
manufacturer: Various (Microchip, Texas Instruments, Analog Devices)
category: components
subcategory: analog-ics
quantity: 15+
location: 
  - Cabinet-3
  - Bin-32
cost_per_unit: $3.50
purchase_date: 2024-12-15
tags: [op-amp, operational-amplifier, analog, precision, audio, instrumentation]
---

# Operational Amplifiers Collection - Bin 32

Professional collection of operational amplifiers and operational transconductance amplifiers for precision analog circuit design, audio applications, and instrumentation.

## Overview

This collection contains various operational amplifiers (op-amps) and operational transconductance amplifiers (OTAs) from leading manufacturers. These components are essential for analog signal processing, amplification, filtering, and precision measurement applications.

## Included Components

### MCP6232 Dual Op-Amp (10)
**Microchip 2.7V to 6.0V Single Supply CMOS Op Amps**

#### Key Features
- **Dual op-amp** in 8-pin package
- **Rail-to-rail** input and output
- **Low power consumption** (45μA per amplifier)
- **Wide supply voltage** range (2.7V to 6.0V)
- **High precision** with low offset voltage
- **Unity gain stable**

#### Technical Specifications
- **Supply Voltage**: 2.7V to 6.0V
- **Supply Current**: 45μA per amplifier (typical)
- **Input Offset Voltage**: 150μV maximum
- **Input Bias Current**: 1pA typical
- **Gain Bandwidth Product**: 10MHz
- **Slew Rate**: 6V/μs
- **Package**: 8-pin PDIP, SOIC, or MSOP

#### Applications
- **Battery-powered** instrumentation
- **Sensor signal** conditioning
- **Active filters** and integrators
- **Voltage followers** and buffers
- **Low-power** analog processing

### TL072 Dual JFET Op-Amp (12)
**Texas Instruments Low-Noise JFET-Input Operational Amplifiers**

#### Key Features
- **JFET input** for high input impedance
- **Low noise** and low distortion
- **High slew rate** for audio applications
- **Dual op-amp** configuration
- **Industry standard** pinout
- **Wide temperature** range operation

#### Technical Specifications
- **Supply Voltage**: ±3V to ±18V
- **Supply Current**: 2.5mA per amplifier
- **Input Offset Voltage**: 3mV maximum
- **Input Bias Current**: 30pA typical
- **Gain Bandwidth Product**: 4MHz
- **Slew Rate**: 16V/μs
- **Input Impedance**: 10^12 Ω
- **Package**: 8-pin PDIP or SOIC

#### Applications
- **Audio amplifiers** and mixers
- **High-impedance** sensor interfaces
- **Active filters** for audio
- **Instrumentation** amplifiers
- **Precision voltage** references

### LM13700N Dual OTA (8)
**Analog Devices Dual Operational Transconductance Amplifier**

#### Key Features
- **Dual OTA** with linearizing diodes
- **Voltage-controlled** transconductance
- **Wide dynamic range**
- **Low distortion** with linearizing diodes
- **Multiplier and** modulator capability
- **Temperature stable**

#### Technical Specifications
- **Supply Voltage**: ±2V to ±22V
- **Transconductance**: 19.2mS maximum
- **Input Bias Current**: 0.5μA typical
- **Bandwidth**: 2MHz (small signal)
- **Total Harmonic Distortion**: 0.5% typical
- **Control Current Range**: 0.1μA to 2mA
- **Package**: 16-pin PDIP

#### Applications
- **Voltage-controlled** amplifiers (VCA)
- **Voltage-controlled** filters (VCF)
- **Audio synthesizers** and modulators
- **Automatic gain** control (AGC)
- **Analog multipliers**
- **Oscillators** and waveform generators

## Technical Specifications Comparison

### Op-Amp Comparison Table
| Parameter | MCP6232 | TL072 | LM13700N |
|-----------|---------|-------|----------|
| Type | CMOS Op-Amp | JFET Op-Amp | OTA |
| Supply Voltage | 2.7V to 6.0V | ±3V to ±18V | ±2V to ±22V |
| Supply Current | 45μA/amp | 2.5mA/amp | 2mA/amp |
| Input Offset | 150μV max | 3mV max | 2mV typ |
| Bandwidth | 10MHz | 4MHz | 2MHz |
| Slew Rate | 6V/μs | 16V/μs | 50V/μs |
| Package | 8-pin | 8-pin | 16-pin |

### Performance Characteristics
| Application | Best Choice | Reason |
|-------------|-------------|---------|
| Battery-powered | MCP6232 | Ultra-low power consumption |
| Audio circuits | TL072 | Low noise, high slew rate |
| Voltage control | LM13700N | Transconductance control |
| High impedance | TL072 | JFET input, 10^12Ω impedance |
| Rail-to-rail | MCP6232 | Full swing output |

## Applications by Component

### MCP6232 Applications
- **Portable instrumentation** requiring low power
- **Sensor signal conditioning** with single supply
- **Battery monitoring** circuits
- **Active filters** in low-power systems
- **Voltage references** and comparators
- **Data acquisition** front-ends

### TL072 Applications
- **Audio preamplifiers** and line drivers
- **Guitar effects** pedals and processors
- **Microphone preamplifiers**
- **Active crossover** networks
- **High-impedance** pH meter amplifiers
- **Precision instrumentation** amplifiers

### LM13700N Applications
- **Analog synthesizers** and music equipment
- **Voltage-controlled amplifiers** (VCA)
- **Voltage-controlled filters** (VCF)
- **Automatic gain control** systems
- **Analog computers** and modulators
- **Waveform generators** and oscillators

## Circuit Design Examples

### Basic Non-Inverting Amplifier (MCP6232)
```
    R2
    ┌─────┐
    │     │
Vin ──┤+    │
      │  >──┼── Vout
   ┌──┤-    │
   │  └─────┘
   │
   ├── R1
   │
  GND

Gain = 1 + (R2/R1)
```

### Audio Preamplifier (TL072)
```
Input ──C1──R1──┤+    │
                │  >──┼──C2── Output
             ┌──┤-    │
             │  └─────┘
             │
             ├── R2
             │
            GND

C1, C2: Coupling capacitors
R1: Input resistor
R2: Feedback resistor
```

### Voltage-Controlled Amplifier (LM13700N)
```
Signal ──┤ OTA ├── Output
         │     │
Control ─┤ Iabc│
Voltage  └─────┘

Gain = gm × RL
gm = Iabc / (2 × VT)
```

## Programming and Control

### Arduino Integration with MCP6232
```cpp
// Example: Battery voltage monitor using MCP6232
const int batteryPin = A0;
const float vRef = 3.3;  // Reference voltage
const float dividerRatio = 2.0;  // Voltage divider ratio

void setup() {
  Serial.begin(9600);
  analogReference(EXTERNAL);  // Use external 3.3V reference
}

void loop() {
  int adcValue = analogRead(batteryPin);
  float voltage = (adcValue / 1023.0) * vRef * dividerRatio;
  
  Serial.print("Battery Voltage: ");
  Serial.print(voltage, 2);
  Serial.println("V");
  
  delay(1000);
}
```

### Digital Control of LM13700N
```cpp
// Example: Digital control of LM13700N gain
const int gainControlPin = 9;  // PWM output
const int audioInputPin = A1;
const int audioOutputPin = A2;

void setup() {
  pinMode(gainControlPin, OUTPUT);
  Serial.begin(9600);
}

void setGain(float gainPercent) {
  // Convert gain percentage to PWM value
  int pwmValue = map(gainPercent * 100, 0, 100, 0, 255);
  analogWrite(gainControlPin, pwmValue);
}

void loop() {
  // Example: Automatic gain control
  int inputLevel = analogRead(audioInputPin);
  int outputLevel = analogRead(audioOutputPin);
  
  // Simple AGC algorithm
  if (outputLevel > 800) {
    setGain(0.5);  // Reduce gain
  } else if (outputLevel < 200) {
    setGain(1.0);  // Increase gain
  }
  
  delay(10);
}
```

## Design Considerations

### Power Supply Design
- **Decoupling capacitors**: 0.1μF ceramic near each IC
- **Supply filtering**: Additional filtering for audio applications
- **Dual supplies**: ±15V typical for TL072 and LM13700N
- **Single supply**: 3.3V or 5V for MCP6232
- **Ground plane**: Solid ground plane for best performance

### PCB Layout Guidelines
- **Short signal paths**: Minimize trace lengths
- **Ground plane**: Use continuous ground plane
- **Power supply decoupling**: Place capacitors close to IC pins
- **Thermal considerations**: Adequate copper area for heat dissipation
- **EMI shielding**: Shield sensitive analog circuits

### Component Selection
- **Precision resistors**: Use 1% or better for critical applications
- **Low-noise capacitors**: Film capacitors for audio applications
- **Matched components**: Use matched resistor pairs for differential circuits
- **Temperature stability**: Consider temperature coefficients
- **Bandwidth requirements**: Select op-amps with adequate bandwidth

## Troubleshooting

### Common Issues
- **Oscillation**: Check for proper compensation and layout
- **Offset voltage**: Verify input bias current compensation
- **Distortion**: Check for adequate supply voltage and current
- **Noise**: Improve power supply filtering and layout
- **Thermal drift**: Use temperature-stable components

### Performance Optimization
- **Proper biasing**: Ensure correct DC operating point
- **Feedback network**: Design appropriate feedback for stability
- **Bandwidth limiting**: Use compensation for stability
- **Thermal management**: Provide adequate heat sinking
- **Component matching**: Use matched components for precision

## Applications by Industry

### Audio Equipment
- **Mixing consoles** and audio interfaces
- **Guitar amplifiers** and effects processors
- **Professional audio** equipment
- **Home stereo** systems
- **Musical instruments** and synthesizers

### Instrumentation
- **Data acquisition** systems
- **Sensor signal** conditioning
- **Precision measurement** equipment
- **Laboratory instruments**
- **Industrial control** systems

### Communications
- **RF amplifiers** and mixers
- **Baseband processing**
- **Analog filters**
- **Signal conditioning**
- **Modulation circuits**

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Keep in low-humidity environment
- **ESD protection**: Use anti-static packaging
- **Organization**: Sort by part number and date code
- **Documentation**: Maintain datasheets and application notes

### Handling Precautions
- **ESD protection**: Use proper ESD precautions
- **Lead forming**: Avoid excessive stress on leads
- **Soldering**: Use appropriate temperature and time
- **Testing**: Verify functionality before use
- **Replacement**: Use exact replacements when possible

## Storage Information
- **Location**: Cabinet 3, Bin 32
- **Quantity**: 30+ ICs total (10 MCP6232, 12 TL072, 8 LM13700N)
- **Condition**: New, unused components
- **Packaging**: Anti-static tubes and packaging
- **Documentation**: Datasheets and application notes available
- **Applications**: Audio, instrumentation, precision analog circuits
