# 🚀 Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Git**: Make sure Git is installed on your system
3. **Node.js**: Version 16 or higher

## 🔧 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `portfolio` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Update Configuration

1. **Update Vite Config** (`vite.config.ts`):
   ```typescript
   base: '/your-repo-name/', // Replace with your actual repository name
   ```

2. **Update Personal Information** (`src/App.tsx`):
   - Replace "Your Name" with your actual name
   - Update email addresses
   - Update GitHub and LinkedIn URLs
   - Update project information

### Step 3: Initialize Git and Push

Run these commands in your project directory:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main (GitHub standard)
git branch -M main

# Add remote repository (replace with your GitHub username and repo name)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch
6. Click "Save"

### Step 6: Access Your Site

Your portfolio will be available at:
```
https://yourusername.github.io/portfolio/
```

## 🔄 Updating Your Site

After making changes to your code:

```bash
# Add your changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Deploy updates
npm run deploy
```

## 🛠️ Troubleshooting

### Common Issues

1. **Site not loading**:
   - Check if the repository is public
   - Verify GitHub Pages is enabled
   - Wait 5-10 minutes for deployment

2. **Build errors**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Wrong base path**:
   - Ensure `vite.config.ts` has the correct repository name
   - Repository name must match exactly

4. **gh-pages branch not found**:
   - Run `npm run deploy` again
   - Check if the deployment was successful

### Verification Commands

```bash
# Check if gh-pages branch exists
git branch -a

# Check deployment status
npm run build

# Test locally
npm run preview
```

## 📝 Custom Domain (Optional)

If you want to use a custom domain:

1. **Purchase a domain** (e.g., from Namecheap, GoDaddy)
2. **Add CNAME record**:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `yourusername.github.io`
3. **Update GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 🎯 Next Steps

1. **Customize Content**: Update projects, skills, and personal info
2. **Add Analytics**: Consider adding Google Analytics
3. **SEO Optimization**: Add meta tags and descriptions
4. **Performance**: Optimize images and assets
5. **Testing**: Test on different devices and browsers

## 📞 Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://pages.github.com/)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check the [gh-pages package documentation](https://github.com/tschaub/gh-pages)

---

**Your portfolio is now live! 🎉** 