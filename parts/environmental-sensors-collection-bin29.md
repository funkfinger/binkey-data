---
title: Environmental Sensors Collection - Bin 29
description: Collection of temperature, humidity, pressure, and environmental sensors for weather monitoring and HVAC applications
part_number: Mixed
manufacturer: Various (Sensirion, Adafruit, Analog Devices, Bosch)
category: sensors
subcategory: environmental-sensors
quantity: 15+
location: 
  - Cabinet-3
  - Bin-29
cost_per_unit: $8.00
purchase_date: 2024-12-15
tags: [temperature, humidity, pressure, environmental, weather, hvac, i2c]
---

# Environmental Sensors Collection - Bin 29

Comprehensive collection of environmental sensors including temperature, humidity, pressure, and multi-parameter sensors for weather monitoring, HVAC control, and environmental data logging applications.

## Overview

This collection contains various environmental sensors from different manufacturers, providing capabilities for measuring temperature, humidity, barometric pressure, and other environmental parameters. These sensors are commonly used in weather stations, HVAC systems, greenhouse monitoring, and IoT environmental monitoring projects.

## Included Sensors

### SHT21 Humidity and Temperature Sensor (1)
**Modern Device SHT21 Breakout**
- **Manufacturer**: Sensirion (breakout by Modern Device)
- **Parameters**: Temperature and Relative Humidity
- **Interface**: I²C (2-wire)
- **Temperature Range**: -40°C to +125°C
- **Humidity Range**: 0-100% RH
- **Resolution**: 0.01°C temperature, 0.03% RH
- **Power**: 80μW at 12-bit, 3V
- **Applications**: HVAC, weather stations, greenhouse monitoring

### AliExpress Environmental Sensors (3)
**Generic Multi-Parameter Sensors**
- **Types**: DHT22, BME280, SHT30 variants
- **Parameters**: Temperature, humidity, some with pressure
- **Interface**: I²C, SPI, or digital output
- **Cost-effective** solutions for basic environmental monitoring
- **Varying quality** and specifications

### Adafruit Temperature Sensors (4)
**High-Quality Precision Sensors**

#### Adafruit Product 393 - TMP36 Temperature Sensor (1)
- **Type**: Analog temperature sensor
- **Range**: -40°C to +125°C
- **Output**: 10mV/°C linear
- **Power**: 2.7V to 5.5V
- **Accuracy**: ±2°C typical

#### Adafruit Product 385 - TMP102 Digital Temperature Sensor (2)
- **Type**: Digital I²C temperature sensor
- **Range**: -55°C to +128°C
- **Resolution**: 0.0625°C (12-bit)
- **Interface**: I²C
- **Accuracy**: ±0.5°C

#### Adafruit Product 386 - DS18B20 Digital Temperature Sensor (1)
- **Type**: 1-Wire digital temperature sensor
- **Range**: -55°C to +125°C
- **Resolution**: 9-12 bit configurable
- **Interface**: 1-Wire protocol
- **Accuracy**: ±0.5°C

### TMP37FT9Z Temperature Sensors (5)
**Analog Devices Precision Temperature Sensors**
- **Type**: Analog temperature sensor
- **Range**: +5°C to +100°C
- **Output**: 20mV/°C linear
- **Power**: 2.7V to 5.5V
- **Package**: TO-92
- **Accuracy**: ±1°C typical

### Adafruit Environmental Sensors (2)

#### Adafruit Product 4530 - SHT40 Temperature & Humidity Sensor (1)
- **Parameters**: Temperature and Humidity
- **Interface**: I²C with STEMMA QT
- **Temperature Range**: -40°C to +125°C
- **Humidity Range**: 0-100% RH
- **Accuracy**: ±0.2°C, ±1.8% RH
- **Features**: Low power, high accuracy

#### Adafruit Product 4534 - SHTC3 Temperature & Humidity Sensor (1)
- **Parameters**: Temperature and Humidity
- **Interface**: I²C with STEMMA QT
- **Temperature Range**: -40°C to +125°C
- **Humidity Range**: 0-100% RH
- **Accuracy**: ±0.2°C, ±2% RH
- **Features**: Ultra-low power, sleep mode

### BME280 Environmental Sensors (2)
**Bosch Multi-Parameter Sensors**
- **Parameters**: Temperature, Humidity, Pressure
- **Interface**: I²C or SPI
- **Temperature Range**: -40°C to +85°C
- **Humidity Range**: 0-100% RH
- **Pressure Range**: 300-1100 hPa
- **Applications**: Weather monitoring, altitude measurement

### Adafruit Product 1782 - DHT22 Sensors (3)
**Popular Temperature and Humidity Sensors**
- **Parameters**: Temperature and Humidity
- **Interface**: Single-wire digital
- **Temperature Range**: -40°C to +80°C
- **Humidity Range**: 0-100% RH
- **Accuracy**: ±0.5°C, ±2-5% RH
- **Power**: 3.3V to 6V

## Technical Specifications Summary

