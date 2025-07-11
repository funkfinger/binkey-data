---
title: Adafruit LSM9DS1 9-DoF IMU
description: 9-axis accelerometer, gyroscope, and magnetometer breakout board
part_number: 3387
manufacturer: Adafruit Industries
category: sensors
subcategory: motion-sensors
quantity: 1
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $14.95
datasheet: https://learn.adafruit.com/adafruit-lsm9ds1-accelerometer-plus-gyro-plus-magnetometer-9-dof-breakout
purchase_url: https://www.adafruit.com/product/3387
purchase_date: 2024-12-15
tags: [imu, accelerometer, gyroscope, magnetometer, 9dof, i2c, spi]
---

# Adafruit LSM9DS1 9-DoF IMU

9-axis inertial measurement unit combining 3-axis accelerometer, 3-axis gyroscope, and 3-axis magnetometer with temperature sensor for complete motion sensing.

## Overview

The Adafruit LSM9DS1 is a versatile 9-DoF (degrees of freedom) sensor that combines ST's LSM9DS1 accelerometer/gyroscope and magnetometer in a single breakout board. This sensor provides comprehensive motion sensing capabilities including linear acceleration, angular velocity, magnetic field measurement, and temperature sensing.

## Key Features

### Complete 9-DoF Sensing
- **3-axis accelerometer** for linear acceleration
- **3-axis gyroscope** for angular velocity  
- **3-axis magnetometer** for magnetic field/compass heading
- **Temperature sensor** for environmental monitoring
- **High resolution** 16-bit output for all sensors

### Flexible Interface Options
- **I²C and SPI** communication interfaces
- **Voltage regulation** for 3V or 5V operation
- **Level shifting** for mixed voltage systems
- **0.1″ pin spacing** for breadboard compatibility
- **Mounting holes** for secure installation

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 3.0V to 5.5V
- **Supply Current**: 3.5mA (all sensors active)
- **Interface**: I²C (up to 400kHz) or SPI (up to 10MHz)
- **Logic Levels**: 3.3V with 5V tolerance

### Accelerometer Specifications
- **Range**: ±2g, ±4g, ±8g, ±16g (selectable)
- **Resolution**: 16-bit
- **Output Data Rate**: 10Hz to 952Hz
- **Zero-g level**: ±40mg
- **Sensitivity**: 0.061 mg/LSB to 0.732 mg/LSB

### Gyroscope Specifications  
- **Range**: ±245°/s, ±500°/s, ±2000°/s (selectable)
- **Resolution**: 16-bit
- **Output Data Rate**: 14.9Hz to 952Hz
- **Zero-rate level**: ±30°/s
- **Sensitivity**: 8.75 mdps/LSB to 70 mdps/LSB

### Magnetometer Specifications
- **Range**: ±4 gauss, ±8 gauss, ±12 gauss, ±16 gauss (selectable)
- **Resolution**: 16-bit
- **Output Data Rate**: 0.625Hz to 80Hz
- **Sensitivity**: 0.14 mgauss/LSB to 0.58 mgauss/LSB

## Applications

### Navigation and Orientation
- **AHRS systems** (Attitude and Heading Reference)
- **Compass applications** with tilt compensation
- **GPS-aided navigation** with inertial backup
- **Drone flight control** and stabilization
- **Marine and aircraft** navigation systems

### Robotics and Motion Control
- **Robot orientation** and balance control
- **Autonomous vehicle** navigation
- **Robotic arm** position tracking
- **Mobile robot** dead reckoning
- **Stabilization platforms**

### Consumer Applications
- **Gaming controllers** with motion input
- **Virtual reality** head tracking
- **Smartphone orientation** sensing
- **Activity trackers** and fitness devices
- **Camera stabilization** systems

## Programming Example

