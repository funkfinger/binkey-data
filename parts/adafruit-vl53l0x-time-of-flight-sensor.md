---
title: Adafruit VL53L0X Time of Flight Distance Sensor
description: Laser-based distance sensor with 30-1200mm range and STEMMA QT connectivity
part_number: 3317
manufacturer: Adafruit Industries
category: sensors
subcategory: proximity-sensors
quantity: 1
location: 
  - Cabinet-3
  - Bin-31
cost_per_unit: $14.95
datasheet: https://learn.adafruit.com/adafruit-vl53l0x-micro-lidar-distance-sensor-breakout
purchase_url: https://www.adafruit.com/product/3317
purchase_date: 2024-12-15
tags: [time-of-flight, distance-sensor, laser, lidar, i2c, stemma-qt]
---

# Adafruit VL53L0X Time of Flight Distance Sensor

Precision laser-based distance sensor using Time of Flight technology for accurate distance measurements from 30mm to 1200mm with STEMMA QT connectivity.

## Overview

The Adafruit VL53L0X is a Time of Flight (ToF) distance sensor that uses a tiny invisible laser and matching sensor to measure distance by calculating the time it takes for light to bounce back from an object. Unlike ultrasonic sensors with wide detection cones or IR sensors with linearity issues, the VL53L0X provides precise, narrow-beam distance measurement.

## Key Features

### Time of Flight Technology
- **Invisible laser source** for precise distance measurement
- **Narrow detection cone** (35 degrees) for focused sensing
- **No linearity problems** unlike IR distance sensors
- **No double imaging** issues common with other sensors
- **Immune to ambient light** variations

### Precision Performance
- **High accuracy** with 3-12% ranging precision
- **Fast measurement** with minimal delay
- **Consistent readings** across temperature range
- **Multiple ranging modes** for different applications
- **Programmable measurement** timing and accuracy

### Easy Integration
- **STEMMA QT connectors** for plug-and-play I²C
- **Voltage regulation** for 3-5V operation
- **Level shifting** for mixed voltage systems
- **Arduino and CircuitPython** library support
- **Compact form factor** for space-constrained applications

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 3.0V to 5.5V (with onboard regulator)
- **Supply Current**: 19mA active, 5μA standby
- **Interface**: I²C (up to 400kHz)
- **I²C Address**: 0x29 (default, programmable)
- **Logic Levels**: 3.3V with 5V tolerance

### Performance Specifications
- **Measurement Range**: 30mm to 1200mm (default mode)
- **Extended Range**: Up to 2000mm (long range mode, white surface)
- **Accuracy**: ±3% to ±12% (depending on conditions)
- **Detection Angle**: 35 degrees cone
- **Measurement Rate**: Up to 50Hz
- **Resolution**: 1mm

### Environmental Specifications
- **Operating Temperature**: -20°C to +70°C
- **Storage Temperature**: -40°C to +85°C
- **Ambient Light**: Immune to ambient light interference
- **Target Reflectance**: Works with various surface types
- **Laser Class**: Class 1 (eye-safe)

### Physical Specifications
- **Dimensions**: 21.0mm × 18.0mm × 2.8mm
- **Weight**: 1.3g
- **Mounting**: Four mounting holes
- **Connectors**: Two STEMMA QT connectors

## Applications

### Robotics and Automation
- **Robot navigation** and obstacle avoidance
- **Autonomous vehicle** distance sensing
- **Drone altitude** and obstacle detection
- **Robotic arm** positioning and safety
- **Mobile robot** mapping and localization

### Industrial Applications
- **Level measurement** in tanks and containers
- **Conveyor belt** object detection
- **Machine safety** proximity sensing
- **Quality control** dimensional measurement
- **Automated sorting** systems

### Consumer Electronics
- **Smart home** occupancy detection
- **Camera autofocus** assistance
- **Gaming controllers** gesture recognition
- **Security systems** perimeter monitoring
- **Interactive displays** proximity activation

### Scientific and Educational
- **Physics experiments** distance measurement
- **STEM education** sensor projects
- **Research applications** precise ranging
- **Environmental monitoring** water level sensing
- **Laboratory automation** positioning systems

## Programming Examples

### Arduino Basic Usage
```cpp
#include <Adafruit_VL53L0X.h>

Adafruit_VL53L0X lox = Adafruit_VL53L0X();

void setup() {
  Serial.begin(115200);
  
  if (!lox.begin()) {
    Serial.println("Failed to boot VL53L0X");
    while(1);
  }
  
  Serial.println("VL53L0X API Simple Ranging example");
}

void loop() {
  VL53L0X_RangingMeasurementData_t measure;
  
  lox.rangingTest(&measure, false);
  
  if (measure.RangeStatus != 4) {
    Serial.print("Distance (mm): ");
    Serial.println(measure.RangeMilliMeter);
  } else {
    Serial.println("Out of range");
  }
  
  delay(100);
}
```

