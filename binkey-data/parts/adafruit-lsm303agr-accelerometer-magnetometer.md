---
title: Adafruit LSM303AGR Accelerometer Magnetometer
description: 6-DoF accelerometer and magnetometer with STEMMA QT connectivity
part_number: 4413
manufacturer: Adafruit Industries
category: sensors
subcategory: motion-sensors
quantity: 1
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $9.95
datasheet: https://learn.adafruit.com/lsm303agr-accelerometer-magnetometer
purchase_url: https://www.adafruit.com/product/4413
purchase_date: 2024-12-15
tags: [accelerometer, magnetometer, compass, 6dof, i2c, stemma-qt]
---

# Adafruit LSM303AGR Accelerometer Magnetometer

6-DoF sensor combining 3-axis accelerometer and 3-axis magnetometer with STEMMA QT connectivity for easy compass and motion sensing applications.

## Overview

The Adafruit LSM303AGR is a 6-DoF sensor breakout that combines ST's LSM303AGR accelerometer and magnetometer in a single package. This sensor is ideal for applications requiring both motion sensing and compass functionality, with the convenience of STEMMA QT plug-and-play connectivity.

## Key Features

### Dual Sensor Functionality
- **3-axis accelerometer** for motion and tilt detection
- **3-axis magnetometer** for compass heading
- **Combined 6-DoF** sensing capability
- **Independent sensor** configuration and control
- **Synchronized data** acquisition

### Easy Integration
- **STEMMA QT connectors** for plug-and-play I²C
- **Voltage regulation** for 3V or 5V operation
- **Level shifting** for mixed voltage systems
- **0.1″ pin spacing** for breadboard compatibility
- **Compact design** with mounting holes

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 3.0V to 5.5V
- **Supply Current**: 0.9mA (both sensors active)
- **Interface**: I²C (up to 400kHz)
- **I²C Addresses**: 0x19 (accelerometer), 0x1E (magnetometer)
- **Logic Levels**: 3.3V with 5V tolerance

### Accelerometer Specifications
- **Range**: ±2g, ±4g, ±8g, ±16g (selectable)
- **Resolution**: 12-bit
- **Output Data Rate**: 1Hz to 1.344kHz
- **Zero-g level**: ±40mg
- **Sensitivity**: 1mg/LSB (±2g mode)

### Magnetometer Specifications
- **Range**: ±50 gauss
- **Resolution**: 16-bit
- **Output Data Rate**: 10Hz to 100Hz
- **Sensitivity**: 1.5 mgauss/LSB
- **Temperature compensation**: Built-in

## Applications

### Navigation and Compass
- **Digital compass** applications
- **Tilt-compensated compass** heading
- **GPS-aided navigation** systems
- **Marine and aircraft** navigation
- **Outdoor recreation** devices

### Robotics and Automation
- **Robot navigation** and orientation
- **Autonomous vehicle** heading control
- **Drone compass** and stabilization
- **Mobile robot** dead reckoning
- **Robotic platform** leveling

### Consumer Electronics
- **Smartphone compass** functionality
- **Gaming controller** motion input
- **Activity tracker** orientation
- **Camera stabilization** systems
- **Virtual reality** head tracking

## Programming Example

### Arduino Basic Usage
```cpp
#include <Adafruit_LSM303AGR_Mag.h>
#include <Adafruit_LSM303_Accel.h>

Adafruit_LSM303_Accel_Unified accel = Adafruit_LSM303_Accel_Unified(54321);
Adafruit_LSM303AGR_Mag_Unified mag = Adafruit_LSM303AGR_Mag_Unified(12345);

void setup() {
  Serial.begin(115200);
  
  if (!accel.begin()) {
    Serial.println("Could not find accelerometer");
    while (1);
  }
  
  if (!mag.begin()) {
    Serial.println("Could not find magnetometer");
    while (1);
  }
  
  Serial.println("LSM303AGR found!");
}

void loop() {
  sensors_event_t accel_event;
  sensors_event_t mag_event;
  
  accel.getEvent(&accel_event);
  mag.getEvent(&mag_event);
  
  Serial.print("Accel X: "); Serial.print(accel_event.acceleration.x);
  Serial.print(" Y: "); Serial.print(accel_event.acceleration.y);
  Serial.print(" Z: "); Serial.println(accel_event.acceleration.z);
  
  Serial.print("Mag X: "); Serial.print(mag_event.magnetic.x);
  Serial.print(" Y: "); Serial.print(mag_event.magnetic.y);
  Serial.print(" Z: "); Serial.println(mag_event.magnetic.z);
  
  delay(100);
}
```

