import LocationPage from "./LocationTemplate";

const config = {
  state: "New Hampshire",
  emoji: "🍂",
  headline: "New Hampshire Faces Rising Rates and Drought — Newport Sewer Up 25% in 2024",
  subheadline: "Newport, NH raised sewer rates 25% in November 2024. Salem water rates are increasing in January 2025. Wolfeboro is raising water 2% and sewer 7%. Drought conditions and aging infrastructure are affecting supply reliability across New Hampshire. Smart Valve™ cuts your commercial water bill 15–58%, guaranteed.",
  urgencyBadge: "Newport NH Sewer: 25% Increase November 2024 | Salem Water Rising Jan 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "25%", label: "Newport Sewer Hike 2024" },
    { value: "Active", label: "NH Drought Conditions" },
  ],
  whyTitle: "New Hampshire Commercial Properties Face Drought Stress and Multiple Utility Rate Increases",
  whyIntro: "New Hampshire's commercial water customers face rate increases across multiple utilities simultaneously, compounded by drought conditions affecting water availability throughout the state. From Newport's 25% sewer increase to Salem and Wolfeboro rate adjustments, no part of New Hampshire's commercial market is immune to cost pressure in 2024–2025.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Newport: 25% Sewer Increase November 2024", body: "Newport, New Hampshire raised sewer rates 25% in November 2024 — one of the steepest single-year sewer increases in the state. For commercial properties where sewer fees represent a significant portion of the total water bill, this compounds the overall cost of water operations substantially." },
    { icon: "AlertTriangle", color: "orange", title: "Salem and Wolfeboro Rate Increases Active in 2025", body: "Salem is implementing water rate increases effective January 2025. Wolfeboro is raising water rates 2% and sewer rates 7%. This pattern of multiple New Hampshire utilities raising rates simultaneously reflects a statewide infrastructure investment requirement that will continue to drive rate increases across the state." },
    { icon: "Droplets", color: "blue", title: "Drought Conditions Straining New Hampshire Water Supply", body: "New Hampshire is experiencing drought conditions that are challenging water supply reliability, particularly for smaller municipalities that depend on local groundwater and surface water sources. As natural supply decreases, utilities invest in alternative sources — and commercial customers fund this investment through higher rates." },
    { icon: "Building2", color: "teal", title: "All New Hampshire Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Manchester, Nashua, Concord, Derry, Dover, Rochester, Salem, Merrimack, and all New Hampshire commercial corridors." },
  ],
  markets: ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack"],
  faqItems: [
    { q: "Does Smart Valve™ work with New Hampshire utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Manchester Water Works, Pennichuck Water, and all New Hampshire municipal utility systems." },
    { q: "How does New Hampshire's drought affect commercial water costs?", a: "Drought reduces available supply, often triggering conservation mandates, usage restrictions, and tiered pricing that penalizes high-volume commercial users. Smart Valve™ reduces your metered consumption, protecting you from overage penalties and rate tier escalation." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your New Hampshire property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which NH commercial properties benefit most?", a: "Hotels, office buildings, healthcare facilities, and multifamily complexes in Manchester, Nashua, and southern New Hampshire (where commercial density is highest) have the strongest ROI profile." },
  ],
  contactHeading: "Get a Free New Hampshire Water Assessment",
  contactBody: "Newport sewer up 25%, Salem and Wolfeboro raising rates in 2025, drought conditions active. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All NH Markets", desc: "Manchester, Nashua, Concord and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/new-hampshire",
  seoTitle: "New Hampshire Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in New Hampshire. Newport sewer up 25% in 2024. Drought conditions active statewide. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/new-hampshire",
};

export default function NewHampshire() {
  return <LocationPage config={config} />;
}
