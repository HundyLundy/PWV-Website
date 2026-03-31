import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, ZapOff, Activity, Building2, Server, Thermometer, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import valveDiagram from "@assets/PWV_-_how_valve_works_image_1774323165404.png";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact";
const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

export default function DataCenters() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={scrollTo} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>🖥️</span> Data Center Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Amazon YYZ3 — 58.69% Peak Verified
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Data Centers Pay More for Water Than Almost Any Commercial Property —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Smart Valve™ Cuts Cooling Water Bills 15–58%
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Cooling towers are the largest water consumer in any data center. The Smart Valve™ reduces your metered cooling water consumption by a guaranteed 15% minimum — with Amazon YYZ3 achieving 58.69% peak savings. No power required. No downtime. No operational impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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
              { icon: Thermometer, color: "red", title: "Cooling Towers — Highest Water Use", body: "Evaporative cooling towers, which are standard in large data centers, consume enormous volumes of water. This water passes through your meter and is billed at commercial rates — air entrapment inflates every gallon billed." },
              { icon: DollarSign, color: "yellow", title: "AI Workloads Increasing Water Use", body: "AI inference and training workloads generate significantly more heat than traditional compute workloads — increasing cooling water demand. The water cost trajectory for AI-intensive facilities is steeply upward." },
              { icon: Activity, color: "orange", title: "ESG Water Metrics Under Scrutiny", body: "Data center operators face growing pressure from investors, customers, and regulators to reduce water consumption intensity (WUE). Smart Valve™ directly reduces metered consumption and improves WUE metrics." },
              { icon: Server, color: "blue", title: "Municipal Rate Pressure in Tech Hubs", body: "Data center markets like Denver, Seattle, Phoenix, Dallas, and Northern Virginia are all experiencing commercial rate increases. Each percentage point increase compounds across millions of gallons of consumption." },
              { icon: Building2, color: "teal", title: "Zero Operational Risk", body: "The Smart Valve™ is fully passive — no moving parts, no power required, no maintenance. Installation takes 2–4 hours with zero disruption to data center operations. No downtime, no outage risk." },
              { icon: ShieldCheck, color: "green", title: "M&V Documentation for ESG Reporting", body: "Smart Valve™ installations include Measurement & Verification (M&V) documentation that satisfies ESG water reduction reporting requirements for investors, sustainability auditors, and regulatory bodies." }
            ].map((item, i) => {
              const colorMap: Record<string, string> = { red: "bg-red-500/10 text-red-500 border-red-500/20", orange: "bg-orange-500/10 text-orange-500 border-orange-500/20", blue: "bg-blue-500/10 text-blue-600 border-blue-500/20", yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", teal: "bg-teal-500/10 text-teal-600 border-teal-500/20", green: "bg-green-500/10 text-green-600 border-green-500/20" };
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
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics & Fulfillment Data Center</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ3 Fulfillment Center</h3>
              <div className="text-5xl font-black text-primary mb-6">58.69%</div>
              <p className="text-gray-300 mb-6">Peak single-quarter savings — the highest verified Smart Valve™ result in our entire client portfolio. 6 consecutive quarters of independently verified data.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 58.69% peak single-quarter water bill reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 17% sustained average savings across all quarters</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 6 consecutive quarters of AWS M&amp;V verified data</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption to facility at any point</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Installation completed in under 4 hours</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Logistics & Fulfillment Data Center</span>
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

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Data Center Assessment</h2>
          <p className="text-white/80 mb-8">We'll analyze your cooling water consumption and calculate your exact savings potential. Zero obligation. Guaranteed 15% minimum.</p>
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
            <a href="/" className="hover:text-white transition-colors">PerfectWaterValve.com</a>
            <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
