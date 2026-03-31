import LocationPage from "./LocationTemplate";

const config = {
  state: "South Carolina",
  emoji: "🌴",
  headline: "South Carolina Water Rates Rising — Columbia Up 8%, Major Cities All Implementing Increases",
  subheadline: "Columbia, SC raised commercial water rates 8% in 2025. Rock Hill implemented a 5% increase in FY2025. Spartanburg is raising both water and sewer rates. Data center growth in the Charlotte-SC corridor and drought conditions are placing additional pressure on supply. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Columbia SC: 8% Rate Increase 2025 | Rock Hill: 5% FY2025",
  heroStats: [
    { value: "8%", label: "Columbia SC Rate Rise 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "5%", label: "Rock Hill FY2025 Increase" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "South Carolina's Commercial Water Market Is Feeling Compounding Rate Pressure Statewide",
  whyIntro: "South Carolina's commercial water customers face rate increases from multiple directions: Columbia and Rock Hill both raising rates in the same cycle, Spartanburg increasing water and sewer, and data center growth along the Charlotte-SC corridor straining supply and prompting infrastructure investment that all commercial customers fund.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Columbia: 8% in 2025 | Rock Hill: 5% FY2025", body: "Columbia, South Carolina's capital, raised commercial water rates 8% in 2025. Rock Hill implemented a 5% increase in FY2025. These simultaneous increases in major SC markets reflect a statewide infrastructure investment cycle — utilities across South Carolina are aging and require substantial capital investment." },
    { icon: "AlertTriangle", color: "orange", title: "Spartanburg Water and Sewer Both Increasing", body: "Spartanburg is raising both water and sewer rates, adding to South Carolina's multi-utility, multi-city rate increase landscape. For commercial properties with combined water and sewer billing, both line items are rising — compounding the overall cost impact for facilities in the Upstate SC region." },
    { icon: "Droplets", color: "blue", title: "Data Centers and Drought Conditions Adding Supply Pressure", body: "The Charlotte-SC data center corridor is growing rapidly, placing increasing demand on water resources in both the Piedmont and Coastal Plain regions. Combined with drought conditions affecting surface water availability, South Carolina's commercial water supply is under dual pressure that will continue to drive rate increases." },
    { icon: "Building2", color: "teal", title: "All South Carolina Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Columbia, Charleston, North Charleston, Mount Pleasant, Rock Hill, Greenville, Spartanburg, and all South Carolina commercial corridors." },
  ],
  markets: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Spartanburg", "Summerville"],
  faqItems: [
    { q: "Does Smart Valve™ work with South Carolina utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Columbia Water, Charleston Water System, Rock Hill Utilities, and all South Carolina municipal utility systems." },
    { q: "How do SC data centers affect commercial water costs?", a: "Data center growth in the Charlotte-SC corridor drives infrastructure investment in municipal water systems, and those costs are funded through commercial rate increases affecting all customers — not just data centers. Smart Valve™ reduces your consumption, protecting your budget from demand-driven rate increases." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your South Carolina property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which SC commercial properties benefit most?", a: "Hotels on the coast, office buildings in Columbia and Greenville, healthcare facilities, and multifamily complexes in Charleston and Rock Hill have the strongest ROI profile. Any property with $5,000+/month on water qualifies." },
  ],
  contactHeading: "Get a Free South Carolina Water Assessment",
  contactBody: "Columbia is up 8%, Rock Hill up 5%, Spartanburg raising both water and sewer. Data centers and drought are adding pressure. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All SC Markets", desc: "Columbia, Charleston, Greenville and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/south-carolina",
  seoTitle: "South Carolina Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in South Carolina. Columbia up 8% in 2025. Rock Hill up 5%. Data centers straining SC supply. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/south-carolina",
};

export default function SouthCarolina() {
  return <LocationPage config={config} />;
}
