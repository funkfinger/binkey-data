---
type: part
title: SMT LEDs
description: Collection of surface mount technology (SMT) LEDs for compact lighting, status indication, and display applications in high-density PCB designs
manufacturer: Various
part_number: SMT-LEDS-MIXED
category: optoelectronics
subcategory: smt-leds
tags: [smt-leds, surface-mount, status-indicators, compact-lighting, 0603, 0805, 1206, rgb-leds, white-leds, colored-leds]
total_quantity: Various
location: [cabinet-2-bin-44]
price: 12.00
currency: USD
date_added: 2025-01-09
status: active
---

# SMT LEDs

## Overview

This collection contains surface mount technology (SMT) LEDs for compact lighting, status indication, and display applications in high-density PCB designs. These LEDs enable space-efficient lighting solutions with excellent optical performance and are essential for modern electronic devices requiring integrated illumination.

## Available Components and Locations

### Bin 44 - SMT LEDs (Cabinet 2)

| Type | Package Size | Color | Brightness | Voltage | Current | Quantity | Applications |
|------|--------------|-------|------------|---------|---------|----------|--------------|
| SMT LEDs | 0603/0805/1206 | Mixed | Various | 1.8V-3.6V | 2-20mA | Various | Status/lighting |

## Technical Specifications

### Package Sizes and Dimensions

#### Standard SMT LED Packages
- **0603 (1608 metric)**: 1.6mm × 0.8mm × 0.8mm height
- **0805 (2012 metric)**: 2.0mm × 1.25mm × 1.1mm height
- **1206 (3216 metric)**: 3.2mm × 1.6mm × 1.1mm height
- **2835**: 2.8mm × 3.5mm × 0.8mm height (high power)
- **3528**: 3.5mm × 2.8mm × 1.9mm height (medium power)
- **5050**: 5.0mm × 5.0mm × 1.6mm height (RGB/high power)

#### Optical Characteristics
- **Viewing Angle**: 120° to 160° typical
- **Luminous Intensity**: 10mcd to 1000mcd+
- **Luminous Efficacy**: 80-200 lm/W (white LEDs)
- **Color Temperature**: 2700K-6500K (white LEDs)
- **CRI (Color Rendering Index)**: 70-95 (white LEDs)
- **Wavelength**: 380nm-780nm (colored LEDs)

### Electrical Characteristics

#### Forward Voltage (Vf)
- **Red**: 1.8V - 2.2V typical
- **Orange/Yellow**: 2.0V - 2.4V typical
- **Green**: 2.8V - 3.4V typical
- **Blue**: 3.0V - 3.6V typical
- **White**: 3.0V - 3.6V typical
- **UV**: 3.2V - 4.0V typical

#### Forward Current (If)
- **0603 Package**: 2-5mA typical, 20mA maximum
- **0805 Package**: 5-10mA typical, 25mA maximum
- **1206 Package**: 10-20mA typical, 30mA maximum
- **High Power**: 50mA to 1A+ for specialized packages
- **Pulse Current**: 2-5× continuous rating for short pulses

#### Thermal Characteristics
- **Junction Temperature**: 125°C maximum typical
- **Thermal Resistance**: 200-500°C/W depending on package
- **Operating Temperature**: -40°C to +85°C
- **Storage Temperature**: -40°C to +100°C
- **Thermal Derating**: Above 25°C ambient

### Color Options and Specifications

#### Standard Colors
- **Red**: 620-630nm, high efficiency, low voltage
- **Orange**: 590-600nm, good visibility
- **Yellow**: 580-590nm, high visibility
- **Green**: 520-530nm, high efficiency
- **Blue**: 460-470nm, high brightness
- **White**: Phosphor-converted blue, various CCT

#### Specialized Colors
- **Infrared**: 850nm, 940nm for remote control
- **UV**: 365nm, 385nm, 405nm for curing/detection
- **Pink**: 625nm + phosphor
- **Purple**: 400-420nm
- **Cyan**: 490-510nm
- **Lime**: 560-570nm