### Compass Heading Calculation
```cpp
// Calculate compass heading with tilt compensation
float calculateHeading(float ax, float ay, float az, float mx, float my, float mz) {
  // Normalize accelerometer data
  float norm = sqrt(ax*ax + ay*ay + az*az);
  ax /= norm;
  ay /= norm;
  az /= norm;
  
  // Calculate tilt-compensated magnetic field
  float pitch = asin(-ax);
  float roll = asin(ay / cos(pitch));
  
  float mx_comp = mx * cos(pitch) + mz * sin(pitch);
  float my_comp = mx * sin(roll) * sin(pitch) + my * cos(roll) - mz * sin(roll) * cos(pitch);
  
  // Calculate heading
  float heading = atan2(my_comp, mx_comp) * 180.0 / PI;
  if (heading < 0) heading += 360;
  
  return heading;
}
```

## Pinout and Connections

### STEMMA QT Connector
| Pin | Signal | Description |
|-----|--------|-------------|
| 1 | GND | Ground |
| 2 | VCC | 3.3V Power |
| 3 | SDA | I²C Data |
| 4 | SCL | I²C Clock |

### Breakout Pins
| Pin | Signal | Description |
|-----|--------|-------------|
| VIN | VCC | Power input (3.0V to 5.5V) |
| GND | GND | Ground |
| SCL | SCL | I²C Clock |
| SDA | SDA | I²C Data |
| INT1 | INT1 | Accelerometer Interrupt 1 |
| INT2 | INT2 | Accelerometer Interrupt 2 |
| INTM | INTM | Magnetometer Interrupt |

## Calibration Procedures

### Accelerometer Calibration
1. **Six-position calibration**: Measure in all orientations
2. **Offset correction**: Remove zero-g bias
3. **Scale factor adjustment**: Normalize sensitivity
4. **Cross-axis compensation**: Minimize coupling

### Magnetometer Calibration
1. **Hard iron calibration**: Remove constant magnetic offsets
2. **Soft iron calibration**: Correct for magnetic distortion
3. **Magnetic declination**: Adjust for local magnetic variation
4. **Environmental mapping**: Identify interference sources

### Compass Calibration Procedure
```cpp
// Simple hard iron calibration
void calibrateMagnetometer() {
  float mag_min[3] = {1000, 1000, 1000};
  float mag_max[3] = {-1000, -1000, -1000};
  
  Serial.println("Rotate sensor in all directions for 30 seconds...");
  
  unsigned long start_time = millis();
  while (millis() - start_time < 30000) {
    sensors_event_t mag_event;
    mag.getEvent(&mag_event);
    
    // Update min/max values
    mag_min[0] = min(mag_min[0], mag_event.magnetic.x);
    mag_min[1] = min(mag_min[1], mag_event.magnetic.y);
    mag_min[2] = min(mag_min[2], mag_event.magnetic.z);
    
    mag_max[0] = max(mag_max[0], mag_event.magnetic.x);
    mag_max[1] = max(mag_max[1], mag_event.magnetic.y);
    mag_max[2] = max(mag_max[2], mag_event.magnetic.z);
    
    delay(50);
  }
  
  // Calculate offsets
  float mag_offset[3];
  mag_offset[0] = (mag_max[0] + mag_min[0]) / 2;
  mag_offset[1] = (mag_max[1] + mag_min[1]) / 2;
  mag_offset[2] = (mag_max[2] + mag_min[2]) / 2;
  
  Serial.println("Calibration complete!");
}
```

## Advanced Features

### Motion Detection
- **Activity/inactivity** detection
- **Free-fall detection** with configurable threshold
- **Orientation detection** (6D/4D positioning)
- **Tap detection** (single and double tap)
- **Configurable interrupts** for all features

### Power Management
- **Low power modes** for battery applications
- **Configurable data rates** for power optimization
- **Sleep modes** with interrupt wake-up
- **Independent sensor** power control

### Data Processing
- **Built-in filtering** for noise reduction
- **Temperature compensation** for magnetometer
- **Self-test functionality** for both sensors
- **FIFO buffer** for data storage

## Design Considerations

### Magnetic Interference
- **Keep away from** ferromagnetic materials
- **Minimize nearby** current-carrying conductors
- **Use magnetic shielding** if necessary
- **Calibrate in** operating environment
- **Regular recalibration** for best accuracy

### Mechanical Design
- **Rigid mounting** to minimize vibration
- **Proper orientation** alignment with vehicle axes
- **Temperature stability** considerations
- **Shock protection** for harsh environments

### Electrical Design
- **Power supply filtering** for clean operation
- **I²C pull-up resistors** (typically 4.7kΩ)
- **Bypass capacitors** near power pins
- **Ground plane** for noise reduction

## Troubleshooting

### Common Issues
- **Erratic compass readings**: Check for magnetic interference
- **Poor accelerometer accuracy**: Verify calibration and mounting
- **Communication errors**: Check I²C connections and addresses
- **High noise**: Verify power supply and mechanical mounting

### Performance Optimization
- **Proper calibration**: Follow all calibration procedures
- **Environmental control**: Minimize magnetic interference
- **Mechanical design**: Ensure stable, rigid mounting
- **Software filtering**: Implement appropriate digital filters

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 1 unit
- **Condition**: New, unused
- **Features**: STEMMA QT, compass functionality, motion detection
