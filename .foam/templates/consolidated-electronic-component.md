---
type: electronic-component
category: ${1:Category Name}
subcategory: ${2:Subcategory}
brand: ${3:Brand Name}
part_number: ${4:Part Number}
model: ${5:Model Name (optional)}
description: ${6:Brief component description}
manufacturer: ${7:Manufacturer (if different from brand)}
package: ${8:Package type (DIP, SMD, etc.)}
size: ${9:Physical size/dimensions}
voltage: ${10:Operating voltage}
current: ${11:Current rating/consumption}
power: ${12:Power rating (if applicable)}
interface: [${13:I2C, SPI, UART, GPIO, etc.}]
connectivity: [${14:USB-C, STEMMA-QT, etc.}]
compatibility: [${15:Compatible platforms/standards}]
location: [Cabinet-${16:X}/Bin-${17:Y}${18:/Section-Z}]
quantity: ${19:1}
status: ${20:available|pending|todo}
price_range: ${21:$X-Y}
datasheet: ${22:URL to datasheet (optional)}
product_url: ${23:URL to product page (optional)}
tags: [${24:tag1, tag2, tag3}, cabinet-${16}, bin-${17}, status-${20}]
date_added: ${25:YYYY-MM-DD}
---

# ${26:Component Name}

## Details

- **Location**: Cabinet-${16:X}, Bin ${17:Y}${27:, Section Z}
- **Category**: ${1:Category Name}
- **Brand**: ${3:Brand Name}
- **Part Number**: ${4:Part Number}
- **Package**: ${8:Package Type}
- **Quantity**: ${19:1}
- **Status**: ${20:Status}
- **Price Range**: ${21:Price Range}
${28:- **Datasheet**: [${4:Part Number} Datasheet](${22:datasheet-url})}
${29:- **Product URL**: ${23:product-url}}

## Description

${30:Detailed description of the component, its purpose, key features, and typical applications. Include what makes this component unique or particularly useful.}

## Specifications

${31:### Electrical Characteristics
- **Operating Voltage**: ${10:Voltage}
- **Current**: ${11:Current}
- **Power**: ${12:Power}
- **Interface**: ${13:Interface Types}

### Physical Characteristics  
- **Package**: ${8:Package Type}
- **Dimensions**: ${9:Dimensions}
- **Weight**: ${32:Weight (optional)}
- **Operating Temperature**: ${33:Temperature range}

### Key Features
- ${34:Feature 1}
- ${35:Feature 2}
- ${36:Feature 3}}

## Image

![${37:Descriptive alt text}](../attachments/${38:image-filename.jpg})

${39:## Pinout Diagram

![${40:Component Name} Pinout](../attachments/${41:pinout-image.png})

## Pin Descriptions

${42:Detailed pin descriptions if applicable}}

${43:## Applications

${44:Common use cases and applications for this component:}
- ${45:Application 1}
- ${46:Application 2}
- ${47:Application 3}}

${48:## Circuit Examples

${49:### Basic Usage Circuit
```
${50:Simple circuit example or connection diagram}
```

### Advanced Usage
```
${51:More complex usage example}
```}}

${52:## Programming Examples

${53:### Arduino Example
```cpp
${54:Arduino code example}
```

### CircuitPython Example  
```python
${55:CircuitPython code example}
```}}

${56:## Technical Notes

${57:Important technical considerations, limitations, or special requirements:}
- ${58:Note 1}
- ${59:Note 2}
- ${60:Note 3}}

## Tags

${24:tag1, tag2, tag3} #cabinet-${16} #bin-${17} #status-${20}

## Notes

${61:Additional notes, compatibility information, alternatives, or usage tips. Include any special handling requirements or known issues.}
