---
type: part
title: LED Matrices & Display Modules
description: Collection of LED matrices and display modules including NeoPixel RGB matrices for visual displays, animations, and user interface applications
manufacturer: Various
part_number: LED-MATRICES-MIXED
category: displays
subcategory: led-matrices
tags: [led-matrix, neopixel, rgb, ws2812, sk6812, addressable, display, animation, visual, 8x8, matrix, adafruit]
total_quantity: 4
location: [cabinet-2-bin-33]
price: 34.95
currency: USD
date_added: 2025-01-09
status: active
---

# LED Matrices & Display Modules

## Overview

This collection contains LED matrices and display modules for creating visual displays, animations, and user interfaces. The primary component is the Adafruit NeoPixel NeoMatrix, which provides individually addressable RGB LEDs in a compact matrix format suitable for a wide range of display applications.

## Available Components and Locations

### Bin 33 - LED Matrices (Cabinet 2)

| Part Number | Type | Size | LEDs | Control | Voltage | Current | Quantity | Applications |
|-------------|------|------|------|---------|---------|---------|----------|--------------|
| 1487 | NeoPixel Matrix | 8x8 | 64 RGB | Single Pin | 5V | 3.5A Max | 4 | Visual displays |

## Technical Specifications

### Adafruit NeoPixel NeoMatrix 8x8 (ID 1487)

#### LED Specifications
- **LED Count**: 64 individually addressable RGB LEDs
- **Matrix Configuration**: 8x8 grid arrangement
- **LED Type**: WS2812B or SK6812 (may vary by production batch)
- **Color Depth**: 24-bit color (8 bits per channel)
- **Brightness**: High brightness, eye-blistering intensity
- **Color Range**: Full RGB spectrum with smooth color mixing
- **Individual Control**: Each LED independently controllable

#### Electrical Characteristics
- **Supply Voltage**: 5VDC (required)
- **Logic Voltage**: 5V TTL compatible
- **Current per LED**: Up to 60mA maximum (20mA per color channel)
- **Total Current**: Up to 3.84A maximum (all LEDs at full white)
- **Typical Current**: 1-2A for normal operation
- **Data Interface**: Single-wire serial protocol
- **Data Pin**: Connect to microcontroller digital pin (Arduino pin 6 recommended)

#### Control Interface
- **Protocol**: NeoPixel/WS2812 timing-specific serial
- **Data Rate**: 800kHz data transmission
- **Control Method**: Single data line with precise timing
- **Chaining**: Supports daisy-chaining multiple matrices
- **Library Support**: Adafruit NeoPixel library for Arduino
- **Real-time Required**: Requires real-time microcontroller (AVR, ARM, etc.)

