import LocationPage from "./LocationTemplate";

const config = {
  state: "Utah",
  emoji: "🏜️",
  headline: "Utah Is the Second-Driest State in America — And Salt Lake City Is Running Out of Water",
  subheadline: "Great Salt Lake has reached historic lows, threatening air quality and municipal water supply. Salt Lake City raised commercial rates 8% in 2025. Utah has the highest per-capita water consumption in the US — commercial properties are under regulatory and cost pressure from both directions. Smart Valve™ delivers 15–58% savings.",
  urgencyBadge: "Great Salt Lake at Historic Lows · SLC +8% 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "8%", label: "SLC Rate Rise 2025" },
    { value: "#2", label: "Driest US State" },
  ],
  whyTitle: "Utah's Water Crisis Is Structural — Not Seasonal",
  whyIntro: "The Great Salt Lake has been shrinking for decades. Utah has the highest per-capita water consumption in the US. Regulators are tightening commercial water use requirements. Rate increases are accelerating.",
  whyPoints: [
    { icon: "AlertTriangle", color: "red", title: "Great Salt Lake — Historic Low Levels", body: "The Great Salt Lake has reached historic low water levels, threatening air quality, wildlife habitat, and long-term water supply for the Wasatch Front. This is an environmental crisis with direct regulatory consequences for commercial water users." },
    { icon: "TrendingUp", color: "orange", title: "Salt Lake City +8% in 2025", body: "Salt Lake City raised commercial water rates 8% in 2025. Provo, Ogden, and other Wasatch Front utilities have implemented comparable increases to fund conservation programs and infrastructure." },
    { icon: "Activity", color: "blue", title: "Highest Per-Capita Consumption in US", body: "Utah has the highest per-capita water consumption in the United States. State regulators have publicly set mandatory reduction targets for commercial properties. Properties that act early avoid mandatory conservation orders." },
    { icon: "Droplets", color: "yellow", title: "Mountain West Pressure Surges", body: "Like Colorado, Utah's mountain-fed municipal systems experience significant elevation-driven pressure changes. These pressure surges increase air entrapment in commercial supply lines — making Smart Valve™ especially effective in the Wasatch Front market." },
    { icon: "DollarSign", color: "teal", title: "Jordan Valley Conservation Incentives", body: "Jordan Valley Water Conservancy District offers commercial conservation incentives for verified water-saving projects. Smart Valve™ M&V documentation may qualify for rebate assistance." },
    { icon: "Building2", color: "purple", title: "All Utah Markets Served", body: "Salt Lake City, Provo, Ogden, St. George, Layton, South Jordan, Lehi, and all Utah markets." }
  ],
  markets: ["Salt Lake City", "Provo", "Ogden", "St. George", "Layton", "South Jordan", "Lehi", "Logan"],
  faqItems: [
    { q: "How does Utah's water crisis affect commercial water costs?", a: "Utah's structural water supply challenges — Great Salt Lake decline, overuse of the Colorado River compact allocation, and aquifer depletion — are driving state and local regulators to impose both rate increases and mandatory consumption restrictions on commercial properties." },
    { q: "Does Utah's altitude affect Smart Valve™ performance?", a: "Yes — positively. Like Colorado, Utah's mountainous terrain creates pressure fluctuations in municipal distribution systems. These conditions increase air entrapment, which means Smart Valve™ delivers results at or above the guaranteed 15% minimum." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Utah commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Utah Water Assessment",
  contactBody: "Utah's structural water crisis is driving mandatory conservation requirements and accelerating rate increases. Smart Valve™ gets you ahead of both.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Utah Markets", desc: "Salt Lake City, Provo, St. George and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Mountain West Experts", desc: "Same conditions as Colorado — same proven results" },
  ],
  source: "perfectwatervalve.com/locations/utah",
};

export default function Utah() {
  return <LocationPage config={config} />;
}
