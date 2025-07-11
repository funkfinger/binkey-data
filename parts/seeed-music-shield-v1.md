---
type: part
title: Seeed Music Shield V1.0
description: Arduino shield for playing music from SD card with VS1053B decoder chip and audio amplifier
manufacturer: Seeed Studio
part_number: SLD01098P
category: shields
subcategory: audio-shields
tags: [music-shield, vs1053b, audio, mp3, wav, sd-card, amplifier, seeed]
quantity: 1
location: [cabinet-1-bin-42]
datasheet_url: https://seeeddoc.github.io/Music_Shield_V1.0/
purchase_url: ""
price: 25.00
currency: USD
date_added: 2025-01-09
status: discontinued
image: attachments/seeed-music-shield-v1.jpg
---

# Seeed Music Shield V1.0

![Seeed Music Shield V1.0](attachments/seeed-music-shield-v1.jpg)

## Overview

Music Shield is a professional audio codec shield for Arduino/Seeeduino. It can play sound files from SD card and do short-time recording as well. This shield supports various audio formats including MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis. With this shield, you can easily turn your Arduino/Seeeduino into a portable music player.

## Specifications

- **Audio Codec**: VS1053B
- **Supported Formats**: MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis
- **Storage**: SD/MMC card (up to 2GB)
- **Output**: 3.5mm headphone jack, speaker terminals
- **Input**: Microphone input for recording
- **Power**: 5V from Arduino
- **Dimensions**: Standard Arduino shield size

## Key Features

### VS1053B Audio Codec
- **High Quality**: Professional audio decoder/encoder
- **Multiple Formats**: Supports most common audio formats
- **Hardware Decoding**: Dedicated audio processing
- **Low Power**: Efficient power consumption
- **SPI Interface**: Easy Arduino integration

### Audio Capabilities
- **Playback**: High-quality audio playback from SD card
- **Recording**: Short-time audio recording capability
- **Real-time**: Real-time audio processing
- **Variable Bitrate**: Supports various bitrates
- **Stereo Output**: Full stereo audio support

### Storage and Interface
- **SD Card Slot**: Standard SD/MMC card support
- **File System**: FAT16/FAT32 compatible
- **3.5mm Jack**: Standard headphone output
- **Speaker Output**: Direct speaker connection
- **Microphone Input**: For audio recording

### Arduino Integration
- **Shield Compatible**: Standard Arduino shield form factor
- **SPI Communication**: Uses SPI for VS1053B communication
- **Pin Efficient**: Minimal pin usage design
- **Library Support**: Dedicated Arduino libraries available

## Pin Configuration

### SPI Pins (VS1053B)
- **Digital Pin 2**: VS1053 reset pin
- **Digital Pin 6**: VS1053 chip select (control)
- **Digital Pin 7**: VS1053 data chip select
- **Digital Pin 8**: VS1053 data request
- **Digital Pin 9**: VS1053 card chip select

### Standard SPI
- **Digital Pin 11**: SPI MOSI
- **Digital Pin 12**: SPI MISO
- **Digital Pin 13**: SPI SCK

### Available Pins
- **Digital Pins 0, 1, 3, 4, 5, 10**: Available for other uses
- **Analog Pins A0-A5**: Available for other uses

## Audio Formats Supported

### Playback Formats
- **MP3**: MPEG-1/2 Audio Layer 3
- **WMA**: Windows Media Audio
- **WAV**: Waveform Audio File Format
- **AAC**: Advanced Audio Coding
- **MIDI**: Musical Instrument Digital Interface
- **Ogg Vorbis**: Open source audio format

### Recording Formats
- **WAV**: Uncompressed audio recording
- **IMA ADPCM**: Compressed audio format
- **PCM**: Pulse Code Modulation

### Quality Settings
- **Bitrates**: Variable bitrate support
- **Sample Rates**: Multiple sample rate options
- **Stereo/Mono**: Both stereo and mono support
- **Quality**: Adjustable quality settings

## Hardware Components

### VS1053B Decoder
- **Dedicated DSP**: Hardware audio processing
- **Low Latency**: Real-time audio processing
- **High Quality**: Professional audio quality
- **Multiple Formats**: Wide format support
- **SPI Interface**: Easy microcontroller integration

### Audio Amplifier
- **Built-in Amp**: Integrated audio amplifier
- **Speaker Drive**: Can drive small speakers directly
- **Headphone Output**: Standard 3.5mm jack
- **Volume Control**: Software volume control
- **Low Noise**: Clean audio output

