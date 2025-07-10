---
type: part
title: RFID & NFC Modules
description: Collection of RFID and NFC reader/writer modules for contactless identification, access control, and data transfer applications including RC522 and ST25DV modules
manufacturer: Various
part_number: RFID-NFC-MODULES-MIXED
category: wireless
subcategory: rfid-nfc
tags: [rfid, nfc, rc522, st25dv, mfrc522, contactless, identification, access-control, mifare, iso15693, i2c, spi, stemma-qt]
total_quantity: 8
location: [cabinet-2-bin-35]
price: 12.00
currency: USD
date_added: 2025-01-09
status: active
---

# RFID & NFC Modules

## Overview

This collection contains RFID (Radio Frequency Identification) and NFC (Near Field Communication) modules for contactless identification, access control, and data transfer applications. The collection includes both traditional RFID readers and advanced NFC modules with I2C programmability.

## Available Components and Locations

### Bin 35 - RFID/NFC Modules (Cabinet 2)

| Part Number | Type | Frequency | Interface | Protocol | Cards Included | Quantity | Applications |
|-------------|------|-----------|-----------|----------|----------------|----------|--------------|
| RC522 | RFID Reader | 13.56MHz | SPI | ISO14443A | S50 Card + Fob | 7 | Access control |
| ST25DV16K | NFC EEPROM | 13.56MHz | I2C + RF | ISO15693 | None | 1 | Dynamic NFC |
| NFC Cards | NFC Tags | 13.56MHz | RF | Various | N/A | 5+ | Data storage |
| NFC Fobs | NFC Tags | 13.56MHz | RF | Various | N/A | 5+ | Identification |

## Technical Specifications

### SunFounder RC522 RFID Reader Module

#### Core Specifications
- **Chip**: Original Philips MFRC522
- **Frequency**: 13.56MHz ISM band
- **Protocol**: ISO/IEC 14443 Type A
- **Interface**: SPI (Serial Peripheral Interface)
- **Data Rate**: Maximum 10Mbit/s
- **Operating Voltage**: 3.3V
- **Current Consumption**: 13-26mA (depending on mode)

#### Communication Interface
- **Interface Type**: 4-wire SPI
- **Clock Speed**: Up to 10MHz
- **Pins Required**: MISO, MOSI, SCK, SS/CS, RST, IRQ (optional)
- **Logic Levels**: 3.3V (5V tolerant with level shifters)
- **Interrupt Support**: IRQ pin for interrupt-driven operation
- **Reset**: Hardware reset pin for reliable initialization

#### RF Performance
- **Operating Distance**: Up to 50mm (depending on antenna and card)
- **Antenna**: Built-in PCB antenna
- **Sensitivity**: High sensitivity for reliable card detection
- **Anti-collision**: Supports multiple card detection
- **Card Types**: Mifare Classic, Mifare Ultralight, NTAG series
- **Memory Access**: Read/write access to card memory

#### Included Accessories
- **S50 White Card**: Mifare Classic 1K card
- **Key Ring Fob**: Mifare Classic key fob
- **Memory**: 1KB EEPROM divided into 16 sectors
- **Security**: Crypto1 encryption (note: known vulnerabilities)
- **UID**: Unique identifier for each card/fob

### Adafruit ST25DV16K I2C RFID EEPROM Breakout

#### Core Specifications
- **Chip**: STMicroelectronics ST25DV16K
- **Memory**: 16-kbit (2KB) EEPROM
- **Dual Interface**: I2C and RF (contactless)
- **Frequency**: 13.56MHz ISM band
- **Protocol**: ISO/IEC 15693, NFC Forum Type 5
- **Voltage**: 1.8V to 5.5V operation

#### I2C Interface
- **Speed**: Up to 1MHz I2C protocol
- **Addresses**: Multiple I2C addresses (0x2D, 0x53, 0x57)
- **Memory Access**: Byte-level access from I2C
- **Write Time**: 5ms typical for 1 byte
- **Endurance**: 1 million write cycles at 25°C
- **Data Retention**: 40 years

