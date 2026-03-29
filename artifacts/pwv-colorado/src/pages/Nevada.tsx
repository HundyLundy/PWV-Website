import LocationPage from "./LocationTemplate";

const config = {
  state: "Nevada",
  emoji: "🎰",
  headline: "Las Vegas Has a Mandatory 30% Water Reduction Target by 2035 — Smart Valve™ Gets You There Without Disrupting Operations",
  subheadline: "Lake Mead is at historically low levels. SNWA has set binding conservation goals. The Las Vegas Valley Water District uses a four-tier rate system where higher consumption triggers progressively higher rates. Smart Valve™ cuts 15–58% — guaranteed.",
  urgencyBadge: "SNWA Binding 30% Reduction Target by 2035 · Lake Mead Critical Levels",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "30%", label: "SNWA Reduction Target" },
    { value: "4-Tier", label: "LVVWD Rate System" },
  ],
  whyTitle: "Nevada's Water Supply Is in a Declared Crisis — and Commercial Properties Are on the Front Lines",
  whyIntro: "Lake Mead, which supplies 90% of Las Vegas's water, has been at historically low levels for years. This is the defining water story of Southern Nevada and every commercial property owner in the region knows it.",
  whyPoints: [
    { icon: "AlertTriangle", color: "red", title: "SNWA Binding 86 gal/day/capita by 2035", body: "The Southern Nevada Water Authority has set a binding conservation goal of 86 gallons per capita per day by 2035. Commercial properties that can't demonstrate compliance with conservation targets face regulatory scrutiny and permit restrictions on expansion." },
    { icon: "TrendingUp", color: "orange", title: "Four-Tier Rate Penalty System", body: "The Las Vegas Valley Water District uses a four-tier rate system where higher consumption triggers progressively higher per-gallon rates. Large commercial users are almost always in the top tiers — meaning Smart Valve™ doesn't just reduce your volume, it drops you to lower rate tiers." },
    { icon: "Droplets", color: "blue", title: "Lake Mead — Critically Low Levels", body: "Lake Mead, which supplies 90% of Las Vegas water, has been at critically low levels for years. SNWA has publicly stated that current conservation pace is insufficient to meet long-term supply needs. Commercial water access is at real long-term risk." },
    { icon: "DollarSign", color: "yellow", title: "SNWA Conservation Rebates Available", body: "SNWA offers commercial rebates for water-saving retrofits. Smart Valve™ installations with verified M&V data qualify for rebate applications. We assist with documentation and filing." },
    { icon: "Activity", color: "teal", title: "Compliance Documentation Required", body: "Nevada commercial properties with high water consumption are increasingly required to submit conservation plans to regulators. Smart Valve™ M&V reporting provides the documentation proof needed for regulatory compliance." },
    { icon: "Building2", color: "purple", title: "All Nevada Markets Served", body: "Las Vegas, Henderson, Reno, Sparks, North Las Vegas, and all Nevada markets. AWS and CWS certified." }
  ],
  markets: ["Las Vegas", "Henderson", "Reno", "Sparks", "North Las Vegas", "Paradise", "Sunrise Manor", "Spring Valley"],
  faqItems: [
    { q: "How does Smart Valve™ help with SNWA conservation compliance?", a: "Smart Valve™ produces independently verified M&V data documenting your actual water consumption reduction. This documentation satisfies SNWA compliance reporting requirements and demonstrates measurable progress toward conservation targets." },
    { q: "Does the four-tier rate system make Smart Valve™ more valuable in Nevada?", a: "Yes. Because LVVWD's tiered rates charge progressively more per gallon at higher usage levels, reducing your consumption with Smart Valve™ can drop you into a lower rate tier — meaning your savings are greater than the percentage reduction alone suggests." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "Does Smart Valve™ work in desert climate conditions?", a: "Yes. The Smart Valve™ is fully passive and operates in all temperature and pressure conditions, including Nevada's extreme heat and the pressure fluctuations common in desert municipal systems." },
  ],
  contactHeading: "Get a Free Nevada Water Assessment",
  contactBody: "SNWA's binding conservation targets and Lake Mead's declining levels make water efficiency a compliance issue — not just a cost issue. Act now.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Nevada Markets", desc: "Las Vegas, Henderson, Reno and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance Docs", desc: "M&V reporting satisfies SNWA requirements" },
  ],
  source: "perfectwatervalve.com/locations/nevada",
};

export default function Nevada() {
  return <LocationPage config={config} />;
}
