import LocationPage from "./LocationTemplate";

const config = {
  state: "Oregon",
  emoji: "🌿",
  headline: "Portland's Water Bureau Is Raising Rates 4.5% in 2026 — Smart Valve™ Cuts Your Bill 15%–35% annually",
  subheadline: "Portland Water Bureau approved a 4.5% rate increase for 2026. Oregon's commercial water use efficiency requirements are expanding. Smart Valve™ delivers guaranteed reductions — proven at Amazon, Four Seasons, and Caliber Car Wash.",
  urgencyBadge: "Portland Water Bureau +4.5% in 2026 — Oregon Commercial Efficiency Requirements Expanding",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "4.5%", label: "Portland Rate Rise 2026" },
    { value: "NSF", label: "61 & 372 Certified" },
  ],
  whyTitle: "Oregon Commercial Water Costs Are Growing Despite the Region's Green Reputation",
  whyIntro: "Oregon faces aging water infrastructure, growing urban demand, and mandated conservation investments that utilities recover through commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Portland Water Bureau +4.5% in 2026", body: "Portland Water Bureau approved a 4.5% rate increase for 2026 to fund infrastructure upgrades. Commercial properties absorb these increases directly — and rates are projected to continue rising through 2030." },
    { icon: "Activity", color: "orange", title: "Oregon Conservation Efficiency Standards", body: "Oregon DEQ and utility regulators have expanded water use efficiency requirements for commercial properties, particularly in the Portland Metro area. Smart Valve™ M&V documentation satisfies these reporting requirements." },
    { icon: "Building2", color: "blue", title: "Tech Sector Growth — Cloud Facility Demand", body: "Oregon hosts major cloud and data center operations for Amazon, Google, and Apple. Water cooling costs are significant. Smart Valve™ is particularly effective in large facility applications." },
    { icon: "DollarSign", color: "yellow", title: "Portland Bureau of Environmental Services Rebates", body: "Portland BES offers commercial rebates for verified water efficiency projects. Smart Valve installations with M&V documentation may qualify." },
    { icon: "Droplets", color: "teal", title: "Drought Risk Despite Green Reputation", body: "Western Oregon's wet reputation masks real eastern Oregon drought conditions. Statewide water management policy increasingly treats all water as a constrained resource — reflected in rising rates and conservation mandates." },
    { icon: "Building2", color: "purple", title: "All Oregon Markets Served", body: "Portland, Eugene, Salem, Gresham, Hillsboro, Beaverton, Bend, Medford, and all Oregon markets." }
  ],
  markets: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford"],
  faqItems: [
    { q: "Does Smart Valve™ qualify for Portland water efficiency rebates?", a: "Portland BES offers commercial rebates for verified water efficiency projects. Smart Valve™ installations with M&V documentation may qualify. We assist with documentation and filing." },
    { q: "Does Smart Valve™ help with Oregon conservation reporting requirements?", a: "Yes. Smart Valve™ M&V documentation provides auditable consumption reduction data that satisfies Oregon commercial water use reporting requirements." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Oregon commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Oregon Water Assessment",
  contactBody: "Portland's 4.5% rate increase is the latest in a trend of annual commercial rate hikes. Let us show you how Smart Valve™ stops the bleeding.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Oregon Markets", desc: "Portland, Eugene, Salem and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "M&V documentation for Oregon reporting" },
  ],
  source: "perfectwatervalve.com/locations/oregon",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
};

export default function Oregon() {
  return <LocationPage config={config} />;
}
