import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

const STATES = [
  { name: "Colorado", path: "/locations/colorado", emoji: "🏔️", badge: "Priority Market · Denver Water Rebate 50%" },
  { name: "Texas", path: "/locations/texas", emoji: "🌵", badge: "SAWS +32.7% by 2029 · Dallas $100K Rebate" },
  { name: "California", path: "/locations/california", emoji: "☀️", badge: "Highest US Water Rates · +30.3% by 2029" },
  { name: "Arizona", path: "/locations/arizona", emoji: "🌄", badge: "Colorado River Shortage · SRP Rebate $450K" },
  { name: "Nevada", path: "/locations/nevada", emoji: "🎰", badge: "Lake Mead Crisis · SNWA Binding Targets" },
  { name: "New York", path: "/locations/new-york", emoji: "🗽", badge: "NYC DEP +8% · Dual Water + Sewer Savings" },
  { name: "Florida", path: "/locations/florida", emoji: "🌴", badge: "Miami +7.3% · Tampa $50K Verified Savings" },
  { name: "Washington", path: "/locations/washington", emoji: "🌲", badge: "Seattle SPU +5.7% · Tech Data Centers" },
  { name: "Oregon", path: "/locations/oregon", emoji: "🌿", badge: "Portland +4.5% · Conservation Compliance" },
  { name: "Illinois", path: "/locations/illinois", emoji: "🏙️", badge: "Chicago +16% (3yr) · Water + Sewer Savings" },
  { name: "Utah", path: "/locations/utah", emoji: "🏜️", badge: "SLC +8% · Great Salt Lake Crisis" },
  { name: "Idaho", path: "/locations/idaho", emoji: "🥔", badge: "Boise +7% · Mountain West Expert" },
  { name: "Montana", path: "/locations/montana", emoji: "🦌", badge: "Billings +5.8% · First Mover Market" },
  { name: "Nebraska", path: "/locations/nebraska", emoji: "🌽", badge: "Omaha +9% · Food Processing Specialists" },
  { name: "Kansas", path: "/locations/kansas", emoji: "🌾", badge: "Wichita +8% · Aviation Manufacturing" },
  { name: "New Mexico", path: "/locations/new-mexico", emoji: "🌶️", badge: "Albuquerque +9% · Rio Grande Crisis" },
  { name: "Worldwide", path: "/locations/uk", emoji: "🌍", badge: "UK · Canada · Australia · Global Markets" },
];

const INDUSTRIES = [
  { name: "Data Centers", path: "/industries/data-centers", emoji: "🖥️" },
  { name: "Hotels & Hospitality", path: "/industries/hotels", emoji: "🏨" },
  { name: "Car Washes", path: "/industries/car-washes", emoji: "🚗" },
  { name: "Multifamily Residential", path: "/industries/multifamily", emoji: "🏢" },
  { name: "Hospitals & Healthcare", path: "/industries/hospitals", emoji: "🏥" },
];

export default function USA() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <span>🇺🇸</span> USA + Worldwide Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Smart Valve™ Commercial Water Savings —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Every US State + Worldwide
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Perfect Water Valve deploys through AWS (American Water Savings) and CWS (Canadian Water Savings) nationwide. Every installation includes a written guarantee of ≥15% water bill reduction. Select your state below to see local rate data, rebates, and market analysis.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
              <div><div className="text-4xl sm:text-5xl font-bold text-white mb-1">58.69%</div><div className="text-xs text-white/75 uppercase tracking-wider">Peak Savings</div></div>
              <div><div className="text-4xl sm:text-5xl font-bold text-white mb-1">≥15%</div><div className="text-xs text-white/75 uppercase tracking-wider">Guaranteed Min</div></div>
              <div><div className="text-4xl sm:text-5xl font-bold text-white mb-1">17</div><div className="text-xs text-white/75 uppercase tracking-wider">State Pages</div></div>
              <div><div className="text-4xl sm:text-5xl font-bold text-white mb-1">5</div><div className="text-xs text-white/75 uppercase tracking-wider">Industries Served</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATE GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#0374A7' }}>Service Areas</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0374A7' }}>States With Significant Water Issues</h2>
            <p className="max-w-2xl mx-auto mb-3" style={{ color: '#0A1F3A' }}>These states face the most severe water costs, rate increases, and conservation mandates in the country. Click your state to see local rates, rebates, and real savings data for Smart Valve™ installations.</p>
            <p className="max-w-2xl mx-auto text-sm" style={{ color: '#2E4A5A' }}>Each page includes current utility rate data, available rebates, and verified M&V savings from real commercial installations in that market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STATES.map((state, i) => (
              <motion.a key={i} href={state.path}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05 }}
                className="bg-[#121B2E] border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:bg-[#1A2540] transition-all group flex gap-4 items-start">
                <div className="text-3xl">{state.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{state.name}</h3>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                  </div>
                  <p className="text-xs text-gray-400">{state.badge}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 mb-3">Industry-Specific Pages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Browse by Industry</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Each industry page includes sector-specific case studies, ROI analysis, and installation considerations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.a key={i} href={ind.path}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-6 hover:bg-white/25 hover:border-white/50 transition-all group text-center">
                <div className="text-4xl mb-3">{ind.emoji}</div>
                <h3 className="text-base font-bold text-white group-hover:text-white/90">{ind.name}</h3>
                <ArrowRight className="w-4 h-4 text-white/70 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Verified Results Across Every Market</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "58.69%", label: "Peak savings recorded", sub: "Amazon YYZ3, 6 consecutive quarters" },
              { stat: "≥15%", label: "Guaranteed minimum", sub: "Written guarantee every installation" },
              { stat: "$50K/yr", label: "Verified FL savings", sub: "Grand Central at Kennedy, Tampa" },
              { stat: "NSF 61", label: "& NSF 372 Certified", sub: "Gold standard drinking water components" },
            ].map((item, i) => (
              <div key={i} className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-lg font-bold text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0374A7' }}>Ready to Get Your Free Assessment?</h2>
          <p className="mb-8" style={{ color: '#2E4A5A' }}>Not sure which state page to start with? Contact us directly. We serve all US markets and worldwide through our AWS and CWS partner network.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: "#0374A7", boxShadow: "0 4px 20px rgba(3,116,167,0.35)" }}>
              Call {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="border-2 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5" style={{ borderColor: '#0374A7', color: '#0374A7' }}>
              {CONTACT.email}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: '#2E4A5A' }}>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Zero Obligation</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> All US Markets + Worldwide</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
