import LocationPage from "./LocationTemplate";

const config = {
  state: "United Kingdom",
  emoji: "🇬🇧",
  headline: "UK Commercial Water Bills Rising 10%+ — Ofwat's 2025–2030 Price Review Locks In Compounding Increases",
  subheadline: "Ofwat's PR24 Final Determination approved average bill increases of 21–47% over 5 years for major UK water companies. Thames Water, Severn Trent, United Utilities, and Southern Water are all raising commercial rates significantly. Smart Valve™ and CWS deliver guaranteed 15%–35% annually savings.",
  urgencyBadge: "Ofwat PR24 — Thames Water +31% · United Utilities +47% by 2030",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "47%", label: "United Utilities Rise by 2030" },
    { value: "21%", label: "Thames Water Rise by 2030" },
  ],
  whyTitle: "Ofwat's PR24 Price Review Locks In Compounding Commercial Rate Increases Through 2030",
  whyIntro: "The UK water industry is entering a period of unprecedented rate increases. Ofwat's Final Determination for the 2025–2030 regulatory period approved significant bill increases across all major water companies — commercial customers bear the majority of this cost.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Thames Water +21% by 2030", body: "Thames Water, serving London and the Thames Valley, has been approved for a 21% cumulative increase by 2030. Combined with sewer charges, London commercial property owners face significant compounding cost increases through the end of the decade." },
    { icon: "AlertTriangle", color: "orange", title: "United Utilities +47% by 2030", body: "United Utilities in the North West received approval for a 47% cumulative increase — the largest in the PR24 review. Manchester, Liverpool, and surrounding commercial properties face some of the steepest rate trajectories in the UK." },
    { icon: "Building2", color: "blue", title: "CWS Partner Network — UK Specialists", body: "Perfect Water Valve operates through Canadian Water Savings (CWS), which maintains an established UK commercial partner network. Smart Valve™ installations are handled by CWS-certified technicians familiar with UK water systems." },
    { icon: "Activity", color: "teal", title: "UK Water Stress Classification", body: "The Environment Agency has designated Southeast England (including Greater London) as 'Seriously Water Stressed.' This classification accelerates regulatory pressure on commercial properties and increases the urgency of efficiency investment." },
    { icon: "DollarSign", color: "yellow", title: "CWIP & Water Efficiency Scheme Eligibility", body: "Several UK water companies offer commercial water efficiency grants and incentive schemes under their Capital Works Incentive Programmes. Smart Valve™ M&V documentation qualifies for application." },
    { icon: "Building2", color: "purple", title: "All UK Markets Served via CWS Network", body: "London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Liverpool, Bristol, Cardiff, and all major UK commercial markets via the CWS partner network." }
  ],
  markets: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Liverpool", "Bristol"],
  faqItems: [
    { q: "Does Smart Valve™ work with UK water meters?", a: "Yes. The Smart Valve™ is certified to NSF 61 and NSF 372 and is compatible with the commercial meter types used by Thames Water, Severn Trent, United Utilities, Southern Water, and other UK water companies." },
    { q: "How do UK water company rate increases affect my commercial property?", a: "Ofwat's PR24 Final Determination locks in multi-year commercial bill increases through 2030. For a commercial property spending £10,000/month on water, United Utilities' 47% increase means approximately £4,700 in additional annual cost by 2030 — just from rate changes, before any usage growth." },
    { q: "Is the 15% savings guaranteed in the UK?", a: "Yes. The guarantee is contractual and applies globally. Every Smart Valve™ installation, regardless of country, includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "Does CWS handle UK installations?", a: "Yes. Canadian Water Savings (CWS) maintains a UK commercial partner network. Our CWS-certified technicians handle all UK installations and are familiar with UK water system specifications." },
  ],
  contactHeading: "Get a Free UK Commercial Water Assessment",
  contactBody: "Ofwat's PR24 approved some of the largest commercial rate increases in UK water history. The time to act is before the increases compound further.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All UK Markets", desc: "London, Manchester, Birmingham, Glasgow and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "CWS UK Partner Network", desc: "Certified UK technicians — national coverage" },
  ],
  source: "perfectwatervalve.com/locations/uk",
};

export default function UnitedKingdom() {
  return <LocationPage config={config} />;
}
