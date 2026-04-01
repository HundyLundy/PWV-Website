import LocationPage from "./LocationTemplate";

const CO_OTHER_CITIES = [
  { name: "Denver", slug: "colorado/denver" },
  { name: "Colorado Springs", slug: "colorado/colorado-springs" },
  { name: "Aurora", slug: "colorado/aurora" },
  { name: "Fort Collins", slug: "colorado/fort-collins" },
  { name: "Lakewood", slug: "colorado/lakewood" },
  { name: "Boulder", slug: "colorado/boulder" },
  { name: "Pueblo", slug: "colorado/pueblo" },
  { name: "Loveland", slug: "colorado/loveland" },
  { name: "Arvada", slug: "colorado/arvada" },
];

const config = {
  state: "Greeley",
  emoji: "🌾",
  headline: "Greeley Water Up 7.1% in 2025 — Highest Front Range Increase. Cache la Poudre Under Severe Drought.",
  subheadline: "Greeley Water raised commercial rates 7.1% in 2025 — the highest rate increase on the Front Range. The Cache la Poudre River, Greeley's primary water source, is under severe drought and agricultural demand pressure. Smart Valve™ cuts your metered bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Greeley Water: 7.1% Rate Increase 2025 — Highest on Front Range. Cache la Poudre Drought Declared.",
  heroStats: [
    { value: "7.1%", label: "Greeley Water Rise 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Severe", label: "Cache la Poudre Drought" },
  ],
  whyTitle: "Greeley Water's 7.1% Increase Is the Highest on the Front Range — And the Poudre River Drought Makes More Inevitable",
  whyIntro: "Greeley Water raised commercial rates 7.1% in 2025 — the steepest increase among major Front Range utilities. The Cache la Poudre River, Greeley's primary water source, is under severe drought stress compounded by heavy agricultural demand. This combination of supply constraint and infrastructure need points to continued rate pressure for Greeley commercial properties.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Greeley Water: 7.1% in 2025 — Front Range's Highest Rate Increase", body: "Greeley Water's 7.1% commercial rate increase in 2025 is the highest of any major Front Range utility. This reflects both the severity of the Cache la Poudre drought and Greeley Water's significant infrastructure investment requirements to maintain reliable supply for a rapidly growing market." },
    { icon: "AlertTriangle", color: "orange", title: "Cache la Poudre River — Severe Drought and Agricultural Demand Pressure", body: "The Cache la Poudre River is Greeley's primary water source. 2025 drought conditions have significantly reduced Poudre River flows. Agricultural demand from Weld County's farming and livestock operations further stresses available supply. Commercial properties face real supply reliability risk without conservation measures in place." },
    { icon: "Droplets", color: "blue", title: "Agricultural Processing and Food Industry — High Water Intensity", body: "Greeley is home to significant agricultural processing, beef packing, and food manufacturing operations. These high-water-intensity facilities are among the strongest ROI candidates for Smart Valve™. The guaranteed 15% minimum reduction translates directly to operational cost savings in water-intensive processes." },
    { icon: "Building2", color: "teal", title: "All Greeley Commercial Markets Served", body: "Smart Valve™ serves commercial properties throughout Greeley — from the US 85 commercial corridor and downtown Greeley to the industrial facilities along the Union Pacific corridor and the expanding retail and residential development along US 34." },
  ],
  markets: ["Downtown Greeley", "US 85 Corridor", "West Greeley", "East Greeley Industrial", "North Greeley", "Windsor", "Eaton", "Evans"],
  faqItems: [
    { q: "What are current commercial water rates in Greeley?", a: "Greeley Water raised commercial rates 7.1% in 2025 — the highest increase of any major Front Range utility. With the Cache la Poudre River under severe drought conditions, continued annual increases are expected as Greeley Water invests in supply reliability infrastructure." },
    { q: "Why is Greeley's rate increase so much higher than other Colorado cities?", a: "Greeley's 7.1% increase reflects the severity of Cache la Poudre River drought combined with heavy agricultural competition for water. Greeley Water must invest heavily in alternative supply sources and drought resilience infrastructure, and those costs are passed to commercial rate payers." },
    { q: "Does Greeley have rebate programs for water savings equipment?", a: "Contact Perfect Water Valve for current Greeley Water conservation incentive availability. Note: Denver Water rebates do not apply in Greeley — Greeley is served exclusively by Greeley Water." },
    { q: "What commercial property types in Greeley benefit most from Smart Valve™?", a: "Agricultural processing and food manufacturing facilities are among the highest ROI applications due to their water intensity. Hotels, multifamily residential, office buildings, and industrial facilities throughout the Greeley metro also qualify." },
    { q: "How quickly can Smart Valve™ pay for itself at Greeley Water's current rates?", a: "At Greeley Water's current rates — the highest on the Front Range — with a 15%–35% annual consumption reduction, most commercial properties recover installation costs within 12–18 months. High-volume industrial and processing facilities typically see payback in 6–12 months." },
  ],
  contactHeading: "Get a Free Greeley Water Assessment",
  contactBody: "Greeley Water is up 7.1% in 2025 — the highest on the Front Range — with Cache la Poudre drought pointing to more increases. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Greeley Markets", desc: "Downtown, US 85, Evans and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/greeley",
  alsoServing: CO_OTHER_CITIES,
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Greeley Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Greeley, CO. Greeley Water up 7.1% in 2025 — highest on Front Range. Cache la Poudre severe drought. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/greeley",
};

export default function Greeley() {
  return <LocationPage config={config} />;
}
