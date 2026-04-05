import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Home, DollarSign, TrendingUp, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

export default function Multifamily() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Multifamily Water Savings | $50K/yr — Grand Central Tampa | Perfect Water Valve</title>
      </Helmet>
      <Navbar onScrollTo={scrollTo} />

      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>🏢</span> Multifamily Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Grand Central — $50K/yr Verified
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Rising Water Rates Are Destroying Multifamily NOI —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Smart Valve™ Protects Your NOI with Guaranteed 15%–35% annually Savings</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Grand Central at Kennedy in Tampa achieved $50,000/year in verified savings — a 23% water reduction. For multifamily operators, water is a non-revenue expense that flows directly to NOI. Smart Valve™ converts a cost center into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Property Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> $50K/yr — Grand Central Tampa (Verified)</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Resident Impact</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Direct NOI Improvement</div>
          </div>
        </div>
      </section>

      {/* PREMIUM SUB-PAGE MODULES */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-8">Explore the Full Picture</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a href="/industries/multifamily/water-costs"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-green-500/10 text-green-400 border-green-500/20 shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">Module 1</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">Multifamily Water Costs — The Master Meter Problem</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Why apartment owners pay for every gallon tenants use, how the master meter inflates bills beyond actual consumption, and how Smart Valve™ fixes it permanently.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Explore Water Costs <ArrowRight className="w-4 h-4" /></span>
            </motion.a>

            <motion.a href="/industries/multifamily/irrigation-common-areas"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-[#DEC600]/40 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DEC600]/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-blue-500/10 text-blue-400 border-blue-500/20 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#DEC600]/70 mb-2">Module 2</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-snug">Irrigation & Common Areas — 30–50% of Total Water Use</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Landscaping irrigation and common area water use represent the largest single savings opportunity in multifamily. Full breakdown with seasonal modeling and ROI projections.</p>
              <span className="inline-flex items-center gap-2 text-[#DEC600] font-semibold text-sm group-hover:gap-3 transition-all">See the Irrigation Guide <ArrowRight className="w-4 h-4" /></span>
            </motion.a>
          </div>
        </div>
      </section>

      <SavingsCalcModule defaultBill={18000} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Water Is Multifamily's Most Underserved Operating Cost — and It's Growing</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>For multifamily operators, water costs flow directly to NOI — there's no way to pass them to tenants in most markets. Smart Valve™ is a one-time expense that delivers permanent NOI improvement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, color: "green", title: "$50,000/Year — Grand Central Tampa", body: "Grand Central at Kennedy in Tampa, FL achieved $50,000/year in verified annual savings with 23% metered water reduction. This is a large-scale multifamily complex — results are comparable to Class A properties in major US markets." },
              { icon: TrendingUp, color: "red", title: "Rising Rates = Rising NOI Drag", body: "Every 5% utility rate increase on a $15,000/month water bill costs $9,000/year in additional NOI drag. Smart Valve™ cuts the underlying consumption by 15–23%+ — permanently insulating you from rate escalations." },
              { icon: Home, color: "blue", title: "Zero Resident Impact", body: "Smart Valve™ doesn't change water pressure, flow, or quality in resident units. Savings are entirely invisible to residents — no lease negotiations, no complaints, no operational changes." },
              { icon: Building2, color: "orange", title: "Direct Cap Rate Improvement", body: "A $50,000/year NOI improvement at a 5% cap rate increases property value by $1,000,000. Smart Valve™ is one of the few operational improvements that directly and immediately increases the appraisable value of a multifamily asset." },
              { icon: Activity, color: "teal", title: "Portfolio Scalability", body: "Smart Valve™ scales consistently across portfolios. One installation per property. No recurring fees. For a 10-property portfolio, the Grand Central result ($50K/year/property) suggests $500,000/year in portfolio-level savings." },
              { icon: ShieldCheck, color: "purple", title: "NSF Certified — Safe for Residential Use", body: "NSF 61 and NSF 372 certification means Smart Valve™ is completely safe for installation in residential water supply systems serving both common areas and individual units." }
            ].map((item, i) => {
              const colorMap: Record<string, string> = { red: "bg-red-500/10 text-red-500 border-red-500/20", orange: "bg-orange-500/10 text-orange-500 border-orange-500/20", blue: "bg-blue-500/10 text-blue-600 border-blue-500/20", green: "bg-green-500/10 text-green-600 border-green-500/20", teal: "bg-teal-500/10 text-teal-600 border-teal-500/20", purple: "bg-purple-500/10 text-purple-600 border-purple-500/20" };
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Grand Central at Kennedy — $50,000/Year in Tampa, FL</h2>
          </div>
          <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Large-Scale Mixed-Use Multifamily — Tampa, FL</span>
                <div className="text-6xl font-black text-primary mb-4">$50K/yr</div>
                <div className="text-2xl text-white mb-6">23% Metered Water Reduction</div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 23% sustained metered water bill reduction</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> $50,000 annual savings — independently verified</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Large-scale multi-use residential/commercial complex</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero impact to resident experience</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Exceeded 15% minimum guarantee by 53%</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Property Type</div><div className="text-white font-bold">Large-Scale Multifamily Complex — Tampa, FL</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Water Reduction</div><div className="text-primary font-bold text-2xl">23% Average</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Annual NOI Improvement</div><div className="text-primary font-bold text-2xl">$50,000/year</div></div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center"><div className="text-green-400 font-semibold">Cap rate impact at 5%: +$1,000,000 in asset value</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Multifamily Assessment</h2>
          <p className="text-white/80 mb-8">Tell us your property size and monthly water bill. We'll calculate your NOI improvement potential based on Grand Central's verified results.</p>
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
