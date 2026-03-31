# Perfect Water Valve — Project Notes

## PWV Home (`artifacts/pwv-home`)
- **69 total page files** across state, city, international, industry pages
- **ContactForm component**: `src/components/ContactForm.tsx` — named default export, takes `source?: string` prop, uses GHL webhook `FpCGhOJrf32qB7JtGKCM`
- **Navbar/Footer**: both are named exports `{ Navbar }` / `{ Footer }` — always import as named, never default
- **LocationTemplate**: handles its own inline contact form with GHL webhook `pwv-contact` slug
- **State pages (34 new)**: Alabama → Wyoming — all use `LocationTemplate`
- **CO cities (5)**: Denver, Colorado Springs, Aurora, Fort Collins, Lakewood — all use `LocationTemplate`
- **International**: Europe (`/locations/europe`), Asia (`/locations/asia`) — custom full-page builds
- **DC sub-pages**: `/industries/data-centers/cooling-water-costs`, `/industries/data-centers/hyperscale-roi`
- **Sitemap**: `public/sitemap.xml` — fully updated with all 80+ URLs, lastmod 2026-03-31
- **No China anywhere** on the site

---

# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Artifacts

### Perfect Water Valve Sales Toolkit (6 apps + 1 API)

Full-stack sales toolkit for Perfect Water Valve (PerfectWaterValve.com). Contact: 720-937-3004 | info@perfectwatervalve.com. Partner: AWS (American Water Savings) · CWS (Canadian Water Savings). Minimum guaranteed: ≥15% water savings.

All data routes live in `artifacts/api-server/src/routes/data.ts`. Real verified customer data — never overwrite.

GHL Webhook: `https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact`

Colorado Rep: Hunter Lundquist | 720-937-3004 | info@perfectwatervalve.com

Social: FB `https://www.facebook.com/profile.php?id=61583769211912` | IG `https://www.instagram.com/perfectwatervalve/` | LI `https://www.linkedin.com/company/113022552`

Color palette: `#0374A7` primary · `#3C6E7F` teal · `#1B4A5C` dark teal · `#E8EFF7` light bg · `#0A1F3A` dark navy · `#DEC600` gold

### `artifacts/pwv-colorado` (`@workspace/pwv-colorado`) — `/locations/`

Location + Industry pages app. Serves 17 location pages (`/locations/colorado`, `/locations/texas`, ... `/locations/uk`) and 5 industry pages (`/locations/industries/data-centers`, `/locations/industries/hotels`, `/locations/industries/car-washes`, `/locations/industries/multifamily`, `/locations/industries/hospitals`). Default route (`/`) renders the Colorado page. National overview at `/locations/usa`. Built with React + Vite + wouter. Shared `LocationTemplate.tsx` component drives all 15+ state pages via `LocationConfig` object. Navbar has Locations + Industries dropdowns.

### `artifacts/pwv-home` (`@workspace/pwv-home`) — `/`

Official PerfectWaterValve.com homepage. Built with React + Vite.

### `artifacts/pwv-dashboard` (`@workspace/pwv-dashboard`) — `/pwv-dashboard/`

Internal analytics dashboard. 4 tabs: Overview (KPI cards), Proof & Data (charts + Amazon site tables), Client Portfolio (customer cards), Case Studies (Caliber deep-dive + Savings by Industry + Enterprise Deployments). Built with React + Vite + Recharts + TanStack Table + Shadcn UI. IBM Plex Sans font, primary #0079F2, dot-grid background. Dark mode toggle.

### `artifacts/pwv-microsite` (`@workspace/pwv-microsite`) — `/pwv-microsite/`

Prospect-facing marketing website. Two routes: `/` (landing page with hero, animated counters, testimonials, enterprise grid) and `/proposal` (interactive ROI proposal calculator with industry-specific savings rates). Built with React + Vite + wouter routing.

### `artifacts/pwv-impact` (`@workspace/pwv-impact`) — `/pwv-impact/`

Live Water Savings Counter. Dramatic dark page for trade shows and social sharing. Features: animated counters (28M+ gallons/year, $320K+/yr, 19.2% avg), real-time running ticker (gallons accumulating since page load at ~0.89 gal/sec), glowing client impact cards, animated industry savings bars, ≥15% guarantee badge. Uses framer-motion. Always dark theme (#0A0F1E + #0079F2).

### `artifacts/pwv-proof` (`@workspace/pwv-proof`) — `/pwv-proof/`

Scroll-Driven Proof Story. Cinematic Apple-style storytelling page for skeptical prospects. Sections scroll-animate in using framer-motion whileInView: Opening hook, The Problem (air in pipes), The Guarantee, 5 client stories (Amazon, Caliber, St. Regis, Four Seasons, Grand Central), stats counter section, industry performance cards, CTA footer. Dark navy + warm gold/amber (#F59E0B) accent theme.

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
