---
title: SparkFun L3G4200D Gyro
description: 3-axis digital gyroscope breakout board with voltage regulator and level shifting
part_number: SEN-10612
manufacturer: SparkFun Electronics
category: sensors
subcategory: motion-sensors
quantity: 1
location: 
  - Cabinet-3
  - Bin-28
cost_per_unit: $24.95
datasheet: https://www.pololu.com/file/0J491/L3G4200D.pdf
purchase_date: 2024-12-15
tags: [gyroscope, motion-sensor, 3-axis, i2c, spi, angular-velocity]
---

# SparkFun L3G4200D Gyro

3-axis digital gyroscope breakout board featuring the ST L3G4200D sensor with voltage regulation and level shifting for easy microcontroller integration.

## Overview

The SparkFun L3G4200D Gyro is a breakout board for ST's L3G4200D ultra-stable three-axis digital-output gyroscope. This sensor measures angular rates of rotation about the roll (X), pitch (Y), and yaw (Z) axes with configurable sensitivity ranges. The breakout board includes voltage regulation and level shifting circuits to make it easy to interface with both 3.3V and 5V microcontroller systems.

**Note**: This product has been discontinued by SparkFun and replaced by newer gyroscope sensors with improved performance.

## Key Features

### High-Performance Gyroscope
- **3-axis measurement** of angular velocity (roll, pitch, yaw)
- **Configurable sensitivity** with three selectable ranges
- **16-bit resolution** for precise measurements
- **Digital output** via I²C or SPI interface
- **Low noise** and high stability performance

### Easy Integration
- **Voltage regulation** for 2.5V to 5.5V operation
- **Level shifting** for I²C and SPI communication
- **0.1″ pin spacing** compatible with breadboards
- **Compact size** at 0.5″ × 0.9″
- **Multiple interface options** (I²C and SPI)

## Technical Specifications

### Electrical Characteristics
- **Operating Voltage**: 2.5V to 5.5V
- **Supply Current**: 7mA typical
- **Logic Levels**: VIN voltage level (2.5V to 5.5V)
- **Regulated Output**: 3.3V at up to 150mA (VDD pin)
- **Interface**: I²C (up to 400kHz) or SPI

### Physical Specifications
- **Dimensions**: 0.5″ × 0.9″ × 0.1″ (13mm × 23mm × 3mm)
- **Weight**: 0.7g (0.03oz) without header pins
- **Pin Spacing**: 0.1″ (2.54mm) standard spacing
- **Mounting**: Through-hole pins for breadboard/PCB mounting

### Sensor Performance
- **Measurement Range**: ±250°/s, ±500°/s, or ±2000°/s (configurable)
- **Resolution**: 16-bit per axis
- **Sensitivity**: 8.75 mdps/LSB (±250°/s), 17.5 mdps/LSB (±500°/s), 70 mdps/LSB (±2000°/s)
- **Operating Temperature**: -40°C to +85°C
- **Zero-rate level**: ±10°/s maximum
- **Cross-axis sensitivity**: ±2% maximum

## Pinout and Connections

### Pin Configuration

| Pin | Description |
|-----|-------------|
| VIN | Main power supply input (2.5V to 5.5V) |
| GND | Ground connection |
| VDD | 3.3V regulated output (up to 150mA) |
| SCL/SPC | I²C clock / SPI clock (level-shifted) |
| SDA/SDI | I²C data / SPI data in (level-shifted) |
| SDO | SPI data out / I²C address select |
| CS | SPI chip select (pulled high for I²C mode) |
| DRDY/INT2 | Data ready / interrupt 2 output (3.3V logic) |
| INT1 | Programmable interrupt output (3.3V logic) |

### Connection Notes
- **VIN**: Connect to main power supply (2.5V to 5.5V)
- **GND**: Connect to system ground
- **VDD**: 3.3V output for external components (optional)
- **SCL/SDA**: I²C bus connections (level-shifted to VIN)
- **CS**: Pull low for SPI mode, leave high for I²C mode
- **SDO**: Used for I²C address selection when in I²C mode

### I²C Configuration
- **Default Address**: 0x69 (1101001b) when SDO is high
- **Alternate Address**: 0x68 (1101000b) when SDO is low
- **Clock Speed**: Up to 400kHz (fast mode)
- **Pull-up Resistors**: May be required on SCL/SDA lines

### SPI Configuration
- **Mode**: 4-wire SPI (default) or 3-wire SPI (configurable)
- **Clock Speed**: Up to 10MHz
- **Data Format**: MSB first
- **Clock Polarity**: CPOL = 1 (idle high)
- **Clock Phase**: CPHA = 1 (sample on falling edge)

## Applications

### Robotics and Automation
- **Robot stabilization** and balance control
- **Drone flight control** and attitude stabilization
- **Autonomous vehicle** navigation and control
- **Robotic arm** orientation and movement tracking
- **Mobile robot** dead reckoning and localization

### Motion Tracking
- **Human motion capture** for sports and rehabilitation
- **Gaming controllers** with motion input
- **Virtual reality** head tracking systems
- **Gesture recognition** interfaces
- **Activity monitoring** devices

