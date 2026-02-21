# CLOUDFLARE DEPLOYMENT FIX CHECKLIST

## Problem
Desktop layout is pushed to the left, text doesn't fit in boxes. Mobile works perfectly.

## Step 1: Confirm You've Redeployed

1. In Figma Make: **Save all files** (Ctrl+S / Cmd+S)
2. If using Git:
   ```bash
   git add .
   git commit -m "Fix desktop layout centering"
   git push
   ```
3. In Cloudflare Pages dashboard:
   - Check that a new deployment is **building**
   - Wait for it to complete
   - **Clear your browser cache** (Ctrl+Shift+Delete)
   - **Hard refresh** the page (Ctrl+Shift+R / Cmd+Shift+R)

## Step 2: Verify Build Output

Check your `package.json` build command:
```json
"build": "vite build"
```

Check if there's a `vite.config.ts` or `vite.config.js` file. If not, create one.

## Step 3: Nuclear Option - Force Centering

If the issue persists, this CSS will FORCE everything to center:

Add this to `/styles/globals.css` at the very end:

```css
/* EMERGENCY FIX: Force desktop centering */
@media (min-width: 1024px) {
  body,
  #root,
  #app,
  [data-rbd-droppable-context-id],
  .router-outlet {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }
}
```

## Questions to Answer

1. **Which pages have the issue?**
   - [ ] Only RNG Calculator
   - [ ] All pages
   - [ ] Only certain pages (which ones?)

2. **Browser DevTools Check:**
   - Open DevTools (F12)
   - Inspect the main content area
   - What is the computed `width` of the first `<div>` inside `<main>`?
   - Does it show `max-width: 80rem` (1280px)?

3. **Does the Figma preview work correctly?**
   - [ ] Yes, Figma preview is centered
   - [ ] No, Figma preview also has issues

4. **Cloudflare build logs:**
   - Are there any errors in the build?
   - Does it complete successfully?
