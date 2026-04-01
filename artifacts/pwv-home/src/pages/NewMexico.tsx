import LocationPage from "./LocationTemplate";

const config = {
  state: "New Mexico",
  emoji: "🌶️",
  headline: "Albuquerque Is One of the Driest Major Cities in America — Commercial Water Rates Up 9% in 2025",
  subheadline: "Albuquerque's commercial water rates increased 9% in 2025. New Mexico's Rio Grande water allocation is under severe stress from drought. Santa Fe raised rates 8.5%. Smart Valve™ cuts your bill 15%–35% annually and helps you meet conservation mandates — guaranteed.",
  urgencyBadge: "Rio Grande Drought — Critical Supply Levels · ABQ +9% 2025",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "9%", label: "Albuquerque Rate Rise 2025" },
    { value: "#3", label: "Driest Major US City" },
  ],
  whyTitle: "New Mexico's Water Supply Crisis Is Among the Most Acute in the American West",
  whyIntro: "New Mexico depends on the Rio Grande, which is experiencing historically low flows due to multi-year drought. Aquifer over-pumping is accelerating. Commercial properties face both mandatory conservation requirements and accelerating rate increases.",
  whyPoints: [
    { icon: "AlertTriangle", color: "red", title: "Rio Grande — Historic Low Flows", body: "The Rio Grande, New Mexico's primary water source, has experienced historically low flows in recent drought cycles. Federal negotiators are managing strict inter-state water compacts that limit New Mexico's total withdrawal — commercial usage is under regulatory pressure." },
    { icon: "TrendingUp", color: "orange", title: "Albuquerque Bernalillo County WUA +9%", body: "ABCWUA raised commercial water rates 9% in 2025 and has projected further annual increases through 2029 as the utility funds Aquifer recharge programs and conservation infrastructure." },
    { icon: "Droplets", color: "blue", title: "Santa Fe — $8.50/CCF Rates", body: "Santa Fe has some of the highest water rates in the country — over $8.50 per CCF in the highest usage tier. Commercial properties in Santa Fe see some of the largest dollar savings per percentage point of reduction." },
    { icon: "Activity", color: "teal", title: "High Desert Pressure Conditions", body: "New Mexico's high desert terrain and elevation create the same line pressure fluctuations found across the Mountain West — increasing air entrapment and making Smart Valve™ highly effective." },
    { icon: "DollarSign", color: "yellow", title: "ABCWUA Conservation Rebates", body: "Albuquerque Bernalillo County Water Utility Authority offers commercial conservation rebates for verified water-saving projects. Smart Valve™ M&V documentation qualifies." },
    { icon: "Building2", color: "purple", title: "All New Mexico Markets Served", body: "Albuquerque, Santa Fe, Las Cruces, Rio Rancho, Roswell, Farmington, and all New Mexico markets." }
  ],
  markets: ["Albuquerque", "Santa Fe", "Las Cruces", "Rio Rancho", "Roswell", "Farmington", "Clovis", "Hobbs"],
  faqItems: [
    { q: "Does Smart Valve™ work with ABCWUA in Albuquerque?", a: "Yes. The Smart Valve™ is compatible with 99% of commercial water meters including all types used by ABCWUA. We're familiar with Albuquerque's tiered rate structure and can calculate your exact potential savings." },
    { q: "Does Smart Valve™ qualify for ABCWUA conservation rebates?", a: "Yes. ABCWUA offers commercial rebates for verified water efficiency projects. We assist with M&V documentation and rebate application filing." },
    { q: "How does New Mexico's altitude affect Smart Valve™?", a: "Positively. New Mexico's high-elevation terrain creates pressure fluctuations in municipal distribution systems that increase air entrapment — the exact condition Smart Valve™ is designed to eliminate." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
  ],
  contactHeading: "Get a Free New Mexico Water Assessment",
  contactBody: "Albuquerque rates up 9% in 2025, Santa Fe among the highest rates in the country. New Mexico commercial properties have a compelling case for Smart Valve™.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All NM Markets", desc: "Albuquerque, Santa Fe, Las Cruces and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Rebate Assistance", desc: "ABCWUA conservation rebates — we help you file" },
  ],
  source: "perfectwatervalve.com/locations/new-mexico",
};

export default function NewMexico() {
  return <LocationPage config={config} />;
}
