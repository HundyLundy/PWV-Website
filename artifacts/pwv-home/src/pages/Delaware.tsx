import LocationPage from "./LocationTemplate";

const config = {
  state: "Delaware",
  emoji: "🏦",
  headline: "Delaware Water Rates Surging — Veolia Filed for 42.8% Increase Effective August 2025",
  subheadline: "Veolia has filed for a 42.8% commercial water rate increase effective August 2025. Wilmington is up 5.8% in 2025. Tidewater received a 13% approved increase. Artesian Water requested 12.88%. Delaware commercial properties face rate increases across every major provider. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Veolia Filed 42.8% Increase — Effective August 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "42.8%", label: "Veolia Filed Increase" },
    { value: "13%", label: "Tidewater Approved Rise" },
  ],
  whyTitle: "Delaware Is the Most Rate-Pressured Small State in the Mid-Atlantic",
  whyIntro: "Delaware commercial properties face a wave of rate increases across every major water provider simultaneously. Veolia's proposed 42.8% increase is among the largest filed in the Mid-Atlantic region in recent history. Combined with Wilmington, Tidewater, and Artesian increases, virtually every commercial water customer in Delaware is facing significant cost pressure.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Veolia: 42.8% Increase Filed for August 2025", body: "Veolia Water Delaware has filed for a 42.8% commercial rate increase effective August 2025, driven by infrastructure investment and PFAS remediation costs. If approved at any significant portion of the filing, this represents a historic cost shock for Delaware commercial properties." },
    { icon: "AlertTriangle", color: "orange", title: "Wilmington +5.8%, Tidewater +13%, Artesian +12.88%", body: "No part of Delaware is immune. Wilmington raised rates 5.8% in 2025. Tidewater Utilities received an approved 13% increase. Artesian Water has requested 12.88%. Every major provider in Delaware is raising rates simultaneously — a multi-year trend tied to infrastructure investment and PFAS remediation mandates." },
    { icon: "DollarSign", color: "blue", title: "PFAS Remediation: The Driver Behind Delaware's Rate Surge", body: "PFAS contamination remediation is a primary driver of Delaware's rate increases. The cost of treating and removing PFAS compounds from water supplies is substantial and long-term. These costs are mandatory and regulatory — they will be passed to commercial customers until remediation is complete." },
    { icon: "Building2", color: "teal", title: "All Delaware Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Wilmington, Dover, Newark, Middletown, Smyrna, Milford, Seaford, and all Delaware commercial corridors including the Route 1 growth corridor and Wilmington's commercial district." },
  ],
  markets: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown"],
  faqItems: [
    { q: "If Veolia's 42.8% increase is approved, what does that mean for my Delaware business?", a: "A 42.8% increase on a $15,000/month commercial water bill means $6,420 more per month — or $77,040 more per year. Smart Valve™'s guaranteed 15%–35% annual reduction in metered consumption can offset a substantial portion of this increase from day one." },
    { q: "Does Smart Valve™ work with Veolia and Artesian Water meters in Delaware?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Veolia, Artesian, Tidewater, and City of Wilmington utilities in Delaware." },
    { q: "Is the 15% savings guarantee real and in writing?", a: "Yes. It is contractually guaranteed in writing for every installation. If your Delaware property does not achieve at least 15% reduction in metered water consumption, we resolve it at no cost to you." },
    { q: "Which Delaware commercial properties benefit most?", a: "Any commercial property spending $5,000+/month on water qualifies. Office buildings, multifamily complexes, healthcare facilities, and hospitality properties in Wilmington and Dover have the strongest ROI profile." },
  ],
  contactHeading: "Get a Free Delaware Water Assessment",
  contactBody: "Veolia has filed for 42.8% in August 2025. Wilmington, Tidewater, and Artesian are all raising rates too. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Delaware Markets", desc: "Wilmington, Dover, Newark and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Works With All Providers", desc: "Veolia, Artesian, Tidewater, Wilmington" },
  ],
  source: "perfectwatervalve.com/locations/delaware",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "Delaware Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Delaware. Veolia filed 42.8% increase for August 2025. Wilmington, Tidewater, Artesian all raising rates. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/delaware",
};

export default function Delaware() {
  return <LocationPage config={config} />;
}
