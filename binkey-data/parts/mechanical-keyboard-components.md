---
type: part
title: Mechanical Keyboard Components & Li-Po Charging Boards
description: Collection of mechanical keyboard components including Kailh switch sockets for hot-swappable keyboards, and Li-Po battery charging boards for portable electronics
manufacturer: Various
part_number: MECH-KEYBOARD-CHARGING-MIXED
category: user-interface
subcategory: mechanical-keyboards
tags: [mechanical-keyboard, kailh, switch-sockets, hot-swap, mx-compatible, lipo-charger, battery-charging, portable-power, usb-charging]
total_quantity: 75+
location: [cabinet-2-bin-40]
price: 8.00
currency: USD
date_added: 2025-01-09
status: active
---

# Mechanical Keyboard Components & Li-Po Charging Boards

## Overview

This collection contains mechanical keyboard components and Li-Po battery charging boards. The primary components are Kailh switch sockets that enable hot-swappable mechanical keyboards, along with various Li-Po charging boards for portable electronics projects.

## Available Components and Locations

### Bin 40 - Mechanical Keyboard & Charging Components (Cabinet 2)

| Type | Compatibility | Features | Voltage | Current | Quantity | Applications |
|------|---------------|----------|---------|---------|----------|--------------|
| Kailh Switch Sockets | MX-compatible | Hot-swap | N/A | N/A | 50+ | Mechanical keyboards |
| Li-Po Charging Boards | 3.7V Li-Po | USB charging | 5V input | 500mA-1A | 25+ | Portable devices |

## Technical Specifications

### Kailh Switch Sockets (Adafruit ID 4958)

