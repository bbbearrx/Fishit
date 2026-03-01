# 🚀 Deployment Checklist - Fish It Website

## Pre-Deployment Tasks

### ✅ COMPLETED

- [x] Routing configuration for Cloudflare Pages
- [x] Sitemap.xml created with 281 routes
- [x] Favicon links added to index.html `<head>`
- [x] SVG favicon created (`/public/favicon.svg`)
- [x] Favicon generation tools created
- [x] Documentation created
- [x] robots.txt created in `/public/`
- [x] `_redirects` file created for SPA routing

### ⏳ PENDING (ACTION REQUIRED)

#### 1. Move Sitemap to Public Directory
**Priority: HIGH | Time: 1 minute**

The sitemap is currently at `/src/public/sitemap.xml` and needs to be at `/public/sitemap.xml`.

**Action:**
```bash
# Manual move (recommended)
mv src/public/sitemap.xml public/sitemap.xml

# Or copy if you want to keep original
cp src/public/sitemap.xml public/sitemap.xml
```

**Why:** Vite only serves files from `/public/` - the `/src/public/` directory won't be included in the build output.

**Verification:** Check that `/public/sitemap.xml` exists and `/src/public/sitemap.xml` is removed.

---

#### 2. Generate Favicon Image Files
**Priority: HIGH | Time: 5-10 minutes**

Missing favicon files that need to be generated:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

**Action - Option A (Easiest, No Installation):**
1. Open `/public/generate-favicons.html` in any web browser
2. Click "Download All (as PNG)"
3. Go to https://www.favicon-generator.org/
4. Upload `favicon-32x32.png`
5. Download the generated `favicon.ico`
6. Place all files in `/public/` directory

**Action - Option B (Automated, Requires Node.js):**
```bash
npm install sharp to-ico
npm run generate:favicons
```

**Why:** Google Search results and browser tabs require these files for proper icon display.

**Verification:** Run `ls -la public/favicon*` and confirm all files exist.

---

## Build & Deploy Process

### Step 1: Pre-Build Verification

```bash
# Check sitemap location
ls -la public/sitemap.xml

# Check favicon files
ls -la public/favicon.ico
ls -la public/favicon-16x16.png
ls -la public/favicon-32x32.png
ls -la public/apple-touch-icon.png
ls -la public/favicon.svg

# Check other public files
ls -la public/robots.txt
ls -la public/_redirects
```

**All commands should show files, not "No such file or directory"**

---

### Step 2: Local Build Test

```bash
# Clean install dependencies (optional but recommended)
npm clean-install

# Run production build
npm run build

# Verify build output
ls -la build/favicon*
ls -la build/robots.txt
ls -la build/sitemap.xml
ls -la build/_redirects
```

**The build/ directory should contain all public assets**

---

### Step 3: Local Preview

```bash
# Preview the production build locally
npm run preview
```

**Test in browser:**
- Open http://localhost:4173 (or whatever port Vite shows)
- Verify favicon appears in browser tab
- Check http://localhost:4173/robots.txt loads
- Check http://localhost:4173/sitemap.xml loads
- Check http://localhost:4173/favicon.ico loads
- Navigate between pages to verify routing works

---

### Step 4: Deploy to Cloudflare Pages

#### Cloudflare Pages Settings:

**Build Configuration:**
- Build command: `npm run build`
- Build output directory: `build`
- Root directory: `/` (leave empty or set to root)
- Node.js version: 18 or higher

**Environment Variables:**
- None required for this project

#### Deployment Steps:

1. Connect repository to Cloudflare Pages
2. Set build configuration (above)
3. Trigger deployment
4. Wait for build to complete
5. Proceed to verification

---

### Step 5: Post-Deployment Verification

#### Test Core URLs (Replace fishit.gg with your actual domain):

**Static Assets:**
- [ ] https://fishit.gg/favicon.ico
- [ ] https://fishit.gg/favicon.svg
- [ ] https://fishit.gg/favicon-16x16.png
- [ ] https://fishit.gg/favicon-32x32.png
- [ ] https://fishit.gg/apple-touch-icon.png
- [ ] https://fishit.gg/robots.txt
- [ ] https://fishit.gg/sitemap.xml

