import LocationPage from "./LocationTemplate";

const config = {
  state: "Fort Collins",
  emoji: "🎓",
  headline: "Fort Collins Water Raising Rates — University and Tech Sector Growth Adding Demand",
  subheadline: "Fort Collins Utilities is raising commercial water rates to fund infrastructure investment and drought resilience. Fort Collins hosts Colorado State University and a growing tech and biotech sector — creating high commercial water demand against a constrained supply from Poudre River and Horsetooth Reservoir. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Fort Collins Utilities: Rate Increases Active | Poudre River Drought Stress",
  heroStats: [
    { value: "Active", label: "Rate Increases 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Drought", label: "Poudre River Supply Stress" },
  ],
  whyTitle: "Fort Collins' Growing University and Tech Economy Is Creating Commercial Water Demand Against a Drought-Stressed Supply",
  whyIntro: "Fort Collins Utilities serves a diverse commercial market anchored by Colorado State University, a growing tech and biotech corridor, and established commercial districts. Drought stress on the Poudre River and Horsetooth Reservoir — Fort Collins' primary water sources — is driving infrastructure investment and conservation programs funded through commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Fort Collins Utilities Implementing Commercial Rate Increases", body: "Fort Collins Utilities is raising commercial water rates to fund drought resilience infrastructure and maintain reliable supply from the Poudre River system and Horsetooth Reservoir. Rate increases reflect both infrastructure investment needs and the rising cost of water treatment and conservation programs." },
    { icon: "AlertTriangle", color: "orange", title: "Poudre River Drought Stress — Fort Collins' Primary Source", body: "The Cache la Poudre River is Fort Collins' primary water source and is experiencing significant stress from Colorado drought conditions. Reduced snowpack in the upstream Rocky Mountain watershed means lower river flows and reduced Horsetooth Reservoir levels, driving conservation mandates for commercial customers." },
    { icon: "Droplets", color: "blue", title: "CSU Research and Biotech — High-Volume Water Users", body: "Colorado State University and Fort Collins' growing biotech and research sector are significant commercial water users. For these facilities, water consumption is integral to operations — making Smart Valve™'s guaranteed 15%–35% annual reduction both a cost saving and an operational efficiency improvement." },
    { icon: "Building2", color: "teal", title: "All Fort Collins Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Old Town Fort Collins, Midtown, the Foothills Mall corridor, CSU Research campus, and the broader Larimer County commercial market." },
  ],
  markets: ["Old Town", "Midtown", "CSU Campus", "Foothills Mall", "East Mulberry", "Harmony Corridor", "South College", "Lemay"],
  faqItems: [
    { q: "What is the water situation in Fort Collins?", a: "Fort Collins Utilities serves a growing commercial base along the Northern Colorado Front Range. Rate increases have tracked with statewide trends, and the city has active water conservation mandates for commercial properties." },
    { q: "Does Fort Collins have commercial water conservation incentives?", a: "Fort Collins Utilities has historically offered commercial water efficiency rebates. Contact Perfect Water Valve for current program availability and pre-approval assistance." },
    { q: "What types of commercial properties in Fort Collins use Smart Valve™?", a: "Hotels, university-adjacent multifamily properties, breweries, restaurants, and industrial facilities in the Fort Collins area are all strong candidates for Smart Valve™ installation." },
    { q: "How do I get a free water assessment in Fort Collins?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your current water bills, calculate projected savings with specific numbers, and provide a written guarantee before any installation begins." },
  ],
  contactHeading: "Get a Free Fort Collins Water Assessment",
  contactBody: "Fort Collins Utilities is raising rates while Poudre River drought stress reduces supply. Conservation mandates are active. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "Fort Collins Metro", desc: "Old Town, Midtown, CSU and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/fort-collins",
  alsoServing: [
    { name: "Denver", slug: "colorado/denver" },
    { name: "Colorado Springs", slug: "colorado/colorado-springs" },
    { name: "Aurora", slug: "colorado/aurora" },
    { name: "Lakewood", slug: "colorado/lakewood" },
    { name: "Boulder", slug: "colorado/boulder" },
    { name: "Pueblo", slug: "colorado/pueblo" },
    { name: "Loveland", slug: "colorado/loveland" },
    { name: "Greeley", slug: "colorado/greeley" },
    { name: "Arvada", slug: "colorado/arvada" },
  ],
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Fort Collins Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Fort Collins, CO. Poudre River drought stress. Fort Collins Utilities raising rates. CSU and tech sector high-volume users. Guaranteed in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/fort-collins",
};

export default function FortCollins() {
  return <LocationPage config={config} />;
}
