import LocationPage from "./LocationTemplate";

const config = {
  state: "Mississippi",
  emoji: "🎶",
  headline: "Mississippi Faces Back-to-Back Rate Hikes — 13% in 2024, 12% Approved in 2026",
  subheadline: "JXN Water in Jackson implemented a 13% commercial rate increase in January 2024, with a 12% increase approved for February 2026. Mississippi's water infrastructure is in a state of crisis, with Jackson's water system having faced federal intervention. Smart Valve™ cuts your bill 15%–35% annually, guaranteed.",
  urgencyBadge: "JXN Water Jackson: 13% in 2024, 12% Approved for 2026",
  heroStats: [
    { value: "13%", label: "JXN Water Hike Jan 2024" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "12%", label: "JXN Water Approved Feb 2026" },
    { value: "58.69%", label: "Peak Savings Verified" },
  ],
  whyTitle: "Mississippi's Water Infrastructure Crisis Is Creating Compounding Rate Increases for Commercial Properties",
  whyIntro: "Mississippi's commercial water customers — particularly in Jackson — face some of the most significant rate increases in the Southeast. Jackson's water system has been under federal oversight, requiring massive infrastructure investment that is being funded through sequential rate increases. The 13% increase in 2024 followed by an approved 12% in 2026 represents compounding costs for every commercial property in the JXN Water service area.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "JXN Water: 13% in January 2024", body: "JXN Water implemented a 13% commercial rate increase in January 2024 — one of the steepest single-year increases in Mississippi's modern utility history. This increase was necessitated by the catastrophic infrastructure failures that led to federal oversight of Jackson's water system." },
    { icon: "AlertTriangle", color: "orange", title: "12% Increase Approved for February 2026 — Compounding on 2024", body: "A 12% increase has been approved for February 2026, compounding on top of the 2024 increase. For commercial properties that remained at the same consumption level, the combined effect is a 26.6% increase over the 2023 baseline — before any additional increases beyond 2026." },
    { icon: "DollarSign", color: "blue", title: "Federal Infrastructure Investment = Long-Term Rate Pressure", body: "Jackson's water system requires hundreds of millions of dollars in infrastructure investment to meet federal standards. This investment will be funded through rate increases over many years. Mississippi commercial customers should expect continued annual increases as system rehabilitation progresses." },
    { icon: "Building2", color: "teal", title: "All Mississippi Commercial Markets Served", body: "Smart Valve™ serves commercial properties across Jackson, Gulfport, Southaven, Hattiesburg, Biloxi, Meridian, Tupelo, and all Mississippi commercial corridors." },
  ],
  markets: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo", "Olive Branch"],
  faqItems: [
    { q: "Does Smart Valve™ work with JXN Water meters in Jackson?", a: "Yes. Smart Valve™ is compatible with 99% of commercial water meters, including all meter types used by JXN Water and all Mississippi municipal utility systems." },
    { q: "How long will Jackson's water rate increases continue?", a: "JXN Water's infrastructure rehabilitation is a multi-year program under federal oversight. Rate increases will continue until the system meets federal standards — a process expected to span multiple years. Smart Valve™'s guaranteed 15% reduction offsets a portion of every future increase." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation guarantees at least 15% reduction in metered water consumption, in writing. If your Mississippi property doesn't reach 15%, we resolve it at no cost." },
    { q: "Which Mississippi commercial properties benefit most?", a: "Office buildings, healthcare facilities, multifamily complexes, and hotels in Jackson, Gulfport, and Hattiesburg have the strongest ROI profile. Any property with a $5,000+/month water bill qualifies." },
  ],
  contactHeading: "Get a Free Mississippi Water Assessment",
  contactBody: "JXN Water hit 13% in 2024 and has 12% approved for 2026. Federal infrastructure rehab means increases will continue. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Mississippi Markets", desc: "Jackson, Gulfport, Hattiesburg and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/mississippi",
  seoTitle: "Mississippi Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Mississippi. JXN Water 13% in 2024, 12% approved for 2026. Federal infrastructure investment driving rates higher. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/mississippi",
};

export default function Mississippi() {
  return <LocationPage config={config} />;
}
