---
type: electronic-component
category: Analog ICs
subcategory: Operational Amplifiers
brand: Texas Instruments
part_number: TL072IP
model: TL072IP
description: Dual JFET-input operational amplifier with industrial temperature range and low noise for precision applications
manufacturer: Texas Instruments
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: ±2.25V ~ ±20V dual supply
current: Low input bias current (pA range)
power: Low power consumption 940µA per channel
interface: [Analog Signal Processing, Audio Amplification]
connectivity: [Through-hole pins]
compatibility: [Audio circuits, Precision amplifiers, Active filters, Industrial applications]
location: [Cabinet-3/Bin-32/Section-B]
quantity: 8
status: available
price_range: $1.50-3.50
datasheet: https://www.ti.com/lit/ds/symlink/tl072.pdf
product_url: https://www.ti.com/product/TL072
tags: [dual-opamp, jfet-input, low-noise, audio-amplifier, precision-amplifier, industrial-grade, texas-instruments, cabinet-3, bin-32, status-available]
date_added: 2025-01-13
---

# TL072IP - Dual JFET-Input Operational Amplifier (Industrial Grade)

## Details

- **Location**: Cabinet-3, Bin 32, Section B
- **Category**: Analog ICs
- **Brand**: Texas Instruments
- **Part Number**: TL072IP
- **Package**: 8-DIP
- **Quantity**: 8
- **Status**: Available
- **Price Range**: $1.50-3.50
- **Datasheet**: [TL072 Datasheet](https://www.ti.com/lit/ds/symlink/tl072.pdf)
- **Product URL**: [TI Product Page](https://www.ti.com/product/TL072)

## Description

The TL072IP is the industrial temperature grade version of the popular TL072 dual JFET-input operational amplifier from Texas Instruments. Designed for applications requiring extended temperature operation from -40°C to +85°C, it provides the same excellent low input bias current, low noise, and high slew rate performance as the commercial grade TL072CP but with enhanced temperature specifications. The JFET input stage provides extremely high input impedance and low input bias current, making it ideal for precision applications, audio circuits, and active filters in industrial environments.

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
- **Operating Temperature**: **-40°C to +85°C (Industrial Grade)**
- **Lead Material**: Standard DIP leads

### Key Features
- Dual independent JFET-input operational amplifiers
- **Industrial temperature range (-40°C to +85°C)**
- Extremely low input bias current (picoampere range)
- Low noise: 37nV/√Hz at 1kHz
- High slew rate for fast signal response
- Wide supply voltage range
- Low total harmonic distortion: 0.003% typical
- Output short-circuit protection
- Common-mode input voltage range includes V+

## Pinout Diagram

```
    TL072IP 8-Pin DIP
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

Common use cases for the TL072IP:
- Industrial audio preamplifiers and line drivers
- Precision instrumentation in harsh environments
- Active filters for industrial control systems
- High-impedance buffer amplifiers in industrial settings
- Sensor signal conditioning in extreme temperatures
- Automotive and aerospace applications
- Outdoor equipment and environmental monitoring
- Industrial automation and control circuits

## Circuit Examples

### Industrial Sensor Interface
```
Sensor Output ---- IN1+ (Pin 3)
Reference ---- IN1- (Pin 2) via feedback network
Conditioned Output ---- OUT1 (Pin 1)
Operates reliably from -40°C to +85°C
High input impedance ideal for sensor interfaces
```

### Precision Differential Amplifier
```
Signal+ ---- IN1+ (Pin 3)
Signal- ---- IN1- (Pin 2) via precision resistor network
Differential Output ---- OUT1 (Pin 1)
Industrial temperature range for harsh environments
Low drift performance across temperature range
```

### Industrial Active Filter
```
Input Signal ---- R1 ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- R2 ---- OUT1 (Pin 1)
C1 and C2 for frequency response shaping
Stable performance across industrial temperature range
```

### Automotive Signal Conditioning
```
Automotive Sensor ---- IN1+ (Pin 3)
Ground Reference ---- IN1- (Pin 2) via bias network
ECU Interface ---- OUT1 (Pin 1)
Operates reliably in automotive temperature extremes
```

## Programming Examples

### Industrial Temperature Monitor
```cpp
#define TEMP_SENSOR_1 A0  // Connected to TL072IP output 1
#define TEMP_SENSOR_2 A1  // Connected to TL072IP output 2
#define ALARM_OUTPUT 13

void setup() {
  pinMode(ALARM_OUTPUT, OUTPUT);
  Serial.begin(9600);
  analogReference(EXTERNAL);
}

void loop() {
  // Read temperature sensors through TL072IP amplifiers
  int temp1_raw = analogRead(TEMP_SENSOR_1);
  int temp2_raw = analogRead(TEMP_SENSOR_2);
  
  // Convert to temperature (example conversion)
  float temp1 = (temp1_raw * 5.0 / 1023.0 - 0.5) * 100.0; // LM35 formula
  float temp2 = (temp2_raw * 5.0 / 1023.0 - 0.5) * 100.0;
  
  // Check for over-temperature condition
  if(temp1 > 75.0 || temp2 > 75.0) {
    digitalWrite(ALARM_OUTPUT, HIGH);
    Serial.println("TEMPERATURE ALARM!");
  } else {
    digitalWrite(ALARM_OUTPUT, LOW);
  }
  
  Serial.print("Temp1: ");
  Serial.print(temp1, 1);
  Serial.print("°C  Temp2: ");
  Serial.print(temp2, 1);
  Serial.println("°C");
  
  delay(1000);
}
```

### Industrial Data Acquisition
```cpp
void industrialDataLogger() {
  static float readings[2][100]; // Store 100 readings per channel
  static int index = 0;
  
  // Read both channels
  readings[0][index] = analogRead(A0) * (5.0 / 1023.0);
  readings[1][index] = analogRead(A1) * (5.0 / 1023.0);
  
  index = (index + 1) % 100;
  
  // Calculate statistics every 100 readings
  if(index == 0) {
    for(int ch = 0; ch < 2; ch++) {
      float sum = 0, min_val = 5.0, max_val = 0;
      
      for(int i = 0; i < 100; i++) {
        sum += readings[ch][i];
        if(readings[ch][i] < min_val) min_val = readings[ch][i];
        if(readings[ch][i] > max_val) max_val = readings[ch][i];
      }
      
      float avg = sum / 100.0;
      float range = max_val - min_val;
      
      Serial.print("CH"); Serial.print(ch+1);
      Serial.print(" Avg:"); Serial.print(avg, 3);
      Serial.print("V Range:"); Serial.print(range, 3);
      Serial.print("V  ");
    }
    Serial.println();
  }
}
```

## Technical Notes

Important considerations for the TL072IP:
- **Industrial Temperature Range**: Operates reliably from -40°C to +85°C
- **Input Protection**: JFET inputs are sensitive to static discharge
- **Power Supply**: Requires dual supply for best performance
- **Decoupling**: Use 0.1µF ceramic capacitors on power supply pins
- **Temperature Drift**: Excellent temperature stability across industrial range
- **Harsh Environment**: Suitable for automotive, aerospace, and outdoor applications

## Design Considerations

### Industrial Applications
- **Temperature Range**: Verified operation across -40°C to +85°C
- **Reliability**: Enhanced specifications for industrial environments
- **Signal Integrity**: Maintains performance in temperature extremes
- **Long-term Stability**: Designed for continuous industrial operation

### Precision Applications
- **Input Impedance**: Take advantage of very high input impedance
- **Temperature Drift**: Excellent stability across temperature range
- **Offset Voltage**: Consider offset voltage in precision circuits
- **Matching**: Use both amplifiers for differential applications

## Industrial Grade Advantages

The TL072IP industrial grade provides:
- **Extended Temperature Range**: -40°C to +85°C vs 0°C to +70°C for commercial
- **Enhanced Reliability**: Tested and specified for harsh environments
- **Automotive Qualification**: Suitable for automotive applications
- **Aerospace Applications**: Meets requirements for aerospace environments
- **Outdoor Equipment**: Reliable operation in extreme weather conditions
- **Industrial Automation**: Proven performance in factory environments

## Comparison with TL072CP

| Parameter | TL072IP (Industrial) | TL072CP (Commercial) |
|-----------|---------------------|---------------------|
| Temperature Range | -40°C to +85°C | 0°C to +70°C |
| Application | Industrial/Automotive | General/Commercial |
| Cost | Slightly higher | Standard |
| Reliability | Enhanced | Standard |
| Availability | Specialized | Wide |

## Tags

dual-opamp, jfet-input, low-noise, audio-amplifier, precision-amplifier, industrial-grade, texas-instruments #cabinet-3 #bin-32 #status-available

## Notes

The TL072IP is the industrial temperature grade version of the popular TL072 dual JFET operational amplifier. Having 8 of these industrial-grade ICs provides excellent capability for applications requiring operation in harsh environments or extreme temperatures. The extended temperature range (-40°C to +85°C) makes them ideal for automotive, aerospace, outdoor equipment, and industrial automation applications. The JFET input stage offers the same superior performance as the commercial TL072CP with extremely low input bias current and excellent noise characteristics, but with enhanced temperature specifications. This substantial quantity enables multiple industrial projects and provides excellent backup availability for critical applications requiring reliable operation across temperature extremes.
