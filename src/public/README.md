# Public Directory - Fish It Website

This directory contains static assets that will be served from the root of the deployed website.

## Contents

### SEO & Robots
- `robots.txt` - Search engine crawler directives
- `sitemap.xml` - **NEEDS TO BE MOVED from `/src/public/sitemap.xml`**

### Favicons (Production-Ready)
- `favicon.ico` - ⏳ TO BE GENERATED
- `favicon.svg` - ✅ Created (modern browsers)
- `favicon-16x16.png` - ⏳ TO BE GENERATED  
- `favicon-32x32.png` - ⏳ TO BE GENERATED
- `apple-touch-icon.png` - ⏳ TO BE GENERATED

### Deployment Configuration
- `_redirects` - Cloudflare Pages SPA routing

### Generation Tools
- `generate-favicons.html` - Browser-based favicon generator (no dependencies)
- `generate-favicons.js` - Node.js favicon generator script (requires sharp & to-ico)

### Documentation
- `FAVICON_SETUP.md` - Complete favicon setup guide
- `FAVICON_QUICKSTART.md` - Quick start instructions
- `README.md` - This file

## Important Notes

### For Deployment

1. **Move sitemap.xml**: The sitemap is currently at `/src/public/sitemap.xml` and needs to be moved to `/public/sitemap.xml` before deployment.

2. **Generate Favicons**: Use either generation tool to create the missing favicon files before deploying.

3. **Verify Build Output**: After running `npm run build`, check that the `build/` directory contains:
   - All favicon files
   - robots.txt
   - sitemap.xml
   - _redirects

### File Paths in Production

All files in this directory will be accessible at the root URL:
- `https://fishit.gg/favicon.ico`
- `https://fishit.gg/robots.txt`
- `https://fishit.gg/sitemap.xml`
- etc.

### Do Not Place Here

- Component files (.tsx)
- TypeScript source files (.ts)
- Images used in React components (use `/imports/` or Unsplash)
- Build artifacts

### Vite Behavior

Vite automatically copies everything in `/public/` to the build output root during the build process. No import statements needed - files are served as-is.

## Quick Actions

### Generate Favicons Now
```bash
# Method 1: Browser (easiest)
open public/generate-favicons.html

# Method 2: Node.js (automated)
npm install sharp to-ico
npm run generate:favicons
```

### Move Sitemap (manual)
Move `/src/public/sitemap.xml` to `/public/sitemap.xml`

### Verify Deployment
After deploying, test these URLs:
- https://fishit.gg/robots.txt
- https://fishit.gg/sitemap.xml  
- https://fishit.gg/favicon.ico
- https://fishit.gg/apple-touch-icon.png
