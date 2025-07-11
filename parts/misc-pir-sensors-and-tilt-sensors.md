---
title: Miscellaneous PIR Sensors and Tilt Sensors
description: Collection of passive infrared motion sensors and Amazon tilt sensors for motion detection
part_number: Mixed
manufacturer: Various
category: sensors
subcategory: motion-sensors
quantity: 10+
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $3.00
purchase_date: 2024-12-15
tags: [pir, motion-sensor, tilt-sensor, infrared, passive, detection]
---

# Miscellaneous PIR Sensors and Tilt Sensors

Collection of passive infrared (PIR) motion sensors and various tilt sensors for motion detection and orientation sensing applications.

## Overview

This collection includes various PIR (Passive Infrared) motion sensors and tilt sensors from different manufacturers, primarily sourced from Amazon and other suppliers. These sensors are commonly used in security systems, automation projects, and motion-activated devices.

## PIR Motion Sensors

### Key Features
- **Passive infrared detection** of moving warm objects
- **Wide detection range** typically 3-7 meters
- **Adjustable sensitivity** and time delay (on some models)
- **3.3V and 5V compatibility**
- **Digital output** (HIGH when motion detected)
- **Low power consumption**

### Technical Specifications
- **Operating Voltage**: 3.3V to 5V (model dependent)
- **Detection Range**: 3-7 meters (model dependent)
- **Detection Angle**: 100-120 degrees typical
- **Output**: Digital HIGH/LOW
- **Trigger Time**: 0.5-300 seconds (adjustable on some models)
- **Block Time**: 2.5 seconds typical

### Common PIR Sensor Types

#### HC-SR501 PIR Sensor
- **Detection Range**: 3-7 meters (adjustable)
- **Detection Angle**: 100-120 degrees
- **Operating Voltage**: 4.5V to 20V
- **Adjustable sensitivity** and time delay
- **Trigger modes**: Single and repeat trigger

#### Mini PIR Sensors
- **Compact size** for space-constrained applications
- **3.3V operation** for low-voltage systems
- **Fixed sensitivity** and timing
- **Simple 3-pin interface** (VCC, GND, OUT)

### PIR Sensor Pinout
| Pin | Signal | Description |
|-----|--------|-------------|
| VCC | Power | 3.3V to 5V power input |
| GND | Ground | Ground connection |
| OUT | Output | Digital output (HIGH = motion detected) |

## Tilt Sensors

### Amazon Tilt Sensors (2 Types)

#### Type 1: Ball Tilt Switch
- **Mechanism**: Metal ball rolls to make/break contact
- **Operating Angle**: Typically 15-30 degrees
- **Contact Rating**: 0.5A at 125VAC
- **Response Time**: <10ms
- **Package**: Cylindrical or rectangular

#### Type 2: Mercury Tilt Switch (Legacy)
- **Mechanism**: Mercury blob makes/breaks contact
- **Operating Angle**: Typically 10-20 degrees
- **High reliability** and long life
- **Smooth operation** without bounce
- **Environmental concerns** due to mercury content

### Tilt Sensor Specifications
- **Operating Voltage**: Up to 250VAC/200VDC
- **Contact Resistance**: <100mΩ when closed
- **Operating Temperature**: -40°C to +85°C
- **Mechanical Life**: >100,000 operations
- **Operating Force**: Gravity-operated

## Applications

### Security and Automation
- **Motion-activated lighting** systems
- **Security alarm** systems
- **Automatic door** opening
- **Occupancy detection** for HVAC control
- **Pet detection** systems

### Tilt Detection Applications
- **Anti-theft systems** for equipment protection
- **Orientation monitoring** for machinery
- **Leveling systems** for platforms
- **Tamper detection** for enclosures
- **Safety interlocks** for equipment

### DIY and Hobby Projects
- **Arduino motion** detection projects
- **Raspberry Pi** security systems
- **Home automation** integration
- **Robot obstacle** avoidance
- **Interactive art** installations

## Programming Examples

