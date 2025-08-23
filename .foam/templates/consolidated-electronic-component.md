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
added_date: ${26:YYYY-MM-DD}
---

# ${27:Component Name}

## Details

- **Location**: Cabinet-${16:X}, Bin ${17:Y}${28:, Section Z}
- **Category**: ${1:Category Name}
- **Brand**: ${3:Brand Name}
- **Part Number**: ${4:Part Number}
- **Package**: ${8:Package Type}
- **Quantity**: ${19:1}
- **Status**: ${20:Status}
- **Price Range**: ${21:Price Range}
${29:- **Datasheet**: [${4:Part Number} Datasheet](${22:datasheet-url})}
  ${30:- **Product URL**: ${23:product-url}}

## Description

${31:Detailed description of the component, its purpose, key features, and typical applications. Include what makes this component unique or particularly useful.}

## Specifications

${32:### Electrical Characteristics

- **Operating Voltage**: ${10:Voltage}
- **Current**: ${11:Current}
- **Power**: ${12:Power}
- **Interface**: ${13:Interface Types}

### Physical Characteristics

- **Package**: ${8:Package Type}
- **Dimensions**: ${9:Dimensions}
- **Weight**: ${33:Weight (optional)}
- **Operating Temperature**: ${34:Temperature range}

### Key Features

- ${35:Feature 1}
- ${36:Feature 2}
- ${37:Feature 3}}

## Image

![${38:Descriptive alt text}](../attachments/${39:image-filename.jpg})

${40:## Pinout Diagram

![${41:Component Name} Pinout](../attachments/${42:pinout-image.png})

## Pin Descriptions

${43:Detailed pin descriptions if applicable}}

${44:## Applications

${45:Common use cases and applications for this component:}

- ${46:Application 1}
- ${47:Application 2}
- ${48:Application 3}}

${49:## Circuit Examples

${50:### Basic Usage Circuit

```
${51:Simple circuit example or connection diagram}
```

### Advanced Usage

````
${52:More complex usage example}
```}}

${53:## Programming Examples

${54:### Arduino Example
```cpp
${55:Arduino code example}
````

### CircuitPython Example

````python
${56:CircuitPython code example}
```}}

${57:## Technical Notes

${58:Important technical considerations, limitations, or special requirements:}
- ${59:Note 1}
- ${60:Note 2}
- ${61:Note 3}}

## Tags

${24:tag1, tag2, tag3} #cabinet-${16} #bin-${17} #status-${20}

## Notes

${62:Additional notes, compatibility information, alternatives, or usage tips. Include any special handling requirements or known issues.}
````
