---
type: electronic-component
category: Microcontrollers
subcategory: AVR Microcontrollers
brand: Microchip (formerly Atmel)
part_number: ATmega328-PU
model: ATmega328P-PU
description: 8-bit AVR RISC microcontroller with 32KB Flash, Arduino Uno compatible, DIP-28 package
manufacturer: Microchip Technology (formerly Atmel)
package: 28-DIP
size: 0.600" (15.24mm) width
voltage: 1.8V ~ 5.5V
current: Low power consumption with multiple sleep modes
power: 20mW @ 1MHz, 1.8V
interface: [USART, SPI, I2C, ADC, PWM]
connectivity: [Through-hole pins]
compatibility: [Arduino IDE, Arduino Uno, AVR-GCC, Atmel Studio]
location: [Cabinet-3/Bin-40/Section-D]
quantity: 11
status: available
price_range: $2.00-4.00
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf
product_url: https://www.microchip.com/en-us/product/ATmega328P
tags: [microcontroller, avr, arduino-compatible, 8-bit, atmega328, dip-28, cabinet-3, bin-40, status-available]
date_added: 2025-01-13
---

# ATmega328-PU - 8-bit AVR RISC Microcontroller

## Details

- **Location**: Cabinet-3, Bin 40, Section D
- **Category**: Microcontrollers
- **Brand**: Microchip Technology (formerly Atmel)
- **Part Number**: ATmega328-PU / ATmega328P-PU
- **Package**: 28-DIP (Through-hole)
- **Quantity**: 11
- **Status**: Available
- **Price Range**: $2.00-4.00
- **Datasheet**: [ATmega328P Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)
- **Product URL**: https://www.microchip.com/en-us/product/ATmega328P

## Description

The ATmega328-PU is an 8-bit AVR RISC-based microcontroller that combines 32KB of in-system programmable Flash memory with read-while-write capabilities, 1KB EEPROM, 2KB SRAM, 23 general purpose I/O lines, 32 general purpose working registers, three flexible timer/counters with compare modes, internal and external interrupts, a serial programmable USART, a byte-oriented 2-wire serial interface, an SPI serial port, a 6-channel 10-bit ADC, a programmable watchdog timer with internal oscillator, and five software selectable power saving modes. This is the same microcontroller used in the Arduino Uno, making it fully compatible with Arduino IDE and libraries.

## Specifications

### Core Specifications
- **Architecture**: 8-bit AVR enhanced RISC
- **Operating Voltage**: 1.8V ~ 5.5V
- **Clock Speed**: Up to 20 MHz (16 MHz typical for Arduino applications)
- **Performance**: 20 MIPS at 20 MHz
- **Operating Temperature**: -40°C to +85°C

### Memory
- **Program Memory (Flash)**: 32KB (with 0.5KB used by bootloader in Arduino)
- **SRAM**: 2KB
- **EEPROM**: 1KB
- **Endurance**: 10,000 write/erase cycles (Flash), 100,000 write/erase cycles (EEPROM)

### I/O and Peripherals
- **Digital I/O Pins**: 23 (22 on Arduino Uno due to crystal)
- **PWM Channels**: 6 (8-bit)
- **ADC Channels**: 6 (10-bit, 15 kSPS)
- **Analog Comparator**: 1
- **Timers**: 3 (two 8-bit, one 16-bit)

### Communication Interfaces
- **USART**: 1 (serial communication)
- **SPI**: 1 (Serial Peripheral Interface)
- **I2C (TWI)**: 1 (Two-Wire Interface)

## Pinout Diagram

```
    ATmega328-PU 28-Pin DIP
    ┌─────────────────────┐
PC6 │1  (RESET)        28│ PC5 (ADC5/SCL)
PD0 │2  (RXD)          27│ PC4 (ADC4/SDA)
PD1 │3  (TXD)          26│ PC3 (ADC3)
PD2 │4  (INT0)         25│ PC2 (ADC2)
PD3 │5  (INT1/OC2B)    24│ PC1 (ADC1)
PD4 │6  (T0/XCK)       23│ PC0 (ADC0)
VCC │7                 22│ GND
GND │8                 21│ AREF
PB6 │9  (TOSC1/XTAL1)  20│ AVCC
PB7 │10 (TOSC2/XTAL2)  19│ PB5 (SCK)
PD5 │11 (T1/OC0B)      18│ PB4 (MISO)
PD6 │12 (AIN0/OC0A)    17│ PB3 (MOSI/OC2A)
PD7 │13 (AIN1)         16│ PB2 (SS/OC1B)
PB0 │14 (ICP1/CLKO)    15│ PB1 (OC1A)
    └─────────────────────┘
```

