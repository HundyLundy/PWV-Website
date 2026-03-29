# Perfect Water Valve — Website & Sales Toolkit

## Project Overview
Full sales toolkit for PerfectWaterValve.com — single React + Vite app at the repo root, deployed to Vercel.

**Contact:** (720) 937-3004 | info@perfectwatervalve.com
**Partners:** AWS · CWS

## Structure (repo root)
```
/
├── src/
│   ├── App.tsx            # All routes + legacy aliases
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── BubbleValveSection.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── ColoradoPage.tsx
│       ├── TexasPage.tsx
│       ├── CaseStudiesPage.tsx
│       ├── CalculatorPage.tsx
│       ├── ProposalPage.tsx
│       └── not-found.tsx
├── public/
│   ├── favicon.png        # PWV logo PNG
│   ├── favicon.svg        # SVG water droplet
│   └── opengraph.jpg
├── index.html
├── package.json           # name: perfect-water-valve
├── vite.config.ts         # outDir: dist (no /public)
├── vercel.json            # SPA rewrites
├── tsconfig.json          # Standalone (no workspace extends)
└── pnpm-workspace.yaml    # Catalog only (no packages)
```

## Routes
| Path | Component |
|------|-----------|
| `/` | Home |
| `/colorado` | ColoradoPage |
| `/texas` | TexasPage |
| `/case-studies` | CaseStudiesPage |
| `/calculator` | CalculatorPage |
| `/proposal` | ProposalPage |
| `/results`, `/impact`, `/savings` | Aliases |
| `/locations/colorado`, `/locations/texas` | Aliases |

## Vercel Deployment
- **Vercel project root:** repo root
- **Build command:** `pnpm run build`
- **Output directory:** `dist`
- **vercel.json:** SPA rewrite (all paths → `/index.html`)

## Dev
```bash
pnpm install
pnpm run dev     # starts on port 5173
pnpm run build   # outputs to dist/
```

## GHL Webhooks
- Homepage: `.../Upp1pos3mL7UjdCVKsJp`
- Colorado + Texas forms: `.../pwv-contact`

## Color Palette
- `#0374A7` PWV primary blue
- `#06b6d4` cyan accent
- `#0a1628` dark background
