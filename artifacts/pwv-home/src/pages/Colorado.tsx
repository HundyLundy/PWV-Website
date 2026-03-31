import React, { useState, useEffect } from "react";
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

const REP_INFO = {
  name: "Hunter Lundquist",
  phone: "720-937-3004",
  email: "info@perfectwatervalve.com"
};

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact";

const COLORADO_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the water situation in Colorado for commercial properties?", "acceptedAnswer": { "@type": "Answer", "text": "Colorado commercial property owners face rising water rates from Denver Water, Colorado Springs Utilities, and Aurora Water — Smart Valve™ cuts metered bills 15–58% and qualifies for Denver Water rebates covering up to 50% of installation costs." } },
    { "@type": "Question", "name": "Does the Denver Water rebate apply to Smart Valve™ installations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Denver Water's Custom Commercial Water Efficiency Rebate covers up to 50% of material costs (capped at $10,000 per controlling entity per year) for projects that demonstrate sustained water use reduction. Smart Valve™ installations qualify for pre-approval. Applications are first-come, first-served and the annual budget runs out — contact us now to secure your spot." } },
    { "@type": "Question", "name": "How does Smart Valve™ reduce metered water consumption?", "acceptedAnswer": { "@type": "Answer", "text": "Smart Valve™ installs on the main commercial water supply line in under 4 hours and reduces your metered water bill by 15–58%, guaranteed in writing. It requires no electricity, has no moving parts, and needs no maintenance — ever." } },
    { "@type": "Question", "name": "Is the 15% savings guarantee in writing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every installation comes with a written guarantee of at least 15% reduction in metered water consumption. If your Colorado facility doesn't achieve 15% savings, we make it right at no additional cost." } },
    { "@type": "Question", "name": "How do I get a Colorado water savings assessment?", "acceptedAnswer": { "@type": "Answer", "text": "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your current water bills, calculate projected savings, confirm Denver Water rebate eligibility, and provide a written guarantee before installation." } },
  ]
};

