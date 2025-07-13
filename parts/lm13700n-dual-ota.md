---
type: electronic-component
category: Analog ICs
subcategory: Operational Transconductance Amplifiers
brand: Texas Instruments / ON Semiconductor
part_number: LM13700N
model: LM13700N
description: Dual operational transconductance amplifier (OTA) with linearizing diodes and buffer amplifiers
manufacturer: Texas Instruments / ON Semiconductor
package: 16-DIP
size: 0.600" (15.24mm) width
voltage: ±15V dual supply (typical)
current: Variable transconductance controlled by bias current
power: Low power analog operation
interface: [Analog Signal Processing, Voltage Controlled Amplification]
connectivity: [Through-hole pins]
compatibility: [Audio circuits, Synthesizers, Filters, VCAs, Modulators]
location: [Cabinet-3/Bin-32/Section-A]
quantity: 9
status: available
price_range: $3.00-8.00
datasheet: https://www.ti.com/lit/ds/symlink/lm13700.pdf
product_url: https://www.ti.com/product/LM13700
tags: [operational-transconductance-amplifier, ota, voltage-controlled-amplifier, analog-synthesizer, audio-processing, cabinet-3, bin-32, status-available]
date_added: 2025-01-13
---

# LM13700N - Dual Operational Transconductance Amplifier (OTA)

## Details

