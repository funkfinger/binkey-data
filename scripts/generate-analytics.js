#!/usr/bin/env node

/**
 * Inventory Analytics Generator
 * Generates comprehensive analytics and reports for the electronics inventory
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const PARTS_DIR = path.join(ROOT_DIR, 'parts');
const OUTPUT_DIR = path.join(ROOT_DIR, 'analytics');

class InventoryAnalytics {
  constructor() {
    this.components = [];
    this.cabinets = new Map();
    this.analytics = {
      overview: {},
      cabinets: {},
      categories: {},
      brands: {},
      valueAnalysis: {},
      alerts: [],
      trends: {}
    };
  }

  processComponent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);

      if (data.type !== 'electronic-component') return;

      const component = {
        id: path.basename(filePath, '.md'),
        ...data,
        filePath
      };

      this.components.push(component);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  processCabinet(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);

      if (data.type !== 'cabinet') return;

      this.cabinets.set(data.cabinet_number || data.cabinet, {
        number: data.cabinet_number || data.cabinet,
        totalBins: data.total_bins || data.bin_capacity,
        populatedBins: data.populated_bins,
        categories: data.categories || [],
        ...data
      });
    } catch (error) {
      console.error(`Error processing cabinet ${filePath}:`, error.message);
    }
  }

  generateOverviewAnalytics() {
    const totalComponents = this.components.length;
    const totalQuantity = this.components.reduce((sum, comp) => {
      const qty = parseInt(comp.quantity) || 0;
      return sum + qty;
    }, 0);

    const statusCounts = this.components.reduce((acc, comp) => {
      acc[comp.status] = (acc[comp.status] || 0) + 1;
      return acc;
    }, {});

    const totalBins = Array.from(this.cabinets.values()).reduce((sum, cab) => sum + (cab.totalBins || 0), 0);
    const populatedBins = Array.from(this.cabinets.values()).reduce((sum, cab) => sum + (cab.populatedBins || 0), 0);

    this.analytics.overview = {
      totalComponents,
      totalQuantity,
      totalCabinets: this.cabinets.size,
      totalBins,
      populatedBins,
      utilizationRate: totalBins > 0 ? ((populatedBins / totalBins) * 100).toFixed(1) : 0,
      statusDistribution: statusCounts,
      averageComponentsPerBin: populatedBins > 0 ? (totalComponents / populatedBins).toFixed(1) : 0
    };
  }

  generateCabinetAnalytics() {
    const cabinetAnalytics = {};

    // Analyze component distribution by cabinet
    const componentsByLocation = {};
    this.components.forEach(comp => {
      if (comp.location && Array.isArray(comp.location)) {
        comp.location.forEach(loc => {
          const cabinetMatch = loc.match(/^Cabinet-(\d+)/);
          if (cabinetMatch) {
            const cabinetNum = cabinetMatch[1];
            if (!componentsByLocation[cabinetNum]) {
              componentsByLocation[cabinetNum] = [];
            }
            componentsByLocation[cabinetNum].push(comp);
          }
        });
      }
    });

    // Generate analytics for each cabinet
    this.cabinets.forEach((cabinet, cabinetNum) => {
      const components = componentsByLocation[cabinetNum] || [];
      const totalQuantity = components.reduce((sum, comp) => sum + (parseInt(comp.quantity) || 0), 0);
      
      const categoryDistribution = components.reduce((acc, comp) => {
        acc[comp.category] = (acc[comp.category] || 0) + 1;
        return acc;
      }, {});

      const brandDistribution = components.reduce((acc, comp) => {
        acc[comp.brand] = (acc[comp.brand] || 0) + 1;
        return acc;
      }, {});

      cabinetAnalytics[cabinetNum] = {
        ...cabinet,
        componentCount: components.length,
        totalQuantity,
        utilizationRate: cabinet.totalBins > 0 ? ((cabinet.populatedBins / cabinet.totalBins) * 100).toFixed(1) : 0,
        categoryDistribution,
        brandDistribution,
        averageComponentsPerBin: cabinet.populatedBins > 0 ? (components.length / cabinet.populatedBins).toFixed(1) : 0
      };
    });

    this.analytics.cabinets = cabinetAnalytics;
  }

  generateCategoryAnalytics() {
    const categoryStats = {};

    this.components.forEach(comp => {
      if (!comp.category) return;

      if (!categoryStats[comp.category]) {
        categoryStats[comp.category] = {
          count: 0,
          totalQuantity: 0,
          brands: new Set(),
          avgPrice: 0,
          priceRanges: [],
          locations: new Set()
        };
      }

      const stats = categoryStats[comp.category];
      stats.count++;
      stats.totalQuantity += parseInt(comp.quantity) || 0;
      if (comp.brand) stats.brands.add(comp.brand);
      if (comp.price_range) stats.priceRanges.push(comp.price_range);
      if (comp.location) {
        comp.location.forEach(loc => stats.locations.add(loc));
      }
    });

    // Convert Sets to arrays and calculate averages
    Object.keys(categoryStats).forEach(category => {
      const stats = categoryStats[category];
      stats.brands = Array.from(stats.brands);
      stats.locations = Array.from(stats.locations);
      stats.brandCount = stats.brands.length;
      stats.locationCount = stats.locations.length;
    });

    this.analytics.categories = categoryStats;
  }

  generateBrandAnalytics() {
    const brandStats = {};

    this.components.forEach(comp => {
      if (!comp.brand) return;

      if (!brandStats[comp.brand]) {
        brandStats[comp.brand] = {
          count: 0,
          totalQuantity: 0,
          categories: new Set(),
          avgPrice: 0,
          priceRanges: []
        };
      }

      const stats = brandStats[comp.brand];
      stats.count++;
      stats.totalQuantity += parseInt(comp.quantity) || 0;
      if (comp.category) stats.categories.add(comp.category);
      if (comp.price_range) stats.priceRanges.push(comp.price_range);
    });

    // Convert Sets to arrays
    Object.keys(brandStats).forEach(brand => {
      const stats = brandStats[brand];
      stats.categories = Array.from(stats.categories);
      stats.categoryCount = stats.categories.length;
    });

    this.analytics.brands = brandStats;
  }

  generateAlerts() {
    const alerts = [];

    // Low stock alerts
    this.components.forEach(comp => {
      const quantity = parseInt(comp.quantity) || 0;
      if (quantity <= 1 && comp.status === 'available') {
        alerts.push({
          type: 'low_stock',
          severity: 'warning',
          component: comp.id,
          message: `Low stock: ${comp.title || comp.id} (${quantity} remaining)`,
          location: comp.location?.[0] || 'Unknown'
        });
      }
    });

    // Missing image alerts
    this.components.forEach(comp => {
      // This would need to be enhanced to actually check for image files
      if (!comp.image && !comp.datasheet) {
        alerts.push({
          type: 'missing_documentation',
          severity: 'info',
          component: comp.id,
          message: `Missing image or datasheet for ${comp.title || comp.id}`,
          location: comp.location?.[0] || 'Unknown'
        });
      }
    });

    // Duplicate detection (basic)
    const partNumbers = {};
    this.components.forEach(comp => {
      if (comp.part_number) {
        if (!partNumbers[comp.part_number]) {
          partNumbers[comp.part_number] = [];
        }
        partNumbers[comp.part_number].push(comp);
      }
    });

    Object.entries(partNumbers).forEach(([partNum, components]) => {
      if (components.length > 1) {
        alerts.push({
          type: 'potential_duplicate',
          severity: 'info',
          message: `Potential duplicates found for part number ${partNum}`,
          components: components.map(c => c.id)
        });
      }
    });

    this.analytics.alerts = alerts;
  }

  generateReport() {
    const report = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalComponents: this.analytics.overview.totalComponents,
        totalQuantity: this.analytics.overview.totalQuantity,
        utilizationRate: this.analytics.overview.utilizationRate,
        alertCount: this.analytics.alerts.length
      },
      ...this.analytics
    };

    return report;
  }

  async generate() {
    console.log('📊 Generating inventory analytics...');

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Process all component files
    const partsFiles = fs.readdirSync(PARTS_DIR);
    for (const file of partsFiles) {
      if (file.endsWith('.md') && file !== 'index.md') {
        this.processComponent(path.join(PARTS_DIR, file));
      }
    }

    // Process cabinet files
    const rootFiles = fs.readdirSync(ROOT_DIR);
    for (const file of rootFiles) {
      if (file.startsWith('am-cabinet-') && file.endsWith('.md')) {
        this.processCabinet(path.join(ROOT_DIR, file));
      }
    }

    console.log(`📈 Processed ${this.components.length} components and ${this.cabinets.size} cabinets`);

    // Generate analytics
    this.generateOverviewAnalytics();
    this.generateCabinetAnalytics();
    this.generateCategoryAnalytics();
    this.generateBrandAnalytics();
    this.generateAlerts();

    // Generate and save report
    const report = this.generateReport();
    
    const reportPath = path.join(OUTPUT_DIR, 'inventory-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate summary markdown report
    const summaryPath = path.join(OUTPUT_DIR, 'inventory-summary.md');
    const summaryContent = this.generateMarkdownSummary(report);
    fs.writeFileSync(summaryPath, summaryContent);

    console.log(`✅ Analytics generated:`);
    console.log(`  📄 JSON Report: ${reportPath}`);
    console.log(`  📝 Summary: ${summaryPath}`);
    console.log(`  🚨 Alerts: ${report.alerts.length}`);
  }

  generateMarkdownSummary(report) {
    return `# Inventory Analytics Report

Generated: ${new Date(report.generatedAt).toLocaleString()}

## Overview

- **Total Components**: ${report.overview.totalComponents}
- **Total Quantity**: ${report.overview.totalQuantity}
- **Cabinets**: ${report.overview.totalCabinets}
- **Bin Utilization**: ${report.overview.utilizationRate}%
- **Alerts**: ${report.alerts.length}

## Cabinet Utilization

${Object.entries(report.cabinets).map(([num, cabinet]) => 
  `- **Cabinet ${num}**: ${cabinet.componentCount} components, ${cabinet.utilizationRate}% utilized`
).join('\n')}

## Top Categories

${Object.entries(report.categories)
  .sort(([,a], [,b]) => b.count - a.count)
  .slice(0, 10)
  .map(([category, stats]) => `- **${category}**: ${stats.count} components`)
  .join('\n')}

## Alerts

${report.alerts.slice(0, 10).map(alert => 
  `- **${alert.type}**: ${alert.message}`
).join('\n')}

${report.alerts.length > 10 ? `\n... and ${report.alerts.length - 10} more alerts` : ''}
`;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const analytics = new InventoryAnalytics();
  analytics.generate().catch(console.error);
}

export default InventoryAnalytics;
