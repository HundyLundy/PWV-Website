import LocationPage from "./LocationTemplate";

const CO_OTHER_CITIES = [
  { name: "Denver", slug: "colorado/denver" },
  { name: "Colorado Springs", slug: "colorado/colorado-springs" },
  { name: "Aurora", slug: "colorado/aurora" },
  { name: "Fort Collins", slug: "colorado/fort-collins" },
  { name: "Lakewood", slug: "colorado/lakewood" },
  { name: "Boulder", slug: "colorado/boulder" },
  { name: "Pueblo", slug: "colorado/pueblo" },
  { name: "Loveland", slug: "colorado/loveland" },
  { name: "Greeley", slug: "colorado/greeley" },
];

const config = {
  state: "Arvada",
  emoji: "🏘️",
  headline: "Arvada Water Rates Up 5.8–6% in 2025 — Dual Utility Market Requires Extra Diligence",
  subheadline: "Arvada commercial properties may be billed by Denver Water (6% increase 2025) or North Table Mountain Water & Sanitation District (5.8% increase 2025) depending on location. Denver Water rebates apply to Denver Water-served properties. Smart Valve™ cuts your metered bill 15–58%, guaranteed — regardless of which utility serves you.",
  urgencyBadge: "Arvada: Denver Water +6% or North Table Mountain +5.8% in 2025 — Denver Water Rebate Available",
  heroStats: [
    { value: "5.8–6%", label: "Arvada Water Rise 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Rebate", label: "Denver Water Rebate Eligible" },
  ],
  whyTitle: "Arvada's Dual-Utility Structure Means Both Rate Trajectories Are Rising — And Denver Water Rebates Are Available",
  whyIntro: "Arvada is uniquely served by two utilities: Denver Water (6% increase 2025) and North Table Mountain Water & Sanitation District (5.8% increase 2025). Commercial properties in Denver Water's Arvada service area qualify for Denver Water's commercial conservation rebate — covering up to 50% of Smart Valve™ installation costs. This rebate is budget-limited and runs out annually.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Two Rate Increases in 2025 — Denver Water and North Table Mountain Both Rising", body: "Denver Water raised commercial rates 6% in 2025 and has signaled continued annual increases through 2027. North Table Mountain Water & Sanitation District raised rates 5.8% in 2025. Arvada commercial properties face rate pressure from both utilities, with no indication of the trajectory reversing." },
    { icon: "AlertTriangle", color: "orange", title: "Denver Water Rebate Covers Up to 50% of Installation — But Budget Runs Out", body: "Denver Water's commercial conservation rebate covers up to 50% of Smart Valve™ installation costs for qualifying properties in Denver Water's Arvada service area. This rebate is funded annually and runs out every year. Properties that pre-approve now secure their position before the budget is exhausted." },
    { icon: "Droplets", color: "blue", title: "Colorado Drought Affects Both Utilities Serving Arvada", body: "Both Denver Water and North Table Mountain draw from Colorado's drought-stressed water systems. Colorado's severe drought conditions are reducing snowpack, reservoir storage, and transmountain diversion capacity — driving infrastructure investment and rate increases at both utilities." },
    { icon: "Building2", color: "teal", title: "Arvada's Growing Commercial and Mixed-Use Markets", body: "Arvada's growing Olde Town district, the Northwest Parkway commercial corridor, Candelas, and the expanding mixed-use developments along Wadsworth Boulevard and I-70 are all prime Smart Valve™ applications." },
  ],
  markets: ["Olde Town Arvada", "Candelas", "Ralston Road", "Wadsworth Corridor", "I-70 Industrial", "Northwest Parkway", "Arvada Ridge", "West Arvada"],
  faqItems: [
    { q: "Which utility serves my Arvada commercial property — Denver Water or North Table Mountain?", a: "Arvada commercial properties are split between Denver Water and North Table Mountain Water & Sanitation District depending on location. Check your water bill for your utility provider, or contact Perfect Water Valve and we will identify your utility as part of your free assessment." },
    { q: "Does Arvada qualify for Denver Water's commercial rebate?", a: "Yes — commercial properties in Arvada that are served by Denver Water qualify for Denver Water's commercial conservation rebate, which covers up to 50% of Smart Valve™ installation costs. This rebate is budget-limited. Contact Perfect Water Valve to start the pre-approval process before the annual budget runs out." },
    { q: "What are current commercial water rates in Arvada?", a: "Denver Water raised commercial rates 6% in 2025 and has signaled continued annual increases through 2027. North Table Mountain Water & Sanitation District raised commercial rates 5.8% in 2025. Both utilities are on a sustained rate increase trajectory driven by Colorado's drought conditions and infrastructure investment requirements." },
    { q: "What commercial property types in Arvada benefit most from Smart Valve™?", a: "Multifamily residential, hotels, office buildings, retail centers, and light industrial facilities throughout the Arvada metro. Denver Water-served properties with higher water bills are typically the strongest ROI candidates due to rebate eligibility." },
    { q: "How long does Smart Valve™ installation take in Arvada?", a: "A licensed plumber installs Smart Valve™ in 2–4 hours on the main supply line with zero operational disruption. Savings appear on your next bill. Perfect Water Valve handles all rebate paperwork for Denver Water-served properties." },
  ],
  contactHeading: "Get a Free Arvada Water Assessment",
  contactBody: "Arvada faces dual utility rate increases of 5.8–6% in 2025. Denver Water-served properties qualify for up to 50% rebate coverage — budget limited, available now. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "We identify your utility and rebate eligibility" },
    { title: "Denver Water Rebate", desc: "Up to 50% covered — budget runs out annually" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/arvada",
  alsoServing: CO_OTHER_CITIES,
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Arvada Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Arvada, CO. Denver Water up 6% in 2025. North Table Mountain up 5.8%. Denver Water rebate available. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/arvada",
};

export default function Arvada() {
  return <LocationPage config={config} />;
}
