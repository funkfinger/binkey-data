---
type: part
title: Rotary Encoders & Input Devices
description: Collection of rotary encoders and input devices for user interface applications including mechanical encoders with built-in switches for menu navigation and control systems
manufacturer: Various
part_number: ROTARY-ENCODERS-MIXED
category: sensors-transducers
subcategory: encoders
tags: [rotary-encoder, mechanical-encoder, quadrature, incremental, pec11l, bourns, user-interface, navigation, control, switch, detent]
total_quantity: 5
location: [cabinet-2-bin-32]
price: 2.50
currency: USD
date_added: 2025-01-09
status: active
---

# Rotary Encoders & Input Devices

## Overview

This collection contains rotary encoders and input devices designed for user interface applications. These components provide precise rotational position feedback and user input capabilities for control systems, menu navigation, and parameter adjustment in electronic devices.

## Available Components and Locations

### Bin 32 - Rotary Encoders (Cabinet 2)

| Part Number | Type | PPR | Output | Switch | Detent | Shaft | Quantity | Applications |
|-------------|------|-----|--------|--------|--------|-------|----------|--------------|
| PEC11L-4120F-S0020 | Mechanical | 20 | Quadrature | Yes | Yes | 6mm Flatted | 5 | UI Controls |

## Technical Specifications

### PEC11L-4120F-S0020 Rotary Encoder

#### Electrical Characteristics
- **Encoder Type**: Mechanical (Contact-based)
- **Output Type**: Quadrature (Incremental)
- **Pulses per Revolution (PPR)**: 20
- **Resolution**: 18° per detent position
- **Output Voltage**: Depends on supply voltage
- **Contact Rating**: 10mA @ 5VDC maximum
- **Contact Resistance**: 50Ω maximum
- **Insulation Resistance**: 100MΩ minimum @ 500VDC

#### Mechanical Characteristics
- **Actuator Type**: 6mm Diameter Flatted End Shaft
- **Shaft Length**: 20mm (standard)
- **Shaft Material**: Stainless steel
- **Detent**: Yes (tactile feedback)
- **Detent Torque**: 1.5mN⋅m typical
- **Rotational Life**: 100,000 cycles minimum
- **Operating Torque**: 1.0mN⋅m maximum
- **End Play**: 0.5mm maximum

#### Built-in Switch Specifications
- **Switch Type**: Momentary push switch
- **Switch Rating**: 10mA @ 5VDC maximum
- **Switch Life**: 100,000 operations minimum
- **Operating Force**: 2.5N typical
- **Switch Travel**: 0.3mm typical
- **Contact Bounce**: <5ms typical

#### Environmental Specifications
- **Operating Temperature**: -40°C to +85°C
- **Storage Temperature**: -40°C to +85°C
- **Humidity**: 85% RH maximum (non-condensing)
- **Vibration**: 10G, 10-55Hz
- **Shock**: 50G, 11ms duration
- **IP Rating**: IP40 (standard)

#### Package and Mounting
- **Mounting Type**: Panel mount, PCB through-hole
- **Orientation**: Vertical (shaft perpendicular to PCB)
- **Termination**: PC pins (through-hole)
- **Panel Cutout**: 7mm diameter
- **Thread**: M7 x 0.75 mounting thread
- **Nut**: Hex nut included for panel mounting

#### Pin Configuration
- **Pin A**: Encoder output A
- **Pin B**: Encoder output B  
- **Pin C**: Common (encoder)
- **Pin D**: Switch contact 1
- **Pin E**: Switch contact 2

## Operating Principles

### Quadrature Encoding
The PEC11L series uses mechanical contacts to generate quadrature output signals:

#### Phase Relationship
- **Channel A and B**: 90° phase relationship
- **Clockwise Rotation**: A leads B
- **Counter-clockwise**: B leads A
- **Resolution**: 20 pulses per revolution
- **Detent Positions**: 20 positions per revolution

#### Signal Generation
- **Contact Closure**: Generates logic low
- **Contact Open**: Generates logic high (with pull-up)
- **Bounce**: Mechanical contact bounce present
- **Debouncing**: Software or hardware debouncing required

