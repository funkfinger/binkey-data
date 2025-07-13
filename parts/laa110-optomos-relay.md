---
type: electronic-component
category: Relays & Switches
subcategory: Solid State Relays
brand: Littelfuse
part_number: LAA110
model: LAA110
description: Dual 1-Form-A OptoMOS solid state relay with optical isolation and MOSFET switching
manufacturer: Littelfuse
package: 8-DIP
size: 0.300" (7.62mm) width
voltage: 350V blocking voltage, 3750V isolation
current: 120mA load current per channel
power: Low power consumption with 5mA input control current
interface: [Optical Isolation, MOSFET Switching]
connectivity: [Through-hole pins]
compatibility: [Digital logic control, Low voltage switching, Isolated switching]
location: [Cabinet-3/Bin-33/Section-J]
quantity: 2
status: available
price_range: $5.00-12.00
datasheet: https://www.littelfuse.com/assetdocs/littelfuse-integrated-circuits-laa110-datasheet
product_url: https://www.littelfuse.com/products/power-semiconductors-control-ics/solid-state-relays/optomos-relays/normally-open-relays/dual-1-form-a/laa110
tags: [solid-state-relay, optomos, optical-isolation, mosfet-switching, littelfuse, cabinet-3, bin-33, status-available]
date_added: 2025-01-13
---

# LAA110 - Dual 1-Form-A OptoMOS Solid State Relay

## Details

