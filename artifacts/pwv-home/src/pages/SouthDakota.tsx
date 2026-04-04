import LocationPage from "./LocationTemplate";

const config = {
  state: "South Dakota",
  emoji: "🗿",
  headline: "South Dakota Water Rates Rising — Drought Conditions and Infrastructure Investment Drive Increases",
  subheadline: "Sioux Falls is raising commercial water rates 3.5% in 2026. Rapid City raised sewer rates 10% for 2025. South Dakota is experiencing drought conditions that are straining groundwater availability and requiring infrastructure investment. Smart Valve™ cuts your commercial water bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Rapid City Sewer: 10% Increase 2025 | Sioux Falls Water: 3.5% in 2026",
  heroStats: [
    { value: "10%", label: "Rapid City Sewer 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "3.5%", label: "Sioux Falls Water 2026" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "South Dakota's Commercial Properties Face Drought-Driven Rate Increases Across Both Major Markets",
  whyIntro: "South Dakota's two largest commercial markets — Sioux Falls and Rapid City — are both implementing commercial water and sewer rate increases in the 2025–2026 cycle. Drought conditions are reducing groundwater availability and forcing infrastructure investment that is funded through commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Rapid City: 10% Sewer Increase in 2025 | Sioux Falls: 3.5% Water in 2026", body: "Rapid City raised commercial sewer rates 10% for 2025 — one of the steeper single-year increases in the state. Sioux Falls is raising commercial water rates 3.5% in 2026, reflecting ongoing infrastructure investment. Both increases compound on previous years' adjustments." },
    { icon: "AlertTriangle", color: "orange", title: "South Dakota Drought Straining Groundwater Availability", body: "South Dakota is experiencing drought conditions that are reducing groundwater levels across the state. As natural water availability decreases, utilities invest in alternative sources, deeper wells, and expanded treatment capacity. Commercial customers fund this investment through rate increases that will continue as drought conditions persist." },
    { icon: "DollarSign", color: "blue", title: "Agricultural Competition for Water Resources", body: "South Dakota's extensive agricultural sector competes with commercial and municipal water users for limited groundwater resources. As agriculture intensifies, municipal water managers face pressure on both supply volume and quality — pressure that translates to commercial rate increases as utilities invest in water security." },
    { icon: "Building2", color: "teal", title: "All South Dakota Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Sioux Falls, Rapid City, Aberdeen, Brookings, Watertown, Mitchell, Pierre, and all South Dakota commercial corridors." },
  ],
  markets: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Pierre", "Yankton"],
  faqItems: [
    { q: "Does Smart Valve™ work with Sioux Falls and Rapid City utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Sioux Falls Public Works, Rapid City Utilities, and all South Dakota municipal utility systems." },
    { q: "How does South Dakota's drought affect commercial water costs?", a: "Drought reduces available groundwater and surface water, forcing utilities to invest in alternative sources and more expensive supply systems. These costs are passed to commercial customers through rate increases. Smart Valve™ reduces your metered consumption, protecting you from both current and future drought-driven increases." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your South Dakota property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which South Dakota commercial properties benefit most?", a: "Healthcare facilities, office buildings, hotels, and agricultural processing facilities in Sioux Falls and Rapid City have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free South Dakota Water Assessment",
  contactBody: "Rapid City sewer is up 10% in 2025. Sioux Falls water is up 3.5% in 2026. Drought is driving infrastructure investment statewide. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All SD Markets", desc: "Sioux Falls, Rapid City, Aberdeen and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/south-dakota",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
  seoTitle: "South Dakota Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in South Dakota. Rapid City sewer up 10% in 2025. Sioux Falls water up 3.5% in 2026. Drought driving rate increases. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/south-dakota",
};

export default function SouthDakota() {
  return <LocationPage config={config} />;
}
