---
type: part
title: Crystals, Oscillators & Timing Components
description: Collection of timing components including crystals, oscillators, and resonators for clock generation and frequency reference applications in digital and analog circuits
manufacturer: Various
part_number: TIMING-COMPONENTS-MIXED
category: timing-components
subcategory: crystals-oscillators
tags: [crystals, oscillators, timing, frequency-reference, clock-generation, 32khz, 8mhz, 16mhz, 20mhz, rtc, microcontroller]
total_quantity: 50+
location: [cabinet-2-bin-25]
price: 0.75
currency: USD
date_added: 2025-01-09
status: active
---

# Crystals, Oscillators & Timing Components

## Overview

This collection contains various timing components essential for providing accurate clock signals and frequency references in electronic circuits. These components are fundamental for microcontroller operation, real-time clocks, communication systems, and any application requiring precise timing.

## Available Components and Locations

### Bin 25 - Timing Components (Cabinet 2)

| Component | Part Number | Frequency | Package | Quantity | Applications |
|-----------|-------------|-----------|---------|----------|--------------|
| Watch Crystal | AB38T-32.768KHZ | 32.768kHz | Cylindrical Can | 8 | RTC, timekeeping |
| MHz Crystal | MP080A | 8MHz | HC-49/U | 3 | Microcontrollers |
| Voltage Regulator | L78L05ABZ-TR | N/A | TO-92 | 25 | Power supply |
| SMD Crystal | ECS-200-20-3X-TR | 20MHz | HC-49/US | 10 | High-speed digital |
| Through-Hole Crystals | Generic | 16MHz | HC-49 | 10 | Arduino, MCU |

## Technical Specifications

### AB38T-32.768KHZ Watch Crystal

#### Electrical Characteristics
- **Frequency**: 32.768kHz (2^15 Hz)
- **Frequency Tolerance**: ±20ppm
- **Load Capacitance**: 12.5pF
- **ESR**: 30kΩ maximum
- **Operating Mode**: Fundamental
- **Operating Temperature**: -10°C to +60°C

