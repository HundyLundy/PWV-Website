import LocationPage from "./LocationTemplate";

const config = {
  state: "Kansas",
  emoji: "🌾",
  headline: "Wichita's Water Rates Are Up 8% in 2025 — Smart Valve™ Cuts Commercial Bills 15%–35% annually",
  subheadline: "Wichita increased commercial water rates 8% in 2025. Kansas faces Ogallala Aquifer depletion in its western counties with regulatory action on the horizon. Kansas City, KS increased 7%. Smart Valve™ delivers guaranteed savings with no monthly fees.",
  urgencyBadge: "Wichita +8% · Kansas City KS +7% in 2025 — Ogallala Aquifer Depletion Regulatory Action Imminent",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "8%", label: "Wichita Rate Rise 2025" },
    { value: "$0", label: "Monthly Fees" },
  ],
  whyTitle: "Kansas Commercial Properties Face Rising Rates and Aquifer-Driven Conservation Pressure",
  whyIntro: "The Ogallala Aquifer crisis is most acute in western Kansas, where water tables have dropped dramatically. Utilities across the state are raising rates to fund conservation infrastructure and aquifer recharge programs.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Wichita +8% in 2025", body: "Wichita's commercial water rates increased 8% in 2025. Kansas City, KS increased 7% in the same period. Both utilities cite aging infrastructure and conservation program funding as rate drivers." },
    { icon: "AlertTriangle", color: "orange", title: "Ogallala Aquifer — Western Kansas Crisis", body: "The Ogallala Aquifer in western Kansas has dropped dramatically over the past 50 years. State regulators are considering mandatory usage restrictions for commercial and agricultural users — rate increases are the opening move." },
    { icon: "Building2", color: "blue", title: "Aviation & Manufacturing Hub", body: "Wichita is the aviation manufacturing capital of the world, with Boeing, Spirit AeroSystems, and Cessna all major presences. Manufacturing facilities have high water intensity and strong Smart Valve™ ROI." },
    { icon: "Activity", color: "teal", title: "Agricultural Processing", body: "Kansas's beef and grain processing industries are among the highest water intensity commercial operations. Smart Valve™ savings in food processing facilities are especially large in absolute dollar terms." },
    { icon: "DollarSign", color: "yellow", title: "First-Mover Market Opportunity", body: "Kansas has minimal Smart Valve™ market penetration. AWS has identified Wichita and Kansas City, KS as significant first-mover opportunities — no competing installers, large commercial market." },
    { icon: "Building2", color: "purple", title: "All Kansas Markets Served", body: "Wichita, Overland Park, Kansas City, Topeka, Lawrence, Manhattan, and all Kansas markets." }
  ],
  markets: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Lawrence", "Manhattan", "Salina", "Olathe"],
  faqItems: [
    { q: "Does Smart Valve™ work for manufacturing facilities in Kansas?", a: "Yes. Manufacturing is one of Smart Valve™'s strongest ROI applications. Aviation manufacturing and food processing facilities in Wichita and Kansas City have extremely high water consumption, and guaranteed savings translate directly to significant dollar reductions." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Kansas commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Kansas Water Assessment",
  contactBody: "Wichita rates up 8% in 2025. Kansas is a first-mover market with minimal Smart Valve™ competition. Get your assessment now.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Kansas Markets", desc: "Wichita, Overland Park, Kansas City and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Manufacturing Specialists", desc: "Aviation and food processing — highest ROI applications" },
  ],
  source: "perfectwatervalve.com/locations/kansas",
  industryLinks: [
    { label: "Multifamily — Water Cost Guide", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why apartment owners pay for tenant behavior" },
    { label: "Multifamily — Irrigation Savings", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — the biggest single savings opportunity" },
    { label: "Hospitals — Water Cost Breakdown", href: "/industries/hospitals/water-costs", desc: "Where healthcare facility water budgets go — by use category" },
    { label: "Hospitals — Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "ASHRAE 188/514 and Joint Commission compliance — air pockets eliminated" },
  ],
};

export default function Kansas() {
  return <LocationPage config={config} />;
}
