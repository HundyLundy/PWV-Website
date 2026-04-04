import LocationPage from "./LocationTemplate";

const config = {
  state: "Arkansas",
  emoji: "🌲",
  headline: "Arkansas Water Rates Rising Statewide — Groundwater Levels in Decline",
  subheadline: "Little Rock is implementing approximately 7.25% annual rate increases. Fort Smith has locked in 3.5% annual sewer increases from 2025 through 2030. Declining groundwater levels and aging infrastructure are accelerating rate pressure across the state. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Little Rock: ~7.25% Annual Increases Underway",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "7.25%", label: "Little Rock Annual Rise" },
    { value: "3.5%/yr", label: "Fort Smith Through 2030" },
  ],
  whyTitle: "Arkansas Commercial Properties Face Compounding Rate Increases and Groundwater Decline",
  whyIntro: "Arkansas water utilities are implementing aggressive rate increases to fund infrastructure replacement while managing declining groundwater levels in key aquifers. Little Rock's approximately 7.25% annual increases and Fort Smith's multi-year sewer rate schedule are locking in compounding costs for commercial customers.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Little Rock: ~7.25% Annual Rate Increases", body: "Little Rock Central Arkansas Water is implementing approximately 7.25% annual commercial rate increases to fund infrastructure upgrades. Each year's increase compounds on the last, meaning commercial properties that don't reduce consumption now will pay significantly more by 2027." },
    { icon: "AlertTriangle", color: "orange", title: "Fort Smith: 3.5% Sewer Increase Annually 2025–2030", body: "Fort Smith has locked in 3.5% annual sewer rate increases from 2025 through 2030. This multi-year commitment ensures predictable, compounding cost increases for all commercial properties in the Fort Smith service area." },
    { icon: "Droplets", color: "blue", title: "Declining Groundwater Levels Statewide", body: "Arkansas is experiencing declining groundwater levels in key aquifers, particularly in agricultural and industrial regions. As surface water and groundwater supplies tighten, utilities are investing in alternative sources — and commercial customers fund that investment through rate increases." },
    { icon: "Building2", color: "teal", title: "All Arkansas Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Little Rock, Fort Smith, Fayetteville, Springdale, Jonesboro, Conway, and all Arkansas commercial markets." },
  ],
  markets: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "Conway", "Rogers", "North Little Rock"],
  faqItems: [
    { q: "Does Smart Valve™ work with Little Rock Central Arkansas Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters used by Arkansas utilities, including Little Rock Central Arkansas Water, Fort Smith utilities, and all municipal systems." },
    { q: "How do Arkansas groundwater issues affect commercial water costs?", a: "Declining groundwater forces utilities to invest in alternative water sources, treatment upgrades, and new infrastructure. These capital costs are passed to commercial customers through rate increases. Smart Valve™ reduces your metered consumption, cutting your bill regardless of the reason for rate increases." },
    { q: "Is the 15% savings guarantee real?", a: "Yes. Every installation includes a written guarantee of at least 15% reduction in metered water consumption. If you don't reach 15%, we resolve it at no cost to you." },
    { q: "What commercial properties in Arkansas benefit most?", a: "Hotels, office buildings, hospitals, multifamily complexes, and car washes in Little Rock, Fayetteville, and Fort Smith have the strongest ROI. Any commercial property spending $5,000+/month on water qualifies." },
  ],
  contactHeading: "Get a Free Arkansas Water Assessment",
  contactBody: "Little Rock is raising rates ~7.25% annually. Fort Smith is locked in through 2030. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Arkansas Markets", desc: "Little Rock, Fort Smith, Fayetteville and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/arkansas",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "Arkansas Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Arkansas. Little Rock raising rates ~7.25% annually. Fort Smith locked in through 2030. Guaranteed in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/arkansas",
};

export default function Arkansas() {
  return <LocationPage config={config} />;
}
