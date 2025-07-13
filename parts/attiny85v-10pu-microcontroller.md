---
type: electronic-component
category: Microcontrollers
subcategory: AVR Microcontrollers
brand: Microchip (formerly Atmel)
part_number: ATtiny85V-10PU
model: ATtiny85V-10PU
description: 8-bit AVR RISC microcontroller with 8KB Flash, low voltage operation, DIP-8 package, Arduino compatible
manufacturer: Microchip Technology (formerly Atmel)
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 2.7V ~ 5.5V (low voltage version)
current: Ultra-low power consumption with multiple sleep modes
power: 1mW @ 1MHz, 3V typical
interface: [SPI, I2C, ADC, PWM, USI]
connectivity: [Through-hole pins]
compatibility: [Arduino IDE, ATtiny Core, AVR-GCC, Atmel Studio]
location: [Cabinet-3/Bin-40/Section-C]
quantity: 38
status: available
price_range: $1.00-2.50
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet.pdf
product_url: https://www.microchip.com/en-us/product/ATtiny85
tags: [microcontroller, avr, attiny, arduino-compatible, 8-bit, low-voltage, dip-8, cabinet-3, bin-40, status-available]
date_added: 2025-01-13
---

# ATtiny85V-10PU - 8-bit AVR RISC Microcontroller

## Details

- **Location**: Cabinet-3, Bin 40, Section C
- **Category**: Microcontrollers
- **Brand**: Microchip Technology (formerly Atmel)
- **Part Number**: ATtiny85V-10PU
- **Package**: 8-DIP (Through-hole)
- **Quantity**: 38
- **Status**: Available
- **Price Range**: $1.00-2.50
- **Datasheet**: [ATtiny85 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet.pdf)
- **Product URL**: https://www.microchip.com/en-us/product/ATtiny85

## Description

The ATtiny85V-10PU is a low-voltage, high-performance 8-bit AVR RISC-based microcontroller that combines 8KB of in-system programmable Flash memory, 512 bytes of EEPROM, 512 bytes of SRAM, 6 general purpose I/O lines, 32 general purpose working registers, one 8-bit timer/counter with compare modes, one 8-bit high speed timer/counter, Universal Serial Interface, internal and external interrupts, 4-channel 10-bit A/D converter, programmable watchdog timer with internal oscillator, and three software selectable power saving modes. The "V" suffix indicates this is the low-voltage version optimized for 2.7V-5.5V operation, making it ideal for battery-powered applications.

## Specifications

### Core Specifications
- **Architecture**: 8-bit AVR enhanced RISC
- **Operating Voltage**: 2.7V ~ 5.5V (low voltage version)
- **Clock Speed**: Up to 10 MHz (internal 8MHz calibrated oscillator)
- **Performance**: 10 MIPS at 10 MHz
- **Operating Temperature**: -40°C to +85°C

### Memory
- **Program Memory (Flash)**: 8KB (with ~0.5KB used by bootloader if Arduino compatible)
- **SRAM**: 512 bytes
- **EEPROM**: 512 bytes
- **Endurance**: 10,000 write/erase cycles (Flash), 100,000 write/erase cycles (EEPROM)

### I/O and Peripherals
- **Digital I/O Pins**: 6 (5 available when using reset pin as I/O)
- **PWM Channels**: 4 (8-bit)
- **ADC Channels**: 4 (10-bit, single-ended)
- **Analog Comparator**: 1
- **Timers**: 2 (one 8-bit, one 8-bit high-speed)

### Communication Interfaces
- **USI (Universal Serial Interface)**: Can be configured for SPI or I2C
- **Software Serial**: Possible through libraries

## Pinout Diagram

