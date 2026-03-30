# Perfect Water Valve — Pre-Launch Checklist
**Run this before Google crawls, before GSC setup, and after every major Replit push.**

---

## 📐 STANDING RULE HIERARCHY — APPLIES TO EVERY FUTURE DECISION

When any rule, filter, or suggestion conflicts with another, resolve it in this order:

| Priority | Rule | What It Means |
|---|---|---|
| **1 (Highest)** | **SEO Migration Rules** | Preserve everything from the Wix-era site that Google has already indexed. The title tag exception is the primary example. Never change indexed content mid-migration without a deliberate, documented reason. |
| **2** | **Facts, Case Studies & Real Data** | Never alter verified numbers, real case study results, or sourced statistics to make copy sound better. If Hormozi says "stack value" but the real savings figure is 15%, say 15% — not "up to 80%." |
| **3** | **Hormozi / Koerner / Martell (HMK) Filters** | Apply these to improve marketing, offers, and operations — but only where they don't conflict with Rules 1 or 2. They enhance; they don't override. |

> **In plain English:** SEO migration integrity and factual accuracy always win. HMK frameworks are applied on top of a clean, accurate, indexed foundation — never instead of it.

---

## ⚠️ INTENTIONAL OVERRIDES — DO NOT CHANGE THESE

These decisions were made deliberately and override standard SEO checklist rules. Do not "fix" them.

| Item | What Was Decided | Why |
|---|---|---|
| **Homepage `<title>` tag** | Kept as: `Perfect Water Valve \| Water Savings at Your Home & Business` — NOT reformatted to the standard `[Topic] \| Perfect Water Valve` pattern | **SEO continuity.** This is the exact Wix-era title that Google already indexed. Changing it mid-migration resets domain authority on the homepage. The comment in `index.html` reads: *"EXACT Wix title preserved for SEO continuity."* Leave it alone until the site has 3+ months of ranking data. |
| **Homepage meta description** | Also preserved from Wix — matches the indexed version | Same reason as above. Do not rewrite. |
| **Title tag format exception** | All OTHER pages (location, industry) use the standard `[Topic] \| Perfect Water Valve` format — only the homepage is the exception | Correct. This is intentional asymmetry. |

---

---

## SECTION 1 — Technical SEO (Run First)

### A. On-Page Essentials (Check Every Page)

| Item | What to Check | Status |
|---|---|---|
| Title tag | Unique per page, under 60 chars, includes keyword + location/industry — **EXCEPTION: homepage title is intentionally preserved from Wix (see overrides above)** | ☐ |
| Meta description | 140–155 chars, includes benefit + CTA, unique per page — **EXCEPTION: homepage meta description is intentionally preserved from Wix (see overrides above)** | ☐ |
| H1 tag | Exactly ONE H1 per page, contains primary keyword | ☐ |
| Canonical tag | `<link rel="canonical" href="https://www.perfectwatervalve.com/[path]" />` on every page | ☐ |
| OG tags | og:title, og:description, og:url, og:image on every page | ☐ |
| JSON-LD schema | LocalBusiness schema on homepage; Article or Service schema on location/industry pages | ☐ |
| Image alt text | Every `<img>` has a descriptive alt attribute | ☐ |
| Internal links | Every location page links back to `/locations/usa`; every industry page links back to `/industries` | ☐ |

### B. Site-Wide Technical

