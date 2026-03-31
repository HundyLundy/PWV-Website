import LocationPage from "./LocationTemplate";

const config = {
  state: "Maryland",
  emoji: "🦀",
  headline: "Maryland Water Rates Rising — Drought and Population Growth Straining Supply, Conservation Mandated",
  subheadline: "Baltimore City raised water rates 3% and sewer rates 15%+ in 2025. WSSC is at $9.72/1,000 gallons effective July 2025. Maryland Water Service is at $10.58/1,000 gallons effective July 2025. Persistent drought and population growth are straining supply across the state. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Baltimore Sewer Up 15%+ | WSSC at $9.72/1,000 Gal | MWS at $10.58/1,000 Gal",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "$10.58", label: "MWS Rate Per 1,000 Gal 2025" },
    { value: "15%+", label: "Baltimore Sewer Rate Rise 2025" },
  ],
  whyTitle: "Maryland's Dual Pressure: Rising Rates Across Multiple Utilities and Active Conservation Mandates",
  whyIntro: "Maryland commercial properties face stacked rate increases from multiple major utilities simultaneously — Baltimore City, WSSC, and Maryland Water Service all raising rates in the same cycle. This is compounded by drought conditions and population growth driving conservation mandates for commercial water users across the state.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Baltimore City: 3% Water + 15%+ Sewer Increase in 2025", body: "Baltimore City raised water rates 3% and sewer rates 15%+ for commercial customers in 2025. Combined water and sewer increases make Baltimore one of the more aggressive markets in the Mid-Atlantic. For properties paying separate water and sewer bills, the combined impact is substantially higher than either individual rate suggests." },
    { icon: "AlertTriangle", color: "orange", title: "WSSC at $9.72/1,000 Gal | MWS at $10.58/1,000 Gal — Both Effective July 2025", body: "Washington Suburban Sanitary Commission (WSSC) rates are $9.72 per 1,000 gallons effective July 2025. Maryland Water Service is $10.58 per 1,000 gallons. These rates — among the highest in the region — apply to vast swaths of Maryland's suburban commercial market in Montgomery, Prince George's, and surrounding counties." },
    { icon: "Droplets", color: "blue", title: "Drought and Population Growth Driving Conservation Mandates", body: "Maryland has active conservation mandates for commercial properties driven by persistent drought and population growth that is outpacing water supply infrastructure. These mandates impose restrictions on commercial water usage, with potential penalties for overages. Smart Valve™ reduces your metered consumption, keeping you safely below mandate thresholds." },
    { icon: "Building2", color: "teal", title: "All Maryland Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Baltimore, Rockville, Gaithersburg, College Park, Annapolis, Frederick, Bethesda, Silver Spring, and all Maryland commercial corridors." },
  ],
  markets: ["Baltimore", "Rockville", "Gaithersburg", "Annapolis", "Frederick", "Bethesda", "Silver Spring", "Columbia"],
  faqItems: [
    { q: "Does Smart Valve™ work with WSSC and Maryland Water Service meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by WSSC, Maryland Water Service, Baltimore City, and all Maryland utility systems." },
    { q: "How does Smart Valve™ help with Maryland conservation mandates?", a: "Maryland's commercial conservation mandates impose usage thresholds. Smart Valve™ reduces your metered water consumption 15–58%, keeping you well below any mandated thresholds and protecting you from usage penalties." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Maryland property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Maryland commercial properties benefit most?", a: "Office buildings, healthcare facilities, multifamily complexes, and hospitality properties in Baltimore, Montgomery County, and Prince George's County have the strongest ROI. Any property spending $5,000+/month on water qualifies." },
  ],
  contactHeading: "Get a Free Maryland Water Assessment",
  contactBody: "Baltimore sewer is up 15%+, WSSC at $9.72, MWS at $10.58 per 1,000 gallons. Drought and population growth mean more increases are coming. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Maryland Markets", desc: "Baltimore, Montgomery Co., Annapolis and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "Helps meet active state mandates" },
  ],
  source: "perfectwatervalve.com/locations/maryland",
  seoTitle: "Maryland Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Maryland. Baltimore sewer up 15%+. WSSC $9.72, MWS $10.58 per 1,000 gal effective July 2025. Conservation mandates active. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/maryland",
};

export default function Maryland() {
  return <LocationPage config={config} />;
}
