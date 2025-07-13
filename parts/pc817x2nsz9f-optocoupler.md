---
type: electronic-component
category: Isolators
subcategory: Optocouplers
brand: SHARP/Socle Technology
part_number: PC817X2NSZ9F
model: PC817X2NSZ9F
description: Optoisolator 5KV 1-channel transistor output 4-DIP
manufacturer: SHARP/Socle Technology
package: 4-DIP
size: 0.300" (7.62mm) width
voltage: 5000Vrms isolation
current: 50mA forward current, 50mA output current
power: Low power consumption
interface: [Optical Isolation]
connectivity: [Through-hole pins]
compatibility: [Digital circuits, Microcontrollers, Industrial control]
location: [Cabinet-3/Bin-37/Section-B]
quantity: 49
status: available
price_range: $0.27-0.08 (volume pricing)
datasheet: http://www.socle-tech.com/doc/IC%20Channel%20Product/Optoelectronic%20Components/Photocoupler/PC817X_NSZ9FSeries_SPEC.pdf
product_url: https://www.digikey.com/en/products/detail/sharp-socle-technology/PC817X2NSZ9F/7942022
tags: [optocoupler, optoisolator, isolation, transistor-output, sharp, socle-technology, cabinet-3, bin-37, status-available]
date_added: 2025-01-12
---

# PC817X2NSZ9F - Optoisolator/Optocoupler

## Details

- **Location**: Cabinet-3, Bin 37, Section B
- **Category**: Isolators
- **Brand**: SHARP/Socle Technology
- **Part Number**: PC817X2NSZ9F
- **Package**: 4-DIP
- **Quantity**: 49
- **Status**: Available
- **Price Range**: $0.27-0.08 (volume pricing)
- **Datasheet**: [PC817X2NSZ9F Datasheet](http://www.socle-tech.com/doc/IC%20Channel%20Product/Optoelectronic%20Components/Photocoupler/PC817X_NSZ9FSeries_SPEC.pdf)
- **Product URL**: https://www.digikey.com/en/products/detail/sharp-socle-technology/PC817X2NSZ9F/7942022

## Description

The PC817X2NSZ9F is a single-channel optocoupler (optoisolator) that provides electrical isolation between input and output circuits using optical coupling. It consists of an infrared LED (IRED) optically coupled to a phototransistor, providing 5000Vrms isolation voltage. This device is ideal for isolating sensitive circuits from high voltages, noise, and ground loops.

## Specifications

### Electrical Characteristics
- **Isolation Voltage**: 5000Vrms
- **Forward Voltage (Vf)**: 1.2V (typical)
- **Forward Current (If)**: 50mA (maximum)
- **Output Voltage**: 80V (maximum)
- **Output Current**: 50mA per channel
- **Current Transfer Ratio**: 50% to 600% @ 5mA
- **Vce Saturation**: 200mV (maximum)

### Physical Characteristics  
- **Package**: 4-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 4-pin DIP package
- **Operating Temperature**: -30°C ~ 100°C
- **Mounting Type**: Through Hole

### Key Features
- Single channel optical isolation
- High isolation voltage (5000Vrms)
- Transistor output for switching applications
- Wide current transfer ratio range
- Low saturation voltage
- Compact 4-pin DIP package
- High noise immunity

## Image

*Image needed - Standard 4-pin DIP package IC with PC817X2NSZ9F markings on top. Consider taking a photo of actual component for documentation.*

## Pinout Diagram

### Pin Descriptions (4-DIP Package)

| Pin | Name | Function |
|-----|------|----------|
| 1 | Anode | LED anode (input +) |
| 2 | Cathode | LED cathode (input -) |
| 3 | Emitter | Phototransistor emitter (output) |
| 4 | Collector | Phototransistor collector (output) |

### Internal Structure
```
Input Side (Pins 1-2):    Output Side (Pins 3-4):
    Infrared LED     ~~~>    Phototransistor
    (Anode/Cathode)          (Collector/Emitter)
```

## Applications

Common use cases and applications for this component:
- Microcontroller interface isolation
- Switching power supply feedback
- Industrial control systems
- Motor drive circuits
- Communication system isolation
- Ground loop elimination
- Noise isolation in sensitive circuits
- Safety isolation in medical equipment

## Circuit Examples

### Basic Switching Circuit
```
Input Side:
VCC ---- R1 (220Ω-1kΩ) ---- Pin 1 (Anode)
Control Signal ------------- Pin 2 (Cathode) ---- GND

Output Side:
VCC ---- Load ---- Pin 4 (Collector)
Pin 3 (Emitter) ---- GND
```

### Microcontroller Interface
```
MCU GPIO ---- R1 (330Ω) ---- Pin 1 (Anode)
Pin 2 (Cathode) ---- GND

Isolated Circuit:
VCC ---- Pull-up R2 (10kΩ) ---- Pin 4 (Collector) ---- Output Signal
Pin 3 (Emitter) ---- GND
```

### AC Line Detection
```
AC Line ---- Bridge Rectifier ---- R1 ---- Pin 1 (Anode)
Pin 2 (Cathode) ---- Bridge Rectifier GND

MCU Side:
VCC ---- R2 (10kΩ) ---- Pin 4 (Collector) ---- MCU Input
Pin 3 (Emitter) ---- MCU GND
```

## Technical Notes

Important technical considerations and features:
- Input LED requires current limiting resistor (typically 220Ω-1kΩ)
- Output transistor needs pull-up resistor for logic level output
- Current transfer ratio varies with temperature and LED current
- Rise/fall times are 4µs/3µs typical - suitable for moderate speed switching
- Maximum LED forward current is 50mA - avoid exceeding this limit
- Isolation voltage rating applies between input and output sides
- Can be used for both DC and low-frequency AC signal isolation
- Output transistor can sink up to 50mA when saturated

## Safety Notes

- **High Voltage Isolation**: Provides 5000Vrms isolation - suitable for mains voltage applications
- **Proper PCB Layout**: Maintain adequate creepage and clearance distances on PCB
- **Current Limiting**: Always use appropriate current limiting resistors
- **Temperature Derating**: Consider temperature effects on current transfer ratio

## Tags

optocoupler, optoisolator, isolation, transistor-output, sharp, socle-technology #cabinet-3 #bin-37 #status-available

## Notes

The PC817X2NSZ9F is a reliable and widely-used optocoupler that's essential for electrical isolation in many electronic systems. Its 5000Vrms isolation rating makes it suitable for applications involving mains voltage or other high-voltage circuits. The transistor output configuration makes it ideal for switching applications and digital signal isolation. Having 49 of these components provides excellent flexibility for various isolation requirements in projects ranging from simple microcontroller interfaces to industrial control systems.
