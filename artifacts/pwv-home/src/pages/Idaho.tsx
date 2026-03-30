import LocationPage from "./LocationTemplate";

const config = {
  state: "Idaho",
  emoji: "🥔",
  headline: "Boise Is One of the Fastest-Growing Cities in America — Water Infrastructure Can't Keep Up",
  subheadline: "Boise's population grew 16% in 5 years. Boise City raised commercial water rates 7% in 2025. Snake River Plain aquifer levels are declining. Idaho Falls increased 6.5%. Smart Valve™ helps Idaho commercial properties cut costs 15–58%.",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "7%", label: "Boise Rate Rise 2025" },
    { value: "16%", label: "Boise Population Growth (5yr)" },
  ],
  whyTitle: "Idaho's Rapid Growth Is Straining Water Infrastructure and Pushing Commercial Rates Higher",
  whyIntro: "Boise is one of the fastest-growing metros in the country. Rapid population growth means infrastructure investment — and commercial customers absorb the cost through rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Boise +7% Commercial Rates 2025", body: "Boise City raised commercial water rates 7% in 2025 to fund infrastructure expansion driven by the city's rapid growth. Idaho Falls increased 6.5% in the same period. These increases compound annually with no relief projected." },
    { icon: "Activity", color: "orange", title: "Snake River Plain Aquifer Decline", body: "The Eastern Snake River Plain Aquifer, which supplies irrigation and municipal water for southern Idaho, has been declining due to over-pumping. State regulators are increasing pressure on commercial water users to reduce consumption." },
    { icon: "Building2", color: "blue", title: "Tech Expansion — Data Centers", body: "Boise and the Treasure Valley are attracting data center investment from major tech companies. Cooling water is a critical operating cost. Smart Valve™ delivers proven data center savings — the Amazon YYZ3 case study is directly applicable." },
    { icon: "Droplets", color: "yellow", title: "Mountain Water Pressure Conditions", body: "Idaho's mountainous terrain creates the same elevated-pressure conditions found in Colorado and Utah — increasing air entrapment and making Smart Valve™ especially effective for commercial properties in Boise, Idaho Falls, and Twin Falls." },
    { icon: "DollarSign", color: "teal", title: "Boise Utility Conservation Incentives", body: "Boise City Utilities offers conservation incentives for commercial properties demonstrating verified water use reductions. Smart Valve™ M&V documentation supports rebate applications." },
    { icon: "Building2", color: "purple", title: "All Idaho Markets Served", body: "Boise, Nampa, Meridian, Idaho Falls, Twin Falls, Pocatello, Coeur d'Alene, and all Idaho markets." }
  ],
  markets: ["Boise", "Nampa", "Meridian", "Idaho Falls", "Twin Falls", "Pocatello", "Coeur d'Alene", "Caldwell"],
  faqItems: [
    { q: "Does Smart Valve™ work well in Idaho's mountain water systems?", a: "Yes. Idaho's mountain-fed municipal systems create the same pressure fluctuations found in Colorado — elevated line pressure that increases air entrapment. Smart Valve™ is specifically designed to eliminate this and consistently delivers strong results in mountain West markets." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Idaho commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Idaho Water Assessment",
  contactBody: "Boise's rapid growth means rising rates with no end in sight. Smart Valve™ provides guaranteed savings in the same mountain West conditions that drive Colorado results.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Idaho Markets", desc: "Boise, Idaho Falls, Twin Falls and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Mountain West Experts", desc: "Same conditions as Colorado — proven results" },
  ],
  source: "perfectwatervalve.com/locations/idaho",
};

export default function Idaho() {
  return <LocationPage config={config} />;
}
