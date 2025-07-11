---
title: Radial Tilt Switches
description: Mechanical tilt switches for orientation and motion detection applications
part_number: Generic Radial Tilt Switch
manufacturer: Various
category: sensors
subcategory: motion-sensors
quantity: 20+
location: 
  - Cabinet-3
  - Bin-26
cost_per_unit: $0.50
purchase_date: 2024-12-15
tags: [tilt-switch, motion-sensor, mechanical, orientation, gravity]
---

# Radial Tilt Switches

Mechanical tilt switches that detect orientation changes and tilting motion using gravity-operated internal mechanisms for simple and reliable tilt detection.

## Overview

Radial tilt switches are simple mechanical devices that change their electrical state when tilted beyond a certain angle. They use gravity-operated internal mechanisms such as rolling balls, mercury (in older designs), or pendulum systems to detect orientation changes. These switches are commonly used in applications requiring basic tilt detection, orientation sensing, and motion-activated circuits.

## Key Features

### Simple Mechanical Operation
- **Gravity-operated mechanism** for reliable tilt detection
- **No external power required** for sensing operation
- **Instant response** to orientation changes
- **Mechanical contact closure** for digital output
- **Durable construction** for long service life

### Versatile Design Options
- **Multiple tilt angles** available (15°, 30°, 45°, 60°, 90°)
- **Various package sizes** for different applications
- **Different sensitivity levels** for specific requirements
- **Normally open or normally closed** contact configurations
- **Omnidirectional or directional** sensing options

## Technical Specifications

### Electrical Characteristics
- **Contact Type**: SPST (Single Pole Single Throw)
- **Contact Rating**: 0.5A at 125VAC, 1A at 30VDC typical
- **Contact Resistance**: <100mΩ when closed
- **Insulation Resistance**: >100MΩ at 500VDC
- **Dielectric Strength**: 1000VAC for 1 minute
- **Operating Voltage**: Up to 250VAC/200VDC

### Mechanical Specifications
- **Operating Angle**: 15° to 90° (depending on model)
- **Operating Force**: Gravity-operated (no external force required)
- **Response Time**: <10ms typical
- **Bounce Time**: <5ms typical
- **Mechanical Life**: >100,000 operations
- **Operating Temperature**: -40°C to +85°C

### Physical Characteristics
- **Package Types**: Cylindrical, rectangular, or custom shapes
- **Typical Dimensions**: 6mm to 20mm diameter/width
- **Lead Configuration**: Radial leads, axial leads, or PCB pins
- **Mounting**: Through-hole, surface mount, or mechanical mounting
- **Weight**: 1-10 grams depending on size

## Types of Tilt Switches

### Ball-Type Tilt Switches
- **Mechanism**: Metal ball rolls to make/break contact
- **Advantages**: Simple, reliable, cost-effective
- **Applications**: Basic tilt detection, orientation sensing
- **Sensitivity**: Medium to low sensitivity
- **Response**: Fast response to tilt changes

### Pendulum-Type Tilt Switches
- **Mechanism**: Weighted pendulum activates contacts
- **Advantages**: Adjustable sensitivity, precise angle detection
- **Applications**: Precision tilt measurement, leveling systems
- **Sensitivity**: High sensitivity and accuracy
- **Response**: Smooth, predictable operation

### Conductive Liquid Tilt Switches
- **Mechanism**: Conductive liquid bridges contacts when tilted
- **Advantages**: Smooth operation, no mechanical wear
- **Applications**: Precision instruments, medical devices
- **Sensitivity**: Very high sensitivity
- **Response**: Gradual, smooth transition

## Applications

### Safety and Security
- **Anti-theft Systems**: Detect movement of protected objects
- **Fall Detection**: Personal safety devices and alarms
- **Equipment Monitoring**: Detect tipping or overturning
- **Tamper Detection**: Security system activation
- **Emergency Shutoffs**: Safety interlocks for machinery

### Automotive Applications
- **Rollover Detection**: Vehicle stability systems
- **Parking Sensors**: Detect vehicle on inclines
- **Leveling Systems**: RV and trailer leveling
- **Alarm Systems**: Car alarm tilt sensors
- **Dashboard Indicators**: Incline warning systems

### Consumer Electronics
- **Gaming Controllers**: Motion-based input devices
- **Mobile Devices**: Screen rotation detection
- **Toys and Games**: Motion-activated features
- **Flashlights**: Automatic on/off based on orientation
- **Remote Controls**: Gesture-based control