### Switch Operation
- **Activation**: Push shaft inward
- **Type**: Momentary contact (normally open)
- **Independent**: Switch operates independently of encoder
- **Tactile**: Provides tactile feedback when pressed
- **Applications**: Menu selection, parameter confirmation

## Circuit Design Guidelines

### Basic Interface Circuit
```
VCC ----+----+---- Pull-up resistors (10kΩ typical)
        |    |
        R    R
        |    |
        A    B ---- To microcontroller inputs
        |    |
    [Encoder] |
        |    |
        C----+---- Common (Ground)
```

### Pull-up Resistors
- **Value**: 10kΩ typical (1kΩ to 47kΩ range)
- **Purpose**: Ensure clean logic levels
- **Power**: Consider power consumption with low values
- **Speed**: Lower values for faster switching
- **Noise**: Higher values for better noise immunity

### Debouncing Considerations
- **Hardware**: RC filter or Schmitt trigger
- **Software**: Debouncing algorithm in firmware
- **Time Constant**: 1-10ms typical debounce time
- **Hysteresis**: Use Schmitt trigger inputs if available
- **Interrupt**: Consider interrupt-driven decoding

### Switch Interface
```
VCC ---- Pull-up resistor (10kΩ)
         |
         +---- To microcontroller input
         |
    [Switch] ---- To ground when pressed
         |
        GND
```

## Software Implementation

### Quadrature Decoding
```c
// Basic quadrature decoding algorithm
int8_t decode_encoder(uint8_t current_state, uint8_t previous_state) {
    int8_t direction = 0;
    uint8_t transition = (previous_state << 2) | current_state;
    
    switch(transition) {
        case 0b0001: case 0b0111: case 0b1000: case 0b1110:
            direction = 1;  // Clockwise
            break;
        case 0b0010: case 0b0100: case 0b1011: case 0b1101:
            direction = -1; // Counter-clockwise
            break;
        default:
            direction = 0;  // No change or invalid
            break;
    }
    return direction;
}
```

### Interrupt-Based Reading
- **Edge Triggered**: Trigger on both edges of A and B
- **State Machine**: Implement state machine for decoding
- **Debouncing**: Include debouncing in interrupt handler
- **Efficiency**: Minimize processing in interrupt
- **Buffering**: Use circular buffer for position storage

### Position Tracking
- **Absolute Position**: Track cumulative position
- **Relative Movement**: Track incremental changes
- **Limits**: Implement software limits if needed
- **Wraparound**: Handle position wraparound
- **Scaling**: Scale to application units

## Applications

### User Interface Controls
- **Volume Control**: Audio equipment volume adjustment
- **Menu Navigation**: Navigate through menu systems
- **Parameter Adjustment**: Adjust settings and parameters
- **Tuning**: Radio frequency tuning
- **Brightness Control**: Display brightness adjustment

### Industrial Applications
- **Machine Control**: Manual machine positioning
- **Process Control**: Set point adjustment
- **Instrumentation**: Measurement parameter selection
- **Robotics**: Manual robot positioning
- **Test Equipment**: Parameter adjustment in test gear

### Consumer Electronics
- **Audio Equipment**: Volume, tone, balance controls
- **Kitchen Appliances**: Timer and temperature settings
- **Gaming**: Game controller input
- **Automotive**: Climate control, radio tuning
- **Home Automation**: Thermostat and lighting controls

### Educational Projects
- **Learning**: Understanding encoder principles
- **Prototyping**: User interface development
- **Arduino Projects**: Microcontroller interfacing
- **Robotics**: Robot control interfaces
- **Instrumentation**: DIY measurement equipment

## Installation Guidelines

### Panel Mounting
1. **Drill Hole**: 7mm diameter hole in panel
2. **Insert Encoder**: Insert from front of panel
3. **Secure**: Tighten hex nut from back
4. **Alignment**: Ensure proper shaft alignment
5. **Clearance**: Provide clearance for rotation

### PCB Mounting
1. **Footprint**: Use recommended PCB footprint
2. **Hole Size**: 1.0mm holes for pins
3. **Spacing**: Verify pin spacing matches PCB
4. **Height**: Consider component height clearance
5. **Mechanical**: Ensure mechanical stability

