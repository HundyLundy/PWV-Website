# PWV SEO Expansion — Replit Agent Prompt
## Copy everything below this line and paste into Replit Agent

---

Work within the existing `pwv-home` app structure. Do NOT rebuild or redesign anything. Add new pages and routes only. After completing all tasks, save, build, and republish the app. Confirm each task is done in your summary.

---

## SEO REQUIREMENTS — APPLY TO EVERY SINGLE PAGE CREATED

Every new page must include the following SEO elements. No exceptions.

1. **Unique `<title>` tag** — format: `[City/State/Topic] Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
2. **Unique `<meta name="description">` tag** — 140–155 characters, include location + "commercial water savings" + "Smart Valve™" + a specific local stat
3. **Canonical tag** — `<link rel="canonical" href="https://www.perfectwatervalve.com/[route]" />`
4. **OG tags** — og:title, og:description, og:url, og:image (use the main PWV product image)
5. **LocalBusiness or Service JSON-LD schema** — include name, url, description, serviceArea (the state/city/region), and areaServed
6. **Exactly one H1** — must include the location name + "commercial water savings" or "Smart Valve™"
7. **H2s and H3s** — use keyword-rich subheadings throughout (e.g., "Commercial Water Rates in [State]", "Smart Valve™ ROI for [State] Properties", "[State] Water Rebates and Incentives")
8. **Keyword density** — naturally include these phrases multiple times per page: "commercial water savings [state/city]", "Smart Valve™", "water bill reduction", "guaranteed water savings", "commercial water efficiency", "reduce water bill [state/city]"
9. **Internal links** — each page must link to: `/locations/usa` (parent locations hub), the contact/assessment form, and at least one relevant industry page if applicable
10. **Alt text** — all images must have descriptive alt text including location and product name
11. **Page word count** — minimum 600 words of real content per page (not filler)
12. **Contextual industry cross-linking (CRITICAL)** — Every location page must include a "Who We Serve in [State/City]" section that links to the most relevant industry pages already on this site (e.g., `/industries/hotels`, `/industries/data-centers`, `/industries/car-washes`, `/industries/multifamily`, `/industries/hospitals`, `/industries/restaurants`, `/industries/industrial`). Match the industries to what actually dominates that market. Examples: Florida → Hotels, Multi-Family, Car Washes. Iowa/Pennsylvania/Virginia/Ohio → Data Centers (link to both `/industries/data-centers/cooling-water-costs` and `/industries/data-centers/hyperscale-roi`). Hawaii/Nevada/New York → Hotels. Georgia → Data Centers, Hotels. Colorado cities → Hotels, Multi-Family, Car Washes. Apply this same logic to EVERY page on the entire site — not just the pages being added in this prompt. If an existing page is missing relevant industry cross-links, add them. The reverse must also be true: every industry page must link back to the states and cities where that industry is most prominent. This bidirectional linking applies to all existing and new pages across the entire site. Use your judgment to determine the best industry-to-location matches for any page not explicitly listed here.

---

## TASK 1 — 5 Colorado City Pages

Create 5 new city-level location pages. Follow the same design as `/locations/florida` or `/locations/texas`. Place them at:

- `/locations/colorado/denver`
- `/locations/colorado/colorado-springs`
- `/locations/colorado/aurora`
- `/locations/colorado/fort-collins`
- `/locations/colorado/lakewood`

Register all 5 routes in `App.tsx`. Each page must link back to `/locations/colorado` as its parent.

**SEO title format:** `Denver Commercial Water Savings | Smart Valve™ | Perfect Water Valve`

**Content for each city — use this data verbatim:**

### Denver
- **H1:** "Denver Commercial Properties Are Paying for Air in Their Water — Smart Valve™ Fixes That"
- **Hero subhead:** "Denver Water raised rates 10% in 2025. The Colorado River is in a declared crisis. Smart Valve™ cuts your metered bill 15–58%, guaranteed in writing."
- **Key water issue:** Denver is experiencing ongoing water scarcity and drought conditions, necessitating water restrictions and substantial investment in infrastructure.
- **Rate data:** 10% rate increase in 2025
- **Rebates:** Denver Water offers rebates for ultra-high efficiency toilets, WaterSense urinals, smart irrigation controllers, and commercial irrigation nozzles. Smart Valve™ installations may qualify — budget runs out annually, act early.
- **Utility:** Denver Water
- **Keywords to use:** "Denver commercial water savings", "reduce water bill Denver", "Smart Valve Denver", "Denver Water rate increase", "commercial water efficiency Denver CO"
- **Service area:** Denver metro, LoDo, Cherry Creek, RiNo, Five Points, Capitol Hill, and surrounding commercial corridors

### Colorado Springs
- **H1:** "Colorado Springs Commercial Water Bills Are Rising 6.5% Every Year Through 2029"
- **Hero subhead:** "Colorado Springs Utilities locked in annual 6.5% rate hikes through 2029. Drought preparation stage is active. Smart Valve™ cuts your bill 15–58% guaranteed — lock in savings before the next hike."
- **Key water issue:** Colorado Springs Utilities is in a drought preparation stage, urging voluntary conservation. Rates are locked in to increase 6.5% per year through 2029 — compounding every year you wait.
- **Rate data:** 6.5% annual increase from 2025 through 2029
- **Rebates:** None currently confirmed from Colorado Springs Utilities for Smart Valve™
- **Utility:** Colorado Springs Utilities
- **Keywords:** "Colorado Springs commercial water savings", "Colorado Springs Utilities rate increase", "reduce water bill Colorado Springs", "Smart Valve Colorado Springs"
- **Service area:** Colorado Springs, Manitou Springs, Fountain, Security-Widefield, and surrounding commercial properties

### Aurora
- **H1:** "Aurora Water Rates Rising 6% in 2025 and Again in 2026 — Cut Your Bill Before the Next Hike"
- **Hero subhead:** "Aurora Water is implementing back-to-back 6% rate increases to cover infrastructure costs. Smart Valve™ cuts your commercial water bill 15–58%, guaranteed in writing."
- **Key water issue:** Aurora Water is implementing rate increases to cover operational and capital infrastructure needs. Two consecutive 6% hikes mean compounding costs for commercial properties.
- **Rate data:** 6% increase in 2025 and again in 2026
- **Rebates:** Aurora Water offers rebates for commercial washing machine ozone systems, Rachio Smart Controllers, and water-wise landscaping. Ask about Smart Valve™ eligibility.
- **Utility:** Aurora Water
- **Keywords:** "Aurora CO commercial water savings", "Aurora Water rate increase", "reduce water bill Aurora Colorado", "Smart Valve Aurora CO"
- **Service area:** Aurora, Centennial, the I-225 commercial corridor, and surrounding commercial properties

### Fort Collins
- **H1:** "Fort Collins Commercial Water Rates Up 7% in 2025 — Fort Collins-Loveland District Up 10% in 2026"
- **Hero subhead:** "Fort Collins Utilities raised rates 7% in 2025. Fort Collins-Loveland Water District is up 10% in 2026. Non-residential sewer up 20%. Smart Valve™ cuts your bill 15–58% guaranteed."
- **Key water issue:** Fort Collins faces increasing water rates and a mandate to reduce water demand to minimize shortages, per the city's Water Efficiency Plan. Multiple utilities serving the area are all raising rates simultaneously.
- **Rate data:** Fort Collins Utilities: 7% in 2025. Fort Collins-Loveland Water District: 10% in 2026. South Fort Collins Sanitation District: 20% non-residential sewer increase.
- **Rebates:** Fort Collins Utilities offers commercial water savings rebates and efficiency programs. Smart Valve™ may qualify — contact us for pre-approval assistance.
- **Utility:** Fort Collins Utilities / Fort Collins-Loveland Water District
- **Keywords:** "Fort Collins commercial water savings", "Fort Collins Utilities rate increase", "reduce water bill Fort Collins", "Smart Valve Fort Collins CO", "Northern Colorado commercial water efficiency"
- **Service area:** Fort Collins, Loveland, Greeley, Windsor, and Northern Colorado commercial properties

### Lakewood
- **H1:** "Lakewood Is in Stage 1 Drought — Commercial Water Restrictions Active, Rates Rising"
- **Hero subhead:** "Lakewood is under Stage 1 drought conditions with mandatory restrictions. Commercial water rates are rising. Smart Valve™ cuts your bill 15–58% guaranteed — and helps you stay compliant."
- **Key water issue:** Lakewood faces ongoing water scarcity due to a Stage 1 drought, leading to mandatory restrictions and rising water costs for commercial properties.
- **Rate data:** Columbine WSD fixed monthly charges rise to $19.06/month in 2025; Green Mountain WSD commercial rate is $7.80/1,000 gallons in 2025
- **Rebates:** Lakewood offers an Outdoor Water Conservation Program with incentives.
- **Utility:** Columbine Water & Sanitation District / Green Mountain Water & Sanitation District
- **Keywords:** "Lakewood CO commercial water savings", "Lakewood water restrictions", "reduce water bill Lakewood Colorado", "Smart Valve Lakewood CO"
- **Service area:** Lakewood, Wheat Ridge, Edgewater, and the Denver West commercial corridor

---

## TASK 2 — 34 Missing US State Pages

Create one state-level location page for each state below. Follow the exact same template as `/locations/florida` or `/locations/texas`. Register all routes in `App.tsx`.

**SEO title format for each:** `[State] Commercial Water Savings | Smart Valve™ | Perfect Water Valve`

**For every state page, include these keyword-rich H2 sections:**
1. "Commercial Water Rates in [State] — What You're Actually Paying"
2. "How Smart Valve™ Works for [State] Commercial Properties"
3. "Verified Savings: What [State] Commercial Properties Can Expect"
4. "Who We Serve in [State]" — list: office buildings, multi-family, hotels, car washes, hospitals, data centers, restaurants, industrial
5. "Calculate Your [State] Water Savings" — include the interactive savings calculator
6. "[State] FAQ" — 3–4 questions specific to the state's water situation
7. "Get a Free [State] Assessment" — contact form CTA

Use this data for each state's hero headline, H1, and key facts:

| State | Route | H1 | Key Water Issue | Rate Data |
|---|---|---|---|---|
| Alabama | `/locations/alabama` | "Alabama Commercial Water Rates Up 4.9% in 2025 — Drought Conditions Ongoing" | Persistent drought conditions impacting water availability and agriculture | Birmingham Water Works: 4.9% increase for 2025 |
| Alaska | `/locations/alaska` | "Anchorage Commercial Water Rates Rising 5.13% in 2025 — Infrastructure Costs Compounding" | Commercial rates increasing in major cities due to infrastructure needs | Anchorage AWWU: 5.13% increase effective Feb 2025; Juneau: 5% annual increases FY26–FY30 |
| Arkansas | `/locations/arkansas` | "Arkansas Water Rates Rising Statewide — Groundwater Levels in Decline" | Multiple cities implementing annual increases; declining groundwater levels; aging infrastructure | Little Rock: ~7.25% annual increase; Fort Smith: 3.5% sewer increase annually 2025–2030 |
| Connecticut | `/locations/connecticut` | "Connecticut Water Rates Up 5.45% Now — 19% Hike Proposed for 2027" | Aging infrastructure and PFAS contamination driving major rate increases | CT Water Co.: 5.45% in 2024, 19% proposed for 2027; South Central CT RWA: 3.4% for July 2026 |
| Delaware | `/locations/delaware` | "Delaware Water Rates Surging — Veolia Filed for 42.8% Increase Effective August 2025" | Multiple providers implementing significant increases driven by infrastructure and PFAS remediation costs | Veolia: 42.8% filed for Aug 2025; Wilmington: 5.8% in 2025; Tidewater: 13% approved; Artesian: 12.88% requested |
| Georgia | `/locations/georgia` | "Atlanta Commercial Water Rates Rising — Data Center Demand Straining Supply" | Water supply constraints and infrastructure challenges; data center growth straining Atlanta-area supply | Gwinnett County: ~$1.25/month increase Jan 2025; City of Winder base rate up to $20.44 in 2025 |
| Hawaii | `/locations/hawaii` | "Hawaii Water Rates Surging Up to 59% — Tourism and Military Demand Straining Island Supply" | Ongoing water scarcity exacerbated by tourism and military demand; Biscayne Aquifer-level depletion concerns | Hawaii Water Service: up to 59% for West Maui, 47.89% for other non-residential; Board of Water Supply: $20.15/unit July 2025 |
| Indiana | `/locations/indiana` | "Indiana Businesses Face Up to 85.5% Water Rate Increases by 2027 — Act Now" | Significant commercial rate hikes and potential future water shortages impacting business operations | Bloomington: 46–50% increase in 2025; Anderson: 85.5% by 2027 (initial 20.5%); statewide proposals of 30–49% |
| Iowa | `/locations/iowa` | "Iowa Data Centers Are Straining Water Supply — Rates and Restrictions Rising" | Rapid data center growth plus drought increasing demand and driving rate increases and use restrictions | Iowa-American Water: rates increasing from $2.76 to $4.01/1,000 gallons |
| Kentucky | `/locations/kentucky` | "Kentucky Commercial Water Rates Rising in 2025 — Non-Residential Conservation Mandates Active" | Water shortage regulations imposing restrictions on non-residential water usage | $8.0066 per 1,000 gallons effective December 16, 2025 |
| Louisiana | `/locations/louisiana` | "Louisiana Commercial Water Rates Up 7–8% Annually — Infrastructure Investment Driving Costs" | Ongoing rate increases driven by utility infrastructure investment across the state | Magnolia Water: 8% in 2024, 7% in 2025; St. James Parish: commercial flat rate increase in 2025 |
| Maine | `/locations/maine` | "Maine Water Rates Rising 8–9% for Infrastructure Upgrades — Portland District Leading Increases" | Aging infrastructure across Maine necessitating significant investment and unified rate structures | Portland Water District: 8.4% and 9.6% increases in 2026; Old Town: 2% in 2024 |
| Maryland | `/locations/maryland` | "Maryland Water Rates Rising — Drought and Population Growth Straining Supply, Conservation Mandated" | Rate increases across jurisdictions plus persistent drought and population growth; conservation mandates for businesses | Baltimore City: 3% water + 15%+ sewer in 2025; WSSC: $9.72/1,000 gal effective July 2025; MWS: $10.58/1,000 gal July 2025 |
| Massachusetts | `/locations/massachusetts` | "Massachusetts Commercial Water Rates Up to 8% in 2025 — Drought Conditions Active Statewide" | Multiple municipalities implementing significant increases; drought conditions affecting supply | Pittsfield: 8% in FY2025; Saugus: 6% increase; Greenfield: $4.35/100 cubic feet in 2025 |
| Michigan | `/locations/michigan` | "Michigan Commercial Water Rates Surging — BWL Up 9.16%, Birmingham Up 20%" | Significant and ongoing rate increases from multiple utilities; overtaxing of existing water supplies | BWL: 9.16% in 2025; GLWA: 5.9% in 2025; Birmingham: 20% increase |
| Minnesota | `/locations/minnesota` | "Minnesota Water Rates Rising 4% — Data Centers and Agriculture Straining Supply" | Industrial water usage straining resources; legislative efforts for stricter commercial permits | Overall 4.0% proposed increase for commercial water rates in 2025 |
| Mississippi | `/locations/mississippi` | "Mississippi Faces Back-to-Back Rate Hikes — 13% in 2024, 12% Approved in 2026" | Jackson's JXN Water implementing ongoing rate increases impacting commercial customers | JXN Water: 13% increase Jan 2024; 12% increase approved Feb 2026 |
| Missouri | `/locations/missouri` | "Missouri American Water Proposed 34.4% Rate Increase for 2025 — Some Cities Up 94%" | Significant commercial rate increases driven by infrastructure needs; some municipalities seeing near-doubling of base rates | Missouri American Water: 34.4% proposed; Neosho: 25% in 2024 + 10% in 2025; Republic: base rates up 94% |
| New Hampshire | `/locations/new-hampshire` | "New Hampshire Faces Rising Rates and Drought — Newport Sewer Up 25% in 2024" | Water supply challenges due to drought and aging infrastructure; conservation efforts in multiple towns | Newport sewer: 25% increase Nov 2024; Salem water rates increasing Jan 2025; Wolfeboro: 2% water + 7% sewer |
| New Jersey | `/locations/new-jersey` | "NJ Water Rates Surging — Veolia Proposes 9.82% Annual Revenue Increase" | Aging infrastructure and water quality concerns driving significant investments and rate increases | Veolia: 9.82% annual revenue increase proposed; NJ American Water: increases Sept 2024 + further hikes proposed |
| North Carolina | `/locations/north-carolina` | "North Carolina Faces Drought and Rising Rates — Commercial Conservation Mandates Active" | Ongoing drought conditions and localized water restrictions impacting commercial water usage | Fayetteville PWC: $1.25 basic facility charge increase May 2025 and again May 2026 |
| North Dakota | `/locations/north-dakota` | "North Dakota Drought Drives Infrastructure Investment — Commercial Rates Rising in 2025" | Historical and recent droughts necessitating major infrastructure projects; supply constraints for commercial and agricultural sectors | Jamestown: 40-cent/month increase in 2025; West Fargo: rate increases in 2025 and 2026 |
| Ohio | `/locations/ohio` | "Ohio Water Rates Soaring — Columbus Up 7%, Tallmadge Up 10% in 2025 Then 15% Annually" | Aging infrastructure and declining water fund balances driving major increases across the state | Tallmadge: 10% in 2025, then 15% annually 2026–2028; Columbus: 7% in 2025; Aqua Ohio: 10–12% proposed |
| Oklahoma | `/locations/oklahoma` | "Oklahoma Cities Implementing Major Water Rate Increases — Some Base Rates More Than Doubling" | Multiple cities implementing significant rate increases to cover rising operational costs and infrastructure | Midwest City: $18.19 in 2025, $21.20 in 2026; Pauls Valley base rate up from $20 to $41.25 |
| Pennsylvania | `/locations/pennsylvania` | "PA Water Rates Soaring — Aqua PA Up 50%, Supply Strained by Data Centers and Drought" | Data centers and drought straining public water supplies; mandatory conservation orders in effect | Aqua Pennsylvania: 50% increase Jan 2025; PA American Water: 14.6% proposed for 2025 |
| Rhode Island | `/locations/rhode-island` | "Rhode Island 99% Abnormally Dry — Water Restrictions Active, Rates Volatile" | 99% of state classified as abnormally dry; water restrictions in effect statewide | CREW consumption rates: Step 1 up 57.89% from 2024 to 2025 |
| South Carolina | `/locations/south-carolina` | "South Carolina Water Rates Rising Up to 20% Annually — Conservation Mandated by State" | Drought management plans and mandated non-potable water reuse for commercial buildings | Columbia: up to 20% annual increases over 5 years starting 2025; Lexington: 3.5% in July 2024 |
| South Dakota | `/locations/south-dakota` | "Black Hills Aquifers Depleting Faster Than Recharge — Rates Rising Across South Dakota" | Black Hills aquifers depleting faster than they recharge; structural long-term supply constraint | Mitchell: $3.75 increase in 2025; Pierre: 5% utility increase in 2026; Sturgis: $3.50/1,000 gal in 2026 |
| Tennessee | `/locations/tennessee` | "Tennessee Water Rates Climbing — Columbia Facing Up to 150% Total Increase Over 5 Years" | Ongoing rate increases driven by infrastructure improvements; some municipalities facing extreme multi-year hikes | Nashville Metro: 2.6% in 2025; Columbia: up to 20% annually for 5 years (150% total) |
| Vermont | `/locations/vermont` | "Burlington Water Bills Projected to Rise 89% by 2030 — Lock In Savings Now" | Drought and water supply shortages; Burlington projecting massive compounding rate increases | Burlington: up to 89% increase between 2025 and 2030 |
| Virginia | `/locations/virginia` | "Aqua Virginia Seeking 35.6% Water Rate Increase — Loudoun Water Up 7% Every Year" | Significant infrastructure investment driving substantial rate increases across multiple utilities | Loudoun Water: 7% annually from 2025; Aqua Virginia: 35.6% water + 17.9% sewage proposed; AlexRenew: 5% July 2025 |
| West Virginia | `/locations/west-virginia` | "West Virginia American Water Approved $20.5M Revenue Increase — Rates Rising March 2026" | Aging infrastructure driving ongoing rate increases to fund necessary upgrades and ensure reliable service | WV American Water: $20.5M annualized increase effective March 2026; DSIC/WSIC surcharge effective Jan 2025 |
| Wisconsin | `/locations/wisconsin` | "Wisconsin Water Rates Surging — Prescott Up 35% in 2025, Mukwonago Facing 46.9% by 2027" | Aging infrastructure and growing industrial demand from data centers driving major rate increases | Prescott: 35% in 2025 + 32% in 2026; Mukwonago: 8.77% in 2026 + 35.06% in 2027 |
| Wyoming | `/locations/wyoming` | "Cheyenne Commercial Water Up 10% in 2025 — Snow Drought Driving Statewide Restrictions" | Multiple cities facing significant rate increases and supply restrictions due to snow drought and scarcity | Cheyenne: 10% in 2025; Casper: 8% in 2026 + 8% in 2027; Upton: 7% in 2024 |

---

## TASK 3 — Europe Page

Create one international page at `/locations/europe`.

- **Title tag:** `Europe Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- **H1:** "Europe's Commercial Water Rates Are Rising 6–9% Annually — Smart Valve™ Cuts Bills 15–58% Guaranteed"
- **Key water issue:** A substantial portion of the EU is experiencing water stress. Water tariffs rose sharply in 2024 — Sweden +16.6%, Norway +14.3%, Netherlands +10.5%. Commercial charges in some regions expected to increase 9.8% from October 2025. Global tariffs projected to increase 6.2% between 2024 and 2025, with Europe leading this growth.
- **Rate data:** Sweden: +16.6% in 2024; Norway: +14.3%; Netherlands: +10.5%; projected 9.8% commercial increase Oct 2025
- **Include a section:** "Smart Valve™ in European Commercial Buildings" — explain NSF 61 & 372 certification, compatibility with European commercial water systems, and AWS/CWS partner network availability for European deployments through authorized installation partners.
- **Include a section:** "Which European Markets Have the Highest ROI" — cover UK, Germany, Netherlands, Scandinavia, and Southern Europe (Spain, Italy) where water scarcity is most severe.
- **Keywords:** "Europe commercial water savings", "European commercial water efficiency", "Smart Valve Europe", "reduce commercial water bill Europe", "EU water conservation technology"
- **CTA:** "Contact us to discuss European deployment and installation partner availability."
- **JSON-LD schema:** Use `areaServed: "Europe"` and `serviceArea: "European Union, United Kingdom, Norway, Switzerland"`

