# PWV — HMK Improvements Prompt for Replit Agent

Paste this entire prompt into Replit Agent. It covers 6 tasks. Complete all of them before pushing to GitHub.

---

## CONTEXT

The site currently has 10 Colorado city pages: Denver, Colorado Springs, Aurora, Fort Collins, and Lakewood. The following issues need to be fixed AND 5 new Colorado city pages need to be built. Complete every task below.

---

## TASK 1 — Build 5 New Colorado City Pages

Build full city-level pages for the following 5 Colorado cities. Each page must follow the EXACT same structure, depth, and quality as the existing Denver city page at `/locations/colorado/denver`. Do not build stub pages or redirects — build complete, fully-optimized pages.

**New pages to create:**
- `/locations/colorado/boulder`
- `/locations/colorado/pueblo`
- `/locations/colorado/loveland`
- `/locations/colorado/greeley`
- `/locations/colorado/arvada`

**Requirements for each new city page:**

### Content Requirements
- Unique H1 headline with real, specific local water rate data for that city
- Real water utility name for that city (Boulder = City of Boulder Water; Pueblo = Pueblo Board of Water Works; Loveland = City of Loveland Water & Power; Greeley = Greeley Water; Arvada = Arvada Water — served by Denver Water and North Table Mountain Water & Sanitation District)
- Real rate increase data (use the following):
  - **Boulder**: City of Boulder Water raised rates 5.5% in 2025. Boulder faces severe Colorado River allocation pressure as one of the most water-conscious cities in the state.
  - **Pueblo**: Pueblo Board of Water Works raised rates 4.8% in 2024. Pueblo's water supply depends heavily on Pueblo Reservoir and the Arkansas River, both under drought stress.
  - **Loveland**: City of Loveland Water & Power raised rates 6.2% in 2025. Northern Colorado faces some of the most acute water supply constraints in the state due to population growth and drought.
  - **Greeley**: Greeley Water raised rates 7.1% in 2025 — one of the highest increases on the Front Range. The Cache la Poudre River, Greeley's primary source, is under severe drought and agricultural demand pressure.
  - **Arvada**: Arvada is served by Denver Water (6% increase 2025) and North Table Mountain Water & Sanitation District (5.8% increase 2025). Arvada commercial properties may be billed by either utility depending on location.
- Denver Water rebate mention only applies to Arvada (served by Denver Water). Boulder, Pueblo, Loveland, and Greeley do NOT qualify for Denver Water rebates — do not mention Denver Water rebates on those pages.
- Hero stats ticker: 58.69% Peak Savings | 15% Guaranteed | NSF 61 & 372 | No Power Required | 99% Meter Compatible
- "Who We Serve in [City]" section — any commercial property spending $5,000+/month on water
- Interactive savings calculator (same as Denver page)
- Contact/assessment form with GHL webhook source tagged as `perfectwatervalve.com/locations/colorado/[city-slug] - Assessment Form`
- Unique FAQ section (4–5 questions) specific to that city's water situation
- "Also Serving" section — see Task 3 below for exact requirements
- Full SEO: unique `<title>`, `<meta description>`, canonical URL, og tags, JSON-LD LocalBusiness schema, JSON-LD FAQ schema

### Title Tag Format for Each New City:
- Boulder: `Boulder Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- Pueblo: `Pueblo Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- Loveland: `Loveland Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- Greeley: `Greeley Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- Arvada: `Arvada Commercial Water Savings | Smart Valve™ | Perfect Water Valve`

---

## TASK 2 — Fix the Colorado City Pillbox Placement on `/locations/colorado`

On the `/locations/colorado` state page, the "Colorado City Pages" pillbox section (the row showing Denver, Colorado Springs, Aurora, Fort Collins, Lakewood) is currently at the very bottom of the page above the footer. Move it to appear immediately after the hero stats ticker bar (the "58.69% / 15% Guaranteed / NSF 61 & 372 / No Power Required / 99% Meter Compatible" row) — BEFORE the "Your Water Rates Are Going Up" section.

