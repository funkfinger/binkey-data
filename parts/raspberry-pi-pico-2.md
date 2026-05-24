---
type: dev-board
category: Microcontroller Boards
subcategory: RP2350 Development Board
part_number: SC1631
manufacturer: Raspberry Pi Foundation
description: Raspberry Pi Pico 2 — RP2350 dual-core (ARM Cortex-M33 or RISC-V Hazard3) microcontroller board, no headers fitted
location: Cabinet-1/Bin-22/Section-A
quantity: 4
status: available
price: $5
datasheet: https://datasheets.raspberrypi.com/pico/pico-2-datasheet.pdf
product_url: https://www.raspberrypi.com/products/raspberry-pi-pico-2/
date_added: 2026-05-24
tags: [microcontroller, rp2350, pico, raspberry-pi, dual-architecture, circuitpython, micropython, arduino, dev-board, cabinet-1, bin-22, status-available]
---

# Raspberry Pi Pico 2

## Description

The Raspberry Pi Pico 2 is the second-generation Pico, built on the new RP2350 microcontroller. It offers significant upgrades over the original Pico: dual-core processing with selectable ARM Cortex-M33 or RISC-V Hazard3 cores, double the SRAM and Flash, an FPU and DSP instructions on the M33 cores, and a third PIO block — while remaining pin-compatible with the original Pico footprint.

This is the wireless-free variant; for WiFi/Bluetooth use the [[raspberry-pi-pico-2w|Pico 2 W]]. Boards are shipped without headers fitted, suitable for soldering directly into a PCB or for custom header configurations.

## Specifications

### Electrical Characteristics

- **Microcontroller**: RP2350A dual-core @ 150MHz
- **Cores**: 2× ARM Cortex-M33 + 2× RISC-V Hazard3 (select at boot, one pair active at a time)
- **SRAM**: 520KB on-chip
- **Flash**: 4MB QSPI
- **GPIO**: 26 multi-function 3.3V pins
- **ADC**: 4× 12-bit channels
- **PWM**: 24 channels
- **PIO**: 3 blocks × 4 state machines (12 total)
- **Peripherals**: 2× UART, 2× SPI, 2× I²C, USB 1.1 host/device
- **Power Input**: 1.8–5.5V via VSYS
- **Operating Temp**: –20°C to +85°C

### Physical Characteristics

- **Dimensions**: 21mm × 51mm
- **Headers**: Not fitted (castellated edges + through-hole pads)
- **Connector**: Micro-USB
- **Weight**: ~3g

### Key Features

- Dual-architecture (ARM Cortex-M33 or RISC-V Hazard3)
- ~2× performance of original Pico, with FPU and DSP instructions
- ARM TrustZone, signed boot, 8KB antifuse OTP, hardware SHA-256 and TRNG
- HSTX (high-speed serial transmit) for fast display interfaces
- Pin-compatible with original Pico

## Image

*No photo yet — add photo to `binkey-data/attachments/raspberry-pi-pico-2.jpg` and replace this line with `![Raspberry Pi Pico 2](../attachments/raspberry-pi-pico-2.jpg)`*

## Pinout Diagram

Pinout is identical to the original Pico — see the [official Pico 2 pinout PDF](https://datasheets.raspberrypi.com/pico/Pico-2-Pinout.pdf).

Key pin notes:
- **GP0–GP22, GP26–GP28**: general-purpose I/O
- **GP25**: on-board LED
- **GP26–GP29**: ADC0–ADC3 (GP29 is also VSYS/3 monitor)
- **VBUS**: 5V from USB
- **VSYS**: main system rail input (1.8–5.5V)
- **3V3**: 3.3V output from on-board SMPS (max ~300mA external draw)
- **BOOTSEL**: hold during USB connection to mount as UF2 drive

## Applications

- Cost-effective controller for RP2350 development without wireless
- USB HID devices, MIDI controllers, macropads
- Real-time signal processing leveraging dual-core + FPU
- Learning RISC-V on hardware
- PIO-driven WS2812/LED matrix drivers
- USB host applications (keyboard/joystick passthrough)
- Compact custom-PCB designs (solder direct, skip headers)

## Circuit Examples

### Basic LED on GP15

```
GP15 ──┬── 330Ω ──── LED anode
       └─────────── LED cathode ─── GND
```

### I²C Sensor (default I2C0)

```
Sensor SDA ── GP4
Sensor SCL ── GP5
Sensor VCC ── 3V3
Sensor GND ── GND
```

## Technical Notes

- **RP2350 A2 erratum E9**: internal pulldowns and high-impedance inputs are affected. Use external pulldowns ≤8.2kΩ where required.
- Selecting RISC-V vs ARM cores is done via a UF2 flashed at boot; the chip cannot run both simultaneously.
- Without headers fitted, BOOTSEL is the small button near the USB connector — still accessible.
- For SWD debugging use the 3-pin debug header pads (SWCLK, GND, SWDIO).

## Notes

The Pico 2 (no headers) and Pico 2 H (pre-fitted headers) share the same silicon; the only difference is whether 2.54mm male headers are factory-soldered. For breadboard work prefer the H variant or stock 2×20 headers in [[2x20-male-pin-header]]. For wireless capability use the [[raspberry-pi-pico-2w|Pico 2 W]] in the same bin.
