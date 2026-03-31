import LocationPage from "./LocationTemplate";

const config = {
  state: "Louisiana",
  emoji: "🎷",
  headline: "Louisiana Commercial Water Rates Up 7–8% Annually — Infrastructure Investment Driving Costs",
  subheadline: "Magnolia Water raised commercial rates 8% in 2024 and 7% in 2025. St. James Parish implemented commercial flat rate increases in 2025. Louisiana's aging water infrastructure is requiring massive investment, and commercial customers fund it through annual rate increases. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Magnolia Water: 8% in 2024, 7% in 2025 — Compounding Annually",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "8%", label: "Magnolia Water 2024 Rise" },
    { value: "7%", label: "Magnolia Water 2025 Rise" },
  ],
  whyTitle: "Louisiana's Aging Water Infrastructure Is Creating a Multi-Year Cost Increase Cycle",
  whyIntro: "Louisiana's water infrastructure is among the oldest in the South, requiring substantial ongoing investment to maintain service reliability. Utilities like Magnolia Water are implementing 7–8% annual increases to fund this work — and these increases compound year over year, creating a growing cost burden for commercial properties across the state.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Magnolia Water: 8% in 2024, 7% in 2025 — Compounding", body: "Magnolia Water implemented 8% commercial rate increases in 2024 and 7% in 2025. At this pace, a property paying $20,000/month in 2023 is now paying over $23,000/month — and the trend is expected to continue. Smart Valve™ cuts consumption 15–58%, directly offsetting these compounding increases." },
    { icon: "AlertTriangle", color: "orange", title: "St. James Parish and Statewide Flat Rate Commercial Increases", body: "St. James Parish implemented commercial flat rate increases in 2025, adding to a statewide pattern of rate pressure. Louisiana utilities across the state are raising commercial water costs as infrastructure investment requirements accelerate. No part of Louisiana's commercial market is immune." },
    { icon: "Droplets", color: "blue", title: "Aging Infrastructure: A Multi-Decade Cost Cycle", body: "Louisiana's water infrastructure aging issue does not resolve quickly. The investment required to replace deteriorating pipes, treatment facilities, and distribution systems spans decades. Commercial rate increases are not a temporary phenomenon — they reflect a structural multi-decade investment program that will continue to be funded through rate increases." },
    { icon: "Building2", color: "teal", title: "All Louisiana Commercial Markets Served", body: "Smart Valve™ serves commercial properties across New Orleans, Baton Rouge, Shreveport, Lafayette, Metairie, Lake Charles, Kenner, and all Louisiana commercial corridors." },
  ],
  markets: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Metairie", "Lake Charles", "Kenner", "Bossier City"],
  faqItems: [
    { q: "Does Smart Valve™ work with Louisiana utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Magnolia Water, Sewerage & Water Board of New Orleans, Baton Rouge Water Company, and all Louisiana utility systems." },
    { q: "How do Louisiana's annual rate increases compound over time?", a: "Magnolia Water's 8% (2024) + 7% (2025) increases compound on top of each other. A $15,000/month bill in 2023 is now approximately $17,400/month — and each future increase compounds further. Smart Valve™'s 15–58% consumption reduction protects you from every future increase." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Louisiana property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Louisiana commercial properties benefit most?", a: "Hotels, office buildings, industrial facilities, multifamily complexes, and healthcare properties in New Orleans, Baton Rouge, and Shreveport have the strongest ROI profile. Any property with a monthly water bill above $5,000 qualifies." },
  ],
  contactHeading: "Get a Free Louisiana Water Assessment",
  contactBody: "Magnolia Water raised rates 8% then 7% — compounding annually. Louisiana's aging infrastructure means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Louisiana Markets", desc: "New Orleans, Baton Rouge, Shreveport and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/louisiana",
  seoTitle: "Louisiana Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Louisiana. Magnolia Water up 8% in 2024, 7% in 2025. Aging infrastructure driving annual increases. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/louisiana",
};

export default function Louisiana() {
  return <LocationPage config={config} />;
}
