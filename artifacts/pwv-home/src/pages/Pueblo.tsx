import LocationPage from "./LocationTemplate";

const CO_OTHER_CITIES = [
  { name: "Denver", slug: "colorado/denver" },
  { name: "Colorado Springs", slug: "colorado/colorado-springs" },
  { name: "Aurora", slug: "colorado/aurora" },
  { name: "Fort Collins", slug: "colorado/fort-collins" },
  { name: "Lakewood", slug: "colorado/lakewood" },
  { name: "Boulder", slug: "colorado/boulder" },
  { name: "Loveland", slug: "colorado/loveland" },
  { name: "Greeley", slug: "colorado/greeley" },
  { name: "Arvada", slug: "colorado/arvada" },
];

const config = {
  state: "Pueblo",
  emoji: "🏭",
  headline: "Pueblo Board of Water Works Raised Rates 4.8% in 2024 — Arkansas River Drought Stress Ongoing",
  subheadline: "Pueblo Board of Water Works raised commercial rates 4.8% in 2024 as Pueblo Reservoir and the Arkansas River face intensifying drought stress. Pueblo's industrial and commercial base depends on reliable, affordable water — and Smart Valve™ cuts your metered bill 15%–35% annually, guaranteed.",
  urgencyBadge: "Pueblo Board of Water Works: 4.8% Rate Increase 2024 — Arkansas River Under Drought Stress",
  heroStats: [
    { value: "4.8%", label: "Pueblo Water Rise 2024" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Drought", label: "Arkansas River Stress Active" },
  ],
  whyTitle: "Pueblo's Reservoir-Dependent Water Supply Is Under Escalating Drought and Infrastructure Pressure",
  whyIntro: "Pueblo Board of Water Works raised commercial rates 4.8% in 2024 to fund infrastructure investment and drought resilience. Pueblo's dependence on Pueblo Reservoir and the Arkansas River — both under significant drought stress — means the rate trajectory will continue as supply reliability challenges grow.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Pueblo Board of Water Works: 4.8% Rate Increase in 2024", body: "Pueblo Board of Water Works raised commercial rates 4.8% in 2024 to fund infrastructure upgrades and maintain reliable supply from Pueblo Reservoir. Pueblo's industrial water base means commercial users absorb a significant share of infrastructure investment costs." },
    { icon: "AlertTriangle", color: "orange", title: "Pueblo Reservoir and Arkansas River Under Drought Stress", body: "Pueblo's primary water sources — Pueblo Reservoir and the Arkansas River — are both under drought stress. Low snowpack years directly reduce reservoir inflows, stressing Pueblo Water's ability to maintain reliable supply without significant infrastructure investment." },
    { icon: "Droplets", color: "blue", title: "Industrial and Steel Sector — High Water Intensity Applications", body: "Pueblo's industrial base includes manufacturing, steel, and processing facilities that are among the highest-intensity water users. For these facilities, Smart Valve™'s guaranteed 15% minimum reduction translates to immediate operating cost reduction and improved water efficiency metrics." },
    { icon: "Building2", color: "teal", title: "All Pueblo Commercial Markets Served", body: "Smart Valve™ serves commercial properties throughout Pueblo, including the downtown commercial corridor, Belmont, Northside, and industrial facilities across the Pueblo metro area." },
  ],
  markets: ["Downtown Pueblo", "Belmont", "Northside", "Pueblo West", "Bessemer", "Mesa Junction", "South Side", "Pueblo Industrial Park"],
  faqItems: [
    { q: "What are current commercial water rates in Pueblo?", a: "Pueblo Board of Water Works raised commercial rates 4.8% in 2024. With Pueblo Reservoir and the Arkansas River under drought stress, additional rate increases are likely as the utility invests in drought resilience infrastructure." },
    { q: "Does Pueblo have any rebate programs for commercial water savings?", a: "Contact Perfect Water Valve for current Pueblo Board of Water Works conservation incentive availability. Note: Denver Water rebates do not apply in Pueblo — Pueblo is served exclusively by Pueblo Board of Water Works." },
    { q: "Why is Pueblo Water particularly vulnerable to supply issues?", a: "Pueblo's water supply depends heavily on Pueblo Reservoir and the Arkansas River. Both are directly affected by drought and reduced snowpack. As climate patterns shift, Pueblo Water faces increasing supply uncertainty that drives infrastructure investment and rate increases." },
    { q: "What commercial property types in Pueblo benefit most from Smart Valve™?", a: "Industrial facilities, multifamily residential, hotels, and commercial retail properties throughout the Pueblo metro area. Any property spending $5,000+/month on water qualifies for a free assessment." },
    { q: "How quickly does Smart Valve™ pay for itself in Pueblo?", a: "At current Pueblo Board of Water Works rates with a 15–35% annual consumption reduction, most commercial properties see full cost recovery within 12–24 months. Industrial facilities and high-volume users typically see payback in 6–18 months." },
  ],
  contactHeading: "Get a Free Pueblo Water Assessment",
  contactBody: "Pueblo Board of Water Works raised rates 4.8% in 2024 with Arkansas River drought pressure pointing to further increases. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Pueblo Markets", desc: "Downtown, Belmont, Pueblo West and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/pueblo",
  alsoServing: CO_OTHER_CITIES,
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Pueblo Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Pueblo, CO. Pueblo Board of Water Works up 4.8% in 2024. Arkansas River drought stress ongoing. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/pueblo",
};

export default function Pueblo() {
  return <LocationPage config={config} />;
}
