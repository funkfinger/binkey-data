---
type: electronic-component
category: Display Drivers
subcategory: LED Drivers
brand: Texas Instruments
part_number: TLC5940
model: TLC5940PWP
description: 16-channel LED driver with EEPROM dot correction and 12-bit grayscale PWM control
manufacturer: Texas Instruments
package: 28-HTSSOP
size: 9.7mm x 6.4mm
voltage: 3V ~ 5.5V (VCC), up to 17V (LED supply)
current: 0-60mA per channel (VCC < 3.6V), 0-120mA per channel (VCC > 3.6V)
power: Constant-current sink driver
interface: [Serial Data Interface, PWM Control]
connectivity: [Surface-mount pins]
compatibility: [RGB LEDs, LED strips, LED matrices, Microcontrollers]
location: [Cabinet-3/Bin-39/Section-B]
quantity: 8
status: available
price_range: $4.00-6.00 (estimated)
datasheet: https://www.ti.com/lit/gpn/tlc5940
product_url: https://www.ti.com/product/TLC5940
tags: [led-driver, pwm-control, dot-correction, 16-channel, texas-instruments, eeprom, cabinet-3, bin-39, status-available]
date_added: 2025-01-13
---

# TLC5940 - 16-Channel LED Driver with DOT Correction

## Details

