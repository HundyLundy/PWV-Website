import { motion } from "framer-motion";
import { ShieldCheck, Zap, Wrench, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const STATS = [
  { val: "≥15%", label: "Guaranteed Minimum Savings", desc: "In writing. In your contract." },
  { val: "58.69%", label: "Peak Verified Savings", desc: "Amazon YYZ3 — independently measured" },
  { val: "19.2%", label: "Portfolio Average", desc: "Across 32,000+ installations" },
  { val: "$50K+", label: "Max Annual Savings", desc: "Per location, per year" },
];

const SPECS = [
  { label: "Technology Type", value: "Passive hydro-mechanical pressure device" },
  { label: "Mechanism", value: "Air purge upstream of water meter" },
  { label: "Electricity Required", value: "None — fully passive" },
  { label: "Moving Parts", value: "None" },
  { label: "Maintenance", value: "Zero — no service intervals" },
  { label: "Installation Time", value: "2–4 hours, no downtime" },
  { label: "Certifications", value: "NSF 61 · NSF 372 (drinking water safe)" },
  { label: "Compatible Meters", value: "99% of commercial water meters" },
  { label: "Guarantee", value: "≥15% metered water reduction in writing" },
  { label: "M&V Standard", value: "IPMVP Option B (independent)" },
];

const CLIENTS = [
  { name: "Amazon YYZ3 & YYZ4", result: "16.5% avg / 58.69% peak", industry: "Logistics" },
  { name: "Four Seasons Fort Lauderdale", result: "26% avg / 56% peak", industry: "Hospitality" },
  { name: "St. Regis Toronto", result: "$49,889 CAD / year", industry: "Hospitality" },
  { name: "1 Hotel Toronto", result: "15% avg · $3,491/mo", industry: "Hospitality" },
  { name: "Grand Central at Kennedy", result: "23% avg · ~$50K/yr", industry: "Real Estate" },
  { name: "Houstonian Estates", result: "16% · 6,000 gal/day", industry: "Multifamily" },
  { name: "Caliber Car Wash (5 sites)", result: "23% weighted avg", industry: "Automotive" },
  { name: "Forest & Charlton Toronto", result: "17–20% · CA $17,200/yr", industry: "Multifamily" },
];

export default function InfoSheet() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: '#E8EFF7' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-16 h-16 object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#0374A7' }}>
            Smart Valve™ Product Information Sheet
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: '#0A1F3A' }}>
            Perfect Water Valve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Smart Valve™</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#2E4A5A' }}>
            A passive commercial water pressure device that eliminates air entrapment in municipal supply lines — reducing metered water billing by 15% to 58%, guaranteed in writing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:7209373004" className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow" style={{ background: '#0374A7' }}>
              <Phone className="w-4 h-4" /> (720) 937-3004
            </a>
            <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2" style={{ borderColor: '#0374A7', color: '#0374A7' }}>
              <Mail className="w-4 h-4" /> info@perfectwatervalve.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* KEY STATS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#0A1F3A' }}>Verified Performance Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold mb-1" style={{ color: '#0374A7' }}>{s.val}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: '#0A1F3A' }}>{s.label}</div>
                <div className="text-xs" style={{ color: '#4A7085' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#0A1F3A' }}>How It Works</h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: '#2E4A5A' }}>
            Air bubbles dissolved in pressurized municipal supply lines travel through your pipes and register as volume on your water meter. You pay for every cubic foot — including the ones that were never liquid. The Smart Valve™ installs upstream of your meter and mechanically purges that air before it's counted.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "No Electricity", desc: "Fully passive — no power source, no wiring, no control system" },
              { icon: Wrench, title: "No Moving Parts", desc: "Nothing to wear out, replace, or maintain — ever" },
              { icon: ShieldCheck, title: "NSF 61 & 372 Certified", desc: "Drinking water safe. Approved for all commercial and healthcare use" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border border-slate-100" style={{ background: '#E8EFF7' }}>
                <item.icon className="w-8 h-8 mb-3" style={{ color: '#0374A7' }} />
                <h3 className="font-bold mb-2" style={{ color: '#0A1F3A' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#2E4A5A' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: '#E8EFF7' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#0A1F3A' }}>Technical Specifications</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            {SPECS.map((s, i) => (
              <div key={i} className={`flex gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} border-b border-slate-100 last:border-0`}>
                <span className="text-sm font-semibold w-40 shrink-0" style={{ color: '#0374A7' }}>{s.label}</span>
                <span className="text-sm" style={{ color: '#0A1F3A' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED CLIENT RESULTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3" style={{ color: '#0A1F3A' }}>Verified Client Results</h2>
          <p className="text-center text-sm mb-10" style={{ color: '#4A7085' }}>All results independently verified via IPMVP Option B measurement & verification</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLIENTS.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0374A7' }}>{c.industry}</div>
                <div className="font-bold text-sm mb-2" style={{ color: '#0A1F3A' }}>{c.name}</div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: '#059669' }} />
                  <span className="text-sm font-semibold" style={{ color: '#059669' }}>{c.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-white text-center" style={{ background: 'linear-gradient(135deg, #0A1F3A, #0374A7)' }}>
        <div className="max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">≥15% — In Writing. In Your Contract.</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Every Smart Valve™ installation includes a legally binding guarantee: if your facility does not achieve at least 15% reduction in metered water consumption, we remove the valve at no cost to you. No fine print. No conditions. No risk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:7209373004" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              <Phone className="w-4 h-4" /> (720) 937-3004
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-10 px-4 border-b border-slate-100 text-center" style={{ background: '#E8EFF7' }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4A7085' }}>Distributed Through</p>
        <div className="flex flex-wrap gap-8 justify-center">
          <div>
            <div className="font-bold text-base" style={{ color: '#0A1F3A' }}>AWS</div>
            <div className="text-xs" style={{ color: '#4A7085' }}>American Water Savings</div>
          </div>
          <div>
            <div className="font-bold text-base" style={{ color: '#0A1F3A' }}>CWS</div>
            <div className="text-xs" style={{ color: '#4A7085' }}>Canadian Water Savings</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
