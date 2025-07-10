---
title: A1301/A1302 Hall Effect Sensors
description: Continuous-time ratiometric linear Hall-effect sensor ICs for magnetic field detection
part_numbers: 
  - A1301
  - A1302
manufacturer: Allegro MicroSystems
category: sensors
subcategory: magnetic-sensors
quantity: 10
location: 
  - Cabinet-3
  - Bin-26
cost_per_unit: $2.50
datasheet: https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/314/A1301-A1302-Rev.22_Dec5%2C2016_DS.pdf
purchase_date: 2024-12-15
tags: [hall-effect, magnetic-sensor, linear, ratiometric, analog-output]
---

# A1301/A1302 Hall Effect Sensors

Continuous-time ratiometric linear Hall-effect sensor ICs optimized to accurately provide a voltage output that is proportional to an applied magnetic field.

## Overview

The A1301 and A1302 are precision Hall-effect sensors designed for applications requiring accurate magnetic field measurement. These sensors provide a linear analog output voltage that is directly proportional to the strength of the applied magnetic field, making them ideal for position sensing, current sensing, and proximity detection applications.

## Key Features

### Linear Hall-Effect Technology
- **Continuous-time operation** for real-time magnetic field monitoring
- **Ratiometric output** proportional to supply voltage
- **Linear response** to magnetic field strength
- **High sensitivity** for detecting small magnetic field changes
- **Temperature stable** operation across wide temperature range

### Precision Performance
- **Low offset voltage** for accurate zero-field detection
- **Low noise** for stable measurements
- **High resolution** magnetic field detection
- **Excellent linearity** over operating range
- **Minimal temperature drift**

## Technical Specifications

### Electrical Characteristics
- **Supply Voltage (VCC)**: 4.5V to 6.0V
- **Supply Current**: 10mA typical
- **Output Voltage Range**: 10% to 90% of VCC
- **Sensitivity**: 2.5mV/G typical (A1301), 1.3mV/G typical (A1302)
- **Operating Temperature**: -40°C to +85°C
- **Storage Temperature**: -65°C to +150°C

### Magnetic Specifications
- **Magnetic Range**: ±1000 Gauss (A1301), ±2000 Gauss (A1302)
- **Linearity**: ±1.5% of full scale
- **Hysteresis**: ±5 Gauss maximum
- **Response Time**: 3μs typical
- **Bandwidth**: 22kHz typical

### Package Information
- **Package Type**: 3-pin SIP (Single In-line Package)
- **Pin Spacing**: 0.1" (2.54mm)
- **Package Dimensions**: 4.06mm × 3.05mm × 1.59mm
- **Lead Material**: Tin-plated copper alloy
- **Body Material**: Thermoplastic

## Pinout Diagram

**3-Pin SIP Package:**

```
    ┌─────┐
VCC │  1  │
    │     │
OUT │  2  │
    │     │
GND │  3  │
    └─────┘
```

### Pin Descriptions

| Pin | Symbol | Description |
|-----|--------|-------------|
| 1 | VCC | Power supply input (4.5V to 6.0V) |
| 2 | VOUT | Analog voltage output |
| 3 | GND | Ground connection |

**Connection Notes:**
- **VCC**: Connect to regulated 5V power supply
- **VOUT**: Analog output voltage proportional to magnetic field
- **GND**: Connect to system ground
- **Decoupling**: Use 0.1μF ceramic capacitor between VCC and GND

## Differences Between A1301 and A1302

### A1301 Specifications
- **Sensitivity**: 2.5mV/G typical
- **Magnetic Range**: ±1000 Gauss
- **Applications**: High-sensitivity applications, weak magnetic fields
- **Resolution**: Higher resolution for small field changes

### A1302 Specifications
- **Sensitivity**: 1.3mV/G typical
- **Magnetic Range**: ±2000 Gauss
- **Applications**: Wider range applications, stronger magnetic fields
- **Dynamic Range**: Larger magnetic field measurement range

## Applications

### Position Sensing
- **Linear Position Detection**: Measure position of magnetic targets
- **Rotary Position Sensing**: Detect angular position with rotating magnets
- **Proximity Detection**: Non-contact distance measurement
- **Valve Position Monitoring**: Hydraulic and pneumatic valve feedback

