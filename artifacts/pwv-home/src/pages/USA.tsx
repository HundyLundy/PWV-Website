import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Globe, ZapOff, Activity } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

const FEATURED_STATES = [
  { name: "Colorado", path: "/locations/colorado", emoji: "🏔️", badge: "Priority Market · Denver Water Rebate 50%" },
  { name: "Texas", path: "/locations/texas", emoji: "🌵", badge: "SAWS +32.7% by 2029 · Dallas $100K Rebate" },
  { name: "California", path: "/locations/california", emoji: "☀️", badge: "Highest US Water Rates · +30.3% by 2029" },
  { name: "Arizona", path: "/locations/arizona", emoji: "🌄", badge: "Colorado River Shortage · SRP Rebate $450K" },
  { name: "Nevada", path: "/locations/nevada", emoji: "🎰", badge: "Lake Mead Crisis · SNWA Binding Targets" },
  { name: "Florida", path: "/locations/florida", emoji: "🌴", badge: "Miami +7.3% · Tampa $50K Verified Savings" },
  { name: "New York", path: "/locations/new-york", emoji: "🗽", badge: "NYC DEP +8% · Dual Water + Sewer Savings" },
  { name: "Illinois", path: "/locations/illinois", emoji: "🏙️", badge: "Chicago +16% (3yr) · Water + Sewer Savings" },
  { name: "Washington", path: "/locations/washington", emoji: "🌲", badge: "Seattle SPU +5.7% · Tech Data Centers" },
  { name: "Virginia", path: "/locations/virginia", emoji: "🏛️", badge: "Northern VA Data Centers · 1.7B gal/day cooling" },
];

const ALL_STATES = [
  { name: "Alabama", slug: "alabama", emoji: "🌾" },
  { name: "Alaska", slug: "alaska", emoji: "❄️" },
  { name: "Arizona", slug: "arizona", emoji: "🌄" },
  { name: "Arkansas", slug: "arkansas", emoji: "🌿" },
  { name: "California", slug: "california", emoji: "☀️" },
  { name: "Colorado", slug: "colorado", emoji: "🏔️" },
  { name: "Connecticut", slug: "connecticut", emoji: "🏛️" },
  { name: "Delaware", slug: "delaware", emoji: "🦅" },
  { name: "Florida", slug: "florida", emoji: "🌴" },
  { name: "Georgia", slug: "georgia", emoji: "🍑" },
  { name: "Hawaii", slug: "hawaii", emoji: "🌺" },
  { name: "Idaho", slug: "idaho", emoji: "🥔" },
  { name: "Illinois", slug: "illinois", emoji: "🏙️" },
  { name: "Indiana", slug: "indiana", emoji: "🏎️" },
  { name: "Iowa", slug: "iowa", emoji: "🌽" },
  { name: "Kansas", slug: "kansas", emoji: "🌾" },
  { name: "Kentucky", slug: "kentucky", emoji: "🐎" },
  { name: "Louisiana", slug: "louisiana", emoji: "🎷" },
  { name: "Maine", slug: "maine", emoji: "🦞" },
  { name: "Maryland", slug: "maryland", emoji: "🦀" },
  { name: "Massachusetts", slug: "massachusetts", emoji: "🦃" },
  { name: "Michigan", slug: "michigan", emoji: "🚗" },
  { name: "Minnesota", slug: "minnesota", emoji: "❄️" },
  { name: "Mississippi", slug: "mississippi", emoji: "🎶" },
  { name: "Missouri", slug: "missouri", emoji: "🌉" },
  { name: "Montana", slug: "montana", emoji: "🦌" },
  { name: "Nebraska", slug: "nebraska", emoji: "🌽" },
  { name: "Nevada", slug: "nevada", emoji: "🎰" },
  { name: "New Hampshire", slug: "new-hampshire", emoji: "🍂" },
  { name: "New Jersey", slug: "new-jersey", emoji: "🏙️" },
  { name: "New Mexico", slug: "new-mexico", emoji: "🌶️" },
  { name: "New York", slug: "new-york", emoji: "🗽" },
  { name: "North Carolina", slug: "north-carolina", emoji: "🌲" },
  { name: "North Dakota", slug: "north-dakota", emoji: "🌾" },
  { name: "Ohio", slug: "ohio", emoji: "🎆" },
  { name: "Oklahoma", slug: "oklahoma", emoji: "🌪️" },
  { name: "Oregon", slug: "oregon", emoji: "🌿" },
  { name: "Pennsylvania", slug: "pennsylvania", emoji: "🔔" },
  { name: "Rhode Island", slug: "rhode-island", emoji: "⚓" },
  { name: "South Carolina", slug: "south-carolina", emoji: "🌴" },
  { name: "South Dakota", slug: "south-dakota", emoji: "🗿" },
  { name: "Tennessee", slug: "tennessee", emoji: "🎵" },
  { name: "Texas", slug: "texas", emoji: "🌵" },
  { name: "Utah", slug: "utah", emoji: "🏜️" },
  { name: "Vermont", slug: "vermont", emoji: "🍁" },
  { name: "Virginia", slug: "virginia", emoji: "🏛️" },
  { name: "Washington", slug: "washington", emoji: "🌲" },
  { name: "West Virginia", slug: "west-virginia", emoji: "⛏️" },
  { name: "Wisconsin", slug: "wisconsin", emoji: "🧀" },
  { name: "Wyoming", slug: "wyoming", emoji: "🦬" },
];


