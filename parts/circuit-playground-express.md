---
type: part
title: Circuit Playground Express
description: Advanced Circuit Playground with ATSAMD21 ARM Cortex M0, multiple programming options including CircuitPython and MakeCode
manufacturer: Adafruit
part_number: 3333
category: microcontrollers
subcategory: circuit-playground
tags: [circuit-playground, express, atsamd21, circuitpython, makecode, arduino, sensors, neopixels]
quantity: 6
location: [cabinet-1-bin-43, cabinet-1-bin-44]
datasheet_url: https://learn.adafruit.com/adafruit-circuit-playground-express
purchase_url: https://www.adafruit.com/product/3333
price: 24.95
currency: USD
date_added: 2025-01-09
status: active
image: attachments/circuit-playground-express.jpg
---

# Circuit Playground Express

![Circuit Playground Express](attachments/circuit-playground-express.jpg)

## Overview

**Circuit Playground Express** is the next step towards a perfect introduction to electronics and programming. We've taken the original Circuit Playground Classic and made it even better! Not only did we pack even more sensors in, we also made it even easier to program with support for multiple programming environments.

## Specifications

- **Microcontroller**: ATSAMD21 ARM Cortex M0 Processor
- **Clock Speed**: 48MHz
- **Operating Voltage**: 3.3V
- **Flash Memory**: Built-in flash + 2MB SPI Flash storage
- **Outer Diameter**: ~50.6mm / ~2.0"
- **Weight**: 8.9g

## Key Features

### Multiple Programming Options
- **Microsoft MakeCode**: Block-based or JavaScript programming
- **CircuitPython**: Python interpreter running on the board
- **Arduino IDE**: Full Arduino IDE support with low-level access
- **Code.org CS Discoveries**: Browser-based coding education

### Enhanced Hardware
- **10x Mini NeoPixels**: Full-color RGB LEDs with individual control
- **Motion Sensor**: LIS3DH triple-axis accelerometer with tap detection
- **Temperature Sensor**: Thermistor for ambient temperature
- **Light Sensor**: Phototransistor (can also act as color/pulse sensor)
- **Sound Sensor**: MEMS microphone for audio input
- **Mini Speaker**: Class D amplifier with 7.5mm magnetic speaker
- **Infrared**: Both receiver and transmitter for remote control

### Connectivity and I/O
- **8x Alligator-Clip Pads**: No soldering required
- **7x Capacitive Touch**: Touch-sensitive input pads
- **1x True Analog Output**: Real DAC output
- **Multiple PWM**: Multiple PWM-capable outputs
- **I2C, UART**: Hardware communication interfaces

## Hardware Components

### Sensors and Inputs
- **LIS3DH Accelerometer**: 3-axis motion with tap and free-fall detection
- **Thermistor**: Temperature sensing with wide range
- **Phototransistor**: Light sensing with color detection capability
- **MEMS Microphone**: High-quality audio input
- **Infrared Receiver**: Receive remote control signals
- **Capacitive Touch**: 7 touch-sensitive pads

### Outputs and Indicators
- **10x NeoPixels**: Individually addressable RGB LEDs
- **Class D Amplifier**: High-quality audio output
- **Infrared Transmitter**: Send remote control codes
- **Green ON LED**: Power indicator
- **Red #13 LED**: User programmable LED

### User Interface
- **2x Push Buttons**: Labeled A and B for user input
- **1x Slide Switch**: Mode selection or on/off control
- **Reset Button**: Manual reset and bootloader entry

## Programming Platforms

### Microsoft MakeCode
- **Block Programming**: Drag-and-drop visual programming
- **JavaScript**: Text-based programming option
- **Simulator**: Test code without hardware
- **Web-Based**: No software installation required
- **Educational**: Perfect for beginners

### CircuitPython
- **Python Interpreter**: Real Python running on microcontroller
- **Interactive REPL**: Live coding and debugging
- **File System**: Access board as USB drive
- **Extensive Libraries**: Large ecosystem of libraries
- **Rapid Development**: Quick iteration and testing

### Arduino IDE
- **Full Support**: Complete Arduino IDE compatibility
- **Low-Level Access**: Direct hardware control
- **C/C++ Programming**: Traditional embedded programming
- **Library Ecosystem**: Access to Arduino libraries
- **Advanced Features**: For experienced developers

### Code.org CS Discoveries
- **Curriculum Integration**: Part of computer science education
- **Classroom Ready**: Designed for educational environments
- **Progressive Learning**: Structured learning progression
- **Teacher Resources**: Comprehensive teaching materials

## Pin Configuration

### GPIO Pins (8 total)
- **A0**: Analog input, digital I/O, capacitive touch
- **A1**: Analog input, digital I/O, capacitive touch, true analog output
- **A2**: Analog input, digital I/O, capacitive touch
- **A3**: Analog input, digital I/O, capacitive touch
- **A4**: Analog input, digital I/O, capacitive touch
- **A5**: Analog input, digital I/O, capacitive touch
- **A6**: Analog input, digital I/O, capacitive touch
- **A7**: Analog input, digital I/O, capacitive touch

