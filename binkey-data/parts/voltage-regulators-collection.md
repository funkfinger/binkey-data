---
type: electronic-component
category: Power Management
subcategory: Voltage Regulators
brands: [Texas-Instruments, STMicroelectronics]
description: Collection of linear and switching voltage regulators from TI and ST
functions: [voltage-regulation, power-conversion, power-supply]
regulator_types: [linear, switching, adjustable, fixed]
packages: [TO-220, TO-92, SOT-223, DPAK, SOIC]
location: [Cabinet-3/Bin-23]
quantity: 25+
status: available
price_range: $0.50-10.00
tags: [voltage-regulator, lm7805, lm317, l7805, ld1117, lm2596, power-supply, linear, switching]
---

# Voltage Regulators Collection

## Details

- **Location**: Cabinet-3, Bin 23
- **Category**: Power Management
- **Brands**: Texas Instruments, STMicroelectronics
- **Total Quantity**: 25+ regulators
- **Applications**: Power supply design, voltage conversion, circuit protection

## Description

Comprehensive collection of voltage regulators from leading manufacturers Texas Instruments and STMicroelectronics. This assortment includes both linear and switching regulators in various packages and output voltages, suitable for a wide range of power supply applications from low-power circuits to moderate power systems.

## Texas Instruments Regulators

### LM78xx Series - Fixed Positive Linear Regulators
- **LM7805**: 5V, 1A output
- **LM7812**: 12V, 1A output  
- **LM7815**: 15V, 1A output
- **Package**: TO-220, TO-92
- **Features**: Simple 3-terminal design, thermal shutdown, short circuit protection
- **Applications**: Digital circuits, microcontroller power, general purpose

### LM79xx Series - Fixed Negative Linear Regulators
- **LM7905**: -5V, 1A output
- **LM7912**: -12V, 1A output
- **LM7915**: -15V, 1A output
- **Package**: TO-220, TO-92
- **Features**: Negative voltage generation, dual supply systems
- **Applications**: Op-amp supplies, analog circuits, bipolar supplies

### LM317 - Adjustable Positive Linear Regulator
- **Output Range**: 1.25V to 37V
- **Current**: Up to 1.5A
- **Package**: TO-220, TO-92, SOIC
- **Features**: Excellent line/load regulation, thermal protection
- **Applications**: Variable power supplies, battery chargers, precision references

### LM2596 - Switching Step-Down Regulator
- **Input Range**: 4.5V to 40V
- **Output**: Adjustable 1.23V to 37V
- **Current**: Up to 3A
- **Efficiency**: Up to 92%
- **Features**: 150kHz switching frequency, thermal shutdown
- **Applications**: Efficient power conversion, battery-powered systems

## STMicroelectronics Regulators

### L78xx Series - Fixed Positive Linear Regulators
- **L7805**: 5V, 1.5A output
- **L7812**: 12V, 1.5A output
- **L7815**: 15V, 1.5A output
- **Package**: TO-220, TO-220FP, DPAK
- **Features**: Higher current capability than LM78xx, thermal protection
- **Applications**: Power supplies, automotive, industrial

### L79xx Series - Fixed Negative Linear Regulators
- **L7905**: -5V, 1.5A output
- **L7912**: -12V, 1.5A output
- **L7915**: -15V, 1.5A output
- **Package**: TO-220, TO-220FP
- **Features**: Negative voltage regulation, robust design
- **Applications**: Dual supply systems, analog circuits

### LD1117 Series - Low Dropout Linear Regulators
- **LD1117V33**: 3.3V, 800mA output
- **LD1117V50**: 5V, 800mA output
- **LD1117**: Adjustable 1.25V to 13.8V
- **Dropout**: 1.2V typical
- **Package**: SOT-223, TO-220, SOIC
- **Features**: Low dropout voltage, current limiting, thermal shutdown
- **Applications**: Battery-powered devices, 3.3V systems, microcontroller supplies

### L200 - Adjustable Switching Regulator
- **Output Range**: 2.85V to 36V
- **Current**: Up to 2A
- **Input Range**: Up to 40V
- **Features**: Current and voltage regulation, protection circuits
- **Applications**: Variable power supplies, battery chargers

## Technical Specifications

### Linear Regulators
- **Regulation**: Excellent line and load regulation
- **Noise**: Low output noise
- **Response**: Fast transient response
- **Efficiency**: 30-60% typical
- **Heat Generation**: Significant at high current
- **Dropout**: 2-3V typical (1.2V for LDO)

### Switching Regulators
- **Efficiency**: 80-95% typical
- **Switching Frequency**: 50kHz to 2MHz
- **Ripple**: Higher output ripple
- **Complexity**: Requires external components
- **EMI**: Potential electromagnetic interference
- **Cost**: Higher component cost

