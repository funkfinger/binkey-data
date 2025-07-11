---
type: part
title: LED Matrices & Display Modules
description: Collection of LED matrices and display modules including NeoPixel RGB matrices for visual displays, animations, and user interface applications
manufacturer: Various
part_number: LED-MATRICES-MIXED
category: displays
subcategory: led-matrices
tags:
  [
    led-matrix,
    neopixel,
    rgb,
    ws2812,
    sk6812,
    addressable,
    display,
    animation,
    visual,
    8x8,
    matrix,
    adafruit,
  ]
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

| Part Number | Type            | Size | LEDs   | Control    | Voltage | Current  | Quantity | Applications    |
| ----------- | --------------- | ---- | ------ | ---------- | ------- | -------- | -------- | --------------- |
| 1487        | NeoPixel Matrix | 8x8  | 64 RGB | Single Pin | 5V      | 3.5A Max | 4        | Visual displays |

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

## Wiring Diagrams

### Single NeoPixel Matrix Connection

#### Arduino Uno Connection

```
NeoMatrix      Arduino Uno
---------      -----------
+5V       →    5V (external power recommended)
GND       →    GND
DIN       →    Pin 6 (or any digital pin)

Power Requirements:
- External 5V power supply recommended (3-4A capacity)
- Connect Arduino GND to power supply GND
- Use thick wires for power connections
```

#### Raspberry Pi Pico Connection

```
NeoMatrix      Pico
---------      ----
+5V       →    VSYS (or external 5V supply)
GND       →    GND
DIN       →    GP6 (or any GPIO pin)

Note: Pico 3.3V logic works with NeoPixels
External 5V supply recommended for full brightness
```

#### ESP32 Connection

```
NeoMatrix      ESP32
---------      -----
+5V       →    VIN (or external 5V supply)
GND       →    GND
DIN       →    GPIO6 (or any GPIO pin)

Note: ESP32 3.3V logic compatible with NeoPixels
Use level shifter for best reliability
```

### Multiple Matrix Chaining

```
Power Supply 5V → All Matrix +5V pins (parallel)
Power Supply GND → All Matrix GND pins (parallel)

Arduino Pin 6 → Matrix 1 DIN
Matrix 1 DOUT → Matrix 2 DIN
Matrix 2 DOUT → Matrix 3 DIN
(continue chain as needed)

Important: Calculate total current requirements!
```

### Power Supply Sizing

```
Current Calculation:
- Single LED maximum: 60mA
- 8x8 Matrix (64 LEDs): 64 × 60mA = 3.84A maximum
- Typical usage: 1-2A per matrix
- Multiple matrices: Add currents together

Recommended Power Supplies:
- 1 Matrix: 5V 4A supply
- 2 Matrices: 5V 8A supply
- 3+ Matrices: 5V 10A+ supply
```

## Programming Examples

### Arduino - Basic Matrix Control

```cpp
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 6
#define MATRIX_WIDTH 8
#define MATRIX_HEIGHT 8

// Matrix configuration
Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(
  MATRIX_WIDTH, MATRIX_HEIGHT, PIN,
  NEO_MATRIX_TOP + NEO_MATRIX_LEFT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_PROGRESSIVE,
  NEO_GRB + NEO_KHZ800
);

void setup() {
  matrix.begin();
  matrix.setBrightness(50);  // Set brightness (0-255)
  matrix.fillScreen(0);      // Clear screen
}

void loop() {
  // Draw a red pixel at (3,3)
  matrix.drawPixel(3, 3, matrix.Color(255, 0, 0));
  matrix.show();
  delay(1000);

  // Clear and draw a blue line
  matrix.fillScreen(0);
  matrix.drawLine(0, 0, 7, 7, matrix.Color(0, 0, 255));
  matrix.show();
  delay(1000);

  // Draw a green rectangle
  matrix.fillScreen(0);
  matrix.drawRect(2, 2, 4, 4, matrix.Color(0, 255, 0));
  matrix.show();
  delay(1000);
}
```

### Arduino - Scrolling Text

```cpp
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 6

Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(
  8, 8, PIN,
  NEO_MATRIX_TOP + NEO_MATRIX_LEFT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_PROGRESSIVE,
  NEO_GRB + NEO_KHZ800
);

const uint16_t colors[] = {
  matrix.Color(255, 0, 0),   // Red
  matrix.Color(0, 255, 0),   // Green
  matrix.Color(0, 0, 255),   // Blue
  matrix.Color(255, 255, 0), // Yellow
  matrix.Color(255, 0, 255), // Magenta
  matrix.Color(0, 255, 255)  // Cyan
};

int x = matrix.width();
int pass = 0;

void setup() {
  matrix.begin();
  matrix.setTextWrap(false);
  matrix.setBrightness(40);
  matrix.setTextColor(colors[0]);
}

void loop() {
  matrix.fillScreen(0);
  matrix.setCursor(x, 0);
  matrix.print(F("Hello World!"));

  if(--x < -36) {  // Text width
    x = matrix.width();
    if(++pass >= 6) pass = 0;
    matrix.setTextColor(colors[pass]);
  }

  matrix.show();
  delay(100);
}
```

### Arduino - Animation Patterns

