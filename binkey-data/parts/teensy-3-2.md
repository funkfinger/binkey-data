---
type: electronic-component
category: Microcontroller Boards
subcategory: ARM Cortex-M4 Development Board
brand: PJRC
part_number: TEENSY32
model: Teensy 3.2
microcontroller: MK20DX256VLH7
architecture: ARM Cortex-M4
clock_speed: 72MHz
voltage: 3.3V
flash: 256KB
ram: 64KB
eeprom: 2KB
connectivity: [USB]
interface: [USB, I2C, SPI, UART, CAN, I2S]
gpio_pins: 34
analog_inputs: 21
analog_outputs: 1
pwm_pins: 12
dimensions: 35.6mm x 17.8mm
weight: 7g
usb_native: true
location: [Cabinet-1/Bin-28]
quantity: 1
status: available
price_range: $20-25
tags: [microcontroller, arm, cortex-m4, teensy, usb, audio, dac, can-bus, i2s, pjrc]
---

# Teensy 3.2 Development Board

## Details

- **Location**: Cabinet-1, Bin 28
- **Category**: Microcontroller Boards
- **Type**: ARM Cortex-M4 Development Board
- **Microcontroller**: MK20DX256VLH7
- **Brand**: PJRC
- **Part Number**: TEENSY32
- **Quantity**: 1
- **Product URL**: https://www.pjrc.com/store/teensy32.html

## Description

Compact and powerful 32-bit ARM Cortex-M4 microcontroller development board featuring the MK20DX256VLH7 processor. Known for excellent audio processing capabilities, extensive I/O options, and robust software ecosystem. Popular choice for audio projects, LED control, and embedded applications requiring high performance in a small form factor.

## Specifications

- **Part Number**: TEENSY32
- **Microcontroller**: MK20DX256VLH7 (Freescale Kinetis)
- **Architecture**: 32-bit ARM Cortex-M4 with DSP instructions
- **Clock Speed**: 72MHz (adjustable)
- **Operating Voltage**: 3.3V
- **Input Voltage**: 5V (via USB) or 3.3V-5.5V (via VIN)
- **Flash Memory**: 256KB
- **RAM**: 64KB
- **EEPROM**: 2KB (emulated)
- **Dimensions**: 35.6mm x 17.8mm x 3.2mm
- **Weight**: ~7g

## Image

![Teensy 3.2 Development Board](../attachments/teensy-3-2.jpg)

## Features

- **ARM Cortex-M4**: High-performance 32-bit processor with DSP extensions
- **USB Native**: Built-in USB device support (12 Mbit/sec)
- **Rich I/O**: 34 digital I/O pins, 21 analog inputs, 1 analog output
- **Audio Capabilities**: I2S digital audio, built-in DAC, optimized audio library
- **Communication**: 3x UART, 2x I2C, 1x SPI, 1x CAN bus
- **PWM**: 12 pins with PWM capability
- **Timers**: Multiple hardware timers and interval timers
- **Real-Time Clock**: Built-in RTC with optional battery backup
- **DMA**: 16-channel DMA controller for high-performance transfers

## Pin Configuration

- **Digital I/O**: 34 pins total (24 easily accessible on breadboard)
- **Analog Inputs**: 21 pins (A0-A20, 10-16 bit resolution)
- **Analog Output**: 1 pin (A14, 12-bit DAC)
- **PWM**: 12 pins (3, 4, 5, 6, 9, 10, 20, 21, 22, 23, 25, 32)
- **Touch Sensing**: 12 pins with capacitive touch capability
- **Communication Pins**:
  - UART: Serial1 (pins 0,1), Serial2 (pins 9,10), Serial3 (pins 7,8)
  - I2C: Wire (pins 18,19), Wire1 (pins 29,30)
  - SPI: (pins 11,12,13,14)
  - CAN: (pins 3,4)
  - I2S: (pins 9,11,13,22,23)

## Programming & Software

- **Arduino IDE**: Full support with Teensyduino add-on
- **USB Types**: Serial, MIDI, Keyboard, Mouse, Joystick, Audio, Raw HID
- **Libraries**: Extensive optimized library collection
- **Audio Library**: Visual design tool for audio processing
- **Bootloader**: Separate chip prevents corruption
- **Programming**: USB-based, no external programmer needed

## Audio Capabilities

- **I2S Digital Audio**: Simultaneous input/output, up to 4 channels
- **Built-in DAC**: 12-bit analog output on pin A14
- **Audio Library**: Real-time audio processing with visual design tool
- **S/PDIF**: Digital audio output capability
- **Audio Shield**: Compatible with Teensy Audio Shield

## Power & Timing

- **Power Consumption**: Low power modes available
- **USB Power**: 5V via USB, regulated to 3.3V
- **External Power**: 3.3V-5.5V via VIN pin
- **Crystal**: 16MHz with PLL for system clock
- **RTC**: 32.768kHz crystal support for real-time clock

## Applications

- **Audio Processing**: Digital effects, synthesizers, audio analysis
- **LED Control**: NeoPixel/WS2812B strips, LED matrices
- **MIDI Controllers**: USB MIDI devices, musical instruments
- **Data Logging**: High-speed data acquisition
- **Motor Control**: PWM motor control, servo control
- **Communication**: CAN bus, multiple serial protocols
- **Embedded Systems**: Real-time control applications

## Advantages

- **High Performance**: 72MHz ARM Cortex-M4 with DSP instructions
- **Audio Optimized**: Excellent for audio applications
- **Rich Connectivity**: Multiple communication protocols
- **Mature Ecosystem**: Extensive libraries and community support
- **Small Form Factor**: Compact design for space-constrained projects
- **USB Flexibility**: Multiple USB device types supported

## Notes

- Discontinued product - no longer in production
- Recommended to migrate to Teensy 4.0/4.1 for new projects
- 5V tolerant inputs for easy interfacing
- Breadboard friendly with 0.1" pin spacing
- Optional headers included but not pre-soldered
