import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle, ChevronRight, ShieldCheck, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How does Smart Valve™ compare to low-flow fixtures?", "acceptedAnswer": { "@type": "Answer", "text": "Low-flow fixtures reduce water at the point of use — affecting the experience (shower pressure, flush volume, faucet flow). Smart Valve™ reduces metered consumption at the main supply line without any change to fixtures, pressure, or user experience. It also comes with a written savings guarantee; low-flow does not." } },
    { "@type": "Question", "name": "How does Smart Valve™ compare to leak detection?", "acceptedAnswer": { "@type": "Answer", "text": "Leak detection finds and alerts you to waste after it starts. Smart Valve™ reduces metered consumption proactively — it works on every gallon that flows through the meter, not just leak events. The two approaches are complementary." } },
    { "@type": "Question", "name": "How does Smart Valve™ compare to pressure reducing valves (PRVs)?", "acceptedAnswer": { "@type": "Answer", "text": "PRVs lower static pressure, which can reduce some incidental waste. Smart Valve™ addresses air entrainment — the phenomenon where dissolved air in the water line causes the meter to register more volume than actually used. Smart Valve™ produces a guaranteed 15%+ reduction verified by independent M&V; PRVs have no such guarantee." } }
  ]
};

type Check = true | false | "partial";

interface CompareRow {
  feature: string;
  pwv: Check;
  lowFlow: Check;
  leakDetect: Check;
  prv: Check;
  nothing: Check;
}

const ROWS: CompareRow[] = [
  { feature: "Written savings guarantee",          pwv: true,      lowFlow: false,   leakDetect: false,   prv: false,   nothing: false },
  { feature: "No change to water experience",      pwv: true,      lowFlow: false,   leakDetect: true,    prv: "partial", nothing: true },
  { feature: "Works at main supply line",          pwv: true,      lowFlow: false,   leakDetect: false,   prv: true,    nothing: false },
  { feature: "No electricity or maintenance",      pwv: true,      lowFlow: true,    leakDetect: false,   prv: true,    nothing: true },
  { feature: "Installs in under 4 hours",          pwv: true,      lowFlow: "partial", leakDetect: "partial", prv: "partial", nothing: true },
  { feature: "Independent M&V verification",       pwv: true,      lowFlow: false,   leakDetect: false,   prv: false,   nothing: false },
  { feature: "NSF 61 & 372 certified",             pwv: true,      lowFlow: "partial", leakDetect: false,   prv: false,   nothing: false },
  { feature: "Compatible with all other systems",  pwv: true,      lowFlow: true,    leakDetect: true,    prv: true,    nothing: true },
  { feature: "Reduces metered bill — not flow",    pwv: true,      lowFlow: false,   leakDetect: false,   prv: false,   nothing: false },
  { feature: "Typical savings range",              pwv: true,      lowFlow: "partial", leakDetect: "partial", prv: "partial", nothing: false },
];

function Cell({ val }: { val: Check }) {
  if (val === true) return <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: "#0374A7" }} />;
  if (val === false) return <XCircle className="w-5 h-5 mx-auto" style={{ color: "#D1D5DB" }} />;
  return <MinusCircle className="w-5 h-5 mx-auto" style={{ color: "#DEC600" }} />;
}

const ALTERNATIVES = [
  {
    name: "Low-Flow Fixtures",
    verdict: "Degrades Experience",
    color: "#E53E3E",
    summary: "Low-flow aerators, low-flush toilets, and reduced-flow showerheads cut usage at point of use. They work — but guests notice, tenants complain, and operators push back. No guarantee, and savings diminish once the obvious changes are made.",
    savings: "5%–15% typical",
    guarantee: "None",
    install: "Multi-day, disruptive"
  },
  {
    name: "Leak Detection",
    verdict: "Reactive — Not Proactive",
    color: "#D69E2E",
    summary: "Leak detection is valuable — but it only addresses abnormal events. It cannot reduce the baseline metered consumption on a properly functioning system. Smart Valve™ works on every gallon, every day, whether or not there's a leak.",
    savings: "Variable (event-based)",
    guarantee: "None",
    install: "Sensors throughout building"
  },
  {
    name: "Pressure Reducing Valves (PRV)",
    verdict: "Limited Scope",
    color: "#805AD5",
    summary: "PRVs regulate static pressure. At very high incoming pressures, they can reduce some incidental overuse. But they don't address air entrainment — the primary mechanism by which meters overcount. No M&V verification, no written guarantee.",
    savings: "2%–8% in high-pressure scenarios",
    guarantee: "None",
    install: "Half-day install"
  },
  {
    name: "Water Recycling / Reclaim",
    verdict: "High Capital, Narrow Use",
    color: "#319795",
    summary: "Reclaim systems reuse greywater and are effective for car washes and irrigation. Capital costs are high, permitting is complex, and the savings only apply to recyclable streams. Smart Valve™ works on every metered gallon — including potable supply — with a fraction of the investment.",
    savings: "Varies by application",
    guarantee: "None",
    install: "Weeks, major construction"
  }
];

