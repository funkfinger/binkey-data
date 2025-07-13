---
type: electronic-component
category: Analog ICs
subcategory: Operational Amplifiers
brand: Microchip Technology
part_number: MCP6232-E/P
model: MCP6232-E/P
description: Dual rail-to-rail input/output operational amplifier with ultra-low power consumption for battery-operated applications
manufacturer: Microchip Technology
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 1.8V ~ 6.0V single supply
current: Ultra-low input bias current (1pA typical)
power: Ultra-low power consumption 20µA per channel
interface: [Analog Signal Processing, Battery-Powered Applications]
connectivity: [Through-hole pins]
compatibility: [Low-power circuits, Battery systems, Sensor interfaces, Portable devices]
location: [Cabinet-3/Bin-32/Section-D]
quantity: 26
status: available
price_range: $0.50-1.00
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/20001881G%20MCP6231-20%20uA%20300%20kHz%20Rail-to-Rail%20Op%20Amp.pdf
product_url: https://www.digikey.com/en/products/detail/microchip-technology/MCP6232-E-P/716249
supplier: Digikey (high reliability source)
tags: [dual-opamp, rail-to-rail, ultra-low-power, battery-operated, microchip-technology, digikey-sourced, cabinet-3, bin-32, status-available]
date_added: 2025-01-13
---

