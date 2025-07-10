---
type: part
title: Bipolar Junction Transistors (BJT)
description: Collection of bipolar junction transistors including NPN and PNP types for general purpose amplification, switching, and signal processing applications
manufacturer: Various
part_number: BJT-TRANSISTORS-MIXED
category: discrete-semiconductors
subcategory: transistors
tags: [transistors, bjt, bipolar, npn, pnp, bc548, bc558, amplification, switching, signal-processing, to-92]
total_quantity: 40
location: [cabinet-2-bin-26]
price: 0.13
currency: USD
date_added: 2025-01-09
status: active
---

# Bipolar Junction Transistors (BJT)

## Overview

This collection contains bipolar junction transistors (BJTs) in both NPN and PNP configurations. These fundamental semiconductor devices are essential for amplification, switching, and signal processing in analog and digital circuits. The collection includes popular general-purpose transistors suitable for a wide range of electronic applications.

## Available Components and Locations

### Bin 26 - BJT Transistors (Cabinet 2)

| Part Number | Type | Vceo | Ic Max | hFE | Frequency | Package | Quantity | Applications |
|-------------|------|------|--------|-----|-----------|---------|----------|--------------|
| BC558B | PNP | 30V | 100mA | 200+ | 150MHz | TO-92 | 20 | General purpose |
| BC548C | NPN | 30V | 100mA | 420+ | 300MHz | TO-92 | 20 | General purpose |

## Technical Specifications

### BC558B PNP Transistor

#### Electrical Characteristics
- **Transistor Type**: PNP Bipolar Junction Transistor
- **Collector-Emitter Voltage (Vceo)**: 30V maximum
- **Collector Current (Ic)**: 100mA maximum
- **Collector-Base Voltage (Vcbo)**: 30V maximum
- **Emitter-Base Voltage (Vebo)**: 5V maximum
- **DC Current Gain (hFE)**: 200 minimum @ 2mA, 5V
- **Transition Frequency (fT)**: 150MHz typical

#### Switching Characteristics
- **Vce Saturation**: 650mV maximum @ 5mA Ib, 100mA Ic
- **Vbe Saturation**: 900mV typical @ 5mA Ib, 100mA Ic
- **Collector Cutoff Current (Icbo)**: 15nA maximum
- **Turn-on Time**: Fast switching capability
- **Turn-off Time**: Suitable for moderate frequency switching

#### Thermal Characteristics
- **Power Dissipation**: 500mW maximum @ 25°C
- **Junction Temperature**: 150°C maximum
- **Operating Temperature**: -55°C to +150°C
- **Thermal Resistance**: Junction to ambient in free air
- **Derating**: Linear derating above 25°C ambient

#### Package Information
- **Package Type**: TO-92-3 (TO-226AA)
- **Pin Configuration**: 1-Emitter, 2-Base, 3-Collector
- **Mounting**: Through-hole
- **Lead Spacing**: Standard 0.1" (2.54mm)
- **Body Dimensions**: Standard TO-92 footprint

### BC548C NPN Transistor

#### Electrical Characteristics
- **Transistor Type**: NPN Bipolar Junction Transistor
- **Collector-Emitter Voltage (Vceo)**: 30V maximum
- **Collector Current (Ic)**: 100mA maximum
- **Collector-Base Voltage (Vcbo)**: 30V maximum
- **Emitter-Base Voltage (Vebo)**: 5V maximum
- **DC Current Gain (hFE)**: 420 minimum @ 2mA, 5V
- **Transition Frequency (fT)**: 300MHz typical

#### Switching Characteristics
- **Vce Saturation**: 600mV maximum @ 5mA Ib, 100mA Ic
- **Vbe Saturation**: 700mV typical @ 5mA Ib, 100mA Ic
- **Collector Cutoff Current (Icbo)**: 15nA maximum
- **Turn-on Time**: Fast switching capability
- **Turn-off Time**: Excellent for high-frequency switching

#### Thermal Characteristics
- **Power Dissipation**: 500mW maximum @ 25°C
- **Junction Temperature**: 150°C maximum
- **Operating Temperature**: -55°C to +150°C
- **Thermal Resistance**: Junction to ambient in free air
- **Derating**: Linear derating above 25°C ambient

