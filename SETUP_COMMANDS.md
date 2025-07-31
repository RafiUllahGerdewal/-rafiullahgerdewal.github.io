# 🚀 Quick Setup Commands

## 📋 Initial Setup (Already Done)

```bash
# Create Vite React TypeScript project
npm create vite@latest portfolio -- --template react-ts

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Install Tailwind CSS and other dependencies
npm install -D tailwindcss postcss autoprefixer @types/node

# Install GitHub Pages deployment package
npm install gh-pages
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🚀 Deployment Commands

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your details)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## 🔄 Update Commands

```bash
# After making changes to your code
git add .
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

## 🛠️ Troubleshooting Commands

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check if gh-pages branch exists
git branch -a

# Test build locally
npm run build
npm run preview
```

## 📝 Customization Checklist

Before deploying, update these files:

1. **`vite.config.ts`**:
   ```typescript
   base: '/your-repo-name/', // Your actual repository name
   ```

2. **`src/App.tsx`**:
   - Replace "Your Name" with your actual name
   - Update email addresses
   - Update GitHub and LinkedIn URLs
   - Update project information
   - Update avatar initials

3. **`package.json`** (optional):
   ```json
   {
     "name": "your-portfolio-name",
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

## 🎯 GitHub Pages Setup

1. Create repository on GitHub (make it public)
2. Push code using commands above
3. Run `npm run deploy`
4. Go to repository Settings → Pages
5. Set source to "Deploy from a branch"
6. Select `gh-pages` branch
7. Save

Your site will be available at: `https://yourusername.github.io/portfolio/`

---

**All commands are ready to copy and paste! 🎉** 