#### RGB LEDs
- **Package**: Typically 5050 or larger
- **Colors**: Red, Green, Blue in single package
- **Control**: Individual control of each color
- **Applications**: Color mixing, displays, mood lighting
- **Complexity**: Requires 3-channel driver

## Applications

### Status Indication
- **Power Indicators**: System power and status
- **Activity Indicators**: Data transmission, processing
- **Error Indicators**: Fault and alarm conditions
- **Mode Indicators**: Operating mode display
- **Battery Status**: Charge level indication

### Compact Lighting
- **Backlighting**: LCD/OLED display backlighting
- **Accent Lighting**: Decorative and accent lighting
- **Task Lighting**: Focused work area lighting
- **Emergency Lighting**: Backup and emergency illumination
- **Automotive**: Interior and exterior automotive lighting

### Display Applications
- **Dot Matrix**: LED matrix displays
- **Seven Segment**: Numeric displays
- **Bar Graphs**: Level and progress indicators
- **Pixel Displays**: High-resolution LED displays
- **Signage**: Digital signage and billboards

### Communication and Sensing
- **Optical Communication**: IR data transmission
- **Proximity Sensing**: IR proximity detection
- **UV Applications**: Curing, sterilization, detection
- **Machine Vision**: Illumination for cameras
- **Spectroscopy**: Specific wavelength sources

## Design Guidelines

### Current Limiting
- **Resistor Calculation**: R = (Vsupply - Vf) / If
- **Constant Current**: Use constant current drivers for precision
- **Temperature Compensation**: Account for Vf temperature coefficient
- **Efficiency**: Minimize power loss in current limiting
- **Multiple LEDs**: Series vs. parallel configurations

### Thermal Management
- **Heat Dissipation**: Provide adequate heat sinking
- **Thermal Vias**: Use thermal vias under LED packages
- **Copper Area**: Maximize copper area for heat spreading
- **Airflow**: Ensure adequate airflow for cooling
- **Derating**: Derate current at high ambient temperatures

### Optical Design
- **Viewing Angle**: Select appropriate viewing angle
- **Optical Coupling**: Optimize light coupling efficiency
- **Reflectors**: Use reflectors to direct light
- **Diffusers**: Use diffusers for uniform illumination
- **Color Mixing**: Design for proper color mixing (RGB)

### PCB Layout
- **Pad Design**: Use recommended pad layouts
- **Polarity**: Clearly mark LED polarity
- **Placement**: Optimize placement for optical performance
- **Routing**: Minimize trace resistance and inductance
- **Test Points**: Provide test points for debugging

## Assembly Guidelines

### Reflow Soldering
- **Temperature Profile**: Use LED-compatible reflow profile
- **Peak Temperature**: Typically 245-260°C maximum
- **Time Above Liquidus**: Minimize time at high temperature
- **Cooling Rate**: Control cooling rate to prevent stress
- **Multiple Passes**: Avoid multiple reflow cycles

### Solder Paste
- **Paste Type**: Use appropriate solder paste
- **Stencil Design**: Optimize stencil apertures
- **Paste Volume**: Control solder paste volume
- **Flux Activity**: Use appropriate flux activity level
- **Storage**: Proper solder paste storage

### Component Handling
- **ESD Protection**: LEDs can be ESD sensitive
- **Moisture Sensitivity**: Some packages are moisture sensitive
- **Orientation**: Ensure correct polarity orientation
- **Placement Pressure**: Use appropriate placement pressure
- **Vision Systems**: Use vision systems for accurate placement

## Testing and Quality Control

### Optical Testing
- **Luminous Intensity**: Measure light output
- **Color Coordinates**: Verify color accuracy
- **Viewing Angle**: Test light distribution
- **Color Temperature**: Measure CCT for white LEDs
- **CRI Testing**: Color rendering index measurement

### Electrical Testing
- **Forward Voltage**: Measure Vf at rated current
- **Reverse Current**: Test reverse leakage
- **Thermal Testing**: Test at elevated temperatures
- **Life Testing**: Long-term reliability testing
- **Burn-in**: Stress testing for early failures

