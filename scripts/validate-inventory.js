#!/usr/bin/env node

/**
 * Inventory Data Validation Script
 * Validates YAML frontmatter, wikilinks, and data consistency across the inventory system
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const PARTS_DIR = path.join(ROOT_DIR, 'parts');
const ATTACHMENTS_DIR = path.join(ROOT_DIR, 'attachments');

// Required fields for different component types
const REQUIRED_FIELDS = {
  'electronic-component': [
    'type', 'category', 'brand', 'location', 'quantity', 'status', 'tags'
  ],
  'cabinet': [
    'type', 'cabinet_number', 'total_bins', 'populated_bins'
  ]
};

class InventoryValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.stats = {
      totalFiles: 0,
      partsFiles: 0,
      cabinetFiles: 0,
      missingImages: 0,
      brokenWikilinks: 0
    };
  }

  log(level, message, file = null) {
    const entry = { level, message, file, timestamp: new Date().toISOString() };
    if (level === 'error') {
      this.errors.push(entry);
    } else if (level === 'warning') {
      this.warnings.push(entry);
    }
    console.log(`[${level.toUpperCase()}] ${file ? `${file}: ` : ''}${message}`);
  }

  validateYamlFrontmatter(filePath, data) {
    const { type } = data;
    const requiredFields = REQUIRED_FIELDS[type] || [];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        this.log('error', `Missing required field: ${field}`, filePath);
      }
    }

    // Validate location format for components
    if (type === 'electronic-component' && data.location) {
      if (!Array.isArray(data.location)) {
        this.log('error', 'Location should be an array', filePath);
      } else {
        for (const loc of data.location) {
          if (!loc.match(/^Cabinet-\d+\/Bin-\d+/)) {
            this.log('warning', `Invalid location format: ${loc}`, filePath);
          }
        }
      }
    }

    // Validate quantity is a number
    if (data.quantity && isNaN(Number(data.quantity))) {
      this.log('error', `Quantity should be a number: ${data.quantity}`, filePath);
    }

    // Validate status values
    if (data.status && !['available', 'pending', 'todo', 'out-of-stock'].includes(data.status)) {
      this.log('warning', `Unusual status value: ${data.status}`, filePath);
    }
  }

  validateImageReferences(filePath, content) {
    const imageRegex = /!\[.*?\]\(\.\.\/attachments\/(.*?)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = path.join(ATTACHMENTS_DIR, match[1]);
      if (!fs.existsSync(imagePath)) {
        this.log('error', `Missing image file: ${match[1]}`, filePath);
        this.stats.missingImages++;
      }
    }
  }

  validateWikilinks(filePath, content) {
    const wikilinkRegex = /\[\[(.*?)\]\]/g;
    let match;

    while ((match = wikilinkRegex.exec(content)) !== null) {
      const linkTarget = match[1];
      
      // Skip special cases
      if (linkTarget === 'empty' || linkTarget.startsWith('http')) {
        continue;
      }

      // Check if target file exists
      const possiblePaths = [
        path.join(ROOT_DIR, `${linkTarget}.md`),
        path.join(PARTS_DIR, `${linkTarget}.md`),
        path.join(ROOT_DIR, `am-${linkTarget}.md`)
      ];

      const exists = possiblePaths.some(p => fs.existsSync(p));
      if (!exists) {
        this.log('warning', `Broken wikilink: [[${linkTarget}]]`, filePath);
        this.stats.brokenWikilinks++;
      }
    }
  }

  validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);

      this.stats.totalFiles++;
      
      if (data.type === 'electronic-component') {
        this.stats.partsFiles++;
      } else if (data.type === 'cabinet') {
        this.stats.cabinetFiles++;
      }

      this.validateYamlFrontmatter(filePath, data);
      this.validateImageReferences(filePath, content);
      this.validateWikilinks(filePath, content);

    } catch (error) {
      this.log('error', `Failed to process file: ${error.message}`, filePath);
    }
  }

  async validateInventory() {
    console.log('🔍 Starting inventory validation...\n');

    // Validate all markdown files
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.md')) {
          this.validateFile(filePath);
        }
      }
    };

    walkDir(ROOT_DIR);

    // Generate report
    this.generateReport();
  }

  generateReport() {
    console.log('\n📊 VALIDATION REPORT');
    console.log('='.repeat(50));
    
    console.log('\n📈 Statistics:');
    console.log(`  Total files processed: ${this.stats.totalFiles}`);
    console.log(`  Parts files: ${this.stats.partsFiles}`);
    console.log(`  Cabinet files: ${this.stats.cabinetFiles}`);
    console.log(`  Missing images: ${this.stats.missingImages}`);
    console.log(`  Broken wikilinks: ${this.stats.brokenWikilinks}`);

    console.log(`\n❌ Errors: ${this.errors.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}`);

    if (this.errors.length > 0) {
      console.log('\n🚨 ERRORS:');
      this.errors.slice(0, 10).forEach(error => {
        console.log(`  • ${error.file}: ${error.message}`);
      });
      if (this.errors.length > 10) {
        console.log(`  ... and ${this.errors.length - 10} more errors`);
      }
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.warnings.slice(0, 10).forEach(warning => {
        console.log(`  • ${warning.file}: ${warning.message}`);
      });
      if (this.warnings.length > 10) {
        console.log(`  ... and ${this.warnings.length - 10} more warnings`);
      }
    }

    // Write detailed report to file
    const reportPath = path.join(ROOT_DIR, 'validation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      stats: this.stats,
      errors: this.errors,
      warnings: this.warnings
    }, null, 2));

    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
    
    if (this.errors.length === 0) {
      console.log('\n✅ Validation completed successfully!');
      process.exit(0);
    } else {
      console.log('\n❌ Validation completed with errors.');
      process.exit(1);
    }
  }
}

// Run validation if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new InventoryValidator();
  validator.validateInventory().catch(console.error);
}

export default InventoryValidator;
