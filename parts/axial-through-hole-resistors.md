---
type: part
title: Axial Through Hole Resistors
description: Collection of standard axial through-hole resistors in various values with 5% tolerance
manufacturer: Generic
part_number: RESISTOR-AXIAL-5PCT
category: passive-components
subcategory: resistors
tags: [resistors, axial, through-hole, carbon-film, metal-film, 5-percent, 1-4-watt]
total_quantity: 200+
location: [cabinet-2-bin-1, cabinet-2-bin-2, cabinet-2-bin-3]
price: 0.05
currency: USD
date_added: 2025-01-09
status: active
---

# Axial Through Hole Resistors

## Overview

This collection contains standard axial through-hole resistors commonly used in electronic circuits. These resistors feature axial leads extending from both ends and are designed for through-hole PCB mounting or breadboard use. All resistors in this collection have 5% tolerance and are suitable for general-purpose electronic applications.

## Specifications

- **Package Type**: Axial through-hole
- **Tolerance**: ±5%
- **Power Rating**: 1/4 Watt (0.25W) typical
- **Temperature Coefficient**: ±100 ppm/°C typical
- **Operating Temperature**: -55°C to +155°C
- **Lead Material**: Tinned copper wire
- **Body Material**: Carbon film or metal film

## Available Values and Locations

### Bin 1 - Low Values (Cabinet 2)
| Value | Tolerance | Quantity | Color Code | Notes |
|-------|-----------|----------|------------|-------|
| 4.7Ω | 5% | 20+ | Yellow-Violet-Gold-Gold | Low resistance |
| 100Ω | 5% | 20+ | Brown-Black-Brown-Gold | Common value |
| 470Ω | 5% | 20+ | Yellow-Violet-Brown-Gold | LED current limiting |
| 1kΩ | 5% | 20+ | Brown-Black-Red-Gold | Very common |

### Bin 2 - Mid Values (Cabinet 2)
| Value | Tolerance | Quantity | Color Code | Notes |
|-------|-----------|----------|------------|-------|
| 4.7kΩ | 5% | 20+ | Yellow-Violet-Red-Gold | Pull-up/down |
| 10kΩ | 5% | 20+ | Brown-Black-Orange-Gold | Most common |
| 100kΩ | 5% | 20+ | Brown-Black-Yellow-Gold | High impedance |
| 470kΩ | 5% | 20+ | Yellow-Violet-Yellow-Gold | Timing circuits |

### Bin 3 - High Values (Cabinet 2)
| Value | Tolerance | Quantity | Color Code | Notes |
|-------|-----------|----------|------------|-------|
| 1MΩ | 5% | 20+ | Brown-Black-Green-Gold | Very high impedance |
| 4.7MΩ | 5% | 20+ | Yellow-Violet-Green-Gold | Ultra high impedance |

## Technical Specifications

### Electrical Characteristics
- **Resistance Range**: 4.7Ω to 4.7MΩ
- **Tolerance**: ±5% (Gold band)
- **Power Rating**: 0.25W at 70°C
- **Maximum Voltage**: 250V
- **Temperature Coefficient**: ±100 ppm/°C (carbon film)
- **Noise**: Low noise characteristics

### Physical Characteristics
- **Body Length**: 6-9mm typical
- **Body Diameter**: 2-3mm typical
- **Lead Diameter**: 0.6mm (24 AWG) typical
- **Lead Length**: 25-30mm typical
- **Lead Spacing**: Standard 0.1" (2.54mm) grid compatible

### Environmental Specifications
- **Operating Temperature**: -55°C to +155°C
- **Storage Temperature**: -65°C to +175°C
- **Humidity**: Up to 95% RH non-condensing
- **Vibration**: MIL-STD-202 compliant
- **Shock**: MIL-STD-202 compliant

## Color Code Reference

### 4-Band Color Code System
1. **First Band**: First significant digit
2. **Second Band**: Second significant digit
3. **Third Band**: Multiplier (number of zeros)
4. **Fourth Band**: Tolerance (Gold = 5%)

### Common Color Values
- **Black**: 0
- **Brown**: 1
- **Red**: 2
- **Orange**: 3
- **Yellow**: 4
- **Green**: 5
- **Blue**: 6
- **Violet**: 7
- **Gray**: 8
- **White**: 9
- **Gold**: 5% tolerance / 0.1 multiplier
- **Silver**: 10% tolerance / 0.01 multiplier

## Applications

### Low Value Resistors (4.7Ω - 1kΩ)
- **Current Limiting**: LED current limiting circuits
- **Current Sensing**: Shunt resistors for current measurement
- **Pull-down**: Logic level pull-down resistors
- **Damping**: Signal damping and termination
- **Power Circuits**: Gate resistors for MOSFETs

### Mid Value Resistors (4.7kΩ - 470kΩ)
- **Pull-up**: Logic level pull-up resistors
- **Biasing**: Transistor biasing circuits
- **Voltage Dividers**: Reference voltage generation
- **Timing**: RC timing circuits
- **Filtering**: RC filter networks

