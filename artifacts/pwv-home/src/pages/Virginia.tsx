import LocationPage from "./LocationTemplate";

const config = {
  state: "Virginia",
  emoji: "🏛️",
  headline: "Virginia Is the Data Center Capital of the World — Water Supply Now at Capacity in Key Markets",
  subheadline: "Northern Virginia hosts more data centers than any region on Earth, consuming 1.7 billion gallons of water per day. Virginia American Water raised commercial rates 3.72% in 2025. Fairfax and Loudoun Counties are implementing new water permit restrictions for commercial customers. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Northern Virginia Data Centers: 1.7 Billion Gallons/Day | VA American Water: +3.72% in 2025",
  heroStats: [
    { value: "1.7B", label: "Gal/Day — VA Data Center Demand" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "3.72%", label: "VA American Water 2025 Rise" },
    { value: "58.69%", label: "Peak Amazon YYZ3 Savings" },
  ],
  whyTitle: "Northern Virginia's Data Center Density Is Creating an Unprecedented Water Supply Crisis",
  whyIntro: "Northern Virginia — specifically Loudoun County's 'Data Center Alley' — is the most data-center-dense region on Earth. These facilities consume 1.7 billion gallons of water per day for cooling. This demand is at or exceeding the capacity of the water supply infrastructure, prompting new commercial water permit restrictions and driving rate increases across the state.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "1.7 Billion Gallons/Day — Northern Virginia Data Center Water Demand", body: "Northern Virginia's data centers consume approximately 1.7 billion gallons of water per day for cooling. This volume rivals the domestic water demand of entire mid-sized US cities. Local water utilities have signaled that the region's water supply capacity is being approached or exceeded, making new commercial permits increasingly difficult to obtain." },
    { icon: "AlertTriangle", color: "orange", title: "Virginia American Water: 3.72% Rate Increase in 2025 | Permit Restrictions Growing", body: "Virginia American Water raised commercial rates 3.72% in 2025. Meanwhile, Fairfax and Loudoun Counties are implementing new water permit restrictions for commercial customers, particularly those with high water usage profiles. Commercial properties that can demonstrate significant consumption reduction have a strategic advantage in permit renewals." },
    { icon: "DollarSign", color: "blue", title: "Amazon YYZ3 — The Data Center Benchmark", body: "Amazon YYZ3 achieved 58.69% peak water savings using Smart Valve™ — the highest verified result in the portfolio. For Virginia data centers spending $100,000+/month on cooling water, even the guaranteed 15% minimum saves $180,000/year. At the 58.69% peak level, annual savings exceed $700,000." },
    { icon: "Building2", color: "teal", title: "All Virginia Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Northern Virginia, Richmond, Virginia Beach, Norfolk, Chesapeake, Arlington, Alexandria, Roanoke, and all Virginia commercial corridors including data center campuses in Loudoun and Prince William Counties." },
  ],
  markets: ["Northern Virginia", "Richmond", "Virginia Beach", "Norfolk", "Chesapeake", "Arlington", "Alexandria", "Roanoke"],
  faqItems: [
    { q: "Does Smart Valve™ work for Virginia data centers?", a: "Yes. Amazon YYZ3 is a verified data center installation with 58.69% peak savings — the highest in the portfolio. For Virginia's hyperscale data centers, Smart Valve™ delivers proven, benchmark-backed results with a guaranteed minimum of 15%." },
    { q: "Does Smart Valve™ help with Virginia water permit restrictions?", a: "Yes. Demonstrating measurable water consumption reduction is increasingly important for commercial water permit renewals in Northern Virginia. Smart Valve™'s metered, verified consumption reduction data provides the documentation utilities and regulators require." },
    { q: "Does Smart Valve™ work with Virginia American Water and Northern Virginia utilities?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Virginia American Water, Fairfax Water, Loudoun Water, and all Virginia utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Virginia property doesn't reach 15%, we resolve it at no cost." },
  ],
  contactHeading: "Get a Free Virginia Water Assessment",
  contactBody: "Northern Virginia data centers are consuming 1.7 billion gallons/day. VA American Water is up 3.72% and permit restrictions are growing. Smart Valve™ guarantees at least 15% off your metered bill — with Amazon YYZ3 as the proof.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Virginia Markets", desc: "NoVA, Richmond, Virginia Beach and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Data Center Expertise", desc: "Amazon YYZ3 — 58.69% peak verified" },
  ],
  source: "perfectwatervalve.com/locations/virginia",
  industryLinks: [
    { label: "Data Centers — WUE & Cooling Water", href: "/industries/data-centers/wue-regulatory-risk", desc: "How data center cooling towers and WUE become water-efficiency levers" },
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  showDataCenterSection: true,
  seoTitle: "Virginia Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Virginia. Northern Virginia data centers use 1.7B gal/day. VA American Water up 3.72%. Permit restrictions growing. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/virginia",
};

export default function Virginia() {
  return <LocationPage config={config} />;
}