#### Physical Specifications
- **Dimensions**: 71.17mm x 71.17mm x 3.28mm (2.8" x 2.8" x 0.12")
- **Weight**: 24.21g
- **Mounting**: PCB with mounting holes
- **Connections**: Two 3-pin connection ports (input and output)
- **Pin Spacing**: Standard 0.1" (2.54mm) pitch
- **Color**: Black PCB with clear LED lenses

#### Connection Details
- **Input Port**: DIN (Data In), +5V, GND
- **Output Port**: DOUT (Data Out), +5V, GND
- **Wiring**: 
  - +5V to 5V power supply
  - GND to common ground
  - DIN to microcontroller digital pin
- **Chaining**: Connect DOUT of first matrix to DIN of second matrix

#### Environmental Specifications
- **Operating Temperature**: -20°C to +70°C typical
- **Storage Temperature**: -40°C to +85°C
- **Humidity**: Non-condensing environment recommended
- **Vibration**: Solid-state design, vibration resistant
- **Shock**: Resistant to mechanical shock
- **Mounting**: Indoor use recommended

## Programming and Control

### Arduino Library Support
- **Primary Library**: Adafruit NeoPixel library
- **Installation**: Available through Arduino Library Manager
- **Compatibility**: Arduino UNO, Mega, Leonardo, ESP32, etc.
- **Memory Requirements**: Requires sufficient RAM for pixel buffer
- **Processing Power**: 8MHz or faster processor required

### Basic Programming Example
```cpp
#include <Adafruit_NeoPixel.h>

#define PIN 6
#define NUMPIXELS 64

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
}

void loop() {
  // Set all pixels to red
  for(int i=0; i<NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(255, 0, 0));
  }
  pixels.show();
  delay(1000);
}
```

### Matrix Addressing
- **Linear Addressing**: LEDs numbered 0-63 in sequence
- **Row/Column Mapping**: Convert (x,y) coordinates to linear index
- **Serpentine Layout**: Alternating row directions (typical)
- **Custom Mapping**: Create lookup tables for specific patterns
- **Animation**: Use frame buffers for smooth animations

### Advanced Features
- **Gamma Correction**: Apply gamma correction for better color perception
- **Brightness Control**: Global brightness adjustment (0-255)
- **Color Temperature**: Adjust white balance for different lighting
- **Dithering**: Improve color depth with temporal dithering
- **Fast Updates**: Optimize for high frame rate applications

## Power Supply Considerations

### Power Requirements
- **Voltage**: 5VDC regulated supply required
- **Current Capacity**: Minimum 2A recommended, 4A for full brightness
- **Power Connector**: Use appropriate gauge wire for current
- **Voltage Drop**: Minimize wire length and resistance
- **Decoupling**: Add capacitors near matrix for stable operation

### Power Supply Recommendations
- **Adafruit 5V 2A Supply**: Suitable for single matrix moderate brightness
- **Adafruit 5V 10A Supply**: Suitable for multiple matrices or full brightness
- **Switching Supplies**: Use high-quality switching power supplies
- **Linear Supplies**: Acceptable for single matrix applications
- **Battery Power**: Consider current capacity for portable applications

### Power Management
- **Brightness Limiting**: Reduce brightness to lower current consumption
- **Selective Lighting**: Light only necessary pixels to save power
- **Sleep Modes**: Turn off matrix when not in use
- **Current Monitoring**: Monitor actual current consumption
- **Thermal Management**: Ensure adequate cooling for high-power operation

## Applications

### Visual Display Applications
- **Text Display**: Scrolling text and messages
- **Graphics**: Simple graphics and icons
- **Animations**: Smooth color animations and effects
- **Status Indicators**: System status and notification displays
- **Art Projects**: Interactive art installations
- **Gaming**: Simple LED-based games
- **Clocks**: Digital clock displays with effects

### Educational Projects
- **Programming Learning**: Learn LED control and graphics programming
- **Electronics Education**: Understand digital control and power management
- **Art and Technology**: Combine art with technology projects
- **STEM Projects**: Science, technology, engineering, and math applications
- **Maker Projects**: DIY electronics and maker space projects

### Commercial Applications
- **Signage**: Small-scale digital signage
- **Indicators**: Equipment status indicators
- **Prototyping**: Prototype larger display systems
- **Demonstrations**: Technology demonstrations and trade shows
- **Testing**: LED driver and control system testing

## Installation Guidelines

### Mounting Options
- **PCB Mounting**: Use mounting holes for secure attachment
- **Panel Mounting**: Mount behind translucent panels for diffused light
- **Enclosure Mounting**: Install in custom enclosures
- **Breadboard**: Temporary mounting for prototyping
- **3D Printed Mounts**: Custom 3D printed mounting solutions

### Wiring Best Practices
- **Short Connections**: Keep data lines as short as possible
- **Twisted Pair**: Use twisted pair for longer data connections
- **Ground Plane**: Provide solid ground connections
- **Power Distribution**: Use adequate wire gauge for power
- **Strain Relief**: Provide strain relief for connections

### Environmental Protection
- **Indoor Use**: Designed for indoor applications
- **Moisture Protection**: Protect from moisture and condensation
- **Temperature Control**: Avoid extreme temperatures
- **Dust Protection**: Keep clean for optimal light output
- **UV Protection**: Protect from direct sunlight if applicable

## Troubleshooting

### Common Issues
- **No Output**: Check power supply, connections, and code
- **Flickering**: Check power supply capacity and connections
- **Wrong Colors**: Verify color order in library configuration
- **Partial Operation**: Check for damaged LEDs or poor connections
- **Timing Issues**: Ensure compatible microcontroller and library

### Power-Related Problems
- **Dim Output**: Insufficient power supply current
- **Voltage Drop**: Use thicker wires or shorter connections
- **Brownouts**: Power supply cannot handle peak current
- **Overheating**: Reduce brightness or improve cooling
- **Unstable Operation**: Add decoupling capacitors

### Data Signal Problems
- **No Response**: Check data pin connection and library configuration
- **Glitches**: Add pull-up resistor or level shifter
- **Interference**: Shield data lines from noise sources
- **Timing Errors**: Verify microcontroller compatibility
- **Chain Issues**: Check connections between chained matrices

## Safety Considerations

### Electrical Safety
- **Proper Grounding**: Ensure all components share common ground
- **Current Limits**: Respect maximum current ratings
- **Voltage Levels**: Use appropriate voltage levels (5V)
- **Short Circuit Protection**: Protect against short circuits
- **ESD Protection**: Use ESD precautions during handling

### Optical Safety
- **Brightness Limits**: Avoid looking directly at high-brightness LEDs
- **Eye Protection**: Use appropriate brightness levels for viewing distance
- **Diffusion**: Consider diffusion for comfortable viewing
- **Strobing**: Avoid high-frequency strobing that may cause seizures
- **Age Considerations**: Consider viewer age and sensitivity

### Thermal Safety
- **Heat Dissipation**: Ensure adequate heat dissipation
- **Temperature Monitoring**: Monitor operating temperature
- **Ventilation**: Provide adequate ventilation for cooling
- **Material Compatibility**: Use heat-resistant mounting materials
- **Fire Safety**: Follow electrical fire safety practices

## Storage and Handling

### Storage Conditions
- **Temperature**: Store at room temperature
- **Humidity**: Low humidity environment preferred
- **Protection**: Protect from physical damage
- **ESD Protection**: Use anti-static packaging
- **Light Protection**: Store away from direct sunlight

### Handling Guidelines
- **ESD Precautions**: Use ESD wrist strap and mat
- **Gentle Handling**: Avoid excessive force on PCB
- **Clean Handling**: Keep clean during installation
- **Component Protection**: Protect LEDs from damage
- **Documentation**: Maintain handling procedures

## Package Contents

- Adafruit NeoPixel NeoMatrix 8x8 (4 pieces)
- 64 RGB LEDs per matrix (256 total LEDs)
- Individual addressable control
- 5V operation with single data pin control
- Chainable design for larger displays

## Important Notes

- **Power Supply Critical**: Adequate power supply essential for proper operation
- **Real-time Control**: Requires real-time microcontroller for timing
- **Library Dependency**: Requires Adafruit NeoPixel library or compatible
- **Current Consumption**: Monitor current consumption to prevent overload
- **Timing Sensitive**: Protocol requires precise timing for reliable operation

## Advantages

- **Individual Control**: Each LED independently controllable
- **Full Color**: 24-bit color depth with smooth mixing
- **Chainable**: Multiple matrices can be chained together
- **Single Pin Control**: Minimal microcontroller pins required
- **Library Support**: Excellent library and community support
- **Compact**: High LED density in small form factor

## Limitations

- **Power Hungry**: High current consumption at full brightness
- **Timing Critical**: Requires precise timing for data protocol
- **5V Requirement**: Requires 5V supply, not 3.3V compatible
- **Real-time Only**: Cannot be used with Linux-based systems directly
- **Memory Usage**: Requires RAM for pixel buffer storage
- **Cost**: Higher cost per LED compared to simple LEDs

## Recommended Applications

- **Learning Projects**: Excellent for learning LED control programming
- **Art Installations**: Create interactive light art projects
- **Status Displays**: Visual status indicators for systems
- **Gaming**: Simple LED-based games and displays
- **Prototyping**: Prototype larger display systems
- **Education**: STEM education and maker projects
