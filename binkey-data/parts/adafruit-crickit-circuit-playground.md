---
type: part
title: Adafruit CRICKIT for Circuit Playground Express
description: Creative Robotics & Interactive Construction Kit - robotics expansion board for Circuit Playground with motors, servos, and sensors
manufacturer: Adafruit
part_number: 3093
category: accessories
subcategory: robotics-accessories
tags: [crickit, robotics, circuit-playground, motors, servos, seesaw, construction-kit]
quantity: 2
location: [cabinet-1-bin-44]
datasheet_url: https://learn.adafruit.com/adafruit-crickit-creative-robotic-interactive-construction-kit
purchase_url: https://www.adafruit.com/product/3093
price: 29.95
currency: USD
date_added: 2025-01-09
status: active
image: attachments/crickit-circuit-playground.jpg
---

# Adafruit CRICKIT for Circuit Playground Express

![Adafruit CRICKIT for Circuit Playground](attachments/crickit-circuit-playground.jpg)

## Overview

Sometimes we wonder if robotics engineers ever watch movies. If they did, they'd know that making robots into servants always ends up in a robot rebellion. Why even go down that path? Here at Adafruit, we believe in making robots our **friends!**

**Crickit** - That's our **C**reative **R**obotics & **I**nteractive **C**onstruction **Kit**. It's an add-on to our popular Circuit Playground Express that lets you **#MakeRobotFriend** using CircuitPython, MakeCode, or Arduino.

## Specifications

- **Dimensions**: 85.0mm x 81.0mm x 14.7mm / 3.3" x 3.2" x 0.6"
- **Weight**: 30.7g / 1.1oz
- **Power Input**: 5V DC via barrel jack or USB
- **Communication**: I2C via seesaw protocol
- **Operating Voltage**: 5V for all outputs

## Key Features

### Motor Control
- **2x Brushed DC Motors**: 1 Amp current limited each, 8-bit PWM speed control
- **Stepper Motor Support**: Can drive one bipolar stepper motor
- **Bi-directional Control**: Forward and reverse operation
- **Current Limiting**: Automatic current protection
- **Kick-back Protection**: Diode protection for inductive loads

### Servo Control
- **4x Servo Outputs**: Precision 16-bit timers for accurate control
- **Standard Servos**: Compatible with standard hobby servos
- **Micro Servos**: Works with micro and mini servos
- **Continuous Rotation**: Supports continuous rotation servos
- **High Resolution**: 16-bit resolution for smooth movement

### High-Current Outputs
- **4x Darlington Drivers**: 500mA drive capability each
- **Kick-back Protection**: Built-in protection diodes
- **Solenoid Control**: Drive solenoids and relays
- **LED Drivers**: High-current LED control
- **Stepper Support**: Can drive one unipolar stepper motor

### Sensors and I/O
- **4x Capacitive Touch**: Touch-sensitive inputs with alligator pads
- **8x Signal Pins**: Digital I/O or analog inputs
- **1x NeoPixel Driver**: 5V level shifter for LED strips
- **1x Audio Amplifier**: Class D, 3W max, 4-8 ohm speakers

## Seesaw Architecture

### I2C Communication
- **Seesaw Protocol**: Adafruit's I2C-to-everything bridge firmware
- **Two Pin Control**: Only uses SDA and SCL from Circuit Playground
- **Offloaded Processing**: All timers and PWM handled by co-processor
- **Reliable Communication**: Robust I2C protocol implementation

### Co-processor Benefits
- **Timer Offloading**: Frees up Circuit Playground timers
- **Precise Timing**: Hardware timers for accurate servo control
- **Simultaneous Control**: Multiple outputs controlled simultaneously
- **Real-time Operation**: No timing conflicts with main processor

## Circuit Playground Integration

### Mechanical Connection
- **Bolt-On Design**: Secure mechanical attachment
- **Standoff Mounting**: Proper spacing and alignment
- **Stable Platform**: Rigid connection for reliable operation
- **Easy Assembly**: No soldering required

### Electrical Interface
- **I2C Only**: Minimal pin usage on Circuit Playground
- **Power Sharing**: Can power Circuit Playground via USB
- **Signal Access**: All Circuit Playground features still available
- **Expansion**: Adds capabilities without losing existing features

### Compatible Boards
- **Circuit Playground Express**: Primary target platform
- **Circuit Playground Bluefruit**: Full compatibility
- **Circuit Playground Classic**: Limited compatibility

## Power Management

### Power Input Options
- **5V Barrel Jack**: Primary power input for high-current applications
- **USB Power**: Can power light loads via USB
- **Auto-Switching**: Automatic power source selection
- **Power Sharing**: Can power Circuit Playground from CRICKIT

### Power Protection
- **eFuse Management**: TPS2595 eFuse chip for protection
- **Voltage Protection**: Auto-shutoff if voltage outside 3V-5.5V range
- **Over-current Protection**: 4A current limiting
- **Reverse Protection**: Protection against reverse polarity

### Power Requirements
- **Light Loads**: USB power sufficient for servos and sensors
- **Heavy Loads**: 5V 2A supply recommended for motors
- **Multiple Motors**: 5V 4A supply for multiple large motors/servos
- **Current Budget**: Plan total current consumption carefully

## Programming Support

### CircuitPython
- **Primary Platform**: Optimized for CircuitPython development
- **Adafruit Libraries**: Comprehensive library support
- **Interactive Development**: REPL for live coding and testing
- **File System**: Store code and data on Circuit Playground
- **Rapid Prototyping**: Quick iteration and testing

