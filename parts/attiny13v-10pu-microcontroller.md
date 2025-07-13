---
type: electronic-component
category: Microcontrollers
subcategory: AVR Microcontrollers
brand: Microchip (formerly Atmel)
part_number: ATtiny13V-10PU
model: ATtiny13V-10PU
description: 8-bit AVR RISC microcontroller with 1KB Flash, ultra-low power, DIP-8 package, smallest AVR
manufacturer: Microchip Technology (formerly Atmel)
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 1.8V ~ 5.5V (low voltage version)
current: Ultra-low power consumption with multiple sleep modes
power: 0.5mW @ 1MHz, 1.8V typical
interface: [ADC, PWM, Analog Comparator]
connectivity: [Through-hole pins]
compatibility: [Arduino IDE, ATtiny Core, AVR-GCC, Atmel Studio]
location: [Cabinet-3/Bin-40/Section-A]
quantity: 11
status: available
price_range: $0.75-1.50
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/doc2535.pdf
product_url: https://www.microchip.com/en-us/product/ATtiny13
tags: [microcontroller, avr, attiny, arduino-compatible, 8-bit, ultra-low-power, dip-8, cabinet-3, bin-40, status-available]
date_added: 2025-01-13
---

# ATtiny13V-10PU - 8-bit AVR RISC Microcontroller (Ultra-Small)

## Details

- **Location**: Cabinet-3, Bin 40, Section A
- **Category**: Microcontrollers
- **Brand**: Microchip Technology (formerly Atmel)
- **Part Number**: ATtiny13V-10PU
- **Package**: 8-DIP (Through-hole)
- **Quantity**: 11
- **Status**: Available
- **Price Range**: $0.75-1.50
- **Datasheet**: [ATtiny13 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/doc2535.pdf)
- **Product URL**: https://www.microchip.com/en-us/product/ATtiny13

## Description

The ATtiny13V-10PU is the smallest member of the AVR microcontroller family, combining 1KB of in-system programmable Flash memory, 64 bytes of EEPROM, 64 bytes of SRAM, 6 general purpose I/O lines, 32 general purpose working registers, an 8-bit timer/counter with compare modes, internal and external interrupts, a 4-channel 10-bit A/D converter, a programmable watchdog timer with internal oscillator, and three software selectable power saving modes. The "V" suffix indicates this is the low-voltage version optimized for 1.8V-5.5V operation, making it ideal for ultra-low power battery applications.

## Specifications

### Core Specifications
- **Architecture**: 8-bit AVR enhanced RISC
- **Operating Voltage**: 1.8V ~ 5.5V (low voltage version)
- **Clock Speed**: Up to 10 MHz (internal 9.6MHz calibrated oscillator)
- **Performance**: 10 MIPS at 10 MHz
- **Operating Temperature**: -40°C to +85°C

### Memory
- **Program Memory (Flash)**: 1KB (1024 bytes)
- **SRAM**: 64 bytes
- **EEPROM**: 64 bytes
- **Endurance**: 10,000 write/erase cycles (Flash), 100,000 write/erase cycles (EEPROM)

### I/O and Peripherals
- **Digital I/O Pins**: 6 (5 available when using reset pin as I/O)
- **PWM Channels**: 2 (8-bit)
- **ADC Channels**: 4 (10-bit, single-ended)
- **Analog Comparator**: 1
- **Timers**: 1 (8-bit timer/counter)

### Communication Interfaces
- **No Hardware Serial**: Software serial possible with libraries
- **No SPI/I2C**: Bit-banged implementations possible

## Pinout Diagram

