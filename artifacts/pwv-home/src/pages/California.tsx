import LocationPage from "./LocationTemplate";

const config = {
  state: "California",
  emoji: "☀️",
  headline: "California Has the Highest Commercial Water Rates in the Nation — and They're Still Rising",
  subheadline: "Cal Water received approval for an 11.1% rate increase for 2026. California American Water filed for a 30.3% cumulative hike by 2029. Assembly Bill 1572 restricts potable water for commercial irrigation. The Smart Valve™ cuts your metered bill 15%–35% annually — guaranteed in writing.",
  urgencyBadge: "Cal Water +11.1% in 2026 · CA American Water +30.3% by 2029",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "30.3%", label: "CA Rate Rise by 2029" },
    { value: "#1", label: "Highest US Water Rates" },
  ],
  whyTitle: "California Water Rates Are Among the Highest in the US — and Rising Fast",
  whyIntro: "California faces a structural water crisis driven by persistent multi-year drought and chronic overuse. Commercial properties are bearing the cost through mandatory rate hikes, tiered penalty pricing, and conservation mandates.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Cal Water +11.1% in 2026", body: "Cal Water received regulatory approval for an 11.1% rate increase effective 2026. This is not a projection — it's confirmed. Commercial customers in the Cal Water service area will pay more starting this year." },
    { icon: "AlertTriangle", color: "orange", title: "California American Water +30.3% by 2029", body: "California American Water filed for a 30.3% cumulative rate hike by 2029. For commercial properties already spending $10,000+/month on water, this translates to $3,000+ in additional annual costs before any usage changes." },
    { icon: "Droplets", color: "blue", title: "AB 1572 — Commercial Irrigation Ban", body: "Assembly Bill 1572 prohibits potable water for irrigating nonfunctional turf at commercial properties starting January 1, 2027. Violations carry significant fines. Smart Valve™ reduces your total metered consumption before enforcement begins." },
    { icon: "Activity", color: "teal", title: "State Water Board Conservation Targets", body: "The State Water Board maintains ongoing mandatory conservation targets for commercial properties. Non-compliance risks service restrictions and fines. Smart Valve™ delivers guaranteed measurable reductions that satisfy regulatory reporting." },
    { icon: "DollarSign", color: "yellow", title: "Tiered Rates Penalize High Usage", body: "California utilities use aggressive tiered rate structures. High-usage commercial properties pay premium rates per gallon. Smart Valve™ drops you into lower tiers immediately, reducing your per-gallon rate across your entire bill." },
    { icon: "Building2", color: "purple", title: "AWS & CWS Certified — All CA Markets", body: "Serving Los Angeles, San Francisco, San Diego, Sacramento, Fresno, Long Beach, Oakland, Bakersfield, and all California markets. Both American Water Savings and Canadian Water Savings certified." }
  ],
  markets: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno", "Long Beach", "Oakland", "Bakersfield"],
  faqItems: [
    { q: "Does Smart Valve™ qualify for California conservation rebates?", a: "Yes. Many California utilities including SFPUC and MWD offer commercial conservation rebates for devices that produce verified water use reductions. Smart Valve™ M&V documentation qualifies for rebate applications. Contact us and we'll help you file." },
    { q: "How does AB 1572 affect my commercial property?", a: "Assembly Bill 1572 prohibits potable water for irrigating nonfunctional decorative turf at commercial properties starting January 1, 2027. While this targets irrigation specifically, the broader trend is clear: California is requiring commercial properties to reduce potable water use across all applications." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption. If your facility doesn't achieve 15%, we make it right." },
    { q: "Does Smart Valve™ work with California municipal water systems?", a: "Yes. The Smart Valve™ is compatible with 99% of commercial water meters including all meter types used by LADWP, SFPUC, SDCWA, and other California utilities." },
    { q: "How fast will I see savings on my California water bill?", a: "Savings typically appear on the first billing cycle after installation. For California properties in tiered rate structures, you may also drop into a lower rate tier, compounding the savings." },
  ],
  contactHeading: "Get a Free California Water Assessment",
  contactBody: "California has the highest commercial water rates in the nation and mandated conservation targets. Let us show you exactly how much you'll save.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All California Markets", desc: "LA, SF, San Diego, Sacramento and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "M&V documentation satisfies state reporting requirements" },
  ],
  source: "perfectwatervalve.com/locations/california",
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

export default function California() {
  return <LocationPage config={config} />;
}
