#!/usr/bin/env node

/**
 * Search Index Generator
 * Creates searchable indexes for components by specifications, location, and other criteria
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const PARTS_DIR = path.join(ROOT_DIR, 'parts');
const OUTPUT_DIR = path.join(ROOT_DIR, 'web', 'public', 'search');

class SearchIndexGenerator {
  constructor() {
    this.components = [];
    this.indexes = {
      byCategory: {},
      byBrand: {},
      byLocation: {},
      byVoltage: {},
      byPackage: {},
      byInterface: {},
      byStatus: {},
      fullText: []
    };
  }

  processComponent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdown } = matter(content);

      if (data.type !== 'electronic-component') return;

      const component = {
        id: path.basename(filePath, '.md'),
        title: data.title || path.basename(filePath, '.md').replace(/-/g, ' '),
        ...data,
        content: markdown,
        searchText: this.createSearchText(data, markdown)
      };

      this.components.push(component);
      this.indexComponent(component);

    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  createSearchText(data, markdown) {
    const searchableFields = [
      data.title,
      data.description,
      data.brand,
      data.part_number,
      data.model,
      data.category,
      data.subcategory,
      Array.isArray(data.tags) ? data.tags.join(' ') : data.tags,
      Array.isArray(data.interface) ? data.interface.join(' ') : data.interface,
      markdown.replace(/[#*\[\]()]/g, ' ')
    ];

    return searchableFields
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  indexComponent(component) {
    // Index by category
    if (component.category) {
      if (!this.indexes.byCategory[component.category]) {
        this.indexes.byCategory[component.category] = [];
      }
      this.indexes.byCategory[component.category].push(component.id);
    }

    // Index by brand
    if (component.brand) {
      if (!this.indexes.byBrand[component.brand]) {
        this.indexes.byBrand[component.brand] = [];
      }
      this.indexes.byBrand[component.brand].push(component.id);
    }

    // Index by location
    if (component.location && Array.isArray(component.location)) {
      component.location.forEach(loc => {
        if (!this.indexes.byLocation[loc]) {
          this.indexes.byLocation[loc] = [];
        }
        this.indexes.byLocation[loc].push(component.id);
      });
    }

    // Index by voltage
    if (component.voltage) {
      const voltage = String(component.voltage).toLowerCase();
      if (!this.indexes.byVoltage[voltage]) {
        this.indexes.byVoltage[voltage] = [];
      }
      this.indexes.byVoltage[voltage].push(component.id);
    }

    // Index by package type
    if (component.package) {
      const pkg = String(component.package).toLowerCase();
      if (!this.indexes.byPackage[pkg]) {
        this.indexes.byPackage[pkg] = [];
      }
      this.indexes.byPackage[pkg].push(component.id);
    }

    // Index by interface
    if (component.interface && Array.isArray(component.interface)) {
      component.interface.forEach(iface => {
        const ifaceLower = iface.toLowerCase();
        if (!this.indexes.byInterface[ifaceLower]) {
          this.indexes.byInterface[ifaceLower] = [];
        }
        this.indexes.byInterface[ifaceLower].push(component.id);
      });
    }

    // Index by status
    if (component.status) {
      if (!this.indexes.byStatus[component.status]) {
        this.indexes.byStatus[component.status] = [];
      }
      this.indexes.byStatus[component.status].push(component.id);
    }

    // Full-text search index
    this.indexes.fullText.push({
      id: component.id,
      title: component.title,
      searchText: component.searchText,
      category: component.category,
      brand: component.brand,
      location: component.location,
      status: component.status
    });
  }

  generateLocationHierarchy() {
    const hierarchy = {};
    
    Object.keys(this.indexes.byLocation).forEach(location => {
      const match = location.match(/^Cabinet-(\d+)\/Bin-(\d+)(?:\/Section-(.+))?$/);
      if (match) {
        const [, cabinet, bin, section] = match;
        const cabinetKey = `Cabinet-${cabinet}`;
        const binKey = `Bin-${bin}`;
        
        if (!hierarchy[cabinetKey]) {
          hierarchy[cabinetKey] = { bins: {}, components: [] };
        }
        
        if (!hierarchy[cabinetKey].bins[binKey]) {
          hierarchy[cabinetKey].bins[binKey] = { sections: {}, components: [] };
        }
        
        const components = this.indexes.byLocation[location];
        
        if (section) {
          const sectionKey = `Section-${section}`;
          if (!hierarchy[cabinetKey].bins[binKey].sections[sectionKey]) {
            hierarchy[cabinetKey].bins[binKey].sections[sectionKey] = { components: [] };
          }
          hierarchy[cabinetKey].bins[binKey].sections[sectionKey].components = components;
        } else {
          hierarchy[cabinetKey].bins[binKey].components = components;
        }
        
        // Also add to cabinet level
        hierarchy[cabinetKey].components = [
          ...new Set([...hierarchy[cabinetKey].components, ...components])
        ];
      }
    });
    
    return hierarchy;
  }

  generateSearchAPI() {
    const api = {
      // Quick search endpoint data
      quickSearch: this.indexes.fullText.map(item => ({
        id: item.id,
        title: item.title,
        category: item.category,
        brand: item.brand,
        location: item.location?.[0] || 'Unknown',
        status: item.status
      })),

      // Filter options
      filters: {
        categories: Object.keys(this.indexes.byCategory).sort(),
        brands: Object.keys(this.indexes.byBrand).sort(),
        voltages: Object.keys(this.indexes.byVoltage).sort(),
        packages: Object.keys(this.indexes.byPackage).sort(),
        interfaces: Object.keys(this.indexes.byInterface).sort(),
        statuses: Object.keys(this.indexes.byStatus).sort(),
        locations: Object.keys(this.indexes.byLocation).sort()
      },

      // Statistics
      stats: {
        totalComponents: this.components.length,
        categoriesCount: Object.keys(this.indexes.byCategory).length,
        brandsCount: Object.keys(this.indexes.byBrand).length,
        locationsCount: Object.keys(this.indexes.byLocation).length,
        availableComponents: this.indexes.byStatus.available?.length || 0
      }
    };

    return api;
  }

  async generate() {
    console.log('🔍 Generating search indexes...');

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Process all component files
    const files = fs.readdirSync(PARTS_DIR);
    for (const file of files) {
      if (file.endsWith('.md') && file !== 'index.md') {
        this.processComponent(path.join(PARTS_DIR, file));
      }
    }

    console.log(`📊 Processed ${this.components.length} components`);

    // Generate location hierarchy
    const locationHierarchy = this.generateLocationHierarchy();

    // Generate search API data
    const searchAPI = this.generateSearchAPI();

    // Write index files
    const outputs = {
      'components.json': this.components,
      'indexes.json': this.indexes,
      'location-hierarchy.json': locationHierarchy,
      'search-api.json': searchAPI,
      'full-text-search.json': this.indexes.fullText
    };

    for (const [filename, data] of Object.entries(outputs)) {
      const outputPath = path.join(OUTPUT_DIR, filename);
      fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
      console.log(`✅ Generated ${filename}`);
    }

    // Generate summary report
    console.log('\n📈 Search Index Summary:');
    console.log(`  Components indexed: ${this.components.length}`);
    console.log(`  Categories: ${Object.keys(this.indexes.byCategory).length}`);
    console.log(`  Brands: ${Object.keys(this.indexes.byBrand).length}`);
    console.log(`  Locations: ${Object.keys(this.indexes.byLocation).length}`);
    console.log(`  Voltage levels: ${Object.keys(this.indexes.byVoltage).length}`);
    console.log(`  Package types: ${Object.keys(this.indexes.byPackage).length}`);
    console.log(`  Interfaces: ${Object.keys(this.indexes.byInterface).length}`);

    console.log(`\n🎯 Search indexes generated in: ${OUTPUT_DIR}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new SearchIndexGenerator();
  generator.generate().catch(console.error);
}

export default SearchIndexGenerator;
