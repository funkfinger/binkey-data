---
title: Pololu MinIMU-9 v3
description: 9-DOF inertial measurement unit with L3GD20H gyro and LSM303D accelerometer/magnetometer
part_number: 2468
manufacturer: Pololu
category: sensors
subcategory: motion-sensors
quantity: 1
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $29.95
datasheet: https://www.pololu.com/file/0J737/minimu-9-v3-schematic-diagram.pdf
purchase_url: https://www.pololu.com/product/2468
purchase_date: 2024-12-15
tags: [imu, gyroscope, accelerometer, magnetometer, 9dof, i2c, ahrs]
---

# Pololu MinIMU-9 v3

9-DOF inertial measurement unit (IMU) combining L3GD20H 3-axis gyroscope and LSM303D 3-axis accelerometer and 3-axis magnetometer on a compact 0.8″ × 0.5″ board.

## Overview

The Pololu MinIMU-9 v3 is a compact inertial measurement unit that combines ST's L3GD20H 3-axis gyroscope and LSM303D 3-axis accelerometer and 3-axis magnetometer to provide 9 degrees of freedom (9DOF) motion sensing. The board includes voltage regulation and level shifting to make it easy to interface with microcontrollers operating from 2.5V to 5.5V.

**Note**: This product has been discontinued and replaced by the MinIMU-9 v5, but is still available by special order.

## Key Features

### 9-DOF Motion Sensing
- **3-axis gyroscope** (L3GD20H) for rotation rate measurement
- **3-axis accelerometer** (LSM303D) for linear acceleration measurement  
- **3-axis magnetometer** (LSM303D) for magnetic field measurement
- **Sensor fusion capability** for attitude and heading reference system (AHRS)
- **Aligned axes** for simplified sensor fusion calculations

### Easy Integration
- **Voltage regulation** allows 2.5V to 5.5V operation
- **Level shifting** for I²C communication at VIN voltage level
- **I²C interface** with configurable slave addresses
- **0.1″ pin spacing** compatible with breadboards and perfboards
- **Compact size** at only 0.8″ × 0.5″

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 2.5V to 5.5V
- **Supply Current**: 6mA typical
- **Logic Levels**: VIN voltage level (2.5V to 5.5V)
- **Interface**: I²C (up to 400kHz fast mode)
- **Regulated Output**: 3.3V at up to 150mA (VDD pin)

### Physical Specifications
- **Dimensions**: 0.8″ × 0.5″ × 0.1″ (20mm × 13mm × 3mm)
- **Weight**: 0.7g (0.02oz) without header pins
- **Mounting**: Two mounting holes for #2 or M2 screws
- **Headers**: 0.1″ pin spacing, includes straight and right-angle headers

### Sensor Specifications

#### L3GD20H Gyroscope
- **Measurement Range**: ±245, ±500, or ±2000°/s (selectable)
- **Output Resolution**: 16-bit per axis
- **Operating Temperature**: -40°C to +85°C
- **Zero-rate level**: ±10°/s
- **Sensitivity**: Up to 8.75 mdps/LSB

#### LSM303D Accelerometer
- **Measurement Range**: ±2, ±4, ±6, ±8, or ±16g (selectable)
- **Output Resolution**: 16-bit per axis
- **Operating Temperature**: -40°C to +85°C
- **Zero-g level**: ±40mg
- **Sensitivity**: Up to 0.061 mg/LSB

#### LSM303D Magnetometer
- **Measurement Range**: ±2, ±4, ±8, or ±12 gauss (selectable)
- **Output Resolution**: 16-bit per axis
- **Operating Temperature**: -40°C to +85°C
- **Sensitivity**: Up to 0.080 mgauss/LSB

## Pinout and Connections

### Pin Configuration

| Pin | Description |
|-----|-------------|
| SCL | I²C clock line (level-shifted to VIN) |
| SDA | I²C data line (level-shifted to VIN) |
| GND | Ground connection |
| VIN | Main power supply (2.5V to 5.5V) |
| VDD | 3.3V regulated output (up to 150mA) |
| SA0 | I²C address selection (3.3V logic level) |

### Connection Notes
- **VIN**: Connect to main power supply (2.5V to 5.5V)
- **GND**: Connect to system ground
- **SCL/SDA**: Connect to I²C bus at VIN voltage level
- **VDD**: 3.3V output for external components (optional)
- **SA0**: Pull low to change I²C slave addresses (default high)

### I²C Addresses

| Sensor | Default Address | SA0 Low Address |
|--------|----------------|-----------------|
| L3GD20H (Gyro) | 0x6B (1101011b) | 0x6A (1101010b) |
| LSM303D (Accel/Mag) | 0x1D (0011101b) | 0x1E (0011110b) |

## Applications

### Robotics and Automation
- **Robot orientation sensing** for balance and navigation
- **Drone flight control** and stabilization systems
- **Autonomous vehicle** attitude determination
- **Robotic arm** position and movement tracking
- **Mobile robot** dead reckoning and localization