### Current Sensing
- **DC Current Measurement**: Using current-carrying conductors
- **AC Current Monitoring**: With appropriate signal conditioning
- **Power Monitoring**: Current feedback in power supplies
- **Motor Control**: Current sensing for motor drive circuits

### Automotive Applications
- **Throttle Position Sensing**: Engine management systems
- **Gear Position Detection**: Transmission control
- **Suspension Position**: Active suspension systems
- **Steering Angle Sensing**: Electronic stability control

### Industrial Applications
- **Machine Position Feedback**: CNC machines and robotics
- **Conveyor Speed Sensing**: Material handling systems
- **Fluid Level Detection**: With magnetic float systems
- **Safety Interlocks**: Magnetic door and guard sensing

## Circuit Design Considerations

### Power Supply Design
- **Regulated Supply**: Use stable 5V regulated power supply
- **Decoupling**: Place 0.1μF ceramic capacitor close to sensor
- **Supply Filtering**: Additional filtering may be needed in noisy environments
- **Ground Plane**: Use solid ground plane for best performance

### Output Signal Conditioning
- **ADC Interface**: Connect output directly to microcontroller ADC
- **Signal Filtering**: Low-pass filter for noise reduction if needed
- **Amplification**: Op-amp amplifier for increased sensitivity
- **Offset Adjustment**: Trim circuit for zero-field calibration

### Magnetic Circuit Design
- **Magnet Selection**: Choose appropriate magnet strength and type
- **Air Gap**: Optimize distance between magnet and sensor
- **Magnetic Shielding**: Shield from external magnetic fields
- **Temperature Effects**: Consider magnet temperature coefficient

## Programming Examples

### Arduino Integration
```cpp
// A1301/A1302 Hall Effect Sensor Reading
const int hallPin = A0;  // Analog input pin
const float vcc = 5.0;   // Supply voltage
const float sensitivity = 2.5; // mV/G for A1301 (use 1.3 for A1302)

void setup() {
  Serial.begin(9600);
}

void loop() {
  int rawValue = analogRead(hallPin);
  float voltage = (rawValue / 1023.0) * vcc;
  
  // Calculate magnetic field (assuming 2.5V = 0 Gauss)
  float magneticField = (voltage - 2.5) / (sensitivity / 1000.0);
  
  Serial.print("Voltage: ");
  Serial.print(voltage, 3);
  Serial.print("V, Magnetic Field: ");
  Serial.print(magneticField, 1);
  Serial.println(" Gauss");
  
  delay(100);
}
```

### Calibration Procedure
1. **Zero Field Calibration**: Measure output with no magnetic field present
2. **Known Field Calibration**: Apply known magnetic field and measure output
3. **Calculate Sensitivity**: Determine actual sensitivity from measurements
4. **Temperature Compensation**: Account for temperature effects if needed

## Installation and Mounting

### Physical Mounting
- **PCB Mounting**: Through-hole mounting on PCB
- **Mechanical Mounting**: Secure mounting to prevent vibration
- **Orientation**: Align sensitive axis with magnetic field direction
- **Protection**: Protect from mechanical damage and contamination

### Environmental Considerations
- **Temperature Range**: Ensure operation within specified temperature range
- **Humidity**: Protect from moisture and condensation
- **Vibration**: Secure mounting to prevent mechanical stress
- **EMI**: Shield from electromagnetic interference if necessary

## Troubleshooting

### Common Issues
- **No Output**: Check power supply and connections
- **Incorrect Reading**: Verify magnetic field orientation and strength
- **Noisy Output**: Add filtering and check grounding
- **Temperature Drift**: Implement temperature compensation

### Performance Optimization
- **Calibration**: Regular calibration for best accuracy
- **Filtering**: Appropriate signal filtering for application
- **Shielding**: Magnetic shielding from external fields
- **Layout**: Proper PCB layout for minimal noise

## Storage Information
- **Location**: Cabinet 3, Bin 26
- **Quantity**: 10 sensors (mix of A1301 and A1302)
- **Condition**: New, unused components
- **Packaging**: Anti-static packaging
- **Documentation**: Datasheet and application notes available
