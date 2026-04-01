import LocationPage from "./LocationTemplate";

const config = {
  state: "Maine",
  emoji: "🦞",
  headline: "Maine Water Rates Rising 8–9% for Infrastructure Upgrades — Portland District Leading Increases",
  subheadline: "Portland Water District is implementing 8.4% and 9.6% increases in 2026. Old Town has already implemented 2% increases. Maine's aging water infrastructure requires substantial investment across the state. Smart Valve™ cuts your commercial water bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Portland Water District: 8.4% and 9.6% Increases in 2026",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "9.6%", label: "Portland District Rise 2026" },
    { value: "8.4%", label: "Portland District First Hike" },
  ],
  whyTitle: "Maine's Infrastructure Investment Cycle Means Compounding Rate Increases for Commercial Properties",
  whyIntro: "Maine's water infrastructure — much of it built in the mid-20th century — requires substantial investment to maintain reliability and meet modern standards. Portland Water District is leading the state with 8.4% and 9.6% increases in 2026, and other Maine utilities are following with their own schedules of increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Portland Water District: Two Increases in 2026 — 8.4% and 9.6%", body: "Portland Water District is implementing two commercial rate increases in 2026: 8.4% followed by 9.6%. These stacked increases in a single year represent a compound increase of approximately 18% for commercial customers in Greater Portland. This is not a one-time adjustment — it reflects a multi-year infrastructure investment program." },
    { icon: "AlertTriangle", color: "orange", title: "Old Town and Statewide Utilities Following Suit", body: "Old Town has implemented 2% increases, and utilities across Maine are implementing their own rate increase schedules as infrastructure investment programs accelerate. Maine's commercial water customers should expect annual increases to continue as the state's water systems modernize." },
    { icon: "Droplets", color: "blue", title: "Aging Infrastructure = Multi-Year Rate Increase Cycle", body: "Maine's water infrastructure investment is not a short-term program. Replacing aging pipes, upgrading treatment facilities, and meeting modern environmental standards is a decades-long commitment. Commercial water rates will continue rising throughout this cycle. Smart Valve™ locks in savings that offset each year's increases." },
    { icon: "Building2", color: "teal", title: "All Maine Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Portland, Lewiston, Bangor, South Portland, Auburn, Biddeford, Augusta, Saco, and all Maine commercial corridors." },
  ],
  markets: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Augusta", "Saco"],
  faqItems: [
    { q: "Does Smart Valve™ work with Portland Water District meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Portland Water District, Bangor Water, and all Maine municipal utility systems." },
    { q: "How much can Maine commercial properties save?", a: "The guaranteed minimum is 15%. With Portland Water District implementing stacked 8.4% and 9.6% increases in 2026, a property reducing consumption 15% on a $20,000/month bill saves $3,000/month — or $36,000/year — more than offsetting both rate increases." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Maine property doesn't reach 15%, we resolve it at no cost." },
    { q: "What Maine commercial properties benefit most?", a: "Hotels, healthcare facilities, office buildings, and multifamily complexes in Greater Portland, Lewiston-Auburn, and Bangor have the strongest ROI profile. Any property with a monthly water bill above $5,000 qualifies." },
  ],
  contactHeading: "Get a Free Maine Water Assessment",
  contactBody: "Portland Water District is stacking two increases in 2026 — 8.4% and 9.6%. Maine's infrastructure investment cycle means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Maine Markets", desc: "Portland, Bangor, Lewiston and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/maine",
  seoTitle: "Maine Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Maine. Portland Water District up 8.4% then 9.6% in 2026. Infrastructure investment driving rates higher. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/maine",
};

export default function Maine() {
  return <LocationPage config={config} />;
}