## Arduino Pin Mapping

| ATmega328 Pin | Arduino Pin | Function |
|---------------|-------------|----------|
| PD0 | Digital 0 | RX (Serial) |
| PD1 | Digital 1 | TX (Serial) |
| PD2 | Digital 2 | INT0 |
| PD3 | Digital 3 | PWM, INT1 |
| PD4 | Digital 4 | - |
| PD5 | Digital 5 | PWM |
| PD6 | Digital 6 | PWM |
| PD7 | Digital 7 | - |
| PB0 | Digital 8 | - |
| PB1 | Digital 9 | PWM |
| PB2 | Digital 10 | PWM, SS |
| PB3 | Digital 11 | PWM, MOSI |
| PB4 | Digital 12 | MISO |
| PB5 | Digital 13 | SCK, LED |
| PC0 | Analog 0 | ADC0 |
| PC1 | Analog 1 | ADC1 |
| PC2 | Analog 2 | ADC2 |
| PC3 | Analog 3 | ADC3 |
| PC4 | Analog 4 | ADC4, SDA |
| PC5 | Analog 5 | ADC5, SCL |

## Applications

Common use cases for the ATmega328-PU:
- Arduino Uno replacement or standalone projects
- Custom Arduino-compatible boards
- Embedded control systems
- Sensor data acquisition projects
- Motor control applications
- Home automation systems
- Educational microcontroller projects
- Prototyping and breadboard development

## Programming Examples

### Arduino IDE Setup
```cpp
// Basic blink program for standalone ATmega328
void setup() {
  pinMode(13, OUTPUT); // PB5 - same as Arduino Uno LED pin
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

### Serial Communication
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello from ATmega328-PU!");
  delay(1000);
}
```

### ADC Reading
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  float voltage = sensorValue * (5.0 / 1023.0);
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" Voltage: ");
  Serial.println(voltage);
  delay(500);
}
```

## Circuit Examples

### Minimal Arduino-Compatible Circuit
```
ATmega328-PU Minimal Circuit:
- Pin 7 (VCC) ---- +5V
- Pin 8, 22 (GND) ---- Ground
- Pin 20 (AVCC) ---- +5V
- Pin 21 (AREF) ---- +5V (or external reference)
- Pin 1 (RESET) ---- 10kΩ pullup to +5V
- Pin 9, 10 (XTAL) ---- 16MHz crystal + 22pF capacitors to ground
- 0.1µF decoupling capacitor between VCC and GND
```

### ISP Programming Header
```
6-Pin ISP Header:
1. MISO (Pin 18) ---- PB4
2. VCC ---- +5V
3. SCK (Pin 19) ---- PB5
4. MOSI (Pin 17) ---- PB3
5. RESET (Pin 1) ---- PC6
6. GND ---- Ground
```

## Technical Notes

Important considerations for the ATmega328-PU:
- **Bootloader**: Requires Arduino bootloader for Arduino IDE compatibility
- **Crystal**: 16MHz crystal recommended for Arduino timing compatibility
- **Power Supply**: 5V recommended for Arduino compatibility, but can operate 1.8V-5.5V
- **Programming**: Can be programmed via ISP, Arduino as ISP, or USB-to-serial with bootloader
- **Fuse Settings**: Default fuses may need modification for external crystal operation
- **Brown-out Detection**: Built-in brown-out detection helps prevent corruption

## Tags

microcontroller, avr, arduino-compatible, 8-bit, atmega328, dip-28 #cabinet-3 #bin-40 #status-available

## Notes

The ATmega328-PU is one of the most popular microcontrollers for hobbyist and educational projects due to its use in the Arduino Uno. Having 11 of these chips provides excellent flexibility for creating custom Arduino-compatible projects, standalone embedded systems, or as replacements for Arduino Uno boards. The DIP package makes them perfect for breadboard prototyping and through-hole PCB designs. These microcontrollers offer a great balance of features, ease of use, and community support through the Arduino ecosystem. They're ideal for learning embedded programming and for projects that need more customization than standard Arduino boards provide.
