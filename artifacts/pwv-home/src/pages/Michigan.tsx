import LocationPage from "./LocationTemplate";

const config = {
  state: "Michigan",
  emoji: "🚗",
  headline: "Michigan Commercial Water Rates Surging — BWL Up 9.16%, Birmingham Up 20%",
  subheadline: "Lansing's Board of Water & Light raised commercial rates 9.16% in 2025. Birmingham raised rates 20%. Great Lakes Water Authority (GLWA) implemented a 5.9% increase in 2025. Michigan commercial properties are seeing some of the steepest rate increases in the Midwest. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Birmingham, MI: 20% Rate Increase | BWL: 9.16% | GLWA: 5.9%",
  heroStats: [
    { value: "20%", label: "Birmingham Rate Increase" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "9.16%", label: "BWL Lansing 2025" },
    { value: "5.9%", label: "GLWA Detroit Metro 2025" },
  ],
  whyTitle: "Michigan's Water Rate Crisis: Surging Costs From Detroit to the Upper Peninsula",
  whyIntro: "Michigan's commercial water customers face a statewide rate increase cycle driven by aging infrastructure, PFAS remediation mandates, and the ongoing cost of maintaining one of the largest water distribution networks in the Midwest. Birmingham's 20% increase is the headline number, but BWL's 9.16% and GLWA's 5.9% affect far more commercial properties across the state.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Birmingham: 20% Rate Increase — Largest in the Region", body: "Birmingham, Michigan implemented a 20% commercial water rate increase — one of the largest single-year increases in the state. This reflects Birmingham's substantial infrastructure investment needs and the high cost of water system modernization in established suburban markets." },
    { icon: "AlertTriangle", color: "orange", title: "BWL Lansing: 9.16% | GLWA Detroit Metro: 5.9%", body: "The Board of Water & Light in Lansing implemented a 9.16% increase in 2025. GLWA — the Great Lakes Water Authority serving the Detroit metro and dozens of southeastern Michigan communities — raised rates 5.9%. Combined, these utilities serve the vast majority of Michigan's commercial water customers." },
    { icon: "DollarSign", color: "blue", title: "PFAS Remediation Adding Long-Term Cost Pressure", body: "Michigan is ground zero for PFAS contamination issues in the US. Water utilities across the state are investing heavily in PFAS detection, treatment, and remediation systems. These costs are passed to commercial customers through rate increases that will continue for years as remediation programs mature." },
    { icon: "Building2", color: "teal", title: "All Michigan Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor, Lansing, Flint, Dearborn, and all Michigan commercial corridors." },
  ],
  markets: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn"],
  faqItems: [
    { q: "Does Smart Valve™ work with GLWA and BWL meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by GLWA, Board of Water & Light, Detroit Water and Sewerage, and all Michigan municipal utility systems." },
    { q: "How does Michigan's PFAS remediation affect long-term water costs?", a: "PFAS remediation in Michigan is an ongoing, multi-year program. Utilities must fund treatment systems, monitoring, and alternative water source development. These costs are billed to commercial customers through rate increases that will continue throughout the remediation period." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Michigan property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Michigan commercial properties benefit most?", a: "Manufacturing, automotive, healthcare, office, and multifamily properties in Detroit, Grand Rapids, and Lansing have the strongest ROI profile. Any commercial property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Michigan Water Assessment",
  contactBody: "Birmingham is up 20%, BWL up 9.16%, GLWA up 5.9%. PFAS remediation means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Michigan Markets", desc: "Detroit, Grand Rapids, Lansing and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/michigan",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "Michigan Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Michigan. Birmingham up 20%, BWL 9.16%, GLWA 5.9% in 2025. PFAS remediation driving rates higher. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/michigan",
};

export default function Michigan() {
  return <LocationPage config={config} />;
}
