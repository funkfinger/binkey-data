---
type: electronic-component
category: Passive Components
subcategory: Resistor Arrays
brand: Sprague
part_number: 914C331X2SR
model: 914C331X2SR
description: 330 Ohm Resistor Array Network in DIP Package
manufacturer: Sprague Electric Company
package: DIP
size: Standard DIP package
voltage: 50V (typical)
current: Variable per element
power: 0.125W per element (typical)
resistance: 330Ω
tolerance: ±5%
interface: [Through-hole]
connectivity: [Common terminal, Individual resistors]
compatibility: [Pull-up networks, Pull-down networks, Termination networks]
location: [Cabinet-2/Bin-5]
quantity: 3
status: available
price_range: Vintage/NOS
datasheet: Sprague Electronic Components 1980 Catalog
product_url: N/A (vintage component)
tags: [resistor-array, network, sprague, vintage, dip, 330-ohm, cabinet-2, bin-5, status-available]
date_added: 2025-01-13
---

# Sprague 914C331X2SR Resistor Array

## Details

- **Location**: Cabinet-2, Bin 5
- **Category**: Passive Components - Resistor Arrays
- **Brand**: Sprague Electric Company
- **Part Number**: 914C331X2SR
- **Package**: DIP (Dual In-line Package)
- **Quantity**: 3
- **Status**: Available
- **Era**: 1980s vintage
- **Datasheet**: Sprague Electronic Components 1980 Catalog

## Description

The Sprague 914C331X2SR is a vintage resistor array network from the 1980s featuring multiple 330-ohm resistors integrated into a single DIP package. This component is part of Sprague's 914 series resistor networks, designed for applications requiring multiple matched resistors such as pull-up/pull-down networks, termination circuits, and voltage dividers. The compact DIP format makes it ideal for PCB mounting and breadboard prototyping.

## Specifications

### Electrical Characteristics
- **Resistance Value**: 330Ω per resistor element
- **Tolerance**: ±5% (typical for this series)
- **Power Rating**: 0.125W per element (typical)
- **Working Voltage**: 50V (typical)
- **Temperature Coefficient**: ±100 ppm/°C (typical)
- **Configuration**: Multiple resistors with common terminal

### Physical Characteristics  
- **Package**: DIP (Dual In-line Package)
- **Mounting**: Through-hole
- **Pin Spacing**: 0.1" (2.54mm) standard DIP spacing
- **Operating Temperature**: 0°C to +70°C (typical)
- **Storage Temperature**: -40°C to +85°C

### Key Features
- Multiple 330Ω resistors in single package
- Common terminal configuration
- Matched resistor elements
- Vintage Sprague quality construction
- DIP package for easy mounting
- Suitable for pull-up/pull-down networks

## Applications

Common use cases and applications for this component:
- Pull-up resistor networks for digital circuits
- Pull-down resistor networks
- Termination networks for buses
- Voltage divider networks
- Current limiting applications
- Vintage computer restoration
- Retro electronics projects

## Pinout Configuration

```
Typical 914 Series Resistor Array Pinout:
(Exact configuration may vary - verify with datasheet)

    914C331X2SR
   ┌─────────────┐
   │1  Common    │ ← All resistors connect to this pin
   │2  R1        │ ← 330Ω to pin 1
   │3  R2        │ ← 330Ω to pin 1  
   │4  R3        │ ← 330Ω to pin 1
   │5  R4        │ ← 330Ω to pin 1
   │6  R5        │ ← 330Ω to pin 1
   │7  R6        │ ← 330Ω to pin 1
   │8  R7        │ ← 330Ω to pin 1
   │9  R8        │ ← 330Ω to pin 1
   └─────────────┘
```

*Note: Verify exact pinout with original Sprague datasheet*

## Circuit Examples

### Pull-up Network Configuration
```
+5V ---- Pin 1 (Common)
         |
         ├── Pin 2 ---- Digital Input 1
         ├── Pin 3 ---- Digital Input 2
         ├── Pin 4 ---- Digital Input 3
         └── Pin 5 ---- Digital Input 4
         
Each input gets 330Ω pull-up to +5V
```

### Pull-down Network Configuration
```
GND ---- Pin 1 (Common)
         |
         ├── Pin 2 ---- Digital Input 1
         ├── Pin 3 ---- Digital Input 2
         ├── Pin 4 ---- Digital Input 3
         └── Pin 5 ---- Digital Input 4
         
Each input gets 330Ω pull-down to GND
```

## Programming Examples

### Arduino Pull-up Network Usage
```cpp
// Using 914C331X2SR as pull-up network
// Connect common pin to +5V
// Connect individual pins to digital inputs

void setup() {
  // Configure pins as inputs (external pull-ups via 914C331X2SR)
  pinMode(2, INPUT);  // Connected to resistor array pin 2
  pinMode(3, INPUT);  // Connected to resistor array pin 3
  pinMode(4, INPUT);  // Connected to resistor array pin 4
  pinMode(5, INPUT);  // Connected to resistor array pin 5
  
  Serial.begin(9600);
}

void loop() {
  // Read inputs with external pull-up network
  Serial.print("Input 1: "); Serial.println(digitalRead(2));
  Serial.print("Input 2: "); Serial.println(digitalRead(3));
  Serial.print("Input 3: "); Serial.println(digitalRead(4));
  Serial.print("Input 4: "); Serial.println(digitalRead(5));
  
  delay(1000);
}
```

## Technical Notes

Important technical considerations, limitations, or special requirements:
- **Vintage Component**: This is a 1980s-era component with limited availability
- **Matched Elements**: Resistors within the array are typically well-matched
- **Power Derating**: Consider power dissipation when using multiple elements simultaneously
- **Verify Pinout**: Always verify pinout with original Sprague documentation
- **Temperature Stability**: Good temperature stability typical of Sprague components
- **Replacement**: Modern equivalents available from Bourns, CTS, and other manufacturers
- **Value Verification**: Test individual resistor values before use in critical applications

## Historical Context

Sprague Electric Company was a major American electronic component manufacturer founded in 1926. The 914 series resistor arrays were part of their comprehensive line of passive components during the 1980s. Sprague was known for high-quality capacitors and resistors used in military, industrial, and consumer electronics. The company was eventually acquired by Vishay in the 1990s.

## Tags

resistor-array, network, sprague, vintage, dip, 330-ohm #cabinet-2 #bin-5 #status-available

## Notes

These are genuine vintage Sprague resistor arrays from the 1980s. While functional equivalents are available from modern manufacturers, these original Sprague components represent quality construction from a respected American electronics manufacturer. Perfect for vintage computer restoration projects or retro electronics builds where authenticity matters. Test individual elements before use as vintage components may have drifted from original specifications.