```
    ATtiny13V-10PU 8-Pin DIP
    ┌─────────────┐
PB5 │1  (RESET) 8│ VCC
PB3 │2  (ADC3)  7│ PB2 (ADC1/SCK)
PB4 │3  (ADC2)  6│ PB1 (MISO/OC0B)
GND │4          5│ PB0 (MOSI/OC0A)
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Functions |
|-----|------|-----------|
| 1   | PB5  | RESET, ADC0, dW |
| 2   | PB3  | ADC3, CLKI |
| 3   | PB4  | ADC2, CLKO |
| 4   | GND  | Ground |
| 5   | PB0  | MOSI, OC0A (PWM), AIN0 |
| 6   | PB1  | MISO, OC0B (PWM), AIN1 |
| 7   | PB2  | SCK, ADC1 |
| 8   | VCC  | Power Supply |

## Arduino Pin Mapping

When using Arduino IDE with ATtiny13:
- **Pin 0** (PB0): Digital I/O, PWM, ADC (when configured)
- **Pin 1** (PB1): Digital I/O, PWM
- **Pin 2** (PB2): Digital I/O, ADC1
- **Pin 3** (PB3): Digital I/O, ADC3
- **Pin 4** (PB4): Digital I/O, ADC2
- **Pin 5** (PB5): Digital I/O, ADC0 (can be used as reset)

## Applications

Common use cases for the ATtiny13V-10PU:
- Ultra-simple sensor nodes
- LED flashers and blinkers
- Simple automation tasks
- Battery-powered indicators
- Learning embedded programming basics
- Minimalist IoT sensors
- Toy electronics and gadgets
- Emergency backup controllers

## Programming Examples

### Arduino IDE Setup
Install ATtiny board support:
1. Add ATtiny board manager URL
2. Install "ATtiny" boards package
3. Select "ATtiny13" and appropriate clock speed
4. Use "Arduino as ISP" for programming

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

### ADC Reading with LED Indicator
```cpp
void setup() {
  pinMode(0, OUTPUT); // LED output
  pinMode(1, OUTPUT); // Second LED
}

void loop() {
  int sensorValue = analogRead(A3); // Read from Pin 3 (PB3)
  
  // Simple threshold indicator
  if (sensorValue > 512) {
    digitalWrite(0, HIGH);
    digitalWrite(1, LOW);
  } else {
    digitalWrite(0, LOW);
    digitalWrite(1, HIGH);
  }
  
  delay(100);
}
```

### PWM Fade Effect
```cpp
void setup() {
  pinMode(0, OUTPUT); // PWM pin (PB0/OC0A)
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
ATtiny13V-10PU Minimal Circuit:
- Pin 8 (VCC) ---- +1.8V to +5V
- Pin 4 (GND) ---- Ground
- Pin 1 (RESET) ---- 10kΩ pullup to VCC (optional)
- 0.1µF decoupling capacitor between VCC and GND
```

### Battery-Powered LED Controller
```
Ultra-Low Power LED Circuit:
- 2xAA or 3V coin cell battery
- LED + current limiting resistor on Pin 0
- Sensor input on Pin 3 (ADC3)
- Sleep mode for ultra-low power consumption
```

### ISP Programming Circuit
```
6-Pin ISP Header to ATtiny13:
1. MISO ---- Pin 6 (PB1)
2. VCC ---- Pin 8 (VCC)
3. SCK ---- Pin 7 (PB2)
4. MOSI ---- Pin 5 (PB0)
5. RESET ---- Pin 1 (PB5)
6. GND ---- Pin 4 (GND)
```

## Technical Notes

Important considerations for the ATtiny13V-10PU:
- **Minimal Resources**: Only 1KB Flash and 64 bytes RAM - code must be very efficient
- **Ultra-Low Voltage**: Can operate down to 1.8V, excellent for battery applications
- **No Hardware Serial**: All communication must be bit-banged or use simple protocols
- **Limited Libraries**: Many Arduino libraries won't fit or work due to memory constraints
- **Power Efficiency**: Excellent sleep modes for ultra-low power applications
- **Programming**: Requires ISP programmer, no bootloader due to memory constraints

## Tags

microcontroller, avr, attiny, arduino-compatible, 8-bit, ultra-low-power, dip-8 #cabinet-3 #bin-40 #status-available

## Notes

The ATtiny13V-10PU is the ultimate minimalist microcontroller - perfect for learning the fundamentals of embedded programming and for applications where every byte counts. Having 11 of these chips provides excellent opportunities for ultra-simple projects and educational exercises. Despite its tiny memory (1KB Flash, 64 bytes RAM), it's surprisingly capable for basic control tasks. The ultra-low voltage operation (down to 1.8V) makes it ideal for battery-powered applications where power efficiency is paramount. These are perfect for projects where you need just a tiny bit of intelligence - LED controllers, simple sensors, or basic automation tasks where larger microcontrollers would be overkill.
