---
title: Adafruit LIS3DH Accelerometer
description: Triple-axis accelerometer with motion detection and low power modes
part_number: 2809
manufacturer: Adafruit Industries
category: sensors
subcategory: motion-sensors
quantity: 2
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $4.95
datasheet: https://learn.adafruit.com/adafruit-lis3dh-triple-axis-accelerometer-breakout
purchase_url: https://www.adafruit.com/product/2809
purchase_date: 2024-12-15
tags: [accelerometer, motion-sensor, 3-axis, i2c, spi, low-power]
---

# Adafruit LIS3DH Accelerometer

Ultra-low-power 3-axis accelerometer with advanced motion detection features and configurable interrupt system for battery-powered applications.

## Overview

The Adafruit LIS3DH is a triple-axis accelerometer breakout board featuring ST's LIS3DH sensor. This accelerometer is designed for ultra-low-power applications while providing advanced motion detection capabilities including tap detection, orientation sensing, and free-fall detection.

## Key Features

### Low Power Operation
- **Ultra-low power consumption** down to 2μA
- **Multiple power modes** for different applications
- **Sleep and wake-up** functionality
- **Battery-friendly** operation
- **Power-down mode** when not in use

### Advanced Motion Detection
- **Tap detection** (single and double tap)
- **Free-fall detection** with configurable threshold
- **Motion/position recognition** (6D/4D orientation)
- **Activity/inactivity** detection
- **Configurable interrupts** for all features

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 1.71V to 3.6V (3.3V recommended)
- **Supply Current**: 2μA to 11μA (depending on mode)
- **Interface**: I²C (up to 400kHz) or SPI (up to 10MHz)
- **I²C Address**: 0x18 (default) or 0x19 (configurable)

### Accelerometer Performance
- **Measurement Range**: ±2g, ±4g, ±8g, ±16g (selectable)
- **Resolution**: 8-bit, 10-bit, or 12-bit (mode dependent)
- **Output Data Rate**: 1Hz to 5.376kHz
- **Zero-g level**: ±40mg
- **Sensitivity**: 1mg/LSB (±2g, 12-bit mode)

### Physical Specifications
- **Package**: 3mm × 3mm × 1mm LGA
- **Operating Temperature**: -40°C to +85°C
- **Shock Survival**: 10,000g for 0.2ms
- **Vibration**: 20g (20Hz to 2kHz)

## Applications

### Wearable Devices
- **Fitness trackers** and activity monitors
- **Smartwatches** with motion sensing
- **Health monitoring** devices
- **Sleep tracking** applications
- **Step counting** and distance calculation

### IoT and Battery-Powered Devices
- **Asset tracking** with motion detection
- **Security systems** with tamper detection
- **Environmental monitoring** with orientation sensing
- **Smart home devices** with presence detection
- **Wireless sensor networks**

### Consumer Electronics
- **Gaming controllers** with motion input
- **Mobile device** orientation sensing
- **Camera stabilization** systems
- **Remote controls** with gesture input
- **Portable electronics** with auto-sleep

## Programming Example

### Arduino Basic Usage
```cpp
#include <Adafruit_LIS3DH.h>

Adafruit_LIS3DH lis = Adafruit_LIS3DH();

void setup() {
  Serial.begin(115200);
  
  if (!lis.begin(0x18)) {
    Serial.println("Could not start LIS3DH");
    while (1) yield();
  }
  
  // Set range and data rate
  lis.setRange(LIS3DH_RANGE_4_G);
  lis.setDataRate(LIS3DH_DATARATE_50_HZ);
  
  Serial.println("LIS3DH found!");
}

void loop() {
  lis.read();
  
  Serial.print("X: "); Serial.print(lis.x);
  Serial.print(" Y: "); Serial.print(lis.y);
  Serial.print(" Z: "); Serial.println(lis.z);
  
  delay(100);
}
```

### Motion Detection Setup
```cpp
// Configure tap detection
lis.setClick(1, 80);  // Single tap, threshold 80

// Configure free-fall detection
lis.setFreeFallThreshold(0x30);
lis.setFreeFallDuration(0x05);

// Enable interrupts
lis.enableDRDY(true, 1);  // Data ready on INT1
```

