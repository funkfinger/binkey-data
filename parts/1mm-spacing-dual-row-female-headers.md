---
type: electronic-component
category: Connectors & Cables
subcategory: Header Connectors
brand: Generic
part_number: Various
model: 1mm Spacing Dual Row Female Headers
description: Fine Pitch 1mm Spacing Dual Row Female Headers for High-Density Connections
manufacturer: Various
package: Through-hole/SMT
size: 1.0mm pitch
voltage: 125V (typical)
current: 1A per pin (typical)
power: Variable
interface: [Through-hole, SMT, Fine-pitch]
connectivity: [PCB, High-density modules, Fine-pitch cables]
compatibility:
  [Fine-pitch male headers, Ribbon cables, High-density applications]
location: [Cabinet-3/Bin-48/Section-B]
quantity: 15
status: available
price_range: $0.50-3.00 per piece
datasheet: Generic fine-pitch connector specifications
product_url: N/A (generic component)
tags:
  [
    headers,
    connectors,
    female,
    dual-row,
    1mm-spacing,
    fine-pitch,
    high-density,
    pcb,
    cabinet-3,
    bin-48,
    status-available,
  ]
date_added: 2025-01-13
---

# 1mm Spacing Dual Row Female Headers

## Details

- **Location**: Cabinet-3, Bin 48, Section B
- **Category**: Connectors & Cables - Header Connectors
- **Type**: 1mm Spacing Dual Row Female Headers
- **Package**: Through-hole/SMT
- **Quantity**: 15
- **Status**: Available
- **Pitch**: 1.0mm fine spacing
- **Gender**: Female (sockets)
- **Configuration**: Dual row

## Description

1mm spacing dual row female headers are fine-pitch PCB connectors designed for high-density applications where space is at a premium. These connectors feature 1.0mm pitch spacing (compared to the standard 2.54mm), allowing for significantly more connections in a smaller footprint. They are commonly used in compact electronics, embedded systems, industrial applications, and anywhere that high pin density is required. The dual row configuration maximizes pin count while maintaining mechanical stability.

## Specifications

### Electrical Characteristics

- **Voltage Rating**: 125V AC/DC (typical)
- **Current Rating**: 1A per pin (typical)
- **Contact Resistance**: <30mΩ (typical)
- **Insulation Resistance**: >500MΩ
- **Dielectric Strength**: 500V AC (typical)

### Physical Characteristics

- **Pitch**: 1.0mm fine spacing
- **Row Spacing**: 1.0mm or 2.0mm (depending on variant)
- **Socket Diameter**: 0.5mm typical
- **Insulator Material**: Black plastic (typically LCP or PBT)
- **Contact Material**: Brass with gold plating
- **Operating Temperature**: -40°C to +85°C
- **Mounting**: Through-hole or SMT

### Key Features

- Fine 1.0mm pitch for high density
- Dual row configuration for maximum pins
- Compact footprint
- Gold-plated contacts for reliability
- Available in through-hole and SMT variants
- Precise manufacturing tolerances
- Low profile design

## Applications

Common use cases and applications for this component:

- Embedded system interfaces
- Industrial control modules
- Compact data acquisition systems
- High-density I/O boards
- Camera module connections
- Display interface boards
- Compact development modules
- Space-constrained applications

## Pin Count Varieties

Common 1mm pitch dual row configurations:

- **2x5 (10-pin)**: Compact interfaces
- **2x8 (16-pin)**: Standard fine-pitch
- **2x10 (20-pin)**: Extended interfaces
- **2x13 (26-pin)**: Ribbon cable standard
- **2x17 (34-pin)**: High-density applications
- **2x20 (40-pin)**: Maximum density GPIO
- **2x25 (50-pin)**: Very high pin count

## Circuit Examples

### High-Density I/O Module

```
Main Controller PCB
    ↓ (1mm pitch connection)
High-Density I/O Module
├── 40 GPIO pins in compact space
├── Power distribution
├── Signal conditioning
└── Compact form factor
```

### Camera Module Interface

```
Main PCB
    ↓ (Fine-pitch connector)
Camera Module
├── Data lines (8-16 bit)
├── Control signals
├── Power rails
└── Compact connection
```

