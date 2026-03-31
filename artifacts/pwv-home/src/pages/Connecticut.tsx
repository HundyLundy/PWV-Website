import LocationPage from "./LocationTemplate";

const config = {
  state: "Connecticut",
  emoji: "🏛️",
  headline: "Connecticut Water Rates Up 5.45% Now — 19% Hike Proposed for 2027",
  subheadline: "Connecticut Water Company implemented a 5.45% commercial rate increase in 2024, with a 19% rate hike proposed for 2027. South Central Connecticut Regional Water Authority is up 3.4% for July 2026. PFAS contamination remediation is driving massive infrastructure investment across the state. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "19% Rate Hike Proposed for CT Water Company in 2027",
  heroStats: [
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "5.45%", label: "CT Water 2024 Increase" },
    { value: "19%", label: "Proposed 2027 Hike" },
  ],
  whyTitle: "Connecticut Commercial Properties Face PFAS Remediation Costs and Stacked Rate Increases",
  whyIntro: "Connecticut water utilities are facing a perfect storm: aging infrastructure investment requirements compounded by costly PFAS contamination remediation programs. These dual pressures are driving some of the largest proposed rate increases in the state's history — and commercial properties bear the largest share of the cost.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "CT Water: 5.45% Increase Already Active, 19% Proposed for 2027", body: "Connecticut Water Company raised commercial rates 5.45% in 2024. But the bigger threat is the 19% rate hike currently proposed for 2027. If approved, this will represent one of the largest single-year increases in Connecticut commercial water history. Properties that reduce consumption now will save on both increases." },
    { icon: "AlertTriangle", color: "orange", title: "PFAS Contamination Driving Massive Infrastructure Costs", body: "PFAS contamination in Connecticut's water supply is requiring expensive treatment upgrades across the state. These costs are not discretionary — they are regulatory mandates. Utilities pass them directly to commercial customers through rate increases that will continue for years as remediation programs progress." },
    { icon: "DollarSign", color: "blue", title: "South Central CT Regional Water Authority Up 3.4% in July 2026", body: "The South Central Connecticut Regional Water Authority is implementing a 3.4% commercial rate increase effective July 2026. Combined with CT Water's increases and proposed hikes, Connecticut commercial properties face stacked rate increases across multiple utilities." },
    { icon: "Building2", color: "teal", title: "All Connecticut Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Hartford, New Haven, Bridgeport, Stamford, Waterbury, Norwalk, Danbury, and all Connecticut commercial corridors." },
  ],
  markets: ["Hartford", "New Haven", "Bridgeport", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain"],
  faqItems: [
    { q: "Does Smart Valve™ work with Connecticut Water Company meters?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by CT Water, South Central CT RWA, Aquarion, and all Connecticut utilities." },
    { q: "How will the proposed 19% CT Water increase affect my business?", a: "A 19% increase on top of existing base rates represents a compounding cost shock. For a property spending $20,000/month on water, that could mean $3,800 more per month — or $45,600 more per year. Smart Valve™ cuts your consumption 15–58%, offsetting a large portion or all of that increase." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption. If your Connecticut property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Connecticut industries benefit most?", a: "Healthcare, office buildings, multifamily residential, and hospitality in Hartford, Stamford, and New Haven have the strongest ROI profile. Facilities spending $5,000+/month on water are ideal candidates." },
  ],
  contactHeading: "Get a Free Connecticut Water Assessment",
  contactBody: "CT Water raised rates 5.45% and is proposing 19% more in 2027. PFAS remediation means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All CT Markets", desc: "Hartford, Stamford, New Haven and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/connecticut",
  seoTitle: "Connecticut Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Connecticut. CT Water up 5.45%, 19% hike proposed for 2027. PFAS remediation driving rates higher. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/connecticut",
};

export default function Connecticut() {
  return <LocationPage config={config} />;
}
