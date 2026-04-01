import LocationPage from "./LocationTemplate";

const config = {
  state: "Hawaii",
  emoji: "🌺",
  headline: "Hawaii Water Rates Surging Up to 59% — Tourism and Military Demand Straining Island Supply",
  subheadline: "Hawaii Water Service is raising rates up to 59% for West Maui and 47.89% for other non-residential customers. The Board of Water Supply implemented $20.15/unit pricing effective July 2025. Island water supply is structurally constrained — there is no grid to import from. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Hawaii Water Service: Up to 59% Rate Increase for Non-Residential",
  heroStats: [
    { value: "59%", label: "Hawaii Water Service Hike" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "47.89%", label: "Non-Residential Rise" },
    { value: "$20.15", label: "Board of Water Supply Rate/Unit" },
  ],
  whyTitle: "Hawaii's Island Water Supply Is Structurally Constrained — Rates Will Continue Rising",
  whyIntro: "Hawaii faces a uniquely severe water challenge: island geography means there is no alternative supply to tap when local water sources are stressed. Tourism, military operations, and growing commercial development strain a fixed water supply. The result is some of the steepest rate increases in the country, with no structural relief in sight.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Hawaii Water Service: Up to 59% for West Maui Non-Residential", body: "Hawaii Water Service is implementing rate increases of up to 59% for non-residential customers in West Maui, and 47.89% for other non-residential customers across its service area. These are driven by infrastructure investment, drought resilience programs, and the uniquely high cost of water delivery in island environments." },
    { icon: "AlertTriangle", color: "orange", title: "Board of Water Supply: $20.15/Unit Effective July 2025", body: "The Honolulu Board of Water Supply increased commercial rates to $20.15 per unit effective July 2025. For high-volume commercial properties on Oahu — hotels, resorts, hospitals, office complexes — this translates directly to thousands of dollars per month in increased costs." },
    { icon: "Droplets", color: "blue", title: "Island Supply Is Fixed — Every Drop Saved Is Money Kept", body: "Unlike mainland states, Hawaii cannot draw from neighboring states' water systems when supply is stressed. Water conservation in Hawaii is not optional — it is structural. Smart Valve™ reduces your metered consumption 15%–35% annually on average, immediately cutting your bill while also reducing your draw on the island's limited supply." },
    { icon: "Hotel", color: "teal", title: "Hospitality — Hawaii's Highest-ROI Application", body: "Hawaii's tourism economy means hotels and resorts are the dominant commercial water users on every island. The Four Seasons Fort Lauderdale case study (26% savings, $27,000/yr) is directly applicable to Hawaii's luxury hospitality market. With Hawaii water rates 2–4x mainland rates, the dollar savings per percentage point are dramatically higher." },
  ],
  markets: ["Honolulu", "Kailua", "Pearl City", "Hilo", "Kailua-Kona", "Kahului", "Lahaina", "Kihei"],
  faqItems: [
    { q: "Does Smart Valve™ work with the Honolulu Board of Water Supply meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by the Honolulu Board of Water Supply, Hawaii Water Service, Maui County, and all Hawaii utility providers." },
    { q: "With Hawaii water rates so high, is the ROI even bigger?", a: "Yes — significantly. Because Hawaii's commercial water rates are among the highest in the United States, each percentage point of consumption reduction produces a larger dollar saving than on the mainland. A 15% reduction on a $30,000/month Hawaii hotel water bill saves $54,000/year." },
    { q: "Does Smart Valve™ help with Hawaii conservation mandates?", a: "Yes. Smart Valve™ reduces your metered water consumption, directly supporting compliance with any conservation mandates, tiered pricing thresholds, or permit conditions imposed by Hawaii water management authorities." },
    { q: "What is the guaranteed minimum savings?", a: "Every Smart Valve™ installation guarantees at least 15% reduction in metered water consumption, in writing. If your Hawaii property doesn't reach 15%, we resolve it at no cost." },
  ],
  contactHeading: "Get a Free Hawaii Water Assessment",
  contactBody: "Hawaii Water Service is raising rates up to 59% for non-residential customers. Island supply is structurally constrained. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Hawaiian Islands", desc: "Oahu, Maui, Hawaii Island, Kauai" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Hospitality Specialists", desc: "Hotels, resorts, and commercial properties" },
  ],
  source: "perfectwatervalve.com/locations/hawaii",
  seoTitle: "Hawaii Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Hawaii. Hawaii Water Service raising rates up to 59%. Island supply structurally constrained. Guaranteed savings in writing. Free assessment.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/hawaii",
};

export default function Hawaii() {
  return <LocationPage config={config} />;
}