#### Package Information
- **Package Type**: TO-92-3 (TO-226AA)
- **Pin Configuration**: 1-Collector, 2-Base, 3-Emitter
- **Mounting**: Through-hole
- **Lead Spacing**: Standard 0.1" (2.54mm)
- **Body Dimensions**: Standard TO-92 footprint

## Applications by Type

### PNP Transistor Applications (BC558B)
- **Current Sources**: Constant current source circuits
- **High-Side Switching**: Switching loads connected to ground
- **Complementary Pairs**: Paired with NPN for push-pull amplifiers
- **Level Shifting**: Voltage level translation circuits
- **Oscillators**: RC and LC oscillator circuits
- **Audio Amplifiers**: Small signal audio amplification
- **Voltage Regulators**: Simple voltage regulation circuits

### NPN Transistor Applications (BC548C)
- **Common Emitter Amplifiers**: Voltage and current amplification
- **Low-Side Switching**: Switching loads connected to positive supply
- **Digital Logic**: TTL and CMOS interface circuits
- **Oscillators**: High-frequency oscillator circuits
- **Current Mirrors**: Precision current mirror circuits
- **RF Amplifiers**: Radio frequency amplification
- **Timer Circuits**: Timing and delay circuits

### General BJT Applications
- **Amplification**: Small signal and power amplification
- **Switching**: Digital switching and logic circuits
- **Oscillation**: Sine wave and square wave generation
- **Regulation**: Voltage and current regulation
- **Detection**: Signal detection and demodulation
- **Mixing**: Frequency mixing and conversion
- **Buffering**: Signal buffering and isolation

## Circuit Design Guidelines

### Biasing Considerations
- **Base Bias**: Provide appropriate base current for desired collector current
- **Voltage Divider**: Use voltage divider for stable DC bias point
- **Emitter Degeneration**: Add emitter resistor for thermal stability
- **Temperature Compensation**: Consider temperature effects on Vbe
- **Load Line**: Ensure operation within safe operating area

### Switching Applications
- **Saturation**: Drive base hard enough to ensure saturation
- **Cut-off**: Ensure base-emitter is reverse biased for cut-off
- **Speed**: Consider switching speed requirements
- **Power**: Calculate power dissipation during switching
- **Protection**: Add protection diodes for inductive loads

### Amplifier Design
- **Gain**: Calculate voltage and current gain requirements
- **Bandwidth**: Consider frequency response requirements
- **Linearity**: Ensure operation in linear region
- **Distortion**: Minimize harmonic distortion
- **Stability**: Ensure amplifier stability across frequency range

## Selection Guidelines

### Choosing Between NPN and PNP
- **NPN (BC548C)**: Use for low-side switching, common emitter amplifiers
- **PNP (BC558B)**: Use for high-side switching, current sources
- **Complementary**: Use both for push-pull and differential circuits
- **Supply Polarity**: Consider power supply configuration
- **Signal Polarity**: Match transistor type to signal requirements

### Performance Considerations
- **Current Gain**: BC548C has higher gain (420 vs 200)
- **Frequency Response**: BC548C has higher fT (300MHz vs 150MHz)
- **Switching Speed**: BC548C generally faster switching
- **Noise**: Consider noise figure for low-noise applications
- **Matching**: Use matched pairs for differential circuits

### Package and Mounting
- **TO-92**: Standard through-hole package for prototyping
- **Heat Sinking**: Generally not required for low power applications
- **Lead Forming**: Be careful when forming leads
- **PCB Layout**: Consider thermal and electrical layout
- **Replacement**: Standard pinout for easy replacement

## Testing and Verification

### Basic Testing
- **Continuity**: Test base-emitter and base-collector junctions
- **Forward Voltage**: Measure Vbe forward voltage drop
- **Leakage**: Test for excessive leakage current
- **Gain**: Measure DC current gain (hFE)
- **Pinout**: Verify correct pin identification

