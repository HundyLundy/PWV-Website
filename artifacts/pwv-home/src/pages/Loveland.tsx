import LocationPage from "./LocationTemplate";

const CO_OTHER_CITIES = [
  { name: "Denver", slug: "colorado/denver" },
  { name: "Colorado Springs", slug: "colorado/colorado-springs" },
  { name: "Aurora", slug: "colorado/aurora" },
  { name: "Fort Collins", slug: "colorado/fort-collins" },
  { name: "Lakewood", slug: "colorado/lakewood" },
  { name: "Boulder", slug: "colorado/boulder" },
  { name: "Pueblo", slug: "colorado/pueblo" },
  { name: "Greeley", slug: "colorado/greeley" },
  { name: "Arvada", slug: "colorado/arvada" },
];

const config = {
  state: "Loveland",
  emoji: "🏔️",
  headline: "City of Loveland Water Up 6.2% in 2025 — Northern Colorado Water Constraints Intensifying",
  subheadline: "City of Loveland Water & Power raised commercial rates 6.2% in 2025 as Northern Colorado faces some of the most acute water supply constraints in the state. Rapid population growth, drought, and infrastructure demands are driving rates up — and Smart Valve™ cuts your metered bill 15%–35% annually, guaranteed.",
  urgencyBadge: "City of Loveland Water & Power: 6.2% Rate Increase Active 2025 — Northern CO Supply Constraints Acute",
  heroStats: [
    { value: "6.2%", label: "Loveland Water Rise 2025" },
    { value: "≥15%", label: "Guaranteed Minimum" },
    { value: "58.69%", label: "Peak Savings Verified" },
    { value: "Acute", label: "Northern CO Supply Constraints" },
  ],
  whyTitle: "Northern Colorado's Fastest-Growing Corridor Is Facing the Steepest Water Rate Pressure in the Region",
  whyIntro: "City of Loveland Water & Power raised commercial rates 6.2% in 2025 — one of the steeper increases on the Front Range. Northern Colorado's water supply constraints stem from rapid population growth combined with drought conditions that are stressing the region's water infrastructure and driving sustained rate increases.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "City of Loveland Water & Power: 6.2% Rate Increase in 2025", body: "Loveland Water & Power raised commercial rates 6.2% in 2025 — significantly above the Front Range average. This increase reflects the dual pressure of rapid population growth and drought-driven supply constraints that require substantial infrastructure investment." },
    { icon: "AlertTriangle", color: "orange", title: "Northern Colorado Growth + Drought — A Compounding Rate Problem", body: "Northern Colorado is one of the fastest-growing corridors in the Mountain West. Population growth drives demand; drought reduces supply. The combination forces utilities like Loveland to invest heavily in water supply augmentation — costs that flow directly to commercial rate payers." },
    { icon: "Droplets", color: "blue", title: "Mountain Supply Systems Create Ideal Smart Valve™ Conditions", body: "Loveland's mountain-fed water system delivers water with natural air entrainment characteristics that create above-average Smart Valve™ performance. Loveland commercial installations consistently demonstrate results at the higher end of the 15%–35% annual savings range." },
    { icon: "Building2", color: "teal", title: "Loveland's Commercial and Light Industrial Markets", body: "Smart Valve™ serves commercial properties throughout Loveland — the US 34 commercial corridor, the expanding tech and manufacturing base near I-25, and the established retail and hospitality market along Eisenhower Boulevard." },
  ],
  markets: ["US 34 Corridor", "Eisenhower Boulevard", "I-25 Industrial", "Centerra", "Downtown Loveland", "Johnstown", "Berthoud", "Milliken"],
  faqItems: [
    { q: "What are current commercial water rates in Loveland?", a: "City of Loveland Water & Power raised commercial rates 6.2% in 2025 — one of the highest increases on the Front Range. With Northern Colorado's population growth continuing and drought conditions persisting, further annual increases are likely." },
    { q: "Does Loveland have rebate programs for water savings equipment?", a: "Contact Perfect Water Valve for current City of Loveland conservation incentive availability. Note: Denver Water rebates do not apply in Loveland — Loveland is served exclusively by City of Loveland Water & Power." },
    { q: "Why is the Loveland commercial water rate increase so high relative to other Colorado cities?", a: "Loveland's 6.2% increase reflects the compound pressure of Northern Colorado's rapid population growth (driving infrastructure investment) and drought conditions (reducing supply reliability). Both factors require sustained capital investment funded through commercial rate increases." },
    { q: "What commercial property types in Loveland benefit most from Smart Valve™?", a: "Manufacturing and light industrial facilities, hotels, multifamily residential, office complexes along the US 34 and I-25 corridors, and retail properties. Any property spending $5,000+/month on water qualifies." },
    { q: "How does Smart Valve™ perform in Loveland's mountain-fed water system?", a: "Loveland's high-altitude mountain water supply typically exhibits higher air entrainment than lower-elevation systems, creating favorable conditions for above-average Smart Valve™ performance. Many Loveland installations demonstrate results at the higher end of the guaranteed savings range." },
  ],
  contactHeading: "Get a Free Loveland Water Assessment",
  contactBody: "City of Loveland Water & Power is up 6.2% in 2025 — one of the highest Front Range increases. Northern Colorado's growth trajectory points to continued rate pressure. Smart Valve™ guarantees at least 15% off your metered bill.",
  contactBullets: [
    { title: "Free Assessment", desc: "No obligation, no commitment required" },
    { title: "All Loveland Markets", desc: "US 34, Centerra, I-25 corridor and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "2–4 Hour Install", desc: "Zero operational disruption" },
  ],
  source: "perfectwatervalve.com/locations/colorado/loveland",
  alsoServing: CO_OTHER_CITIES,
  alsoServingHeading: "Also Serving Across Colorado",
  seoTitle: "Loveland Commercial Water Savings | Smart Valve™ | Perfect Water Valve",
  seoDescription: "Smart Valve™ cuts commercial water bills 15%–35% annually in Loveland, CO. City of Loveland Water & Power up 6.2% in 2025. Northern Colorado supply constraints acute. Guaranteed savings in writing.",
  seoCanonical: "https://www.perfectwatervalve.com/locations/colorado/loveland",
};

export default function Loveland() {
  return <LocationPage config={config} />;
}
