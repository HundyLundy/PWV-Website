import LocationPage from "./LocationTemplate";

const config = {
  state: "Rhode Island",
  emoji: "⚓",
  headline: "Providence Water Rates Rising — Rhode Island Faces Drought and PFAS Remediation Costs",
  subheadline: "Providence Water is raising commercial rates. Rhode Island Water Resources Board is implementing new conservation mandates. PFAS contamination remediation across the state is adding significant long-term cost pressure for all commercial water customers. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Providence Water Rising | PFAS Remediation Cost Active Statewide",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "PFAS", label: "Statewide Remediation Ongoing" },
    { value: "Active", label: "RI Conservation Mandates" },
  ],
  whyTitle: "Rhode Island's Small Geography Means Water Rate Increases Hit Every Commercial Property",
  whyIntro: "Rhode Island may be the smallest state, but its commercial water customers face the same cost pressures as larger markets — PFAS remediation, aging infrastructure investment, drought conditions, and conservation mandates — compressed into a small geographic market where virtually every commercial property feels the impact simultaneously.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Providence Water Rate Increases — Infrastructure and PFAS Costs", body: "Providence Water is raising commercial rates to fund a combination of infrastructure investment and PFAS contamination remediation. Rhode Island's commercial market is dominated by Providence and its surrounding communities — rate increases from Providence Water affect the vast majority of the state's commercial water customers." },
    { icon: "AlertTriangle", color: "orange", title: "PFAS Remediation Adds Long-Term Rate Pressure Across the State", body: "PFAS contamination in Rhode Island's water supply requires expensive and ongoing treatment. The cost of PFAS remediation is substantial — utilities pass these mandatory expenses to commercial customers through rate increases that will continue throughout the remediation program, which spans years to decades." },
    { icon: "Droplets", color: "blue", title: "Conservation Mandates and Drought Conditions", body: "Rhode Island has active conservation mandates driven by drought conditions and the Rhode Island Water Resources Board's commitment to sustainable commercial water use. Commercial properties that fail to reduce consumption risk penalties and usage restrictions. Smart Valve™ reduces your metered consumption immediately." },
    { icon: "Building2", color: "teal", title: "All Rhode Island Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Providence, Cranston, Warwick, Pawtucket, East Providence, Woonsocket, and all Rhode Island commercial corridors." },
  ],
  markets: ["Providence", "Cranston", "Warwick", "Pawtucket", "East Providence", "Woonsocket", "North Providence", "Newport"],
  faqItems: [
    { q: "Does Smart Valve™ work with Providence Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Providence Water, Narragansett Bay Commission, and all Rhode Island municipal utility systems." },
    { q: "How does PFAS remediation affect my Rhode Island water bill?", a: "PFAS treatment requires costly infrastructure that utilities fund through commercial rate increases. These are mandatory, regulatory-driven expenses that utilities cannot avoid — and they are passed directly to commercial customers. Smart Valve™ reduces your consumption, cutting your bill regardless of the cause of rate increases." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Rhode Island property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Rhode Island commercial properties benefit most?", a: "Healthcare facilities, office buildings, hotels, and multifamily complexes in Providence, Cranston, and Warwick have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Rhode Island Water Assessment",
  contactBody: "Providence Water is raising rates while PFAS remediation adds long-term cost pressure. Conservation mandates are active. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All RI Markets", desc: "Providence, Warwick, Cranston and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/rhode-island",
  seoTitle: "Rhode Island Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Rhode Island. Providence Water raising rates. PFAS remediation ongoing. Conservation mandates active. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/rhode-island",
};

export default function RhodeIsland() {
  return <LocationPage config={config} />;
}
