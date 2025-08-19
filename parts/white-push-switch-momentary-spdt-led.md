---
type: electronic-component
category: Switches & Buttons
subcategory: Push Button Switches
brand: Generic
part_number: A0303
model: White Push Switch Momentary SPDT PCB Pins LED Mount
description: White momentary push button switch with SPDT contacts, PCB pin mounting, and integrated LED mount for illuminated operation
manufacturer: Generic
package: PCB Mount
size: Standard push button form factor
voltage: 12V DC (typical)
current: 100mA (typical)
power: 1.2W
interface: [PCB Mount, LED Compatible]
connectivity: [PCB, LED, Control circuits]
compatibility: [Arduino, Raspberry Pi, General electronics, LED indicators, Control panels]
location: [Cabinet-5/Bin-23/Section-A]
quantity: 8
status: available
price_range: $1.09 per piece
tags: [switches, buttons, push-button, momentary, spdt, led-mount, white, pcb-mount, cabinet-5, status-available]
date_added: 2025-08-06
---

# White Push Switch Momentary SPDT PCB Pins LED Mount

## Overview

White momentary push button switch with SPDT (Single Pole Double Throw) contacts and integrated LED mounting capability. This switch combines user input functionality with visual feedback through an integrated LED mount, making it ideal for control panels and user interfaces where both switching and indication are required.

## Location

**Cabinet-5, Bin 23, Section A** - Push Button Switches

## Images

![White Push Switch Momentary SPDT LED Mount](../attachments/white-push-switch-momentary-spdt-led.jpg)

## Specifications

### Physical Specifications
- **Button Color**: White actuator cap
- **Body**: Black plastic housing
- **Mounting**: PCB pin mounting
- **LED Mount**: Integrated LED mounting capability
- **Contact Type**: SPDT (Single Pole Double Throw)
- **Operation**: Momentary (spring return)
- **Actuator**: Round white push button

### Electrical Specifications
- **Contact Configuration**: SPDT - 1 common, 1 NO, 1 NC
- **Voltage Rating**: 12V DC (typical)
- **Current Rating**: 100mA (typical)
- **Power Rating**: 1.2W maximum
- **Contact Resistance**: <100mΩ
- **Insulation Resistance**: >100MΩ
- **Operating Temperature**: -20°C to +70°C

### Mechanical Specifications
- **Operating Force**: 200-400gf (typical)
- **Travel Distance**: 1-2mm (typical)
- **Life Expectancy**: 50,000+ operations
- **Bounce Time**: <10ms (typical)
- **LED Compatibility**: Standard 3mm or 5mm LEDs

## Pin Configuration

### SPDT Contact Layout
The switch has SPDT contacts with the following configuration:

```
Common (C) ---- Normally Open (NO)
     |
     +--------- Normally Closed (NC)
```

### Pin Functions
- **Common (C)**: Main switching contact
- **Normally Open (NO)**: Closed when button is pressed
- **Normally Closed (NC)**: Open when button is pressed
- **LED Pins**: Separate pins for LED connection (+ and -)

### Typical Wiring
- **Momentary High**: Connect signal to NO, common to input
- **Momentary Low**: Connect signal to NC, common to input
- **LED**: Connect LED between LED pins with appropriate current limiting resistor

## Applications

### Control Panels
- **Start/Stop Buttons**: Machine control with status indication
- **Mode Selection**: Function switching with LED feedback
- **Emergency Controls**: Safety switches with visual confirmation
- **User Interfaces**: Interactive controls with status display

### Electronic Projects
- **Arduino Controls**: Digital input with LED status indication
- **Raspberry Pi Interfaces**: GPIO input with visual feedback
- **Microcontroller Projects**: User input with integrated indication
- **Automation Systems**: Control switches with status LEDs

### Industrial Applications
- **Machine Controls**: Operator interface switches
- **Process Control**: Manual override switches with indication
- **Safety Systems**: Emergency stop switches with LED status
- **Test Equipment**: Manual control switches with visual feedback

### Consumer Electronics
- **Audio Equipment**: Function switches with LED indicators
- **Gaming Controllers**: Action buttons with illumination
- **Appliance Controls**: User interface switches
- **Automotive**: Dashboard switches with LED indication

## Circuit Examples

### Basic SPDT Switch (Arduino)
```cpp
const int switchCommon = 2;
const int switchNO = 3;
const int ledPin = 13;

void setup() {
  pinMode(switchCommon, INPUT_PULLUP);
  pinMode(switchNO, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Read switch state (pressed when NO is connected to Common)
  bool switchPressed = (digitalRead(switchCommon) == digitalRead(switchNO));
  
  if (switchPressed) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Switch pressed!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(50);
}
```

### LED Integrated Switch
```cpp
const int switchPin = 2;
const int switchLED = 3;  // PWM pin for LED brightness control

void setup() {
  pinMode(switchPin, INPUT_PULLUP);
  pinMode(switchLED, OUTPUT);
}

void loop() {
  if (digitalRead(switchPin) == LOW) {
    // Switch pressed - full brightness
    analogWrite(switchLED, 255);
  } else {
    // Switch not pressed - dim indication
    analogWrite(switchLED, 50);
  }
}
```

