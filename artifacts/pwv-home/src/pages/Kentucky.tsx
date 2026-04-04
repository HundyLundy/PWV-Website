import LocationPage from "./LocationTemplate";

const config = {
  state: "Kentucky",
  emoji: "🐎",
  headline: "Kentucky Commercial Water Rates Rising in 2025 — Non-Residential Conservation Mandates Active",
  subheadline: "Kentucky commercial water rates are now $8.0066 per 1,000 gallons, effective December 16, 2025. Water shortage regulations are imposing restrictions on non-residential water usage across the state. Smart Valve™ cuts your metered bill 15%–35% annually, guaranteed — and keeps you below restriction thresholds.",
  urgencyBadge: "Kentucky Rate: $8.0066/1,000 Gal Effective December 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "$8.00", label: "KY Rate Per 1,000 Gal 2025" },
    { value: "Active", label: "Non-Residential Conservation Mandates" },
  ],
  whyTitle: "Kentucky Commercial Properties Face Rate Increases and Active Conservation Mandates",
  whyIntro: "Kentucky's commercial water customers face a two-sided challenge: rising rates and active conservation mandates that impose restrictions on non-residential water usage. The commercial rate of $8.0066 per 1,000 gallons effective December 2025 represents a significant cost for high-volume users, and conservation mandates add compliance pressure on top.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "$8.0066 Per 1,000 Gallons Effective December 16, 2025", body: "Kentucky's commercial water rate of $8.0066 per 1,000 gallons effective December 16, 2025 hits high-volume commercial users hardest. Facilities consuming 500,000+ gallons per month face bills exceeding $4,000 on water costs alone. Smart Valve™ reduces that consumption 15%–35% annually on average, cutting the bill proportionally." },
    { icon: "AlertTriangle", color: "orange", title: "Non-Residential Conservation Mandates Active Statewide", body: "Kentucky has implemented water shortage regulations imposing conservation restrictions on non-residential users. These mandates can include restrictions on specific use categories, tiered pricing that penalizes overages, and permit thresholds. Smart Valve™ reduces your metered consumption, supporting compliance without operational changes." },
    { icon: "DollarSign", color: "blue", title: "15% Guaranteed — Protection Against Every Future Increase", body: "Smart Valve™'s guaranteed minimum 15% reduction in metered consumption is locked in from day one. As Kentucky's commercial rates continue to rise, your savings in dollar terms increase proportionally — the percentage reduction stays constant, but the dollar value grows with each rate hike." },
    { icon: "Building2", color: "teal", title: "All Kentucky Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Louisville, Lexington, Bowling Green, Owensboro, Covington, Richmond, Georgetown, Florence, and all Kentucky commercial corridors." },
  ],
  markets: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence"],
  faqItems: [
    { q: "Does Smart Valve™ help with Kentucky conservation mandate compliance?", a: "Yes. Kentucky's non-residential conservation mandates restrict commercial water usage. Smart Valve™ reduces your metered consumption 15%–35% annually on average, helping you stay well below any consumption thresholds and avoid penalties or permit restrictions." },
    { q: "Does Smart Valve™ work with Kentucky-American Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Kentucky-American Water, Louisville Water Company, and all Kentucky municipal utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Kentucky property doesn't reach 15%, we resolve it at no cost." },
    { q: "What Kentucky commercial properties benefit most?", a: "Any property with a monthly water bill above $5,000 benefits. Hotels, office buildings, multifamily complexes, hospitals, and manufacturing facilities in Louisville, Lexington, and Bowling Green have the strongest ROI profile." },
  ],
  contactHeading: "Get a Free Kentucky Water Assessment",
  contactBody: "Kentucky commercial rates hit $8.0066/1,000 gallons in December 2025 with conservation mandates active. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Kentucky Markets", desc: "Louisville, Lexington, Bowling Green and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "Reduces consumption to stay below mandated thresholds" },
  ],
  source: "perfectwatervalve.com/locations/kentucky",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "Kentucky Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Kentucky. Rate $8.0066/1,000 gal effective Dec 2025. Non-residential conservation mandates active. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/kentucky",
};

export default function Kentucky() {
  return <LocationPage config={config} />;
}
