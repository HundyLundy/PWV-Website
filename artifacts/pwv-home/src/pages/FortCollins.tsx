import LocationPage from "./LocationTemplate";

const config = {
  state: "Fort Collins",
  emoji: "🎓",
  headline: "Fort Collins Water Raising Rates — University and Tech Sector Growth Adding Demand",
  subheadline: "Fort Collins Utilities is raising commercial water rates to fund infrastructure investment and drought resilience. Fort Collins hosts Colorado State University and a growing tech and biotech sector — creating high commercial water demand against a constrained supply from Poudre River and Horsetooth Reservoir. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Fort Collins Utilities: Rate Increases Active | Poudre River Drought Stress",
  heroStats: [
    { value: "Active", label: "Rate Increases 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Drought", label: "Poudre River Supply Stress" },
  ],
  whyTitle: "Fort Collins' Growing University and Tech Economy Is Creating Commercial Water Demand Against a Drought-Stressed Supply",
  whyIntro: "Fort Collins Utilities serves a diverse commercial market anchored by Colorado State University, a growing tech and biotech corridor, and established commercial districts. Drought stress on the Poudre River and Horsetooth Reservoir — Fort Collins' primary water sources — is driving infrastructure investment and conservation programs funded through commercial rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Fort Collins Utilities Implementing Commercial Rate Increases", body: "Fort Collins Utilities is raising commercial water rates to fund drought resilience infrastructure and maintain reliable supply from the Poudre River system and Horsetooth Reservoir. Rate increases reflect both infrastructure investment needs and the rising cost of water treatment and conservation programs." },
    { icon: "AlertTriangle", color: "orange", title: "Poudre River Drought Stress — Fort Collins' Primary Source", body: "The Cache la Poudre River is Fort Collins' primary water source and is experiencing significant stress from Colorado drought conditions. Reduced snowpack in the upstream Rocky Mountain watershed means lower river flows and reduced Horsetooth Reservoir levels, driving conservation mandates for commercial customers." },
    { icon: "Droplets", color: "blue", title: "CSU Research and Biotech — High-Volume Water Users", body: "Colorado State University and Fort Collins' growing biotech and research sector are significant commercial water users. For these facilities, water consumption is integral to operations — making Smart Valve™'s guaranteed 15–58% reduction both a cost saving and an operational efficiency improvement." },
    { icon: "Building2", color: "teal", title: "All Fort Collins Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Old Town Fort Collins, Midtown, the Foothills Mall corridor, CSU Research campus, and the broader Larimer County commercial market." },
  ],
  markets: ["Old Town", "Midtown", "CSU Campus", "Foothills Mall", "East Mulberry", "Harmony Corridor", "South College", "Lemay"],
  faqItems: [
    { q: "Does Smart Valve™ work with Fort Collins Utilities meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by Fort Collins Utilities. Installation is completed in 2–4 hours by a licensed Colorado technician." },
    { q: "How does Poudre River drought stress affect Fort Collins commercial costs?", a: "Reduced Poudre River flows require Fort Collins Utilities to rely more heavily on storage, alternative sources, and more expensive treatment processes. These costs drive rate increases and conservation mandates. Smart Valve™ reduces your metered consumption, cutting your bill and supporting conservation compliance." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, contractually. If your Fort Collins property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Fort Collins commercial properties benefit most?", a: "CSU-adjacent research facilities, hotels, healthcare properties, and office buildings in the Harmony Corridor and Midtown have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Fort Collins Water Assessment",
  contactBody: "Fort Collins Utilities is raising rates while Poudre River drought stress reduces supply. Conservation mandates are active. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "Fort Collins Metro", desc: "Old Town, Midtown, CSU and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/fort-collins",
  seoTitle: "Fort Collins Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Fort Collins, CO. Poudre River drought stress. Fort Collins Utilities raising rates. CSU and tech sector high-volume users. Guaranteed in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/fort-collins",
};

export default function FortCollins() {
  return <LocationPage config={config} />;
}
