# How to Move the Sitemap File

## Quick Summary
You need to move `/src/public/sitemap.xml` → `/public/sitemap.xml`

## Why This Is Needed
Vite and Cloudflare Pages serve static files from the `/public/` directory. The sitemap is currently in `/src/public/`, which won't be accessible after deployment.

---

## Method 1: Using Figma Make Editor (Easiest)

### Step-by-Step Instructions

1. **Open the source file**
   - In Figma Make, click on `/src/public/sitemap.xml`
   - This will open the XML file in the editor

2. **Select all content**
   - Click inside the editor
   - Press `Ctrl+A` (Windows/Linux) or `Cmd+A` (Mac)
   - All 1,202 lines should be highlighted

3. **Copy the content**
   - Press `Ctrl+C` (Windows/Linux) or `Cmd+C` (Mac)
   - The entire sitemap XML is now copied to your clipboard

4. **Create the new file**
   - Look for a "New File" or "+" button in Figma Make
   - Name the new file: `sitemap.xml`
   - Make sure it's created in the `/public/` directory (NOT `/src/public/`)

5. **Paste the content**
   - Click in the new empty file
   - Press `Ctrl+V` (Windows/Linux) or `Cmd+V` (Mac)
   - The entire XML content should paste in

6. **Save the new file**
   - Save the file (usually automatic in Figma Make)
   - Verify it exists at `/public/sitemap.xml`

7. **Delete the old file** (optional but recommended)
   - Navigate back to `/src/public/sitemap.xml`
   - Delete this file (it's no longer needed)
   - You can also delete the entire `/src/public/` directory

---

## Method 2: If You Have Local Access to Files

If you've downloaded the project or have file system access:

### On Windows:
```cmd
move src\public\sitemap.xml public\sitemap.xml
```

### On Mac/Linux:
```bash
mv src/public/sitemap.xml public/sitemap.xml
```

### Or using a file manager:
1. Navigate to `src/public/` folder
2. Right-click `sitemap.xml`
3. Choose "Cut" (Ctrl+X / Cmd+X)
4. Navigate to `public/` folder
5. Choose "Paste" (Ctrl+V / Cmd+V)

---

## Verification Checklist

After moving the file, verify these things:

### ✅ File Location
- [ ] `/public/sitemap.xml` exists
- [ ] `/src/public/sitemap.xml` does NOT exist (deleted)

### ✅ File Content
- [ ] File starts with: `<?xml version="1.0" encoding="UTF-8"?>`
- [ ] File has `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` on line 2
- [ ] File ends with: `</urlset>`
- [ ] File has approximately 1,202 lines
- [ ] File contains 281 `<url>` entries

### ✅ Quick Verification
Open the file and check:
1. **First URL**: `<loc>https://fishit.gg/</loc>` (homepage)
2. **Last URL**: `<loc>https://fishit.gg/fishing-rods/hyper-rod</loc>` (final rod page)

---

## File Details

**Current Location**: `/src/public/sitemap.xml` ❌  
**Target Location**: `/public/sitemap.xml` ✅

**File Stats**:
- Size: 1,202 lines
- Format: XML (UTF-8)
- Total URLs: 281
- File size: ~40-45 KB

**URL Breakdown**:
- 1 homepage
- 8 main navigation pages
- 11 location detail pages
- 7 rarity pages
- 16 guide pages
- 207 individual fish pages
- 23 individual fishing rod pages
- 8 hub/database pages

---

## Common Issues

### Issue 1: "Can't find the /public/ directory"
**Solution**: The `/public/` directory should already exist with these files:
- `favicon.svg`
- `robots.txt`
- `_redirects`
- `generate-favicons.html`
- And other documentation files

If you don't see it, you may need to create it first.

### Issue 2: "File is too large to copy/paste"
**Solution**: The file is 1,202 lines, which might be slow but should work. If Figma Make has issues:
1. Download the project files to your computer
2. Use Method 2 (command line or file manager)
3. Re-upload the project or just deploy with the correct file location

### Issue 3: "File looks different after pasting"
**Solution**: Make sure you selected ALL content before copying. The file should:
- Start with `<?xml version="1.0" encoding="UTF-8"?>`
- End with `</urlset>`
- Not have any line breaks or formatting changes

---

## After Moving

Once the sitemap is in `/public/sitemap.xml`:

1. **It will be accessible at**: `https://fishit.gg/sitemap.xml` (after deployment)
2. **Search engines can find it** via `robots.txt` which references it
3. **You can submit it** to Google Search Console and Bing Webmaster Tools
4. **All 281 pages** will be discoverable by search engines

---

##  Pro Tip

The `/public/robots.txt` file already references the sitemap:
```txt
Sitemap: https://fishit.gg/sitemap.xml
```

So once you deploy with the sitemap in the correct location, search engines will automatically discover it!

---

## Need Help?

If you're stuck on this task:
1. Check the `/DEPLOYMENT_TASKS.md` file for more context
2. Verify the `/public/` directory exists
3. Make sure you have write permissions
4. Try refreshing Figma Make if the UI is unresponsive

**Last Updated**: March 1, 2026