---

## TASK 4 — Asia Page

Create one international page at `/locations/asia`.

- **Title tag:** `Asia Commercial Water Savings | Smart Valve™ | Perfect Water Valve`
- **H1:** "Asia's Commercial Water Crisis Is Structural — Smart Valve™ Delivers Immediate, Guaranteed Bill Reduction"
- **Key water issue:** Asia faces increasing water scarcity driving adoption of smart water management technologies. Malaysia proposed 30% tariff hikes. China piloting a nationwide water tax starting December 1, 2024. Urban commercial properties across Southeast Asia, Japan, South Korea, and Australia face compounding water cost pressure.
- **Rate data:** Malaysia's Pengurusan Air Selangor: 30% tariff hike proposed; China: nationwide water tax pilot Dec 2024
- **Rebates:** Japan DWR Rebate program for water-saving initiatives; tax breaks/subsidies for water conservation in urban areas in some markets
- **Include a section:** "Asian Markets With Highest Smart Valve™ ROI" — cover Japan, South Korea, Singapore, Australia, Malaysia, and China.
- **Include a section:** "Smart Valve™ Compatibility in Asian Markets" — NSF 61 & 372 certification, AWS/CWS partner network, installation partner availability.
- **Keywords:** "Asia commercial water savings", "commercial water efficiency Asia", "Smart Valve Asia", "reduce water bill Asia", "water conservation technology Asia Pacific"
- **CTA:** "Contact us to discuss Asian market deployment and installation partner availability."
- **JSON-LD schema:** Use `areaServed: "Asia"` and `serviceArea: "Japan, South Korea, Singapore, Australia, Malaysia, China"`

