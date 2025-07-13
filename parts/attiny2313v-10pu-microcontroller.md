---
type: electronic-component
category: Microcontrollers
subcategory: AVR Microcontrollers
brand: Microchip (formerly Atmel)
part_number: ATtiny2313V-10PU
model: ATtiny2313V-10PU
description: 8-bit AVR RISC microcontroller with 2KB Flash, UART, low voltage operation, DIP-20 package
manufacturer: Microchip Technology (formerly Atmel)
package: 20-DIP
size: 0.300" (7.62mm) width
voltage: 2.7V ~ 5.5V (low voltage version)
current: Low power consumption with multiple sleep modes
power: Ultra-low power with sleep modes
interface: [UART, SPI, I2C, PWM]
connectivity: [Through-hole pins]
compatibility: [Arduino IDE, ATtiny Core, AVR-GCC, Atmel Studio]
location: [Cabinet-3/Bin-40/Section-B]
quantity: 17
status: available
price_range: $1.50-3.00
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/doc2543.pdf
product_url: https://www.microchip.com/en-us/product/ATtiny2313
tags: [microcontroller, avr, attiny, arduino-compatible, 8-bit, uart, low-voltage, dip-20, cabinet-3, bin-40, status-available]
date_added: 2025-01-13
---

# ATtiny2313V-10PU - 8-bit AVR RISC Microcontroller with UART

## Details

- **Location**: Cabinet-3, Bin 40, Section B
- **Category**: Microcontrollers
- **Brand**: Microchip Technology (formerly Atmel)
- **Part Number**: ATtiny2313V-10PU
- **Package**: 20-DIP (Through-hole)
- **Quantity**: 17
- **Status**: Available
- **Price Range**: $1.50-3.00
- **Datasheet**: [ATtiny2313 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/doc2543.pdf)
- **Product URL**: https://www.microchip.com/en-us/product/ATtiny2313

## Description

The ATtiny2313V-10PU is a low-voltage, high-performance 8-bit AVR RISC-based microcontroller that combines 2KB of in-system programmable Flash memory, 128 bytes of EEPROM, 128 bytes of SRAM, 18 general purpose I/O lines, 32 general purpose working registers, an 8-bit timer/counter with compare modes, internal and external interrupts, a programmable UART, programmable watchdog timer with internal oscillator, and three software selectable power saving modes. The "V" suffix indicates this is the low-voltage version optimized for 2.7V-5.5V operation. A key feature is the built-in UART, making it excellent for serial communication projects.

## Specifications

### Core Specifications
- **Architecture**: 8-bit AVR enhanced RISC
- **Operating Voltage**: 2.7V ~ 5.5V (low voltage version)
- **Clock Speed**: Up to 10 MHz (internal 8MHz calibrated oscillator)
- **Performance**: 10 MIPS at 10 MHz
- **Operating Temperature**: -40°C to +85°C

### Memory
- **Program Memory (Flash)**: 2KB
- **SRAM**: 128 bytes
- **EEPROM**: 128 bytes
- **Endurance**: 10,000 write/erase cycles (Flash), 100,000 write/erase cycles (EEPROM)

### I/O and Peripherals
- **Digital I/O Pins**: 18 (17 available when using reset pin as I/O)
- **PWM Channels**: 4 (8-bit)
- **Analog Comparator**: 1 (no built-in ADC)
- **Timers**: 1 (8-bit timer/counter)

### Communication Interfaces
- **UART**: Hardware UART for serial communication
- **USI (Universal Serial Interface)**: Can be configured for SPI or I2C

## Pinout Diagram

```
    ATtiny2313V-10PU 20-Pin DIP
    ┌─────────────────────┐
PA2 │1  (RESET)        20│ VCC
PD0 │2  (RXD)          19│ PB7 (SCK/PCINT7)
PD1 │3  (TXD)          18│ PB6 (MISO/PCINT6)
PA1 │4  (XTAL2)        17│ PB5 (MOSI/PCINT5)
PA0 │5  (XTAL1)        16│ PB4 (OC1B/PCINT4)
PD2 │6  (INT0)         15│ PB3 (OC1A/PCINT3)
PD3 │7  (INT1)         14│ PB2 (OC0A/PCINT2)
PD4 │8  (T0)           13│ PB1 (AIN1/PCINT1)
PD5 │9  (OC0B/T1)      12│ PB0 (AIN0/PCINT0)
GND │10                11│ PD6 (ICP)
    └─────────────────────┘
```

## Pin Descriptions

