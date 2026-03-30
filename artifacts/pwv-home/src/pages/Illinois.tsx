import LocationPage from "./LocationTemplate";

const config = {
  state: "Illinois",
  emoji: "🏙️",
  headline: "Chicago's Water Rates Increased 16% Over 3 Years — And That's Before the EPA Pipe Replacement Mandate",
  subheadline: "Chicago raised commercial water rates significantly over the last three years. Illinois mandates lead service line replacement that will cost billions — funded by rate hikes. Smart Valve™ guarantees 15–58% savings and pays for itself before the next rate cycle.",
  heroStats: [
    { value: "58.69%", label: "Peak Savings" },
    { value: "≥15%", label: "Guaranteed Min" },
    { value: "16%", label: "Chicago Rate Rise (3yr)" },
    { value: "$0", label: "Monthly Fees" },
  ],
  whyTitle: "Illinois Commercial Properties Face a Perfect Storm of Rate Hikes and Mandated Infrastructure Costs",
  whyIntro: "Chicago has some of the most aggressive commercial water rate trajectories in the Midwest. Combined with state-mandated lead service line replacement programs that utilities fund through commercial rate increases, Illinois properties face compounding cost pressure.",
  whyPoints: [
    { icon: "TrendingUp", color: "red", title: "Chicago +16% Over 3 Years", body: "Chicago's commercial water rates increased approximately 16% over the last three years — and the city's own rate projections show continued increases through 2030 as infrastructure replacement programs continue." },
    { icon: "AlertTriangle", color: "orange", title: "Illinois Lead Pipe Replacement Mandate", body: "Illinois law requires replacement of all lead service lines statewide. Water utilities are funding this through rate increases. Commercial customers bear a disproportionate share of this cost through commercial rate structures." },
    { icon: "Building2", color: "blue", title: "Chicago — Third Largest Commercial Market", body: "Chicago is the third largest commercial real estate market in the US. The combination of rising rates, aging infrastructure, and growing commercial demand creates a large and underserved Smart Valve™ market with minimal competition." },
    { icon: "Activity", color: "teal", title: "Industrial & Manufacturing High Usage", body: "Illinois has a significant manufacturing and industrial base. Food processing, steel, and chemical manufacturing facilities typically have extremely high water consumption — making Smart Valve™ savings especially large in absolute dollar terms." },
    { icon: "DollarSign", color: "yellow", title: "MWRD Rate Structure", body: "The Metropolitan Water Reclamation District charges commercial properties for sewage treatment separately. Like NYC, Smart Valve™ savings reduce both your water and sewage charges in the Chicago metro area." },
    { icon: "Building2", color: "purple", title: "All Illinois Markets Served", body: "Chicago, Aurora, Rockford, Joliet, Naperville, Springfield, Peoria, and all Illinois markets." }
  ],
  markets: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin"],
  faqItems: [
    { q: "How does Smart Valve™ interact with Chicago's combined water and sewer billing?", a: "Chicago's Metropolitan Water Reclamation District charges commercial properties for sewage treatment based on metered water consumption. Reducing your metered usage with Smart Valve™ reduces both your water bill and your MWRD sewer charges — doubling the effective savings rate." },
    { q: "Does Smart Valve™ work with Chicago Department of Water Management meters?", a: "Yes. The Smart Valve™ is compatible with 99% of commercial meters including all types used by the Chicago Department of Water Management." },
    { q: "Is the 15% savings guaranteed?", a: "Yes. Every Smart Valve™ installation includes a written guarantee of at least 15% reduction in metered water consumption." },
    { q: "How long does installation take?", a: "Most Illinois commercial installations complete in 2–4 hours with zero disruption to operations." },
  ],
  contactHeading: "Get a Free Illinois Water Assessment",
  contactBody: "Chicago's 16% rate increase over 3 years — and the continued hikes ahead — make water efficiency more valuable every year. Get your free assessment now.",
  contactBullets: [
    { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
    { title: "All Illinois Markets", desc: "Chicago, Rockford, Springfield and beyond" },
    { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
    { title: "Dual Savings", desc: "Reduces both water AND MWRD sewer charges" },
  ],
  source: "perfectwatervalve.com/locations/illinois",
};

export default function Illinois() {
  return <LocationPage config={config} />;
}
