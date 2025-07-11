#!/usr/bin/env node

/**
 * Deploy Script for binkey-data Electronics Inventory
 * 
 * This script handles the complete deployment process:
 * 1. Sync content from source repository
 * 2. Build the Quartz site
 * 3. Start local server or prepare for external deployment
 */

import { execSync, spawn } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Logger utility
 */
class Logger {
  static info(message) {
    console.log(`ℹ️  ${message}`);
  }
  
  static success(message) {
    console.log(`✅ ${message}`);
  }
  
  static warning(message) {
    console.log(`⚠️  ${message}`);
  }
  
  static error(message) {
    console.log(`❌ ${message}`);
  }
  
  static step(step, total, message) {
    console.log(`[${step}/${total}] ${message}`);
  }
}

/**
 * Configuration
 */
const CONFIG = {
  publicDir: './public',
  port: 8080,
  host: '127.0.0.1'
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    serve: true,
    open: true,
    skipSync: false,
    skipBuild: false,
    port: CONFIG.port
  };
  
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--no-serve':
        options.serve = false;
        break;
      case '--no-open':
        options.open = false;
        break;
      case '--skip-sync':
        options.skipSync = true;
        break;
      case '--skip-build':
        options.skipBuild = true;
        break;
      case '--port':
        options.port = parseInt(args[++i]) || CONFIG.port;
        break;
      case '--help':
      case '-h':
        showHelp();
        process.exit(0);
        break;
    }
  }
  
  return options;
}

/**
 * Show help information
 */
function showHelp() {
  console.log(`
🔧 binkey-data Deployment Script

Usage: npm run deploy [options]

Options:
  --no-serve      Don't start the local server after building
  --no-open       Don't automatically open browser
  --skip-sync     Skip content synchronization step
  --skip-build    Skip the build step (use existing build)
  --port <num>    Use custom port (default: 8080)
  --help, -h      Show this help message

Examples:
  npm run deploy                    # Full deployment with server
  npm run deploy -- --no-serve     # Build only, no server
  npm run deploy -- --port 3000    # Use port 3000
  npm run deploy -- --skip-sync    # Skip sync, just build and serve

Scripts:
  npm run sync        # Sync content only
  npm run build       # Build site only  
  npm run serve       # Serve existing build
  npm run dev         # Full development workflow
  npm run full-deploy # Sync + build (no server)
`);
}

/**
 * Run content synchronization
 */
async function syncContent() {
  Logger.step(1, 3, 'Synchronizing content...');
  
  try {
    execSync('npm run sync', { stdio: 'inherit' });
    Logger.success('Content synchronization completed');
  } catch (error) {
    Logger.error('Content synchronization failed');
    throw error;
  }
}

/**
 * Build the Quartz site
 */
async function buildSite() {
  Logger.step(2, 3, 'Building Quartz site...');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    Logger.success('Site build completed');
  } catch (error) {
    Logger.error('Site build failed');
    throw error;
  }
}

/**
 * Start local development server
 */
async function startServer(options) {
  Logger.step(3, 3, `Starting local server on port ${options.port}...`);
  
  if (!existsSync(CONFIG.publicDir)) {
    Logger.error('Public directory not found. Run build first.');
    process.exit(1);
  }
  
  try {
    const serverArgs = [
      'public',
      '-p', options.port.toString(),
      '-a', CONFIG.host,
      '--cors'
    ];
    
    if (options.open) {
      serverArgs.push('-o');
    }
    
    Logger.info(`Server will be available at: http://${CONFIG.host}:${options.port}`);
    
    // Use spawn for long-running server process
    const server = spawn('npx', ['http-server', ...serverArgs], {
      stdio: 'inherit'
    });
    
    server.on('error', (error) => {
      Logger.error(`Server failed to start: ${error.message}`);
      process.exit(1);
    });
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      Logger.info('Shutting down server...');
      server.kill('SIGINT');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      Logger.info('Shutting down server...');
      server.kill('SIGTERM');
      process.exit(0);
    });
    
    Logger.success('Server started successfully');
    Logger.info('Press Ctrl+C to stop the server');
    
  } catch (error) {
    Logger.error(`Failed to start server: ${error.message}`);
    throw error;
  }
}

/**
 * Check prerequisites
 */
function checkPrerequisites() {
  // Check if http-server is available
  try {
    execSync('npx http-server --version', { stdio: 'pipe' });
  } catch (error) {
    Logger.warning('http-server not found, it will be installed automatically');
  }
  
  // Check if quartz is available
  try {
    execSync('npx quartz --version', { stdio: 'pipe' });
  } catch (error) {
    Logger.error('Quartz CLI not found. Make sure you\'re in the correct directory.');
    process.exit(1);
  }
}

/**
 * Main deployment function
 */
async function main() {
  const options = parseArgs();
  
  console.log('🚀 Starting binkey-data deployment...\n');
  
  try {
    checkPrerequisites();
    
    if (!options.skipSync) {
      await syncContent();
    } else {
      Logger.info('Skipping content synchronization');
    }
    
    if (!options.skipBuild) {
      await buildSite();
    } else {
      Logger.info('Skipping site build');
    }
    
    if (options.serve) {
      await startServer(options);
    } else {
      console.log('\n🎉 Deployment completed successfully!');
      console.log('📁 Built files are in the public/ directory');
      console.log('🌐 To serve locally, run: npm run serve');
      console.log('📤 To deploy to a hosting service, upload the public/ directory');
    }
    
  } catch (error) {
    Logger.error(`Deployment failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