---

## TASK 5 — Data Center Industry Pages

### Page 1: `/industries/data-centers/cooling-water-costs`

- **Title tag:** `Data Center Cooling Water Costs | Smart Valve™ Reduces Bills 15–58% | Perfect Water Valve`
- **H1:** "Data Center Cooling Water Is Your Second-Largest Operating Cost — Smart Valve™ Cuts It 15–58%"
- **Focus:** How data centers use water for cooling towers, evaporative cooling, and chiller systems. Smart Valve™ reduces cooling water consumption 15–58% with zero impact on cooling performance.
- **Key facts to include verbatim:**
  - The average hyperscale data center uses 1–5 million gallons of water per day for cooling
  - Iowa data centers are already straining municipal water supplies — the state is implementing new usage restrictions and rate increases directly tied to data center demand (2025)
  - Pennsylvania's public water supply is under mandatory conservation orders partly due to data center demand straining supply
  - DFW is a top-3 US data center market — cooling water is the dominant operational water cost for facilities in that corridor
  - Smart Valve™ installs on the main supply line before cooling tower makeup water — reduces volume billed without affecting cooling performance, pressure, or uptime
  - Amazon YYZ3 achieved 58.69% peak savings over 6 consecutive quarters — the highest verified result in the Smart Valve™ portfolio
  - NSF 61 & 372 certified — meets all drinking water system component standards for data center potable and process water lines
