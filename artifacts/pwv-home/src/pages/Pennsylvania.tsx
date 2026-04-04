import LocationPage from "./LocationTemplate";

const config = {
  state: "Pennsylvania",
  emoji: "🔔",
  headline: "PA Water Rates Soaring — Aqua PA Up 50%, Supply Strained by Data Centers and Drought",
  subheadline: "Aqua Pennsylvania raised commercial rates 50% effective January 2025. Pennsylvania American Water has proposed a 14.6% increase for 2025. Data centers are straining public water supplies across the state, and mandatory conservation orders are active in some regions. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Aqua Pennsylvania: 50% Rate Increase January 2025 | PA American Water: 14.6% Proposed",
  heroStats: [
    { value: "50%", label: "Aqua PA Rate Increase Jan 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "14.6%", label: "PA American Water Proposed Rise" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Pennsylvania Commercial Properties Face the Steepest Water Rate Increases in the Northeast",
  whyIntro: "Aqua Pennsylvania's 50% rate increase effective January 2025 is one of the most significant commercial water rate actions in Pennsylvania's history. Combined with Pennsylvania American Water's proposed 14.6% increase and data center demand straining public water supplies, Pennsylvania commercial properties face extraordinary cost pressure.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Aqua Pennsylvania: 50% Rate Increase January 2025", body: "Aqua Pennsylvania implemented a 50% commercial water rate increase effective January 2025. For a property previously paying $20,000/month on water, this means $30,000/month — an additional $120,000 per year. Smart Valve™'s guaranteed 15% consumption reduction saves $4,500/month off the new rate, or $54,000/year." },
    { icon: "AlertTriangle", color: "orange", title: "PA American Water: 14.6% Increase Proposed for 2025", body: "Pennsylvania American Water — which serves a large portion of the state's commercial market — has proposed a 14.6% commercial rate increase for 2025. If approved, this affects hundreds of thousands of commercial customers statewide and compounds on top of Aqua PA's already-implemented 50% increase in overlapping service areas." },
    { icon: "Droplets", color: "blue", title: "Data Centers and Mandatory Conservation Orders", body: "Pennsylvania's public water supply is under mandatory conservation orders in some regions, partly driven by data center demand straining municipal systems. The state is a top-10 US data center market, and cooling water demand is creating supply pressure that affects all commercial water users." },
    { icon: "Building2", color: "teal", title: "All Pennsylvania Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Philadelphia, Pittsburgh, Allentown, Erie, Reading, Scranton, Bethlehem, Lancaster, and all Pennsylvania commercial corridors." },
  ],
  markets: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster"],
  faqItems: [
    { q: "After a 50% increase, what does Smart Valve™ save on my PA water bill?", a: "Smart Valve™'s guaranteed 15% consumption reduction saves 15% off whatever your bill is now — including after the 50% increase. For a property now paying $30,000/month after Aqua PA's increase, 15% savings means $4,500/month, or $54,000/year — recovered in 2–4 billing cycles." },
    { q: "Does Smart Valve™ work with Aqua Pennsylvania and PA American Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Aqua Pennsylvania, Pennsylvania American Water, Philadelphia Water Department, Pittsburgh Water, and all PA utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Pennsylvania property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Pennsylvania commercial properties should act first?", a: "Aqua Pennsylvania customers should act immediately — they are already paying 50% more. PA American Water customers should act before the 14.6% proposed increase takes effect. Philadelphia, Pittsburgh, and Allentown properties have the highest absolute savings potential." },
  ],
  contactHeading: "Get a Free Pennsylvania Water Assessment",
  contactBody: "Aqua PA is up 50% in January 2025. PA American Water has 14.6% proposed. Data center demand and conservation orders are adding pressure. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All PA Markets", desc: "Philadelphia, Pittsburgh, Allentown and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Act Now", desc: "Aqua PA's 50% increase is already active" },
  ],
  source: "perfectwatervalve.com/locations/pennsylvania",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  showDataCenterSection: true,
  seoTitle: "Pennsylvania Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Pennsylvania. Aqua PA up 50% January 2025. PA American Water proposing 14.6%. Data centers straining supply. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/pennsylvania",
};

export default function Pennsylvania() {
  return <LocationPage config={config} />;
}
