import LocationPage from "./LocationTemplate";

const config = {
  state: "West Virginia",
  emoji: "⛰️",
  headline: "West Virginia American Water Raising Rates — Infrastructure Investment Driving Annual Increases",
  subheadline: "West Virginia American Water is raising commercial rates by $3.97/month in 2025, with a further $1.94/month increase in 2026. West Virginia's aging water infrastructure requires ongoing capital investment, and commercial customers fund this through annual rate increases. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "WV American Water: $3.97/Month Rise in 2025, $1.94/Month More in 2026",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "$3.97", label: "WV American Monthly Rise 2025" },
    { value: "$1.94", label: "WV American Monthly Rise 2026" },
  ],
  whyTitle: "West Virginia Commercial Properties Face Multi-Year Rate Increase Schedules",
  whyIntro: "West Virginia American Water is implementing a committed two-year rate increase schedule: $3.97/month in 2025 followed by $1.94/month in 2026. West Virginia's aging water infrastructure requires significant investment, and this scheduled increase reflects a multi-year commitment to infrastructure modernization funded by commercial customers.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "WV American Water: $3.97/Month in 2025, $1.94/Month in 2026", body: "West Virginia American Water has committed to a two-year rate increase schedule: $3.97 per month in 2025, followed by $1.94 per month in 2026. This scheduled commitment provides commercial customers with certainty about upcoming cost increases — making now the ideal time to lock in consumption savings before both hikes take full effect." },
    { icon: "AlertTriangle", color: "orange", title: "West Virginia's Infrastructure Investment Backlog", body: "West Virginia's water infrastructure has significant deferred maintenance needs. The state's geography — mountainous terrain with dispersed communities — makes water infrastructure particularly expensive to maintain and upgrade. These costs are passed to commercial customers through rate increases that will continue as the backlog is addressed." },
    { icon: "DollarSign", color: "blue", title: "Energy and Industrial Sector — High-Volume Commercial Users", body: "West Virginia's energy and industrial sectors are significant commercial water users. For facilities in energy extraction, manufacturing, and industrial processing, high monthly water consumption means that Smart Valve™'s guaranteed 15–35% annual reduction translates to substantial absolute dollar savings." },
    { icon: "Building2", color: "teal", title: "All West Virginia Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Charleston, Huntington, Morgantown, Parkersburg, Wheeling, Martinsburg, and all West Virginia commercial corridors." },
  ],
  markets: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Martinsburg", "Clarksburg", "Beckley"],
  faqItems: [
    { q: "Does Smart Valve™ work with West Virginia American Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by West Virginia American Water and all West Virginia municipal utility systems." },
    { q: "How much will WV American Water's rate schedule cost over two years?", a: "A property paying $10,000/month will pay an additional $3.97 × 12 = $47.64 more per month in 2025, then another $1.94 × 12 = $23.28 more monthly in 2026 — compounding annually. Smart Valve™'s 15–35% annual consumption reduction saves far more than these increases on an ongoing basis." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your West Virginia property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which WV commercial properties benefit most?", a: "Industrial facilities, energy sector properties, healthcare facilities, office buildings, and hotels in Charleston, Huntington, and Morgantown have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free West Virginia Water Assessment",
  contactBody: "WV American Water is raising rates $3.97/month in 2025 and another $1.94/month in 2026. Infrastructure investment means increases will continue beyond that. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All WV Markets", desc: "Charleston, Huntington, Morgantown and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/west-virginia",
  seoTitle: "West Virginia Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in West Virginia. WV American Water raising rates $3.97/month in 2025 and $1.94/month in 2026. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/west-virginia",
};

export default function WestVirginia() {
  return <LocationPage config={config} />;
}