### Arduino Integration
```cpp
#include <Adafruit_LSM9DS1.h>

Adafruit_LSM9DS1 lsm = Adafruit_LSM9DS1();

void setup() {
  Serial.begin(115200);
  
  if (!lsm.begin()) {
    Serial.println("Failed to communicate with LSM9DS1");
    while (1);
  }
  
  // Configure sensors
  lsm.setupAccel(lsm.LSM9DS1_ACCELRANGE_2G);
  lsm.setupMag(lsm.LSM9DS1_MAGGAIN_4GAUSS);
  lsm.setupGyro(lsm.LSM9DS1_GYROSCALE_245DPS);
}

void loop() {
  lsm.read();
  
  Serial.print("Accel X: "); Serial.print(lsm.accelData.x);
  Serial.print(" Y: "); Serial.print(lsm.accelData.y);
  Serial.print(" Z: "); Serial.println(lsm.accelData.z);
  
  Serial.print("Gyro X: "); Serial.print(lsm.gyroData.x);
  Serial.print(" Y: "); Serial.print(lsm.gyroData.y);
  Serial.print(" Z: "); Serial.println(lsm.gyroData.z);
  
  Serial.print("Mag X: "); Serial.print(lsm.magData.x);
  Serial.print(" Y: "); Serial.print(lsm.magData.y);
  Serial.print(" Z: "); Serial.println(lsm.magData.z);
  
  delay(100);
}
```

## Pinout and Connections

### I²C Mode Connections
| Pin | Signal | Description |
|-----|--------|-------------|
| VIN | VCC | Power input (3.0V to 5.5V) |
| GND | GND | Ground |
| SCL | SCL | I²C Clock |
| SDA | SDA | I²C Data |

### SPI Mode Connections
| Pin | Signal | Description |
|-----|--------|-------------|
| VIN | VCC | Power input (3.0V to 5.5V) |
| GND | GND | Ground |
| SCK | SCK | SPI Clock |
| MISO | MISO | SPI Master In Slave Out |
| MOSI | MOSI | SPI Master Out Slave In |
| CS_AG | CS_AG | Accel/Gyro Chip Select |
| CS_M | CS_M | Magnetometer Chip Select |

### Additional Pins
| Pin | Signal | Description |
|-----|--------|-------------|
| INT1 | INT1 | Interrupt 1 (Accel/Gyro) |
| INT2 | INT2 | Interrupt 2 (Accel/Gyro) |
| INTM | INTM | Magnetometer Interrupt |
| DEN | DEN | Data Enable (Gyro) |

## Advanced Features

### Sensor Fusion Capabilities
- **AHRS algorithms** for orientation estimation
- **Kalman filtering** for sensor fusion
- **Quaternion representation** for smooth rotation
- **Euler angle** calculation (roll, pitch, yaw)
- **Compass heading** with tilt compensation

### Interrupt Features
- **Motion detection** with configurable thresholds
- **Tap detection** (single and double tap)
- **Free-fall detection**
- **Magnetic threshold** detection
- **Data ready** interrupts

### Power Management
- **Low power modes** for battery applications
- **Configurable data rates** for power optimization
- **Sleep modes** with wake-up interrupts
- **Power-down** individual sensors

## Calibration Procedures

### Accelerometer Calibration
1. **Six-position calibration** (±X, ±Y, ±Z orientations)
2. **Offset correction** for zero-g bias
3. **Scale factor** adjustment
4. **Cross-axis sensitivity** compensation

### Gyroscope Calibration
1. **Zero-rate calibration** when stationary
2. **Temperature compensation**
3. **Scale factor verification**
4. **Bias stability** monitoring

### Magnetometer Calibration
1. **Hard iron calibration** (constant magnetic offsets)
2. **Soft iron calibration** (magnetic distortion correction)
3. **Magnetic declination** adjustment
4. **Environmental interference** mapping

## Design Considerations

### Mechanical Mounting
- **Rigid attachment** to minimize vibration
- **Proper orientation** alignment with vehicle axes
- **Vibration isolation** for sensitive applications
- **Temperature stability** considerations

### Electrical Design
- **Power supply filtering** for clean operation
- **I²C pull-up resistors** (typically 4.7kΩ)
- **Bypass capacitors** near power pins
- **Ground plane** for noise reduction

## Troubleshooting

### Common Issues
- **Communication failures**: Check wiring and I²C addresses
- **Noisy readings**: Verify mounting and power supply
- **Calibration drift**: Implement regular recalibration
- **Magnetic interference**: Identify and minimize sources

### Performance Optimization
- **Proper calibration**: Follow all calibration procedures
- **Environmental control**: Minimize temperature variations
- **Mechanical design**: Ensure stable mounting
- **Software filtering**: Implement appropriate filters

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 1 unit
- **Condition**: New, unused
- **Includes**: Breakout board with header pins
