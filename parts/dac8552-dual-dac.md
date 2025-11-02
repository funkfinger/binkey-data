---
type: electronic-component
category: Analog ICs
subcategory: Digital-to-Analog Converters
brand: Texas Instruments
part_number: DAC8552IDGKR
model: DAC8552IDGKR
description: 16-bit dual channel ultralow glitch voltage output digital-to-analog converter with SPI interface
manufacturer: Texas Instruments
package: VSSOP (DGK) 8-pin
size: 3.0mm x 3.0mm
voltage: 2.7V ~ 5.5V single supply
current: Low power consumption
power: Precision analog output
interface: [SPI Serial Interface, Analog Output]
connectivity: [SPI, Through-hole compatible]
compatibility: [Precision measurement, Audio applications, Instrumentation, Control systems]
location: [Cabinet-3/Bin-37/Section-E]
quantity: 4
status: available
price_range: $3.50-7.00
datasheet: https://www.ti.com/lit/gpn/dac8552
product_url: https://www.ti.com/product/DAC8552
supplier: Texas Instruments
tags: [dac, 16-bit, dual-channel, spi, precision, texas-instruments, cabinet-3, bin-37, status-available]
date_added: 2025-11-02
added_date: 2025-11-02
---

# DAC8552IDGKR - 16-Bit Dual Channel Digital-to-Analog Converter

## Details

- **Location**: Cabinet-3, Bin 37, Section E
- **Category**: Analog ICs
- **Brand**: Texas Instruments
- **Part Number**: DAC8552IDGKR
- **Package**: VSSOP (DGK) 8-pin
- **Quantity**: 4
- **Status**: Available
- **Price Range**: $3.50-7.00
- **Datasheet**: [DAC8552 Datasheet](https://www.ti.com/lit/gpn/dac8552)
- **Product URL**: [TI Product Page](https://www.ti.com/product/DAC8552)

## Description

The DAC8552IDGKR is a 16-bit, dual-channel, ultralow glitch voltage output digital-to-analog converter from Texas Instruments. It features a serial SPI interface for easy integration into microcontroller-based systems. With precision analog outputs and low power consumption, this DAC is ideal for precision measurement, audio applications, instrumentation, and control systems.

## Specifications

### Electrical Characteristics
- **Resolution**: 16-bit
- **Channels**: 2 independent channels
- **Supply Voltage**: 2.7V to 5.5V single supply
- **Output Range**: 0V to VREF (rail-to-rail)
- **Settling Time**: Typical 4µs
- **Glitch Energy**: 0.15nV-s (ultralow)
- **Relative Accuracy**: 4 LSB typical
- **Operating Temperature**: -40°C to +105°C

### Physical Characteristics  
- **Package**: VSSOP (DGK) 8-pin
- **Dimensions**: 3.0mm x 3.0mm
- **Pin Pitch**: 0.65mm
- **Lead Material**: Nickel/Palladium/Gold (NiPdAu)

### Key Features
- Dual independent 16-bit DAC channels
- SPI serial interface
- Ultralow glitch voltage output
- Rail-to-rail output operation
- Single supply operation
- Low power consumption
- Precision voltage output
- RoHS compliant

## Pinout Diagram

```
    DAC8552IDGKR 8-Pin VSSOP
    ┌─────────────┐
GND │1          8│ VDD
CS  │2          7│ VREF
CLK │3          6│ OUTA
DIN │4          5│ OUTB
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | GND  | Ground |
| 2   | CS   | Chip Select (active low) |
| 3   | CLK  | Serial Clock Input |
| 4   | DIN  | Serial Data Input |
| 5   | OUTB | Analog Output Channel B |
| 6   | VREF | Reference Voltage Input |
| 7   | OUTA | Analog Output Channel A |
| 8   | VDD  | Positive Power Supply |

## Applications

Common use cases for the DAC8552IDGKR:
- Precision measurement systems
- Audio signal generation
- Instrumentation and test equipment
- Analog control systems
- Programmable power supplies
- Signal conditioning
- Waveform generation
- Calibration circuits

## Technical Notes

Important considerations for the DAC8552IDGKR:
- **Precision**: 16-bit resolution for high-accuracy applications
- **Ultralow Glitch**: Minimizes transient errors during switching
- **SPI Interface**: Standard serial protocol for easy microcontroller integration
- **Dual Channel**: Two independent DACs in single package
- **Reference Voltage**: External VREF input for flexible output range
- **Decoupling**: Use 0.1µF ceramic capacitor close to power pins
- **Output Buffering**: May require op-amp buffer for low-impedance loads

## Design Considerations

### Power Supply
- Single 2.7V to 5.5V supply
- Bypass capacitors recommended on VDD and VREF
- Ground plane recommended for low noise

### SPI Interface
- Standard SPI protocol compatible with most microcontrollers
- CS must be low during data transfer
- 16-bit data format per channel
- Typical clock frequency: up to 30 MHz

### Output Configuration
- Rail-to-rail output capability
- Output impedance: ~1kΩ typical
- May require buffering for low-impedance loads
- VREF sets output range (0V to VREF)

## Tags

dac, 16-bit, dual-channel, spi, precision, texas-instruments #cabinet-3 #bin-37 #status-available

## Notes

Precision dual DAC suitable for audio, instrumentation, and control applications requiring 16-bit resolution and low glitch performance.