#### Mechanical Specifications
- **Compatibility**: MX-compatible mechanical switches (Cherry MX, Kailh, Gateron)
- **Dimensions**: 14.5mm x 5.9mm x 3.0mm (0.6" x 0.2" x 0.1")
- **Material**: High-quality plastic housing with metal contacts
- **Mounting**: PCB through-hole mounting
- **Switch Retention**: Secure mechanical retention of switches
- **Durability**: Designed for repeated switch insertion/removal

#### Electrical Characteristics
- **Contact Material**: Gold-plated contacts for reliable connection
- **Contact Resistance**: Low resistance electrical connection
- **Current Rating**: Suitable for keyboard switch currents (typically <100mA)
- **Voltage Rating**: Suitable for keyboard voltages (typically 3.3V-5V)
- **Insulation**: Proper insulation between contacts
- **EMI**: Minimal electromagnetic interference

#### Installation Requirements
- **PCB Holes**: Requires specific hole pattern in PCB
- **Soldering**: Solder socket to PCB before installing switches
- **Switch Support**: Requires mechanical support (plate or hot glue)
- **Keycap Compatibility**: Works with standard MX keycaps
- **Tool Requirements**: No special tools needed for switch changes

#### Switch Compatibility
- **Cherry MX**: All Cherry MX switch types
- **Kailh**: All Kailh MX-compatible switches
- **Gateron**: All Gateron MX-compatible switches
- **Other Brands**: Most MX-compatible switch manufacturers
- **Switch Types**: Linear, tactile, and clicky switches

### Li-Po Charging Boards

#### Electrical Specifications
- **Input Voltage**: 5V USB (4.5V-5.5V range)
- **Output Voltage**: 4.2V (Li-Po charging voltage)
- **Charging Current**: 500mA to 1A typical (varies by board)
- **Charging Method**: Constant current/constant voltage (CC/CV)
- **Charge Termination**: Automatic termination at full charge
- **Protection**: Overcurrent, overvoltage, and thermal protection

#### Common Charging IC Types
- **TP4056**: Popular 1A Li-Po charger IC
- **MCP73831**: Microchip 500mA charger IC
- **BQ24074**: Texas Instruments advanced charger
- **LTC4054**: Linear Technology precision charger
- **MAX1555**: Maxim USB-powered charger

#### Features and Protection
- **LED Indicators**: Charging and full charge status LEDs
- **USB Connector**: Micro-USB or USB-C input
- **Battery Connector**: JST-PH or wire pads for battery
- **Load Sharing**: Some boards support load sharing
- **Temperature Monitoring**: Thermal protection and monitoring

#### Physical Specifications
- **Size Range**: 15mm x 10mm to 30mm x 20mm typical
- **Mounting**: Through-hole or surface mount components
- **Connectors**: Various USB and battery connector types
- **Indicators**: LED status indicators
- **Test Points**: Access points for voltage monitoring

## Applications

### Mechanical Keyboard Applications
- **Custom Keyboards**: Build custom mechanical keyboards
- **Keyboard Repair**: Repair keyboards with damaged switch sockets
- **Switch Testing**: Test different switch types easily
- **Prototyping**: Prototype keyboard layouts and designs
- **Educational**: Learn about mechanical keyboard construction

### Hot-Swap Benefits
- **Switch Variety**: Try different switch types without soldering
- **Customization**: Customize keyboard feel and sound
- **Maintenance**: Easy switch replacement for worn switches
- **Experimentation**: Experiment with switch combinations
- **Future-Proofing**: Upgrade switches as new types become available

### Li-Po Charging Applications
- **Portable Projects**: Add charging to battery-powered projects
- **IoT Devices**: Rechargeable IoT sensor nodes
- **Wearables**: Charging circuits for wearable electronics
- **Robot Projects**: Rechargeable robot power systems
- **Emergency Backup**: Backup power systems with charging

### Charging Board Features
- **USB Charging**: Convenient USB charging interface
- **Status Indication**: Visual charging status feedback
- **Safety**: Built-in protection circuits
- **Compact Size**: Small form factor for portable devices
- **Easy Integration**: Simple integration into projects

## Design Guidelines

### Keyboard PCB Design
- **Socket Footprint**: Use correct footprint for Kailh sockets
- **Hole Size**: 1.7mm holes for socket pins
- **Pad Size**: Adequate pad size for reliable soldering
- **Mechanical Support**: Design for switch plate or other support
- **Routing**: Route traces away from socket area

### Switch Plate Design
- **Hole Size**: 14mm x 14mm holes for MX switches
- **Material**: 1.5mm steel, aluminum, or FR4
- **Mounting**: Secure mounting to PCB or case
- **Clearance**: Adequate clearance for socket height
- **Stability**: Rigid construction for stable typing

### Charging Circuit Integration
- **Input Protection**: Add input protection for USB connection
- **Battery Protection**: Include battery protection circuit
- **Status Display**: Provide charging status indication
- **Thermal Management**: Consider heat dissipation
- **Connector Selection**: Choose appropriate connectors

## Installation Guidelines

### Kailh Socket Installation
1. **PCB Preparation**: Ensure PCB has correct hole pattern
2. **Socket Placement**: Place socket on PCB with correct orientation
3. **Soldering**: Solder socket pins to PCB pads
4. **Inspection**: Verify good solder joints and alignment
5. **Testing**: Test with switch insertion before final assembly

### Switch Installation
1. **Socket Verification**: Ensure sockets are properly installed
2. **Switch Insertion**: Insert switch into socket until fully seated
3. **Mechanical Support**: Add plate or adhesive for support
4. **Testing**: Test switch operation and electrical connection
5. **Keycap Installation**: Install keycaps on switches

### Charging Board Integration
1. **Power Planning**: Plan power distribution and protection
2. **Connector Wiring**: Wire USB and battery connectors
3. **Status LEDs**: Position status LEDs for visibility
4. **Thermal Design**: Ensure adequate heat dissipation
5. **Testing**: Test charging function before final assembly

## Safety Considerations

### Li-Po Charging Safety
- **Proper Charging**: Use only appropriate Li-Po chargers
- **Temperature Monitoring**: Monitor battery temperature during charging
- **Overcurrent Protection**: Ensure overcurrent protection is functional
- **Fire Safety**: Charge in fireproof container when possible
- **Supervision**: Never leave charging unattended

### Electrical Safety
- **Voltage Limits**: Respect voltage limits of all components
- **Current Limits**: Don't exceed current ratings
- **Short Circuit Protection**: Protect against short circuits
- **Proper Grounding**: Ensure proper grounding of circuits
- **Insulation**: Maintain proper insulation between circuits

### Mechanical Safety
- **Switch Support**: Ensure adequate mechanical support for switches
- **Sharp Edges**: Be careful of sharp edges on metal plates
- **Tool Safety**: Use appropriate tools for assembly
- **Component Handling**: Handle components carefully to avoid damage
- **Workspace Safety**: Maintain clean and organized workspace

## Testing and Quality Control

### Socket Testing
- **Mechanical Test**: Test switch insertion and removal
- **Electrical Test**: Verify electrical continuity
- **Retention Test**: Test switch retention force
- **Durability Test**: Test repeated insertion/removal cycles
- **Visual Inspection**: Check for physical damage

### Charging Board Testing
- **Input Voltage Test**: Verify input voltage range
- **Charging Current Test**: Measure charging current
- **Termination Test**: Verify proper charge termination
- **Protection Test**: Test protection circuits
- **Efficiency Test**: Measure charging efficiency

### System Integration Testing
- **Keyboard Function**: Test complete keyboard operation
- **Charging Function**: Test complete charging system
- **Thermal Test**: Monitor temperatures during operation
- **EMI Test**: Check for electromagnetic interference
- **Reliability Test**: Long-term operation testing

## Troubleshooting

### Socket Issues
- **Poor Contact**: Check solder joints and socket alignment
- **Switch Won't Stay**: Verify socket installation and switch compatibility
- **Intermittent Connection**: Check for contamination or damage
- **Mechanical Binding**: Check for proper clearances
- **Electrical Open**: Verify continuity through socket

### Charging Issues
- **No Charging**: Check input voltage and connections
- **Slow Charging**: Verify charging current settings
- **Overheating**: Check thermal design and current limits
- **No Termination**: Verify charge termination circuit
- **LED Issues**: Check LED connections and current limiting

### System Issues
- **Keyboard Not Working**: Check power and data connections
- **Battery Not Charging**: Verify charging circuit operation
- **Intermittent Operation**: Check all connections and solder joints
- **Performance Issues**: Verify component specifications
- **Compatibility Issues**: Check component compatibility

## Package Contents

- Kailh Switch Sockets for MX-compatible switches (50+ pieces)
- Various Li-Po charging boards (25+ pieces)
- Hot-swappable keyboard socket design
- USB charging capability for portable projects
- Compatible with standard mechanical switches and Li-Po batteries

## Important Notes

- **Switch Compatibility**: Sockets work with MX-compatible switches only
- **Mechanical Support**: Switches require additional mechanical support
- **Li-Po Safety**: Follow proper Li-Po charging and handling procedures
- **Soldering Required**: Sockets must be soldered to PCB
- **Quality**: Use quality components for reliable operation

## Advantages

- **Hot-Swappable**: Easy switch changes without soldering
- **Versatility**: Compatible with wide range of MX switches
- **Convenience**: USB charging for portable projects
- **Safety**: Built-in protection circuits in charging boards
- **Customization**: Enable keyboard customization and experimentation
- **Reliability**: Quality components for long-term use

## Limitations

- **Mechanical Support**: Requires additional support structure
- **PCB Design**: Requires specific PCB footprint design
- **Switch Compatibility**: Limited to MX-compatible switches only
- **Size**: Adds height to keyboard assembly
- **Cost**: Higher cost than permanent switch installation
- **Complexity**: More complex than simple switch installation

## Recommended Applications

- **Custom Keyboards**: Build personalized mechanical keyboards
- **Prototyping**: Prototype keyboard designs and layouts
- **Portable Electronics**: Add rechargeable power to projects
- **Educational**: Learn about keyboard and charging technology
- **Repair**: Repair and upgrade existing keyboards
- **Experimentation**: Experiment with different switches and configurations
