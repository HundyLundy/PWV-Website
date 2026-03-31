import LocationPage from "./LocationTemplate";

const config = {
  state: "Oklahoma",
  emoji: "🌪️",
  headline: "Oklahoma Cities Implementing Major Water Rate Increases — Some Base Rates More Than Doubling",
  subheadline: "Midwest City raised commercial water rates to $18.19 in 2025 and $21.20 in 2026. Pauls Valley's base rate jumped from $20 to $41.25 — more than doubling. Oklahoma commercial properties face dramatic rate increases in cities across the state. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Pauls Valley OK: Base Rate Doubled From $20 to $41.25 | Midwest City: Rising in 2025 and 2026",
  heroStats: [
    { value: "106%", label: "Pauls Valley Base Rate Rise" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "$21.20", label: "Midwest City Rate 2026" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Oklahoma Commercial Properties Face Infrastructure-Driven Rate Increases Across the State",
  whyIntro: "Oklahoma's commercial water rate increases range from significant to dramatic. Pauls Valley effectively doubled its commercial base rate from $20 to $41.25. Midwest City is raising rates to $18.19 in 2025 and $21.20 in 2026. These increases reflect the cost of maintaining and upgrading Oklahoma's aging water infrastructure across both urban and rural markets.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Pauls Valley: Base Rate More Than Doubled — $20 to $41.25", body: "Pauls Valley, Oklahoma raised its commercial base rate from $20 to $41.25 — a 106% increase in the fixed monthly charge alone. This before consumption-based rates are applied. For commercial properties, this represents an immediate, significant increase in baseline water costs that cannot be reduced without cutting consumption." },
    { icon: "AlertTriangle", color: "orange", title: "Midwest City: $18.19 in 2025, $21.20 in 2026 — Two-Year Schedule", body: "Midwest City has a committed two-year rate increase schedule: $18.19 in 2025, $21.20 in 2026. This predictable but unavoidable schedule gives commercial properties an opportunity to lock in consumption savings now before the 2026 increase takes effect." },
    { icon: "DollarSign", color: "blue", title: "Infrastructure Aging Across Oklahoma's Commercial Markets", body: "Oklahoma's dramatic rate increases reflect infrastructure that has been deferred and underfunded for decades. From Oklahoma City's distribution network to smaller city treatment facilities, the investment backlog is being addressed through rate increases that will continue as the state catches up on infrastructure needs." },
    { icon: "Building2", color: "teal", title: "All Oklahoma Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Oklahoma City, Tulsa, Norman, Broken Arrow, Edmond, Midwest City, Pauls Valley, and all Oklahoma commercial corridors." },
  ],
  markets: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Midwest City", "Lawton", "Pauls Valley"],
  faqItems: [
    { q: "Does Smart Valve™ work with Oklahoma utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Oklahoma City Utilities, Tulsa Metropolitan Utility Authority, Midwest City, and all Oklahoma municipal utility systems." },
    { q: "If my Oklahoma base rate doubled, does Smart Valve™ still help?", a: "Yes. Smart Valve™ reduces your metered consumption 15–58%, which directly cuts the volume-based portion of your bill. Fixed base rate increases cannot be offset by consumption reduction, but a 15–58% reduction in the consumption component provides meaningful savings even against doubled base rates." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Oklahoma property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Oklahoma commercial properties benefit most?", a: "Office buildings, healthcare facilities, hotels, and multifamily complexes in Oklahoma City, Tulsa, and Edmond have the highest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Oklahoma Water Assessment",
  contactBody: "Pauls Valley doubled its base rate. Midwest City is raising rates in both 2025 and 2026. Oklahoma's infrastructure backlog means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Oklahoma Markets", desc: "OKC, Tulsa, Edmond and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/oklahoma",
  seoTitle: "Oklahoma Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Oklahoma. Pauls Valley base rate doubled. Midwest City raising rates in 2025 and 2026. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/oklahoma",
};

export default function Oklahoma() {
  return <LocationPage config={config} />;
}
