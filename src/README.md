# Fish It — Roblox Game Wiki

SEO-optimized informational website for the Roblox game "Fish It" (fishit.gg).

## 🚀 Deployment

This project is configured for **Cloudflare Pages** deployment with **Vite**.

### Build Settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`

### Environment
- **Node version:** 18+ recommended
- **Package manager:** npm

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── _redirects      # Cloudflare Pages SPA routing
│   ├── robots.txt      # SEO crawling rules
│   └── sitemap.xml     # SEO sitemap
├── components/         # React components
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Key Configuration Files

- **`/public/_redirects`** - Ensures SPA routing works on Cloudflare Pages
- **`/routes.tsx`** - React Router v7 configuration with 281+ routes
- **`/public/sitemap.xml`** - SEO sitemap for search engines
- **`/data/fishData.ts`** - Single source of truth for all fish data
- **`/data/rodData.ts`** - Single source of truth for all fishing rod data

## 📝 Content Guidelines

- **DO NOT** invent or assume any game information
- **DO NOT** modify fish/rod names or data in `/data/` files
- All content must be factual and verifiable from the game

## 🎨 Design System

- Ocean blues/cyans for backgrounds
- Neon crystal colors for accents
- White text on dark gradients
- Glow effects for premium elements
- Target audience: Roblox players aged 9-18

## 📊 SEO Features

- Proper H1 tags on every page
- Meta description placeholders
- Internal linking structure
- Schema-ready layouts
- Breadcrumb navigation
- JSON-LD structured data

## 🔗 Routes

- **281 total routes** including:
  - Main navigation pages
  - 11 location pages
  - 7 rarity pages
  - 15 guide pages
  - 207 individual fish pages
  - 23 fishing rod pages

## 📦 Technologies

- **React** 18+ with TypeScript
- **React Router** v7 (Data Mode)
- **Tailwind CSS** v4
- **Vite** for build tooling
- **Lucide React** for icons
- **Recharts** for data visualization

## 🚨 Important Notes

- This is a **static site** - no backend/database
- All data is in `/data/` TypeScript files
- Images should use relative paths (no `figma:asset` protocol)
- Designed for Cloudflare Pages deployment

---

Built with Figma Make | fishit.gg