```cpp
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 6

Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(
  8, 8, PIN,
  NEO_MATRIX_TOP + NEO_MATRIX_LEFT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_PROGRESSIVE,
  NEO_GRB + NEO_KHZ800
);

void setup() {
  matrix.begin();
  matrix.setBrightness(50);
}

void loop() {
  // Rainbow spiral
  rainbowSpiral();
  delay(2000);

  // Bouncing ball
  bouncingBall();
  delay(2000);

  // Color wipe
  colorWipe();
  delay(2000);
}

void rainbowSpiral() {
  for (int i = 0; i < 256; i++) {
    matrix.fillScreen(0);
    for (int y = 0; y < 8; y++) {
      for (int x = 0; x < 8; x++) {
        int hue = (i + x * 32 + y * 32) % 256;
        matrix.drawPixel(x, y, Wheel(hue));
      }
    }
    matrix.show();
    delay(50);
  }
}

void bouncingBall() {
  int x = 0, y = 0;
  int dx = 1, dy = 1;

  for (int i = 0; i < 100; i++) {
    matrix.fillScreen(0);
    matrix.drawPixel(x, y, matrix.Color(255, 255, 255));
    matrix.show();

    x += dx;
    y += dy;

    if (x <= 0 || x >= 7) dx = -dx;
    if (y <= 0 || y >= 7) dy = -dy;

    delay(100);
  }
}

void colorWipe() {
  uint32_t colors[] = {
    matrix.Color(255, 0, 0),   // Red
    matrix.Color(0, 255, 0),   // Green
    matrix.Color(0, 0, 255),   // Blue
    matrix.Color(0, 0, 0)      // Off
  };

  for (int c = 0; c < 4; c++) {
    for (int i = 0; i < 64; i++) {
      int x = i % 8;
      int y = i / 8;
      matrix.drawPixel(x, y, colors[c]);
      matrix.show();
      delay(50);
    }
  }
}

// Color wheel function
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return matrix.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return matrix.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return matrix.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}
```

### CircuitPython - Basic Matrix Control

```python
import board
import neopixel
import time

# Matrix setup
MATRIX_WIDTH = 8
MATRIX_HEIGHT = 8
PIXEL_COUNT = MATRIX_WIDTH * MATRIX_HEIGHT
PIN = board.D6

pixels = neopixel.NeoPixel(PIN, PIXEL_COUNT, brightness=0.2, auto_write=False)

def xy_to_index(x, y):
    """Convert x,y coordinates to pixel index"""
    if y % 2 == 0:  # Even rows
        return y * MATRIX_WIDTH + x
    else:  # Odd rows (serpentine)
        return y * MATRIX_WIDTH + (MATRIX_WIDTH - 1 - x)

def set_pixel(x, y, color):
    """Set pixel at x,y to color"""
    if 0 <= x < MATRIX_WIDTH and 0 <= y < MATRIX_HEIGHT:
        pixels[xy_to_index(x, y)] = color

def clear():
    """Clear all pixels"""
    pixels.fill((0, 0, 0))

# Main loop
while True:
    # Draw a red cross
    clear()
    for i in range(8):
        set_pixel(i, 3, (255, 0, 0))  # Horizontal line
        set_pixel(3, i, (255, 0, 0))  # Vertical line
    pixels.show()
    time.sleep(1)

    # Draw a blue border
    clear()
    for i in range(8):
        set_pixel(i, 0, (0, 0, 255))  # Top
        set_pixel(i, 7, (0, 0, 255))  # Bottom
        set_pixel(0, i, (0, 0, 255))  # Left
        set_pixel(7, i, (0, 0, 255))  # Right
    pixels.show()
    time.sleep(1)

    # Rainbow fill
    for i in range(64):
        hue = i * 4  # 0-255 hue range
        color = neopixel.colorwheel(hue)
        pixels[i] = color
        pixels.show()
        time.sleep(0.05)

    time.sleep(1)
```

### Arduino - Multiple Matrix Control

```cpp
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 6
#define MATRIX_COUNT 2

// Create a 16x8 display (2 matrices side by side)
Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(
  16, 8, PIN,  // 16 wide, 8 tall
  NEO_MATRIX_TOP + NEO_MATRIX_LEFT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_PROGRESSIVE +
  NEO_TILE_TOP + NEO_TILE_LEFT + NEO_TILE_ROWS,
  NEO_GRB + NEO_KHZ800
);

void setup() {
  matrix.begin();
  matrix.setBrightness(40);
  matrix.setTextWrap(false);
  matrix.setTextColor(matrix.Color(255, 255, 255));
}

void loop() {
  // Scrolling text across both matrices
  for (int x = 16; x >= -60; x--) {
    matrix.fillScreen(0);
    matrix.setCursor(x, 0);
    matrix.print("DUAL MATRIX");
    matrix.show();
    delay(100);
  }
}
```

## Important Safety and Usage Notes

### Power Supply Requirements

- **Never power from Arduino 5V pin** - insufficient current capacity
- **Use dedicated 5V power supply** with adequate current rating
- **Connect all grounds together** (Arduino, power supply, matrix)
- **Use thick wires** for power connections (18-20 AWG minimum)
- **Add capacitors** (1000µF) across power supply for stability

### Brightness and Current Management

- **Start with low brightness** (20-50) to prevent overcurrent
- **Calculate total current** before connecting multiple matrices
- **Monitor power supply temperature** during operation
- **Use current limiting** in software if necessary

### Data Signal Integrity

- **Keep data wires short** (under 6 inches if possible)
- **Use level shifter** for 3.3V microcontrollers (optional but recommended)
- **Add 330Ω resistor** in series with data line for protection
- **Avoid long wire runs** without signal conditioning

### Programming Considerations

- **Disable interrupts** during NeoPixel updates if timing issues occur
- **Use appropriate delays** between updates
- **Test with single matrix** before chaining multiple units
- **Consider memory usage** with large displays

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
