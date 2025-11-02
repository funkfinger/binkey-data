---
type: electronic-component
category: Analog ICs
subcategory: Operational Amplifiers
brand: Microchip Technology
part_number: MCP6002-I/P
model: MCP6002-I/P
description: Dual 1 MHz low-power operational amplifier with rail-to-rail input and output operation
manufacturer: Microchip Technology
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 2.7V ~ 6.0V single supply
current: 100µA typical quiescent current
power: Low power consumption
interface: [Analog Signal Processing, General Purpose]
connectivity: [Through-hole pins]
compatibility: [Low-power circuits, Battery systems, Sensor interfaces, General-purpose applications]
location: [Cabinet-3/Bin-32/Section-C]
quantity: 25
status: available
price_range: $0.50-1.00
datasheet: https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf
product_url: https://www.microchip.com/en-us/product/mcp6002
supplier: Microchip Technology
tags: [dual-opamp, 1mhz, low-power, general-purpose, microchip-technology, cabinet-3, bin-32, status-available]
date_added: 2025-11-02
added_date: 2025-11-02
---

# MCP6002-I/P - Dual 1 MHz Low-Power Operational Amplifier

## Details

- **Location**: Cabinet-3, Bin 32, Section C
- **Category**: Analog ICs
- **Brand**: Microchip Technology
- **Part Number**: MCP6002-I/P
- **Package**: 8-DIP
- **Quantity**: 25
- **Status**: Available
- **Price Range**: $0.50-1.00
- **Datasheet**: [MCP6002 Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf)
- **Product URL**: [Microchip Product Page](https://www.microchip.com/en-us/product/mcp6002)

## Description

The MCP6002-I/P is a dual general-purpose operational amplifier designed for low-power applications. With a 1 MHz gain-bandwidth product and typical quiescent current of only 100µA, this amplifier is ideal for battery-powered and portable applications. The rail-to-rail input and output operation allows maximum signal swing with supply voltages from 2.7V to 6.0V, making it perfect for single-supply, low-voltage applications.

## Specifications

### Electrical Characteristics
- **Supply Voltage**: 2.7V to 6.0V single supply
- **Input Offset Voltage**: ±5mV typical
- **Input Bias Current**: ±1pA typical (CMOS input)
- **Gain-Bandwidth Product**: 1 MHz typical
- **Quiescent Current**: 100µA per channel typical
- **Output Current**: ±20mA per channel
- **Slew Rate**: 0.5V/µs typical

### Physical Characteristics  
- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -40°C to +125°C

### Key Features
- Dual independent operational amplifiers
- 1 MHz gain-bandwidth product
- Rail-to-rail input and output operation
- Single supply operation from 2.7V to 6.0V
- Low quiescent current (100µA per channel)
- CMOS input stage for high impedance
- General-purpose design

## Pinout Diagram

```
    MCP6002-I/P 8-Pin DIP
    ┌─────────────┐
OUT1│1          8│ VDD
IN1-│2          7│ OUT2
IN1+│3          6│ IN2-
VSS │4          5│ IN2+
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | OUT1 | Output of amplifier 1 |
| 2   | IN1- | Inverting input of amplifier 1 |
| 3   | IN1+ | Non-inverting input of amplifier 1 |
| 4   | VSS  | Negative power supply (ground) |
| 5   | IN2+ | Non-inverting input of amplifier 2 |
| 6   | IN2- | Inverting input of amplifier 2 |
| 7   | OUT2 | Output of amplifier 2 |
| 8   | VDD  | Positive power supply |

## Applications

Common use cases for the MCP6002-I/P:
- Battery-powered sensor interfaces
- Portable instrumentation
- Low-power signal conditioning
- General-purpose amplification
- Audio preamplifiers
- Active filters
- Precision measurement circuits
- Single-supply precision amplifiers

## Technical Notes

Important considerations for the MCP6002-I/P:
- **Low Power**: Ideal for battery-powered applications
- **Rail-to-Rail**: Maximizes signal swing in low-voltage applications
- **Single Supply**: Simplifies power supply design
- **Input Protection**: CMOS inputs require ESD protection
- **Decoupling**: Use 0.1µF ceramic capacitor close to power pins
- **Bandwidth**: 1 MHz bandwidth suitable for many general-purpose applications

## Tags

dual-opamp, 1mhz, low-power, general-purpose, microchip-technology #cabinet-3 #bin-32 #status-available

## Notes

General-purpose dual op-amp suitable for a wide range of low-power analog applications.