### High Value Resistors (1MΩ - 4.7MΩ)
- **High Impedance**: Input impedance for op-amps
- **Leakage Testing**: Insulation resistance testing
- **Timing**: Long time constant RC circuits
- **Biasing**: High impedance biasing
- **Protection**: Input protection circuits

## Circuit Design Guidelines

### Power Dissipation
- **Maximum Power**: 0.25W at 70°C ambient
- **Derating**: Derate linearly above 70°C
- **Safety Factor**: Use 50% of maximum rating for reliability
- **Heat Sinking**: Consider heat sinking for high power applications

### Voltage Rating
- **Maximum Voltage**: 250V for most values
- **High Resistance**: Lower voltage rating for very high values
- **Safety**: Consider voltage coefficient effects
- **Breakdown**: Avoid exceeding voltage rating

### Frequency Response
- **Parasitic Capacitance**: ~0.5pF typical
- **Parasitic Inductance**: ~10nH typical
- **High Frequency**: Performance degrades above 1MHz
- **RF Applications**: Consider parasitic effects

## Selection Guidelines

### Value Selection
- **E12 Series**: Standard 5% tolerance values
- **Preferred Values**: Use standard E12 series when possible
- **Precision**: Consider 1% tolerance for critical applications
- **Temperature**: Consider temperature coefficient for precision circuits

### Power Rating
- **Calculate Power**: P = I²R = V²/R
- **Safety Margin**: Use 50% derating for reliability
- **Ambient Temperature**: Consider operating temperature
- **Thermal Management**: Provide adequate ventilation

### Tolerance Considerations
- **5% Tolerance**: Suitable for most general applications
- **Critical Circuits**: Consider 1% or better for precision
- **Worst Case**: Design for worst-case tolerance stack-up
- **Aging**: Consider long-term stability requirements

## Testing and Measurement

### Resistance Measurement
- **DMM**: Use digital multimeter for basic measurements
- **4-Wire**: Use 4-wire measurement for low values
- **Temperature**: Measure at specified temperature
- **Settling Time**: Allow settling time for accurate readings

### Power Testing
- **Thermal**: Monitor temperature during power testing
- **Voltage**: Verify voltage rating compliance
- **Pulse Power**: Consider pulse power capability
- **Failure Mode**: Understand failure mechanisms

### Quality Verification
- **Visual Inspection**: Check for physical damage
- **Color Code**: Verify color code matches specification
- **Tolerance**: Verify resistance within tolerance
- **Temperature**: Test temperature coefficient if critical

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Avoid high humidity environments
- **Organization**: Sort by value for easy identification
- **Protection**: Protect leads from damage

### Handling Guidelines
- **ESD**: Use ESD precautions for sensitive circuits
- **Lead Forming**: Form leads carefully to avoid stress
- **Soldering**: Use appropriate soldering temperature
- **Mounting**: Avoid mechanical stress during mounting

## Troubleshooting

### Common Issues
- **Open Circuit**: Check for broken leads or body cracks
- **High Resistance**: Look for corrosion or contamination
- **Low Resistance**: Check for moisture or contamination
- **Intermittent**: Check for loose connections or cracks

### Failure Modes
- **Thermal Damage**: Overheating causes permanent damage
- **Voltage Breakdown**: Excessive voltage causes failure
- **Mechanical Damage**: Physical stress can break resistor
- **Environmental**: Moisture and contamination cause drift

### Testing Methods
- **In-Circuit**: Test with power off and components isolated
- **Out-of-Circuit**: Remove for accurate measurement
- **Substitution**: Replace with known good resistor
- **Thermal**: Check for temperature-related issues

## Package Contents

- Multiple axial through-hole resistors in various values
- Values range from 4.7Ω to 4.7MΩ
- All resistors have 5% tolerance (gold band)
- Organized by value ranges across multiple bins

## Important Notes

- **Generic Components**: Various manufacturers, specifications may vary slightly
- **5% Tolerance**: All resistors in this collection have 5% tolerance
- **Power Rating**: Typically 1/4 watt, verify for specific applications
- **Color Code**: Use color code for quick value identification
- **Temperature**: Consider temperature effects for precision applications

## Advantages

- **Standard Values**: Common E12 series values
- **Reliable**: Proven technology with good stability
- **Cost Effective**: Low cost for general applications
- **Available**: Widely available and standardized
- **Versatile**: Suitable for most electronic applications

## Limitations

- **Tolerance**: 5% tolerance may not be suitable for precision circuits
- **Power**: Limited to 1/4 watt power dissipation
- **Frequency**: Performance degrades at high frequencies
- **Size**: Larger than surface mount alternatives
- **Temperature**: Limited temperature coefficient performance

## Recommended Applications

- **General Electronics**: Suitable for most electronic circuits
- **Prototyping**: Excellent for breadboard and prototype circuits
- **Education**: Good for learning and experimentation
- **Repair**: Common values for equipment repair
- **Hobby Projects**: Perfect for maker and hobby applications
