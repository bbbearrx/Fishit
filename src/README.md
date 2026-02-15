# FishIt.gg

Informational website for the Roblox game "Fish It" — featuring comprehensive fish databases, fishing rod guides, tier lists, active codes, and strategy content. Built with SEO optimization and structured data for search engine visibility.

Part of the Empyreus Network.

## 🚨 IMPORTANT: Complete Migration First

Before running the project, you must complete the migration to the new Vite structure:

```bash
npm run migrate
```

This will move all source files from the root directories into `/src` and clean up the old structure.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool and dev server

## Development

Install dependencies:

```bash
npm install
```

Complete migration (first time only):

```bash
npm run migrate
```

Start development server:

```bash
npm run dev
```

## Production Build

Build for production:

```bash
npm run build
```

## Deployment

This site is hosted on **Cloudflare Pages** with automatic deployment via GitHub integration.

- Static assets are served from `/public`
- XML sitemap is located at `/public/sitemap.xml`
- Production domain: `https://fishit.gg`

## Project Structure

```
fishit-gg/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Route pages
│   ├── data/        # Fish and rod datasets
│   ├── styles/      # Global styles
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Entry point
│   └── routes.ts    # Router config
├── index.html       # HTML entry
├── package.json     # Dependencies
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript config
```

## License

MIT License - see LICENSE file for details.