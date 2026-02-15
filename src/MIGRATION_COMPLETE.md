# FishIt.gg - Vite Migration Instructions

## Current Status

✅ **Vite Configuration Complete**
- `/package.json` - Configured with Vite scripts
- `/vite.config.ts` - Vite + React configuration  
- `/tsconfig.json` - TypeScript configuration
- `/tsconfig.node.json` - TypeScript for Vite
- `/index.html` - HTML entry point

✅ **Core Files Migrated to /src**
- `/src/main.tsx` - Application entry point
- `/src/App.tsx` - Root component
- `/src/routes.ts` - Router configuration
- `/src/styles/globals.css` - Global styles
- `/src/data/fishData.ts` - Complete fish database
- `/src/data/rodData.ts` - Complete rod database

✅ **Partial Components Migrated to /src/components**
- Badge.tsx
- Button.tsx
- Card.tsx
- Root.tsx
- Header.tsx
- Footer.tsx
- SectionHeader.tsx
- FishTable.tsx
- figma/ImageWithFallback.tsx

## Complete the Migration

Run the automated migration script to copy all remaining files:

```bash
npm run migrate
```

This will:
1. Copy `/components` → `/src/components` (all subdirectories)
2. Copy `/pages` → `/src/pages` (all subdirectories)  
3. Delete old root-level directories (`/components`, `/pages`, `/data`, `/styles`)
4. Delete old root-level files (`App.tsx`, `routes.ts`)

## Verify Migration

After running the migration, verify the structure:

```bash
npm run verify
```

## Start Development

Once migration is complete:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Final Directory Structure

```
fishit-gg/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── figma/
│   │   ├── hero/
│   │   ├── sections/
│   │   ├── seo/
│   │   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FishTable.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── RodTable.tsx
│   │   ├── Root.tsx
│   │   └── SectionHeader.tsx
│   ├── pages/
│   │   ├── guides/
│   │   ├── locations/
│   │   └── [all page files]
│   ├── data/
│   │   ├── fishData.ts
│   │   └── rodData.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.ts
├── .gitignore
├── README.md
├── LICENSE
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

## Deployment

Deploy directly to Cloudflare Pages:
- Build command: `npm run build`
- Build output: `dist`
- No subdirectory configuration needed

## Notes

- All import paths use relative imports (`./`, `../`) and will work correctly after migration
- No code changes required - only file locations change
- Site functionality, routing, SEO, and content remain unchanged
- GitHub repository is production-ready after migration