## Installation Examples

### PCB Design Considerations

```cpp
// Fine-pitch design requirements:
// Pitch: 1.0mm spacing
// Via size: 0.15mm (6 mil) minimum
// Trace width: 0.1mm (4 mil) minimum
// Pad size: 0.6mm diameter typical
// Solder mask: 0.05mm clearance

// Manufacturing considerations:
// Requires precise PCB fabrication
// Fine-pitch assembly capabilities
// Controlled impedance for high-speed signals
// Proper solder paste stencil design
```

### Assembly Guidelines

```
Fine-Pitch Assembly Process:
├── Precise component placement
├── Controlled reflow profile
├── Inspection with magnification
├── Rework requires specialized tools
└── Quality control critical
```

## Technical Notes

Important technical considerations, limitations, or special requirements:

- **Manufacturing Precision**: Requires high-precision PCB fabrication
- **Assembly Equipment**: Needs fine-pitch assembly capabilities
- **Soldering**: Requires controlled reflow or skilled hand soldering
- **Inspection**: Magnification required for quality control
- **Rework**: Specialized tools needed for repair
- **Signal Integrity**: Consider crosstalk at fine pitch
- **Mechanical Stress**: More fragile than standard pitch
- **Cost**: Higher cost than standard pitch connectors

## Design Guidelines

Best practices for using 1mm pitch headers:

- **PCB Layout**: Use controlled impedance design
- **Via Management**: Minimize vias near connector
- **Ground Planes**: Provide solid ground reference
- **Decoupling**: Place decoupling capacitors nearby
- **Routing**: Minimize trace length differences
- **Testing**: Include fine-pitch test points
- **Documentation**: Clear assembly drawings required

## Manufacturing Considerations

Factors affecting successful assembly:

- **PCB Tolerance**: ±0.05mm positional accuracy
- **Solder Paste**: Fine-pitch stencil design
- **Component Placement**: High-precision pick-and-place
- **Reflow Profile**: Controlled temperature profile
- **Inspection**: AOI (Automated Optical Inspection)
- **Rework**: Hot air or specialized tools

## Signal Integrity

High-frequency considerations:

- **Crosstalk**: Minimize with proper spacing
- **Impedance**: Control trace impedance
- **Ground**: Provide adequate ground planes
- **Length Matching**: Critical for differential pairs
- **Termination**: Proper signal termination
- **EMI**: Consider shielding requirements

## Quality Control

Inspection and testing requirements:

- **Visual Inspection**: 10x magnification minimum
- **Electrical Test**: Continuity and isolation
- **Mechanical Test**: Insertion/extraction force
- **Environmental**: Temperature cycling
- **Reliability**: Vibration and shock testing

## Compatibility

Compatible with:

- 1mm pitch male headers
- Fine-pitch ribbon cables
- High-density modules
- Compact development boards
- Industrial control systems
- Embedded system modules

## Handling Precautions

Special handling requirements:

- **ESD Protection**: Anti-static handling required
- **Storage**: Controlled environment
- **Transport**: Protective packaging
- **Assembly**: Clean room environment preferred
- **Tools**: Precision assembly tools
- **Training**: Skilled assembly personnel

## Cost Considerations

Economic factors:

- **Higher Unit Cost**: 3-5x standard pitch
- **Assembly Cost**: Specialized equipment
- **Yield Impact**: Lower assembly yields
- **Rework Cost**: Expensive to repair
- **Testing Cost**: Additional inspection
- **Design Cost**: More complex layout

## Tags

headers, connectors, female, dual-row, 1mm-spacing, fine-pitch, high-density, pcb #cabinet-3 #bin-48 #status-available

## Notes

These 1mm spacing dual row female headers are specialized components for high-density applications. They require careful PCB design, precise manufacturing, and skilled assembly. While more expensive and challenging to work with than standard 0.1" pitch headers, they enable significant space savings in compact designs. Essential for embedded systems, industrial controls, and any application where maximum pin density is required. Store carefully and handle with appropriate ESD precautions. Consider the total system cost including design, manufacturing, and assembly when specifying these connectors.