#### Physical Specifications
- **Package**: Cylindrical Can, Radial
- **Dimensions**: 3.20mm diameter × 8.30mm length
- **Height Seated**: 8.30mm maximum
- **Mounting**: Through-hole radial leads
- **Lead Spacing**: Standard 2.54mm (0.1")

#### Key Features
- **Ultra-Low Frequency**: Perfect for timekeeping applications
- **Low Power**: Minimal current consumption
- **High Accuracy**: ±20ppm tolerance for precise timing
- **Standard Package**: Industry-standard cylindrical can
- **Long Life**: Excellent long-term stability

#### Applications
- **Real-Time Clocks**: RTC modules and timekeeping circuits
- **Microcontroller Timing**: 32kHz oscillator for low-power MCUs
- **Watch Circuits**: Digital watch and clock applications
- **Timer Circuits**: Precision timing and countdown applications
- **Sleep Mode Timing**: Wake-up timing for low-power systems

### MP080A 8MHz Crystal

#### Electrical Characteristics
- **Frequency**: 8MHz
- **Frequency Tolerance**: ±30ppm
- **Frequency Stability**: ±50ppm
- **Load Capacitance**: 20pF
- **ESR**: 35Ω maximum
- **Operating Mode**: Fundamental
- **Operating Temperature**: -20°C to +70°C

#### Physical Specifications
- **Package**: HC-49/U
- **Dimensions**: 10.85mm × 3.80mm
- **Height Seated**: 13.46mm maximum
- **Mounting**: Through-hole
- **Lead Spacing**: Standard 0.2" (5.08mm)

#### Key Features
- **Medium Frequency**: Suitable for many microcontroller applications
- **Low ESR**: Good for oscillator circuits
- **Standard Package**: Industry-standard HC-49/U
- **Wide Temperature Range**: -20°C to +70°C operation
- **Fundamental Mode**: Clean sine wave output

#### Applications
- **Microcontrollers**: Clock source for 8-bit and 16-bit MCUs
- **Digital Circuits**: System clock for digital logic
- **Communication**: UART, SPI timing reference
- **Timer Circuits**: Precision timing applications
- **Frequency Synthesis**: Base frequency for PLLs

### ECS-200-20-3X-TR 20MHz SMD Crystal

#### Electrical Characteristics
- **Frequency**: 20MHz
- **Frequency Tolerance**: ±30ppm
- **Frequency Stability**: ±50ppm
- **Load Capacitance**: 20pF
- **ESR**: 50Ω maximum
- **Operating Mode**: Fundamental
- **Operating Temperature**: -10°C to +70°C

#### Physical Specifications
- **Package**: HC-49/US Surface Mount
- **Dimensions**: 7.00mm × 4.10mm
- **Height**: 2.30mm maximum
- **Mounting**: Surface mount
- **Termination**: SMD pads

#### Key Features
- **High Frequency**: Suitable for high-speed digital applications
- **Surface Mount**: Compact SMD package
- **Low Profile**: 2.30mm height for space-constrained designs
- **Good Stability**: ±50ppm frequency stability
- **Industry Standard**: HC-49/US package format

#### Applications
- **High-Speed MCUs**: Clock source for 32-bit microcontrollers
- **Digital Signal Processing**: DSP and FPGA clock generation
- **Communication Systems**: High-speed serial communication
- **USB Applications**: USB clock generation (20MHz base)
- **Video Applications**: Video timing and synchronization

### Generic 16MHz Through-Hole Crystals

#### Electrical Characteristics
- **Frequency**: 16MHz
- **Frequency Tolerance**: ±30ppm (typical)
- **Load Capacitance**: 18-22pF (typical)
- **ESR**: 50Ω maximum (typical)
- **Operating Mode**: Fundamental
- **Operating Temperature**: -20°C to +70°C (typical)

#### Physical Specifications
- **Package**: HC-49 Through-hole
- **Dimensions**: Standard HC-49 footprint
- **Height**: Varies by manufacturer
- **Mounting**: Through-hole
- **Lead Spacing**: 0.2" (5.08mm)

#### Key Features
- **Popular Frequency**: Common microcontroller frequency
- **Arduino Compatible**: Standard frequency for Arduino boards
- **Through-Hole**: Easy prototyping and breadboard use
- **Cost Effective**: Economical for hobby and educational use
- **Wide Availability**: Common frequency with multiple sources

#### Applications
- **Arduino Projects**: Clock source for Arduino Uno and compatible
- **AVR Microcontrollers**: ATmega328P and similar MCUs
- **PIC Microcontrollers**: 16MHz PIC microcontroller applications
- **Prototyping**: Breadboard and development board use
- **Educational**: Learning and training applications

## Crystal Oscillator Design Guidelines

### Load Capacitance Calculation
The load capacitance seen by the crystal should match its specified load capacitance:

**CL = (C1 × C2) / (C1 + C2) + Cstray**

Where:
- CL = Crystal load capacitance
- C1, C2 = External load capacitors
- Cstray = Stray capacitance (typically 2-5pF)

### Typical Load Capacitor Values
- **For 12.5pF crystals**: Use 22pF capacitors
- **For 18pF crystals**: Use 33pF capacitors  
- **For 20pF crystals**: Use 36pF capacitors
- **For 22pF crystals**: Use 39pF capacitors

### PCB Layout Guidelines
- **Keep traces short**: Minimize trace length between crystal and IC
- **Ground plane**: Provide solid ground plane under crystal
- **Avoid routing**: Don't route signals under or near crystal
- **Shielding**: Consider ground guard rings for sensitive applications
- **Component placement**: Keep switching circuits away from crystal

### Drive Level Considerations
- **Maximum drive**: Don't exceed crystal's maximum drive level
- **Minimum drive**: Ensure sufficient drive for reliable oscillation
- **Power consumption**: Higher drive = higher power consumption
- **Aging**: Excessive drive can accelerate crystal aging
- **Startup**: Ensure adequate drive for reliable startup

## Oscillator Circuit Design

### Pierce Oscillator Configuration
Most common configuration for microcontroller crystals:
- Crystal between MCU oscillator pins
- Two load capacitors to ground
- Optional series resistor for drive level control
- Optional parallel resistor for bias (high-frequency crystals)

### Colpitts Oscillator Configuration
Alternative configuration for discrete designs:
- Crystal in feedback path of amplifier
- Capacitive voltage divider for feedback
- Inductor for frequency tuning (if required)
- Buffer amplifier for output isolation

### Clock Distribution
- **Single source**: Use one crystal with clock distribution
- **Buffer amplifiers**: Isolate crystal from loads
- **Clock trees**: Distribute clock to multiple circuits
- **Skew management**: Minimize clock skew in synchronous systems
- **EMI considerations**: Manage electromagnetic interference

## Frequency Selection Guidelines

### Microcontroller Applications
- **8MHz**: Good for low-power applications, simple timing
- **16MHz**: Standard for Arduino, AVR microcontrollers
- **20MHz**: High-performance applications, fast processing
- **32MHz**: High-speed ARM Cortex-M applications

### Communication Applications
- **32.768kHz**: RTC, low-power wake-up timing
- **1.8432MHz**: UART baud rate generation (legacy)
- **3.6864MHz**: UART baud rate generation
- **14.7456MHz**: Multiple UART baud rates

### Special Applications
- **27MHz**: RC hobby applications, wireless
- **25MHz**: Ethernet applications
- **50MHz**: High-speed digital applications
- **100MHz**: Very high-speed applications

## Testing and Verification

### Oscillation Testing
- **Startup time**: Measure time to stable oscillation
- **Frequency accuracy**: Verify frequency within tolerance
- **Amplitude**: Check oscillation amplitude
- **Stability**: Monitor frequency stability over time
- **Temperature**: Test over operating temperature range

### Drive Level Testing
- **Power measurement**: Measure crystal power dissipation
- **Current measurement**: Monitor oscillator current
- **Voltage measurement**: Check oscillation amplitude
- **Distortion**: Verify clean sine wave output
- **Harmonics**: Check for unwanted harmonic content

### EMI Testing
- **Radiated emissions**: Test for electromagnetic radiation
- **Conducted emissions**: Test for conducted interference
- **Susceptibility**: Test immunity to external interference
- **Shielding effectiveness**: Verify shielding performance
- **Grounding**: Check ground integrity

## Troubleshooting

### Common Issues
- **No oscillation**: Check connections, load capacitors, drive level
- **Intermittent oscillation**: Check solder joints, mechanical stress
- **Wrong frequency**: Verify crystal marking, load capacitance
- **Poor stability**: Check temperature, power supply, layout
- **High current**: Check for excessive drive level

### Oscillation Failures
- **Insufficient drive**: Increase drive level or reduce load
- **Excessive load**: Reduce load capacitance or circuit loading
- **Poor layout**: Improve PCB layout and grounding
- **Contamination**: Clean crystal and circuit board
- **Mechanical damage**: Replace damaged crystal

### Frequency Issues
- **Load capacitance**: Adjust load capacitors for correct frequency
- **Temperature drift**: Use temperature-compensated crystal
- **Aging**: Replace old crystals showing frequency drift
- **Power supply**: Stabilize power supply voltage
- **Layout**: Improve circuit layout and shielding

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Low humidity environment preferred
- **Mechanical**: Protect from shock and vibration
- **Contamination**: Keep clean and protected
- **Organization**: Sort by frequency and package type

### Handling Guidelines
- **ESD Protection**: Use ESD precautions during handling
- **Mechanical Care**: Avoid dropping or mechanical shock
- **Lead Forming**: Be careful when forming leads
- **Soldering**: Use appropriate soldering temperature and time
- **Cleaning**: Clean with appropriate solvents if needed

## Package Contents

- Multiple crystal frequencies and package types
- Various load capacitances and specifications
- Both through-hole and surface mount options
- Suitable for wide range of timing applications

## Important Notes

- **Frequency Accuracy**: Verify frequency requirements for application
- **Load Capacitance**: Match crystal load capacitance requirements
- **Drive Level**: Don't exceed maximum drive level specifications
- **Layout Critical**: PCB layout significantly affects performance
- **Temperature Effects**: Consider temperature coefficient for precision applications

## Advantages

- **Precise Timing**: Accurate frequency reference for digital systems
- **Low Power**: Minimal power consumption in oscillator circuits
- **Stable**: Excellent long-term frequency stability
- **Standard Packages**: Industry-standard package formats
- **Wide Range**: Multiple frequencies for various applications

## Limitations

- **Fragile**: Mechanical shock can damage crystal structure
- **Load Sensitive**: Performance depends on proper load capacitance
- **Layout Critical**: Requires careful PCB layout for best performance
- **Temperature Sensitive**: Frequency varies with temperature
- **Single Frequency**: Each crystal provides only one frequency

## Recommended Applications

- **Microcontroller Clocks**: System clock for MCU applications
- **Real-Time Clocks**: Timekeeping and calendar functions
- **Communication Systems**: Timing reference for serial communication
- **Digital Signal Processing**: Clock generation for DSP applications
- **Prototyping**: Development and educational projects