**Navigation & Routing:**
- [ ] https://fishit.gg/ (home)
- [ ] https://fishit.gg/fish-database
- [ ] https://fishit.gg/fishing-rods
- [ ] https://fishit.gg/guides
- [ ] https://fishit.gg/fish/clownfish (individual fish page)
- [ ] https://fishit.gg/locations/fisherman-island
- [ ] https://fishit.gg/some-random-invalid-url (should show 404 page)

**Browser Tests:**
- [ ] Chrome - Check favicon in tab
- [ ] Firefox - Check favicon in tab
- [ ] Safari - Check favicon in tab
- [ ] Mobile Safari - Add to home screen, check icon
- [ ] Chrome Mobile - Check favicon in tab

**SEO Verification:**
- [ ] robots.txt loads and contains sitemap URL
- [ ] sitemap.xml loads and contains all 281 URLs
- [ ] Page titles are correct (dynamic per route)
- [ ] Meta tags present (view source on any page)
- [ ] Favicon visible in browser tabs

---

## Troubleshooting

### Issue: Favicon not showing after deployment

**Solutions:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache completely
3. Try incognito/private mode
4. Check Cloudflare cache:
   - Go to Cloudflare Dashboard
   - Caching → Purge Everything
   - Wait 5-10 minutes
5. Verify file exists: https://fishit.gg/favicon.ico (should download/display)

---

### Issue: Sitemap/robots.txt returns 404

**Solutions:**
1. Verify files are in `/public/` NOT `/src/public/`
2. Rebuild the project: `npm run build`
3. Check `build/` output includes the files
4. Redeploy to Cloudflare Pages
5. Clear Cloudflare cache

---

### Issue: Routes return 404 on refresh

**Solutions:**
1. Verify `_redirects` file exists in `/public/`
2. Content should be: `/* /index.html 200`
3. Rebuild and redeploy
4. Check Cloudflare Pages build logs for errors

---

### Issue: Build fails on Cloudflare

**Solutions:**
1. Check build logs for specific error
2. Verify build works locally: `npm run build`
3. Check Node.js version (should be 18+)
4. Ensure all dependencies are in package.json
5. Verify no imports from `/src/public/` - move files to `/public/`

---

## Production URL Testing

After deployment is complete and all checks pass, test the production site:

### Google Search Console
1. Add property: https://fishit.gg
2. Submit sitemap: https://fishit.gg/sitemap.xml
3. Wait 24-48 hours for indexing
4. Monitor for errors

### Rich Results Test
1. Go to https://search.google.com/test/rich-results
2. Test a few key pages (home, fish pages, guides)
3. Fix any structured data errors

### PageSpeed Insights
1. Test: https://pagespeed.web.dev/
2. Check mobile and desktop scores
3. Verify images load correctly
4. Check for any console errors

---

## Success Criteria

The deployment is successful when:

- ✅ All static assets load (favicon, robots.txt, sitemap.xml)
- ✅ All routes work correctly (no 404s on page refresh)
- ✅ Favicon appears in browser tabs across all browsers
- ✅ Sitemap.xml contains all 281 URLs
- ✅ robots.txt points to sitemap
- ✅ No console errors in browser DevTools
- ✅ Mobile responsive design works
- ✅ Navigation works correctly
- ✅ Build completes without errors
- ✅ Site is accessible at production URL

---

## Final Notes

**Before marking complete:**
1. Delete `/FAVICON_TODO.md` (after favicons generated)
2. Delete `/src/public/` directory (after moving sitemap)
3. Archive this checklist for reference
4. Update any project documentation with live URLs

**Performance Notes:**
- First load may be slow (~2-3s) due to React hydration
- Subsequent navigation should be instant (SPA)
- Images use Unsplash URLs (external CDN)
- Consider adding meta tags for Open Graph/Twitter cards (future enhancement)

**Maintenance:**
- Update sitemap.xml when adding new fish/rods/guides
- Regenerate favicons if logo changes
- Keep robots.txt updated if adding restricted content
- Monitor Google Search Console for SEO issues

---

**Current Status:** ⏳ Awaiting favicon generation and sitemap move

**Next Action:** Generate favicons using `/public/generate-favicons.html`
