# Local Hosting Setup for binkey-data Foam Project

## Recommended Solution: Quartz v4

Quartz v4 is the optimal choice for hosting your Foam project locally with full wikilink support.

## Prerequisites

- Node.js v18+ (LTS recommended)
- Git
- Your existing binkey-data Foam project

## Setup Instructions

### 1. Install Quartz

```bash
# Clone Quartz v4
git clone https://github.com/jackyzha0/quartz.git binkey-data-web
cd binkey-data-web

# Install dependencies
npm install
```

### 2. Configure for Your Project

```bash
# Remove default content
rm -rf content/*

# Copy your binkey-data content
cp -r ../binkey-data/binkey-data/* content/
cp -r ../binkey-data/attachments content/attachments
```

### 3. Update Quartz Configuration

Create/edit `quartz.config.ts`:

```typescript
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Electronics Inventory - binkey-data",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian"],
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
```

### 4. Customize Styling (Optional)

Edit `quartz/styles/custom.scss` to match your preferences:

```scss
// Custom styles for electronics inventory
.electronics-component {
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.cabinet-info {
  background-color: #f6f8fa;
  padding: 0.5rem;
  border-left: 4px solid #0969da;
}

// Improve image display for component photos
img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### 5. Build and Serve

```bash
# Build the site
npx quartz build

# Serve locally with hot reload
npx quartz serve
```

Your site will be available at `http://localhost:8080`

## Key Features You'll Get

### ✅ **Native Wikilink Support**
- `[[component-name]]` links work automatically
- Backlinks panel shows connections
- Graph view of your inventory relationships

### ✅ **Foam Compatibility**
- All your existing frontmatter preserved
- Tags work as expected
- File structure maintained

### ✅ **Enhanced Features**
- Full-text search across all components
- Interactive graph visualization
- Mobile-responsive design
- Fast static site generation

### ✅ **Development Workflow**
- Hot reload during development
- Easy deployment to any static host
- Git-based content management

## Alternative Solutions Considered

### VitePress + Plugin
- **Pros**: Very fast, Vue ecosystem
- **Cons**: Requires custom wikilink plugin, more setup
- **Verdict**: Good but more complex than needed

### Docusaurus
- **Pros**: React-based, good docs features
- **Cons**: Overkill for personal wiki, limited wikilink support
- **Verdict**: Too heavy for this use case

### Custom Next.js/Gatsby
- **Pros**: Full control, React ecosystem
- **Cons**: Significant development time, need to build wikilink parsing
- **Verdict**: Too much work for the benefit

## Deployment Options

Once you're happy with local hosting, you can easily deploy to:

- **GitHub Pages**: Free, automatic builds
- **Netlify**: Great for continuous deployment
- **Vercel**: Excellent performance
- **Self-hosted**: Any static file server

## Maintenance

```bash
# Update content (in your main binkey-data repo)
cd ../binkey-data
# Make changes to your Foam files

# Sync to web version
cd ../binkey-data-web
cp -r ../binkey-data/binkey-data/* content/
npx quartz build
```

## Why Quartz v4 is Perfect for Your Project

1. **Zero Configuration Wikilinks**: Works with your existing `[[component-name]]` syntax
2. **Foam-First Design**: Built specifically for personal knowledge management
3. **Modern Stack**: Uses Vite, TypeScript, and other well-known packages
4. **Active Development**: Regularly updated with new features
5. **Great Performance**: Fast builds and runtime performance
6. **Extensible**: Easy to customize and extend as needed

This solution gives you a professional-looking, fast, searchable web interface for your electronics inventory with minimal setup time.