### Arduino IDE
- **Full Support**: Complete Arduino IDE compatibility
- **Adafruit Libraries**: Arduino libraries for all functions
- **C/C++ Programming**: Traditional embedded programming
- **Advanced Control**: Low-level hardware access
- **Community**: Large Arduino community support

### MakeCode
- **Block Programming**: Visual programming interface
- **Educational**: Perfect for learning robotics concepts
- **Drag-and-Drop**: Easy programming for beginners
- **JavaScript**: Text-based programming option available

## Applications

### Educational Robotics
- **STEM Learning**: Science, technology, engineering, math education
- **Robotics Basics**: Learn fundamental robotics concepts
- **Programming Education**: Learn coding through robotics
- **Classroom Projects**: Group and individual learning activities

### Maker Projects
- **Robot Friends**: Create interactive robot companions
- **Home Automation**: Automated systems and controls
- **Art Installations**: Interactive art and kinetic sculptures
- **Prototype Development**: Rapid robotics prototyping

### Professional Use
- **Product Development**: Proof-of-concept robotics systems
- **Educational Tools**: Teaching aids and demonstrations
- **Research Projects**: Academic and industrial research
- **Testing Platforms**: Hardware and software testing

## Hardware Specifications

### Motor Drivers
- **Type**: Dual H-bridge motor drivers
- **Current**: 1A continuous per motor
- **Voltage**: 5V operation
- **Control**: 8-bit PWM speed control
- **Protection**: Current limiting and kick-back protection

### Servo Control
- **Channels**: 4 independent servo outputs
- **Resolution**: 16-bit timer resolution
- **Frequency**: Standard 50Hz servo frequency
- **Pulse Width**: 1-2ms pulse width range
- **Current**: Adequate current for standard servos

### Darlington Drivers
- **Channels**: 4 high-current outputs
- **Current**: 500mA per channel
- **Voltage**: 5V switching
- **Protection**: Kick-back diode protection
- **Applications**: Solenoids, relays, high-current LEDs

## Getting Started

### Required Components
- **Circuit Playground Express**: Main controller board
- **5V Power Supply**: 2A minimum, 4A for heavy loads
- **CRICKIT Board**: This robotics expansion board
- **Motors/Servos**: Robotics components to control

### Basic Setup
1. **Attach Circuit Playground**: Bolt onto CRICKIT using standoffs
2. **Connect Power**: Use appropriate 5V power supply
3. **Install Software**: Set up CircuitPython or Arduino IDE
4. **Load Examples**: Start with basic motor/servo examples
5. **Build Projects**: Create custom robotics applications

### Programming Workflow
1. **Plan Project**: Design robot behavior and requirements
2. **Wire Components**: Connect motors, servos, sensors
3. **Write Code**: Program robot behavior
4. **Test Incrementally**: Test each component separately
5. **Integrate**: Combine all components into final project

## Safety Considerations

### Electrical Safety
- **Proper Power**: Use appropriate power supply ratings
- **Current Limits**: Respect current limitations of outputs
- **Heat Management**: Monitor for overheating components
- **Short Protection**: Avoid short circuits

### Mechanical Safety
- **Secure Mounting**: Ensure all components properly mounted
- **Moving Parts**: Be careful with motors and servos
- **Sharp Edges**: Watch for sharp edges on mechanical components
- **Supervision**: Adult supervision for young users

## Troubleshooting

### Communication Issues
- **I2C Problems**: Check SDA/SCL connections
- **Address Conflicts**: Verify I2C address settings
- **Power Issues**: Ensure adequate power supply
- **Library Versions**: Use compatible library versions

### Motor/Servo Issues
- **No Movement**: Check power supply and connections
- **Erratic Behavior**: Verify control signals and power
- **Overheating**: Check current consumption and heat sinks
- **Noise**: Add decoupling capacitors if needed

### Power Problems
- **Insufficient Power**: Use higher current power supply
- **Voltage Drops**: Check connections and wire gauge
- **eFuse Tripping**: Reduce current consumption
- **Heat Issues**: Improve ventilation and heat dissipation

## Package Contents

- 1x Adafruit CRICKIT for Circuit Playground Express
- Standoffs and screws for Circuit Playground attachment
- Documentation and getting started guide
- Access to comprehensive online resources

## Important Notes

- **5V Only**: Designed for 5V operation, not compatible with 9V/12V
- **Power Supply Required**: External 5V supply needed for most applications
- **Circuit Playground Required**: Circuit Playground Express sold separately
- **No Soldering**: Assembly requires no soldering
- **Current Planning**: Plan total current consumption carefully

## Advantages

- **Easy Integration**: Simple bolt-on design
- **Comprehensive I/O**: Motors, servos, sensors, audio in one board
- **Educational**: Perfect for learning robotics
- **Robust Design**: Built-in protection and safety features
- **Community Support**: Extensive documentation and examples

## Limitations

- **5V Only**: Limited to 5V components
- **Current Limits**: 1A per motor, 4A total system
- **Size**: Larger than Circuit Playground alone
- **Cost**: Additional cost beyond Circuit Playground
- **Complexity**: More complex than simple motor drivers

## Recommended Accessories

- 5V 2A or 4A power supply for adequate power
- Standard hobby servos for motion control
- Small DC motors for drive systems
- Solenoids and relays for automation
- Sensors and switches for robot interaction
