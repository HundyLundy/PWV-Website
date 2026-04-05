import LocationPage from "./LocationTemplate";

const CO_OTHER_CITIES = [
  { name: "Denver", slug: "colorado/denver" },
  { name: "Colorado Springs", slug: "colorado/colorado-springs" },
  { name: "Aurora", slug: "colorado/aurora" },
  { name: "Fort Collins", slug: "colorado/fort-collins" },
  { name: "Lakewood", slug: "colorado/lakewood" },
  { name: "Pueblo", slug: "colorado/pueblo" },
  { name: "Loveland", slug: "colorado/loveland" },
  { name: "Greeley", slug: "colorado/greeley" },
  { name: "Arvada", slug: "colorado/arvada" },
];

const config = {
  state: "Boulder",
  emoji: "🌿",
  headline: "City of Boulder Water Up 5.5% in 2025 — Colorado River Allocation Pressure Is Accelerating",
  subheadline: "City of Boulder Water raised commercial rates 5.5% in 2025 as one of Colorado's most water-conscious cities faces severe Colorado River allocation pressure. Boulder's forward-thinking water policy means commercial properties are already paying for drought resilience — and Smart Valve™ cuts your metered bill 15%–35% annually, guaranteed.",
  urgencyBadge: "City of Boulder Water: 5.5% Rate Increase Active 2025 — Colorado River Allocation Pressure Ongoing",
  heroStats: [
    { value: "5.5%", label: "Boulder Water Rise 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Critical", label: "Colorado River Allocation Pressure" },
  ],
  whyTitle: "Boulder's Water-Conscious Culture Is Already Paying the Price for Colorado River Strain",
  whyIntro: "City of Boulder Water raised commercial rates 5.5% in 2025 and faces some of the most acute long-term water supply pressure in Colorado. Boulder's reliance on Colorado River allocations means every federal shortage declaration directly impacts Boulder's water supply reliability and rate trajectory.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "City of Boulder Water: 5.5% Rate Increase in 2025", body: "City of Boulder Water raised commercial rates 5.5% in 2025 to fund drought resilience infrastructure and water portfolio diversification. Boulder's commitment to long-term supply security means continued investment — and continued rate pressure — for the foreseeable future." },
    { icon: "AlertTriangle", color: "orange", title: "Colorado River Allocation Pressure — Boulder Is on the Front Line", body: "Boulder is among the most Colorado River-dependent cities in the state. The federal shortage declaration and the expiration of the 2007 Colorado River Interim Guidelines in 2026 create direct supply uncertainty for Boulder Water. Commercial properties must plan for continued rate increases as supply contracts." },
    { icon: "Droplets", color: "blue", title: "Boulder's Progressive Water Policy Means Earlier, Steeper Rate Action", body: "Boulder has some of the most aggressive conservation programs in Colorado. That means Boulder commercial properties are already paying into drought resilience programs — and will continue to see structured rate increases as Boulder Water executes its Long-Term Water Supply Plan." },
    { icon: "Building2", color: "teal", title: "University Hill, Pearl Street, and Boulder's Commercial Corridor", body: "The University of Colorado at Boulder, Pearl Street Mall, the 29th Street retail corridor, and Boulder's growing tech and biotech sector are all prime Smart Valve™ applications. Any Boulder commercial property spending $5,000+/month on water qualifies." },
  ],
  markets: ["Pearl Street", "University Hill", "29th Street Corridor", "East Boulder Tech", "Gunbarrel", "Table Mesa", "Diagonal Plaza", "Crossroads"],
  faqItems: [
    { q: "What are current commercial water rates in Boulder?", a: "City of Boulder Water raised commercial rates 5.5% in 2025. Boulder faces ongoing Colorado River allocation pressure that is likely to drive continued rate increases as the city executes its Long-Term Water Supply Plan." },
    { q: "Does Boulder have a rebate program for water savings equipment?", a: "City of Boulder Water offers conservation incentives for commercial properties. Contact Perfect Water Valve for current rebate availability and eligibility. Note: Denver Water rebates do not apply in Boulder — Boulder is served exclusively by City of Boulder Water." },
    { q: "Why is Boulder particularly vulnerable to water rate increases?", a: "Boulder relies heavily on Colorado River allocations, which are subject to federal shortage declarations. As the Colorado River compact comes up for renegotiation in 2026, Boulder faces real long-term supply uncertainty that will drive further rate increases and conservation mandates." },
    { q: "What types of commercial properties does Perfect Water Valve serve in Boulder?", a: "University-adjacent commercial properties, Pearl Street retail and hospitality, East Boulder office and tech campuses, multifamily residential, and hospitality venues throughout the Boulder metro area." },
    { q: "How does Smart Valve™ installation work in Boulder?", a: "A licensed plumber installs Smart Valve™ on the user side of your water meter — between the meter and the pressure regulator — in under 4 hours. Savings appear on your next bill. Perfect Water Valve guarantees at least 15% reduction in writing." },
  ],
  contactHeading: "Get a Free Boulder Water Assessment",
  contactBody: "City of Boulder Water is up 5.5% in 2025 with Colorado River pressure pointing to further increases. Smart Valve™ guarantees at least 15% off your metered bill — verified and in writing.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Boulder Markets", desc: "Pearl Street, University Hill, East Boulder and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/boulder",
  alsoServing: CO_OTHER_CITIES,
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Boulder Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Boulder, CO. City of Boulder Water up 5.5% in 2025. Colorado River allocation pressure ongoing. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/boulder",
};

export default function Boulder() {
  return <LocationPage config={config} />;
}
