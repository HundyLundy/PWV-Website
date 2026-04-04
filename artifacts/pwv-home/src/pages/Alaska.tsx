import LocationPage from "./LocationTemplate";

const config = {
  state: "Alaska",
  emoji: "❄️",
  headline: "Anchorage Commercial Water Rates Rising 5.13% in 2025 — Infrastructure Costs Compounding",
  subheadline: "Anchorage Water & Wastewater Utility raised commercial rates 5.13% effective February 2025. Juneau is locked into 5% annual increases through FY26–FY30. Infrastructure investment and extreme climate conditions are compounding costs statewide. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "AWWU: 5.13% Rate Increase Effective February 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "5.13%", label: "Anchorage Rate Rise 2025" },
    { value: "5%/yr", label: "Juneau Rate Hike FY26–30" },
  ],
  whyTitle: "Alaska's Remote Infrastructure Costs Are Driving Compounding Rate Increases",
  whyIntro: "Alaska's commercial water customers face rising rates driven by the extreme cost of maintaining water infrastructure in remote and harsh-climate environments. Anchorage Water & Wastewater Utility (AWWU) raised rates 5.13% in February 2025, and Juneau has locked in 5% annual increases through FY26–FY30.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Anchorage AWWU: +5.13% in February 2025", body: "The Anchorage Water & Wastewater Utility implemented a 5.13% commercial rate increase effective February 2025. Infrastructure maintenance in Alaska's extreme climate is expensive, and utilities have signaled continued annual increases are expected through the decade." },
    { icon: "AlertTriangle", color: "orange", title: "Juneau Locked Into 5% Annual Hikes FY26–FY30", body: "Juneau has committed to 5% annual rate increases from FY26 through FY30. For commercial properties in Juneau, this compounds into a 28% cumulative increase over five years — before factoring in baseline usage costs. Locking in water savings now protects against every future hike." },
    { icon: "DollarSign", color: "blue", title: "Remote Infrastructure = Permanently High Rates", body: "Alaska's water infrastructure serves dispersed populations across challenging terrain. The per-unit cost of delivering and treating water in Alaska is among the highest in the US. Smart Valve™ reduces your metered consumption, cutting your bill regardless of how high base rates climb." },
  ],
  markets: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Wasilla", "Kenai", "Kodiak", "Palmer"],
  faqItems: [
    { q: "Does Smart Valve™ work in Alaska's cold climate?", a: "Yes. Smart Valve™ is a fully passive, mechanical device with no electrical components or moving parts. It operates reliably across all temperature ranges, including Alaska's extreme cold. It is installed on the interior supply line upstream of your commercial meter." },
    { q: "Which Alaska utilities are covered by Smart Valve™?", a: "Smart Valve™ works with any metered municipal or utility water supply. This includes Anchorage Water & Wastewater Utility (AWWU), City & Borough of Juneau utilities, Fairbanks utilities, and smaller Alaska water utilities." },
    { q: "What is the guaranteed minimum savings?", a: "Every Smart Valve™ installation guarantees at least 15% reduction in metered water consumption, in writing. If you do not reach 15%, we resolve it at no cost." },
    { q: "What types of commercial properties benefit most in Alaska?", a: "Hotels, healthcare facilities, office buildings, and industrial facilities in Anchorage and Juneau have the strongest ROI profile. Any property with a monthly water bill above $5,000 qualifies for assessment." },
  ],
  contactHeading: "Get a Free Alaska Water Assessment",
  contactBody: "AWWU raised rates 5.13% in 2025 and Juneau is locked into 5%/year through FY30. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "Alaska-Wide Service", desc: "Anchorage, Juneau, Fairbanks and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Passive Device", desc: "Works in all climates, no power required" },
  ],
  source: "perfectwatervalve.com/locations/alaska",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "Alaska Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Alaska. AWWU up 5.13% in 2025. Juneau locked into 5%/yr increases. Guaranteed savings in writing. Free assessment available.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/alaska",
};

export default function Alaska() {
  return <LocationPage config={config} />;
}
