---
type: electronic-component
category: Power Semiconductors
subcategory: Power Transistors
description: Collection of power transistors including Darlington and MOSFET types
functions: [power-switching, amplification, motor-control, power-conversion]
transistor_types: [darlington-bjt, n-channel-mosfet, power-mosfet]
packages: [TO-220, TO-247, TO-3P]
part_numbers: [TIP120, IRF840PBF, FQPF9N90CT]
location: [Cabinet-3/Bin-24]
quantity: 15+
status: available
price_range: $1.00-8.00
tags: [power-transistor, tip120, irf840, fqpf9n90ct, darlington, mosfet, switching, motor-control]
---

# Power Transistors Collection

## Details

- **Location**: Cabinet-3, Bin 24
- **Category**: Power Semiconductors
- **Type**: Power transistors for switching and amplification
- **Total Quantity**: 15+ transistors
- **Applications**: Motor control, power switching, amplification, power supplies

## Description

Collection of high-power transistors including Darlington bipolar junction transistors and power MOSFETs. These devices are designed for applications requiring high current and voltage handling capabilities, such as motor control, power switching, and linear amplification in power supplies.

## Transistor Types

### TIP120 - NPN Darlington Power Transistor
- **Type**: NPN Darlington BJT
- **Manufacturer**: ON Semiconductor, STMicroelectronics
- **Package**: TO-220
- **Quantity**: 5+ pieces

#### Electrical Specifications
- **VCEO**: 60V (Collector-Emitter voltage)
- **IC**: 5A continuous collector current
- **IC(peak)**: 8A peak collector current
- **hFE**: 1000 minimum current gain
- **VCE(sat)**: 2V maximum saturation voltage
- **Power Dissipation**: 65W (with heat sink)

#### Features
- **Darlington Configuration**: Built-in current amplification
- **High Current Gain**: Minimum 1000 hFE
- **Thermal Protection**: Safe operating area protection
- **Complementary Types**: TIP125 (PNP), TIP121/122 (higher voltage)

### IRF840PBF - N-Channel Power MOSFET
- **Type**: N-Channel Enhancement Mode MOSFET
- **Manufacturer**: Vishay, Infineon
- **Package**: TO-220AB
- **Quantity**: 5+ pieces

#### Electrical Specifications
- **VDS**: 500V (Drain-Source voltage)
- **ID**: 8A continuous drain current
- **ID(pulse)**: 32A pulsed drain current
- **RDS(on)**: 0.85Ω maximum on-resistance
- **VGS(th)**: 2-4V gate threshold voltage
- **Power Dissipation**: 125W (with heat sink)

#### Features
- **High Voltage**: 500V breakdown voltage
- **Low On-Resistance**: Efficient switching
- **Fast Switching**: Suitable for PWM applications
- **Avalanche Rated**: Repetitive avalanche capability

### FQPF9N90CT - N-Channel Power MOSFET
- **Type**: N-Channel Enhancement Mode MOSFET
- **Manufacturer**: ON Semiconductor
- **Package**: TO-220F (Full Pack)
- **Quantity**: 5+ pieces

#### Electrical Specifications
- **VDS**: 900V (Drain-Source voltage)
- **ID**: 6A continuous drain current
- **ID(pulse)**: 24A pulsed drain current
- **RDS(on)**: 1.1Ω maximum on-resistance
- **VGS(th)**: 2-4V gate threshold voltage
- **Power Dissipation**: 150W (with heat sink)

#### Features
- **Ultra-High Voltage**: 900V breakdown voltage
- **QFET Technology**: Enhanced performance
- **Low Gate Charge**: Fast switching capability
- **Thermal Stability**: Excellent thermal characteristics

## Applications

### Motor Control
- **DC Motor Control**: Speed and direction control
- **Stepper Motor Drivers**: High current switching
- **Servo Motor Control**: Precision positioning
- **Fan Control**: Variable speed control
- **Pump Control**: Flow rate regulation

### Power Switching
- **Relay Drivers**: Electromechanical switching
- **Solenoid Drivers**: Actuator control
- **LED Drivers**: High-power lighting
- **Heater Control**: Temperature regulation
- **Power Distribution**: Load switching

### Power Supplies
- **Switching Regulators**: Efficient power conversion
- **Linear Regulators**: Voltage regulation
- **Battery Chargers**: Current/voltage control
- **Inverters**: DC to AC conversion
- **UPS Systems**: Backup power switching

### Audio Applications
- **Power Amplifiers**: High-power audio output
- **Class AB Amplifiers**: Linear amplification
- **Driver Stages**: Intermediate amplification
- **Protection Circuits**: Overcurrent protection

## Circuit Configurations

### Darlington Switch (TIP120)
```
Control Signal ----[R_base]---- Base
                                 |
                              TIP120
                                 |
Load -------- Collector -------- |
              |                  |
              Emitter ---------- GND
```

### MOSFET Switch (IRF840/FQPF9N90CT)
```
Control Signal ----[R_gate]---- Gate
                                 |
                              MOSFET
                                 |
Load -------- Drain ----------- |
              |                 |
              Source --------- GND
```

