# 🚀 binkey-data Deployment Guide

This guide covers the automated deployment system for the binkey-data electronics inventory using Quartz v4 and Node.js.

## 📋 Prerequisites

- **Node.js v18+** (LTS recommended)
- **npm v10.9.2+**
- **binkey-data repository** in parent directory (`../binkey-data`)

## 🎯 Quick Start

### One-Command Deployment
```bash
npm run deploy
```
This will:
1. Sync content from your binkey-data repository
2. Build the Quartz site
3. Start local server at http://127.0.0.1:8080
4. Automatically open in browser

### Development Workflow
```bash
npm run dev
```
Same as deploy but optimized for development.

## 📜 Available Scripts

### Core Scripts

| Script | Description |
|--------|-------------|
| `npm run deploy` | Full deployment with server |
| `npm run dev` | Development workflow (sync + build + serve) |
| `npm run sync` | Sync content from source repository |
| `npm run build` | Build Quartz site only |
| `npm run serve` | Serve existing build |
| `npm run full-deploy` | Sync + build (no server) |

### Advanced Options

```bash
# Deploy without starting server
npm run deploy -- --no-serve

# Deploy without opening browser
npm run deploy -- --no-open

# Use custom port
npm run deploy -- --port 3000

# Skip content sync (use existing content)
npm run deploy -- --skip-sync

# Skip build (use existing build)
npm run deploy -- --skip-build

# Show help
npm run deploy -- --help
```

## 🔄 Deployment Process

### 1. Content Synchronization (`npm run sync`)

**What it does:**
- Copies content from `../binkey-data/binkey-data/` to `./content/`
- Excludes unwanted files (`.obsidian`, `ai-prompts`, etc.)
- Preserves file structure and metadata
- Updates timestamps for proper indexing

**Key features:**
- Uses `rsync` for efficient copying
- Automatic fallback to `cp` if rsync unavailable
- Excludes sensitive/unnecessary files
- Verifies copied content integrity

### 2. Site Building (`npm run build`)

**What it does:**
- Processes markdown files with Quartz
- Generates static HTML/CSS/JS
- Creates search index and site map
- Optimizes images and assets
- Outputs to `./public/` directory

### 3. Local Serving (`npm run serve`)

**What it does:**
- Starts HTTP server on specified port (default: 8080)
- Enables CORS for development
- Automatically opens browser
- Provides hot-reload capabilities

## 📁 Directory Structure

```
binkey-data-web/
├── content/              # Synced content from binkey-data
├── public/               # Built static site
├── scripts/              # Deployment scripts
│   ├── sync-content.js   # Content synchronization
│   └── deploy.js         # Main deployment script
├── quartz/               # Quartz framework
├── package.json          # NPM configuration
└── quartz.config.ts      # Quartz configuration
```

## 🔧 Configuration

### Environment Variables

```bash
# Optional: Custom source repository path
export BINKEY_SOURCE="../binkey-data"

# Optional: Custom port
export PORT=3000
```

### Script Configuration

Edit `scripts/sync-content.js` to modify:
- Source repository path
- Excluded file patterns
- Sync behavior

Edit `scripts/deploy.js` to modify:
- Default port
- Server options
- Deployment steps

## 🌐 Deployment Options

### Local Development
```bash
npm run dev
# Site available at http://127.0.0.1:8080
```

### Static File Hosting
```bash
npm run full-deploy
# Upload public/ directory to your hosting service
```

### Popular Hosting Services

#### GitHub Pages
```bash
# Build the site
npm run full-deploy

# Copy public/ contents to your GitHub Pages repository
cp -r public/* /path/to/your-github-pages-repo/
```

#### Netlify
```bash
# Build the site
npm run full-deploy

# Deploy public/ directory via Netlify CLI
netlify deploy --prod --dir=public
```

#### Vercel
```bash
# Build the site
npm run full-deploy

# Deploy via Vercel CLI
vercel --prod public/
```

## 🔍 Troubleshooting

### Common Issues

#### Source Repository Not Found
```
❌ Source repository not found at: ../binkey-data
```
**Solution:** Ensure binkey-data repository is in parent directory

#### Build Failures
```
❌ Site build failed
```
**Solutions:**
- Check for markdown syntax errors
- Verify all wikilinks are valid
- Run `npm run check` for diagnostics

#### Server Won't Start
```
❌ Server failed to start
```
**Solutions:**
- Check if port is already in use
- Try different port: `npm run deploy -- --port 3001`
- Ensure public/ directory exists

#### Content Not Updating
**Solutions:**
- Force sync: `npm run sync`
- Clear content: `rm -rf content/* && npm run sync`
- Check source repository for changes

### Debug Mode

Enable verbose logging:
```bash
DEBUG=1 npm run deploy
```

## 📊 Performance Tips

### Faster Builds
- Use `--skip-sync` if content hasn't changed
- Use `--skip-build` if only serving existing build
- Consider incremental builds for large inventories

### Optimization
- Images are automatically optimized during build
- CSS/JS is minified and bundled
- Search index is compressed

## 🔒 Security Notes

- Sensitive files are automatically excluded during sync
- No credentials or private data should be in content
- Local server is bound to 127.0.0.1 by default

## 📈 Monitoring

### Build Statistics
The build process shows:
- Number of files processed
- Build time and performance
- Any warnings or errors

### Content Verification
Sync process verifies:
- Key files are present
- Total file counts
- Attachment synchronization

## 🆘 Support

### Getting Help
```bash
npm run deploy -- --help
```

### Common Commands
```bash
# Reset everything and start fresh
rm -rf content/* public/*
npm run deploy

# Quick content update
npm run sync && npm run build

# Serve existing build
npm run serve
```

---

**Built with ❤️ for the binkey-data electronics inventory system**