### Motion Tracking
- **Human motion capture** for sports and rehabilitation
- **Gaming controllers** with motion input
- **Virtual reality** head tracking systems
- **Gesture recognition** interfaces
- **Activity monitoring** devices

### Navigation Systems
- **Attitude and heading reference** systems (AHRS)
- **Inertial navigation** systems (INS)
- **GPS-aided navigation** with inertial backup
- **Marine navigation** for boats and ships
- **Aircraft attitude** indicators

### Industrial Applications
- **Machine vibration** monitoring and analysis
- **Platform stabilization** systems
- **Tilt and orientation** monitoring
- **Equipment positioning** feedback
- **Safety systems** for machinery

## Programming and Integration

### Arduino Library Support
Pololu provides Arduino libraries for easy integration:
- **L3G Arduino Library**: For L3GD20H gyroscope
- **LSM303 Arduino Library**: For LSM303D accelerometer/magnetometer
- **MinIMU-9 AHRS**: Complete attitude estimation system

### Basic Arduino Example
```cpp
#include <Wire.h>
#include <L3G.h>
#include <LSM303.h>

L3G gyro;
LSM303 compass;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  
  if (!gyro.init()) {
    Serial.println("Failed to detect gyro");
    while (1);
  }
  
  if (!compass.init()) {
    Serial.println("Failed to detect compass");
    while (1);
  }
  
  gyro.enableDefault();
  compass.enableDefault();
}

void loop() {
  gyro.read();
  compass.read();
  
  Serial.print("G: ");
  Serial.print(gyro.g.x); Serial.print(" ");
  Serial.print(gyro.g.y); Serial.print(" ");
  Serial.print(gyro.g.z); Serial.print(" ");
  
  Serial.print("A: ");
  Serial.print(compass.a.x); Serial.print(" ");
  Serial.print(compass.a.y); Serial.print(" ");
  Serial.print(compass.a.z); Serial.print(" ");
  
  Serial.print("M: ");
  Serial.print(compass.m.x); Serial.print(" ");
  Serial.print(compass.m.y); Serial.print(" ");
  Serial.print(compass.m.z);
  
  Serial.println();
  delay(100);
}
```

### AHRS Implementation
The MinIMU-9 v3 can be used to create a complete attitude and heading reference system:
- **Roll, pitch, yaw** angle calculation
- **Quaternion** representation for smooth rotation
- **Sensor fusion** algorithms (Kalman filter, complementary filter)
- **Calibration** procedures for accurate measurements

## Calibration and Setup

### Gyroscope Calibration
1. **Zero-rate calibration**: Measure gyro output when stationary
2. **Temperature compensation**: Account for temperature drift
3. **Scale factor calibration**: Verify sensitivity settings
4. **Bias stability**: Monitor long-term drift characteristics

### Accelerometer Calibration
1. **Six-position calibration**: Measure in all orientations
2. **Offset correction**: Remove zero-g bias errors
3. **Scale factor correction**: Normalize sensitivity
4. **Cross-axis sensitivity**: Compensate for coupling effects

### Magnetometer Calibration
1. **Hard iron calibration**: Remove constant magnetic offsets
2. **Soft iron calibration**: Correct for magnetic distortion
3. **Magnetic declination**: Account for local magnetic variation
4. **Environmental mapping**: Identify magnetic interference sources

## Design Considerations

### Power Supply Design
- **Stable voltage**: Use regulated power supply for best performance
- **Decoupling**: Add capacitors near power pins
- **Current capability**: Ensure supply can provide 6mA minimum
- **Noise filtering**: Filter switching noise from power supplies

### Mechanical Mounting
- **Rigid mounting**: Minimize vibration and mechanical stress
- **Axis alignment**: Align sensor axes with vehicle/robot axes
- **Thermal isolation**: Protect from temperature extremes
- **Shock protection**: Use damping for high-shock environments

### Signal Processing
- **Digital filtering**: Apply low-pass filters to reduce noise
- **Sensor fusion**: Combine multiple sensors for best accuracy
- **Coordinate transforms**: Convert between sensor and body frames
- **Real-time processing**: Implement efficient algorithms for real-time use

## Troubleshooting

### Common Issues
- **No I²C communication**: Check wiring and pull-up resistors
- **Incorrect readings**: Verify sensor orientation and calibration
- **Drift problems**: Implement proper calibration and filtering
- **Power issues**: Check voltage levels and current consumption

### Performance Optimization
- **Proper calibration**: Follow calibration procedures carefully
- **Environmental control**: Minimize temperature and vibration
- **Software filtering**: Implement appropriate digital filters
- **Regular recalibration**: Update calibration parameters periodically

## Included Components
- **MinIMU-9 v3 board** with sensors and electronics
- **1×6 straight header pins** (0.1″ spacing)
- **1×5 right-angle header pins** (0.1″ spacing)
- **Documentation** and example code links

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 1 unit
- **Condition**: New, unused
- **Packaging**: Anti-static packaging with headers
- **Status**: Discontinued product, special order only
