import LocationPage from "./LocationTemplate";

const config = {
  state: "Missouri",
  emoji: "🌉",
  headline: "Missouri American Water Proposed 34.4% Rate Increase for 2025 — Some Cities Up 94%",
  subheadline: "Missouri American Water has proposed a 34.4% commercial rate increase for 2025. Neosho implemented 25% in 2024 with 10% more in 2025. Republic, Missouri raised base rates up to 94%. Missouri commercial properties face rate increases from dramatic to historic across the state. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Missouri American Water: 34.4% Rate Increase Proposed for 2025",
  heroStats: [
    { value: "34.4%", label: "Missouri American Proposed Rise" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "94%", label: "Republic MO Base Rate Rise" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Missouri Faces Some of the Most Dramatic Commercial Water Rate Increases in the Country",
  whyIntro: "Missouri's commercial water rate landscape is extraordinary: a 34.4% proposed increase from Missouri American Water affecting thousands of commercial properties, combined with base rate increases of up to 94% in municipalities like Republic. These are not gradual adjustments — they represent a step-change in the cost of commercial water operations across the state.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Missouri American Water: 34.4% Proposed for 2025", body: "Missouri American Water — the largest water utility in the state — has proposed a 34.4% commercial rate increase for 2025. If approved, this affects the vast majority of Missouri's commercial water customers in Kansas City, St. Louis, and dozens of communities statewide. A property paying $20,000/month would face approximately $6,880 more per month." },
    { icon: "AlertTriangle", color: "orange", title: "Republic, MO: Base Rates Up 94% | Neosho: 25% + 10%", body: "Republic, Missouri raised commercial base rates up to 94% — a near-doubling of monthly fixed costs. Neosho implemented 25% commercial increases in 2024 followed by 10% more in 2025. These extreme increases reflect the catastrophic state of infrastructure in many Missouri municipalities and the massive investment required to address it." },
    { icon: "DollarSign", color: "blue", title: "Infrastructure Deficit = Multi-Year Rate Increase Cycle", body: "Missouri's water infrastructure has an estimated multi-billion dollar investment backlog. Missouri American Water's proposed 34.4% increase alone will not close this gap — the rate increase cycle will continue for years as utilities chip away at decades of deferred maintenance. Every year you wait to install Smart Valve™ means paying more on a higher base." },
    { icon: "Building2", color: "teal", title: "All Missouri Commercial Markets Served", body: "Smart Valve™ serves commercial properties across St. Louis, Kansas City, Springfield, Columbia, Independence, Lee's Summit, O'Fallon, and all Missouri commercial corridors." },
  ],
  markets: ["St. Louis", "Kansas City", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "Joplin"],
  faqItems: [
    { q: "If Missouri American Water's 34.4% increase is approved, what's the impact on my business?", a: "A 34.4% increase on a $15,000/month commercial water bill means approximately $5,160 more per month — or $61,920 more per year. Smart Valve™'s guaranteed 15% consumption reduction saves $2,250/month off the higher bill, offsetting roughly 44% of the increase from day one." },
    { q: "Does Smart Valve™ work with Missouri American Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Missouri American Water, City Utilities in Springfield, and all Missouri municipal utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Missouri property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Missouri commercial properties should act first?", a: "Properties on Missouri American Water service should act now before the proposed 34.4% increase takes effect. Kansas City and St. Louis metro properties have the highest absolute savings potential given their higher baseline water bills." },
  ],
  contactHeading: "Get a Free Missouri Water Assessment",
  contactBody: "Missouri American Water proposed 34.4% for 2025. Republic raised rates 94%. Neosho is up 35% across two years. Smart Valve™ guarantees at least 15% off your metered bill — before the next hike.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Missouri Markets", desc: "St. Louis, Kansas City, Springfield and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Act Before the Hike", desc: "Missouri American Water increase pending approval" },
  ],
  source: "perfectwatervalve.com/locations/missouri",
  seoTitle: "Missouri Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Missouri. Missouri American Water proposed 34.4% for 2025. Republic up 94%. Guaranteed savings in writing. Free assessment available.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/missouri",
};

export default function Missouri() {
  return <LocationPage config={config} />;
}
