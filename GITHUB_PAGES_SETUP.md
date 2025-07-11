# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your binkey-data electronics inventory to GitHub Pages with automated builds.

## 📋 **Prerequisites**

- [x] Repository pushed to GitHub
- [x] GitHub Actions workflow file created (`.github/workflows/deploy-github-pages.yml`)
- [x] Package.json configured with GitHub Pages scripts

## 🔧 **Setup Steps**

### **Step 1: Configure GitHub Repository Settings**

1. **Go to your GitHub repository** → `https://github.com/funkfinger/binkey-data`
2. **Click Settings tab** (top navigation)
3. **Scroll down to "Pages"** (left sidebar)
4. **Configure Source:**
   - Source: `GitHub Actions`
   - ✅ This enables the automated workflow we created

### **Step 2: Push Your Changes**

```bash
# Add all files including the new GitHub Actions workflow
git add .

# Commit the changes
git commit -m "Add GitHub Pages deployment with GitHub Actions"

# Push to main branch (triggers deployment)
git push origin main
```

### **Step 3: Monitor Deployment**

1. **Go to Actions tab** in your GitHub repository
2. **Watch the "Deploy to GitHub Pages" workflow** run
3. **Check for any errors** in the build logs
4. **Wait for completion** (usually 2-3 minutes)

### **Step 4: Access Your Site**

Your site will be available at:
```
https://funkfinger.github.io/binkey-data/
```

## 🎯 **Deployment Options**

### **Option 1: Automatic Deployment (Recommended)**
- ✅ **Triggers:** Every push to `main` branch
- ✅ **Process:** GitHub Actions builds and deploys automatically
- ✅ **No manual work** required after setup

### **Option 2: Manual Deployment**
```bash
# Install gh-pages if not already installed
npm install

# Build and deploy manually
npm run pages:deploy
```

### **Option 3: Preview Before Deploy**
```bash
# Build and preview locally before pushing
npm run pages:preview
```

## 🔍 **Workflow Details**

The GitHub Actions workflow (`.github/workflows/deploy-github-pages.yml`) does:

1. **Checkout** your repository code
2. **Setup Node.js** environment
3. **Install** web dependencies (`cd web && npm ci`)
4. **Sync content** (`npm run sync`)
5. **Build site** with Quartz (`npm run build`)
6. **Deploy** to GitHub Pages

## 🛠️ **Troubleshooting**

### **Build Fails**
- Check the **Actions tab** for error logs
- Ensure all dependencies are in `web/package.json`
- Verify content symlinks are working

### **Site Not Loading**
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings are correct
- Verify the workflow completed successfully

### **Content Not Updating**
- Ensure you pushed to the `main` branch
- Check that the workflow ran after your push
- Clear browser cache

## 📱 **Custom Domain (Optional)**

To use a custom domain like `inventory.yourname.com`:

1. **Add CNAME file** to repository root:
   ```bash
   echo "inventory.yourname.com" > CNAME
   git add CNAME && git commit -m "Add custom domain" && git push
   ```

2. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: inventory (or subdomain)
   Value: funkfinger.github.io
   ```

3. **Update GitHub Pages settings** to use custom domain

## 🔄 **Updating Your Site**

Once set up, updating is simple:

1. **Edit your inventory** in VS Code/Foam as usual
2. **Commit and push** changes:
   ```bash
   git add .
   git commit -m "Add new components to inventory"
   git push origin main
   ```
3. **GitHub Actions automatically rebuilds** and deploys
4. **Site updates** in 2-3 minutes

## 🎉 **Benefits**

- **🌐 Public Access:** Share your inventory with others
- **📱 Mobile Friendly:** Access from any device
- **🔍 Search Friendly:** Google can index your components
- **⚡ Fast Loading:** Static site with CDN
- **🆓 Free Hosting:** No hosting costs
- **🔄 Auto Updates:** Push to deploy

## 📊 **Site Features**

Your deployed site will have:
- **🏠 Homepage:** Complete inventory overview
- **📦 Cabinet Pages:** Detailed cabinet organization
- **🔍 Search:** Full-text search across components
- **🏷️ Tags:** Filter by component categories
- **📸 Images:** All component photos and diagrams
- **🔗 Navigation:** Wikilink-style browsing
- **📱 Responsive:** Works on all devices

---

**🚀 Ready to deploy? Follow the steps above and your electronics inventory will be live on the web!**
