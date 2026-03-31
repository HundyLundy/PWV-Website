import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Home, Hotel, Cross, Droplets, Utensils, Flag,
  CheckCircle2, ChevronDown, ArrowRight, ShieldCheck,
  ZapOff, Activity, AlertTriangle, TrendingUp, DollarSign
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import valveDiagram from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import smartValve from "@assets/smart-valve1_1774325826879.avif";
import { BubbleValveSection } from "@/components/BubbleValveSection";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact";
const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

export default function TexasNewPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={scrollTo} page="texas" />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-lg">🌵</span> Serving All of Texas
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Official AWS &amp; CWS Partner
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Texas Commercial Water Bills Are Rising 32% by 2029 —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Smart Valve™ Cuts Yours by 15–58% Guaranteed
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              SAWS is proposing an 8% rate hike for 2026 as part of a four-year plan to raise commercial rates by 32.7% by 2029. Dallas offers rebates up to $100,000 for water-saving equipment. The Smart Valve™ qualifies — and pays for itself in billing cycles, not years.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                Get a Free Texas Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo("savings-calc")} className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Calculate My Savings
              </button>
            </div>
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

      {/* WHY TEXAS */}
      <section id="why-texas" className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">The Texas Water Reality</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Texas Commercial Water Costs Are Compounding Every Year</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Rate hikes, Edwards Aquifer limits, and hard pumping caps create real supply constraints for Central Texas commercial properties.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: TrendingUp, color: "red", title: "SAWS — 32.7% by 2029", body: "San Antonio Water System is proposing an 8% hike for 2026 as part of a four-year plan raising commercial rates 32.7% by 2029. Every year you wait, the baseline cost climbs before you've saved anything." },
              { icon: AlertTriangle, color: "orange", title: "Edwards Aquifer Hard Limits", body: "The Edwards Aquifer Authority imposes hard pumping limits that create real supply constraints for Central Texas commercial properties. Permit compliance is non-negotiable — conservation is the fastest path to compliance." },
              { icon: DollarSign, color: "yellow", title: "Dallas Rebates Up to $100,000", body: "Dallas offers commercial rebates up to $100,000 for water-saving equipment upgrades. Smart Valve™ installations qualify. Most properties recover installation costs through the rebate and first-cycle savings combined." },
              { icon: Droplets, color: "blue", title: "Aqua Texas Rate Hike — March 2026", body: "Aqua Texas implemented new rate hikes in March 2026. For commercial properties in North Texas suburban markets, this added immediate recurring cost pressure on top of the SAWS increases already in the pipeline." },
              { icon: Activity, color: "teal", title: "No Upfront Cost Structure Available", body: "Perfect Water Valve's AWS-backed installation model offers flexible payment structures that allow Smart Valve™ to self-fund from the first billing cycle. The valve pays for itself — often before your next bill arrives." },
              { icon: Building2, color: "purple", title: "All Major TX Markets Served", body: "Dallas-Fort Worth, Houston, Austin, San Antonio, El Paso, and all Texas markets. Whether you're under SAWS, Dallas Water Utilities, Austin Water, or a municipal district, our team knows your rate structure." }
            ].map((item, i) => {
              const colorMap: Record<string, string> = { red: "bg-red-500/10 text-red-500 border-red-500/20", orange: "bg-orange-500/10 text-orange-500 border-orange-500/20", blue: "bg-blue-500/10 text-blue-600 border-blue-500/20", yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", teal: "bg-teal-500/10 text-teal-600 border-teal-500/20", purple: "bg-purple-500/10 text-purple-600 border-purple-500/20" };
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Precision Engineering. Zero Moving Parts.</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">Fully passive. NSF certified. Compatible with 99% of commercial meters — installed in under 4 hours with zero disruption.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "1", title: "Professional Install", desc: "Licensed technician installs upstream of your meter. Minimal disruption — most Texas installs complete in 2–4 hours." },
              { num: "2", title: "Precision Calibration", desc: "Mechanically set to your facility's specific line pressure for maximum air elimination." },
              { num: "3", title: "Instant Savings", desc: "Air exits before the meter. Your meter reads only liquid volume. Savings appear on your very next bill." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:border-primary/40 transition-colors">
                <div className="text-7xl font-black absolute -top-4 -right-4" style={{ color: "#0030B5", opacity: 0.07 }}>{step.num}</div>
                <div className="w-12 h-12 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-white">{step.title}</h3>
                <p className="leading-relaxed relative z-10 text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-[#121B2E] border border-white/10 p-2 shadow-md">
              <img src={valveDiagram} alt="Smart Valve installation diagram" className="w-full h-auto rounded-xl" />
              <p className="text-center text-sm mt-3 pb-2 text-gray-400">Smart Valve™ installation flow</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#121B2E] border border-white/10 p-8 flex flex-col justify-center gap-5">
              {[
                { label: "Certifications", value: "NSF 61 & NSF 372" },
                { label: "Power Required", value: "None — fully passive" },
                { label: "Meter Compatibility", value: "99% of commercial meters" },
                { label: "Install Time", value: "2–4 hours, zero downtime" },
                { label: "Guaranteed Minimum", value: "≥15% bill reduction" },
                { label: "Maintenance", value: "None — no moving parts" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-400">{spec.label}</span>
                  <span className="font-semibold text-sm text-right text-white">{spec.value}</span>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Verified Performance Data</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Real Results Across Every Industry</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">All results independently verified via M&amp;V. AWS, CWS, and Smart Valve™ certified.</p>
          </div>

          {/* TEXAS-SPECIFIC VERIFIED RESULTS */}
          <div className="rounded-2xl border border-primary/30 p-8 mb-12" style={{ background: 'rgba(3,116,167,0.12)', backdropFilter: 'blur(8px)' }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ background: '#0374A7', border: '1px solid rgba(255,255,255,0.2)' }}>
                Texas Results — Verified
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Source: smartwatervalvetexas.com</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Houston Office Building #1</p>
                <p className="text-white font-semibold">180,000 SF · 10 Stories</p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <div><span className="text-2xl font-bold text-primary">39%</span><span className="text-gray-400 text-sm ml-1">bill reduction</span></div>
                  <div><span className="text-2xl font-bold text-primary">37%</span><span className="text-gray-400 text-sm ml-1">usage reduction</span></div>
                </div>
                <p className="text-gray-500 text-xs">Payback under 12 months</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Houston Office Building #2 · 11811 North Frwy</p>
                <p className="text-white font-semibold">156,000 SF · 9 Stories</p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <div><span className="text-2xl font-bold text-primary">33%</span><span className="text-gray-400 text-sm ml-1">bill reduction</span></div>
                  <div><span className="text-2xl font-bold text-primary">38%</span><span className="text-gray-400 text-sm ml-1">usage reduction</span></div>
                </div>
                <blockquote className="text-gray-300 text-xs italic border-l-2 border-primary/40 pl-3 mt-2">
                  "We intend to begin adding Smart Water Valves throughout our portfolio."<br/>
                  <span className="not-italic text-gray-500">— Mark Malone, Director of Engineering, Houston Hartman REIT</span>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Car Wash — Texas Market Directly Applicable</span>
              <h3 className="text-2xl font-bold text-white mb-4">Caliber Car Wash (5 Sites)</h3>
              <div className="text-4xl font-black text-primary mb-6">23% Average + $38,400/yr</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 23% weighted average savings across 5 sites</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> $38,400/year in verified savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Results under Texas-comparable conditions</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Under SAWS-style rate pressure, savings compound annually</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics / Data Center — Applicable to DFW &amp; Houston</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ3 Fulfillment Center</h3>
              <div className="text-4xl font-black text-primary mb-6">Peak Savings: 58.69%</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 58.69% peak single-quarter reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 17% sustained average savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 6 consecutive verified quarters</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption</li>
              </ul>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {[
              { label: "Luxury Hospitality", name: "Four Seasons Fort Lauderdale", stat: "$27K/yr", sub: "26% savings — applicable to Houston & DFW hotel market", items: ["26% water reduction", "$27,000 annual savings", "Zero guest impact", "No maintenance"] },
              { label: "Mixed-Use", name: "Grand Central at Kennedy", stat: "$50K/yr", sub: "23% — applicable to Texas mixed-use properties", items: ["23% metered reduction", "$50,000 annual savings", "Multi-use property", "Exceeded 15% guarantee"] }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-6">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-4">{c.label}</span>
                <h3 className="text-lg font-bold text-white mb-2">{c.name}</h3>
                <div className="text-3xl font-black text-primary mb-1">{c.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{c.sub}</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  {c.items.map((item, j) => <li key={j} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><a href="/results/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">View all verified case studies <ArrowRight className="w-4 h-4" /></a></div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Serve in Texas</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">Dallas-Fort Worth, Houston, Austin, San Antonio, El Paso — any commercial property spending $5,000+/month on water.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Office Buildings", desc: "Cooling towers and domestic lines across DFW, Houston, and Austin." },
              { icon: Home, title: "Multi-Family", desc: "Protect NOI in Texas's fastest-growing apartment markets." },
              { icon: Hotel, title: "Hotels & Hospitality", desc: "San Antonio tourism, Houston convention, DFW airport corridor." },
              { icon: Droplets, title: "Car Washes", desc: "Water is your #1 variable cost. Smart Valve™ cuts it immediately." },
              { icon: Cross, title: "Hospitals", desc: "Texas Medical Center, Houston — highest water intensity buildings." },
              { icon: Building2, title: "Data Centers", desc: "DFW is a top-3 US data center market. Cooling water dominates." },
              { icon: Utensils, title: "Restaurants", desc: "Texas has 50,000+ food service locations. Margins are thin." },
              { icon: Flag, title: "Golf Courses", desc: "Texas has 900+ courses — among the highest ROI applications." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/25 hover:bg-white/25 transition-all flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white/20 text-white rounded-full flex items-center justify-center mb-4"><item.icon className="w-7 h-7" /></div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <StateCalculator scrollTo={scrollTo} stateLabel="Texas" footerNote="*Calculations based on verified M&V data. SAWS rates increasing 32.7% by 2029 — savings compound as your baseline cost rises." />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(135deg, #0374A7 0%, #025d87 60%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Texas FAQ</h2></div>
          <TexasFAQ />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-8">Get a Free Texas Assessment</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-blue-50 text-lg font-medium">Small one-time installation fee. No monthly fees, no subscription. Pays for itself within the first few billing cycles through your water bill savings.</p>
              </div>
              <div className="space-y-4 mb-10">
                {[
                  { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
                  { title: "All Texas Markets", desc: "Dallas, Houston, Austin, San Antonio, El Paso and beyond" },
                  { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
                  { title: "Dallas Rebate Assistance", desc: "We help Dallas properties file for up to $100,000 in rebates" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg text-gray-300">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span><strong>{item.title}</strong> — {item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#121B2E] p-8 rounded-2xl border border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-4">Perfect Water Valve — Texas</h4>
                <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="block text-primary text-xl font-medium hover:underline mb-2">{CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="block text-gray-300 hover:text-white transition-colors">{CONTACT.email}</a>
                <p className="text-gray-500 text-xs mt-4">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Texas Assessment</h3>
              <ContactForm source="perfectwatervalve.com/locations/texas" />
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
                <div className="font-bold text-xl leading-tight text-white">Perfect Water<br /><span className="text-primary">Valve</span></div>
              </div>
              <p className="text-gray-400 font-medium mb-2">Guaranteed ≥15% Water Bill Reduction</p>
              <p className="text-gray-500 text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> NSF 61 &amp; 372 Certified</p>
              <p className="text-gray-600 text-xs mt-2">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS)</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollTo("why-texas")} className="hover:text-primary transition-colors">Why Texas</button></li>
                <li><button onClick={() => scrollTo("how-it-works")} className="hover:text-primary transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollTo("case-studies")} className="hover:text-primary transition-colors">Case Studies</button></li>
                <li><a href="/results/" className="hover:text-primary transition-colors">All Case Studies</a></li>
                <li><a href="/" className="hover:text-primary transition-colors">PerfectWaterValve.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Texas Markets</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Dallas-Fort Worth", "Houston", "Austin", "San Antonio", "El Paso", "Lubbock", "Amarillo", "Corpus Christi"].map(city => <li key={city}>{city}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="hover:text-primary transition-colors">{CONTACT.phone}</a></li>
                <li><a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors break-all">{CONTACT.email}</a></li>
                <li className="pt-4"><a href="/" className="text-primary hover:underline text-sm">← PerfectWaterValve.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</div>
            <div className="flex items-center gap-5">
              <a href="https://perfectwatervalve.com" className="hover:text-white transition-colors">PerfectWaterValve.com</a>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaFacebook className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Shared Sub-components ---

export function StateCalculator({ scrollTo, stateLabel, footerNote }: { scrollTo: (id: string) => void; stateLabel: string; footerNote?: string }) {
  const [bill, setBill] = useState<number>(15000);
  const minSavings = bill * 0.15;
  const maxSavings = bill * 0.26;
  const annualAvg = bill * 12 * 0.20;
  const fmt = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

  return (
    <section id="savings-calc" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Calculate Your {stateLabel} Savings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Based on verified Smart Valve™ results. Calculations based on real-world installations partnered with AWS, CWS, and Smart Valve.</p>
        </div>
        <div className="glass-panel rounded-3xl p-8 sm:p-12">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <label className="text-gray-300 font-medium text-lg">Average Monthly Water Bill</label>
              <div className="text-3xl sm:text-4xl font-bold text-white">{fmt(bill)}</div>
            </div>
            <input type="range" min="5000" max="100000" step="1000" value={bill} onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{ background: `linear-gradient(to right, #0374A7 0%, #0374A7 ${(bill - 5000) / 95000 * 100}%, #1A233A ${(bill - 5000) / 95000 * 100}%, #1A233A 100%)` }} />
            <div className="flex justify-between mt-3 text-sm text-gray-500 font-medium"><span>$5,000</span><span>$100,000+</span></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Monthly Savings</div>
              <div className="text-3xl font-bold text-primary">{fmt(minSavings)} – {fmt(maxSavings)}</div>
            </div>
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Annual Savings</div>
              <div className="text-3xl font-bold text-white">~{fmt(annualAvg)}</div>
            </div>
          </div>
          <div className="text-center mb-10">
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">Payback Period: Typically within 2–4 billing cycles</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <button onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1">
              Get Your Free Assessment &rarr;
            </button>
            <p className="mt-6 text-xs text-gray-500 max-w-lg">{footerNote || "*Range based on verified client results. Minimum 15% guaranteed in writing."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TexasFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "Does the Dallas rebate apply to Smart Valve™?", a: "Yes. Dallas offers commercial rebates up to $100,000 for water-saving equipment upgrades. Smart Valve™ installations qualify. Contact us and we'll help you file the application." },
    { q: "How does SAWS's rate increase affect my savings?", a: "As SAWS rates rise 32.7% by 2029, your baseline bill goes up — meaning the same percentage reduction produces more dollar savings each year. Smart Valve™ savings compound as rates climb." },
    { q: "Does the Smart Valve™ work in Texas heat conditions?", a: "Yes. The Smart Valve™ is fully passive and operates in all temperature conditions. Texas's high-pressure municipal systems and aging infrastructure in many markets actually increase air entrapment, making the Smart Valve™ especially effective." },
    { q: "Is the 15% savings really guaranteed?", a: "Yes. Every installation includes a written guarantee of at least 15% reduction in metered water consumption. If your facility doesn't achieve 15%, we make it right." },
    { q: "How long does installation take?", a: "Most Texas commercial installations complete in 2–4 hours with zero disruption to operations. Our licensed technicians work around your schedule." },
    { q: "What Texas utilities do you work with?", a: "All of them — SAWS, Dallas Water Utilities, Austin Water, Houston's Harris County MUD system, City of El Paso, and all municipal districts across the state." },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className={`border rounded-xl transition-all duration-300 backdrop-blur-sm ${openIdx === idx ? "bg-white/20 border-white/50" : "bg-white/10 border-white/20 hover:border-white/40"}`}>
          <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            <span className="font-bold text-lg text-white">{faq.q}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${openIdx === idx ? "rotate-180 text-white" : "text-white/70"}`} />
          </button>
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 pt-0 text-white/80 leading-relaxed">{faq.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ source }: { source: string }) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", bill: "", message: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, monthly_water_bill: form.bill, source }),
      });
    } catch (err) { console.error("GHL webhook error:", err); }
    setSubmitted(true);
    setForm({ name: "", company: "", phone: "", bill: "", message: "", email: "" });
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-400";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5";

  if (submitted) return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-8 h-8 text-green-600" /></div>
      <h3 className="text-xl font-bold text-gray-900">Request Sent!</h3>
      <p className="text-gray-500 text-sm max-w-sm">We'll follow up shortly. Or reach us at <a href="tel:7209373004" className="text-blue-600 font-medium hover:underline">720-937-3004</a>.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Your Name</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Jane Smith" /></div>
        <div><label className={labelCls}>Company / Facility</label><input required value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Acme Hotel Group" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Phone Number</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="(720) 555-0100" type="tel" /></div>
        <div><label className={labelCls}>Email Address</label><input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="jane@company.com" type="email" /></div>
      </div>
      <div><label className={labelCls}>Monthly Water Bill (est.)</label><input value={form.bill} onChange={e => setForm({ ...form, bill: e.target.value })} className={inputCls} placeholder="$15,000" /></div>
      <div><label className={labelCls}>Tell Us About Your Property</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none h-24`} placeholder="Property type, size, location..." /></div>
      <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25">Get My Free Assessment →</button>
      <p className="text-xs text-center text-gray-400">No obligation. Free assessment. 15% savings guaranteed in writing.</p>
    </form>
  );
}