| Item | What to Check | Status |
|---|---|---|
| `sitemap.xml` | Lives at `perfectwatervalve.com/sitemap.xml`, lists all 30+ pages | ☐ |
| `robots.txt` | Lives at `perfectwatervalve.com/robots.txt`, allows all crawlers, points to sitemap | ☐ |
| HTTPS | All pages load on `https://` — no mixed content warnings | ☐ |
| www redirect | `perfectwatervalve.com` redirects to `www.perfectwatervalve.com` (or vice versa — pick one and be consistent) | ☐ |
| 404 page | Custom 404 page exists with navigation back to homepage | ☐ |
| Page speed | Run `perfectwatervalve.com` through [PageSpeed Insights](https://pagespeed.web.dev/) — target 80+ mobile score | ☐ |
| Favicon | Small file (under 100KB) — the current 47MB favicon MUST be replaced before launch | ☐ |
| No broken links | Click through all Navbar and footer links — confirm none 404 | ☐ |

### C. URL Structure Audit

| Page | Correct URL | Status |
|---|---|---|
| Homepage | `perfectwatervalve.com/` | ☐ |
| Results/Proof | `perfectwatervalve.com/results/` | ☐ |
| Impact | `perfectwatervalve.com/impact/` | ☐ |
| Savings | `perfectwatervalve.com/savings/` | ☐ |
| Smart Valve Info | `perfectwatervalve.com/smart-valve/` | ☐ |
| Locations Hub | `perfectwatervalve.com/locations/usa` | ☐ |
| Colorado (priority) | `perfectwatervalve.com/locations/colorado` | ☐ |
| Industries Hub | `perfectwatervalve.com/industries` | ☐ |
| Data Centers | `perfectwatervalve.com/industries/data-centers` | ☐ |
| Hotels | `perfectwatervalve.com/industries/hotels` | ☐ |

---

## SECTION 2 — Google Search Console Setup

**Do this immediately after confirming the site is live and all routes work.**

### Step-by-Step

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property** → choose **Domain** → enter `perfectwatervalve.com`
3. Google gives you a TXT record like `google-site-verification=xxxxxxxx`
4. Go to GoDaddy → DNS → Add Record → Type: TXT → Host: `@` → Value: paste the string → TTL: 1 hour → Save
5. Back in GSC → click **Verify** (takes 5–30 min)
6. Once verified → **Sitemaps** → enter `sitemap.xml` → Submit
7. **URL Inspection** → paste `https://www.perfectwatervalve.com` → **Request Indexing**
8. Repeat Step 7 for these priority pages:
   - `/locations/colorado`
   - `/industries/data-centers`
   - `/industries/hotels`
   - `/results/`
   - `/impact/`

**Check GSC weekly for:** crawl errors, coverage issues, and first ranking data (appears in 2–4 weeks).

---

## SECTION 3 — Hormozi Filter (Marketing & Offers)

Run every page through these questions. Flag anything that fails.

| Question | What to Look For | Status |
|---|---|---|
| **Is the offer irresistible?** | Every page should lead with a specific, measurable guarantee: "Guaranteed minimum 15% water savings or we make it right" — not vague claims | ☐ |
| **Are we stacking value?** | Homepage should stack: no upfront cost + guaranteed savings + AWS/CWS certified + local rebates cover 50% + Smart Valve™ pays for itself | ☐ |
| **Is price irrelevant?** | The ROI math should be visible — if a hotel saves $3,200/month, the valve cost is irrelevant. Show the math on every industry page | ☐ |
| **Are we leading with local proof?** | Colorado page should reference Denver Water rates, local rebates, and real CO case studies — not generic national stats | ☐ |
| **Core Four coverage** | Content (blog/pages ✅), Ads (not yet), Cold outreach (not yet), Warm outreach (contact form ✅) — note gaps | ☐ |
| **CTA clarity** | Every page has ONE primary CTA — "Request Free Assessment" — not multiple competing buttons | ☐ |
| **Contact info visible** | `info@perfectwatervalve.com` and `(720) 937-3004` in header or hero on every page | ☐ |

---

## SECTION 4 — Koerner Filter (Testing & Channels)

| Question | What to Look For | Status |
|---|---|---|
| **Low-cost channels first** | Colorado page is live for organic search — zero ad spend needed to start ranking for "commercial water savings Colorado" | ☐ |
| **Binary outcome test** | Is each page designed to do ONE thing? (Colorado page = get a Colorado commercial property owner to request an assessment) | ☐ |
| **Fast feedback loop** | GSC set up → first ranking data in 2–4 weeks → iterate on underperforming pages | ☐ |
| **Programmatic SEO foundation** | 17 state pages + 5 industry pages = 22 programmatic pages already built. Template is reusable for 33 more states | ☐ |
| **LinkedIn channel** | Not yet active — high-priority next step for B2B outreach to property managers and facility directors | ☐ |

---

## SECTION 5 — Martell Filter (Operations & Systems)

| Question | What to Look For | Status |
|---|---|---|
| **Is the pipeline automated?** | Replit → GitHub → Vercel auto-deploy is now set up. Every push goes live without manual steps ✅ | ☐ |
| **Is there a playbook?** | This checklist IS the playbook. Save it. Run it before every major launch | ☐ |
| **Buyback Principle** | Contact form → GHL → auto-notify Hunter. Hunter's time is only spent on qualified leads, not form monitoring ✅ | ☐ |
| **Recurring revenue structure** | Smart Valve™ is a one-time install — is there a maintenance/monitoring upsell or annual recertification offer on the site? If not, add it | ☐ |
| **Scalability** | The state page template can generate 33 more pages with minimal effort. Document the template so a VA can do it | ☐ |

---

## SECTION 6 — Final Pre-Launch Fixes (Replit Agent)

These are known issues to fix before calling it done.

> **Before running Replit Agent on any fix:** Cross-check against the Intentional Overrides table at the top. Do not let the agent touch the homepage title tag or meta description.

| Fix | Priority |
|---|---|
| Replace 47MB favicon with a proper 32x32 PNG | 🔴 High — affects every page load |
| Fix white-text-on-white-background on any remaining pages | 🔴 High — readability/accessibility |
| Add `sitemap.xml` to `/public/` if not already there | 🔴 High — required for GSC |
| Add `robots.txt` to `/public/` if not already there | 🔴 High — required for GSC |
| Add ROI math callout to every industry page (e.g., "At current Denver Water rates, a 100-room hotel saves $X/month") | 🟡 Medium — Hormozi value stack |
| Add LinkedIn share button or social proof section to Colorado page | 🟡 Medium — Koerner channel |
| Add maintenance/monitoring upsell mention to homepage | 🟡 Medium — Martell recurring revenue |
| **Update sitemap.xml** — currently only has 6 URLs; needs all 30+ routes added | 🔴 High — GSC won't index new pages without this |
| **Polish 404 page** — current 404 is a bare dev placeholder; needs branded design + link back to homepage | 🟡 Medium — user experience |

---

*Last updated: March 29, 2026 — post-consolidation, pre-GSC. Intentional overrides section added after cross-referencing index.html, Navbar.tsx, and Footer.tsx.*