### Power Pins
- **3.3V**: Two power output pads
- **GND**: Three ground pads
- **VBATT**: Battery/USB voltage output

### Communication
- **SDA/SCL**: I2C communication (shared with GPIO)
- **TX/RX**: UART communication (shared with GPIO)
- **Multiple PWM**: Various pins support PWM output

## Storage and Memory

### SPI Flash (2MB)
- **CircuitPython Storage**: Store code and libraries
- **File System**: Appears as USB drive when connected
- **Data Logging**: Store sensor data and logs
- **User Files**: Images, sounds, configuration files

### Built-in Flash
- **Program Storage**: Store compiled programs
- **Bootloader**: UF2 bootloader for easy programming
- **Multiple Programs**: Switch between different programs

## Applications

### Educational Projects
- **STEM Learning**: Science, technology, engineering, math
- **Programming Education**: Learn coding with immediate feedback
- **Electronics Basics**: Understand sensors and actuators
- **Creative Projects**: Art, music, and interactive installations

### Maker Projects
- **Wearable Electronics**: Fashion and costume integration
- **Home Automation**: Smart home sensors and controls
- **Robotics**: Brain for robotic projects
- **IoT Devices**: Internet-connected sensors and actuators

### Professional Use
- **Rapid Prototyping**: Quick concept development
- **Educational Tools**: Teaching aids and demonstrations
- **Art Installations**: Interactive art and exhibits
- **Product Development**: Proof-of-concept development

## Power Management

### Power Sources
- **USB Power**: 5V from micro USB connector
- **Battery Power**: 3.7V LiPo or 3xAAA battery pack
- **Auto-Switching**: Automatically selects power source
- **JST Connector**: Standard battery connector

### Power Consumption
- **Active Mode**: Varies by program and LED usage
- **Sleep Modes**: Low-power modes available
- **NeoPixel Control**: Significant power when LEDs active
- **Sensor Power**: Minimal additional current

## Getting Started

### MakeCode Setup
1. **Open Browser**: Go to makecode.adafruit.com
2. **Select Board**: Choose Circuit Playground Express
3. **Drag Blocks**: Create program with visual blocks
4. **Download**: Save .uf2 file to board
5. **Test**: Program runs immediately

### CircuitPython Setup
1. **Install CircuitPython**: Download and install firmware
2. **Connect USB**: Board appears as CIRCUITPY drive
3. **Edit Code**: Modify code.py file
4. **Save**: Code runs automatically on save
5. **Use REPL**: Interactive Python shell

### Arduino Setup
1. **Install Arduino IDE**: Download latest version
2. **Add Board Package**: Install Adafruit SAMD boards
3. **Select Board**: Choose "Adafruit Circuit Playground Express"
4. **Install Libraries**: Add Circuit Playground library
5. **Upload Code**: Compile and upload sketches

## Advanced Features

### Infrared Communication
- **Remote Control**: Receive and transmit IR signals
- **Device Control**: Control TVs, stereos, etc.
- **Communication**: Send data between boards
- **Proximity Sensing**: Detect nearby objects

### Audio Processing
- **Sound Analysis**: Analyze microphone input
- **Music Generation**: Create tones and melodies
- **Voice Control**: Simple voice recognition
- **Audio Effects**: Process and modify sounds

### Motion Detection
- **Orientation**: Detect board orientation
- **Tap Detection**: Respond to taps and knocks
- **Free-fall**: Detect when board is dropped
- **Activity**: Monitor movement and activity

## Package Contents

- 1x Circuit Playground Express board
- Pre-loaded CircuitPython firmware
- Getting started documentation
- Access to online resources and tutorials

## Important Notes

- **Multiple Programming**: Can switch between different programming environments
- **3.3V Logic**: All I/O operates at 3.3V levels
- **File System**: CircuitPython mode shows board as USB drive
- **Bootloader**: Double-click reset for bootloader mode
- **Community**: Large community with extensive resources

## Advantages

- **Versatile Programming**: Multiple programming options for different skill levels
- **Rich Hardware**: Comprehensive sensor and output collection
- **Educational**: Perfect for learning electronics and programming
- **No Soldering**: Alligator clips eliminate soldering requirements
- **Rapid Development**: Quick prototyping and iteration

## Limitations

- **3.3V Only**: Requires level shifting for 5V devices
- **Limited GPIO**: Only 8 general-purpose I/O pins
- **Power Consumption**: NeoPixels can consume significant power
- **Size Constraints**: Round form factor limits some applications
- **Cost**: More expensive than basic microcontrollers

## Recommended Accessories

- Alligator clip test leads for connections
- 3xAAA battery pack for portable power
- USB cable for programming and power
- Sensors and actuators for expansion
- Breadboard and components for advanced projects