### Reliability Testing
- **Temperature Cycling**: Thermal stress testing
- **Humidity Testing**: Moisture resistance
- **Vibration Testing**: Mechanical stress
- **Shock Testing**: Impact resistance
- **UV Exposure**: UV degradation testing

## Driver Circuits

### Simple Current Limiting
- **Resistor**: Simple resistor current limiting
- **Advantages**: Low cost, simple design
- **Disadvantages**: Poor efficiency, temperature sensitivity
- **Applications**: Low-power status indicators
- **Calculation**: R = (Vsupply - Vf) / If

### Constant Current Drivers
- **Linear Regulators**: Simple constant current
- **Switching Regulators**: High efficiency
- **Integrated Drivers**: Purpose-built LED drivers
- **PWM Control**: Brightness control via PWM
- **Thermal Protection**: Built-in thermal limiting

### Advanced Control
- **Color Control**: RGB color mixing
- **Dimming**: Analog and PWM dimming
- **Communication**: I2C, SPI control interfaces
- **Sensing**: Current and temperature sensing
- **Protection**: Overcurrent and thermal protection

## Troubleshooting

### Common Issues
- **No Light Output**: Check polarity, current, voltage
- **Dim Output**: Verify current level, thermal issues
- **Color Shift**: Temperature effects, aging
- **Flickering**: Power supply issues, driver problems
- **Premature Failure**: Overcurrent, overtemperature

### Failure Analysis
- **Visual Inspection**: Look for physical damage
- **Electrical Testing**: Measure Vf and If
- **Thermal Imaging**: Check for hot spots
- **Optical Testing**: Measure light output
- **Microscopy**: Detailed failure analysis

### Prevention
- **Proper Design**: Follow design guidelines
- **Quality Components**: Use quality LEDs and drivers
- **Thermal Management**: Adequate heat dissipation
- **Protection**: Overcurrent and ESD protection
- **Testing**: Thorough testing and qualification

## Storage and Handling

### Storage Conditions
- **Temperature**: Room temperature storage
- **Humidity**: Low humidity environment
- **Light**: Protect from UV exposure
- **Packaging**: Keep in original packaging
- **Inventory**: First-in, first-out rotation

### Handling Guidelines
- **ESD Protection**: Use ESD precautions
- **Moisture Control**: Control moisture exposure
- **Contamination**: Avoid contamination
- **Physical Damage**: Handle carefully
- **Documentation**: Maintain handling procedures

## Package Contents

- Various SMT LEDs (mixed colors and packages)
- Multiple package sizes (0603, 0805, 1206 typical)
- Mixed colors (red, green, blue, white, etc.)
- Various brightness levels and specifications
- Suitable for status indication and compact lighting

## Important Notes

- **Polarity**: LEDs are polarized - observe correct orientation
- **Current Limiting**: Always use appropriate current limiting
- **Thermal Management**: Provide adequate heat dissipation
- **ESD Sensitive**: Handle with ESD precautions
- **Reflow Compatible**: Designed for reflow soldering

## Advantages

- **Compact Size**: Very small footprint
- **High Efficiency**: Excellent luminous efficacy
- **Long Life**: 50,000+ hour lifetime
- **Fast Response**: Instant on/off capability
- **Low Voltage**: Compatible with logic voltages
- **Automation**: Compatible with automated assembly

## Limitations

- **Heat Sensitive**: Sensitive to excessive heat
- **Current Dependent**: Brightness depends on current
- **Color Shift**: Color can shift with temperature/age
- **Directional**: Light output is directional
- **Driver Required**: Requires current limiting/control
- **Cost**: Higher initial cost than incandescent

## Recommended Applications

- **Status Indicators**: Equipment status and alerts
- **Backlighting**: Display and keypad backlighting
- **Decorative Lighting**: Accent and mood lighting
- **Automotive**: Dashboard and exterior lighting
- **Consumer Electronics**: Power and activity indicators
- **Industrial**: Machine status and process indicators