### Advanced Configuration
```cpp
// Configure for long range mode
void setupLongRange() {
  // Lower the return signal rate limit (default is 0.25 MCPS)
  lox.setSignalRateLimit(0.1);
  
  // Increase laser pulse periods (defaults are 14 and 10 PCLKs)
  lox.setVcselPulsePeriod(VL53L0X_VCSEL_PERIOD_PRE_RANGE, 18);
  lox.setVcselPulsePeriod(VL53L0X_VCSEL_PERIOD_FINAL_RANGE, 14);
  
  // Increase timing budget to 200ms (default is 33ms)
  lox.setMeasurementTimingBudget(200000);
}

// Configure for high speed mode
void setupHighSpeed() {
  // Reduce timing budget for faster measurements
  lox.setMeasurementTimingBudget(20000);  // 20ms
  
  // Set higher signal rate limit
  lox.setSignalRateLimit(0.5);
}

// Configure for high accuracy mode
void setupHighAccuracy() {
  // Increase timing budget for better accuracy
  lox.setMeasurementTimingBudget(200000);  // 200ms
  
  // Lower signal rate limit for better accuracy
  lox.setSignalRateLimit(0.25);
}
```

### CircuitPython Example
```python
import time
import board
import busio
import adafruit_vl53l0x

# Initialize I2C bus and sensor
i2c = busio.I2C(board.SCL, board.SDA)
vl53 = adafruit_vl53l0x.VL53L0X(i2c)

# Optionally adjust the measurement timing budget to change speed and accuracy
# vl53.measurement_timing_budget = 200000  # 200ms for high accuracy
# vl53.measurement_timing_budget = 20000   # 20ms for high speed

while True:
    try:
        distance = vl53.range
        print(f"Distance: {distance}mm")
    except RuntimeError:
        print("Range error")
    
    time.sleep(0.1)
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
| GPIO1 | GPIO1 | Interrupt output |
| XSHUT | XSHUT | Shutdown input |

### Connection Notes
- **VIN**: Connect to 3.3V or 5V power supply
- **GND**: Connect to system ground
- **SCL/SDA**: I²C bus connections (pull-up resistors included)
- **GPIO1**: Interrupt output for data ready or threshold alerts
- **XSHUT**: Pull low to shutdown sensor, high for normal operation

## Measurement Modes and Configuration

### Default Mode
- **Range**: 30mm to 1200mm
- **Timing Budget**: 33ms
- **Accuracy**: Good for most applications
- **Speed**: Fast measurements

### Long Range Mode
- **Range**: Up to 2000mm (white reflective surface)
- **Timing Budget**: 200ms
- **Accuracy**: Reduced at maximum range
- **Applications**: Large area monitoring

### High Speed Mode
- **Range**: 30mm to 800mm
- **Timing Budget**: 20ms
- **Accuracy**: Slightly reduced
- **Applications**: Fast-moving object detection

### High Accuracy Mode
- **Range**: 30mm to 1200mm
- **Timing Budget**: 200ms
- **Accuracy**: Maximum precision
- **Applications**: Precision measurement

## Performance Factors

### Target Surface Properties
- **Reflectivity**: White/light surfaces give best range
- **Surface finish**: Matte surfaces work better than glossy
- **Material**: Non-absorbing materials preferred
- **Angle**: Perpendicular surfaces give best accuracy

### Environmental Conditions
- **Ambient light**: Minimal effect on performance
- **Temperature**: Stable across operating range
- **Humidity**: No significant impact
- **Vibration**: Minimal effect on readings

### Measurement Optimization
- **Timing budget**: Balance speed vs accuracy
- **Signal rate limit**: Adjust for target reflectivity
- **VCSEL pulse periods**: Optimize for range requirements
- **Averaging**: Implement software averaging for stability

## Design Considerations

### Mechanical Design
- **Sensor orientation**: Point directly at target surface
- **Mounting stability**: Secure mounting to prevent vibration
- **Optical window**: Keep sensor window clean and unobstructed
- **Target alignment**: Ensure target is within detection cone

### Electrical Design
- **Power supply**: Use clean, stable power source
- **I²C bus**: Include appropriate pull-up resistors (10kΩ typical)
- **Bypass capacitors**: Add near power pins for noise reduction
- **Ground plane**: Use solid ground connection

### Software Design
- **Error handling**: Check for range status and out-of-range conditions
- **Filtering**: Implement appropriate signal filtering
- **Calibration**: Consider offset calibration for specific applications
- **Interrupt handling**: Use GPIO1 for efficient data collection

## Troubleshooting

### Common Issues
- **No readings**: Check power, I²C connections, and sensor orientation
- **Erratic readings**: Verify target surface properties and stability
- **Short range**: Check for obstructions or poor target reflectivity
- **Slow response**: Adjust timing budget for application requirements

### Performance Optimization
- **Target selection**: Use appropriate target surface for best results
- **Environmental control**: Minimize vibration and movement
- **Configuration tuning**: Optimize settings for specific application
- **Signal processing**: Implement appropriate filtering and averaging

## Advantages and Limitations

### Advantages
- **High precision**: Accurate distance measurement
- **Narrow beam**: Focused detection area
- **Ambient light immunity**: Works in various lighting conditions
- **Fast response**: Quick measurement updates
- **Easy integration**: Simple I²C interface with libraries

### Limitations
- **Range dependent on target**: Performance varies with surface properties
- **Single point measurement**: Only measures distance to one point
- **Line of sight required**: Cannot measure through transparent materials
- **Power consumption**: Higher than passive sensors
- **Cost**: More expensive than basic distance sensors

## Storage Information
- **Location**: Cabinet 3, Bin 31
- **Quantity**: 1 unit
- **Condition**: New, unused
- **Features**: STEMMA QT, laser ToF technology, Arduino/CircuitPython support
- **Accessories**: Includes header pins and STEMMA QT connectors
