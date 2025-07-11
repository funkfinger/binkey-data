#!/usr/bin/env node

/**
 * Configure Base URL Script for binkey-data Electronics Inventory
 * 
 * This script helps switch between local development and GitHub Pages URLs
 * in the Quartz configuration.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG_FILE = join(__dirname, '..', 'quartz.config.ts');

const URLS = {
  local: 'localhost:8080',
  github: 'funkfinger.github.io/binkey-data'
};

function updateBaseUrl(target) {
  if (!URLS[target]) {
    console.error(`❌ Invalid target: ${target}`);
    console.log('Valid targets: local, github');
    process.exit(1);
  }

  try {
    let config = readFileSync(CONFIG_FILE, 'utf8');
    
    // Replace baseUrl line
    const oldPattern = /baseUrl: "[^"]*"/;
    const newUrl = `baseUrl: "${URLS[target]}"`;
    
    if (!oldPattern.test(config)) {
      console.error('❌ Could not find baseUrl in config file');
      process.exit(1);
    }
    
    config = config.replace(oldPattern, newUrl);
    writeFileSync(CONFIG_FILE, config);
    
    console.log(`✅ Updated baseUrl to: ${URLS[target]}`);
    console.log(`📝 Target: ${target}`);
    
  } catch (error) {
    console.error(`❌ Error updating config: ${error.message}`);
    process.exit(1);
  }
}

// Get target from command line argument
const target = process.argv[2];

if (!target) {
  console.log('🔧 Base URL Configuration Tool');
  console.log('');
  console.log('Usage: node configure-base-url.js <target>');
  console.log('');
  console.log('Targets:');
  console.log('  local  - Configure for local development (localhost:8080)');
  console.log('  github - Configure for GitHub Pages (funkfinger.github.io/binkey-data)');
  console.log('');
  console.log('Examples:');
  console.log('  node configure-base-url.js local');
  console.log('  node configure-base-url.js github');
  process.exit(0);
}

updateBaseUrl(target);
