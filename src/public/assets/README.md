# Asset Directory

This directory should contain all static assets referenced by the Fish It website.

## Required Assets

### Images
- **bloxy-fish.png** - Legendary Bloxy Fish golden mythic creature image
  - Referenced in: `/src/components/hero/LegendaryBloxyFish.tsx`
  - Dimensions: Optimized for 180px display size
  - Format: PNG with transparency
  - Description: Golden fish with "bloxy.gg" branding and magenta accents

## Deployment Notes

When deploying to Cloudflare Pages with Vite:
- All files in `/public/` are served at the root path
- Assets are referenced as `/assets/filename.png` in the code
- Vite automatically handles these during build process

## Adding New Assets

1. Place image files in this directory
2. Reference them in code as `/assets/your-image.png`
3. Update this README with the new asset details
