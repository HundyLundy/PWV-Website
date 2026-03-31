import LocationPage from "./LocationTemplate";

const config = {
  state: "Washington",
  emoji: "🌲",
  headline: "Seattle's Water Rates Are Up 5.7% in 2026 and Rising — Smart Valve™ Guarantees 15–58% in Savings",
  subheadline: "Seattle Public Utilities raised water rates 5.7% for 2026. Washington State has mandatory water conservation targets for commercial properties. Tacoma increased rates 6.1% in 2025. Smart Valve™ is your fastest path to compliance and cost control.",
  urgencyBadge: "Seattle SPU +5.7% 2026 · Tacoma +6.1% 2025 — WA State Mandatory Commercial Conservation Targets Active",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "5.7%", label: "Seattle Rate Rise 2026" },
    { value: "6.1%", label: "Tacoma Rate Rise 2025" },
  ],
  whyTitle: "Washington State Commercial Water Costs Are Rising Despite the Pacific Northwest's Water Reputation",
  whyIntro: "Despite Washington's reputation for abundant water, commercial water rates in Seattle, Tacoma, and Spokane have been rising steadily as utilities invest in aging infrastructure and respond to demand growth from the region's tech and logistics boom.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Seattle Public Utilities +5.7% in 2026", body: "SPU raised water rates by 5.7% effective January 2026. This follows a 5.4% increase in 2025. The rate trajectory reflects Seattle's ongoing infrastructure investment program — and there's no sign it slows down." },
    { icon: "AlertTriangle", color: "orange", title: "Tacoma +6.1% in 2025", body: "Tacoma Public Utilities increased commercial water rates 6.1% in 2025. For large commercial users, these compounding annual increases represent a significant and accelerating cost pressure." },
    { icon: "Building2", color: "blue", title: "Tech & Data Center Boom", body: "The Pacific Northwest hosts major data centers for Microsoft, Amazon, Google, and Meta. Cooling water is a massive variable cost. Seattle metro data centers are among the fastest-growing Smart Valve™ ROI opportunities." },
    { icon: "Activity", color: "teal", title: "State Conservation Requirements", body: "Washington State DOE maintains mandatory water use efficiency reporting requirements for commercial properties. Smart Valve™ M&V documentation satisfies state reporting and demonstrates measurable conservation progress." },
    { icon: "DollarSign", color: "yellow", title: "SPU Rebates for Water Efficiency", body: "Seattle Public Utilities offers commercial rebates for water-saving retrofits. Smart Valve™ installations may qualify depending on property type and consumption profile." },
    { icon: "Building2", color: "purple", title: "All Washington Markets Served", body: "Seattle, Tacoma, Spokane, Bellevue, Kirkland, Redmond, Vancouver, and all Washington markets." }
  ],
  markets: ["Seattle", "Tacoma", "Spokane", "Bellevue", "Kirkland", "Redmond", "Vancouver", "Kent"],
  faqItems: [
    { q: "Does Smart Valve™ work with Seattle Public Utilities meters?", a: "Yes. The Smart Valve™ is compatible with 99% of commercial water meters including all meter types used by Seattle Public Utilities, Tacoma Public Utilities, Spokane City Utilities, and other Washington utilities." },
    { q: "Do Washington data centers benefit from Smart Valve™?", a: "Yes. Data centers are among the highest Smart Valve™ ROI applications. Cooling tower water is a significant variable cost, and the verified 58.69% peak reduction recorded at Amazon YYZ3 is directly comparable to Pacific Northwest data center conditions." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Washington commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Washington State Assessment",
  contactBody: "Seattle and Tacoma rates are rising 5–6% annually. Smart Valve™ delivers guaranteed savings that outpace the rate increases from day one.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Washington Markets", desc: "Seattle, Tacoma, Spokane and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Data Center Specialists", desc: "Amazon YYZ3 case study — 58.69% peak, directly applicable" },
  ],
  source: "perfectwatervalve.com/locations/washington",
};

export default function Washington() {
  return <LocationPage config={config} />;
}