| Pin | Name | Functions |
|-----|------|-----------|
| 1   | PA2  | RESET |
| 2   | PD0  | RXD (UART Receive) |
| 3   | PD1  | TXD (UART Transmit) |
| 4   | PA1  | XTAL2 |
| 5   | PA0  | XTAL1 |
| 6   | PD2  | INT0 (External Interrupt 0) |
| 7   | PD3  | INT1 (External Interrupt 1) |
| 8   | PD4  | T0 (Timer0 Clock Input) |
| 9   | PD5  | OC0B/T1 (PWM Output/Timer1 Clock) |
| 10  | GND  | Ground |
| 11  | PD6  | ICP (Input Capture Pin) |
| 12  | PB0  | AIN0/PCINT0 (Analog Comparator) |
| 13  | PB1  | AIN1/PCINT1 (Analog Comparator) |
| 14  | PB2  | OC0A/PCINT2 (PWM Output) |
| 15  | PB3  | OC1A/PCINT3 (PWM Output) |
| 16  | PB4  | OC1B/PCINT4 (PWM Output) |
| 17  | PB5  | MOSI/PCINT5 (SPI) |
| 18  | PB6  | MISO/PCINT6 (SPI) |
| 19  | PB7  | SCK/PCINT7 (SPI Clock) |
| 20  | VCC  | Power Supply |

## Applications

Common use cases for the ATtiny2313V-10PU:
- Serial communication projects (built-in UART)
- Data logging applications
- Simple control systems with serial interface
- LED controllers with serial control
- Sensor interfaces with UART output
- Educational projects requiring serial communication
- Battery-powered devices with serial monitoring
- Bridge between sensors and serial devices

## Programming Examples

### Arduino IDE Setup
Install ATtiny board support and select ATtiny2313:
1. Add board manager URL for ATtiny support
2. Install "ATtiny" boards package
3. Select "ATtiny2313" and appropriate clock speed

### Basic Serial Communication
```cpp
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT); // Use available digital pin
}

void loop() {
  Serial.println("Hello from ATtiny2313V!");
  
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

### PWM Control
```cpp
void setup() {
  pinMode(9, OUTPUT);  // PWM pin (PD5/OC0B)
  pinMode(14, OUTPUT); // PWM pin (PB2/OC0A)
}

void loop() {
  // Fade both PWM outputs
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(9, brightness);
    analogWrite(14, 255 - brightness);
    delay(10);
  }
}
```

### Serial Data Logger
```cpp
int sensorPin = A0; // Analog comparator can be used for simple sensing

void setup() {
  Serial.begin(9600);
  Serial.println("ATtiny2313V Data Logger Started");
}

void loop() {
  // Read digital sensor or comparator
  int sensorValue = digitalRead(12); // PB0 (AIN0)
  
  Serial.print("Sensor: ");
  Serial.println(sensorValue);
  
  delay(1000);
}
```

## Circuit Examples

### Minimal Circuit
```
ATtiny2313V-10PU Minimal Circuit:
- Pin 20 (VCC) ---- +3.3V to +5V
- Pin 10 (GND) ---- Ground
- Pin 1 (RESET) ---- 10kΩ pullup to VCC
- 0.1µF decoupling capacitor between VCC and GND
```

### Serial Communication Circuit
```
ATtiny2313V to USB-Serial Adapter:
- Pin 2 (RXD) ---- TX of USB-Serial adapter
- Pin 3 (TXD) ---- RX of USB-Serial adapter
- Common ground connection
- 3.3V or 5V power supply
```

## Technical Notes

Important considerations for the ATtiny2313V-10PU:
- **Hardware UART**: Built-in UART makes serial communication easy and reliable
- **Low Voltage Operation**: "V" version operates down to 2.7V for battery applications
- **No ADC**: Uses analog comparator instead of ADC for analog sensing
- **More I/O**: 18 I/O pins provide more flexibility than smaller ATtiny variants
- **Internal Oscillator**: 8MHz internal oscillator eliminates need for external crystal
- **Serial Projects**: Excellent choice for projects requiring reliable serial communication

## Tags

microcontroller, avr, attiny, arduino-compatible, 8-bit, uart, low-voltage, dip-20 #cabinet-3 #bin-40 #status-available

## Notes

The ATtiny2313V-10PU strikes a nice balance between the tiny ATtiny85 and the larger ATmega328, offering more I/O pins and built-in UART while still maintaining a compact form factor. Having 17 of these chips provides excellent flexibility for projects that need serial communication capabilities in a small package. The hardware UART is a significant advantage over software serial implementations, providing reliable communication at higher baud rates. These are perfect for data logging, sensor interfaces, and any project where you need to communicate serially with a host system while keeping power consumption and size minimal.
