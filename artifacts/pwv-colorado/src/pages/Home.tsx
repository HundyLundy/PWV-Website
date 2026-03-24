import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Home, Hotel, Cross, Droplets, Utensils, Flag,
  CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, 
  ZapOff, Activity, Menu, X
} from "lucide-react";

// Asset Imports
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import valveDiagram from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import smartValve from "@assets/smart-valve1_1774325826879.avif";
import { BubbleValveSection } from "@/components/BubbleValveSection";

const REP_INFO = {
  name: "Hunter Lundquist",
  phone: "720-937-3004",
  email: "Hunter@perfectsynergysolutions.com"
};

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* TWO-TIER NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Top Tier */}
        <div className="bg-primary py-1.5 px-4 text-xs font-medium text-center text-white flex justify-center items-center gap-2 flex-wrap">
          <span>{REP_INFO.name}</span>
          <span className="hidden sm:inline opacity-60">|</span>
          <a href={`tel:${REP_INFO.phone.replace(/-/g, '')}`} className="hover:underline">{REP_INFO.phone}</a>
          <span className="hidden sm:inline opacity-60">|</span>
          <a href={`mailto:${REP_INFO.email}`} className="hover:underline hidden sm:inline">{REP_INFO.email}</a>
        </div>
        
        {/* Main Nav */}
        <div className="bg-[#0A0F1E]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
                <img src={logo} alt="Perfect Water Valve" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight hidden sm:block" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                <span className="text-xl text-white">Perfect Water</span><br/>
                <span className="text-xl" style={{ color: '#DEC600' }}>Valve — Colorado</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">How It Works</button>
              <button onClick={() => scrollTo('savings-calc')} className="hover:text-white transition-colors">Savings</button>
              <button onClick={() => scrollTo('why-colorado')} className="hover:text-white transition-colors">Why Colorado</button>
              <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors">FAQ</button>
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <a href={`tel:${REP_INFO.phone.replace(/-/g, '')}`} className="font-semibold text-gray-200 hover:text-white">
                {REP_INFO.phone}
              </a>
              <button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">
                See How Much You'll Save
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0A0F1E] border-b border-white/10 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                <button onClick={() => scrollTo('how-it-works')} className="text-left py-2 font-medium">How It Works</button>
                <button onClick={() => scrollTo('savings-calc')} className="text-left py-2 font-medium">Savings</button>
                <button onClick={() => scrollTo('why-colorado')} className="text-left py-2 font-medium">Why Colorado</button>
                <button onClick={() => scrollTo('faq')} className="text-left py-2 font-medium">FAQ</button>
                <button onClick={() => scrollTo('contact')} className="bg-primary text-white py-3 rounded-lg font-bold mt-2">
                  See How Much You'll Save
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E] to-[#0D2748] z-0" />
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
              <span className="text-lg">🏔️</span> Serving All of Colorado
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air</span><br />
              in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Water</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Traditional water meters measure air bubbles as volume. The Smart Valve™ eliminates this, reducing metered consumption by <strong className="text-white">15% to 58%+</strong> based on verified client data. Small one-time installation fee. Pays for itself within the first few billing cycles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo('savings-calc')} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                See How Much You'll Save <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                View Specs &amp; Install
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-1">58.69%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Peak Savings Recorded</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">≥15%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Guaranteed Minimum</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm sm:text-base">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 58.69% Peak Savings Recorded</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Savings Guaranteed</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 & 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> 99% Meter Compatible</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0D1528]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Precision Engineering. Zero Moving Parts.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Fully passive. NSF certified. Compatible with 99% of commercial meters — installed in under 4 hours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "1", title: "Professional Install", desc: "Licensed technician installs upstream of your meter. Fast process with minimal disruption to your operations." },
              { num: "2", title: "Precision Calibration", desc: "The valve is mechanically set to your facility's specific line pressure for maximum air elimination." },
              { num: "3", title: "Instant Savings", desc: "Air exits the line before the meter. Your meter reads true liquid volume only. Savings start immediately." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="text-7xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden glass-panel p-2 box-glow"
            >
              <img src={valveDiagram} alt="Smart Valve installation diagram" className="w-full h-auto rounded-xl" />
              <p className="text-center text-sm text-gray-400 mt-3 pb-2">Smart Valve™ installation flow</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl glass-panel p-8 flex flex-col justify-center gap-5"
            >
              {[
                { label: "Certifications", value: "NSF 61 & NSF 372" },
                { label: "Power Required", value: "None — fully passive" },
                { label: "Meter Compatibility", value: "99% of commercial meters" },
                { label: "Install Time", value: "2–4 hours, zero downtime" },
                { label: "Guaranteed Minimum", value: "≥15% bill reduction" },
                { label: "Maintenance", value: "None — no moving parts" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm">{spec.label}</span>
                  <span className="text-white font-semibold text-sm text-right">{spec.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <BubbleValveSection />

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proven at Scale: Amazon Fulfillment Centers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The world's most demanding operational standards — verified results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics Giant</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ3 Fulfillment Center</h3>
              <div className="text-4xl font-black text-primary mb-6 text-glow">Peak Savings: 58.69%</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 58.69% peak single-quarter reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 17% sustained average savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 6 consecutive quarters of verified data</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption to facility</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics Giant</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ4 Fulfillment Center</h3>
              <div className="text-4xl font-black text-primary mb-6 text-glow">Consistent: 16% Average</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 16% average savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Exceeds 15% guaranteed minimum</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Q3 2024 – Q4 2025 tracked</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption</li>
              </ul>
            </motion.div>
          </div>

          {/* Additional verified clients */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Car Wash Chain",
                name: "Caliber Car Wash",
                stat: "23%",
                sub: "Weighted avg across 5 GA/FL locations",
                items: ["23% weighted average savings", "5 verified sites in Georgia & Florida", "Continuous high-volume water use", "Consistent results across all locations"]
              },
              {
                label: "Luxury Hospitality",
                name: "Four Seasons Fort Lauderdale",
                stat: "$27K/yr",
                sub: "Annual verified savings",
                items: ["26% average water reduction", "$27,000 annual savings verified", "No impact to guest experience", "Zero maintenance required"]
              },
              {
                label: "Mixed-Use Complex",
                name: "Grand Central at Kennedy",
                stat: "$50K/yr",
                sub: "Tampa, FL — annual savings",
                items: ["23% metered reduction", "$50,000 annual savings verified", "Large-scale multi-use property", "Exceeded minimum guarantee by 8%"]
              }
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-4">{c.label}</span>
                <h3 className="text-lg font-bold text-white mb-2">{c.name}</h3>
                <div className="text-3xl font-black text-primary mb-1">{c.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{c.sub}</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  {c.items.map((item, j) => (
                    <li key={j} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-lg text-blue-100 italic">
              "Engineering analysis confirms measurable, repeatable reduction in metered water consumption across all monitored quarters. Results exceed the guaranteed minimum threshold."
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1528] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Designed for properties spending at least $5,000/month on water.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Office Buildings", desc: "Significant reduction in water bills from cooling towers and domestic lines." },
              { icon: Home, title: "Multi-Family Residential", desc: "Protect NOI against rising municipal utility rates." },
              { icon: Hotel, title: "Hotels & Hospitality", desc: "Invisible savings that never impact the guest experience." },
              { icon: Cross, title: "Hospitals & Medical", desc: "Reliable operation for demanding, high-volume facilities." },
              { icon: Droplets, title: "Car Washes", desc: "Massive ROI due to continuous high-volume water consumption." },
              { icon: Utensils, title: "Restaurants & Food Service", desc: "Lower overhead costs in margin-tight operations." },
              { icon: Flag, title: "Golf Courses & Country Clubs", desc: "Irrigation and clubhouse operations make golf one of the highest-ROI applications." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1A233A] p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLORADO */}
      <section id="why-colorado" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img src={smartValve} alt="Smart Valve Unit" className="relative z-10 w-full h-auto rounded-2xl box-glow border border-white/10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Colorado Properties Need This</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Colorado's high-altitude municipal systems operate at elevated line pressures. Combined with aging infrastructure and rising utility rates from Denver Water, Colorado Springs Utilities, and other Front Range providers, commercial properties are paying for far more volume than they're actually using.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Rising Utility Costs</h4>
                    <p className="text-gray-400">Colorado utility rates have increased significantly year-over-year, shrinking property margins.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">High Pressure Surges</h4>
                    <p className="text-gray-400">Mountain-fed systems create air entrainment conditions that are absolutely ideal for Smart Valve™ intervention.</p>
                  </div>
                </div>
              </div>

              <button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center gap-2">
                Get a Colorado Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <SavingsCalculator />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1528] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CONTACT / HUBSPOT FORM */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Find Out How Much You'll Save</h2>
              
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-blue-50 text-lg font-medium">
                  Small one-time installation fee. No monthly fees, no subscription. Pays for itself within the first few billing cycles through your water bill savings.
                </p>
              </div>

              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span><strong>Zero Obligation</strong> — Free assessment, no commitment required</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span><strong>Local Colorado Experts</strong> — Serving the Front Range</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span><strong>15% Savings Guaranteed</strong> — In writing, every installation</span>
                </div>
              </div>

              <div className="bg-[#121B2E] p-8 rounded-2xl border border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-4">Your Colorado Representative</h4>
                <div className="text-2xl font-bold text-white mb-2">{REP_INFO.name}</div>
                <a href={`tel:${REP_INFO.phone.replace(/-/g, '')}`} className="block text-primary text-xl font-medium hover:underline mb-2">{REP_INFO.phone}</a>
                <a href={`mailto:${REP_INFO.email}`} className="block text-gray-300 hover:text-white transition-colors">{REP_INFO.email}</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Assessment</h3>
              
              {/* HubSpot Form Embed Container */}
              <div className="min-h-[400px]">
                <HubspotForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080F] border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="PWV" className="w-10 h-10" />
                <div className="font-bold text-xl leading-tight text-white">
                  Perfect Water<br/><span className="text-primary">Valve</span>
                </div>
              </div>
              <p className="text-gray-400 font-medium mb-2">Guaranteed ≥15% Water Bill Reduction</p>
              <p className="text-gray-500 text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NSF 61 & 372 Certified</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-primary transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollTo('savings-calc')} className="hover:text-primary transition-colors">Savings Calculator</button></li>
                <li><button onClick={() => scrollTo('case-studies')} className="hover:text-primary transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Denver Metro</li>
                <li>Colorado Springs</li>
                <li>Boulder & Fort Collins</li>
                <li>Aurora & Lakewood</li>
                <li className="text-primary font-medium">All of Colorado</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="text-white font-medium">{REP_INFO.name}</li>
                <li><a href={`tel:${REP_INFO.phone.replace(/-/g, '')}`} className="hover:text-primary transition-colors">{REP_INFO.phone}</a></li>
                <li><a href={`mailto:${REP_INFO.email}`} className="hover:text-primary transition-colors break-all">{REP_INFO.email}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</div>
            <a href="https://perfectwatervalve.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">PerfectWaterValve.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Subcomponents ---

function SavingsCalculator() {
  const [bill, setBill] = useState<number>(15000);
  
  const minSavings = bill * 0.15;
  const maxSavings = bill * 0.26;
  const annualAvg = bill * 12 * 0.20;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="savings-calc" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See How Much You Could Save</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Adjust your current monthly water bill to see your estimated savings range.</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <label className="text-gray-300 font-medium text-lg">Average Monthly Water Bill</label>
              <div className="text-3xl sm:text-4xl font-bold text-white">{formatCurrency(bill)}</div>
            </div>
            <input 
              type="range" 
              min="5000" 
              max="100000" 
              step="1000" 
              value={bill} 
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-3 bg-[#1A233A] rounded-lg appearance-none cursor-pointer accent-primary"
              style={{
                background: `linear-gradient(to right, #0374A7 0%, #0374A7 ${(bill - 5000) / (100000 - 5000) * 100}%, #1A233A ${(bill - 5000) / (100000 - 5000) * 100}%, #1A233A 100%)`
              }}
            />
            <div className="flex justify-between mt-3 text-sm text-gray-500 font-medium">
              <span>$5,000</span>
              <span>$100,000+</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Monthly Savings</div>
              <div className="text-3xl font-bold text-primary text-glow">
                {formatCurrency(minSavings)} – {formatCurrency(maxSavings)}
              </div>
            </div>
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Annual Savings</div>
              <div className="text-3xl font-bold text-white">
                ~{formatCurrency(annualAvg)}
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">
              Payback Period: Typically within 2–4 billing cycles
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if(el) el.scrollIntoView({behavior: 'smooth'});
              }}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1"
            >
              Get Your Free Assessment &rarr;
            </button>
            <p className="mt-6 text-xs text-gray-500 max-w-lg">
              *Range based on verified client results: Amazon (17–58.69%), Caliber Car Wash (23%), Four Seasons (26%), Grand Central (23%). Minimum 15% savings guaranteed in writing. Peak results depend on line pressure and municipal infrastructure conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the Smart Valve™ actually work?",
      a: "Water systems trap air bubbles that pass through your meter and get counted as water volume. The Smart Valve™ maintains upstream pressure while creating conditions that allow air to exit the line before reaching your meter. You pay only for actual liquid water."
    },
    {
      q: "Is the 15% savings really guaranteed?",
      a: "Yes. Every installation comes with a written guarantee of at least 15% reduction in metered water consumption. If your facility doesn't achieve 15% savings, we make it right."
    },
    {
      q: "How long does installation take?",
      a: "Most commercial installations are completed in 2–4 hours with zero disruption to operations. Our licensed technicians work around your schedule."
    },
    {
      q: "Will it work with my existing meter?",
      a: "The Smart Valve™ is compatible with 99% of commercial water meters. We confirm compatibility during a free site assessment before any commitment."
    },
    {
      q: "Does it require power or maintenance?",
      a: "No. The Smart Valve™ is entirely passive — no electricity, no moving parts that wear out, no monthly service fees. It works continuously with zero maintenance."
    },
    {
      q: "What is the cost?",
      a: "There's a small one-time installation fee (no monthly fees, no subscription). The fee varies by property size and line diameter. Most properties recover the full cost within 2–4 water billing cycles through their savings."
    },
    {
      q: "Does this affect water pressure or quality?",
      a: "No. Water pressure and quality are completely unaffected. The Smart Valve™ only changes what your meter reads — it eliminates phantom volume from air, not actual water flow."
    },
    {
      q: "What certifications does it have?",
      a: "NSF 61 and NSF 372 certified — the gold standard for drinking water system components in the US."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className={`border rounded-xl transition-all duration-300 ${openIdx === idx ? 'bg-[#1A233A] border-primary/30' : 'bg-[#121B2E] border-white/5 hover:border-white/20'}`}
        >
          <button 
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className={`font-bold text-lg ${openIdx === idx ? 'text-white' : 'text-gray-300'}`}>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : 'text-gray-500'}`} />
          </button>
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function HubspotForm() {
  useEffect(() => {
    // Prevent multiple script injections in React StrictMode
    if (document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/244877209.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/244877209.js';
    script.defer = true;
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244877209",
          formId: "c354a660-f465-466c-a016-2b33bddab522",
          target: '#hubspot-form-container'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup not strictly necessary for landing page, but good practice
    };
  }, []);

  return (
    <div>
      <div id="hubspot-form-container">
        {/* The form will render inside this div */}
      </div>
      {/* Fallback frame just in case the JS API above fails but the script loads */}
      <div className="hs-form-frame hidden" data-region="na2" data-form-id="c354a660-f465-466c-a016-2b33bddab522" data-portal-id="244877209"></div>
    </div>
  );
}

// Ensure global type for hbspt exists
declare global {
  interface Window {
    hbspt: any;
  }
}
