---
title: Adafruit ADXL343 Accelerometer
description: Triple-axis accelerometer with advanced motion detection and low power operation
part_number: 4097
manufacturer: Adafruit Industries
category: sensors
subcategory: motion-sensors
quantity: 2
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $7.50
datasheet: https://learn.adafruit.com/adxl343-breakout-learning-guide
purchase_url: https://www.adafruit.com/product/4097
purchase_date: 2024-12-15
tags: [accelerometer, motion-sensor, 3-axis, i2c, spi, low-power, tap-detection]
---

# Adafruit ADXL343 Accelerometer

High-performance 3-axis accelerometer with advanced motion detection features, low power operation, and flexible interface options for demanding applications.

## Overview

The Adafruit ADXL343 is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16g. This sensor is based on Analog Devices' ADXL343 and provides advanced motion detection capabilities including activity/inactivity monitoring, tap detection, and free-fall detection.

## Key Features

### High Performance Sensing
- **13-bit resolution** for precise measurements
- **Multiple measurement ranges** (±2g to ±16g)
- **Low noise** and high stability
- **Fast data rates** up to 3200Hz
- **Advanced motion detection** algorithms

### Power Efficiency
- **Ultra-low power** consumption (25μA in measurement mode)
- **Multiple power modes** for different applications
- **Sleep and standby** modes for battery conservation
- **Auto-sleep** functionality
- **Wake-up on motion** capability

### Advanced Features
- **Activity/inactivity** detection
- **Single/double tap** detection
- **Free-fall detection** with configurable parameters
- **Orientation sensing** (portrait/landscape)
- **Shock detection** with programmable thresholds

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 2.0V to 3.6V (3.3V recommended)
- **Supply Current**: 25μA (measurement mode), 0.1μA (standby)
- **Interface**: I²C (up to 400kHz) or SPI (up to 5MHz)
- **I²C Address**: 0x53 (default) or 0x1D (configurable)

### Performance Specifications
- **Measurement Range**: ±2g, ±4g, ±8g, ±16g (selectable)
- **Resolution**: 13-bit (up to 4mg/LSB at ±16g)
- **Output Data Rate**: 0.1Hz to 3200Hz
- **Zero-g offset**: ±150mg maximum
- **Sensitivity**: 256 LSB/g (±2g), 128 LSB/g (±4g), 64 LSB/g (±8g), 32 LSB/g (±16g)

### Environmental Specifications
- **Operating Temperature**: -40°C to +85°C
- **Shock Survival**: 10,000g for 0.2ms
- **Package**: 3mm × 5mm × 1mm LGA

## Applications

### Consumer Electronics
- **Smartphone orientation** sensing
- **Gaming controllers** with motion input
- **Fitness trackers** and activity monitors
- **Camera stabilization** systems
- **Portable device** auto-sleep functionality

### Industrial Applications
- **Machine vibration** monitoring
- **Equipment tilt** detection
- **Asset tracking** with motion sensing
- **Safety systems** with shock detection
- **Platform stabilization** control

### Automotive Applications
- **Vehicle dynamics** monitoring
- **Crash detection** systems
- **Anti-theft** motion sensing
- **Parking assistance** with tilt detection
- **Electronic stability** control

## Programming Example

### Arduino Basic Usage
```cpp
#include <Adafruit_ADXL343.h>

Adafruit_ADXL343 accel = Adafruit_ADXL343(12345);

void setup() {
  Serial.begin(115200);
  
  if (!accel.begin()) {
    Serial.println("Could not find ADXL343");
    while (1);
  }
  
  // Set range and data rate
  accel.setRange(ADXL343_RANGE_4_G);
  accel.setDataRate(ADXL343_DATARATE_100_HZ);
  
  Serial.println("ADXL343 found!");
}

void loop() {
  sensors_event_t event;
  accel.getEvent(&event);
  
  Serial.print("X: "); Serial.print(event.acceleration.x);
  Serial.print(" Y: "); Serial.print(event.acceleration.y);
  Serial.print(" Z: "); Serial.println(event.acceleration.z);
  
  delay(100);
}
```

### Advanced Motion Detection
```cpp
// Configure tap detection
void setupTapDetection() {
  // Set tap threshold (62.5mg/LSB)
  accel.writeRegister(ADXL343_REG_THRESH_TAP, 50);  // ~3.1g threshold
  
  // Set tap duration (625μs/LSB)
  accel.writeRegister(ADXL343_REG_DUR, 15);  // ~9.4ms duration
  
  // Set tap latency (1.25ms/LSB)
  accel.writeRegister(ADXL343_REG_LATENT, 80);  // ~100ms latency
  
  // Set tap window (1.25ms/LSB)
  accel.writeRegister(ADXL343_REG_WINDOW, 200);  // ~250ms window
  
  // Enable tap detection on all axes
  accel.writeRegister(ADXL343_REG_TAP_AXES, 0x07);
  
  // Enable tap interrupt
  accel.writeRegister(ADXL343_REG_INT_ENABLE, 0x40);
}

// Configure free-fall detection
void setupFreeFallDetection() {
  // Set free-fall threshold (62.5mg/LSB)
  accel.writeRegister(ADXL343_REG_THRESH_FF, 7);  // ~437mg threshold
  
  // Set free-fall time (5ms/LSB)
  accel.writeRegister(ADXL343_REG_TIME_FF, 30);  // ~150ms duration
  
  // Enable free-fall interrupt
  accel.writeRegister(ADXL343_REG_INT_ENABLE, 0x04);
}
```

