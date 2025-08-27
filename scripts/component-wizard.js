#!/usr/bin/env node

/**
 * Interactive Component Addition Wizard
 * Streamlines the process of adding new components with validation and automation
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const PARTS_DIR = path.join(ROOT_DIR, 'parts');
const TEMPLATE_PATH = path.join(ROOT_DIR, '.foam', 'templates', 'consolidated-electronic-component.md');

class ComponentWizard {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.component = {};
    this.template = '';
  }

  async loadTemplate() {
    try {
      this.template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    } catch (error) {
      console.error('❌ Could not load component template:', error.message);
      process.exit(1);
    }
  }

  question(prompt) {
    return new Promise((resolve) => {
      this.rl.question(prompt, resolve);
    });
  }

  async askRequired(field, prompt, validator = null) {
    let value;
    do {
      value = await this.question(`${prompt}: `);
      if (!value.trim()) {
        console.log('❌ This field is required.');
        continue;
      }
      if (validator && !validator(value)) {
        console.log('❌ Invalid format. Please try again.');
        continue;
      }
      break;
    } while (true);
    return value.trim();
  }

  async askOptional(field, prompt, defaultValue = '') {
    const value = await this.question(`${prompt} [${defaultValue}]: `);
    return value.trim() || defaultValue;
  }

  validateLocation(location) {
    return /^Cabinet-\d+\/Bin-\d+(?:\/Section-[A-Z])?$/.test(location);
  }

  validateQuantity(quantity) {
    return !isNaN(parseInt(quantity)) && parseInt(quantity) > 0;
  }

  validateStatus(status) {
    return ['available', 'pending', 'todo', 'out-of-stock'].includes(status);
  }

  async collectComponentData() {
    console.log('\n🔧 Component Addition Wizard');
    console.log('=' .repeat(40));

    // Basic Information
    console.log('\n📝 Basic Information:');
    this.component.name = await this.askRequired('name', '📦 Component Name');
    this.component.category = await this.askRequired('category', '📂 Category');
    this.component.subcategory = await this.askOptional('subcategory', '📁 Subcategory');
    this.component.brand = await this.askRequired('brand', '🏷️  Brand');
    this.component.part_number = await this.askOptional('part_number', '🔢 Part Number');
    this.component.model = await this.askOptional('model', '🏭 Model');
    this.component.description = await this.askRequired('description', '📄 Description');

    // Technical Specifications
    console.log('\n⚡ Technical Specifications:');
    this.component.package = await this.askOptional('package', '📦 Package Type (DIP, SMD, etc.)');
    this.component.voltage = await this.askOptional('voltage', '⚡ Operating Voltage');
    this.component.current = await this.askOptional('current', '🔌 Current Rating');
    this.component.power = await this.askOptional('power', '💡 Power Rating');
    
    const interfaces = await this.askOptional('interface', '🔗 Interfaces (comma-separated)');
    this.component.interface = interfaces ? interfaces.split(',').map(i => i.trim()) : [];

    // Inventory Information
    console.log('\n📍 Inventory Information:');
    this.component.location = await this.askRequired('location', 
      '📍 Location (Cabinet-X/Bin-Y/Section-Z)', this.validateLocation);
    this.component.quantity = await this.askRequired('quantity', 
      '📊 Quantity', this.validateQuantity);
    this.component.status = await this.askRequired('status', 
      '📋 Status (available/pending/todo/out-of-stock)', this.validateStatus);
    this.component.price_range = await this.askOptional('price_range', '💰 Price Range ($X-Y)');

    // Documentation
    console.log('\n📚 Documentation:');
    this.component.datasheet = await this.askOptional('datasheet', '📄 Datasheet URL');
    this.component.product_url = await this.askOptional('product_url', '🛒 Product URL');
    
    const tags = await this.askOptional('tags', '🏷️  Tags (comma-separated)');
    this.component.tags = tags ? tags.split(',').map(t => t.trim()) : [];

    // Add automatic tags
    this.component.tags.push(
      `cabinet-${this.component.location.match(/Cabinet-(\d+)/)?.[1]}`,
      `bin-${this.component.location.match(/Bin-(\d+)/)?.[1]}`,
      `status-${this.component.status}`
    );

    this.component.date_added = new Date().toISOString().split('T')[0];
    this.component.added_date = this.component.date_added;
  }

  generateFilename() {
    return this.component.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  fillTemplate() {
    let content = this.template;
    
    // Replace template variables
    const replacements = {
      '${1:Category Name}': this.component.category,
      '${2:Subcategory}': this.component.subcategory,
      '${3:Brand Name}': this.component.brand,
      '${4:Part Number}': this.component.part_number,
      '${5:Model Name (optional)}': this.component.model,
      '${6:Brief component description}': this.component.description,
      '${8:Package type (DIP, SMD, etc.)}': this.component.package,
      '${10:Operating voltage}': this.component.voltage,
      '${11:Current rating/consumption}': this.component.current,
      '${12:Power rating (if applicable)}': this.component.power,
      '${13:I2C, SPI, UART, GPIO, etc.}': this.component.interface.join(', '),
      '${16:X}': this.component.location.match(/Cabinet-(\d+)/)?.[1] || 'X',
      '${17:Y}': this.component.location.match(/Bin-(\d+)/)?.[1] || 'Y',
      '${19:1}': this.component.quantity,
      '${20:available|pending|todo}': this.component.status,
      '${21:$X-Y}': this.component.price_range,
      '${22:URL to datasheet (optional)}': this.component.datasheet,
      '${23:URL to product page (optional)}': this.component.product_url,
      '${24:tag1, tag2, tag3}': this.component.tags.join(', '),
      '${25:YYYY-MM-DD}': this.component.date_added,
      '${26:YYYY-MM-DD}': this.component.added_date,
      '${27:Component Name}': this.component.name
    };

    Object.entries(replacements).forEach(([placeholder, value]) => {
      content = content.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value || '');
    });

    // Clean up remaining placeholders
    content = content.replace(/\$\{\d+:[^}]*\}/g, '');
    
    return content;
  }

  async saveComponent() {
    const filename = this.generateFilename();
    const filepath = path.join(PARTS_DIR, `${filename}.md`);
    
    if (fs.existsSync(filepath)) {
      const overwrite = await this.question(`⚠️  File ${filename}.md already exists. Overwrite? (y/N): `);
      if (overwrite.toLowerCase() !== 'y') {
        console.log('❌ Component not saved.');
        return false;
      }
    }

    const content = this.fillTemplate();
    fs.writeFileSync(filepath, content);
    
    console.log(`✅ Component saved to: ${filepath}`);
    return true;
  }

  async updateCabinetFile() {
    const cabinetMatch = this.component.location.match(/Cabinet-(\d+)/);
    if (!cabinetMatch) return;

    const cabinetNum = cabinetMatch[1];
    const cabinetFile = path.join(ROOT_DIR, `am-cabinet-${cabinetNum}.md`);
    
    if (!fs.existsSync(cabinetFile)) {
      console.log(`⚠️  Cabinet file ${cabinetFile} not found. Please update manually.`);
      return;
    }

    const updateCabinet = await this.question(`📦 Update cabinet file am-cabinet-${cabinetNum}.md? (Y/n): `);
    if (updateCabinet.toLowerCase() === 'n') return;

    // This would need more sophisticated logic to update the cabinet file
    console.log(`ℹ️  Please manually add the following to am-cabinet-${cabinetNum}.md:`);
    console.log(`- [[${this.generateFilename()}]] - ${this.component.quantity}`);
  }

  async run() {
    try {
      await this.loadTemplate();
      await this.collectComponentData();
      
      console.log('\n📋 Component Summary:');
      console.log(`Name: ${this.component.name}`);
      console.log(`Category: ${this.component.category}`);
      console.log(`Brand: ${this.component.brand}`);
      console.log(`Location: ${this.component.location}`);
      console.log(`Quantity: ${this.component.quantity}`);
      console.log(`Status: ${this.component.status}`);

      const confirm = await this.question('\n✅ Save this component? (Y/n): ');
      if (confirm.toLowerCase() !== 'n') {
        const saved = await this.saveComponent();
        if (saved) {
          await this.updateCabinetFile();
          console.log('\n🎉 Component successfully added to inventory!');
          
          const runAgain = await this.question('\n➕ Add another component? (y/N): ');
          if (runAgain.toLowerCase() === 'y') {
            this.component = {};
            await this.run();
          }
        }
      } else {
        console.log('❌ Component not saved.');
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
    } finally {
      this.rl.close();
    }
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const wizard = new ComponentWizard();
  wizard.run().catch(console.error);
}

export default ComponentWizard;
