import LocationPage from "./LocationTemplate";

const config = {
  state: "Nebraska",
  emoji: "🌽",
  headline: "Omaha's Water Rates Are Up 9% Over 2 Years — Smart Valve™ Cuts Commercial Bills 15–58%",
  subheadline: "Metropolitan Utilities District raised Omaha commercial water rates significantly over the last two years. Nebraska faces Ogallala Aquifer depletion that's becoming a regulatory priority. Lincoln increased rates 7.5% in 2025. Smart Valve™ delivers guaranteed savings.",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "9%", label: "Omaha Rate Rise (2yr)" },
    { value: "NSF", label: "61 & 372 Certified" },
  ],
  whyTitle: "Nebraska Commercial Properties Face Rising Rates and the Looming Ogallala Aquifer Crisis",
  whyIntro: "The Ogallala Aquifer supplies the majority of Nebraska's water. Over-pumping is causing water tables to drop in significant parts of the state, and regulators are beginning to take action — starting with rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "MUD Omaha +9% Over 2 Years", body: "Metropolitan Utilities District raised Omaha commercial water rates approximately 9% over the last two years. Lincoln increased 7.5% in 2025. Both utilities cite infrastructure aging and Ogallala Aquifer management costs." },
    { icon: "AlertTriangle", color: "orange", title: "Ogallala Aquifer Depletion Risk", body: "The Ogallala Aquifer is being pumped faster than it recharges across Nebraska and the broader High Plains region. This long-term supply risk is driving state policy toward mandatory commercial conservation measures." },
    { icon: "Building2", color: "blue", title: "Food & Beverage Processing — High ROI", body: "Nebraska is one of the nation's largest food processing states. Meat processing, ethanol, and food manufacturing facilities have extremely high water intensity — some of the strongest Smart Valve™ ROI scenarios in the country." },
    { icon: "Activity", color: "teal", title: "Healthcare & Higher Education", body: "Omaha's healthcare sector (Nebraska Medicine, CHI Health, Children's Hospital) and university campuses are high water intensity institutional users. Smart Valve™ is proven in healthcare environments." },
    { icon: "DollarSign", color: "yellow", title: "No Competing Smart Valve™ Installers", body: "Nebraska has minimal Smart Valve™ market penetration. AWS has identified Nebraska as a significant first-mover opportunity — commercial properties here get the technology before it becomes common, locking in competitive advantage." },
    { icon: "Building2", color: "purple", title: "All Nebraska Markets Served", body: "Omaha, Lincoln, Bellevue, Grand Island, Kearney, Fremont, Hastings, and all Nebraska markets." }
  ],
  markets: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk"],
  faqItems: [
    { q: "Does Smart Valve™ work for food processing facilities in Nebraska?", a: "Yes. Food processing is one of the strongest Smart Valve™ ROI applications. Nebraska's meat processing and food manufacturing facilities have extremely high water intensity, and the guaranteed 15%+ reduction delivers significant dollar savings even at lower percentage improvement rates." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Nebraska commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Nebraska Water Assessment",
  contactBody: "Omaha rates up 9% over two years. Nebraska is a first-mover market for Smart Valve™ with minimal competition. Get your assessment now.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Nebraska Markets", desc: "Omaha, Lincoln, Grand Island and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "First-Mover Advantage", desc: "Minimal Smart Valve™ competition in Nebraska" },
  ],
  source: "perfectwatervalve.com/locations/nebraska",
};

export default function Nebraska() {
  return <LocationPage config={config} />;
}