#### RF Interface
- **Protocol**: ISO/IEC 15693 compliant
- **NFC Compatibility**: NFC Forum Type 5 certified
- **Block Access**: 4-byte blocks from RF interface
- **Write Time**: 5ms typical for 1 block
- **Fast Transfer**: 256-byte dedicated buffer
- **Phone Compatible**: Works with NFC-enabled smartphones

#### Advanced Features
- **Dynamic Programming**: Reprogram over I2C while maintaining RF functionality
- **Energy Harvesting**: Analog output pin for powering external components
- **Data Protection**: Password protection for memory areas
- **Fast Transfer Mode**: High-speed data transfer between I2C and RF
- **STEMMA QT**: Built-in STEMMA QT/Qwiic connectors

#### Physical Specifications
- **Dimensions**: 31.7mm x 25.3mm x 4.6mm
- **Antenna**: Built-in PCB trace antenna
- **Connectors**: STEMMA QT/Qwiic JST SH 4-pin connectors
- **Headers**: 0.1" pitch headers for breadboard use
- **Mounting**: Mounting holes for permanent installation

## Programming and Integration

### RC522 Arduino Integration
```cpp
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  SPI.begin();
  mfrc522.PCD_Init();
  Serial.println("Ready to read cards");
}

void loop() {
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    // Card detected - process UID
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
      Serial.print(mfrc522.uid.uidByte[i], HEX);
    }
    Serial.println();
    mfrc522.PICC_HaltA();
  }
}
```

### ST25DV Arduino Integration
- **Library**: STM32duino ST25DV library
- **Compatibility**: Requires SAMD or better (not ATmega328p)
- **Memory Requirements**: Insufficient RAM on Arduino UNO
- **Recommended Boards**: Metro M0, ESP32, Arduino Due
- **I2C Interface**: Standard Wire library compatible

### Smartphone Integration
- **NFC Apps**: Use NFC-enabled smartphone apps
- **URL Programming**: Program URLs for automatic browser opening
- **Data Exchange**: Exchange data between phone and module
- **Custom Apps**: Develop custom apps for specific applications
- **Standards Compliance**: Full NFC Forum compliance

## Applications

### Access Control Systems
- **Door Locks**: Electronic door lock systems
- **Time Attendance**: Employee time tracking systems
- **Vehicle Access**: Car and garage door access
- **Equipment Control**: Restrict access to equipment
- **Multi-level Security**: Different access levels for different users

### Identification Systems
- **Student ID**: School and university ID systems
- **Employee Badges**: Corporate identification badges
- **Membership Cards**: Gym and club membership systems
- **Library Systems**: Book checkout and return systems
- **Event Management**: Conference and event check-in systems

### Data Storage and Transfer
- **Configuration Storage**: Store device configuration data
- **Sensor Data**: Collect and store sensor readings
- **User Preferences**: Store user settings and preferences
- **Inventory Tracking**: Track inventory items and locations
- **Asset Management**: Manage and track company assets

### IoT and Smart Home
- **Device Configuration**: Configure IoT devices with NFC
- **User Profiles**: Switch between user profiles with NFC tags
- **Automation Triggers**: Trigger home automation with NFC
- **Guest Access**: Temporary access for guests
- **Energy Management**: Control power and energy settings

### Educational Projects
- **Learning RFID**: Understand RFID technology and protocols
- **Security Education**: Learn about access control systems
- **Programming Practice**: Practice embedded programming
- **System Integration**: Learn system integration skills
- **Project Development**: Develop complete RFID-based projects

## Installation and Wiring

### RC522 Wiring (Arduino)
```
RC522    Arduino UNO
VCC   -> 3.3V
RST   -> Pin 9
GND   -> GND
MISO  -> Pin 12
MOSI  -> Pin 11
SCK   -> Pin 13
SS    -> Pin 10
```

### ST25DV Wiring (I2C)
```
ST25DV   Arduino
VCC   -> 3.3V or 5V
GND   -> GND
SDA   -> A4 (UNO) or SDA pin
SCL   -> A5 (UNO) or SCL pin
```

