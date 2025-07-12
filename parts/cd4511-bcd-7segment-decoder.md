---
type: electronic-component
category: Logic ICs
subcategory: Decoders/Drivers
brand: Texas Instruments
part_number: CD4511
model: CD4511
description: CMOS BCD to 7-segment latch/decoder/driver IC
manufacturer: Texas Instruments
package: 16-DIP
size: 0.300" (7.62mm) width
voltage: 3V ~ 18V
current: 1.5mA per segment output
power: Low power consumption
interface: [Digital Logic, BCD Input, 7-Segment Output]
connectivity: [Through-hole pins]
compatibility: [CMOS Logic, Common-cathode 7-segment displays]
location: [Cabinet-3/Bin-35/Section-A]
quantity: 40
status: available
price_range: $0.50-1.50
datasheet: https://www.ti.com/lit/ds/symlink/cd4511b.pdf
product_url: https://www.ti.com/product/CD4511B
tags:
  [
    logic-ic,
    decoder,
    driver,
    bcd-decoder,
    7-segment,
    cmos,
    texas-instruments,
    cabinet-3,
    bin-35,
    status-available,
  ]
date_added: 2025-01-12
---

# CD4511 - BCD to 7-Segment Decoder/Driver

## Details

- **Location**: Cabinet-3, Bin 35, Section A
- **Category**: Logic ICs
- **Brand**: Texas Instruments
- **Part Number**: CD4511
- **Package**: 16-DIP
- **Quantity**: 40
- **Status**: Available
- **Price Range**: $0.50-1.50
- **Datasheet**: [CD4511B Datasheet](https://www.ti.com/lit/ds/symlink/cd4511b.pdf)
- **Product URL**: https://www.ti.com/product/CD4511B

## Description

The CD4511 is a CMOS BCD to 7-segment latch/decoder/driver IC designed to drive common-cathode 7-segment LED displays directly from a binary-coded decimal (BCD) input. This versatile IC converts 4-bit BCD data into the appropriate signals to display digits 0-9 on a 7-segment display, making it ideal for digital clocks, counters, and numeric displays.

## Specifications

### Electrical Characteristics

- **Operating Voltage**: 3V ~ 18V
- **Maximum Clock Frequency**: Up to 8 MHz
- **Output Current**: 1.5mA per segment output (low level)
- **Power**: Low power CMOS consumption
- **Interface**: BCD Input, 7-Segment Output
- **Technology**: CMOS

### Physical Characteristics

- **Package**: 16-DIP (0.300", 7.62mm)
- **Dimensions**: Standard 16-pin DIP package
- **Operating Temperature**: -55°C ~ 125°C
- **Mounting Type**: Through Hole

### Key Features

- BCD to 7-segment decoder/driver with latch
- Drives common-cathode 7-segment displays directly
- Built-in latch function for stable display
- Blanking input for display control
- Lamp test input for testing all segments
- CMOS technology for low power consumption
- Wide operating voltage range (3V-18V)

## Image

_Image needed - Standard 16-pin DIP package IC with CD4511 markings on top. Consider taking a photo of actual component for documentation._

## Pinout Diagram

### Pin Descriptions (16-DIP Package)

| Pin | Name | Function                          |
| --- | ---- | --------------------------------- |
| 1   | e    | Segment E output                  |
| 2   | d    | Segment D output                  |
| 3   | DP   | Decimal Point output              |
| 4   | c    | Segment C output                  |
| 5   | g    | Segment G (middle bar) output     |
| 6   | b    | Segment B output                  |
| 7   | a    | Segment A (top bar) output        |
| 8   | VSS  | Ground                            |
| 9   | f    | Segment F (upper left bar) output |
| 10  | A0   | BCD input bit 0 (LSB)             |
| 11  | A1   | BCD input bit 1                   |
| 12  | A2   | BCD input bit 2                   |
| 13  | A3   | BCD input bit 3 (MSB)             |
| 14  | LT   | Lamp Test input (active low)      |
| 15  | BI   | Blanking Input (active low)       |
| 16  | VDD  | Positive power supply             |

## Applications

Common use cases and applications for this component:

- Digital clocks and timers
- Frequency counters and digital meters
- Numeric displays for microcontroller projects
- LED 7-segment display drivers
- BCD data visualization
- Calculator displays
- Digital panel meters
- Process control displays

## Circuit Examples

### Basic 7-Segment Display Driver

```
VDD (Pin 16) ---- +5V to +18V
VSS (Pin 8)  ---- Ground
A0-A3 (Pins 10-13) -- BCD input from microcontroller
a-g, DP (Pins 1-7, 9) -- To 7-segment display segments
LT (Pin 14) ----- Lamp test control (tie high if not used)
BI (Pin 15) ----- Blanking control (tie high if not used)
```

### Microcontroller Interface

```
Arduino/MCU BCD Output -> CD4511 BCD Input (A0-A3)
CD4511 Segment Outputs -> Current limiting resistors -> 7-segment display
Common cathode of display -> Ground
```

## Technical Notes

Important technical considerations and features:

- Designed specifically for common-cathode 7-segment displays
- Built-in latch holds display data stable until updated
- BCD inputs A0-A3 represent binary values 0-15, but only 0-9 produce valid outputs
- Invalid BCD codes (10-15) result in blank display
- Lamp Test (LT) input tests all segments when pulled low
- Blanking Input (BI) blanks the display when pulled low
- Output current is sufficient to drive most LED displays directly
- Use current-limiting resistors (typically 220-470Ω) for LED segments
- Proper power supply decoupling recommended near VDD/VSS pins

## Tags

logic-ic, decoder, driver, bcd-decoder, 7-segment, cmos, texas-instruments #cabinet-3 #bin-35 #status-available

## Notes

The CD4511 is a very popular and widely used CMOS IC for driving 7-segment displays. It simplifies microcontroller projects by reducing the number of pins needed to control numeric displays from 7+ pins down to just 4 BCD input pins. The built-in latch function is particularly useful for maintaining stable displays while the microcontroller is busy with other tasks. This IC is essential for any project requiring numeric LED displays.