- **Location**: Cabinet-3, Bin 39, Section B
- **Category**: Display Drivers
- **Brand**: Texas Instruments
- **Part Number**: TLC5940 / TLC5940PWP
- **Package**: 28-HTSSOP (Surface Mount)
- **Quantity**: 8
- **Status**: Available
- **Price Range**: $4.00-6.00 (estimated)
- **Datasheet**: [TLC5940 Datasheet](https://www.ti.com/lit/gpn/tlc5940)
- **Product URL**: https://www.ti.com/product/TLC5940

## Description

The TLC5940 is a sophisticated 16-channel, constant-current sink LED driver from Texas Instruments. Each channel features individually adjustable 4096-step (12-bit) grayscale PWM brightness control and 64-step constant-current sink dot correction. The dot correction feature adjusts brightness variations between LED channels and compensates for LED manufacturing tolerances. Dot correction data is stored in integrated EEPROM for persistent settings. This makes it ideal for high-quality LED displays, RGB lighting, and applications requiring precise color control.

## Specifications

### Electrical Characteristics
- **Supply Voltage (VCC)**: 3V ~ 5.5V
- **LED Supply Voltage**: Up to 17V
- **Output Current per Channel**: 
  - 0-60mA (when VCC < 3.6V)
  - 0-120mA (when VCC > 3.6V)
- **PWM Resolution**: 12-bit (4096 steps)
- **Dot Correction**: 6-bit (64 steps)
- **Data Transfer Rate**: 30 MHz maximum
- **Operating Temperature**: -40°C to +85°C

### Physical Characteristics  
- **Package**: 28-pin HTSSOP (Heat-enhanced Thin Shrink Small Outline Package)
- **Dimensions**: 9.7mm x 6.4mm
- **Pitch**: 0.65mm
- **Thermal Pad**: Enhanced thermal performance

### Key Features
- 16 independent constant-current sink channels
- 12-bit grayscale PWM control (4096 brightness levels)
- 6-bit dot correction stored in EEPROM
- Serial data interface for easy cascading
- LED open detection (LOD) for fault monitoring
- Thermal error flag (TEF) for overtemperature protection
- Single external resistor sets maximum current for all channels
- Controlled in-rush current

## Pinout Diagram

```
    TLC5940 28-Pin HTSSOP
    ┌─────────────────────┐
OUT0│1                 28│ VCC
OUT1│2                 27│ OUT15
OUT2│3                 26│ OUT14
OUT3│4                 25│ OUT13
OUT4│5                 24│ OUT12
OUT5│6                 23│ OUT11
OUT6│7                 22│ OUT10
OUT7│8                 21│ OUT9
OUT8│9                 20│ OUT8
GND │10                19│ IREF
SCLK│11                18│ VPRG
SIN │12                17│ XERR
SOUT│13                16│ GSCLK
XLAT│14                15│ BLANK
    └─────────────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1-9, 21-27 | OUT0-OUT15 | LED output channels (constant-current sinks) |
| 10  | GND | Ground |
| 11  | SCLK | Serial clock input |
| 12  | SIN | Serial data input |
| 13  | SOUT | Serial data output (for cascading) |
| 14  | XLAT | Data latch input |
| 15  | BLANK | Blank input (output enable) |
| 16  | GSCLK | Grayscale clock input |
| 17  | XERR | Error output (open-drain) |
| 18  | VPRG | Programming voltage select |
| 19  | IREF | Current reference (connect resistor to GND) |
| 20  | DCPRG | Dot correction programming |
| 28  | VCC | Power supply |

## Applications

Common use cases for the TLC5940:
- RGB LED strips and matrices
- High-quality LED displays with color correction
- Architectural and decorative lighting
- Stage and entertainment lighting
- Automotive interior/exterior lighting
- LED backlighting with uniform brightness
- Multi-color status indicators
- Art installations and interactive displays

## Circuit Examples

### Basic RGB LED Control
```
MCU          TLC5940
VCC   ----   VCC (Pin 28)
GND   ----   GND (Pin 10)
D2    ----   SIN (Pin 12)
D3    ----   SCLK (Pin 11)
D4    ----   XLAT (Pin 14)
D5    ----   BLANK (Pin 15)
D6    ----   GSCLK (Pin 16)

IREF (Pin 19) ---- 2.0kΩ resistor ---- GND
Each OUT pin connects to LED cathodes
LED anodes connect to LED supply voltage
```

### Current Setting Calculation
```
IREF Resistor Value = 1.24V / (Desired Current × 31.5)
For 20mA: R = 1.24V / (0.020A × 31.5) = 1.97kΩ (use 2.0kΩ)
For 30mA: R = 1.24V / (0.030A × 31.5) = 1.31kΩ (use 1.3kΩ)
```

## Programming Examples

### Arduino Library Usage
```cpp
#include <Tlc5940.h>

void setup() {
  Tlc.init();
}

void loop() {
  // Set channel 0 to maximum brightness (4095)
  Tlc.set(0, 4095);
  
  // Set channel 1 to half brightness
  Tlc.set(1, 2048);
  
  // Update all channels
  Tlc.update();
  
  delay(1000);
  
  // Clear all channels
  Tlc.clear();
  Tlc.update();
  
  delay(1000);
}
```

### RGB Color Control
```cpp
void setRGB(int ledNum, int red, int green, int blue) {
  Tlc.set(ledNum * 3, red);     // Red channel
  Tlc.set(ledNum * 3 + 1, green); // Green channel  
  Tlc.set(ledNum * 3 + 2, blue);  // Blue channel
  Tlc.update();
}

void loop() {
  setRGB(0, 4095, 0, 0);    // Bright red
  delay(500);
  setRGB(0, 0, 4095, 0);    // Bright green
  delay(500);
  setRGB(0, 0, 0, 4095);    // Bright blue
  delay(500);
}
```

## Technical Notes

Important considerations for the TLC5940:
- **Heat Management**: Use adequate copper area and thermal vias for high-current applications
- **EEPROM Programming**: Dot correction values can be programmed once and stored permanently
- **Cascading**: Multiple TLC5940s can be daisy-chained for more channels
- **Clock Requirements**: Requires both serial clock (SCLK) and grayscale clock (GSCLK)
- **Current Setting**: Single IREF resistor sets maximum current for all 16 channels
- **Error Detection**: Monitor XERR pin for LED open detection and thermal errors

## Tags

led-driver, pwm-control, dot-correction, 16-channel, texas-instruments, eeprom #cabinet-3 #bin-39 #status-available

## Notes

The TLC5940 is considered one of the best LED drivers for applications requiring high-quality color reproduction and brightness uniformity. The integrated EEPROM for dot correction makes it particularly valuable for professional lighting applications where color consistency is critical. Having 8 of these drivers provides capability for controlling 128 individual LED channels with 12-bit precision. The surface-mount package requires PCB assembly but offers excellent thermal performance and compact size. These drivers are excellent for RGB LED projects, color-mixing applications, and any situation where precise LED control with color correction is needed.
