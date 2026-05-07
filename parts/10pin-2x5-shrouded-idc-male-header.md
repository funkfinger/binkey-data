---
type: electronic-component
category: Connectors & Cables
subcategory: IDC Headers
brand: Generic
part_number: 2x5-shrouded-idc-male-header
model: 10-Pin 2x5 Shrouded IDC Male Box Header
description: 10-pin (2x5) shrouded male IDC box header, 2.54mm pitch, through-hole, for Eurorack power and ribbon cable connections
manufacturer: Generic (compatible with On Shore Technology 302-S101)
package: Through-hole, 4-wall shrouded
size: 2.54mm pitch, 2x5 configuration
voltage: 250V
current: 3A per pin
power: N/A
interface: [IDC, Ribbon Cable]
connectivity: [Through-hole pins]
compatibility: [Eurorack power bus, AVR ISP, ribbon cable assemblies, development boards]
location: [Cabinet-3/Bin-43/Section-B]
quantity: 9
status: available
price_range: $0.15-0.30
datasheet: https://www.on-shore.com/wp-content/uploads/2019/02/302-S10X.pdf
product_url: https://www.digikey.com/en/products/detail/on-shore-technology-inc/302-S101/2178422
tags: [idc, shrouded, box-header, male, 2x5, 10-pin, eurorack, ribbon-cable, through-hole, cabinet-3, bin-43, status-available]
date_added: 2026-05-04
added_date: 2026-05-04
---

# 10-Pin 2x5 Shrouded IDC Male Box Header

## Details

- **Location**: Cabinet-3, Bin 43, Section B
- **Category**: Connectors & Cables — IDC Headers
- **Brand**: Generic
- **Part Number**: 2x5-shrouded-idc-male-header
- **Package**: Through-hole, 4-wall shrouded
- **Quantity**: 9
- **Status**: Available
- **Price Range**: $0.15–0.30
- **Datasheet**: [On Shore 302-S101 Datasheet](https://www.on-shore.com/wp-content/uploads/2019/02/302-S10X.pdf)
- **Product URL**: [DigiKey 302-S101](https://www.digikey.com/en/products/detail/on-shore-technology-inc/302-S101/2178422)

## Description

Standard 10-pin (2x5) shrouded male IDC box header with 2.54mm (0.1") pitch. The 4-wall shrouded housing provides mechanical protection, polarization, and alignment for mating IDC ribbon cable connectors — preventing incorrect insertion.

These are the PCB-side connector for Eurorack modular synthesizer power distribution, where the 10-pin format carries ±12V and GND rails. They're also widely used for AVR ISP programming headers, generic ribbon cable interfaces, and any board-to-cable application needing a keyed, strain-relieved connection.

## Specifications

### Electrical Characteristics

- **Voltage Rating**: 250V AC/DC
- **Current Rating**: 3A per pin
- **Contact Material**: Gold-plated brass
- **Insulation**: Glass-filled polyester (UL94 V-0)

### Physical Characteristics

- **Package**: Through-hole, vertical, 4-wall shrouded
- **Pitch**: 2.54mm (0.1")
- **Rows**: 2
- **Positions**: 10 (2x5)
- **Post Length**: 3.10mm (below PCB)
- **Overall Height**: ~9.10mm
- **Operating Temperature**: –40°C to +105°C
- **Mounting Type**: Through Hole

### Key Features

- 4-wall shrouded housing prevents mis-mating
- Polarized — keyed slot ensures correct orientation
- Standard 2.54mm pitch, mates with common IDC ribbon connectors
- Pin 1 indicated by chamfer or triangle on housing
- Compatible with 10-conductor flat ribbon cable and IDC IDC crimp connectors

## Image

*No photo yet — please take a photo of the actual component and add it to `binkey-data/attachments/` as `10pin-2x5-shrouded-idc-male-header.jpg`, then replace this line with `![10-Pin Shrouded IDC Male Header](../attachments/10pin-2x5-shrouded-idc-male-header.jpg)`*

## Pinout Diagram

### Pin Descriptions (2x5 Through-Hole, Eurorack Power Standard)

| Pin | Name   | Function                              |
|-----|--------|---------------------------------------|
| 1   | -12V   | Negative 12V supply (red stripe side) |
| 2   | GND    | Ground                                |
| 3   | GND    | Ground                                |
| 4   | GND    | Ground                                |
| 5   | GND    | Ground                                |
| 6   | GND    | Ground                                |
| 7   | GND    | Ground                                |
| 8   | GND    | Ground                                |
| 9   | +12V   | Positive 12V supply                   |
| 10  | +12V   | Positive 12V supply                   |

> **Note:** Pinout above is the Doepfer/Eurorack power standard. For ISP or other applications, pin assignments differ — always verify with your specific application's schematic. Pin 1 is on the side of the polarizing key notch.

## Applications

- Eurorack modular synthesizer module power connectors (PCB side)
- AVR 10-pin ISP programming headers
- JTAG debug interfaces
- Generic ribbon cable board-to-cable connections
- Development board expansion headers
- Test jig interfaces

## Circuit Examples

### Eurorack Power Connection

```
Bus Board                    Module PCB
-12V ──── Pin 1  ────────── -12V
 GND ──── Pin 2–8 ────────── GND (multiple)
+12V ──── Pin 9–10 ────────── +12V

Ribbon cable: red stripe = Pin 1 = -12V
```

### AVR 10-pin ISP Header

```
Pin 1: MOSI    Pin 2: VCC
Pin 3: NC      Pin 4: GND
Pin 5: RST     Pin 6: GND
Pin 7: SCK     Pin 8: GND
Pin 9: MISO    Pin 10: GND
```

## Technical Notes

- The **red stripe on IDC ribbon cable always goes to Pin 1** — for Eurorack this means -12V. Double-check before powering a module.
- Housing notch/key is on the Pin 1 side — it physically prevents reversed insertion with a keyed cable connector.
- Add a ferrite bead on the +12V and -12V lines on module PCBs to reduce bus noise.
- These are unshrouded on the cable side — use a matching 10-pin IDC female ribbon connector to complete the assembly.

## Tags

#idc #shrouded #box-header #male #2x5 #10-pin #eurorack #ribbon-cable #through-hole #cabinet-3 #bin-43 #status-available

## Notes

Generic part; On Shore Technology 302-S101 and Würth Elektronik 61201021621 are functionally identical drop-in equivalents with the same footprint. All share standard 2.54mm pitch and 4-wall shrouding. The 16-pin Eurorack variant (2x8) is in Cabinet-3, Bin-55.
