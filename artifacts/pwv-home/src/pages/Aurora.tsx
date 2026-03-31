import LocationPage from "./LocationTemplate";

const config = {
  state: "Aurora",
  emoji: "🌅",
  headline: "Aurora Water Rates Rising — Colorado Drought Straining Reservoir Supply",
  subheadline: "Aurora Water is implementing commercial rate increases driven by Colorado's ongoing drought conditions. Aurora's complex water portfolio — spanning multiple river systems and reservoir storage — is under stress, requiring infrastructure investment and conservation programs that are funded through commercial rate increases. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Aurora Water: Rate Increases Active 2025 | Colorado Drought Reservoir Levels Below Average",
  heroStats: [
    { value: "Active", label: "Aurora Rate Increases 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Drought", label: "Reservoir Levels Below Average" },
  ],
  whyTitle: "Aurora's Multi-Source Water Portfolio Is Under Drought Stress — Commercial Rates Rising to Compensate",
  whyIntro: "Aurora Water manages one of Colorado's most complex water portfolios, drawing from multiple river systems and reservoir storage to serve the state's third-largest city. Colorado's drought conditions are reducing water availability across all these sources simultaneously, requiring expensive drought resilience investments that are funded through commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Aurora Water Implementing Commercial Rate Increases in 2025", body: "Aurora Water is raising commercial water rates to fund drought resilience infrastructure and maintain reliable supply from its diverse portfolio of water rights and storage facilities. As Aurora's commercial market continues to grow, infrastructure investment requirements are accelerating." },
    { icon: "AlertTriangle", color: "orange", title: "Colorado Drought: Reservoir Levels and Snowpack Below Average", body: "Aurora's water supply depends on mountain snowpack and reservoir storage across multiple Colorado river systems. Drought conditions have reduced snowpack and reservoir levels below historical averages, stressing Aurora's supply reliability. Conservation mandates are in force for commercial properties." },
    { icon: "Droplets", color: "blue", title: "Aurora's Tech and Medical Corridor — High Commercial Water Demand", body: "Aurora hosts a growing tech corridor, Anschutz Medical Campus (one of the largest academic medical campuses in the US), and major commercial development along the I-225 corridor. These high-volume commercial water users are the strongest ROI candidates for Smart Valve™ installations." },
    { icon: "Building2", color: "teal", title: "All Aurora Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Aurora, from the I-225 corridor and Anschutz to Southlands and the DIA corridor along E-470." },
  ],
  markets: ["Anschutz Medical Campus", "I-225 Corridor", "Southlands", "DIA Corridor", "Gateway Park", "Aurora Highlands", "Stapleton", "Fitzsimons"],
  faqItems: [
    { q: "Does Smart Valve™ work with Aurora Water meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Aurora Water. Installation is completed in 2–4 hours by a licensed Colorado technician." },
    { q: "How does Colorado's drought specifically affect Aurora's water supply?", a: "Aurora draws water from multiple Colorado river systems and reservoir storage. Drought reduces snowpack across all source basins simultaneously, reducing total available supply. Aurora Water's conservation mandates and rate increases are direct responses to this supply pressure." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Aurora property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Aurora commercial properties benefit most?", a: "Healthcare facilities at Anschutz, office buildings along the I-225 tech corridor, hotels near DIA, and multifamily complexes across Aurora have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Aurora Water Assessment",
  contactBody: "Aurora Water is raising rates while Colorado drought stresses reservoir levels. Conservation mandates are active. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Aurora Markets", desc: "Anschutz, I-225, Southlands and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/aurora",
  seoTitle: "Aurora CO Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Aurora, CO. Aurora Water raising rates. Colorado drought reducing reservoir levels. Conservation mandates active. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/aurora",
};

export default function Aurora() {
  return <LocationPage config={config} />;
}