```
    ATtiny85V-10PU 8-Pin DIP
    ┌─────────────┐
PB5 │1  (RESET) 8│ VCC
PB3 │2  (ADC3)  7│ PB2 (ADC1/SCK)
PB4 │3  (ADC2)  6│ PB1 (MISO/PWM)
GND │4          5│ PB0 (MOSI/PWM)
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Arduino Pin | Functions |
|-----|------|-------------|-----------|
| 1   | PB5  | Pin 5 (Reset) | RESET, ADC0, dW |
| 2   | PB3  | Pin 3 | ADC3, XTAL1, CLKI |
| 3   | PB4  | Pin 4 | ADC2, XTAL2, CLKO |
| 4   | GND  | GND | Ground |
| 5   | PB0  | Pin 0 | MOSI, PWM, SDA |
| 6   | PB1  | Pin 1 | MISO, PWM |
| 7   | PB2  | Pin 2 | SCK, ADC1, SCL |
| 8   | VCC  | VCC | Power Supply |

## Arduino Pin Mapping

When using Arduino IDE with ATtiny85:
- **Pin 0** (PB0): Digital I/O, PWM, SDA (I2C)
- **Pin 1** (PB1): Digital I/O, PWM
- **Pin 2** (PB2): Digital I/O, ADC1, SCL (I2C)
- **Pin 3** (PB3): Digital I/O, ADC3
- **Pin 4** (PB4): Digital I/O, ADC2
- **Pin 5** (PB5): Digital I/O, ADC0 (can be used as reset)

## Applications

Common use cases for the ATtiny85V-10PU:
- Battery-powered sensor nodes
- Wearable electronics projects
- LED controllers and light effects
- Simple automation and control systems
- IoT edge devices with minimal requirements
- Educational microcontroller projects
- Space-constrained embedded applications
- Arduino-compatible mini projects

## Programming Examples

### Arduino IDE Setup
First install ATtiny board support in Arduino IDE:
1. Add board manager URL: `https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json`
2. Install "ATtiny" boards package
3. Select "ATtiny85" and appropriate clock speed

### Basic Blink Program
```cpp
// Blink LED on Pin 0 (PB0)
void setup() {
  pinMode(0, OUTPUT);
}

void loop() {
  digitalWrite(0, HIGH);
  delay(1000);
  digitalWrite(0, LOW);
  delay(1000);
}
```

### ADC Reading
```cpp
void setup() {
  // No serial available, use LED for indication
  pinMode(1, OUTPUT);
}

void loop() {
  int sensorValue = analogRead(A3); // Read from Pin 3 (PB3)
  
  if (sensorValue > 512) {
    digitalWrite(1, HIGH); // Turn on LED if reading is high
  } else {
    digitalWrite(1, LOW);  // Turn off LED if reading is low
  }
  
  delay(100);
}
```

### PWM Control
```cpp
void setup() {
  pinMode(0, OUTPUT); // PWM pin
}

void loop() {
  // Fade in
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(0, brightness);
    delay(10);
  }
  
  // Fade out
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(0, brightness);
    delay(10);
  }
}
```

## Circuit Examples

### Minimal Circuit
```
ATtiny85V-10PU Minimal Circuit:
- Pin 8 (VCC) ---- +3.3V to +5V
- Pin 4 (GND) ---- Ground
- Pin 1 (RESET) ---- 10kΩ pullup to VCC (optional)
- 0.1µF decoupling capacitor between VCC and GND
```

### ISP Programming Circuit
```
6-Pin ISP Header to ATtiny85:
1. MISO ---- Pin 6 (PB1)
2. VCC ---- Pin 8 (VCC)
3. SCK ---- Pin 7 (PB2)
4. MOSI ---- Pin 5 (PB0)
5. RESET ---- Pin 1 (PB5)
6. GND ---- Pin 4 (GND)
```

### Battery-Powered Sensor Node
```
ATtiny85V + Sensor Circuit:
- 3.7V Li-Po battery or 3xAA batteries
- Sensor connected to ADC pin (Pin 2, 3, or 4)
- Status LED on Pin 0 or 1
- Sleep mode for ultra-low power consumption
```

## Technical Notes

Important considerations for the ATtiny85V-10PU:
- **Low Voltage Operation**: "V" version operates down to 2.7V, perfect for battery applications
- **Limited Pins**: Only 6 I/O pins available, plan pin usage carefully
- **No Hardware Serial**: Use SoftwareSerial library if serial communication needed
- **Internal Oscillator**: 8MHz internal oscillator eliminates need for external crystal
- **Power Management**: Excellent sleep modes for ultra-low power applications
- **Programming**: Requires ISP programmer or Arduino as ISP for initial programming

## Tags

microcontroller, avr, attiny, arduino-compatible, 8-bit, low-voltage, dip-8 #cabinet-3 #bin-40 #status-available

## Notes

The ATtiny85V-10PU is perfect for projects where you need Arduino-like functionality in a tiny package with minimal power consumption. Having 38 of these chips provides excellent flexibility for small embedded projects, wearable electronics, and battery-powered applications. The low-voltage operation makes them ideal for 3.3V systems and battery-powered projects where power efficiency is critical. Despite having only 6 I/O pins, these microcontrollers are surprisingly capable and can handle many tasks that would normally require a larger microcontroller. They're excellent for learning embedded programming concepts and for projects where size and power consumption are more important than having many I/O pins.