### Performance Testing
- **Saturation Voltage**: Measure Vce(sat) under load
- **Switching Speed**: Test rise and fall times
- **Frequency Response**: Measure gain vs frequency
- **Linearity**: Test for distortion in amplifier circuits
- **Temperature**: Test performance over temperature range

### Quality Assurance
- **Visual Inspection**: Check for physical damage
- **Marking Verification**: Confirm part number marking
- **Lead Condition**: Check lead integrity and plating
- **Package Integrity**: Verify package condition
- **Storage**: Proper storage conditions maintained

## Installation Guidelines

### PCB Layout
- **Thermal Considerations**: Provide adequate thermal relief
- **Ground Plane**: Use solid ground plane for high-frequency circuits
- **Trace Width**: Use appropriate trace width for current
- **Component Placement**: Keep heat-sensitive components away
- **Bypass Capacitors**: Add bypass capacitors near power pins

### Soldering Guidelines
- **Temperature**: Use appropriate soldering temperature (350°C max)
- **Time**: Minimize time at temperature (3-4 seconds max)
- **Heat Sink**: Use heat sink on leads if necessary
- **Flux**: Use appropriate flux for component type
- **Cleaning**: Clean flux residue if required

### Handling Precautions
- **ESD Protection**: Use ESD precautions during handling
- **Lead Stress**: Avoid excessive stress on leads
- **Static Sensitivity**: Protect from static discharge
- **Storage**: Store in anti-static packaging
- **Temperature**: Avoid extreme temperatures during handling

## Troubleshooting

### Common Issues
- **No Amplification**: Check bias conditions and connections
- **Distortion**: Verify operating point and signal levels
- **Oscillation**: Check for unwanted feedback paths
- **Thermal Runaway**: Ensure adequate thermal design
- **Low Gain**: Verify transistor is not damaged

### Failure Modes
- **Open Circuit**: Junction failure due to overstress
- **Short Circuit**: Breakdown due to overvoltage
- **Low Gain**: Degradation due to radiation or aging
- **High Leakage**: Surface contamination or damage
- **Thermal Damage**: Excessive power dissipation

### Replacement Guidelines
- **Same Type**: Use same NPN/PNP type when possible
- **Voltage Rating**: Equal or higher voltage rating
- **Current Rating**: Equal or higher current rating
- **Package**: Ensure physical and thermal compatibility
- **Gain**: Consider gain requirements for circuit

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Low humidity environment preferred
- **ESD Protection**: Store in anti-static packaging
- **Organization**: Sort by type and part number
- **Inventory**: Maintain accurate inventory records

### Handling Guidelines
- **ESD Precautions**: Use ESD wrist strap and mat
- **Lead Care**: Avoid bending leads excessively
- **Static Protection**: Use anti-static work surface
- **Contamination**: Keep clean during handling
- **Documentation**: Maintain handling procedures

## Package Contents

- BC558B PNP transistors (20 pieces)
- BC548C NPN transistors (20 pieces)
- TO-92 through-hole package
- General purpose specifications

## Important Notes

- **Polarity**: Observe correct NPN/PNP polarity in circuits
- **Power Limits**: Respect maximum power dissipation ratings
- **ESD Sensitive**: Handle with appropriate ESD precautions
- **Temperature**: Consider thermal design for power applications
- **Matching**: Use matched pairs for critical applications

## Advantages

- **Versatile**: Suitable for wide range of applications
- **Standard Packages**: Industry-standard TO-92 package
- **Good Performance**: Excellent gain and frequency characteristics
- **Low Cost**: Economical for general purpose applications
- **Available**: Common parts with good availability

## Limitations

- **Power**: Limited to low power applications (500mW)
- **Voltage**: Moderate voltage ratings (30V)
- **Current**: Limited current capability (100mA)
- **Package**: Through-hole only, no surface mount
- **Frequency**: Limited to moderate frequency applications

## Recommended Applications

- **Amplifiers**: Small signal amplification circuits
- **Switches**: Low power switching applications
- **Oscillators**: Audio and RF oscillator circuits
- **Interfaces**: Logic level translation and buffering
- **Educational**: Learning and prototyping applications