### Storage Interface
- **SD Card Slot**: Standard SD/MMC slot
- **SPI Access**: Shared SPI bus with audio codec
- **File System**: Standard file system support
- **Large Capacity**: Support for large audio libraries

## Programming

### Arduino Libraries
- **VS1053 Library**: Dedicated VS1053 control library
- **SD Library**: Standard Arduino SD card library
- **SPI Library**: Hardware SPI communication
- **Custom Libraries**: Community-developed libraries

### Basic Usage
```cpp
#include <SPI.h>
#include <SD.h>
#include <VS1053.h>

VS1053 player(6, 7, 2, 9);

void setup() {
  player.begin();
  SD.begin(9);
}

void loop() {
  player.playMP3("song.mp3");
}
```

### Advanced Features
- **Playlist Management**: Create and manage playlists
- **Volume Control**: Software volume adjustment
- **Equalizer**: Built-in equalizer settings
- **Recording**: Audio recording functionality
- **Real-time Effects**: Audio processing effects

## Applications

### Music Players
- **Portable Player**: Battery-powered music player
- **Home Audio**: Home automation audio system
- **Alarm Clock**: Musical alarm clock
- **Notification System**: Audio notification system

### Interactive Projects
- **Sound Effects**: Game or project sound effects
- **Voice Prompts**: Spoken instructions or feedback
- **Musical Instruments**: Electronic musical instruments
- **Audio Art**: Interactive audio installations

### Educational Use
- **Audio Learning**: Language learning systems
- **Music Education**: Musical education tools
- **Electronics Learning**: Audio electronics education
- **Programming Practice**: Audio programming exercises

## Power Requirements

### Power Consumption
- **Idle**: ~20mA
- **Playback**: ~50-80mA (depending on volume)
- **Recording**: ~60-90mA
- **Peak**: ~100mA maximum

### Power Supply
- **Voltage**: 5V from Arduino
- **Current**: Adequate 5V supply required
- **Battery**: Can run from battery power
- **External**: May need external power for high volume

## File Management

### SD Card Requirements
- **Format**: FAT16 or FAT32
- **Capacity**: Up to 2GB supported
- **Speed**: Class 4 or higher recommended
- **Files**: Standard 8.3 filename format preferred

### File Organization
- **Root Directory**: Place audio files in root
- **Subdirectories**: Limited subdirectory support
- **Naming**: Use simple filenames
- **Formats**: Multiple format support

## Troubleshooting

### Audio Issues
- **No Sound**: Check connections and power
- **Poor Quality**: Verify file format and bitrate
- **Distortion**: Check volume levels and power supply
- **Skipping**: Use faster SD card or lower bitrate

### SD Card Issues
- **Not Recognized**: Check card format and connections
- **File Errors**: Verify file system and file names
- **Slow Access**: Use faster SD card
- **Corruption**: Check power stability during operation

### Communication Issues
- **SPI Conflicts**: Check for SPI bus conflicts
- **Pin Conflicts**: Verify pin assignments
- **Library Issues**: Use compatible library versions
- **Reset Problems**: Check reset pin connections

## Package Contents

- 1x Seeed Music Shield V1.0 (assembled)
- Documentation and example code links
- Schematic and library access

## Important Notes

- **Discontinued**: This version is no longer in production
- **SD Card Limit**: 2GB maximum capacity
- **Power Requirements**: Needs adequate 5V power supply
- **SPI Sharing**: Shares SPI bus with SD card
- **File Formats**: Some formats may have limitations

## Advantages

- **High Quality**: Professional audio codec
- **Multiple Formats**: Wide format support
- **Easy Integration**: Simple Arduino shield interface
- **Recording Capable**: Can record audio
- **Cost Effective**: Affordable audio solution

## Limitations

- **Discontinued**: No longer in production
- **SD Capacity**: Limited to 2GB cards
- **Power Hungry**: Relatively high power consumption
- **Pin Usage**: Uses several digital pins
- **File System**: Limited file system features

## Alternatives

For new projects, consider:
- **Seeed Music Shield V2**: Updated version with improvements
- **DFPlayer Mini**: Compact MP3 player module
- **ESP32 Audio**: Built-in audio capabilities
- **Adafruit Music Maker**: Alternative audio shield

## Recommended Accessories

- SD card (2GB or smaller, FAT16/FAT32)
- 3.5mm headphones or speakers
- External power supply for high volume
- Microphone for recording (if supported)
- Audio files in supported formats
