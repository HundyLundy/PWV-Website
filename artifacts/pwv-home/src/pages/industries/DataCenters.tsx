import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Building2, Server, Thermometer, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Center Commercial Water Savings — Smart Valve™",
  "serviceType": "Commercial Water Savings",
  "areaServed": "United States",
  "url": "https://www.perfectwatervalve.com/industries/data-centers",
  "description": "Smart Valve™ cuts data center cooling water bills 15%–35% annually on average, guaranteed. Amazon YYZ3 hit 58.69% peak savings. NSF 61 & 372 certified, no electricity, no maintenance.",
  "provider": {
    "@type": "Organization",
    "name": "Perfect Water Valve",
    "url": "https://www.perfectwatervalve.com",
    "telephone": "+17209373004",
    "email": "info@perfectwatervalve.com"
  }
};

const DC_FAQ_ITEMS = [
  { q: "How much water does a hyperscale data center use?", a: "A hyperscale data center uses 1–5 million gallons of water per day for cooling tower makeup water. At commercial utility rates of $4–8 per 1,000 gallons, that translates to $4,000–$40,000 per day in water costs — before rate increases." },
  { q: "How does Smart Valve™ work in a data center cooling water system?", a: "Smart Valve™ installs on the main water supply line feeding the cooling system. It reduces turbulence and optimizes flow so that less water passes through the meter to deliver the same cooling performance. Cooling tower operation, chiller performance, and system pressure are completely unaffected." },
  { q: "What is the Amazon YYZ3 result and how was it verified?", a: "Amazon's YYZ3 hyperscale facility in Toronto achieved 58.69% peak year-over-year water savings over 6 consecutive quarters of third-party Measurement and Verification (M&V). The average across YYZ3 and YYZ4 was 16.5% over the same period." },
  { q: "Will Smart Valve™ affect cooling performance or uptime?", a: "No. Smart Valve™ has requires no electricity. It installs in 2–4 hours with zero disruption to operations. Cooling performance, system pressure, and uptime are unaffected." },
  { q: "Is the 15% minimum savings guaranteed in writing?", a: "Yes. Every installation includes a written contract guaranteeing a minimum 15% reduction in metered water consumption. If results fall short, Perfect Water Valve makes it right at no additional cost." },
  { q: "How do I get a data center water assessment?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your cooling water billing, calculate projected savings, and provide a written guarantee before installation." },
];

const dcFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": DC_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const colorMap: Record<string, string> = {
  red: "bg-red-500/10 text-red-500 border-red-500/20",
  orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  teal: "bg-teal-500/10 text-teal-600 border-teal-500/20",
  green: "bg-green-500/10 text-green-600 border-green-500/20",
};