After this move, also add the 5 new cities to the pillbox row: Boulder, Pueblo, Loveland, Greeley, Arvada. The full pillbox row should show all 10 Colorado cities: Denver, Colorado Springs, Aurora, Fort Collins, Lakewood, Boulder, Pueblo, Loveland, Greeley, Arvada.

---

## TASK 3 — Fix the "Also Serving" Section on ALL Colorado City Pages

**Current problem:** The "Also Serving" section on Colorado city pages (e.g., Denver) shows other US states (California, Texas, New York, etc.). This makes the page feel generic and national rather than locally focused.

**Fix:** On every Colorado city page (`/locations/colorado/denver`, `/locations/colorado/colorado-springs`, `/locations/colorado/aurora`, `/locations/colorado/fort-collins`, `/locations/colorado/lakewood`, and all 5 new city pages), change the "Also Serving" section to show ONLY the other Colorado cities — no states.

**Rule:** Each city page shows the other 9 Colorado cities in the "Also Serving" section. Example: the Denver page shows Colorado Springs, Aurora, Fort Collins, Lakewood, Boulder, Pueblo, Loveland, Greeley, Arvada. The Boulder page shows Denver, Colorado Springs, Aurora, Fort Collins, Lakewood, Pueblo, Loveland, Greeley, Arvada. And so on.

The section heading should read: **"Also Serving Across Colorado"** — not "Also Serving Near Denver" or any state references.

Remove all state links (California, Texas, New York, etc.) from the "Also Serving" section on Colorado city pages entirely.

---

## TASK 4 — Fix the Footer on Colorado Location Pages

**Current problem:** The footer on the `/locations/colorado` page (and possibly Colorado city pages) shows a "Colorado Markets" section with cities including Boulder, Pueblo, Loveland, Greeley, and Arvada — but those pages didn't exist until now.

**Fix:** Update the footer "Colorado Markets" section on the Colorado state page and all Colorado city pages to include all 10 cities with working links:
- Denver → `/locations/colorado/denver`
- Colorado Springs → `/locations/colorado/colorado-springs`
- Aurora → `/locations/colorado/aurora`
- Fort Collins → `/locations/colorado/fort-collins`
- Lakewood → `/locations/colorado/lakewood`
- Boulder → `/locations/colorado/boulder`
- Pueblo → `/locations/colorado/pueblo`
- Loveland → `/locations/colorado/loveland`
- Greeley → `/locations/colorado/greeley`
- Arvada → `/locations/colorado/arvada`

No dead links. Every city in the footer must have a live page.

---

## TASK 5 — Hormozi Conversion Improvements (Apply Site-Wide)

These changes apply to ALL location pages (state pages, Colorado city pages, and international pages):

### 5A — Add Urgency to Every Hero
Every location page hero should include a small urgency badge/alert below the main headline. Use the most alarming local stat as the urgency trigger. Format:
`⚠ [City/State] Water: [Rate increase or water crisis fact] — [Year]`

Examples already on the site (keep these, apply same pattern everywhere):
- Denver: "⚠ Denver Water: 6% Rate Increase Active 2025 — More Increases Signaled Through 2027"
- Colorado: "Denver Water rebate covers up to 50% of costs — budget runs out annually"

For state pages that don't have this badge yet, add it using the real rate data already in the page content.

### 5B — Add a "Why Act Now" Section to State Pages
On state pages that don't already have it, add a short 3-bullet "Why Act Now" section immediately before the contact form:
1. Water rates in [State] are rising [X]% — every month you wait costs more
2. Denver Water rebate (Colorado only) / local utility rebates run out annually — first come, first served
3. Smart Valve™ installs in under 4 hours — zero downtime, zero disruption

Customize the bullets with real local data for each state.

### 5C — Make the Guarantee More Prominent
On every location page, the "15% Savings Guaranteed in Writing" stat in the ticker bar should link to `/results` (the case studies page). Wrap it in an anchor tag pointing to `/results`. This turns a passive stat into an active proof link.

