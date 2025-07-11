---
type: part
title: Circuit Playground Classic - Developers Edition
description: Original Circuit Playground with ATmega32u4 microcontroller, sensors, LEDs, and alligator clip pads for electronics learning
manufacturer: Adafruit
part_number: 3000
category: microcontrollers
subcategory: circuit-playground
tags: [circuit-playground, classic, atmega32u4, developers-edition, sensors, neopixels, educational]
quantity: 1
location: [cabinet-1-bin-43]
datasheet_url: https://learn.adafruit.com/introducing-circuit-playground?view=all
purchase_url: https://www.adafruit.com/product/3000
price: 19.95
currency: USD
date_added: 2025-01-09
status: discontinued
---

# Circuit Playground Classic - Developers Edition

## Overview

The original Circuit Playground Classic is the perfect introduction to electronics and programming. This **Developer Edition** was designed for people who have a little experience with Arduino already, who want to help build & document projects. It features an ATmega32u4 micro-processor, just like the popular Flora, in a round form factor with alligator-clip pads around it.

**Note**: This is the original Developers Edition. The current production version is Circuit Playground Classic, and newer versions include Circuit Playground Express and Circuit Playground Bluefruit.

## Specifications

- **Microcontroller**: ATmega32u4 Processor
- **Clock Speed**: 8MHz
- **Operating Voltage**: 3.3V
- **Outer Diameter**: ~50.6mm / ~2.0"
- **Weight**: Approximately 8-10g
- **Programming**: Arduino IDE compatible

## Key Features

### Built-in Components
- **10x Mini NeoPixels**: Full-color RGB LEDs around the perimeter
- **Motion Sensor**: LIS3DH triple-axis accelerometer with tap detection
- **Temperature Sensor**: NTC thermistor for temperature measurement
- **Light Sensor**: Phototransistor for ambient light detection
- **Sound Sensor**: MEMS microphone for audio input
- **Mini Speaker**: Magnetic buzzer for audio output
- **2x Push Buttons**: Left and right user input buttons
- **1x Slide Switch**: On/off or mode selection switch

### Connectivity
- **8x Alligator-Clip Pads**: No soldering required for connections
- **Capacitive Touch**: All 8 pads can sense touch
- **I2C Interface**: Hardware I2C for sensor communication
- **UART Interface**: Hardware serial communication
- **4x Analog Inputs**: ADC capable pins
- **PWM Outputs**: Multiple PWM-capable pins

### Power and Programming
- **MicroUSB Port**: Programming and power via USB
- **JST Battery Input**: External battery power option
- **USB HID Support**: Can act as keyboard, mouse, joystick, or MIDI
- **Built-in USB**: No additional hardware needed for programming

## Hardware Components

### Sensors and Inputs
- **LIS3DH Accelerometer**: 3-axis motion sensing with tap detection
- **NTC Thermistor**: Temperature sensing (analog pin A0)
- **Light Sensor**: ALS-PT19 phototransistor (analog pin A5)
- **MEMS Microphone**: Audio input (analog pin A4)
- **Capacitive Touch**: All 8 GPIO pads touch-sensitive

### Outputs and Indicators
- **10x NeoPixels**: Individually addressable RGB LEDs
- **Magnetic Buzzer**: Audio output on digital pin 5
- **Green ON LED**: Power indicator
- **Red #13 LED**: User programmable LED
- **Status LEDs**: Various indicator lights

### User Interface
- **Left Button**: Digital pin 19, pulled high when pressed
- **Right Button**: Digital pin 5, pulled high when pressed
- **Slide Switch**: Digital pin 21, LOW left, HIGH right
- **Reset Button**: Manual reset and bootloader entry

## Pin Configuration

### GPIO Pins (Clockwise from top right)
- **D10/A10**: Digital I/O, Analog Input, PWM output
- **D9/A9**: Digital I/O, Analog Input, PWM output
- **D6/A7**: Digital I/O, Analog Input, PWM output
- **D12/A11**: Digital I/O, Analog Input
- **D1**: Digital I/O, Hardware Serial TX, Interrupt input
- **D0**: Digital I/O, Hardware Serial RX, Interrupt input
- **D2**: Digital I/O, I2C SDA, Interrupt input
- **D3**: Digital I/O, PWM output, I2C SCL, Interrupt input

### Power Pins
- **3.3V**: Two power output pads (500mA max from regulator)
- **GND**: Three ground pads
- **VBATT**: Battery/USB voltage output (higher of the two)