# MCP6232-E/P - Dual Rail-to-Rail Ultra-Low Power Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 32, Section D
- **Category**: Analog ICs
- **Brand**: Microchip Technology
- **Part Number**: MCP6232-E/P
- **Package**: 8-DIP
- **Quantity**: 26
- **Status**: Available
- **Price Range**: $0.50-1.00
- **Supplier**: **Digikey (high reliability source)**
- **Datasheet**: [MCP6232 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/20001881G%20MCP6231-20%20uA%20300%20kHz%20Rail-to-Rail%20Op%20Amp.pdf)
- **Product URL**: [Digikey Product Page](https://www.digikey.com/en/products/detail/microchip-technology/MCP6232-E-P/716249)

## Description

The MCP6232-E/P is a dual rail-to-rail input/output operational amplifier specifically designed for ultra-low power applications. With only 20µA quiescent current per channel and rail-to-rail operation from 1.8V to 6.0V, this amplifier is ideal for battery-powered and portable applications. The rail-to-rail capability allows maximum signal swing and optimal use of the available supply voltage, making it perfect for single-supply, low-voltage applications where power consumption is critical.

## Specifications

### Electrical Characteristics
- **Supply Voltage**: 1.8V to 6.0V single supply
- **Input Offset Voltage**: ±0.5mV typical, ±5mV maximum
- **Input Bias Current**: 1pA typical (ultra-low)
- **Input Impedance**: Very high (CMOS input)
- **Slew Rate**: 0.15V/µs typical
- **Gain-Bandwidth Product**: 300kHz typical
- **Quiescent Current**: 20µA per channel (ultra-low power)
- **Output Current**: ±23mA per channel

### Physical Characteristics  
- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -40°C to +125°C
- **Lead Material**: Standard DIP leads

### Key Features
- Dual independent rail-to-rail operational amplifiers
- Ultra-low power consumption (20µA per channel)
- Rail-to-rail input and output operation
- Single supply operation from 1.8V to 6.0V
- Ultra-low input bias current (1pA)
- Extended temperature range
- CMOS input stage for high impedance

## Pinout Diagram

```
    MCP6232-E/P 8-Pin DIP
    ┌─────────────┐
OUT1│1          8│ VDD
IN1-│2          7│ OUT2
IN1+│3          6│ IN2-
VSS │4          5│ IN2+
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | OUT1 | Output of amplifier 1 |
| 2   | IN1- | Inverting input of amplifier 1 |
| 3   | IN1+ | Non-inverting input of amplifier 1 |
| 4   | VSS  | Negative power supply (ground) |
| 5   | IN2+ | Non-inverting input of amplifier 2 |
| 6   | IN2- | Inverting input of amplifier 2 |
| 7   | OUT2 | Output of amplifier 2 |
| 8   | VDD  | Positive power supply |

## Applications

Common use cases for the MCP6232-E/P:
- Battery-powered sensor interfaces
- Portable instrumentation and measurement
- Low-power signal conditioning
- Battery monitoring circuits
- Handheld device amplification
- IoT sensor front-ends
- Low-power active filters
- Single-supply precision amplifiers

## Circuit Examples

### Battery-Powered Sensor Interface
```
Sensor Output ---- IN1+ (Pin 3)
Reference Voltage ---- IN1- (Pin 2)
Amplified Output ---- OUT1 (Pin 1)
Single 3.3V battery supply to VDD (Pin 8)
VSS (Pin 4) to ground
```

### Low-Power Differential Amplifier
```
Signal+ ---- IN1+ (Pin 3)
Signal- ---- IN1- (Pin 2) via feedback network
Differential Output ---- OUT1 (Pin 1)
Gain set by external resistor ratio
Ultra-low power consumption ideal for battery operation
```

### Battery Voltage Monitor
```
Battery Voltage ---- Voltage Divider ---- IN1+ (Pin 3)
Reference ---- IN1- (Pin 2)
Monitor Output ---- OUT1 (Pin 1) ---- ADC Input
Low power consumption preserves battery life
```

### Single-Supply Active Filter
```
Input Signal ---- R1 ---- IN1+ (Pin 3)
IN1- (Pin 2) ---- Feedback Network ---- OUT1 (Pin 1)
C1 and C2 for frequency response shaping
Rail-to-rail operation maximizes dynamic range
```

## Programming Examples

### Arduino Battery Monitor
```cpp
#define BATTERY_MONITOR A0  // Connected to MCP6232 output
#define LOW_BATTERY_LED 13
#define BATTERY_THRESHOLD 512  // Adjust based on circuit

void setup() {
  pinMode(LOW_BATTERY_LED, OUTPUT);
  Serial.begin(9600);
  analogReference(EXTERNAL); // Use external reference for precision
}

void loop() {
  // Read battery level through MCP6232 amplifier
  int batteryLevel = analogRead(BATTERY_MONITOR);
  
  // Convert to voltage (assuming 3.3V reference)
  float voltage = (batteryLevel * 3.3) / 1023.0;
  
  // Check for low battery condition
  if(batteryLevel < BATTERY_THRESHOLD) {
    digitalWrite(LOW_BATTERY_LED, HIGH);
    Serial.println("LOW BATTERY WARNING!");
  } else {
    digitalWrite(LOW_BATTERY_LED, LOW);
  }
  
  Serial.print("Battery Level: ");
  Serial.print(batteryLevel);
  Serial.print(" (");
  Serial.print(voltage, 2);
  Serial.println("V)");
  
  delay(1000); // Check every second
}
```

### Low-Power Sensor Data Logger
```cpp
#include <LowPower.h>

#define SENSOR_INPUT A0
#define DATA_READY_PIN 2

void setup() {
  Serial.begin(9600);
  pinMode(DATA_READY_PIN, INPUT_PULLUP);
  analogReference(EXTERNAL);
}

void loop() {
  // Read sensor through MCP6232 amplifier
  int sensorValue = analogRead(SENSOR_INPUT);
  float voltage = (sensorValue * 3.3) / 1023.0;
  
  // Log data
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" (");
  Serial.print(voltage, 3);
  Serial.println("V)");
  
  // Enter low power mode to conserve battery
  // MCP6232's ultra-low power consumption helps extend battery life
  LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);
}
```

## Technical Notes

Important considerations for the MCP6232-E/P:
- **Ultra-Low Power**: Ideal for battery-powered applications
- **Rail-to-Rail**: Maximizes signal swing in low-voltage applications
- **Single Supply**: Simplifies power supply design
- **Input Protection**: CMOS inputs require ESD protection
- **Decoupling**: Use 0.1µF ceramic capacitor close to power pins
- **Bandwidth**: 300kHz bandwidth suitable for many sensor applications

## Design Considerations

### Battery-Powered Applications
- **Power Budget**: 20µA per channel fits tight power budgets
- **Supply Voltage**: Works down to 1.8V for extended battery life
- **Rail-to-Rail**: Maximizes dynamic range with limited supply voltage
- **Temperature Range**: Extended range suitable for outdoor applications

### Signal Conditioning
- **High Input Impedance**: Minimal loading of high-impedance sources
- **Low Offset**: Good precision for sensor applications
- **Single Supply**: Eliminates need for negative supply rail
- **Low Noise**: Suitable for precision measurements

## Rail-to-Rail Advantages

The rail-to-rail capability provides:
- **Maximum Signal Swing**: Output can swing to within millivolts of supply rails
- **Optimal Supply Utilization**: Full use of available supply voltage
- **Single Supply Operation**: No need for dual supplies
- **Low Voltage Compatibility**: Works with modern low-voltage systems
- **Battery Efficiency**: Maximizes useful signal range as battery voltage drops

## Tags

dual-opamp, rail-to-rail, ultra-low-power, battery-operated, microchip-technology, digikey-sourced #cabinet-3 #bin-32 #status-available

## Notes

The MCP6232-E/P is an excellent choice for ultra-low power applications where battery life is critical. Having 26 of these Digikey-sourced ICs provides substantial capability for building battery-powered sensor interfaces, portable instrumentation, and IoT devices. The rail-to-rail operation and ultra-low power consumption make them ideal for modern low-voltage, battery-operated systems. The 20µA per channel quiescent current is exceptionally low, making these amplifiers perfect for applications where power consumption must be minimized. The rail-to-rail capability ensures maximum signal swing even with low supply voltages, making them ideal for single-supply applications. This substantial quantity enables multiple battery-powered projects and provides excellent backup availability for critical low-power applications.