---

## TASK 6 — Koerner Conversion Improvements (Apply Site-Wide)

### 6A — Fix "Also Serving" on Non-Colorado State Pages
On state pages (not city pages), the "Also Serving" section currently shows a generic list of other states. Update the logic so it shows states that are geographically nearby or contextually related — not just a random list. Example: the Florida page should show Georgia, South Carolina, Alabama, Tennessee, North Carolina — not California or New York. The Colorado page (state level) already shows Colorado cities, which is correct.

Apply this geographic relevance logic to all 50 state pages. Group by region:
- **Southeast**: Florida, Georgia, South Carolina, North Carolina, Tennessee, Alabama, Mississippi, Virginia, West Virginia
- **Northeast**: New York, New Jersey, Pennsylvania, Connecticut, Massachusetts, Rhode Island, Vermont, New Hampshire, Maine, Delaware, Maryland
- **Midwest**: Ohio, Indiana, Illinois, Michigan, Wisconsin, Minnesota, Iowa, Missouri, Kansas, Nebraska, North Dakota, South Dakota
- **Southwest**: Texas, Arizona, New Mexico, Oklahoma, Arkansas, Louisiana
- **Mountain West**: Colorado, Utah, Nevada, Wyoming, Montana, Idaho
- **Pacific**: California, Oregon, Washington, Alaska, Hawaii

Each state page should show the other states in its region in the "Also Serving" section.

### 6B — Add a "Data Center Resources" Section to Relevant State Pages
The following state pages should have a "Data Center Resources" section linking to `/industries/data-centers/cooling-water-costs` and `/industries/data-centers/hyperscale-roi`:
Iowa, Pennsylvania, Virginia, Texas, Georgia, Ohio, Indiana, Minnesota, New Jersey, North Carolina, Delaware, Colorado (state page), Denver (city page — already has this, keep it)

The section should be a simple 2-card block with a brief description of each sub-page. Heading: **"Data Center Water Savings Resources"**

---

## TASK 7 — Martell Systems Improvements

### 7A — Add Route Registrations for All 5 New Cities
Register all 5 new city routes in App.tsx:
- `/locations/colorado/boulder`
- `/locations/colorado/pueblo`
- `/locations/colorado/loveland`
- `/locations/colorado/greeley`
- `/locations/colorado/arvada`

### 7B — Update Sitemap
Add all 5 new city URLs to `public/sitemap.xml` with priority `0.8` and today's lastmod date.

### 7C — Update the Colorado State Page Navbar Sub-Links
The Colorado state page currently has a sub-navigation (Why Colorado | How It Works | Case Studies | Savings Calculator). This is good — keep it. No changes needed here.

### 7D — Update the Explore Dropdown in the Main Navbar
The Explore dropdown should include a "Colorado Cities" sub-group that lists all 10 Colorado cities. If it already has Denver, Colorado Springs, Aurora, Fort Collins, Lakewood — add Boulder, Pueblo, Loveland, Greeley, Arvada to that group.

---

## COMPLETION CHECKLIST

Before pushing to GitHub, confirm:
- [ ] 5 new Colorado city pages built and live at correct routes
- [ ] Colorado city pillboxes moved up on `/locations/colorado` and show all 10 cities
- [ ] "Also Serving" on all 10 Colorado city pages shows only Colorado cities
- [ ] Footer "Colorado Markets" on Colorado pages links to all 10 cities with live pages
- [ ] Urgency badges added to all location pages that were missing them
- [ ] Guarantee stat links to `/results` on all location pages
- [ ] "Also Serving" on state pages shows geographically relevant states
- [ ] Data Center Resources section added to relevant state pages
- [ ] All 5 new routes registered in App.tsx
- [ ] Sitemap updated with all 5 new URLs
- [ ] Explore dropdown updated with all 10 Colorado cities

Push to GitHub when all items are checked.