### Internal Pin Usage
- **D4**: Left Button A
- **D5**: Speaker PWM output and Right Button B
- **D7**: Accelerometer interrupt
- **D8**: Accelerometer chip select
- **D13**: Red LED
- **D17**: Built-in 10 NeoPixels
- **D19**: Right Button B (alternate)
- **D21**: Slide Switch
- **A0**: Temperature Sensor
- **A4**: Microphone sound sensor
- **A5**: Light Sensor

## Programming Platforms

### Arduino IDE
- **Full Support**: Complete Arduino IDE compatibility
- **Board Selection**: "Adafruit Circuit Playground" in board menu
- **Library Support**: Dedicated Circuit Playground library
- **Example Code**: Comprehensive example collection
- **Community**: Large Arduino community support

### Code.org
- **CS Discoveries**: Supported in Code.org computer science curriculum
- **Block Programming**: Visual programming interface
- **Educational**: Designed for classroom use
- **Curriculum Integration**: Fits into structured learning programs

## Applications

### Educational Use
- **Electronics Learning**: Perfect introduction to electronics
- **Programming Education**: Learn coding with immediate feedback
- **STEM Education**: Science, technology, engineering, math projects
- **Classroom Projects**: Group and individual learning activities

### Maker Projects
- **Wearable Electronics**: Fashion and costume integration
- **Interactive Art**: Motion and sound-responsive installations
- **Home Automation**: Simple automation and monitoring
- **Robotics**: Brain for simple robotic projects

### Prototyping
- **Sensor Networks**: Multi-sensor data collection
- **IoT Devices**: Internet-connected projects
- **Game Controllers**: Custom input devices
- **Musical Instruments**: Electronic music creation

## Power Management

### Power Sources
- **USB Power**: 5V from micro USB connector
- **Battery Power**: 3.7V LiPo or 3xAAA battery pack
- **Auto-Switching**: Automatically selects higher voltage source
- **Reverse Protection**: Built-in reverse polarity protection

### Power Consumption
- **Active Mode**: ~30-50mA typical operation
- **Sleep Modes**: Various low-power modes available
- **NeoPixel Power**: Additional current when LEDs are active
- **Sensor Power**: Minimal additional current for sensors

## Getting Started

### Setup Process
1. **Install Arduino IDE**: Download latest version (1.8.5+)
2. **Install Drivers**: Windows users may need drivers
3. **Add Board Support**: Install Adafruit board package
4. **Install Library**: Add Circuit Playground library
5. **Connect and Test**: Upload first program

### First Project
1. **Connect USB**: Plug in Circuit Playground
2. **Select Board**: Choose "Adafruit Circuit Playground"
3. **Select Port**: Choose correct COM/serial port
4. **Load Example**: Open Circuit Playground demo
5. **Upload Code**: Compile and upload to board

## Developer Edition Notes

### Target Audience
- **Experienced Users**: Some Arduino experience recommended
- **Project Builders**: Help build and document projects
- **Early Adopters**: Willing to work with potential bugs
- **Community Contributors**: Share projects and improvements

### Potential Issues
- **Minor Bugs**: Hardware or software issues possible
- **Limited Documentation**: Fewer examples than production version
- **Compatibility**: Some features may change in final version
- **Support**: Community-based support primarily

## Package Contents

- 1x Circuit Playground Classic - Developers Edition
- Documentation links and getting started guide
- Pre-loaded bootloader for Arduino programming

## Important Notes

- **Developers Edition**: Intended for experienced users
- **3.3V Logic**: Not 5V tolerant, use appropriate level shifting
- **Superseded**: Newer versions (Express, Bluefruit) available
- **Community Support**: Rely on community for help and examples
- **Arduino Required**: Requires Arduino IDE for programming

## Advantages

- **All-in-One**: Complete learning platform in single board
- **No Soldering**: Alligator clips eliminate soldering needs
- **Rich Sensors**: Multiple sensors for diverse projects
- **Educational**: Perfect for learning electronics and programming
- **Arduino Compatible**: Familiar development environment

## Limitations

- **Developers Edition**: May have bugs or incomplete features
- **Limited Memory**: Less memory than newer versions
- **No CircuitPython**: Arduino only, no Python support
- **Older Hardware**: Superseded by newer, more capable versions
- **3.3V Only**: Requires level shifting for 5V devices

## Migration Path

For new projects, consider:
- **Circuit Playground Express**: More memory, CircuitPython support
- **Circuit Playground Bluefruit**: Bluetooth connectivity
- **Modern Alternatives**: Newer boards with enhanced capabilities

## Recommended Accessories

- Alligator clip test leads for connections
- 3xAAA battery pack for portable power
- USB cable for programming and power
- Electronic components for expansion projects
- Breadboard and jumper wires for prototyping
