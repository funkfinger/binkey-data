---
type: electronic-component
category: Analog ICs
subcategory: Operational Amplifiers
brand: Texas Instruments
part_number: TL072CP
model: TL072CP
description: Dual JFET-input operational amplifier with low noise and high slew rate for audio and precision applications
manufacturer: Texas Instruments
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: ±2.25V ~ ±20V dual supply
current: Low input bias current (pA range)
power: Low power consumption 940µA per channel
interface: [Analog Signal Processing, Audio Amplification]
connectivity: [Through-hole pins]
compatibility: [Audio circuits, Precision amplifiers, Active filters, Instrumentation]
location: [Cabinet-3/Bin-32/Section-B]
quantity: 25
status: available
price_range: $1.50-3.00
datasheet: https://www.ti.com/lit/ds/symlink/tl072.pdf
product_url: https://www.ti.com/product/TL072/part-details/TL072CP
tags: [dual-opamp, jfet-input, low-noise, audio-amplifier, precision-amplifier, texas-instruments, cabinet-3, bin-32, status-available]
date_added: 2025-01-13
---

# TL072CP - Dual JFET-Input Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 32, Section B
- **Category**: Analog ICs
- **Brand**: Texas Instruments
- **Part Number**: TL072CP
- **Package**: 8-DIP
- **Quantity**: 25
- **Status**: Available
- **Price Range**: $1.50-3.00
- **Datasheet**: [TL072 Datasheet](https://www.ti.com/lit/ds/symlink/tl072.pdf)
- **Product URL**: [TI Product Page](https://www.ti.com/product/TL072/part-details/TL072CP)

## Description

The TL072CP is a dual JFET-input operational amplifier designed for applications requiring low input bias current, low noise, and high slew rate performance. The JFET input stage provides extremely high input impedance and low input bias current, making it ideal for precision applications, audio circuits, and active filters. Each package contains two independent operational amplifiers with excellent matching characteristics, making it perfect for stereo audio applications and differential signal processing.

## Specifications

### Electrical Characteristics
- **Supply Voltage**: ±2.25V to ±20V (4.5V to 40V single supply)
- **Input Offset Voltage**: ±1mV to ±4mV typical
- **Input Offset Voltage Drift**: ±2µV/°C typical
- **Input Bias Current**: ±1pA to ±120pA (extremely low)
- **Input Impedance**: Very high (JFET input)
- **Slew Rate**: 20V/µs typical (high speed)
- **Gain-Bandwidth Product**: 3MHz typical
- **Supply Current**: 940µA per channel typical

### Physical Characteristics  
- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -40°C to +125°C
- **Lead Material**: Standard DIP leads

### Key Features
- Dual independent JFET-input operational amplifiers
- Extremely low input bias current (picoampere range)
- Low noise: 37nV/√Hz at 1kHz
- High slew rate for fast signal response
- Wide supply voltage range
- Low total harmonic distortion: 0.003% typical
- Output short-circuit protection
- Common-mode input voltage range includes V+

## Pinout Diagram

```
    TL072CP 8-Pin DIP
    ┌─────────────┐
OUT1│1          8│ V+
IN1-│2          7│ OUT2
IN1+│3          6│ IN2-
V-  │4          5│ IN2+
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | OUT1 | Output of amplifier 1 |
| 2   | IN1- | Inverting input of amplifier 1 |
| 3   | IN1+ | Non-inverting input of amplifier 1 |
| 4   | V-   | Negative power supply |
| 5   | IN2+ | Non-inverting input of amplifier 2 |
| 6   | IN2- | Inverting input of amplifier 2 |
| 7   | OUT2 | Output of amplifier 2 |
| 8   | V+   | Positive power supply |

## Applications

Common use cases for the TL072CP:
- Audio preamplifiers and line drivers
- Active filters and equalizers
- Precision instrumentation amplifiers
- High-impedance buffer amplifiers
- Audio mixing consoles and effects
- Sensor signal conditioning
- Active crossover networks
- Low-noise amplification circuits

## Circuit Examples

### Basic Non-Inverting Amplifier
```
Input Signal ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- Feedback Network ---- OUT1 (Pin 1)
Gain = 1 + (Rf/Rg)
Rf = feedback resistor, Rg = gain-setting resistor
```

### Stereo Audio Preamplifier
```
Left Audio Input ---- Amplifier 1 (Pins 2,3,1)
Right Audio Input ---- Amplifier 2 (Pins 5,6,7)
Both amplifiers configured for same gain
Matched performance for stereo applications
```

### Active Low-Pass Filter
```
Input ---- R1 ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- R2 ---- OUT1 (Pin 1)
C1 from IN1+ to ground
C2 from IN1- to OUT1
Sallen-Key topology for smooth response
```

### High-Impedance Buffer
```
High-Z Source ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- OUT1 (Pin 1) (unity gain feedback)
Output provides low impedance drive capability
Ideal for interfacing high-impedance sensors
```

## Programming Examples

### Arduino-Based Audio Processor
```cpp
// Monitor audio levels through ADC
#define AUDIO_IN_L A0
#define AUDIO_IN_R A1
#define CONTROL_OUT 9  // PWM for gain control

void setup() {
  Serial.begin(9600);
  analogReference(EXTERNAL); // Use external reference for precision
}

void loop() {
  // Read stereo audio levels
  int leftLevel = analogRead(AUDIO_IN_L);
  int rightLevel = analogRead(AUDIO_IN_R);
  
  // Calculate average level
  int avgLevel = (leftLevel + rightLevel) / 2;
  
  // Automatic gain control
  int gainControl = map(avgLevel, 0, 1023, 255, 50);
  analogWrite(CONTROL_OUT, gainControl);
  
  Serial.print("L: ");
  Serial.print(leftLevel);
  Serial.print(" R: ");
  Serial.print(rightLevel);
  Serial.print(" Gain: ");
  Serial.println(gainControl);
  
  delay(10);
}
```

### Signal Quality Monitor
```cpp
void monitorSignalQuality() {
  static int samples[100];
  static int index = 0;
  
  // Collect samples
  samples[index] = analogRead(AUDIO_IN_L);
  index = (index + 1) % 100;
  
  // Calculate RMS and peak values
  long sum = 0;
  int peak = 0;
  for(int i = 0; i < 100; i++) {
    sum += samples[i] * samples[i];
    if(samples[i] > peak) peak = samples[i];
  }
  
  int rms = sqrt(sum / 100);
  
  Serial.print("RMS: ");
  Serial.print(rms);
  Serial.print(" Peak: ");
  Serial.println(peak);
}
```

## Technical Notes

Important considerations for the TL072CP:
- **Input Protection**: JFET inputs are sensitive to static discharge
- **Power Supply**: Requires dual supply for best performance
- **Decoupling**: Use 0.1µF ceramic capacitors on power supply pins
- **Input Bias**: Extremely low bias current ideal for high-impedance sources
- **Noise**: Excellent noise performance for audio applications
- **Slew Rate**: High slew rate suitable for audio and fast signals

## Design Considerations

### Audio Applications
- **Signal Levels**: Optimize input levels for best signal-to-noise ratio
- **Gain Setting**: Use precision resistors for accurate gain
- **Frequency Response**: Consider compensation for desired bandwidth
- **THD**: Minimize total harmonic distortion with proper biasing

### Precision Applications
- **Input Impedance**: Take advantage of very high input impedance
- **Offset Voltage**: Consider offset voltage in precision circuits
- **Temperature Drift**: Account for temperature effects in critical applications
- **Matching**: Use both amplifiers for differential applications

## JFET Input Advantages

The JFET input stage provides:
- **Extremely Low Input Bias Current**: Picoampere range vs nanoamperes for bipolar
- **High Input Impedance**: Minimal loading of signal sources
- **Low Noise**: Excellent noise performance for audio applications
- **Temperature Stability**: Good performance across temperature range
- **ESD Sensitivity**: Requires careful handling but provides superior performance

## Tags

dual-opamp, jfet-input, low-noise, audio-amplifier, precision-amplifier, texas-instruments #cabinet-3 #bin-32 #status-available

## Notes

The TL072CP is a classic and highly regarded dual operational amplifier that has been a staple in audio and precision applications for decades. Having 25 of these ICs provides excellent capability for stereo audio projects, precision instrumentation, and high-impedance signal conditioning. The JFET input stage offers superior performance compared to bipolar input op-amps, with extremely low input bias current and excellent noise characteristics. These amplifiers are perfect for audio preamplifiers, active filters, and any application requiring high input impedance and low noise. The dual configuration makes them ideal for stereo applications and differential signal processing. This substantial quantity enables multiple simultaneous projects and provides excellent backup availability for critical audio and precision applications.