- **H2 sections:**
  - "How Data Centers Use Water — And Where the Waste Happens"
  - "Smart Valve™ Installation in Data Center Environments"
  - "Verified Data Center Results"
  - "Data Center Water Regulations by State" — mention Iowa, Pennsylvania, Texas, Virginia (top data center markets with active water pressure)
  - "ROI Calculator for Data Centers"
  - "Get a Free Data Center Water Assessment"
- **Keywords:** "data center water usage", "data center cooling water costs", "reduce data center water bill", "Smart Valve data center", "data center water efficiency", "cooling tower water savings", "hyperscale data center water consumption", "data center water cost reduction"
- **Internal links:** Link to `/industries/data-centers/hyperscale-roi`, `/locations/iowa`, `/locations/pennsylvania`, `/locations/virginia`
- **CTA:** "Get a Free Data Center Water Assessment"

### Page 2: `/industries/data-centers/hyperscale-roi`

- **Title tag:** `Hyperscale Data Center Water ROI | Smart Valve™ Multi-Site Savings | Perfect Water Valve`
- **H1:** "Hyperscale Data Center ROI: Smart Valve™ Delivers 15–58% Water Savings Across Every Facility"
- **Focus:** ROI analysis for large-scale and multi-site data center deployments. Compounding savings across multiple facilities, multiple meters, enterprise-level deployment.
- **Key facts to include verbatim:**
  - Amazon YYZ3 achieved 58.69% peak savings over 6 consecutive quarters — the highest verified result in the Smart Valve™ portfolio and the benchmark for hyperscale deployments
  - At hyperscale, a 20% water reduction across 10 facilities spending $50,000/month each on water represents $1.2M+ in annual savings
  - Smart Valve™ requires no electricity, no moving parts, no maintenance — zero ongoing OpEx after installation. The only cost is the one-time installation.
  - NSF 61 & 372 certified — meets all drinking water system component standards for data center potable and process water lines
  - AWS and CWS partner network provides enterprise-level SLAs, multi-site deployment coordination, and M&V (Measurement & Verification) reporting for every installation
  - Typical payback period: 2–4 billing cycles. At hyperscale water spend, this often means full ROI within 60–90 days.
  - Compatible with 99% of commercial water meters — no meter replacement, no downtime, installed in under 4 hours per site
