import LocationPage from "./LocationTemplate";

const config = {
  state: "Florida",
  emoji: "🌴",
  headline: "Florida Commercial Water Rates Are Rising 6–8% Annually — And the State Has No Income Tax to Buffer You",
  subheadline: "Miami-Dade raised commercial rates 7.3% in 2025. Tampa Bay Water increased 6.8%. Florida utilities are investing billions in seawater desalination and aquifer recharge — and commercial customers pay for every dollar. Smart Valve™ cuts your bill 15%–35% annually.",
  urgencyBadge: "Miami-Dade +7.3% · Tampa Bay Water +6.8% in 2025 — Desalination Investment Driving Continued Rate Increases",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "7.3%", label: "Miami-Dade Rise 2025" },
    { value: "$50K", label: "Proven FL Savings/yr" },
  ],
  whyTitle: "Florida Commercial Properties Are Paying for the State's Water Infrastructure Crisis",
  whyIntro: "Florida faces a genuine water supply crisis — Biscayne Aquifer depletion in Miami, Floridan Aquifer over-pumping in Tampa, and seawater intrusion coastally. Utilities are investing billions in alternative sources — funded by commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Miami-Dade +7.3% in 2025", body: "Miami-Dade County raised commercial water and sewer rates 7.3% for 2025. With the Biscayne Aquifer under strain and seawater intrusion accelerating, Miami utilities are locked into a multi-year capital investment program funded through rate increases." },
    { icon: "AlertTriangle", color: "orange", title: "Tampa Bay Water +6.8%", body: "Tampa Bay Water increased commercial rates 6.8% in the latest rate cycle. The Grand Central at Kennedy ($50,000/yr savings) case study was in Tampa — this is proven Florida territory for Smart Valve™." },
    { icon: "DollarSign", color: "blue", title: "Grand Central Tampa — $50K/yr Verified", body: "Grand Central at Kennedy in Tampa achieved verified annual savings of $50,000/year with 23% metered reduction. This is a real Florida case study — not a projection. Florida commercial properties deliver some of the highest Smart Valve™ ROI." },
    { icon: "Droplets", color: "yellow", title: "Floridan Aquifer Over-Pumping", body: "The Floridan Aquifer, which supplies much of Central and North Florida, is being pumped faster than it recharges. Water management districts are restricting commercial consumption permits. Reducing consumption proactively avoids permit restrictions." },
    { icon: "Activity", color: "teal", title: "Hospitality + Tourism — Massive Water Use", body: "Florida's hospitality sector — hotels, resorts, theme parks — is one of the highest commercial water use categories nationally. The Four Seasons case study ($27K/yr savings) is directly applicable to Florida's luxury hotel market." },
    { icon: "Building2", color: "purple", title: "All Florida Markets Served", body: "Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, Boca Raton, St. Petersburg, and all Florida markets." }
  ],
  markets: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "Boca Raton", "St. Petersburg", "Hialeah"],
  faqItems: [
    { q: "Is there a verified Florida case study for Smart Valve™?", a: "Yes. Grand Central at Kennedy in Tampa, FL achieved $50,000/year in verified savings with a 23% metered water reduction. This is a real verified installation — not a projection. Florida commercial properties consistently deliver strong results." },
    { q: "Does Smart Valve™ help with Florida water permit compliance?", a: "Yes. The St. Johns River Water Management District, SWFWMD, and other Florida water management districts are restricting commercial pumping permits. Smart Valve™ reduces your metered consumption, supporting compliance with consumption-based permit thresholds." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "Does Florida's humidity and climate affect Smart Valve™?", a: "No. The Smart Valve™ is fully passive and operates in all humidity and temperature conditions including Florida's subtropical climate." },
  ],
  contactHeading: "Get a Free Florida Water Assessment",
  contactBody: "We have a verified $50,000/year case study in Tampa. Florida's rising utility rates and aquifer restrictions make Smart Valve™ more valuable here than almost anywhere.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Florida Markets", desc: "Miami, Tampa, Orlando, Jacksonville and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Proven Florida Results", desc: "Grand Central Tampa — $50K/yr verified" },
  ],
  source: "perfectwatervalve.com/locations/florida",
  industryLinks: [
    { label: "Data Centers — WUE & Cooling Water", href: "/industries/data-centers/wue-regulatory-risk", desc: "How data center cooling towers and WUE become water-efficiency levers" },
    { label: "Hotels — Water Cost Breakdown", href: "/industries/hotels/water-costs", desc: "Where hotel water budgets go — laundry, cooling towers, pools" },
    { label: "Hotels — Laundry & Cooling Towers", href: "/industries/hotels/laundry-cooling-towers", desc: "50–70% of hotel water use — addressed by one installation" },
    { label: "Car Washes — Water Cost Guide", href: "/industries/car-washes/water-costs", desc: "True cost per wash including sewer — and how to cut it 15%" },
    { label: "Car Washes — Hard Water & Equipment", href: "/industries/car-washes/hard-water-equipment", desc: "Mineral scale destroys pumps and reclaim systems — stopped without chemicals" },
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
};

export default function Florida() {
  return <LocationPage config={config} />;
}
