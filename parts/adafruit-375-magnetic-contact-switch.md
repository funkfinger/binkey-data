---
type: electronic-component
category: Sensors & Transducers
subcategory: Magnetic Sensors
brand: Adafruit
part_number: 375
model: Magnetic Contact Switch (Door Sensor)
description: Reed switch magnetic contact sensor for door/drawer detection
manufacturer: Adafruit Industries
package: ABS Plastic Enclosure
size: 29mm x 15.2mm x 9mm (each side)
voltage: 200V DC max
current: 100mA max
power: N/A
interface: [Normally Open Reed Switch]
connectivity: [Wire Leads]
compatibility: [Door Sensors, Security Systems, IoT Projects]
location: [Cabinet-5/Bin-31]
quantity: 1
status: available
price_range: $3-4
datasheet: N/A
product_url: https://www.adafruit.com/product/375
tags:
  [
    magnetic-sensor,
    reed-switch,
    door-sensor,
    security,
    proximity,
    adafruit,
    normally-open,
    cabinet-5,
    bin-31,
    status-available,
  ]
date_added: 2025-01-23
---

# Adafruit 375 Magnetic Contact Switch (Door Sensor)

## Details

- **Location**: Cabinet-5, Bin 31
- **Category**: Sensors & Transducers
- **Brand**: Adafruit Industries
- **Part Number**: 375
- **Package**: ABS Plastic Enclosure
- **Quantity**: 1
- **Status**: Available
- **Price Range**: $3-4
- **Product URL**: https://www.adafruit.com/product/375

## Description

This magnetic contact switch is essentially a reed switch encased in an ABS plastic shell, designed for detecting when doors, drawers, or other objects are opened or closed. The sensor consists of two parts: the reed switch unit and a separate magnet. Normally the reed switch is 'open' (no electrical connection between the two wires), but when the magnet comes within 13mm (0.5") of the switch, the reed closes and completes the circuit. This makes it ideal for security systems, IoT door monitoring, and automation projects.

## Specifications

### Electrical Characteristics

- **Switch Type**: Normally Open Reed Switch
- **Rated Current**: 100mA maximum
- **Rated Voltage**: 200V DC maximum
- **Contact Resistance**: Low (typical reed switch characteristics)
- **Operating Distance**: 15mm maximum (13mm typical)
- **Switch Life**: High (typical reed switch longevity)

### Physical Characteristics

- **Enclosure Material**: ABS Plastic
- **Box Size (each side)**: 29mm x 15.2mm x 9mm
- **Cable Length**: ~29cm (~11.4 inches)
- **Wire Ends**: Premium wire ends for easy breadboarding
- **Mounting**: Tabs and screws included
- **Color**: White ABS housing

### Key Features

- Two-piece design (reed switch + magnet)
- Normally open contact configuration
- ABS plastic protective housing
- Premium wire ends for breadboard compatibility
- Mounting hardware included
- Long cable length for flexible installation
- Reliable magnetic proximity detection
- No power required for magnetic operation

## Image

_Image needed: White ABS plastic magnetic contact switch with two components - reed switch unit and separate magnet, showing mounting tabs and wire leads._

**Visual Description**: This magnetic contact switch consists of two white ABS plastic components. The larger component houses the reed switch with two wire leads extending from it, while the smaller component contains the magnet. Both pieces have mounting tabs with screw holes for secure installation on doors, drawers, or other surfaces.

## Applications

Common use cases and applications for this component:

- Door and window security systems
- Drawer and cabinet monitoring
- IoT home automation projects
- Alarm system triggers
- Access control systems
- Garage door position sensing
- Mailbox notification systems
- Refrigerator/freezer door alarms
- Workshop tool cabinet monitoring
- Smart home door/window sensors

## Circuit Examples

### Basic Door Sensor Circuit

```
Reed Switch ---- Pull-up Resistor (10kΩ) ---- VCC (3.3V/5V)
     |                                           |
     +-------------------------------------------|
     |                                           |
Digital Input Pin                            Ground
```

### Arduino Integration

```cpp
const int doorPin = 2;
bool doorState = false;

void setup() {
  pinMode(doorPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  doorState = digitalRead(doorPin);
  if (doorState == LOW) {
    Serial.println("Door CLOSED");
  } else {
    Serial.println("Door OPEN");
  }
  delay(100);
}
```

## Technical Notes

Important technical considerations and usage tips:

- Reed switches are normally open - circuit closes when magnet approaches
- Maximum operating distance is 15mm, but 13mm is more reliable
- Can be mounted with included screws or double-sided foam tape
- Wire polarity doesn't matter for the reed switch
- Avoid strong magnetic fields that could damage the reed switch
- ABS housing provides good protection in indoor environments
- Premium wire ends make breadboard connections easy
- Consider debouncing in software for clean digital readings
- Reed switches can handle both AC and DC circuits within ratings
- Long cable allows flexible positioning of sensor components

## Tags

magnetic-sensor, reed-switch, door-sensor, security, proximity, adafruit, normally-open #cabinet-5 #bin-31 #status-available

## Notes

This Adafruit magnetic contact switch is a reliable and easy-to-use sensor perfect for door and drawer monitoring applications. The two-piece design allows flexible installation where the reed switch can be mounted on a fixed surface (like a door frame) and the magnet on the moving part (like the door itself). The 29cm cable length provides good flexibility for routing wires, and the premium wire ends make it breadboard-friendly for prototyping. The ABS plastic housing protects the sensitive reed switch while the included mounting hardware makes installation straightforward. Ideal for security systems, IoT projects, and home automation applications where reliable open/closed detection is needed.