- **Location**: Cabinet-3, Bin 33, Section J
- **Category**: Relays & Switches
- **Brand**: Littelfuse
- **Part Number**: LAA110
- **Package**: 8-DIP
- **Quantity**: 2
- **Status**: Available
- **Price Range**: $5.00-12.00
- **Datasheet**: [LAA110 Datasheet](https://www.littelfuse.com/assetdocs/littelfuse-integrated-circuits-laa110-datasheet)
- **Product URL**: [LAA110 Product Page](https://www.littelfuse.com/products/power-semiconductors-control-ics/solid-state-relays/optomos-relays/normally-open-relays/dual-1-form-a/laa110)

## Description

The LAA110 is a dual-channel, 1-Form-A (SPST-NO) solid state relay from Littelfuse's OptoMOS series. It uses patented OptoMOS architecture combining optical isolation with MOSFET switching technology to provide fast, reliable, bounce-free switching in a compact 8-pin DIP package. Each relay contains two independent normally-open switches that can handle both AC and DC loads with excellent isolation between input control and output switching circuits.

## Specifications

### Electrical Characteristics
- **Blocking Voltage (VP)**: 350V maximum
- **Load Current**: 120mA maximum per channel
- **On-Resistance (RON)**: 35Ω typical
- **Isolation Voltage**: 3750V RMS between input and output
- **Input Control Current**: 5mA typical
- **Off-State Leakage**: 1µA maximum
- **Output Capacitance**: 25pF typical

### Switching Characteristics
- **Turn-On Time (ton)**: 3ms typical
- **Turn-Off Time (toff)**: 3ms typical
- **Operating Frequency**: DC to several kHz
- **Contact Configuration**: Dual 1-Form-A (SPST-NO)

### Physical Characteristics  
- **Package**: 8-pin DIP (Dual In-line Package)
- **Dimensions**: 0.300" (7.62mm) width
- **Pin Pitch**: 0.100" (2.54mm)
- **Operating Temperature**: -40°C to +85°C

### Key Features
- Dual independent solid state relays in single package
- Optical isolation between input and output
- MOSFET switching technology (no mechanical contacts)
- Low drive current requirement (5mA)
- High reliability with no contact bounce
- AC/DC switching capability
- Arc-free operation with no snubbing circuits required

## Pinout Diagram

```
    LAA110 8-Pin DIP
    ┌─────────────┐
A1+ │1          8│ A2+
A1- │2          7│ A2-
L1  │3          6│ L2
L1  │4          5│ L2
    └─────────────┘
```

## Pin Descriptions

| Pin | Name | Description |
|-----|------|-------------|
| 1   | A1+  | Relay 1 anode (LED input positive) |
| 2   | A1-  | Relay 1 cathode (LED input negative) |
| 3   | L1   | Relay 1 load terminal 1 |
| 4   | L1   | Relay 1 load terminal 2 |
| 5   | L2   | Relay 2 load terminal 1 |
| 6   | L2   | Relay 2 load terminal 2 |
| 7   | A2-  | Relay 2 cathode (LED input negative) |
| 8   | A2+  | Relay 2 anode (LED input positive) |

## Applications

Common use cases for the LAA110:
- Telecommunications and data communications equipment
- Multiplexers and data acquisition systems
- Electronic switching and I/O subsystems
- Medical equipment (patient/equipment isolation)
- Security systems and access control
- Meter reading systems (watt-hour, water, gas)
- Industrial automation and process control
- Test and measurement instruments

## Circuit Examples

### Basic Load Switching
```
Control Signal 1 ---- Current Limiting Resistor ---- A1+ (Pin 1)
Ground ---- A1- (Pin 2)
Load 1 ---- L1 (Pin 3)
Load 1 Return ---- L1 (Pin 4)

Control Signal 2 ---- Current Limiting Resistor ---- A2+ (Pin 8)
Ground ---- A2- (Pin 7)
Load 2 ---- L2 (Pin 6)
Load 2 Return ---- L2 (Pin 5)
```

### Microcontroller Interface
```
MCU GPIO (5V) ---- 1kΩ resistor ---- A1+ (Pin 1)
MCU Ground ---- A1- (Pin 2)
Switched Load ---- L1 (Pins 3,4) ---- Load Return

Current calculation: I = (5V - 1.2V) / 1kΩ = 3.8mA (adequate for 5mA requirement)
```

### AC Load Switching
```
AC Control Signal ---- Bridge Rectifier ---- Current Limiting ---- A1+/A1-
AC Load ---- L1 (Pins 3,4) ---- AC Return
Note: Observe proper AC safety practices and isolation requirements
```

## Programming Examples

### Arduino Control Example
```cpp
#define RELAY1_PIN 2
#define RELAY2_PIN 3

void setup() {
  pinMode(RELAY1_PIN, OUTPUT);
  pinMode(RELAY2_PIN, OUTPUT);
  
  // Initialize relays OFF
  digitalWrite(RELAY1_PIN, LOW);
  digitalWrite(RELAY2_PIN, LOW);
}

void loop() {
  // Turn on relay 1
  digitalWrite(RELAY1_PIN, HIGH);
  delay(1000);
  
  // Turn on relay 2
  digitalWrite(RELAY2_PIN, HIGH);
  delay(1000);
  
  // Turn off both relays
  digitalWrite(RELAY1_PIN, LOW);
  digitalWrite(RELAY2_PIN, LOW);
  delay(1000);
}
```

### Sequential Switching
```cpp
void sequentialSwitch() {
  // Turn on relays in sequence
  for(int i = 0; i < 2; i++) {
    digitalWrite(RELAY1_PIN + i, HIGH);
    delay(500);
  }
  
  // Turn off relays in reverse sequence
  for(int i = 1; i >= 0; i--) {
    digitalWrite(RELAY1_PIN + i, LOW);
    delay(500);
  }
}
```

## Technical Notes

Important considerations for the LAA110:
- **Current Limiting**: Always use current limiting resistors for LED inputs
- **Input Current**: Requires minimum 5mA to ensure reliable switching
- **Load Voltage**: Do not exceed 350V blocking voltage rating
- **Load Current**: Maximum 120mA per channel - use external switching for higher currents
- **Isolation**: 3750V RMS isolation provides excellent safety margin
- **Heat Dissipation**: Consider thermal management for continuous high-current operation

## Design Considerations

### Input Drive Circuit
- **Resistor Calculation**: R = (VCC - VF) / IF, where VF ≈ 1.2V, IF = 5-10mA
- **Logic Compatibility**: Direct drive from 5V logic with appropriate resistor
- **Protection**: Consider reverse voltage protection for AC drive circuits

### Output Load Considerations
- **Voltage Rating**: Ensure load voltage is within 350V blocking voltage
- **Current Rating**: Maximum 120mA per channel - parallel channels if needed
- **Switching Speed**: 3ms typical - suitable for most control applications
- **Load Type**: Works with resistive, inductive, and capacitive loads

## Advantages Over Mechanical Relays

The OptoMOS technology provides:
- **No Contact Bounce**: Solid state switching eliminates mechanical bounce
- **High Reliability**: No mechanical wear or contact degradation
- **Fast Switching**: Microsecond response vs milliseconds for mechanical
- **Low Drive Power**: 5mA vs 50-100mA for mechanical relay coils
- **Compact Size**: Dual relays in single 8-pin package
- **No EMI/RFI**: Silent switching without electromagnetic interference

## Tags

solid-state-relay, optomos, optical-isolation, mosfet-switching, littelfuse #cabinet-3 #bin-33 #status-available

## Notes

The LAA110 OptoMOS relays represent advanced solid state switching technology that combines the benefits of optical isolation with MOSFET switching performance. Having 2 of these dual-channel relays provides 4 independent switching channels in a compact form factor. These relays are excellent for applications requiring reliable, bounce-free switching with high isolation between control and load circuits. The low drive current requirement makes them ideal for microcontroller-based systems, while the high isolation voltage ensures safety in industrial and medical applications. The OptoMOS technology eliminates many of the limitations of mechanical relays while providing superior performance and reliability.