### Navigation Systems
- **Inertial navigation** systems (INS)
- **GPS-aided navigation** with inertial backup
- **Marine navigation** for boats and ships
- **Aircraft attitude** indicators
- **Spacecraft orientation** control

### Industrial Applications
- **Machine vibration** monitoring and analysis
- **Platform stabilization** systems
- **Equipment orientation** monitoring
- **Safety systems** for machinery
- **Precision positioning** applications

## Programming and Integration

### Arduino Library Support
The L3G4200D is supported by Arduino libraries:
- **Pololu L3G Library**: Comprehensive Arduino library
- **SparkFun Examples**: Sample code and tutorials
- **Adafruit Libraries**: Alternative library options

### Basic Arduino Example
```cpp
#include <Wire.h>
#include <L3G.h>

L3G gyro;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  
  if (!gyro.init()) {
    Serial.println("Failed to detect gyro");
    while (1);
  }
  
  gyro.enableDefault();
}

void loop() {
  gyro.read();
  
  Serial.print("X: ");
  Serial.print(gyro.g.x);
  Serial.print(" Y: ");
  Serial.print(gyro.g.y);
  Serial.print(" Z: ");
  Serial.print(gyro.g.z);
  Serial.println();
  
  delay(100);
}
```

### Configuration Options
- **Sensitivity Range**: Configure ±250°/s, ±500°/s, or ±2000°/s
- **Output Data Rate**: 95Hz to 800Hz selectable
- **High-pass Filter**: Configurable cutoff frequency
- **FIFO Buffer**: 32-level buffer for data storage
- **Interrupts**: Configurable interrupt conditions

## Calibration and Setup

### Initial Setup
1. **Power Connection**: Connect VIN to regulated power supply
2. **Interface Selection**: Choose I²C or SPI communication
3. **Library Installation**: Install appropriate Arduino library
4. **Basic Test**: Verify communication and basic readings

### Calibration Procedure
1. **Zero-rate Calibration**: Measure gyro output when stationary
2. **Temperature Compensation**: Account for temperature effects
3. **Scale Factor Verification**: Verify sensitivity settings
4. **Noise Characterization**: Determine noise levels and filtering needs

### Performance Optimization
- **Stable Mounting**: Secure mounting to minimize vibration
- **Temperature Control**: Maintain stable operating temperature
- **Power Supply**: Use clean, regulated power supply
- **Signal Filtering**: Implement appropriate digital filters

## Design Considerations

### Power Supply Design
- **Voltage Regulation**: Use stable, low-noise power supply
- **Decoupling**: Add bypass capacitors near power pins
- **Current Capability**: Ensure supply can provide 7mA minimum
- **Ground Plane**: Use solid ground plane for best performance

### Mechanical Design
- **Rigid Mounting**: Mount securely to minimize mechanical noise
- **Axis Alignment**: Align sensor axes with measurement axes
- **Vibration Isolation**: Consider damping for high-vibration environments
- **Thermal Management**: Protect from temperature extremes

### Signal Processing
- **Digital Filtering**: Apply low-pass filters to reduce noise
- **Calibration**: Implement zero-rate and scale factor calibration
- **Coordinate Transforms**: Convert between sensor and body coordinates
- **Integration**: Integrate angular velocity to obtain angles

## Troubleshooting

### Common Issues
- **No Communication**: Check wiring, power supply, and I²C/SPI settings
- **Incorrect Readings**: Verify sensor orientation and calibration
- **Noisy Data**: Check mounting, power supply, and filtering
- **Drift Problems**: Implement proper calibration and temperature compensation

### Performance Issues
- **High Noise**: Check mechanical mounting and power supply
- **Temperature Drift**: Implement temperature compensation
- **Offset Errors**: Perform zero-rate calibration
- **Scale Factor Errors**: Verify sensitivity settings and calibration

## Advantages and Limitations

### Advantages
- **High Resolution**: 16-bit output for precise measurements
- **Multiple Ranges**: Configurable sensitivity for different applications
- **Digital Interface**: Easy integration with microcontrollers
- **Low Power**: 7mA current consumption
- **Compact Size**: Small form factor for space-constrained applications

### Limitations
- **Single Sensor Type**: Gyroscope only (no accelerometer or magnetometer)
- **Temperature Sensitivity**: Requires calibration for temperature changes
- **Drift**: Long-term drift requires periodic recalibration
- **Discontinued**: No longer in production by SparkFun
- **Vibration Sensitivity**: Sensitive to mechanical vibrations

## Included Components
- **L3G4200D breakout board** with all SMD components populated
- **9×1 straight header pins** (0.1″ spacing)
- **9×1 right-angle header pins** (0.1″ spacing)
- **Documentation** and example code links

## Storage Information
- **Location**: Cabinet 3, Bin 28
- **Quantity**: 1 unit
- **Condition**: New, unused
- **Packaging**: Anti-static packaging with headers
- **Status**: Discontinued product, legacy inventory
