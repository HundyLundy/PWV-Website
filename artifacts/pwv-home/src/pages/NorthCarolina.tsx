import LocationPage from "./LocationTemplate";

const config = {
  state: "North Carolina",
  emoji: "⛰️",
  headline: "North Carolina Faces Drought and Rising Rates — Commercial Conservation Mandates Active",
  subheadline: "Fayetteville Public Works Commission raised its basic facility charge by $1.25 in May 2025, with another $1.25 increase in May 2026. Ongoing drought conditions in North Carolina are triggering commercial water use restrictions. Smart Valve™ cuts your bill 15–58%, guaranteed — and keeps you compliant with conservation mandates.",
  urgencyBadge: "NC Drought Active | Fayetteville PWC: $1.25 Facility Charge Increase May 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "Drought", label: "Active in NC — Restrictions Imposed" },
    { value: "$1.25", label: "Fayetteville PWC Monthly Rise" },
  ],
  whyTitle: "North Carolina's Drought and Statewide Rate Increases Are Converging on Commercial Properties",
  whyIntro: "North Carolina commercial water customers face a convergence of ongoing drought conditions and utility rate increases across the state. Drought conditions have prompted commercial water use restrictions in multiple jurisdictions, while utilities like Fayetteville PWC are implementing rate increases to fund infrastructure investment.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Fayetteville PWC: $1.25 Monthly Increase May 2025, Another in 2026", body: "Fayetteville Public Works Commission is raising its basic facility charge by $1.25 per month in May 2025, with another $1.25 increase scheduled for May 2026. While smaller than some other state increases in dollar terms, these reflect a statewide pattern of rate pressure from utilities investing in infrastructure and drought resilience." },
    { icon: "AlertTriangle", color: "orange", title: "Active Drought Conditions Driving Conservation Mandates", body: "North Carolina is experiencing ongoing drought conditions that are triggering water use restrictions across commercial and industrial sectors. Commercial properties in drought-affected counties face mandatory conservation targets — failure to comply can result in penalties, usage restrictions, or permit modifications." },
    { icon: "Droplets", color: "blue", title: "Charlotte and Research Triangle — High Commercial Water Demand", body: "Charlotte's explosive growth and the Research Triangle's tech and biotech sectors are creating high commercial water demand in North Carolina's fastest-growing markets. Infrastructure investment to serve this growth drives rate increases for all commercial customers, not just those in high-growth areas." },
    { icon: "Building2", color: "teal", title: "All North Carolina Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Charlotte, Raleigh, Greensboro, Durham, Winston-Salem, Fayetteville, Cary, High Point, and all North Carolina commercial corridors." },
  ],
  markets: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "High Point"],
  faqItems: [
    { q: "Does Smart Valve™ help with North Carolina conservation mandates?", a: "Yes. Smart Valve™ reduces your metered water consumption 15–58%, helping you stay well below any mandated conservation thresholds and avoiding usage penalties in drought-affected jurisdictions." },
    { q: "Does Smart Valve™ work with North Carolina utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Fayetteville PWC, Charlotte Water, Raleigh Water, and all North Carolina municipal utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your North Carolina property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which North Carolina commercial properties benefit most?", a: "Office complexes, healthcare facilities, hotels, and multifamily properties in Charlotte, the Research Triangle, and Greensboro have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free North Carolina Water Assessment",
  contactBody: "NC drought is driving conservation mandates across the state. Fayetteville PWC is raising rates and Charlotte's growth means infrastructure costs keep rising. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All NC Markets", desc: "Charlotte, Raleigh, Durham and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "Helps meet active drought mandate thresholds" },
  ],
  source: "perfectwatervalve.com/locations/north-carolina",
  seoTitle: "North Carolina Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in North Carolina. Active drought with conservation mandates. Fayetteville PWC raising rates. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/north-carolina",
};

export default function NorthCarolina() {
  return <LocationPage config={config} />;
}