## Pinout and Connections

### Standard Connections
| Pin | Signal | Description |
|-----|--------|-------------|
| VIN | VCC | Power input (2.0V to 5.5V with regulator) |
| 3V3 | 3V3 | 3.3V regulated output |
| GND | GND | Ground |
| SCL | SCL | I²C Clock / SPI Clock |
| SDA | SDA | I²C Data / SPI MOSI |
| SDO | SDO | SPI MISO / I²C Address Select |
| CS | CS | SPI Chip Select |

### Interrupt Pins
| Pin | Signal | Description |
|-----|--------|-------------|
| INT1 | INT1 | Interrupt 1 output |
| INT2 | INT2 | Interrupt 2 output |

## Power Management

### Power Modes
- **Measurement Mode**: 25μA at 100Hz data rate
- **Standby Mode**: 0.1μA with quick wake-up
- **Sleep Mode**: Ultra-low power with wake-up capability
- **Auto-sleep**: Automatic transition based on activity

### Power Optimization Strategies
```cpp
// Configure low power mode
void configureLowPower() {
  // Set low power mode
  accel.writeRegister(ADXL343_REG_BW_RATE, 0x10);  // Low power bit set
  
  // Reduce data rate for lower power
  accel.setDataRate(ADXL343_DATARATE_12_5_HZ);
  
  // Enable auto-sleep
  accel.writeRegister(ADXL343_REG_POWER_CTL, 0x18);  // Auto-sleep + measure
  
  // Set activity threshold for wake-up
  accel.writeRegister(ADXL343_REG_THRESH_ACT, 4);  // ~250mg threshold
}
```

## Motion Detection Features

### Activity/Inactivity Detection
- **Configurable thresholds** for activity detection
- **Time-based validation** to prevent false triggers
- **Automatic sleep** transition on inactivity
- **Wake-up on activity** for power savings
- **Independent X, Y, Z** axis enable/disable

### Tap Detection
- **Single tap** and **double tap** recognition
- **Configurable thresholds** and timing parameters
- **Axis-specific** tap detection enable
- **Tap duration** and **latency** settings
- **Window timing** for double tap validation

### Free-Fall Detection
- **Configurable threshold** (typically 300-600mg)
- **Duration validation** to confirm free-fall
- **All-axis monitoring** for true free-fall detection
- **Interrupt generation** on detection
- **Low false-positive** rate with proper tuning

### Orientation Detection
- **Portrait/landscape** detection
- **Face up/face down** sensing
- **Configurable deadband** for stability
- **Hysteresis** to prevent oscillation
- **Interrupt on** orientation change

## Calibration and Setup

### Basic Calibration
1. **Offset calibration**: Measure and correct zero-g offsets
2. **Sensitivity verification**: Validate against known accelerations
3. **Temperature compensation**: Account for temperature effects
4. **Noise characterization**: Determine baseline noise levels

### Motion Detection Tuning
1. **Threshold optimization**: Adjust for application requirements
2. **Duration tuning**: Set appropriate validation times
3. **False positive reduction**: Optimize parameters for environment
4. **Environmental testing**: Validate in real operating conditions

## Design Considerations

### Mechanical Design
- **Rigid mounting**: Minimize vibration and mechanical noise
- **Proper orientation**: Align axes with measurement requirements
- **Shock protection**: Design for expected shock levels
- **Temperature stability**: Account for thermal effects

### Electrical Design
- **Power supply filtering**: Use clean, stable power source
- **Bypass capacitors**: 0.1μF ceramic near power pins
- **I²C pull-ups**: 4.7kΩ resistors on SCL/SDA
- **Interrupt handling**: Proper interrupt service routines

### Software Design
- **Interrupt-driven**: Use interrupts for efficient operation
- **Data filtering**: Implement appropriate digital filters
- **Calibration storage**: Store calibration in non-volatile memory
- **Error handling**: Robust error detection and recovery

## Troubleshooting

### Common Issues
- **High noise**: Check power supply, mounting, and filtering
- **False motion detection**: Adjust thresholds and validation times
- **Communication errors**: Verify I²C/SPI connections and settings
- **Power consumption**: Optimize data rates and power modes

### Performance Optimization
- **Proper calibration**: Follow calibration procedures carefully
- **Environmental control**: Minimize vibration and temperature variations
- **Power management**: Use appropriate power modes for application
- **Signal processing**: Implement effective filtering algorithms

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 2 units
- **Condition**: New, unused
- **Features**: High resolution, advanced motion detection, ultra-low power