### Power Supply Considerations
- **RC522**: Requires 3.3V, use level shifters for 5V systems
- **ST25DV**: Wide voltage range (1.8V-5.5V)
- **Current**: Low current consumption for both modules
- **Decoupling**: Add decoupling capacitors near modules
- **Grounding**: Ensure solid ground connections

## Security Considerations

### RC522 Security
- **Mifare Classic**: Known cryptographic vulnerabilities
- **UID Cloning**: UIDs can be cloned with appropriate tools
- **Encryption**: Crypto1 encryption is broken
- **Access Control**: Suitable for convenience, not high security
- **Recommendations**: Use for low-security applications only

### ST25DV Security
- **Password Protection**: 64-bit password protection available
- **Memory Areas**: Configurable protected memory areas
- **Write Protection**: Write protection for critical data
- **Access Control**: Multiple levels of access control
- **Recommendations**: Better security than RC522 but not military-grade

### General Security Best Practices
- **Defense in Depth**: Use RFID as part of multi-factor authentication
- **Regular Updates**: Update firmware and software regularly
- **Physical Security**: Protect readers from physical tampering
- **Monitoring**: Monitor access logs for suspicious activity
- **Backup Systems**: Have backup access methods available

## Troubleshooting

### RC522 Common Issues
- **No Card Detection**: Check wiring, power supply, and antenna
- **Intermittent Operation**: Check connections and power stability
- **Wrong Data**: Verify SPI communication and timing
- **Range Issues**: Check antenna design and card orientation
- **Library Issues**: Ensure correct library version and board selection

### ST25DV Common Issues
- **I2C Communication**: Check I2C address and pull-up resistors
- **Memory Access**: Verify memory addressing and protection settings
- **NFC Compatibility**: Ensure phone NFC is enabled and compatible
- **Power Issues**: Check voltage levels and current capacity
- **Library Compatibility**: Use compatible microcontroller with sufficient RAM

### General Troubleshooting
- **Power Supply**: Verify stable power supply voltage and current
- **Connections**: Check all connections with multimeter
- **Software**: Verify code and library compatibility
- **Hardware**: Test with known good cards and modules
- **Environment**: Check for RF interference and metal objects

## Package Contents

- SunFounder RC522 RFID Reader Modules (7 pieces)
- Mifare Classic S50 cards and key fobs (included with RC522)
- Adafruit ST25DV16K I2C RFID EEPROM Breakout (1 piece)
- Additional NFC cards (5+ pieces)
- Additional NFC fobs (5+ pieces)
- Various NFC tag types and formats

## Important Notes

- **Voltage Compatibility**: RC522 requires 3.3V, ST25DV accepts wide voltage range
- **Library Requirements**: ST25DV requires more powerful microcontroller than Arduino UNO
- **Security Limitations**: Mifare Classic has known security vulnerabilities
- **Phone Compatibility**: ST25DV works with NFC phones, RC522 does not
- **Range Limitations**: Both modules have limited range (typically <5cm)

## Advantages

- **Contactless**: No physical contact required for operation
- **Fast**: Quick read/write operations
- **Reliable**: Solid-state technology with no moving parts
- **Versatile**: Multiple applications and use cases
- **Low Power**: Low power consumption for battery applications
- **Standards Based**: Based on international standards

## Limitations

- **Range**: Limited operating range (typically <5cm)
- **Security**: Limited security for high-value applications
- **Interference**: Susceptible to RF interference
- **Metal Sensitivity**: Performance affected by nearby metal objects
- **Cost**: Higher cost than simple identification methods
- **Complexity**: Requires programming and integration skills

## Recommended Applications

- **Learning Projects**: Excellent for learning RFID/NFC technology
- **Access Control**: Suitable for low to medium security access control
- **Automation**: Trigger automation systems with RFID tags
- **Inventory**: Track inventory and assets
- **Educational**: STEM education and technology demonstrations
- **Prototyping**: Prototype RFID-based systems and applications
