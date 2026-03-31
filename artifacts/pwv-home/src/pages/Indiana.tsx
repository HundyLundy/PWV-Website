import LocationPage from "./LocationTemplate";

const config = {
  state: "Indiana",
  emoji: "🌽",
  headline: "Indiana Businesses Face Up to 85.5% Water Rate Increases by 2027 — Act Now",
  subheadline: "Bloomington is implementing a 46–50% water rate increase in 2025. Anderson faces an 85.5% increase by 2027, starting with 20.5% now. Multiple utilities across Indiana are proposing 30–49% increases. Indiana commercial properties face the most aggressive rate schedule in the Midwest. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Anderson, IN: 85.5% Rate Increase by 2027 | Bloomington: 46–50% in 2025",
  heroStats: [
    { value: "85.5%", label: "Anderson Rate Hike by 2027" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "46–50%", label: "Bloomington 2025 Increase" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Indiana Is Implementing Some of the Largest Commercial Water Rate Increases in the Midwest",
  whyIntro: "Indiana's water utilities are in a capital investment crisis driven by decades of deferred infrastructure maintenance. The result is a wave of rate increases that are among the most aggressive in the Midwest. Bloomington, Anderson, and utilities across the state are implementing increases of 20–85% over 2–3 year schedules.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Bloomington: 46–50% Water Rate Increase in 2025", body: "The City of Bloomington is implementing a 46–50% commercial water rate increase in 2025. This is not phased — it is a near-immediate, near-doubling of commercial water costs. Properties spending $10,000/month on water will see bills approach $15,000 without any consumption change." },
    { icon: "AlertTriangle", color: "orange", title: "Anderson: 85.5% Total Increase by 2027, Starting Now", body: "Anderson, Indiana has approved an 85.5% total rate increase by 2027, with an initial 20.5% increase taking effect now. This phased increase compounds year over year. Commercial properties in Anderson face a systematic, near-doubling of water costs over the next two years." },
    { icon: "DollarSign", color: "blue", title: "Statewide: 30–49% Increases Proposed Across Multiple Utilities", body: "Bloomington and Anderson are not isolated cases. Multiple Indiana utilities are proposing or implementing increases in the 30–49% range to address aged infrastructure. Indiana's water rate trajectory is one of the steepest in the Midwest, and there is no indication this trend will reverse." },
    { icon: "Building2", color: "teal", title: "All Indiana Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Indianapolis, Fort Wayne, Evansville, South Bend, Carmel, Fishers, Bloomington, Hammond, Anderson, Lafayette, and all Indiana commercial corridors." },
  ],
  markets: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Bloomington", "Hammond", "Anderson"],
  faqItems: [
    { q: "Does Smart Valve™ offset the impact of Indiana's massive rate increases?", a: "Yes. Smart Valve™ reduces your metered water consumption 15–58%, guaranteed. Even against an 85.5% increase, reducing your consumption by 15–30% significantly offsets your net bill increase. The savings compound every year rates rise." },
    { q: "Does Smart Valve™ work with Bloomington utilities?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Bloomington utilities, Indiana American Water, and all Indiana municipal systems." },
    { q: "Is the 15% savings guarantee real and in writing?", a: "Yes. Every installation includes a written guarantee of at least 15% reduction in metered water consumption. If your Indiana property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Indiana commercial properties should act soonest?", a: "Properties in Bloomington and Anderson should act immediately — their rate increases are already in motion. Indianapolis, Fort Wayne, and South Bend properties should also assess now before their utilities implement similar schedules." },
  ],
  contactHeading: "Get a Free Indiana Water Assessment",
  contactBody: "Bloomington is up 46–50% in 2025. Anderson hits 85.5% by 2027. Indiana's rate increases are among the steepest in the Midwest. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Indiana Markets", desc: "Indianapolis, Bloomington, Anderson and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Act Before Next Hike", desc: "Rate increases are already in progress" },
  ],
  source: "perfectwatervalve.com/locations/indiana",
  seoTitle: "Indiana Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Indiana. Bloomington up 46–50% in 2025. Anderson facing 85.5% by 2027. Guaranteed savings in writing. Free assessment available.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/indiana",
};

export default function Indiana() {
  return <LocationPage config={config} />;
}