### Industrial Applications
- **Machine Monitoring**: Detect equipment tilt or movement
- **Conveyor Systems**: Product orientation detection
- **Construction Equipment**: Leveling and positioning
- **Marine Applications**: Boat and ship orientation
- **Agricultural Equipment**: Implement positioning

## Circuit Integration

### Basic Tilt Detection Circuit
```
VCC ----[Pull-up Resistor]----+---- Digital Input Pin
                              |
                         Tilt Switch
                              |
                             GND
```

### Arduino Integration Example
```cpp
// Tilt Switch Reading
const int tiltPin = 2;        // Digital input pin
const int ledPin = 13;        // LED output pin
bool lastTiltState = false;

void setup() {
  pinMode(tiltPin, INPUT_PULLUP);  // Enable internal pull-up
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool currentTiltState = digitalRead(tiltPin);
  
  if (currentTiltState != lastTiltState) {
    if (currentTiltState == LOW) {
      Serial.println("Tilt detected!");
      digitalWrite(ledPin, HIGH);
    } else {
      Serial.println("Level position");
      digitalWrite(ledPin, LOW);
    }
    lastTiltState = currentTiltState;
  }
  
  delay(50);  // Debounce delay
}
```

## Installation and Mounting

### Orientation Considerations
- **Sensitive Axis**: Align switch sensitive axis with desired tilt direction
- **Mounting Angle**: Consider initial mounting angle for proper operation
- **Gravity Direction**: Ensure gravity can operate the internal mechanism
- **Vibration**: Mount securely to prevent false triggering

### Electrical Connections
- **Contact Protection**: Use appropriate contact protection for inductive loads
- **Pull-up Resistors**: Use pull-up resistors for digital logic interfaces
- **Debouncing**: Implement software or hardware debouncing as needed
- **EMI Protection**: Shield from electromagnetic interference if required

### Mechanical Mounting
- **Secure Mounting**: Prevent movement that could affect operation
- **Shock Protection**: Protect from excessive mechanical shock
- **Environmental Sealing**: Seal against moisture and contaminants
- **Accessibility**: Allow for testing and maintenance access

## Design Considerations

### Sensitivity Selection
- **Application Requirements**: Choose appropriate tilt angle for application
- **False Trigger Prevention**: Select sensitivity to avoid unwanted activation
- **Response Time**: Consider required response speed
- **Hysteresis**: Account for switch hysteresis in system design

### Environmental Factors
- **Temperature Effects**: Consider temperature effects on mechanism
- **Vibration Immunity**: Design to reject vibration-induced false triggers
- **Shock Resistance**: Ensure switch can withstand expected shock levels
- **Contamination Protection**: Protect internal mechanism from contamination

### Electrical Interface
- **Contact Rating**: Ensure contacts can handle required current/voltage
- **Contact Protection**: Use snubber circuits for inductive loads
- **Signal Conditioning**: Add filtering and debouncing as needed
- **Isolation**: Consider optical isolation for high-voltage applications

## Troubleshooting

### Common Issues
- **No Response**: Check orientation, mounting, and electrical connections
- **False Triggering**: Reduce sensitivity or add vibration dampening
- **Intermittent Operation**: Check for loose connections or contamination
- **Contact Bounce**: Implement proper debouncing techniques

### Performance Optimization
- **Proper Mounting**: Ensure correct orientation and secure mounting
- **Contact Protection**: Use appropriate protection circuits
- **Environmental Protection**: Seal against moisture and contamination
- **Regular Testing**: Periodic testing to ensure proper operation

## Advantages and Limitations

### Advantages
- **Simple and Reliable**: Basic mechanical operation
- **No Power Required**: Passive sensing operation
- **Cost Effective**: Low cost for basic applications
- **Wide Temperature Range**: Operates in harsh environments
- **Digital Output**: Direct interface to digital systems

### Limitations
- **Limited Precision**: Not suitable for precise angle measurement
- **Mechanical Wear**: Contacts may wear over time
- **Vibration Sensitivity**: May false trigger in high-vibration environments
- **Single Axis**: Most switches detect tilt in only one direction
- **Contact Bounce**: Requires debouncing for clean digital signals

## Storage Information
- **Location**: Cabinet 3, Bin 26
- **Quantity**: 20+ switches of various types and angles
- **Condition**: New, unused components
- **Packaging**: Individual protective packaging
- **Variety**: Multiple tilt angles and package types available
