---
title: Adafruit LSM6DS33 6-DoF IMU
description: 6-axis accelerometer and gyroscope with STEMMA QT connectivity
part_number: 4480
manufacturer: Adafruit Industries
category: sensors
subcategory: motion-sensors
quantity: 2
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $9.95
datasheet: https://learn.adafruit.com/lsm6ds33-6-dof-imu=accelerometer-gyro
purchase_url: https://www.adafruit.com/product/4480
purchase_date: 2024-12-15
tags: [imu, accelerometer, gyroscope, 6dof, i2c, spi, stemma-qt]
---

# Adafruit LSM6DS33 6-DoF IMU

6-axis inertial measurement unit combining 3-axis accelerometer and 3-axis gyroscope with STEMMA QT connectivity for easy plug-and-play integration.

## Overview

The Adafruit LSM6DS33 6-DoF IMU is a breakout board featuring ST's LSM6DS33 sensor that combines a 3-axis accelerometer and 3-axis gyroscope in a single package. The board includes voltage regulation, level shifting, and STEMMA QT connectors for easy integration with microcontroller projects.

**Note**: This product has been discontinued and replaced by the LSM6DS3TR-C.

## Key Features

### 6-Axis Motion Sensing
- **3-axis accelerometer** for linear acceleration measurement
- **3-axis gyroscope** for angular velocity measurement
- **Configurable ranges** for both sensors
- **High resolution** 16-bit output
- **Advanced features** including tap detection and free-fall detection

### Easy Integration
- **STEMMA QT connectors** for plug-and-play I²C connection
- **Voltage regulation** for 3V or 5V operation
- **Level shifting** for mixed voltage systems
- **Multiple interfaces** (I²C and SPI)
- **Compact design** with mounting holes

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 3.0V to 5.5V
- **Supply Current**: 0.9mA (accelerometer + gyroscope active)
- **Interface**: I²C (up to 400kHz) or SPI (up to 10MHz)
- **Logic Levels**: 3.3V with 5V tolerance
- **I²C Addresses**: 0x6A (default) or 0x6B (configurable)

### Accelerometer Specifications
- **Measurement Range**: ±2g, ±4g, ±8g, ±16g (selectable)
- **Resolution**: 16-bit
- **Sensitivity**: 0.061 mg/LSB (±2g), 0.122 mg/LSB (±4g), 0.244 mg/LSB (±8g), 0.488 mg/LSB (±16g)
- **Output Data Rate**: 12.5Hz to 1.6kHz
- **Zero-g level**: ±40mg
- **Noise density**: 90 μg/√Hz

### Gyroscope Specifications
- **Measurement Range**: ±125°/s, ±250°/s, ±500°/s, ±1000°/s, ±2000°/s (selectable)
- **Resolution**: 16-bit
- **Sensitivity**: 4.375 mdps/LSB (±125°/s), 8.75 mdps/LSB (±250°/s), 17.5 mdps/LSB (±500°/s), 35 mdps/LSB (±1000°/s), 70 mdps/LSB (±2000°/s)
- **Output Data Rate**: 12.5Hz to 1.6kHz
- **Zero-rate level**: ±10°/s
- **Angular rate noise density**: 0.004 °/s/√Hz

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
| SCL | SCL | I²C Clock / SPI Clock |
| SDA | SDA | I²C Data / SPI MOSI |
| SDO | SDO | SPI MISO / I²C Address Select |
| CS | CS | SPI Chip Select |
| INT1 | INT1 | Interrupt 1 output |
| INT2 | INT2 | Interrupt 2 output |

## Applications

### Robotics and Automation
- **Robot balance and stabilization**
- **Drone flight control systems**
- **Autonomous vehicle navigation**
- **Robotic arm orientation tracking**
- **Mobile robot dead reckoning**

### Motion Tracking
- **Human activity monitoring**
- **Sports performance analysis**
- **Gaming motion controllers**
- **Virtual reality tracking**
- **Gesture recognition systems**

