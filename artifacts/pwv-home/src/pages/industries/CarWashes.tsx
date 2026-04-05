import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Droplets, DollarSign, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

export default function CarWashes() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Car Wash Water Bill Savings | 23% Avg — Caliber Car Wash Verified | Perfect Water Valve</title>
      </Helmet>
      <Navbar onScrollTo={scrollTo} />

      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>🚗</span> Car Wash Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Caliber Car Wash — 23% at 5 Sites
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Car Washes Pay More for Water Per Square Foot Than Almost Any Business —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Smart Valve™ Cuts Your Bill 15%–35% Annually — Starting on the First Bill</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Caliber Car Wash achieved 23% weighted average savings across 5 Georgia and Florida sites — $38,400/year in verified savings. Continuous high-volume water use means Smart Valve™ delivers its maximum ROI in car wash applications. Results are consistent across all locations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Car Wash Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 23% — Caliber Car Wash (5 Verified Sites)</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Process Changes Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Installed in 2–4 Hours</div>
          </div>
        </div>
      </section>

      {/* PREMIUM SUB-PAGE MODULES */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-8">Explore the Full Picture</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a href="/industries/car-washes/water-costs"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-green-500/10 text-green-400 border-green-500/20 shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">Module 1</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">Car Wash Water Costs — Gallons, Rates & True Bill Anatomy</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Water use by wash type, true cost with the sewer multiplier, rate increase compounding, and what Caliber's 23% saving means in dollars at your volume.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Explore Water Costs <ArrowRight className="w-4 h-4" /></span>
            </motion.a>

            <motion.a href="/industries/car-washes/hard-water-equipment"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-[#DEC600]/40 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DEC600]/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-orange-500/10 text-orange-400 border-orange-500/20 shrink-0">
                <ZapOff className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#DEC600]/70 mb-2">Module 2</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-snug">Hard Water & Equipment Damage — Stopped Without Chemicals</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">How mineral scale destroys pumps, nozzles, and reclaim systems — and how Smart Valve™ eliminates scale buildup with no chemicals or softeners required.</p>
              <span className="inline-flex items-center gap-2 text-[#DEC600] font-semibold text-sm group-hover:gap-3 transition-all">See the Equipment Guide <ArrowRight className="w-4 h-4" /></span>
            </motion.a>
          </div>
        </div>
      </section>

      <SavingsCalcModule defaultBill={20000} />

      {/* WHY CAR WASHES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Why Car Washes Are Smart Valve™'s Highest ROI Application</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Car washes run water continuously — no slow periods, no off-hours. Smart Valve™ works 24/7/365. The more you wash, the more you save.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplets, color: "blue", title: "Continuous High-Volume Water Use", body: "Car washes are among the highest water-intensity commercial operations in existence. A tunnel wash uses 50–120 gallons per car. At 1,000 cars/day, that's 50,000–120,000 gallons per day — every gallon subject to air entrapment billing inflation." },
              { icon: DollarSign, color: "green", title: "$38,400/Year at Caliber — Verified", body: "Caliber Car Wash's 23% weighted average across 5 sites equates to $38,400/year in verified water bill savings. For a 10-site chain, that's $76,800/year in operating cost reduction — from one passive device per location." },
              { icon: TrendingUp, color: "yellow", title: "Compound Savings as Rates Rise", body: "Car wash water bills grow with rate increases. A 23% reduction on a $20,000/month bill delivers $4,600/month in savings. As rates rise 6–8% annually, the same percentage cut delivers more dollars every year." },
              { icon: Activity, color: "teal", title: "Zero Process or Equipment Changes", body: "Smart Valve™ installs on your existing supply line. No changes to your tunnel equipment, reclaim system, chemistry, or processes. You wash exactly the same way. Your meter just reads what's actually being used." },
              { icon: CheckCircle2, color: "red", title: "Multi-Site Chain ROI", body: "For car wash chains, Smart Valve™ delivers consistent results across all locations. Caliber's results were consistent across 5 geographically dispersed sites. Chain operators see predictable, scalable savings." },
              { icon: ShieldCheck, color: "purple", title: "NSF 61 & 372 Safe for Car Wash Use", body: "The Smart Valve™ is NSF 61 and NSF 372 certified. It is completely safe for installation in commercial car wash supply systems." }
            ].map((item, i) => {
              const colorMap: Record<string, string> = { red: "bg-red-500/10 text-red-500 border-red-500/20", orange: "bg-orange-500/10 text-orange-500 border-orange-500/20", blue: "bg-blue-500/10 text-blue-600 border-blue-500/20", yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", teal: "bg-teal-500/10 text-teal-600 border-teal-500/20", green: "bg-green-500/10 text-green-600 border-green-500/20", purple: "bg-purple-500/10 text-purple-600 border-purple-500/20" };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm hover:border-[#0374A7]/40 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${colorMap[item.color]}`}><item.icon className="w-6 h-6" /></div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Caliber Car Wash — 5 Sites, 23% Average, $38,400/Year</h2>
          </div>
          <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Car Wash Chain — Georgia &amp; Florida</span>
                <div className="text-6xl font-black text-primary mb-4">23%</div>
                <div className="text-2xl text-white mb-6">Weighted Average Across 5 Sites</div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 23% weighted average savings across all 5 locations</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> $38,400/year in verified cost savings</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Consistent results across all sites — no outliers</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> High-volume continuous water use environment</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero changes to wash process or equipment</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Exceeds 15% guaranteed minimum by 53%</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Number of Sites</div><div className="text-white font-bold text-xl">5 Georgia &amp; Florida Locations</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Average Water Reduction</div><div className="text-primary font-bold text-2xl">23% Weighted Average</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Annual Savings Verified</div><div className="text-primary font-bold text-2xl">$38,400/year</div></div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center"><div className="text-green-400 font-semibold">Scales linearly: 10-site chain = $76,800/year</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Car Wash Assessment</h2>
          <p className="text-white/80 mb-8">Tell us how many locations and your average monthly water bill. We'll calculate your exact savings potential based on Caliber's verified results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-lg">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="bg-transparent border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-lg">{CONTACT.email}</a>
          </div>
          <p className="text-white/60 text-sm">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
        </div>
      </section>

      <footer className="bg-[#05080F] border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3"><img src={logo} alt="PWV" className="w-8 h-8" /><span>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</span></div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-white">PerfectWaterValve.com</a>
            <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
