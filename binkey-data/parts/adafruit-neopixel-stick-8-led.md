---
type: electronic-component
category: LED/Optoelectronics
subcategory: Addressable LED Module
brand: Adafruit Industries LLC
part_number: 1426
model: NeoPixel Stick - 8 x 5050 RGB LED
led_type: WS2812/SK6812
led_count: 8
led_size: 5050
colors: [Red, Green, Blue]
interface: Serial (Shift Register)
voltage: 5V
current_per_led: 60mA
total_current: 480mA
dimensions: 51.10mm x 10.20mm
weight: 3g
mounting: User Defined
addressable: true
location: [Cabinet-1/Bin-33]
quantity: 20+
status: available
price_range: $6
tags: [neopixel, addressable-led, rgb-led, ws2812, sk6812, led-strip, led-module, adafruit, serial-interface, 5050-led]
---

# Adafruit NeoPixel Stick - 8 x 5050 RGB LED with Integrated Drivers

## Details

- **Location**: Cabinet-1, Bin 33
- **Category**: LED/Optoelectronics
- **Type**: Addressable LED Module
- **LED Type**: WS2812/SK6812 5050 RGB LEDs
- **Brand**: Adafruit Industries LLC
- **Part Number**: 1426
- **Quantity**: 20+
- **Product URL**: https://www.digikey.com/en/products/detail/adafruit-industries-llc/1426/5395892

## Description

The NeoPixel Stick is a linear array of 8 individually addressable RGB LEDs in a compact stick format. Each LED is a 5050 package containing red, green, and blue LEDs that can be controlled individually to create any color. The stick uses the popular WS2812/SK6812 protocol for serial communication, making it easy to chain multiple sticks together or integrate with microcontrollers.

## Specifications

- **LED Count**: 8 individually addressable RGB LEDs
- **LED Type**: WS2812 or SK6812 5050 package
- **Colors**: Full RGB spectrum (Red, Green, Blue)
- **Interface**: Serial (Shift Register) - Single data line
- **Operating Voltage**: 5V DC
- **Current per LED**: ~60mA at full brightness white
- **Total Current**: ~480mA at full brightness (all LEDs white)
- **Data Rate**: 800kHz
- **Protocol**: WS2812/NeoPixel compatible
- **Mounting**: User defined (breadboard friendly)

## Dimensions

- **Board Size**: 51.10mm L x 10.20mm W (2.01" x 0.40")
- **Weight**: ~3g
- **LED Spacing**: ~6.35mm center-to-center
- **Form Factor**: Linear stick arrangement

## Image

![Adafruit NeoPixel Stick - 8 x 5050 RGB LED](../attachments/1426-adafruit-neopixel-stick-8-led.jpg)

## Features

- **Individually Addressable**: Each LED can be controlled independently
- **Full Color Range**: 24-bit color depth (8-bit per channel)
- **Chainable**: Multiple sticks can be connected in series
- **Single Data Line**: Only requires one digital pin for control
- **Breadboard Friendly**: 0.1" pitch headers for easy prototyping
- **Reverse Polarity Protection**: Built-in protection circuitry
- **Integrated Drivers**: No external drivers required
- **Arduino Compatible**: Works with Adafruit NeoPixel library

## Connectivity

- **Data Input**: Single digital data line (DIN)
- **Data Output**: Chainable data output (DOUT)
- **Power**: 5V and Ground connections
- **Interface**: 3-wire connection (5V, GND, Data)

## Programming Support

- **Arduino IDE**: Full support with Adafruit NeoPixel library
- **CircuitPython**: Native support for NeoPixel control
- **MicroPython**: Community libraries available
- **Raspberry Pi**: Python libraries available
- **FastLED**: Alternative Arduino library support

## Power Requirements

- **Operating Voltage**: 5V DC (4.5V - 5.5V range)
- **Current Draw**: 
  - Idle: ~1mA per LED
  - Full brightness white: ~60mA per LED
  - Maximum total: ~480mA (all 8 LEDs at full white)
- **Power Supply**: Recommend 1A+ supply for full brightness operation

## Control Protocol

- **Data Format**: 24-bit RGB data per LED (8-bit per color)
- **Timing**: 800kHz data rate with specific timing requirements
- **Reset**: 50μs+ low signal to latch data
- **Cascading**: Data flows through each LED to enable chaining

## Applications

- **LED Strips**: Building custom addressable LED arrays
- **Lighting Effects**: Color-changing accent lighting
- **Indicators**: Multi-color status displays
- **Art Projects**: Interactive light installations
- **Wearables**: Costume and fashion lighting
- **Prototyping**: Testing addressable LED concepts

## Tags

neopixel, addressable-led, rgb-led, ws2812, sk6812, led-strip, led-module, adafruit, serial-interface, 5050-led

## Notes

Perfect for projects requiring individually controllable RGB LEDs. The stick format makes it ideal for creating linear light displays or as building blocks for larger LED arrays. Each LED can display over 16 million colors with smooth dimming capabilities. The single data line interface makes it easy to control from any microcontroller with minimal pin usage. Can be chained with other NeoPixel products to create larger displays.
