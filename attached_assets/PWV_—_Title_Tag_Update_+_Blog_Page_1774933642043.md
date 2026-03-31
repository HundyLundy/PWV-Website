# PWV — Title Tag Update + Blog Page
## Copy everything below this line and paste into Replit Agent

---

Work within the existing `pwv-home` app structure. Do NOT rebuild or redesign anything. Complete both tasks below, then save, build, and republish. Confirm each task is done in your summary.

---

## TASK 1 — Update Homepage Title Tag

In `index.html` (or wherever the global `<title>` tag is set), change the current title tag from:

> Perfect Water Valve. Water Savings at Your Home and Business.

To:

> Guaranteed 15–58% Commercial Water Savings | Perfect Water Valve

Also update the `og:title` and `twitter:title` meta tags to match this new title exactly.

Update the homepage `<meta name="description">` to:

> Perfect Water Valve's Smart Valve™ cuts commercial water bills 15–58%, guaranteed in writing. Serving hotels, data centers, hospitals, multifamily, car washes, and industrial properties across all 50 states.

Character count: 197 — trim to 155 characters max:

> Perfect Water Valve cuts commercial water bills 15–58%, guaranteed. Serving hotels, data centers, hospitals, multifamily, and car washes across all 50 states.

Also update `og:description` and `twitter:description` to match.

Do NOT change any other title tags on any other page — only the homepage.

---

## TASK 2 — Blog Page

Create a blog at `/blog`. This is a new route — register it in `App.tsx`.

### Blog Index Page (`/blog`)

Design it to match the existing site style. It should include:

- A hero section with headline: "The Perfect Water Valve Blog — Commercial Water Savings Insights, Industry News, and Proven Results"
- A subheadline: "Rate increases. Rebate deadlines. Real case studies. Everything commercial property managers and facility directors need to know about cutting water costs."
- A grid of blog post cards. Each card shows: post title, category tag, publish date, 2-sentence excerpt, and a "Read More" link.
- A category filter bar at the top: All | Water Rates | Case Studies | Industry News | How It Works | Rebates & Incentives

### Blog Post Template

Create a reusable `BlogPost.tsx` template component. Each post page should include:
- Title (H1)
- Category tag + publish date
- Author: "Perfect Water Valve Team"
- Full post body (rich text, H2s, bullet points, pull quotes)
- A sidebar or bottom CTA: "Get a Free Commercial Water Assessment" linking to the contact form
- Internal links to relevant location pages and industry pages where appropriate
- Full SEO: unique `<title>`, `<meta description>`, canonical URL, og tags, JSON-LD Article schema

### Starter Blog Posts — Create all 5 of these at launch

**Post 1**
- Route: `/blog/commercial-water-rates-rising-2025`
- Title: "Commercial Water Rates Are Rising Across Every State in 2025 — Here's What to Do About It"
- Category: Water Rates
- Excerpt: Water utilities across all 50 states are implementing rate increases in 2025, with some markets seeing 35–50% hikes. Here's a state-by-state breakdown and what commercial property managers can do right now.
- Body: Cover the national trend of rising water rates. Pull in specific examples from the state pages already on the site: Delaware (Veolia 42.8%), Indiana (up to 85.5%), Hawaii (up to 59%), Vermont (89% projected by 2030), Pennsylvania (Aqua PA 50%), Missouri (34.4% proposed). Explain that Smart Valve™ is the only no-electricity, no-maintenance solution that guarantees a 15–58% reduction on the metered bill. End with CTA to get a free assessment.
- Internal links: Link to `/locations/delaware`, `/locations/indiana`, `/locations/hawaii`, `/locations/vermont`, `/locations/pennsylvania`, `/locations/missouri`, and the contact form.
- SEO title: "Commercial Water Rates Rising in 2025 — State-by-State Guide | Perfect Water Valve"
- Meta description: "Water rates are rising 5–50% across all 50 states in 2025. See which states are hit hardest and how Smart Valve™ cuts commercial water bills 15–58%, guaranteed."

**Post 2**
- Route: `/blog/amazon-yyz3-case-study`
- Title: "Amazon YYZ3 Achieved 58.69% Water Savings Over 6 Consecutive Quarters — Here's How"
- Category: Case Studies
- Excerpt: The Amazon YYZ3 data center is the highest-verified result in the Smart Valve™ portfolio. 58.69% peak savings. Six consecutive quarters. Zero maintenance. Here's the full breakdown.
- Body: Walk through the Amazon YYZ3 result in detail. Explain the facility type (hyperscale data center), the installation process (main supply line before cooling tower makeup water), the measurement and verification methodology, and the 6-quarter savings trajectory. Include the 58.69% peak figure prominently. Explain why data centers are one of the highest-ROI use cases — 1–5 million gallons per day in cooling water consumption. Tie in the broader data center water pressure story (Iowa, Pennsylvania, Virginia). End with CTA for a multi-site data center assessment.
- Internal links: Link to `/industries/data-centers/cooling-water-costs`, `/industries/data-centers/hyperscale-roi`, `/locations/iowa`, `/locations/pennsylvania`, `/locations/virginia`.
- SEO title: "Amazon YYZ3 Data Center: 58.69% Water Savings Over 6 Quarters | Perfect Water Valve"
- Meta description: "Amazon YYZ3 achieved 58.69% peak water savings over 6 consecutive quarters using Smart Valve™. See the full case study and what it means for hyperscale data center operators."