const INTERNATIONAL = [
  { name: "Europe", slug: "europe", emoji: "🇪🇺", note: "UK · Ireland · Continental Europe · CWS Partner Network" },
  { name: "Asia-Pacific", slug: "asia", emoji: "🌏", note: "Singapore · Australia · Japan · Data Center Markets" },
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
      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <Globe className="w-4 h-4" /> All 50 States + International Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Smart Valve™ Water Savings —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Everywhere You Operate
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Perfect Water Valve deploys through AWS (American Water Savings) and CWS (Canadian Water Savings) across all 50 US states, Canada, Europe, and Asia-Pacific. Every installation includes a written guarantee of ≥15% water bill reduction. Select your location below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm sm:text-base">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 58.69% Peak Savings Recorded</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Savings Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> 99% Meter Compatible</div>
          </div>
        </div>
      </section>

      {/* FEATURED STATES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#0374A7' }}>Priority Markets</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Top States by Water Cost Pressure</h2>
            <p className="max-w-2xl mx-auto text-gray-400">These states have the most severe water costs, rate increases, and conservation mandates. Each page includes current utility data, available rebates, and verified M&V case study results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {FEATURED_STATES.map((state, i) => (
              <motion.a key={i} href={state.path}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05 }}
                className="bg-[#121B2E] border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:bg-[#1A2540] transition-all group flex gap-4 items-start no-underline">
                <div className="text-3xl">{state.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{state.name}</h3>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </div>
                  <p className="text-xs text-gray-400">{state.badge}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 50 STATES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: '#F4F8FC', borderColor: '#C5D8E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#0374A7' }}>Complete US Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#0A1F3A' }}>All 50 States</h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#4A7085' }}>
              Smart Valve™ is available nationwide. Every commercial facility spending $5,000+/month on water qualifies for a free assessment.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {ALL_STATES.map((s) => (
              <a
                key={s.slug}
                href={`/locations/${s.slug}`}
                className="flex items-center gap-2.5 p-3 rounded-xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-md group no-underline"
                style={{ borderColor: '#C5D8E8' }}
              >
                <span className="text-xl flex-shrink-0">{s.emoji}</span>
                <span className="text-sm font-medium group-hover:text-[#0374A7] transition-colors" style={{ color: '#2E4A5A' }}>{s.name}</span>
                <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all text-[#0374A7] flex-shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#0374A7' }}>International Markets</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Global Coverage via CWS Partner Network</h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Smart Valve™ installations are operating across Europe and Asia-Pacific through the Canadian Water Savings partner network. Contact us for international project qualification.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {INTERNATIONAL.map((region, i) => (
              <motion.a
                key={region.slug}
                href={`/locations/${region.slug}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-[#1A2540] transition-all group flex gap-5 items-start no-underline"
              >
                <div className="text-4xl">{region.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{region.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{region.note}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                    View regional page <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 mb-3">Industry Pages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Browse by Industry</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Each industry page includes sector-specific case studies, ROI analysis, and installation benchmarks.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.a key={i} href={ind.path}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-6 hover:bg-white/25 hover:border-white/50 transition-all group text-center no-underline">
                <div className="text-4xl mb-3">{ind.emoji}</div>
                <h3 className="text-base font-bold text-white group-hover:text-white/90">{ind.name}</h3>
                <ArrowRight className="w-4 h-4 text-white/70 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready for Your Free Assessment?</h2>
          <p className="mb-8 text-gray-400">Not sure which page to start with? Contact us directly — we serve all US markets and worldwide through our AWS and CWS partner network.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: "#0374A7", boxShadow: "0 4px 20px rgba(3,116,167,0.35)" }}>
              Call {CONTACT.phone}
            </a>
            <a href="/#contact" className="border-2 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 text-white" style={{ borderColor: '#0374A7' }}>
              Request Assessment Online
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
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