### Wiring Guidelines
- **Short Leads**: Keep encoder leads as short as possible
- **Shielding**: Use shielded cable in noisy environments
- **Grounding**: Provide good ground connection
- **Routing**: Route away from high-current switching
- **Connectors**: Use reliable connectors for removable connections

## Testing and Verification

### Functional Testing
- **Rotation**: Verify smooth rotation without binding
- **Detents**: Check for proper detent feel and positioning
- **Switch**: Test switch operation and tactile feedback
- **Electrical**: Verify electrical continuity and operation
- **Mounting**: Check mechanical mounting integrity

### Signal Quality Testing
- **Waveforms**: Observe A and B channel waveforms
- **Phase Relationship**: Verify 90° phase relationship
- **Bounce**: Measure contact bounce duration
- **Levels**: Verify logic level compatibility
- **Noise**: Check for electrical noise pickup

### Reliability Testing
- **Life Test**: Perform rotational life testing
- **Environmental**: Test under temperature extremes
- **Vibration**: Test mechanical vibration resistance
- **Humidity**: Test humidity resistance
- **Contamination**: Test resistance to dust and debris

## Troubleshooting

### Common Issues
- **Erratic Counting**: Check for contact bounce or noise
- **Wrong Direction**: Verify A and B channel connections
- **Missed Counts**: Check pull-up resistors and debouncing
- **No Output**: Verify power and ground connections
- **Mechanical Issues**: Check for binding or wear

### Signal Problems
- **Bounce**: Add hardware or software debouncing
- **Noise**: Improve grounding and shielding
- **Slow Response**: Check pull-up resistor values
- **False Triggers**: Add hysteresis or filtering
- **Intermittent**: Check connection integrity

### Mechanical Problems
- **Binding**: Check shaft alignment and clearances
- **Loose Feel**: Check mounting nut tightness
- **Wear**: Replace if excessive wear detected
- **Contamination**: Clean contacts if necessary
- **Damage**: Replace if mechanically damaged

## Maintenance

### Cleaning
- **Contacts**: Clean with contact cleaner if needed
- **Shaft**: Keep shaft clean and lubricated
- **Housing**: Clean exterior housing regularly
- **Environment**: Protect from contamination
- **Inspection**: Regular visual inspection

### Lubrication
- **Shaft Bearings**: Light lubrication if specified
- **Contacts**: Do not lubricate electrical contacts
- **Frequency**: Follow manufacturer recommendations
- **Type**: Use only specified lubricants
- **Amount**: Use minimal amounts

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Low humidity environment
- **Protection**: Protect from physical damage
- **Orientation**: Store in normal orientation
- **Packaging**: Keep in original packaging if possible

### Handling Guidelines
- **Shaft Care**: Avoid excessive force on shaft
- **ESD**: Use ESD precautions if sensitive
- **Mounting**: Handle mounting threads carefully
- **Leads**: Avoid stress on electrical leads
- **Inspection**: Inspect before installation

## Package Contents

- PEC11L-4120F-S0020 rotary encoders (5 pieces)
- Mechanical quadrature output
- Built-in momentary switch
- 6mm flatted shaft
- Panel mounting hardware

## Important Notes

- **Debouncing Required**: Mechanical contacts require debouncing
- **Pull-up Resistors**: External pull-up resistors required
- **Mounting**: Proper panel mounting essential for reliability
- **Environment**: Consider environmental protection needs
- **Software**: Proper software decoding algorithm required

## Advantages

- **Tactile Feedback**: Detents provide user feedback
- **Integrated Switch**: Built-in switch for selection
- **Standard Package**: Industry-standard mounting
- **Reliable**: Mechanical contacts for reliability
- **Cost Effective**: Lower cost than optical encoders

## Limitations

- **Contact Bounce**: Requires debouncing circuitry
- **Wear**: Mechanical contacts subject to wear
- **Resolution**: Limited resolution (20 PPR)
- **Speed**: Limited to moderate rotation speeds
- **Environment**: Sensitive to contamination

## Recommended Applications

- **User Interfaces**: Menu navigation and control
- **Audio Equipment**: Volume and tone controls
- **Instrumentation**: Parameter adjustment
- **Educational**: Learning encoder principles
- **Prototyping**: User interface development