- **H2 sections:**
  - "The Amazon YYZ3 Benchmark — 58.69% Savings Over 6 Quarters"
  - "Multi-Site ROI Model — What Hyperscale Savings Actually Look Like"
  - "Enterprise Deployment Process — From Assessment to M&V Report"
  - "Why Data Center Operators Choose Smart Valve™ Over Alternatives"
  - "Top US Data Center Markets and Their Water Cost Pressure" — cover Virginia (Northern VA / Ashburn corridor), Texas (DFW), Iowa, Ohio, Arizona, Georgia
  - "Schedule a Multi-Site Data Center Assessment"
- **Keywords:** "hyperscale data center water savings", "data center water ROI", "multi-site water efficiency", "Smart Valve hyperscale", "data center water cost reduction", "enterprise water savings program", "Amazon data center water savings", "data center M&V water"
- **Internal links:** Link to `/industries/data-centers/cooling-water-costs`, `/locations/virginia`, `/locations/iowa`, `/locations/ohio`, `/locations/arizona` (if it exists), `/results/`
- **CTA:** "Schedule a Multi-Site Data Center Assessment"

---

## TASK 6 — Update Sitemap

After adding all pages, update `public/sitemap.xml` to include every new URL:
- Colorado city pages: `priority="0.8"`
- State pages: `priority="0.7"`
- International pages: `priority="0.6"`
- Data center industry pages: `priority="0.8"`
- `lastmod` set to today's date for all new entries

---

## TASK 7 — Update Navigation / Footer

- In the Locations section of the footer or nav, add a "Colorado Cities" group linking to all 5 new city pages
- Add an "International" group linking to `/locations/europe` and `/locations/asia`
- Add the two new data center pages under the Industries section

---

After completing all tasks: save, build, and republish the app. Confirm each task is done in your summary.
