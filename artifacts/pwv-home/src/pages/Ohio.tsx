import LocationPage from "./LocationTemplate";

const config = {
  state: "Ohio",
  emoji: "🌕",
  headline: "Ohio Water Rates Soaring — Columbus Up 7%, Tallmadge Up 10% in 2025 Then 15% Annually",
  subheadline: "Tallmadge is raising commercial water rates 10% in 2025, then 15% annually from 2026 through 2028. Columbus raised commercial rates 7% in 2025. Aqua Ohio has proposed 10–12% increases. Ohio commercial properties face some of the most aggressively scheduled rate increases in the Midwest. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Tallmadge OH: 10% in 2025 Then 15%/yr 2026–2028 | Columbus: 7% in 2025",
  heroStats: [
    { value: "15%/yr", label: "Tallmadge 2026–2028 Annual Rise" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "7%", label: "Columbus Rate Rise 2025" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Ohio's Multi-Year Rate Increase Schedules Are Locking in Compounding Costs for Commercial Properties",
  whyIntro: "Ohio is unique in the severity and multi-year commitment of its commercial water rate increases. Tallmadge's schedule — 10% in 2025 followed by 15% annually through 2028 — represents a compound increase of nearly 60% over four years. Columbus's 7% increase and Aqua Ohio's proposed 10–12% raise affect the majority of Ohio's commercial market.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Tallmadge: 10% in 2025, Then 15%/Year 2026–2028", body: "Tallmadge, Ohio has approved a commercial rate increase schedule of 10% in 2025, followed by 15% annually from 2026 through 2028. This multi-year committed schedule means commercial properties cannot avoid these increases — every year they remain high-volume consumers, they pay substantially more." },
    { icon: "AlertTriangle", color: "orange", title: "Columbus 7%, Aqua Ohio 10–12% Proposed — Statewide Pattern", body: "Columbus, Ohio's largest city, raised commercial water rates 7% in 2025. Aqua Ohio has proposed increases in the 10–12% range. These large-city increases combined with smaller municipality extremes like Tallmadge reflect a statewide infrastructure investment crisis that will continue to drive rate increases across Ohio." },
    { icon: "DollarSign", color: "blue", title: "Aging Infrastructure: Ohio's Water System Investment Backlog", body: "Ohio's water infrastructure has an enormous investment backlog — aging pipes, outdated treatment systems, and distribution networks that require comprehensive modernization. This is not a temporary expenditure cycle but a generational infrastructure program that will be funded through commercial rate increases for years." },
    { icon: "Building2", color: "teal", title: "All Ohio Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, Tallmadge, Canton, and all Ohio commercial corridors." },
  ],
  markets: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Canton", "Youngstown"],
  faqItems: [
    { q: "How much will Tallmadge's rate schedule cost my business over 4 years?", a: "A property paying $10,000/month in 2024 will pay approximately $16,000/month by 2028 if the Tallmadge schedule is fully implemented — a 60% cumulative increase. Smart Valve™'s 15–58% consumption reduction compresses each year's impact, protecting your budget throughout the cycle." },
    { q: "Does Smart Valve™ work with Columbus and Ohio utility meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Columbus Division of Water, Cleveland Water, Aqua Ohio, and all Ohio municipal utility systems." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Ohio property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Ohio commercial properties should act soonest?", a: "Tallmadge properties should act immediately given the aggressive multi-year schedule. Columbus, Cleveland, Cincinnati, and Akron properties should also act now before their utilities implement similar commitments." },
  ],
  contactHeading: "Get a Free Ohio Water Assessment",
  contactBody: "Tallmadge is locked in for 15%/year through 2028. Columbus up 7%. Aqua Ohio has 10–12% proposed. Smart Valve™ guarantees at least 15% off your metered bill — before the next hike.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Ohio Markets", desc: "Columbus, Cleveland, Cincinnati and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Act Before Next Hike", desc: "Multi-year rate schedules already approved" },
  ],
  source: "perfectwatervalve.com/locations/ohio",
  showDataCenterSection: true,
  seoTitle: "Ohio Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Ohio. Tallmadge up 10% then 15%/yr through 2028. Columbus up 7%. Aqua Ohio 10–12% proposed. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/ohio",
};

export default function Ohio() {
  return <LocationPage config={config} />;
}