export default function ColoradoPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const existing = document.getElementById("colorado-faq-jsonld");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "colorado-faq-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(COLORADO_FAQ_SCHEMA);
    document.head.appendChild(script);
    return () => { const s = document.getElementById("colorado-faq-jsonld"); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={scrollTo} page="colorado" />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-lg">🏔️</span> Serving All of Colorado
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Official AWS &amp; CWS Partner
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Colorado's Water Crisis Is Getting Worse Every Year —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Denver's Commercial Properties Are Already Paying for It
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Denver Water rates are rising. Colorado Springs is adding 25% over 5 years. The Colorado River is in a declared crisis. The Smart Valve™ cuts your metered bill by <strong className="text-white">15% to 58%+</strong> — and Denver Water's custom rebate covers up to 50% of costs. But the budget runs out every year.
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10 text-sm font-bold" style={{ background: "rgba(220,160,0,0.2)", border: "1px solid rgba(220,160,0,0.5)", color: "#FFD700" }}>
              <AlertTriangle className="w-4 h-4" /> Denver Water rebate covers up to 50% of costs — budget runs out annually
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                Get Pre-Approved for the Rebate <ArrowRight className="w-5 h-5" />
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

      {/* COLORADO CITY PAGES */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: '#E8EFF7', borderColor: '#C5D8E8' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: '#0374A7' }}>Colorado City Pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Denver", slug: "colorado/denver", emoji: "🏔️" },
              { name: "Colorado Springs", slug: "colorado/colorado-springs", emoji: "⛰️" },
              { name: "Aurora", slug: "colorado/aurora", emoji: "🌅" },
              { name: "Fort Collins", slug: "colorado/fort-collins", emoji: "🎓" },
              { name: "Lakewood", slug: "colorado/lakewood", emoji: "🌲" },
            ].map((city) => (
              <a
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border bg-white font-medium text-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#0374A7]"
                style={{ borderColor: '#C5D8E8', color: '#2E4A5A' }}
              >
                <span>{city.emoji}</span> {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLORADO — RATE CRISIS */}
      <section id="why-colorado" className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">The Colorado Water Crisis</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Your Water Rates Are Going Up Whether You Act or Not</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Every major Front Range utility is raising commercial rates. The Colorado River compact expires in 2026. Denver Water has targeted a 20% usage cut. Here's what that means for your property.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: TrendingUp,
                color: "red",
                title: "Denver Water — Tiered Rates Rising",
                body: "Tier 1 at $3.55/1,000 gal. Tier 2 at $4.97. Tier 3 at $5.68. Denver Water is investing $1.7 billion in infrastructure upgrades over 10 years — and commercial customers pay for every dollar of it through annual rate increases."
              },
              {
                icon: AlertTriangle,
                color: "orange",
                title: "Colorado Springs — 25% Over 5 Years",
                body: "Colorado Springs Utilities approved a 5-year rate case (2025–2029) with a cumulative 25% increase for commercial customers — approximately $395 more per month on a typical bill by 2029. Aurora Water implemented new increases effective January 1, 2026."
              },
              {
                icon: Droplets,
                color: "blue",
                title: "Colorado River in Declared Crisis",
                body: "Federal negotiators are debating cuts of up to 4 million acre-feet. The winter of 2025–2026 was one of the driest on record. Most existing Colorado River conservation agreements expire in 2026, creating real supply uncertainty for every Front Range commercial property."
              },
              {
                icon: DollarSign,
                color: "yellow",
                title: "Denver Water Custom Rebate — Up to $10K",
                body: "Denver Water's Commercial Water Efficiency Rebate covers up to 50% of material costs, capped at $10,000 per entity per year. Applications are first-come, first-served. The annual budget runs out. Smart Valve installations qualify for pre-approval."
              },
              {
                icon: AlertTriangle,
                color: "red",
                title: "Violations Trigger Fast Fines",
                body: "Commercial properties that violate Front Range water restrictions face fines starting at $125 that escalate quickly — and have only 3 days (vs. 7 for residential) to correct violations. Smart Valve™ reduces your consumption before fines become an issue."
              },
              {
                icon: Activity,
                color: "teal",
                title: "First-Mover Advantage in Colorado",
                body: "AWS has identified the lowest Smart Valve penetration in the country right here in Colorado. Almost no competition from other Smart Valve installers. Perfect Water Valve has a first-mover advantage in the state's largest commercial market."
              }
            ].map((item, i) => {
              const colorMap: Record<string, string> = { red: "bg-red-500/10 text-red-500 border-red-500/20", orange: "bg-orange-500/10 text-orange-500 border-orange-500/20", blue: "bg-blue-500/10 text-blue-600 border-blue-500/20", yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", teal: "bg-teal-500/10 text-teal-600 border-teal-500/20" };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm hover:border-[#0374A7]/40 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${colorMap[item.color]}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-teal-500/10 border border-primary/20 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-lg font-semibold mb-4" style={{ color: "#0A1F3A" }}>Denver Water's rebate covers up to 50% of Smart Valve™ installation costs — but the annual budget runs out every year.</p>
            <button onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1 inline-flex items-center gap-2">
              Contact Us Now to Get Pre-Approved <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Precision Engineering. Zero Moving Parts.</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">Fully passive. NSF certified. Compatible with 99% of commercial meters — installed in under 4 hours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "1", title: "Professional Install", desc: "Licensed technician installs upstream of your meter. Fast process with minimal disruption to your operations." },
              { num: "2", title: "Precision Calibration", desc: "The valve is mechanically set to your facility's specific line pressure for maximum air elimination." },
              { num: "3", title: "Instant Savings", desc: "Air exits the line before the meter. Your meter reads true liquid volume only. Savings start immediately." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/40 transition-colors">
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
              className="rounded-2xl bg-[#121B2E] border border-white/10 p-8 flex flex-col justify-center gap-5 shadow-sm">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proven at Scale Across Every Industry</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">All results independently verified via Measurement &amp; Verification (M&amp;V). AWS, CWS, and Smart Valve™ certified.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Data Center / Logistics — Denver Market</span>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon YYZ3 Fulfillment Center</h3>
              <div className="text-4xl font-black text-primary mb-6">Peak Savings: 58.69%</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 58.69% peak single-quarter reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 17% sustained average savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 6 consecutive quarters of verified data</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero operational disruption — directly applicable to Denver data centers</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Luxury Hospitality — Applicable to Denver Hotels</span>
              <h3 className="text-2xl font-bold text-white mb-4">Four Seasons Fort Lauderdale</h3>
              <div className="text-4xl font-black text-primary mb-6">$27,000/Year Saved</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 26% average water reduction</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> $27,000 annual verified savings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero impact to guest experience</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Denver hospitality is one of the fastest-growing Mountain West markets</li>
              </ul>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Car Wash Chain", name: "Caliber Car Wash", stat: "23%", sub: "5 GA/FL sites — weighted avg", items: ["23% weighted average savings", "5 verified sites", "Continuous high-volume water use", "Consistent results across all locations"] },
              { label: "Data Center", name: "Amazon YYZ4", stat: "16% Avg", sub: "Consistent above guarantee", items: ["16% average savings", "Exceeds 15% guarantee", "Q3 2024–Q4 2025 tracked", "Zero operational disruption"] },
              { label: "Mixed-Use Complex", name: "Grand Central at Kennedy", stat: "$50K/yr", sub: "Tampa, FL — annual savings", items: ["23% metered reduction", "$50,000 annual savings", "Large-scale multi-use property", "Exceeded guarantee by 8%"] }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
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

          <div className="text-center">
            <a href="/results/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View all verified case studies <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Serve in Colorado</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">Any commercial property spending $5,000+/month on water is a strong candidate. Denver, Colorado Springs, Boulder, Fort Collins, Aurora, Lakewood, Pueblo, and beyond.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Office Buildings", desc: "Cooling towers and domestic lines — significant reduction in bills." },
              { icon: Home, title: "Multi-Family Residential", desc: "Protect NOI against rising Front Range utility rates." },
              { icon: Hotel, title: "Hotels & Hospitality", desc: "Denver's fastest-growing sector. Invisible savings, zero guest impact." },
              { icon: Cross, title: "Hospitals & Medical", desc: "Reliable operation for demanding, high-volume healthcare facilities." },
              { icon: Droplets, title: "Car Washes", desc: "Massive ROI due to continuous high-volume water consumption." },
              { icon: Building2, title: "Data Centers", desc: "Denver is a top-5 data center market. Cooling water is your biggest variable cost." },
              { icon: Utensils, title: "Restaurants & Food Service", desc: "Lower overhead in margin-tight operations across the Front Range." },
              { icon: Flag, title: "Golf Courses", desc: "Irrigation and clubhouse — among the highest-ROI applications in CO." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white/20 text-white rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <ColoradoSavingsCalculator scrollTo={scrollTo} />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(135deg, #0374A7 0%, #025d87 60%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Colorado FAQ</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-4">Get Pre-Approved for Denver Water's Rebate</h2>
              <p className="text-gray-400 mb-8">Denver Water's custom rebate covers up to 50% of installation costs — but the budget runs out every year on a first-come, first-served basis. Contact us now to secure your spot.</p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-blue-50 text-lg font-medium">
                  Small one-time installation fee. No monthly fees, no subscription. Pays for itself within the first few billing cycles through your water bill savings.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { title: "Zero Obligation", desc: "Free assessment, no commitment required" },
                  { title: "Local Colorado Rep", desc: "Hunter Lundquist serves the entire Front Range" },
                  { title: "15% Guaranteed in Writing", desc: "Every installation, no exceptions" },
                  { title: "Denver Water Rebate Eligible", desc: "We help you file — covers up to 50% of costs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg text-gray-300">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span><strong>{item.title}</strong> — {item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#121B2E] p-8 rounded-2xl border border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-4">Your Colorado Representative</h4>
                <div className="text-2xl font-bold text-white mb-2">{REP_INFO.name}</div>
                <a href={`tel:${REP_INFO.phone.replace(/-/g, "")}`} className="block text-primary text-xl font-medium hover:underline mb-2">{REP_INFO.phone}</a>
                <a href={`mailto:${REP_INFO.email}`} className="block text-gray-300 hover:text-white transition-colors">{REP_INFO.email}</a>
                <p className="text-gray-500 text-xs mt-4">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Colorado Assessment</h3>
              <ContactForm source="perfectwatervalve.com/locations/colorado" repName="Hunter" />
            </motion.div>
          </div>
        </div>
      </section>

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
                <li><button onClick={() => scrollTo("why-colorado")} className="hover:text-primary transition-colors">Why Colorado</button></li>
                <li><button onClick={() => scrollTo("how-it-works")} className="hover:text-primary transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollTo("case-studies")} className="hover:text-primary transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollTo("savings-calc")} className="hover:text-primary transition-colors">Savings Calculator</button></li>
                <li><a href="/results/" className="hover:text-primary transition-colors">All Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Colorado Markets</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Denver", "Colorado Springs", "Boulder", "Fort Collins", "Aurora", "Lakewood", "Pueblo", "Loveland", "Greeley", "Arvada"].map(city => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="text-white font-medium">{REP_INFO.name}</li>
                <li><a href={`tel:${REP_INFO.phone.replace(/-/g, "")}`} className="hover:text-primary transition-colors">{REP_INFO.phone}</a></li>
                <li><a href={`mailto:${REP_INFO.email}`} className="hover:text-primary transition-colors break-all">{REP_INFO.email}</a></li>
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

// --- Sub-components ---

function ColoradoSavingsCalculator({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [bill, setBill] = useState<number>(15000);
  const minSavings = bill * 0.15;
  const maxSavings = bill * 0.26;
  const annualAvg = bill * 12 * 0.20;
  const rebate = Math.min(bill * 0.50, 10000);
  const fmt = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

  return (
    <section id="savings-calc" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Calculate Your Colorado Savings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Adjust your monthly water bill. We'll show your estimated savings — and how much Denver Water's rebate offsets your installation cost.</p>
        </div>
        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative">
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
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Monthly Savings Est.</div>
              <div className="text-2xl font-bold text-primary">{fmt(minSavings)} – {fmt(maxSavings)}</div>
            </div>
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Annual Savings Est.</div>
              <div className="text-2xl font-bold text-white">~{fmt(annualAvg)}</div>
            </div>
            <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/20">
              <div className="text-yellow-400 font-medium mb-2">Denver Water Rebate</div>
              <div className="text-2xl font-bold text-yellow-300">Up to {fmt(rebate)}</div>
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">
              Payback Period: Typically within 2–4 billing cycles
            </div>
          </div>
          <div className="text-center flex flex-col items-center">
            <button onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1">
              Get Pre-Approved for the Rebate &rarr;
            </button>
            <p className="mt-6 text-xs text-gray-500 max-w-lg">
              *Range based on verified M&amp;V data. Denver Water rebate covers up to 50% of material costs, capped at $10,000/year, first-come first-served. Smart Valve™ installations qualify for pre-approval.
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
    { q: "What is the water situation in Colorado for commercial properties?", a: "Colorado commercial property owners face rising water rates from Denver Water, Colorado Springs Utilities, and Aurora Water — Smart Valve™ cuts metered bills 15–58% and qualifies for Denver Water rebates covering up to 50% of installation costs." },
    { q: "Does the Denver Water rebate apply to Smart Valve™ installations?", a: "Yes. Denver Water's Custom Commercial Water Efficiency Rebate covers up to 50% of material costs (capped at $10,000 per controlling entity per year) for projects that demonstrate sustained water use reduction. Smart Valve™ installations qualify for pre-approval. Applications are first-come, first-served and the annual budget runs out — contact us now to secure your spot." },
    { q: "How does Smart Valve™ reduce metered water consumption?", a: "Smart Valve™ installs on the main commercial water supply line in under 4 hours and reduces your metered water bill by 15–58%, guaranteed in writing. It requires no electricity, has no moving parts, and needs no maintenance — ever." },
    { q: "Is the 15% savings guarantee in writing?", a: "Yes. Every installation comes with a written guarantee of at least 15% reduction in metered water consumption. If your Colorado facility doesn't achieve 15% savings, we make it right at no additional cost." },
    { q: "How do I get a Colorado water savings assessment?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your current water bills, calculate projected savings, confirm Denver Water rebate eligibility, and provide a written guarantee before installation." },
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

function ContactForm({ source, repName }: { source: string; repName: string }) {
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
      <p className="text-gray-500 text-sm max-w-sm">{repName} will follow up shortly. You can also reach us at <a href="tel:7209373004" className="text-blue-600 font-medium hover:underline">720-937-3004</a>.</p>
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
      <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25">Get My Free Colorado Assessment →</button>
      <p className="text-xs text-center text-gray-400">No obligation. Free assessment. 15% savings guaranteed in writing.</p>
    </form>
  );
}