- **Location**: Cabinet-3, Bin 32, Section A
- **Category**: Analog ICs
- **Brand**: Texas Instruments / ON Semiconductor
- **Part Number**: LM13700N
- **Package**: 16-DIP
- **Quantity**: 9
- **Status**: Available
- **Price Range**: $3.00-8.00
- **Datasheet**: [LM13700 Datasheet](https://www.ti.com/lit/ds/symlink/lm13700.pdf)
- **Product URL**: https://www.ti.com/product/LM13700

## Description

The LM13700N is a dual operational transconductance amplifier (OTA) that provides voltage-controlled amplification and signal processing capabilities. Each OTA features linearizing diodes to reduce distortion and includes buffer amplifiers for improved performance. The transconductance (gain) of each amplifier is controlled by an external bias current, making it ideal for voltage-controlled amplifiers (VCAs), filters, modulators, and analog synthesizer circuits. This IC is widely used in audio applications where dynamic gain control and signal processing are required.

## Specifications

### Electrical Characteristics
- **Supply Voltage**: ±15V typical (±4V to ±18V range)
- **Input Offset Voltage**: Low offset for precision applications
- **Transconductance Range**: Variable, controlled by bias current
- **Bandwidth**: High frequency response suitable for audio
- **Input Impedance**: High input impedance
- **Output Impedance**: Moderate output impedance
- **Operating Temperature**: 0°C to +70°C (commercial grade)

### Physical Characteristics  
- **Package**: 16-pin DIP (Dual In-line Package)
- **Dimensions**: 0.600" (15.24mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Lead Material**: Standard DIP leads

### Key Features
- Dual independent operational transconductance amplifiers
- Linearizing diodes for reduced distortion
- Buffer amplifiers included for each OTA
- Voltage-controlled transconductance (gain)
- Wide supply voltage range
- High slew rate and bandwidth
- Low input bias current

## Pinout Diagram

```
    LM13700N 16-Pin DIP
    ┌─────────────────┐
OTA1│1             16│ V+
LIN1│2             15│ OTA2
LIN1│3             14│ LIN2
BIAS│4             13│ LIN2
COMP│5             12│ BIAS
OUT1│6             11│ COMP
V-  │7             10│ OUT2
BUF1│8              9│ BUF2
    └─────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | OTA1 | OTA 1 inverting input |
| 2   | LIN1 | Linearizing diode 1 cathode |
| 3   | LIN1 | Linearizing diode 1 anode |
| 4   | BIAS | Bias current input 1 |
| 5   | COMP | Compensation/frequency response |
| 6   | OUT1 | OTA 1 output |
| 7   | V-   | Negative power supply |
| 8   | BUF1 | Buffer amplifier 1 input |
| 9   | BUF2 | Buffer amplifier 2 input |
| 10  | OUT2 | OTA 2 output |
| 11  | COMP | Compensation/frequency response |
| 12  | BIAS | Bias current input 2 |
| 13  | LIN2 | Linearizing diode 2 anode |
| 14  | LIN2 | Linearizing diode 2 cathode |
| 15  | OTA2 | OTA 2 inverting input |
| 16  | V+   | Positive power supply |

## Applications

Common use cases for the LM13700N:
- Voltage-controlled amplifiers (VCAs) in synthesizers
- Voltage-controlled filters (VCFs) and equalizers
- Amplitude modulators and ring modulators
- Automatic gain control (AGC) circuits
- Audio compressors and limiters
- Analog synthesizer voice circuits
- Signal processing and conditioning
- Tremolo and vibrato effects

## Circuit Examples

### Basic Voltage-Controlled Amplifier
```
Audio Input ---- OTA1 Inverting Input (Pin 1)
Control Voltage ---- Bias Current Circuit ---- BIAS (Pin 4)
OTA1 Output (Pin 6) ---- Output Amplifier ---- Audio Output
Linearizing diodes connected between pins 2 and 3
Power: +15V to Pin 16, -15V to Pin 7, GND reference
```

### Voltage-Controlled Filter
```
Audio Input ---- OTA1 (Pin 1)
Cutoff Control ---- Bias Current ---- BIAS (Pin 4)
OTA1 Output ---- Feedback Network ---- OTA1 Input
Filter Output taken from OTA1 Output (Pin 6)
Resonance control via feedback amount
```

### Ring Modulator
```
Carrier Signal ---- OTA1 (Pin 1)
Modulator Signal ---- Bias Current Control ---- BIAS (Pin 4)
Ring Modulated Output ---- OTA1 Output (Pin 6)
Use both OTAs for balanced ring modulation
```

## Programming/Control Examples

### Arduino-Controlled VCA
```cpp
#define CONTROL_PIN A0  // Analog output to control VCA
#define AUDIO_IN A1     // Audio input monitoring
#define AUDIO_OUT A2    // Audio output monitoring

void setup() {
  // Configure PWM for smooth control voltage
  analogWrite(CONTROL_PIN, 0);
  Serial.begin(9600);
}

void loop() {
  // Read control input (0-1023)
  int controlValue = analogRead(A3);
  
  // Convert to control voltage (0-255 PWM)
  int pwmValue = map(controlValue, 0, 1023, 0, 255);
  
  // Output control voltage
  analogWrite(CONTROL_PIN, pwmValue);
  
  // Monitor audio levels
  int audioIn = analogRead(AUDIO_IN);
  int audioOut = analogRead(AUDIO_OUT);
  
  Serial.print("Control: ");
  Serial.print(controlValue);
  Serial.print(" Audio In: ");
  Serial.print(audioIn);
  Serial.print(" Audio Out: ");
  Serial.println(audioOut);
  
  delay(10);
}
```

### Envelope-Controlled Amplifier
```cpp
void envelopeControl() {
  // Attack phase
  for(int i = 0; i < 255; i++) {
    analogWrite(CONTROL_PIN, i);
    delay(2); // Attack time
  }
  
  // Sustain phase
  delay(1000);
  
  // Release phase
  for(int i = 255; i >= 0; i--) {
    analogWrite(CONTROL_PIN, i);
    delay(5); // Release time
  }
}
```

## Technical Notes

Important considerations for the LM13700N:
- **Bias Current**: Transconductance is proportional to bias current
- **Linearizing Diodes**: Essential for low distortion operation
- **Power Supply**: Requires dual supply (±15V typical)
- **Compensation**: May require external compensation for stability
- **Temperature**: Performance varies with temperature
- **Input Protection**: Consider input protection for audio applications

## Design Considerations

### Bias Current Control
- **Current Range**: Typically 1µA to 1mA for useful transconductance range
- **Control Voltage**: Convert control voltage to bias current with precision
- **Temperature Compensation**: Consider temperature effects on bias current
- **Linearity**: Use linearizing diodes for best performance

### Audio Applications
- **Signal Levels**: Keep audio signals within linear range
- **Distortion**: Optimize bias current for minimum distortion
- **Frequency Response**: Consider compensation for desired bandwidth
- **Noise**: Minimize noise in bias current circuits

## Tags

operational-transconductance-amplifier, ota, voltage-controlled-amplifier, analog-synthesizer, audio-processing #cabinet-3 #bin-32 #status-available

## Notes

The LM13700N is a classic and highly versatile OTA that has been a staple in analog synthesizer and audio processing circuits for decades. Having 9 of these ICs provides excellent capability for building voltage-controlled amplifiers, filters, and modulators. These components are essential for analog synthesizer voice circuits, audio effects, and any application requiring voltage-controlled gain or signal processing. The dual OTA configuration allows for stereo processing or complex modulation schemes. The linearizing diodes help achieve low distortion, making them suitable for high-quality audio applications. This IC is perfect for learning about transconductance amplifiers and building classic analog synthesizer circuits.