### Debounced Switch with LED Status
```cpp
const int switchPin = 2;
const int ledPin = 3;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;
bool switchState = false;
bool lastSwitchReading = false;
bool ledState = false;

void setup() {
  pinMode(switchPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  bool reading = !digitalRead(switchPin);  // Invert for active high logic
  
  if (reading != lastSwitchReading) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != switchState) {
      switchState = reading;
      
      if (switchState) {
        ledState = !ledState;  // Toggle LED on each press
        digitalWrite(ledPin, ledState);
      }
    }
  }
  
  lastSwitchReading = reading;
}
```

## LED Integration

### LED Mounting
- **LED Size**: Compatible with 3mm or 5mm LEDs
- **Mounting**: LED fits into integrated mount in switch body
- **Wiring**: Separate LED pins for power connection
- **Current Limiting**: Requires appropriate resistor for LED protection

### LED Circuit Design
```
VCC ----[Resistor]----[LED Anode]----[LED Cathode]----GND
                           |              |
                      LED Pin (+)    LED Pin (-)
```

### Resistor Calculation
For 5V supply with standard LED (2V forward voltage, 20mA current):
- Resistor = (5V - 2V) / 0.02A = 150Ω
- Use standard 150Ω or 220Ω resistor

## PCB Design Considerations

### Footprint
- **Pin Spacing**: Standard switch pin spacing
- **LED Pins**: Additional pins for LED connection
- **Mounting**: Through-hole PCB mounting
- **Clearance**: Allow space for button actuation

### Layout Guidelines
- **Pull-up Resistors**: 10kΩ for digital inputs
- **Debounce Capacitors**: 100nF across switch contacts
- **LED Current Limiting**: Appropriate resistor values
- **ESD Protection**: Consider protection diodes

### Mechanical Considerations
- **Panel Cutout**: Appropriate hole size for switch body
- **Actuator Access**: Ensure button can be pressed fully
- **LED Visibility**: Position for optimal light transmission
- **Mounting Security**: Proper mechanical support

## Installation

### PCB Mounting
1. **Insert Switch**: Place switch in PCB holes
2. **Solder Contacts**: Solder all switch pins
3. **Install LED**: Insert LED into switch mount
4. **Solder LED**: Connect LED pins with current limiting resistor
5. **Test Operation**: Verify both switching and LED function

### Panel Integration
1. **Cut Opening**: Create appropriate hole in panel
2. **Mount Switch**: Secure switch in panel opening
3. **Wire Connections**: Connect switch and LED circuits
4. **Test Function**: Verify operation and LED illumination

## Troubleshooting

### Common Issues
- **No Switching**: Check solder joints and connections
- **LED Not Working**: Verify LED polarity and current limiting resistor
- **Intermittent Operation**: Check for mechanical wear or contamination
- **LED Too Dim/Bright**: Adjust current limiting resistor value

### Testing Procedures
- **Continuity Test**: Verify SPDT contact operation
- **LED Test**: Check LED function with appropriate voltage/current
- **Mechanical Test**: Verify smooth button operation
- **Electrical Test**: Measure contact resistance and insulation

## Sourcing Information

### Supplier
- **Tayda Electronics**: Primary supplier
- **Part Number**: A0303
- **Price**: $1.09 per piece
- **URL**: https://www.taydaelectronics.com/white-push-switch-momentary-spdt-pcb-pins-led-mount.html

### Alternative Sources
- **DigiKey**: Various manufacturers available
- **Mouser**: Multiple options with LED integration
- **Amazon**: Illuminated switch assortments
- **AliExpress**: Low-cost alternatives

### Specifications to Match
- **SPDT contact configuration**
- **Momentary operation**
- **LED mounting capability**
- **PCB pin mounting**
- **White actuator color**

## Storage and Handling

### Storage Recommendations
- **Dry Environment**: Prevent corrosion of contacts
- **Anti-Static**: Use anti-static packaging if needed
- **Organization**: Keep with other illuminated switches
- **Temperature**: Room temperature storage

### Handling Tips
- **Gentle Installation**: Don't force into PCB holes
- **LED Care**: Handle LEDs carefully to avoid damage
- **Soldering**: Use appropriate temperature and time
- **Testing**: Test both switch and LED before final installation

## Tags

switches, buttons, push-button, momentary, spdt, led-mount, white, illuminated, pcb-mount, control-panel #cabinet-5 #status-available

## Notes

These white push switches with integrated LED mounts provide both switching functionality and visual feedback in a single component. The SPDT contact configuration offers flexibility in circuit design, while the LED mount enables status indication or user guidance. Store in Cabinet-5, Bin 23, Section A for easy access during control panel and user interface projects. The combination of switching and indication makes these switches ideal for applications where user feedback is important. Consider the LED current requirements when designing circuits to ensure proper operation and longevity.