### PIR Sensor with Arduino
```cpp
const int pirPin = 2;     // PIR sensor output pin
const int ledPin = 13;    // LED indicator pin

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  
  // Allow PIR sensor to stabilize
  delay(30000);  // 30 second warm-up
  Serial.println("PIR sensor ready");
}

void loop() {
  int motionState = digitalRead(pirPin);
  
  if (motionState == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Motion detected!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}
```

### Tilt Sensor with Arduino
```cpp
const int tiltPin = 3;    // Tilt sensor pin
const int buzzerPin = 8;  // Buzzer pin

bool lastTiltState = false;

void setup() {
  pinMode(tiltPin, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool currentTiltState = digitalRead(tiltPin);
  
  if (currentTiltState != lastTiltState) {
    if (currentTiltState == LOW) {
      Serial.println("Tilt detected!");
      digitalWrite(buzzerPin, HIGH);
      delay(100);
      digitalWrite(buzzerPin, LOW);
    } else {
      Serial.println("Level position");
    }
    lastTiltState = currentTiltState;
  }
  
  delay(50);
}
```

## Installation and Setup

### PIR Sensor Installation
1. **Mounting height**: 2-2.5 meters for optimal coverage
2. **Avoid heat sources**: Keep away from heaters, direct sunlight
3. **Stable mounting**: Prevent vibration and movement
4. **Clear line of sight**: Remove obstructions in detection zone
5. **Warm-up time**: Allow 30-60 seconds for stabilization

### Tilt Sensor Installation
1. **Secure mounting**: Prevent unwanted movement
2. **Proper orientation**: Align sensitive axis correctly
3. **Environmental protection**: Protect from moisture
4. **Electrical connections**: Use appropriate pull-up resistors
5. **Testing**: Verify operation at desired tilt angles

## Design Considerations

### PIR Sensor Design
- **False trigger prevention**: Avoid air currents and temperature changes
- **Detection zone**: Consider Fresnel lens pattern
- **Power supply**: Use stable, clean power source
- **Signal conditioning**: Add debouncing for clean digital signals
- **Environmental factors**: Account for temperature and humidity

### Tilt Sensor Design
- **Contact protection**: Use appropriate protection circuits
- **Debouncing**: Implement software or hardware debouncing
- **Sensitivity selection**: Choose appropriate tilt angle
- **Mounting considerations**: Ensure proper orientation
- **Environmental sealing**: Protect from contamination

## Troubleshooting

### PIR Sensor Issues
- **False triggers**: Check for heat sources, air currents
- **No detection**: Verify power, warm-up time, sensitivity
- **Continuous triggering**: Check for moving objects in field
- **Short range**: Adjust sensitivity, check lens alignment

### Tilt Sensor Issues
- **No response**: Check connections, orientation, contact integrity
- **False triggering**: Reduce vibration, check mounting
- **Intermittent operation**: Clean contacts, check for wear
- **Wrong trigger angle**: Verify sensor specifications

## Advantages and Limitations

### PIR Sensor Advantages
- **Passive operation**: No transmitted energy required
- **Wide detection area**: Large coverage zone
- **Low power consumption**: Suitable for battery operation
- **Simple interface**: Easy digital output
- **Cost effective**: Inexpensive for basic motion detection

### PIR Sensor Limitations
- **Temperature sensitive**: Performance varies with ambient temperature
- **False triggers**: Sensitive to heat sources and air movement
- **No distance measurement**: Only detects presence/absence
- **Warm-up time**: Requires stabilization period
- **Limited through materials**: Cannot detect through glass/walls

### Tilt Sensor Advantages
- **Simple and reliable**: Basic mechanical operation
- **No power required**: Passive sensing
- **Digital output**: Direct interface to logic circuits
- **Wide temperature range**: Operates in harsh environments
- **Long life**: Mechanical switches last many cycles

### Tilt Sensor Limitations
- **Limited precision**: Not suitable for precise angle measurement
- **Single axis**: Most detect tilt in only one direction
- **Contact bounce**: May require debouncing
- **Mechanical wear**: Contacts may degrade over time
- **Vibration sensitivity**: May false trigger in high-vibration environments

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 10+ sensors (mix of PIR and tilt sensors)
- **Condition**: New and used, various conditions
- **Variety**: Multiple types and manufacturers
- **Documentation**: Basic specifications and pinouts available
