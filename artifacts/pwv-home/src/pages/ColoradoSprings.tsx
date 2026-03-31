import LocationPage from "./LocationTemplate";

const config = {
  state: "Colorado Springs",
  emoji: "⛰️",
  headline: "Colorado Springs Utilities Raising Water Rates — Drought Conditions Severe in 2025",
  subheadline: "Colorado Springs Utilities is implementing commercial water rate increases driven by severe drought conditions and significant infrastructure investment requirements. Colorado Springs is the second-largest city in Colorado and a major commercial market facing the same drought-driven rate pressure as Denver. Smart Valve™ cuts your bill 15–58%, guaranteed.",
  urgencyBadge: "Colorado Springs Utilities: Commercial Rate Increases Active 2025 — Drought Emergency Conditions",
  heroStats: [
    { value: "Severe", label: "Drought Conditions 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Active", label: "Conservation Mandates in Force" },
  ],
  whyTitle: "Colorado Springs Faces Severe Drought and Rate Increases as the Front Range Water Supply Tightens",
  whyIntro: "Colorado Springs Utilities is implementing commercial rate increases driven by a confluence of severe drought, infrastructure investment requirements, and the growing water demands of Colorado Springs' expanding commercial and residential market. Colorado Springs' location on the Front Range makes it particularly vulnerable to drought-driven supply constraints.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Colorado Springs Utilities Implementing Rate Increases in 2025", body: "Colorado Springs Utilities is raising commercial water rates to fund infrastructure investment and drought resilience programs. As Colorado's second-largest city, Colorado Springs' water system serves a large and growing commercial market that requires ongoing investment." },
    { icon: "AlertTriangle", color: "orange", title: "Severe Drought: Front Range Water Supply Under Extreme Stress", body: "Colorado Springs draws water from mountain snowpack and transmountain diversion systems. 2025 drought conditions are severely stressing these sources. Conservation mandates are in force, and commercial properties that fail to reduce consumption risk penalties and permit restrictions." },
    { icon: "Droplets", color: "blue", title: "Military and Defense Sector — Colorado Springs' Major Water Users", body: "Colorado Springs hosts Fort Carson, Peterson Space Force Base, and multiple defense contractors — all significant commercial water users. For these facilities, Smart Valve™'s guaranteed 15% minimum reduction translates directly to reduced operational costs and improved ESG metrics." },
    { icon: "Building2", color: "teal", title: "All Colorado Springs Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Colorado Springs, Monument, Manitou Springs, Black Forest, and the broader El Paso County commercial market." },
  ],
  markets: ["Downtown Colorado Springs", "North Colorado Springs", "Briargate", "Fountain", "Monument", "Manitou Springs", "Security-Widefield", "Fort Carson"],
  faqItems: [
    { q: "How fast are water rates rising in Colorado Springs?", a: "Colorado Springs Utilities is raising commercial water rates 6.5% per year through 2029. That compounds to over 37% total increase over 5 years for commercial properties that do not reduce consumption." },
    { q: "Does Colorado Springs have a rebate program for water savings devices?", a: "Contact Perfect Water Valve for current Colorado Springs Utilities rebate availability. Rebate programs vary by year and budget cycle." },
    { q: "What commercial property types does Perfect Water Valve serve in Colorado Springs?", a: "Hotels, multifamily residential, hospitals, office buildings, car washes, and industrial facilities throughout the Colorado Springs metro area." },
    { q: "How does Smart Valve™ installation work in Colorado Springs?", a: "A licensed plumber installs Smart Valve™ on the main supply line in under 4 hours. Perfect Water Valve coordinates the installation and handles all paperwork for rebate applications." },
  ],
  contactHeading: "Get a Free Colorado Springs Water Assessment",
  contactBody: "Colorado Springs Utilities is raising rates while drought conditions are severe. Conservation mandates are active. Smart Valve™ guarantees at least 15% off your metered bill — or we make it right.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "Colorado Springs Metro", desc: "Downtown, North Springs, Briargate and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Conservation Compliance", desc: "Helps meet active mandate thresholds" },
  ],
  source: "perfectwatervalve.com/locations/colorado/colorado-springs",
  alsoServing: [
    { name: "Denver", slug: "colorado/denver" },
    { name: "Aurora", slug: "colorado/aurora" },
    { name: "Fort Collins", slug: "colorado/fort-collins" },
    { name: "Lakewood", slug: "colorado/lakewood" },
    { name: "Boulder", slug: "colorado/boulder" },
    { name: "Pueblo", slug: "colorado/pueblo" },
    { name: "Loveland", slug: "colorado/loveland" },
    { name: "Greeley", slug: "colorado/greeley" },
    { name: "Arvada", slug: "colorado/arvada" },
  ],
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Colorado Springs Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15–58% in Colorado Springs. Severe drought conditions in 2025. Colorado Springs Utilities raising rates. Conservation mandates active. Guaranteed in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/colorado-springs",
};

export default function ColoradoSprings() {
  return <LocationPage config={config} />;
}
