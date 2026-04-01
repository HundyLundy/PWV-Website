import LocationPage from "./LocationTemplate";

const config = {
  state: "Arizona",
  emoji: "🌵",
  headline: "Phoenix Is the Fastest-Growing City in America — in the Middle of a 25-Year Drought. Water Efficiency Isn't Optional.",
  subheadline: "Arizona is in a two-decade megadrought. The Colorado River hit Tier 2 shortage status in 2023. Tucson approved 3.5% annual rate increases through 2029. SRP offers commercial rebates up to $450,000. Smart Valve™ guarantees 15%–35% annually savings.",
  urgencyBadge: "Colorado River Tier 2 Shortage · Tucson +3.5%/yr through 2029",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "3.5%", label: "Tucson Annual Rate Rise" },
    { value: "$450K", label: "SRP Rebate Available" },
  ],
  whyTitle: "Arizona's Drought Crisis Is Pushing Commercial Water Costs Higher Every Year",
  whyIntro: "Two decades of megadrought have reduced Colorado River flows to historic lows. Arizona has cut hundreds of thousands of acre-feet from its allocation. Every Front Range commercial property is exposed.",
  whyPoints: [
    { icon: "AlertTriangle", color: "red", title: "Colorado River Tier 2 Shortage — 2023", body: "The Colorado River hit Tier 2 shortage status in 2023, forcing Arizona to cut its Colorado River usage by hundreds of thousands of acre-feet. This is not a temporary drought cycle — it's a structural supply reduction affecting every Arizona utility." },
    { icon: "TrendingUp", color: "orange", title: "Tucson — 3.5%/yr Through 2029", body: "Tucson approved annual water rate increases of 3.5% per year through fiscal year 2029–2030, affecting all commercial users. Compounded over 4 years, commercial water costs in Tucson will increase by over 15% from baseline — before factoring in any usage growth." },
    { icon: "DollarSign", color: "yellow", title: "SRP Rebates Up to $450,000", body: "Salt River Project (SRP) offers commercial rebates up to $50,000 for cooling tower upgrades and up to $450,000 across a portfolio of efficiency projects. Smart Valve™ qualifies. We help you file the application." },
    { icon: "Droplets", color: "blue", title: "Phoenix — Fastest-Growing Market in US", body: "Phoenix is the fastest-growing major city in America — adding commercial real estate demand to an already strained water system. New commercial properties face tiered rates from day one with no rate relief in sight." },
    { icon: "Activity", color: "teal", title: "Drought Restrictions Are Becoming Permanent", body: "Arizona drought restrictions that began as temporary measures are increasingly being codified as permanent commercial water use standards. Properties that reduce consumption now avoid the compliance scramble and fines that come with mandatory restrictions." },
    { icon: "Building2", color: "purple", title: "All Arizona Markets Served", body: "Phoenix, Tucson, Scottsdale, Mesa, Chandler, Tempe, Gilbert, and all Arizona markets. Both AWS and CWS certified." }
  ],
  markets: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Chandler", "Tempe", "Gilbert", "Peoria"],
  faqItems: [
    { q: "Does Smart Valve™ qualify for SRP rebates?", a: "Yes. SRP offers rebates up to $450,000 for commercial water efficiency projects across a portfolio. Smart Valve™ installations with M&V documentation qualify. We help you file the rebate application." },
    { q: "How does Arizona's drought affect air entrapment?", a: "Drought conditions cause municipal systems to draw from deeper, more pressurized sources — increasing line pressure fluctuations that create air entrapment in commercial supply lines. Arizona's conditions actually increase the frequency and severity of the phantom billing problem Smart Valve™ solves." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Arizona commercial installations complete in 2–4 hours with zero disruption to operations." },
    { q: "Does the heat affect Smart Valve™ performance?", a: "No. The Smart Valve™ is fully passive and operates in all temperature conditions, including Arizona's extreme summer heat." },
  ],
  contactHeading: "Get a Free Arizona Water Assessment",
  contactBody: "Arizona's drought conditions, rising rates, and SRP rebates create a compelling case for immediate action. Let us show you your exact savings.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Arizona Markets", desc: "Phoenix, Tucson, Scottsdale and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "SRP Rebate Assistance", desc: "We help you file for up to $450,000" },
  ],
  source: "perfectwatervalve.com/locations/arizona",
};

export default function Arizona() {
  return <LocationPage config={config} />;
}