## Package Types and Thermal Considerations

### TO-220 Package
- **Power Dissipation**: Up to 15W with heat sink
- **Thermal Resistance**: 5°C/W to heat sink
- **Mounting**: Bolt-on heat sink mounting
- **Applications**: Medium to high power applications

### TO-92 Package
- **Power Dissipation**: Up to 1W in free air
- **Thermal Resistance**: 200°C/W junction to ambient
- **Mounting**: Through-hole, no heat sink
- **Applications**: Low power applications

### SOT-223/DPAK Package
- **Power Dissipation**: Up to 2W with PCB heat spreading
- **Thermal Resistance**: 50-100°C/W junction to ambient
- **Mounting**: Surface mount with thermal pad
- **Applications**: SMD designs, moderate power

## Applications

### Power Supply Design
- **Linear Supplies**: Low noise, simple design
- **Switching Supplies**: High efficiency, compact
- **Dual Supplies**: Positive and negative voltages
- **Variable Supplies**: Adjustable output voltage
- **Battery Chargers**: Constant voltage/current

### Circuit Applications
- **Microcontroller Power**: 3.3V and 5V supplies
- **Analog Circuits**: Low noise power for op-amps
- **Digital Logic**: TTL and CMOS power supplies
- **Sensor Interfaces**: Precision reference voltages
- **LED Drivers**: Constant current/voltage

### System Integration
- **Voltage Translation**: Level shifting between domains
- **Power Sequencing**: Controlled startup/shutdown
- **Protection**: Overcurrent and thermal protection
- **Filtering**: Power supply noise reduction
- **Isolation**: Galvanic isolation in switching designs

## Design Considerations

### Linear Regulator Design
- **Heat Dissipation**: (Vin - Vout) × Iout = Power loss
- **Heat Sinking**: Thermal management for TO-220
- **Input/Output Capacitors**: Stability and noise reduction
- **Load Regulation**: Maintain voltage under varying loads
- **Line Regulation**: Maintain voltage with input variations

### Switching Regulator Design
- **Inductor Selection**: Current rating and saturation
- **Capacitor Selection**: ESR and ripple current
- **Feedback Network**: Output voltage setting
- **Layout Considerations**: Minimize switching noise
- **EMI Filtering**: Input and output filtering

### Protection Features
- **Thermal Shutdown**: Overtemperature protection
- **Current Limiting**: Overcurrent protection
- **Short Circuit Protection**: Output short protection
- **Reverse Polarity**: Input protection
- **Overvoltage**: Input overvoltage protection

## Testing and Characterization

### Basic Testing
- **Output Voltage**: Verify regulation accuracy
- **Load Regulation**: Voltage vs. current
- **Line Regulation**: Voltage vs. input voltage
- **Efficiency**: Output power / input power
- **Thermal Performance**: Temperature rise

### Advanced Testing
- **Transient Response**: Load step response
- **Noise Measurement**: Output ripple and noise
- **Stability Analysis**: Loop gain and phase
- **EMI Testing**: Conducted and radiated emissions
- **Reliability Testing**: Long-term operation

## Common Circuit Configurations

### Basic Linear Regulator
```
Vin ---[Input Cap]--- Regulator ---[Output Cap]--- Vout
                          |
                         GND
```

### Adjustable Regulator (LM317)
```
Vin --- LM317 --- Vout
         |    |
        R1   R2
         |    |
        GND  GND
Vout = 1.25V × (1 + R2/R1)
```

### Switching Regulator (LM2596)
```
Vin ---[L]--- Vout
   |      |      |
  LM2596  D   [C_out]
   |           |
  [C_in]      GND
   |
  GND
```

## Advantages and Limitations

### Linear Regulators
**Advantages:**
- Simple design and implementation
- Low output noise and ripple
- Fast transient response
- No EMI generation
- Low cost

**Limitations:**
- Low efficiency (heat generation)
- Limited input-output voltage difference
- Not suitable for high power applications
- Requires heat sinking for high current

### Switching Regulators
**Advantages:**
- High efficiency (low heat)
- Wide input voltage range
- Suitable for high power applications
- Compact size for given power

**Limitations:**
- Complex design requirements
- Higher output ripple and noise
- Potential EMI issues
- Higher component cost
- Slower transient response

## Tags

voltage-regulator, lm7805, lm317, l7805, ld1117, lm2596, power-supply, linear, switching

## Notes

This voltage regulator collection provides essential components for power supply design across a wide range of applications. The combination of linear and switching regulators from Texas Instruments and STMicroelectronics offers flexibility in choosing the optimal solution for specific requirements. Linear regulators excel in low-noise applications, while switching regulators provide high efficiency for power-sensitive designs. Proper thermal management and circuit design are crucial for reliable operation.