## Pinout and Connections

### Standard Connections
| Pin | Signal | Description |
|-----|--------|-------------|
| VIN | VCC | Power input (1.8V to 5.5V with regulator) |
| 3V3 | 3V3 | 3.3V regulated output |
| GND | GND | Ground |
| SCL | SCL | I²C Clock / SPI Clock |
| SDA | SDA | I²C Data / SPI MOSI |
| SDO | SDO | SPI MISO / I²C Address Select |
| CS | CS | SPI Chip Select |

### Interrupt Pins
| Pin | Signal | Description |
|-----|--------|-------------|
| INT | INT1 | Interrupt 1 output |

## Power Modes and Consumption

### Power Mode Options
- **Power-down mode**: 2μA (all functions off)
- **Low-power mode**: 2μA (1Hz data rate)
- **Normal mode**: 11μA (10Hz data rate)
- **High-resolution mode**: 25μA (50Hz data rate)
- **High-speed mode**: 140μA (1.344kHz data rate)

### Data Rate vs Power Consumption
| Data Rate | Current Consumption |
|-----------|-------------------|
| Power-down | 2μA |
| 1Hz | 2μA |
| 10Hz | 11μA |
| 25Hz | 11μA |
| 50Hz | 25μA |
| 100Hz | 25μA |
| 200Hz | 50μA |
| 400Hz | 90μA |

## Motion Detection Features

### Tap Detection
- **Single tap** and **double tap** recognition
- **Configurable threshold** and timing
- **X, Y, Z axis** selection
- **Interrupt generation** on detection
- **Debouncing** and filtering

### Free-Fall Detection
- **Configurable threshold** (typically 300-400mg)
- **Duration setting** for validation
- **All-axis monitoring** for true free-fall
- **Interrupt on detection**
- **Low false-positive rate**

### Orientation Detection
- **6D orientation** (face up/down, portrait/landscape)
- **4D orientation** (portrait/landscape only)
- **Position recognition** interrupts
- **Configurable thresholds**
- **Hysteresis** for stability

### Activity/Inactivity Detection
- **Motion threshold** detection
- **Inactivity timer** for sleep mode
- **Wake-up on motion**
- **Configurable sensitivity**
- **Power management** integration

## Calibration and Setup

### Basic Calibration
1. **Offset calibration**: Measure in all orientations
2. **Sensitivity verification**: Check against known acceleration
3. **Temperature compensation**: Account for temperature effects
4. **Noise characterization**: Determine baseline noise levels

### Motion Detection Tuning
1. **Threshold setting**: Adjust for application sensitivity
2. **Duration tuning**: Set appropriate time windows
3. **False positive reduction**: Optimize parameters
4. **Environmental testing**: Validate in real conditions

## Design Considerations

### Power Supply Design
- **Low-noise supply**: Minimize power supply noise
- **Decoupling capacitors**: 100nF ceramic near sensor
- **Voltage regulation**: Use clean 3.3V supply
- **Ground plane**: Solid ground connection

### Mechanical Design
- **Secure mounting**: Prevent vibration and shock
- **Axis alignment**: Align with measurement axes
- **Isolation**: Isolate from high-frequency vibrations
- **Environmental protection**: Protect from moisture

### Software Design
- **Interrupt handling**: Efficient interrupt service routines
- **Data filtering**: Implement appropriate filters
- **Power management**: Optimize for battery life
- **Calibration storage**: Store calibration in EEPROM

## Troubleshooting

### Common Issues
- **High power consumption**: Check data rate and mode settings
- **False motion detection**: Adjust thresholds and duration
- **Communication errors**: Verify I²C/SPI connections
- **Noisy readings**: Check power supply and mounting

### Performance Optimization
- **Power mode selection**: Choose appropriate mode for application
- **Interrupt configuration**: Use interrupts to minimize polling
- **Data rate optimization**: Balance power and performance
- **Mechanical isolation**: Minimize external vibrations

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 2 units
- **Condition**: New, unused
- **Features**: Ultra-low power, motion detection, STEMMA QT compatible