### H-Bridge Motor Control
```
        +V
         |
    [MOSFET1] [MOSFET2]
         |       |
         +---M---+  (Motor)
         |       |
    [MOSFET3] [MOSFET4]
         |       |
        GND     GND
```

## Design Considerations

### Thermal Management
- **Heat Sinking**: Adequate thermal dissipation
- **Thermal Resistance**: Junction to case/ambient
- **Safe Operating Area**: Voltage/current limits
- **Derating**: Temperature-dependent limits
- **Thermal Interface**: Proper mounting compound

### Gate Drive (MOSFETs)
- **Gate Voltage**: 10-15V for full enhancement
- **Gate Resistance**: Control switching speed
- **Gate Charge**: Switching energy requirements
- **Miller Capacitance**: High-frequency effects
- **Gate Protection**: ESD and overvoltage

### Base Drive (Darlington)
- **Base Current**: IC/hFE for saturation
- **Base Resistance**: Current limiting
- **Turn-off**: Active base discharge
- **Saturation**: VCE(sat) considerations
- **Storage Time**: Turn-off delay

## Protection Circuits

### Overcurrent Protection
- **Current Sensing**: Shunt or Hall effect
- **Current Limiting**: Active or passive
- **Fuse Protection**: Fast-acting fuses
- **Circuit Breakers**: Resettable protection
- **Thermal Shutdown**: Temperature monitoring

### Overvoltage Protection
- **Zener Diodes**: Voltage clamping
- **TVS Diodes**: Transient suppression
- **Snubber Circuits**: dV/dt protection
- **Avalanche Energy**: MOSFET capability
- **Flyback Diodes**: Inductive load protection

### ESD Protection
- **Gate Protection**: Zener or TVS diodes
- **Handling Procedures**: Anti-static precautions
- **Storage**: ESD-safe containers
- **Testing**: ESD-safe environment

## Performance Characteristics

### Switching Performance
- **Turn-on Time**: Rise time characteristics
- **Turn-off Time**: Fall time characteristics
- **Switching Losses**: Power during transitions
- **Frequency Response**: Maximum switching rate
- **Dead Time**: Shoot-through prevention

### Thermal Characteristics
- **Junction Temperature**: Maximum operating
- **Thermal Resistance**: Heat transfer path
- **Power Dissipation**: Steady-state limits
- **Transient Thermal**: Short-term overload
- **Thermal Cycling**: Reliability considerations

### Electrical Limits
- **Absolute Maximum**: Never exceed ratings
- **Safe Operating Area**: Simultaneous V/I limits
- **Repetitive Ratings**: Pulse operation
- **Avalanche Energy**: Single pulse capability
- **dV/dt Rating**: Rate of voltage change

## Testing and Characterization

### Basic Testing
- **Continuity**: Gate/drain/source integrity
- **Threshold Voltage**: Gate turn-on voltage
- **On-Resistance**: Drain-source resistance
- **Leakage Current**: Off-state current
- **Breakdown Voltage**: Maximum voltage rating

### Dynamic Testing
- **Switching Speed**: Rise/fall times
- **Gate Charge**: Switching energy
- **Capacitance**: Input/output/reverse transfer
- **Safe Operating Area**: Power capability
- **Thermal Resistance**: Heat transfer

### Application Testing
- **Motor Control**: Torque and speed control
- **Switching Losses**: Efficiency measurement
- **EMI Generation**: Electromagnetic interference
- **Reliability**: Long-term operation
- **Thermal Cycling**: Temperature stress

## Common Failure Modes

### Overstress Failures
- **Voltage Breakdown**: Exceeding VDS/VCEO
- **Current Overload**: Exceeding ID/IC limits
- **Power Dissipation**: Thermal runaway
- **dV/dt**: Rate of voltage change
- **Avalanche**: Repetitive avalanche stress

### Application Failures
- **Gate Oxide**: ESD or overvoltage damage
- **Wire Bond**: Current or thermal stress
- **Package**: Mechanical or thermal stress
- **Parasitic Oscillation**: Layout-induced
- **Thermal Cycling**: Expansion/contraction

## Advantages by Type

### Darlington Transistors (TIP120)
- **High Current Gain**: Minimal base drive
- **Simple Drive**: Voltage-controlled
- **Linear Operation**: Good for amplifiers
- **Robust**: Tolerant of abuse
- **Cost Effective**: Inexpensive solution

### Power MOSFETs (IRF840/FQPF9N90CT)
- **Fast Switching**: Nanosecond switching
- **Low Drive Power**: Voltage-controlled gate
- **High Efficiency**: Low on-resistance
- **High Frequency**: MHz switching capability
- **Parallel Operation**: Easy to parallel

## Tags

power-transistor, tip120, irf840, fqpf9n90ct, darlington, mosfet, switching, motor-control

## Notes

This power transistor collection provides essential components for high-power switching and amplification applications. The TIP120 Darlington offers high current gain for applications requiring minimal drive current, while the IRF840 and FQPF9N90CT MOSFETs provide efficient switching for power conversion and motor control. Proper thermal management and protection circuits are essential for reliable operation in power applications. Each device type has specific advantages making them suitable for different applications within power electronics systems.