### Industrial Applications
- **Machine vibration monitoring**
- **Equipment tilt detection**
- **Platform stabilization**
- **Safety monitoring systems**
- **Precision positioning**

## Programming and Integration

### Arduino Library Support
```cpp
#include <Adafruit_LSM6DS33.h>

Adafruit_LSM6DS33 lsm6ds33;

void setup() {
  Serial.begin(115200);
  
  if (!lsm6ds33.begin_I2C()) {
    Serial.println("Failed to find LSM6DS33 chip");
    while (1) { delay(10); }
  }
  
  Serial.println("LSM6DS33 Found!");
}

void loop() {
  sensors_event_t accel;
  sensors_event_t gyro;
  sensors_event_t temp;
  
  lsm6ds33.getEvent(&accel, &gyro, &temp);
  
  Serial.print("Accel X: "); Serial.print(accel.acceleration.x);
  Serial.print(" Y: "); Serial.print(accel.acceleration.y);
  Serial.print(" Z: "); Serial.println(accel.acceleration.z);
  
  Serial.print("Gyro X: "); Serial.print(gyro.gyro.x);
  Serial.print(" Y: "); Serial.print(gyro.gyro.y);
  Serial.print(" Z: "); Serial.println(gyro.gyro.z);
  
  delay(100);
}
```

### Configuration Options
- **Accelerometer range**: ±2g to ±16g
- **Gyroscope range**: ±125°/s to ±2000°/s
- **Output data rate**: 12.5Hz to 1.6kHz
- **High-pass filtering**: Configurable cutoff frequencies
- **Interrupt configuration**: Motion detection, tap detection, free-fall

## Advanced Features

### Motion Detection
- **Tap detection**: Single and double tap recognition
- **Free-fall detection**: Configurable threshold and duration
- **Wake-up detection**: Motion-based wake from sleep
- **Activity/inactivity**: Automatic activity classification
- **6D/4D orientation**: Device orientation detection

### Data Management
- **FIFO buffer**: Up to 4KB internal buffer
- **Timestamp**: Internal timestamp for data synchronization
- **Batch mode**: Low-power data collection
- **Interrupt routing**: Flexible interrupt pin assignment

## Calibration and Setup

### Basic Calibration
1. **Accelerometer offset**: Measure in all six orientations
2. **Gyroscope bias**: Measure when stationary
3. **Temperature compensation**: Account for temperature effects
4. **Cross-axis sensitivity**: Minimize coupling between axes

### Performance Optimization
- **Stable mounting**: Secure mechanical attachment
- **Temperature control**: Maintain stable operating temperature
- **Vibration isolation**: Minimize external vibrations
- **Power supply**: Use clean, stable power source

## Design Considerations

### Power Management
- **Low power modes**: Multiple sleep and standby modes
- **Power consumption**: Optimize for battery-powered applications
- **Wake-up sources**: Configure interrupt-based wake-up
- **Supply decoupling**: Proper power supply filtering

### Signal Processing
- **Digital filtering**: Built-in anti-aliasing filters
- **Data fusion**: Combine accelerometer and gyroscope data
- **Coordinate transformation**: Convert between reference frames
- **Noise reduction**: Implement appropriate filtering algorithms

## Troubleshooting

### Common Issues
- **Communication errors**: Check I²C/SPI connections and addresses
- **Incorrect readings**: Verify sensor orientation and calibration
- **High noise**: Check mechanical mounting and power supply
- **Interrupt issues**: Verify interrupt configuration and routing

### Performance Tips
- **Proper calibration**: Follow calibration procedures carefully
- **Mechanical design**: Ensure rigid mounting and proper orientation
- **Software filtering**: Implement appropriate digital filters
- **Environmental control**: Minimize temperature variations

## Included Components
- **LSM6DS33 breakout board** with STEMMA QT connectors
- **Header pins** for breadboard use
- **Mounting holes** for secure installation
- **Arduino library** and example code

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 2 units
- **Condition**: New, unused
- **Status**: Discontinued, replaced by LSM6DS3TR-C
