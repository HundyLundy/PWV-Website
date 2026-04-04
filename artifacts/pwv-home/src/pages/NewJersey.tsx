import LocationPage from "./LocationTemplate";

const config = {
  state: "New Jersey",
  emoji: "🏙️",
  headline: "NJ Water Rates Surging — Veolia Proposes 9.82% Annual Revenue Increase",
  subheadline: "Veolia has proposed a 9.82% annual revenue increase for New Jersey. New Jersey American Water implemented increases in September 2024 with further hikes proposed. Aging infrastructure and water quality concerns are driving significant long-term investment and rate pressure. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Veolia NJ: 9.82% Annual Revenue Increase Proposed | NJ American Water: Multiple Hikes",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "9.82%", label: "Veolia NJ Annual Revenue Rise" },
    { value: "$50K", label: "Proven Annual Savings — NJ Site" },
  ],
  whyTitle: "New Jersey Commercial Properties Face Compounding Rate Pressure from Multiple Major Utilities",
  whyIntro: "New Jersey's commercial water customers face significant rate increases from the state's two largest utilities simultaneously. Veolia's proposed 9.82% annual revenue increase and New Jersey American Water's multiple rate actions in 2024 affect nearly every commercial property in the state. PFAS remediation and aging infrastructure are the primary cost drivers.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Veolia NJ: 9.82% Annual Revenue Increase Proposed", body: "Veolia Water New Jersey has proposed a 9.82% annual revenue increase — one of the more substantial rate filings in the state's recent history. If approved, this affects commercial customers throughout Veolia's New Jersey service territory and compounds on top of previous year increases." },
    { icon: "AlertTriangle", color: "orange", title: "NJ American Water: Multiple Rate Actions, More Proposed", body: "New Jersey American Water implemented rate increases in September 2024, with further increases proposed beyond that. NJ American Water serves a significant portion of New Jersey's commercial market and is investing heavily in PFAS remediation, water quality improvements, and aging infrastructure replacement." },
    { icon: "DollarSign", color: "blue", title: "Grand Central at Kennedy — $50K/yr Verified New Jersey Result", body: "Grand Central at Kennedy in New Jersey achieved verified annual savings of $50,000/year with 23% metered reduction. This is a real NJ case study — not a projection. New Jersey commercial properties have a proven track record of strong Smart Valve™ ROI." },
    { icon: "Building2", color: "teal", title: "All New Jersey Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Newark, Jersey City, Paterson, Elizabeth, Edison, Woodbridge, Toms River, Hamilton, and all New Jersey commercial corridors." },
  ],
  markets: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge", "Toms River", "Hamilton"],
  faqItems: [
    { q: "Is there a verified New Jersey case study for Smart Valve™?", a: "Yes. Grand Central at Kennedy in New Jersey achieved $50,000 in annual water savings with 23% metered reduction — a real verified installation. New Jersey commercial properties consistently deliver strong results given the state's high commercial water rates." },
    { q: "Does Smart Valve™ work with Veolia and NJ American Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Veolia Water NJ, New Jersey American Water, and all NJ municipal utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your New Jersey property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which New Jersey commercial properties benefit most?", a: "Office buildings, multifamily complexes, healthcare facilities, and hotels in Newark, Jersey City, and the Route 1 commercial corridor have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free New Jersey Water Assessment",
  contactBody: "We have a verified $50K/year case study in New Jersey. Veolia is up 9.82% and NJ American Water has multiple increases active. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All NJ Markets", desc: "Newark, Jersey City, Edison and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Proven NJ Results", desc: "Grand Central at Kennedy — $50K/yr verified" },
  ],
  source: "perfectwatervalve.com/locations/new-jersey",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  showDataCenterSection: true,
  seoTitle: "New Jersey Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in New Jersey. Veolia proposing 9.82% annual increase. NJ American Water multiple hikes. $50K/yr verified NJ case study. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/new-jersey",
};

export default function NewJersey() {
  return <LocationPage config={config} />;
}