### Temperature Sensors
| Sensor | Type | Range | Accuracy | Interface |
|--------|------|-------|----------|-----------|
| SHT21 | Digital | -40°C to +125°C | ±0.3°C | I²C |
| TMP36 | Analog | -40°C to +125°C | ±2°C | Analog |
| TMP102 | Digital | -55°C to +128°C | ±0.5°C | I²C |
| DS18B20 | Digital | -55°C to +125°C | ±0.5°C | 1-Wire |
| TMP37FT9Z | Analog | +5°C to +100°C | ±1°C | Analog |
| SHT40 | Digital | -40°C to +125°C | ±0.2°C | I²C |
| SHTC3 | Digital | -40°C to +125°C | ±0.2°C | I²C |
| BME280 | Digital | -40°C to +85°C | ±1°C | I²C/SPI |
| DHT22 | Digital | -40°C to +80°C | ±0.5°C | Digital |

### Humidity Sensors
| Sensor | Range | Accuracy | Response Time |
|--------|-------|----------|---------------|
| SHT21 | 0-100% RH | ±2% RH | 8 seconds |
| SHT40 | 0-100% RH | ±1.8% RH | 1 second |
| SHTC3 | 0-100% RH | ±2% RH | 1 second |
| BME280 | 0-100% RH | ±3% RH | 1 second |
| DHT22 | 0-100% RH | ±2-5% RH | 2 seconds |

## Applications

### Weather Monitoring
- **Outdoor weather stations** with temperature, humidity, pressure
- **Indoor climate monitoring** for comfort and health
- **Agricultural monitoring** for greenhouse and field conditions
- **HVAC system** feedback and control
- **Data logging** for environmental research

### IoT and Smart Home
- **Smart thermostats** with environmental sensing
- **Home automation** based on environmental conditions
- **Energy management** systems with climate feedback
- **Health monitoring** for air quality and comfort
- **Remote monitoring** of vacation homes or facilities

### Industrial Applications
- **Process monitoring** in manufacturing
- **Storage facility** monitoring for sensitive materials
- **Laboratory environmental** control
- **Food storage** and transportation monitoring
- **Pharmaceutical** storage condition monitoring

## Programming Examples

### SHT21 with Arduino
```cpp
#include <Wire.h>
#include <SHT21.h>

SHT21 sht;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sht.begin();
}

void loop() {
  float temp = sht.getTemperature();
  float humidity = sht.getHumidity();
  
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println("°C");
  
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  delay(2000);
}
```

### BME280 Multi-Sensor Reading
```cpp
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(9600);
  
  if (!bme.begin()) {
    Serial.println("Could not find BME280 sensor!");
    while (1);
  }
}

void loop() {
  Serial.print("Temperature: ");
  Serial.print(bme.readTemperature());
  Serial.println("°C");
  
  Serial.print("Pressure: ");
  Serial.print(bme.readPressure() / 100.0F);
  Serial.println(" hPa");
  
  Serial.print("Humidity: ");
  Serial.print(bme.readHumidity());
  Serial.println("%");
  
  Serial.print("Altitude: ");
  Serial.print(bme.readAltitude(1013.25));
  Serial.println(" m");
  
  delay(2000);
}
```

### DS18B20 1-Wire Temperature
```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float temp = sensors.getTempCByIndex(0);
  
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println("°C");
  
  delay(1000);
}
```

## Calibration and Accuracy

### Temperature Calibration
1. **Reference comparison**: Use calibrated reference thermometer
2. **Ice point calibration**: 0°C reference point
3. **Boiling point calibration**: 100°C reference point (at sea level)
4. **Multi-point calibration**: Several temperature points
5. **Environmental compensation**: Account for self-heating

### Humidity Calibration
1. **Salt solution method**: Use saturated salt solutions for known RH
2. **Commercial standards**: Use certified humidity standards
3. **Two-point calibration**: Dry (0% RH) and saturated (100% RH)
4. **Temperature compensation**: Account for temperature effects
5. **Drift monitoring**: Regular recalibration schedule

### Pressure Calibration
1. **Barometric reference**: Compare to local weather station
2. **Altitude correction**: Account for elevation effects
3. **Temperature compensation**: Correct for temperature effects
4. **Sea level pressure**: Convert to standard conditions
5. **Long-term stability**: Monitor for sensor drift

## Design Considerations

### Power Management
- **Low power modes**: Use sleep modes for battery applications
- **Supply voltage**: Ensure stable, clean power supply
- **Current consumption**: Consider total system power budget
- **Wake-up sources**: Use interrupts for efficient operation

### Environmental Protection
- **Moisture protection**: Protect electronics while allowing air flow
- **Temperature extremes**: Design for expected operating range
- **Contamination**: Protect sensors from dust and chemicals
- **Mechanical stress**: Secure mounting to prevent damage

### Signal Conditioning
- **Analog sensors**: Use appropriate ADC resolution and reference
- **Digital sensors**: Ensure proper I²C pull-up resistors
- **Noise filtering**: Implement appropriate filtering
- **Calibration storage**: Store calibration data in EEPROM

## Troubleshooting

### Common Issues
- **Incorrect readings**: Check calibration and sensor placement
- **Communication errors**: Verify wiring and I²C addresses
- **Drift over time**: Implement regular recalibration
- **Environmental interference**: Shield from heat sources and air currents

### Performance Optimization
- **Sensor placement**: Position away from heat sources
- **Air circulation**: Ensure adequate ventilation
- **Response time**: Allow sufficient settling time
- **Data filtering**: Implement appropriate averaging and filtering

## Storage Information
- **Location**: Cabinet 3, Bin 29
- **Quantity**: 15+ sensors of various types
- **Condition**: Mix of new and used sensors
- **Variety**: Multiple manufacturers and sensor types
- **Documentation**: Datasheets and example code available
