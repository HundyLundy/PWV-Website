import LocationPage from "./LocationTemplate";

const config = {
  state: "New York",
  emoji: "🗽",
  headline: "New York City Commercial Water Rates Increased 8% in 2025 — With More Planned. Smart Valve™ Cuts Your Bill 15%–35% annually.",
  subheadline: "NYC DEP increased commercial water and sewer rates by 8% for FY2025 and has proposed further annual increases through 2028. NY has mandatory Commercial Building Water Conservation requirements for large properties. Smart Valve™ is fully compliant and delivers guaranteed savings.",
  urgencyBadge: "NYC DEP +8% FY2025 — Annual Increases Proposed Through 2028. Mandatory Commercial Building Conservation Active.",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "8%", label: "NYC Rate Rise 2025" },
    { value: "$0", label: "Power Required" },
  ],
  whyTitle: "NYC Has Some of the Highest Commercial Water Costs in the Country",
  whyIntro: "New York City DEP charges commercial properties for both water supply and sewer. Combined, these rates make NYC one of the most expensive commercial water markets in the US.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "NYC DEP +8% in FY2025", body: "NYC DEP increased water and sewer rates by 8% for fiscal year 2025. For a commercial property spending $20,000/month, that's $1,600 in additional monthly cost — before any rate changes planned for 2026–2028." },
    { icon: "AlertTriangle", color: "orange", title: "Combined Water + Sewer Billing", body: "Unlike most markets, NYC charges separately for water supply and sewer service — and sewer charges are based on your metered water consumption. Reducing your metered water usage with Smart Valve™ reduces both your water bill and your sewer bill simultaneously." },
    { icon: "Building2", color: "blue", title: "Commercial Building Conservation Requirements", body: "Large commercial buildings in NYC face mandatory water conservation audits and benchmark reporting under Local Law requirements. Smart Valve™ M&V documentation satisfies these reporting requirements while reducing consumption." },
    { icon: "DollarSign", color: "yellow", title: "Dense Urban Market — Maximum Savings Density", body: "New York's commercial building density means Smart Valve™ is especially cost-effective — one installation covers an entire large commercial building's water supply, with savings that compound across both water and sewer charges." },
    { icon: "Activity", color: "teal", title: "High-Pressure Urban Distribution", body: "NYC's water distribution system operates under significant pressure to serve high-rise buildings throughout the five boroughs. This elevated system pressure increases air entrapment — making Smart Valve™ particularly effective in the NYC market." },
    { icon: "Building2", color: "purple", title: "All NYC Boroughs + Upstate NY", body: "Manhattan, Brooklyn, Queens, The Bronx, Staten Island, Albany, Buffalo, Rochester, Syracuse, and all New York markets. AWS and CWS certified." }
  ],
  markets: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Albany", "Buffalo", "Rochester"],
  faqItems: [
    { q: "Does Smart Valve™ reduce both water and sewer charges in NYC?", a: "Yes. NYC DEP charges sewer rates based on your metered water consumption. Since Smart Valve™ reduces your metered water usage, it reduces both your water supply bill and your sewer bill simultaneously — effectively doubling the per-unit savings benefit." },
    { q: "Does Smart Valve™ comply with NYC commercial building conservation requirements?", a: "Yes. Smart Valve™ M&V documentation provides the auditable reduction data required for NYC's commercial building water conservation reporting requirements." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "Does Smart Valve™ work in NYC high-rise buildings?", a: "Yes. The Smart Valve™ is compatible with 99% of commercial water meters including the meter types used in NYC high-rise and multi-story commercial buildings." },
  ],
  contactHeading: "Get a Free New York Water Assessment",
  contactBody: "NYC's 8% rate hike plus combined water and sewer billing means every percentage point of reduction is worth more here than almost anywhere else. Get your free assessment today.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All NY Markets", desc: "All five boroughs plus upstate New York" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Dual Savings", desc: "Reduces both water AND sewer charges in NYC" },
  ],
  source: "perfectwatervalve.com/locations/new-york",
};

export default function NewYork() {
  return <LocationPage config={config} />;
}