export default function Compare() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Smart Valve™ vs. Alternatives — Water Savings Comparison | Perfect Water Valve</title>
        <meta name="description" content="Compare Smart Valve™ against low-flow fixtures, leak detection, PRVs, and water recycling. Only Smart Valve™ offers a written 15% minimum guarantee with zero impact on water experience." />
        <link rel="canonical" href="https://perfectwatervalve.com/compare" />
        <meta property="og:title" content="Smart Valve™ vs. Alternatives — Water Savings Comparison | Perfect Water Valve" />
        <meta property="og:description" content="Compare Smart Valve™ against low-flow fixtures, leak detection, PRVs, and water recycling. Only Smart Valve™ offers a written 15% minimum guarantee with zero impact on water experience." />
        <meta property="og:url" content="https://perfectwatervalve.com/compare" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(compareSchema)}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <ShieldCheck className="w-4 h-4 text-green-300" />
              Side-by-Side Comparison
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              Smart Valve™ vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">the Alternatives</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              There are many approaches to reducing commercial water bills. Only one comes with a written guarantee, independent M&V verification, and zero impact on water experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-headline font-bold" style={{ color: "#0A1F3A" }}>Feature Comparison</h2>
            <p className="text-sm mt-2" style={{ color: "#4A7085" }}>
              <MinusCircle className="inline w-4 h-4 mr-1" style={{ color: "#DEC600" }} />
              = partial or situation-dependent
            </p>
          </motion.div>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#C5D8E8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0A1F3A" }}>
                  <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-white/60 w-48">Feature</th>
                  <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#DEC600", minWidth: 110 }}>Smart Valve™</th>
                  <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/50" style={{ minWidth: 110 }}>Low-Flow</th>
                  <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/50" style={{ minWidth: 110 }}>Leak Detect</th>
                  <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/50" style={{ minWidth: 90 }}>PRV</th>
                  <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/30" style={{ minWidth: 90 }}>Nothing</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#F4F8FC", borderTop: "1px solid #E2ECF5" }}>
                    <td className="px-5 py-3.5 text-sm font-medium" style={{ color: "#0A1F3A" }}>{row.feature}</td>
                    <td className="px-4 py-3.5 text-center" style={{ backgroundColor: i % 2 === 0 ? "#EEF8FF" : "#E4F3FC" }}><Cell val={row.pwv} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell val={row.lowFlow} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell val={row.leakDetect} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell val={row.prv} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell val={row.nothing} /></td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "#E8EFF7", borderTop: "2px solid #C5D8E8" }}>
                  <td className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F3A" }}>Typical Savings</td>
                  <td className="px-4 py-3.5 text-center text-sm font-bold" style={{ color: "#0374A7", backgroundColor: "#D8F0FF" }}>15%–35%+</td>
                  <td className="px-4 py-3.5 text-center text-sm font-semibold" style={{ color: "#4A7085" }}>5%–15%</td>
                  <td className="px-4 py-3.5 text-center text-sm font-semibold" style={{ color: "#4A7085" }}>Variable</td>
                  <td className="px-4 py-3.5 text-center text-sm font-semibold" style={{ color: "#4A7085" }}>2%–8%</td>
                  <td className="px-4 py-3.5 text-center text-sm font-semibold" style={{ color: "#9CA3AF" }}>0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ALTERNATIVE BREAKDOWNS */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-3" style={{ color: "#0A1F3A" }}>Why the Alternatives Fall Short</h2>
          </motion.div>
          <div className="space-y-6">
            {ALTERNATIVES.map((alt, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-7 border" style={{ borderColor: "#C5D8E8", backgroundColor: "#F9FBFD" }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "#0A1F3A" }}>{alt.name}</h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white mt-1" style={{ background: alt.color }}>{alt.verdict}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-right">
                    {[
                      { label: "Typical Savings", val: alt.savings },
                      { label: "Guarantee", val: alt.guarantee },
                      { label: "Installation", val: alt.install },
                    ].map((stat, j) => (
                      <div key={j}>
                        <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6A8A9A" }}>{stat.label}</div>
                        <div className="text-xs font-semibold mt-0.5" style={{ color: stat.val === "None" ? "#E53E3E" : "#0A1F3A" }}>{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>{alt.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg, #060D1A 0%, #0A1F3A 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <ShieldCheck className="w-12 h-12 mx-auto mb-6" style={{ color: "#0374A7" }} />
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              Only One Option Comes With a Written Guarantee
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
              Smart Valve™ guarantees a minimum 15% reduction in metered water consumption — in writing, before installation begins. The savings are verified by independent M&V. If your site doesn't reach 15%, we make it right at no cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/#contact" className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5"
                style={{ background: "#0374A7", boxShadow: "0 6px 24px rgba(3,116,167,0.4)" }}>
                Request Free Assessment <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/results" className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-semibold text-base border border-white/15 hover:border-white/30 hover:text-white transition-all">
                View Verified Results <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <a href="tel:7209373004" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Phone className="w-4 h-4" /> (720) 937-3004
              </a>
              <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Mail className="w-4 h-4" /> info@perfectwatervalve.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