**Post 3**
- Route: `/blog/denver-water-rebate-guide`
- Title: "Denver Water's Commercial Rebate Program: How to Get Up to 50% of Your Smart Valve™ Cost Covered"
- Category: Rebates & Incentives
- Excerpt: Denver Water offers rebates that can cover up to 50% of the cost of a Smart Valve™ installation — but the budget runs out every year. Here's exactly how to apply before it's gone.
- Body: Explain Denver Water's commercial rebate program in detail. Cover eligibility requirements, the application process, what documentation is needed, and the timeline. Emphasize that the budget is finite and runs out annually — urgency is real. Explain that Perfect Water Valve handles the pre-approval process for clients. Include the 10% rate increase context (2025). End with CTA to get pre-approved.
- Internal links: Link to `/locations/colorado`, `/locations/colorado/denver`, contact form.
- SEO title: "Denver Water Commercial Rebate Guide 2025 — Up to 50% Cost Coverage | Perfect Water Valve"
- Meta description: "Denver Water's commercial rebate covers up to 50% of Smart Valve™ installation costs — but the budget runs out annually. Here's how to apply before it's gone."

**Post 4**
- Route: `/blog/hotel-water-savings-guide`
- Title: "How Hotels Cut Water Bills 15–58% Without Touching Guest Experience"
- Category: Industry News
- Excerpt: Hotels are one of the highest water-use commercial property types. Smart Valve™ installs on the main supply line in under 4 hours — guests never notice, but the water bill does.
- Body: Cover the hotel water use case specifically. Explain where hotels use the most water (guest rooms, laundry, pools, kitchens, irrigation). Explain how Smart Valve™ works on the main supply line without affecting pressure or flow. Mention that NSF 61 & 372 certification means it's safe for potable water systems. Cover the states where hotel ROI is highest: Florida, Nevada, Hawaii, New York, California. Include a simple ROI example: a 200-room hotel spending $8,000/month on water saves $1,200–$4,640/month. End with CTA.
- Internal links: Link to `/industries/hotels` (if it exists), `/locations/florida`, `/locations/nevada`, `/locations/hawaii`, `/locations/new-york` (if it exists), `/locations/california` (if it exists), contact form.
- SEO title: "Hotel Water Savings Guide — Cut Bills 15–58% Without Affecting Guests | Perfect Water Valve"
- Meta description: "Hotels are among the highest water users in commercial real estate. Smart Valve™ cuts hotel water bills 15–58% with a 4-hour install and zero impact on guest experience."

**Post 5**
- Route: `/blog/what-is-smart-valve`
- Title: "What Is the Smart Valve™ and How Does It Actually Cut Your Water Bill?"
- Category: How It Works
- Excerpt: No electricity. No moving parts. No maintenance. Smart Valve™ installs on your main water supply line and cuts your metered bill 15–58%, guaranteed in writing. Here's the science behind it.
- Body: Explain the Smart Valve™ technology in plain language. Cover: what it is (a passive hydrodynamic device), where it installs (main supply line, between two ball valves, after the water meter), how it works (reduces turbulence and water hammer, optimizes flow characteristics to reduce metered consumption), what it does NOT do (does not restrict flow, does not reduce pressure, does not require electricity or maintenance). Cover NSF 61 & 372 certification. Cover the installation process (under 4 hours, no downtime). Cover the guarantee (15% minimum, in writing). Cover the range of results (15–58.69% verified). End with CTA.
- Internal links: Link to `/how-it-works` (if it exists), `/results/`, `/impact/`, contact form.
- SEO title: "What Is the Smart Valve™? How It Cuts Commercial Water Bills 15–58% | Perfect Water Valve"
- Meta description: "Smart Valve™ is a passive device that installs on your main water line in under 4 hours and cuts your metered bill 15–58%, guaranteed. No electricity, no maintenance, no moving parts."

---

## TASK 3 — Data Center Hub Page + Navigation Fix

### Hub Page: `/industries/data-centers`

Create a new hub page at `/industries/data-centers`. Register it in `App.tsx`. This page sits between the main Industries section and the two existing data center sub-pages, creating the proper content hierarchy: Industries → Data Centers → sub-pages.

The hub page should include:

- **H1:** "Data Centers: The Highest Water-Use Commercial Facility — And the Highest Smart Valve™ ROI"
- **Hero subhead:** "The average hyperscale data center uses 1–5 million gallons of water per day for cooling. Smart Valve™ installs on the main supply line and cuts that bill 15–58%, guaranteed. Amazon YYZ3 hit 58.69% peak savings over 6 consecutive quarters."
- **Two prominent cards/sections** linking to the sub-pages:
  - Card 1: "Cooling Water Costs" → links to `/industries/data-centers/cooling-water-costs` — description: "How data centers use water, where the waste happens, and how Smart Valve™ reduces cooling water consumption without affecting uptime or performance."
  - Card 2: "Hyperscale ROI" → links to `/industries/data-centers/hyperscale-roi` — description: "Multi-site ROI model, enterprise deployment process, and the Amazon YYZ3 benchmark. Built for VPs of Infrastructure and CFOs evaluating large-scale deployments."
- **A brief section** on why data centers are a top Smart Valve™ use case: cooling tower makeup water, no electricity required, NSF 61 & 372 certified, zero downtime installation
- **A section** on data center water regulatory pressure by state: Iowa, Pennsylvania, Virginia, Texas, Georgia — link to each state's location page
- **CTA:** "Get a Free Data Center Water Assessment"
- **SEO title:** `Data Center Water Savings | Smart Valve™ Cuts Cooling Bills 15–58% | Perfect Water Valve`
- **Meta description:** "Data centers use 1–5M gallons/day for cooling. Smart Valve™ cuts that bill 15–58%, guaranteed. Amazon YYZ3 hit 58.69% peak savings. No electricity, no maintenance, NSF certified."
- **JSON-LD schema:** Service schema with serviceType: "Commercial Water Savings", areaServed: "United States"
- **Internal links:** Link to `/industries/data-centers/cooling-water-costs`, `/industries/data-centers/hyperscale-roi`, `/locations/iowa`, `/locations/pennsylvania`, `/locations/virginia`, `/results/`

### Navigation Fix — Contextual Navbar for Data Center Pages

Implement a contextual navbar system for the data center section. The rule is: when a visitor is inside a sub-category that has its own pages, the navbar adapts to show the other pages in that category instead of the full site nav. The PWV logo, the global Explore dropdown, and the CTA button always remain visible.

Specifically, implement the following navbar behavior:

**On `/industries/data-centers` (hub page):**
Navbar shows: PWV logo | Cooling Water Costs (→ `/industries/data-centers/cooling-water-costs`) | Hyperscale ROI (→ `/industries/data-centers/hyperscale-roi`) | Explore dropdown | Request Assessment CTA button

**On `/industries/data-centers/cooling-water-costs`:**
Navbar shows: PWV logo | Data Centers (→ `/industries/data-centers`) | Hyperscale ROI (→ `/industries/data-centers/hyperscale-roi`) | Explore dropdown | Request Assessment CTA button

**On `/industries/data-centers/hyperscale-roi`:**
Navbar shows: PWV logo | Data Centers (→ `/industries/data-centers`) | Cooling Water Costs (→ `/industries/data-centers/cooling-water-costs`) | Explore dropdown | Request Assessment CTA button

This is a reusable pattern — apply the same contextual navbar logic to any other industry or location sub-category that has multiple pages under it, now or in the future.

### Data Center Hub Page — Hero and Sub-Page Modules

On the `/industries/data-centers` hub page, place two prominent clickable modules immediately in the hero section or directly below it (above the fold on desktop). These are not small links — they should be large, visually distinct cards or panels that make it immediately obvious there are two deeper pages to explore:

- **Module 1:** "Cooling Water Costs" — headline: "How Data Centers Use Water and Where the Waste Happens" — CTA: "Explore Cooling Water →" — links to `/industries/data-centers/cooling-water-costs`
- **Module 2:** "Hyperscale ROI" — headline: "Multi-Site ROI Model and the Amazon YYZ3 Benchmark" — CTA: "See the ROI Model →" — links to `/industries/data-centers/hyperscale-roi`

### Data Center Cross-Links on State and City Pages

For every state or city page where data centers are a significant industry (Iowa, Pennsylvania, Virginia, Texas, Georgia, Ohio, Indiana, Minnesota, Colorado/Denver, New Jersey, North Carolina), add a visible "Data Center Resources" section that includes direct links to both:
- `/industries/data-centers/cooling-water-costs`
- `/industries/data-centers/hyperscale-roi`

Also add `/industries/data-centers` to `public/sitemap.xml` with `priority="0.8"` and today's date as `lastmod`.

---

## TASK 4 — Add Blog to Navigation

Add "Blog" as a link in the main navbar and in the footer. It should link to `/blog`.

---

## TASK 4 — Update Sitemap

Add all 6 new blog URLs to `public/sitemap.xml`:
- `/blog` — `priority="0.8"`
- All 5 blog post URLs — `priority="0.7"`
- `lastmod` set to today's date

---

After completing all tasks: save, build, and republish. Confirm each task is done in your summary.
