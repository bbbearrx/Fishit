# Fish It - Cloudflare Pages Deployment Guide

## Pre-Deployment Checklist

### ✅ Completed
- [x] Removed all `figma:asset` imports
- [x] Created `/public/assets/` directory
- [x] Updated component to use standard `/assets/` paths
- [x] Verified no Figma-specific dependencies

### 🔧 Required Before Deployment
- [ ] Add `bloxy-fish.png` to `/public/assets/` directory
- [ ] Test local build: `npm run build`
- [ ] Test local preview: `npm run preview`

## Asset Requirements

Place the following file in `/public/assets/`:
- **bloxy-fish.png** - Golden legendary fish image (180px optimized, PNG with transparency)

## Build Configuration

### Vite Configuration
The project uses standard Vite configuration:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Cloudflare Pages Setup

### 1. Connect Repository
- Go to Cloudflare Dashboard → Pages
- Click "Create a project"
- Connect your Git repository

### 2. Build Settings
Configure the following in Cloudflare Pages:

**Build command:** `npm run build`  
**Build output directory:** `dist`  
**Node version:** `18` or higher

### 3. Environment Variables
No environment variables required for this static site.

### 4. Custom Domain
Once deployed, configure your custom domain:
- Domain: `fishit.gg`
- Add DNS records as instructed by Cloudflare

## Directory Structure

```
fishit-gg/
├── public/              # Static assets
│   ├── assets/         # Images and media
│   │   ├── README.md
│   │   └── bloxy-fish.png (add this!)
│   ├── robots.txt
│   └── sitemap.xml
├── src/                # Source code
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── data/           # Static data
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── routes.tsx      # Routing config
├── index.html          # HTML entry
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript config
```

## Deployment Process

### First-Time Deployment

1. **Add Assets**
   ```bash
   # Place bloxy-fish.png in /public/assets/
   cp /path/to/bloxy-fish.png ./public/assets/
   ```

2. **Test Locally**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

3. **Verify Build**
   - Check that `/assets/bloxy-fish.png` is accessible
   - Test all routes
   - Verify animations work

4. **Deploy to Cloudflare**
   - Push changes to Git repository
   - Cloudflare Pages will auto-deploy
   - Monitor build logs

### Subsequent Deployments
- Push to main branch
- Cloudflare automatically rebuilds and deploys
- Preview deployments for pull requests

## Post-Deployment Verification

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All routes are accessible
- [ ] Assets load (especially bloxy-fish.png)
- [ ] SEO meta tags are present
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Fish swimming animations work
- [ ] Internal links function correctly

## Troubleshooting

### Issue: Assets Not Loading
**Solution:** Ensure assets are in `/public/assets/` and referenced as `/assets/filename.png`

### Issue: 404 on Routes
**Solution:** Cloudflare Pages should auto-configure SPA routing. If not, add `_redirects` file:
```
/* /index.html 200
```

### Issue: Build Fails
**Solution:** Check Node version (must be 18+) and run `npm install` to update dependencies

## Performance Optimization

The site is already optimized for:
- ✅ Static asset caching via Cloudflare CDN
- ✅ Code splitting (Vite handles automatically)
- ✅ Tree shaking (production builds)
- ✅ Minification (Vite handles automatically)

## Monitoring

After deployment, monitor:
- Page load times (Cloudflare Analytics)
- Error rates (Browser console in production)
- SEO performance (Google Search Console)
- User engagement (analytics platform of choice)

## Support

For issues related to:
- **Build errors:** Check Cloudflare Pages build logs
- **Asset loading:** Verify files exist in `/public/assets/`
- **Routing issues:** Review `/src/routes.tsx`
- **Styling issues:** Check `/src/styles/globals.css`

---

**Status:** ✅ Ready for deployment after adding bloxy-fish.png asset
**Last Updated:** February 16, 2026
