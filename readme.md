# Electronics Inventory Management System

A comprehensive electronics component inventory system built with [Foam](https://foambubble.github.io/foam/) for VS Code, designed to track and organize electronic components across multiple storage cabinets.

## 🎯 Project Overview

This project provides a structured approach to managing electronics components using a knowledge management system. Each component is cataloged as an individual file with rich metadata, making it easy to search, cross-reference, and maintain your inventory.

## 📁 Project Structure

```
binkey-data/
├── README.md                 # This file
├── binkey-data/             # Cabinet organization
│   ├── bins.md              # Main inventory index
│   └── Cabinet-1.md         # Cabinet 1 layout (44 bins)
├── parts/                   # Individual component database
│   ├── index.md             # Parts catalog index
│   ├── holtek-ht16k33-breakout.md
│   ├── segger-jlink-edu-mini.md
│   └── [27 other component files]
├── attachments/             # Component images and photos
│   ├── 1427-06.jpg
│   ├── 3571-05.jpg
│   └── [other component images]
└── .vscode/                 # VS Code workspace configuration
    ├── settings.json        # Foam and Paste Image settings
    └── extensions.json      # Recommended extensions
```

## 🔧 Component Categories

- **Programming & Debugging Tools** (6 items)
  - JTAG/SWD adapters and debuggers
  - IC programming adapters
  - Socket adapters

- **LED Components** (18 items)
  - Standard LEDs (3mm, 5mm)
  - RGB and addressable LEDs
  - Special effect LEDs (flicker, flashing)
  - UV and IR LEDs

- **Displays** (5 items)
  - LED matrices and character displays
  - Alphanumeric displays with I2C backpacks
  - LED rings

- **FeatherWings** (3 items)
  - RTC modules
  - Data loggers
  - Audio modules

## 🚀 Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/funkfinger/binkey-data.git
   cd binkey-data
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Install recommended extensions** when prompted:
   - Foam for VSCode
   - Markdown All In One
   - Prettier
   - Paste Image

### Usage

#### Browsing Components
- Start with `binkey-data/bins.md` for the main index
- Navigate to `Cabinet-1.md` to see physical organization
- Browse `parts/index.md` for the complete component catalog

#### Adding New Components
1. Create a new file in the `parts/` directory
2. Use the established frontmatter format:
   ```yaml
   ---
   type: electronic-component
   category: [Category Name]
   subcategory: [Subcategory]
   brand: [Brand Name]
   location: Cabinet-X/Bin-Y
   quantity: [Number]
   status: available
   tags: [tag1, tag2, tag3]
   ---
   ```
3. Add component details, images, and links

#### Adding Images
- Use `Ctrl/Cmd + Alt + V` to paste images directly from clipboard
- Images automatically save to the `attachments/` directory
- Use descriptive alt text for accessibility

## 🏷️ Metadata Schema

Each component file includes structured metadata:

- **Physical Properties**: Size, color, shape, wavelength
- **Technical Specs**: Part numbers, interfaces, functions
- **Inventory Data**: Location, quantity, status, price range
- **Organization**: Categories, subcategories, tags
- **Vendor Info**: Brand, part numbers, product URLs

## 🔍 Search and Navigation

### Using Foam Features
- **Wikilinks**: `[[component-name]]` for easy navigation
- **Tags**: Filter by `#led`, `#programming`, `#adafruit`, etc.
- **Graph View**: Visualize component relationships
- **Backlinks**: See where components are referenced

### Search Examples
- Find all 5mm LEDs: Search for `size: 5mm`
- Find Adafruit products: Search for `brand: Adafruit`
- Find programming tools: Browse `category: Programming Tools`

## 📸 Image Management

- **Centralized Storage**: All images in `/attachments` directory
- **Proper Alt Text**: Descriptive text for accessibility
- **Consistent Naming**: Product numbers and descriptive names
- **Easy Addition**: Paste Image extension for quick photo addition

## 🛠️ VS Code Configuration

The project includes optimized VS Code settings:

- **Foam Integration**: Wikilinks, graph view, backlinks
- **Image Handling**: Automatic paste to attachments directory
- **Markdown Enhancement**: All-in-one markdown features
- **Code Formatting**: Prettier for consistent formatting

## 📊 Current Inventory Stats

- **Total Components**: 30+ individual items
- **Cabinets**: 1 (with 44 bins, 16 populated)
- **Categories**: 8 major categories
- **Images**: High-quality component photos
- **Documentation**: 100% coverage with metadata

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add new components or improve documentation
4. Ensure proper frontmatter and formatting
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Related Links

- [Foam Documentation](https://foambubble.github.io/foam/)
- [VS Code Markdown Guide](https://code.visualstudio.com/docs/languages/markdown)
- [YAML Frontmatter Reference](https://jekyllrb.com/docs/front-matter/)

## 📞 Support

For questions or suggestions:
- Open an issue on GitHub
- Check the Foam community resources
- Review the component documentation in `parts/index.md`

---

**Built with ❤️ using Foam for VS Code**