function DataCenterFAQ() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#D5E3EE" }}>
      {DC_FAQ_ITEMS.map((faq, i) => (
        <div key={i}>
          <button className="w-full flex items-start justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="font-semibold text-base leading-snug" style={{ color: open === i ? "#0374A7" : "#0A1F3A" }}>{faq.q}</span>
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors" style={{ borderColor: open === i ? "#0374A7" : "#B0C8D8", background: open === i ? "#0374A7" : "transparent", color: open === i ? "#fff" : "#4A7085" }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && <div className="pb-6 text-sm leading-relaxed" style={{ color: "#2E4A5A", fontWeight: 300 }}>{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function DataCenters() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Data Center Water Savings | Smart Valve™ Cuts Cooling Bills 15%–35% Annually | Perfect Water Valve</title>
        <meta name="description" content="Data centers use up to 5M gallons/day. Smart Valve™ cuts cooling water costs 15%–35% annually — verified 58.69% peak at Amazon YYZ3." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/industries/data-centers" />
        <meta property="og:title" content="Data Center Water Savings | Smart Valve™ Cuts Cooling Bills 15%–35% Annually | Perfect Water Valve" />
        <meta property="og:description" content="Data centers use 1–5M gallons/day for cooling. Smart Valve™ cuts that bill 15%–35% annually on average, guaranteed. Amazon YYZ3 hit 58.69% peak savings. No electricity, no maintenance, NSF certified." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/industries/data-centers" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dcFaqSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={scrollTo} />

      {/* HERO */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                🖥️ Data Center Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Amazon YYZ3 — 58.69% Peak Verified
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Data Centers: The Highest Water-Use Commercial Facility —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                And the Highest Smart Valve™ ROI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              The average hyperscale data center uses 1–5 million gallons of water per day for cooling. Smart Valve™ installs on the main supply line and cuts that bill 15%–35% annually on average, guaranteed. Amazon YYZ3 hit 58.69% peak savings over 6 consecutive quarters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Data Center Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo("case-study")} className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                See Amazon Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 58.69% Peak Savings — Amazon YYZ3</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Zero Operational Impact</div>
          </div>
        </div>
      </section>

      {/* TWO PROMINENT SUB-PAGE MODULES */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-8">Explore the Full Picture</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Module 1 */}
            <motion.a
              href="/industries/data-centers/cooling-water-costs"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-blue-500/10 text-blue-400 border-blue-500/20 shrink-0">
                <Thermometer className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">Module 1</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">
                How Data Centers Use Water and Where the Waste Happens
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                Cooling water costs, metered waste, evaporation loss, and why air entrapment inflates every gallon billed to your facility.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Cooling Water Costs <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            {/* Module 2 */}
            <motion.a
              href="/industries/data-centers/hyperscale-roi"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-[#DEC600]/40 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DEC600]/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-yellow-500/10 text-yellow-500 border-yellow-500/20 shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#DEC600]/70 mb-2">Module 2</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-snug">
                Multi-Site ROI Model and the Amazon YYZ3 Benchmark
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                Enterprise deployment model, multi-site ROI projections, and the full Amazon YYZ3 case study. Built for VPs of Infrastructure and CFOs.
              </p>
              <span className="inline-flex items-center gap-2 text-[#DEC600] font-semibold text-sm group-hover:gap-3 transition-all">
                See the ROI Model <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            {/* Module 3 */}
            <motion.a
              href="/industries/data-centers/wue-regulatory-risk"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-red-400/40 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-red-500/10 text-red-400 border-red-500/20 shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-red-400/70 mb-2">Module 3</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors leading-snug">
                WUE, ESG Reporting & Regulatory Risk
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                WUE benchmarks, Loudoun County permit changes, Phoenix water ordinances, and M&V documentation for ESG and regulatory compliance.
              </p>
              <span className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Explore WUE & Regulatory Risk <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      <SavingsCalcModule defaultBill={50000} />

      {/* WHY DATA CENTERS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Why Data Centers</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Cooling Water Is Your Largest Variable Operating Cost — and It's Rising</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Data centers use 1–5 million gallons of water per day for cooling. As AI and cloud workloads grow, water consumption grows with them — at rates that are already attracting regulatory scrutiny.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, color: "red", title: "Cooling Towers — Highest Water Use", body: "Evaporative cooling towers consume enormous volumes of water. This water passes through your meter and is billed at commercial rates — air entrapment inflates every gallon billed." },
              { icon: DollarSign, color: "yellow", title: "AI Workloads Increasing Water Use", body: "AI inference and training workloads generate significantly more heat than traditional compute workloads — increasing cooling water demand. The water cost trajectory for AI-intensive facilities is steeply upward." },
              { icon: Activity, color: "orange", title: "ESG Water Metrics Under Scrutiny", body: "Data center operators face growing pressure from investors, customers, and regulators to reduce water consumption intensity (WUE). Smart Valve™ directly reduces metered consumption and improves WUE metrics." },
              { icon: Server, color: "blue", title: "Municipal Rate Pressure in Tech Hubs", body: "Data center markets like Denver, Seattle, Phoenix, Dallas, and Northern Virginia are all experiencing commercial rate increases. Each percentage point compounds across millions of gallons of consumption." },
              { icon: Building2, color: "teal", title: "Zero Operational Risk", body: "The Smart Valve™ is fully passive — no electricity required, no maintenance. Installation takes 2–4 hours with zero disruption to data center operations. No downtime, no outage risk." },
              { icon: ShieldCheck, color: "green", title: "M&V Documentation for ESG Reporting", body: "Smart Valve™ installations include Measurement & Verification (M&V) documentation that satisfies ESG water reduction reporting requirements for investors, sustainability auditors, and regulatory bodies." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm hover:border-[#0374A7]/40 transition-colors">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${colorMap[item.color]}`}><item.icon className="w-6 h-6" /></div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMAZON CASE STUDY */}
      <section id="case-study" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Verified Case Study</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Amazon Fulfillment Centers — 6 Consecutive Quarters of Verified Data</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics &amp; Fulfillment Data Center</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ3 Fulfillment Center</h3>
              <div className="text-5xl font-black text-primary mb-6">58.69%</div>
              <p className="text-gray-300 mb-6">Peak single-quarter savings — the highest verified Smart Valve™ result in our entire client portfolio. 6 consecutive quarters of independently verified data.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 58.69% peak single-quarter water bill reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 17% sustained average savings across all quarters</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 6 consecutive quarters of M&amp;V verified data</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption to facility at any point</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Installation completed in under 4 hours</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics &amp; Fulfillment Data Center</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ4 Fulfillment Center</h3>
              <div className="text-5xl font-black text-primary mb-6">16% Avg</div>
              <p className="text-gray-300 mb-6">Consistent performance exceeding the guaranteed minimum — tracked Q3 2024 through Q4 2025.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 16% average savings across all tracked quarters</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Exceeds 15% guaranteed minimum consistently</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Q3 2024 through Q4 2025 tracked and verified</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption to facility</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Demonstrates consistent, repeatable results</li>
              </ul>
            </motion.div>
          </div>
          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-blue-100 italic">"Engineering analysis confirms measurable, repeatable reduction in metered water consumption across all monitored quarters. Results exceed the guaranteed minimum threshold."</p>
          </div>
        </div>
      </section>

      {/* STATE REGULATORY PRESSURE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{ backgroundColor: "#E8EFF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Data Center Water Pressure by State</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Regulatory Pressure Is Highest in the Fastest-Growing Data Center Markets</h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: "#4A7085" }}>Rate increases and water restrictions are concentrated precisely where data center density is highest. If your facility operates in any of these states, the cost pressure is compounding.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { state: "Iowa", slug: "iowa", stat: "+45%", note: "Iowa-American Water rate increase. Hyperscale data center demand is straining municipal supply statewide." },
              { state: "Pennsylvania", slug: "pennsylvania", stat: "+50%", note: "Aqua Pennsylvania approved 50% rate hike. Northern Virginia spillover is pushing data center expansion into PA markets." },
              { state: "Virginia", slug: "virginia", stat: "Rising", note: "Northern Virginia is the world's largest data center market. NOVEC and Dominion rate increases compound at hyperscale volumes." },
              { state: "Texas", slug: "texas", stat: "Drought", note: "ERCOT grid constraints and drought conditions are creating dual pressure on Texas data center water cost and availability." },
              { state: "Georgia", slug: "georgia", stat: "+12%+", note: "Atlanta data center market is the Southeast's fastest-growing. Georgia Power and utility rate cases show consistent upward trajectory." },
            ].map(({ state, slug, stat, note }) => (
              <motion.a key={slug} href={`/locations/${slug}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white border border-[#C5D8E8] rounded-xl p-5 hover:border-[#0374A7]/50 hover:shadow-md transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-base group-hover:text-primary transition-colors" style={{ color: "#0A1F3A" }}>{state}</span>
                  <span className="text-sm font-black text-red-500">{stat}</span>
                </div>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "#4A7085" }}>{note}</p>
                <span className="text-xs text-primary font-semibold mt-3 group-hover:underline">View {state} page →</span>
              </motion.a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">Also serving data centers in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                ["Ohio", "/locations/ohio"], ["Indiana", "/locations/indiana"], ["Minnesota", "/locations/minnesota"],
                ["New Jersey", "/locations/new-jersey"], ["North Carolina", "/locations/north-carolina"],
                ["Colorado", "/locations/colorado"], ["Denver", "/locations/colorado/denver"]
              ].map(([label, href]) => (
                <a key={label} href={href} className="px-3 py-1.5 rounded-lg text-sm border transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "white", borderColor: "#C5D8E8", color: "#2E4A5A" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: "#0374A7" }}>Common Questions</span>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Data Center Water Savings — Frequently Asked Questions</h2>
          </div>
          <DataCenterFAQ />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Data Center Assessment</h2>
          <p className="text-white/80 mb-8">We'll analyze your cooling water consumption and calculate your exact savings potential. Zero obligation. Guaranteed 15% minimum.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-lg">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="bg-transparent border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-lg">{CONTACT.email}</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <a href="/industries/data-centers/cooling-water-costs" className="bg-white/10 border border-white/20 text-white rounded-xl p-4 hover:bg-white/20 transition-all text-sm font-semibold">
              → Cooling Water Costs Deep Dive
            </a>
            <a href="/industries/data-centers/hyperscale-roi" className="bg-white/10 border border-white/20 text-white rounded-xl p-4 hover:bg-white/20 transition-all text-sm font-semibold">
              → Hyperscale ROI Model
            </a>
          </div>
          <p className="text-white/60 text-sm">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
