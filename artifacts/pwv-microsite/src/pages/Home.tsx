import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ArrowRight, CheckCircle2, TrendingDown, Building2, ShieldCheck, Factory, Hotel, Truck, Store, MapPin, Droplet, ChevronDown } from "lucide-react";
import { useGetSummary, useGetEnterpriseDeployments } from "@workspace/api-client-react";

import howItWorksSrc from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";
import ad1Src from "@assets/PWV_-_FINAL_Ad1_logo,water,sound_10sec_1774334086059.mp4";
import ad2Src from "@assets/PWV_save_water_bill_ad_FINAL_1774334097077.mp4";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import { InlineROICalc } from "@/components/InlineROICalc";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const TESTIMONIALS = [
  {
    logo: "A", industry: "Logistics", color: "bg-blue-100 text-blue-700",
    quote: "17% consistent savings across 6 quarters of M&V data. 58.69% peak reduction recorded.",
    author: "Amazon Facilities Team", client: "Amazon YYZ3"
  },
  {
    logo: "S", industry: "Hospitality", color: "bg-purple-100 text-purple-700",
    quote: "$49,889 CAD annual savings. 20%+ reduction verified.",
    author: "Priyan Jayetileke, Property Manager", client: "St. Regis Toronto"
  },
  {
    logo: "F", industry: "Hospitality", color: "bg-indigo-100 text-indigo-700",
    quote: "26% daily average savings, 56% peak reduction in October. $27,000/yr in avoided costs.",
    author: "Four Seasons Engineering", client: "Four Seasons Fort Lauderdale"
  },
  {
    logo: "G", industry: "Real Estate", color: "bg-emerald-100 text-emerald-700",
    quote: "$50,000/yr savings. Bill dropped from $240K to $190K annually.",
    author: "Bob Pack, GM", client: "Grand Central at Kennedy"
  },
  {
    logo: "H", industry: "Real Estate", color: "bg-teal-100 text-teal-700",
    quote: "16% reduction in metered water consumption on a 13M+ gallon/year building — about 6,000 gallons/day.",
    author: "Doug Horn, GM", client: "Houstonian Estates"
  },
  {
    logo: "C", industry: "Automotive", color: "bg-amber-100 text-amber-700",
    quote: "23% weighted average across 5 locations. M&V verified over 3+ quarters.",
    author: "Caliber Operations", client: "Caliber Car Wash"
  }
];

export default function Home() {
  const { data: summary } = useGetSummary();
  const { data: deployments } = useGetEnterpriseDeployments();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* 1. HERO — EDITORIAL STAT-LEAD */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden" style={{ background: 'var(--brand-bg)' }}>
        {/* 4px accent bar across the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0374A7] via-[#0030B5] to-[#3C6E7F]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT: stat bomb + copy */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0374A7]/30 bg-white text-[#0374A7] text-xs font-semibold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-3 h-3" /> Independent M&V · Verified · Guaranteed
                </span>
              </motion.div>

              {/* THE NUMBER */}
              <motion.div variants={fadeIn} className="flex items-end leading-none mb-2">
                <span className="font-headline font-bold text-[#0030B5]" style={{ fontSize: 'clamp(96px, 14vw, 152px)', lineHeight: 1 }}>
                  <AnimatedNumber value={summary?.portfolioAvgSavings || 23} />%
                </span>
              </motion.div>
              <motion.p variants={fadeIn} className="text-[#3C6E7F] font-semibold text-lg mb-6 font-headline">
                average reduction in commercial water bills
              </motion.p>

              {/* Yellow accent line */}
              <motion.div variants={fadeIn} className="w-14 h-1 rounded-full mb-7" style={{ background: 'var(--sister-yellow)' }} />

              <motion.h1 variants={fadeIn} className="font-headline text-3xl lg:text-[2.6rem] font-bold text-slate-900 leading-tight mb-4">
                Your meter charges you for air.<br />We stop that.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                Most commercial buildings lose 20–40% of their water bill to pressure-driven air pockets — and your meter counts every bubble as volume. Smart Valve™ purges that air before it hits the meter. No electricity. No moving parts. No downtime.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/proposal"
                  className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:-translate-y-1 transition-all"
                  style={{ background: '#0374A7', boxShadow: '0 8px 24px rgba(3,116,167,0.28)' }}
                >
                  Calculate My Savings <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-lg transition-all"
                >
                  See the Data
                </button>
              </motion.div>

              {/* Mini proof chips */}
              <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                {[
                  { val: "≥15%", label: "guaranteed minimum" },
                  { val: "58.69%", label: "peak savings recorded" },
                  { val: "32,000+", label: "facilities served" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                    <span className="font-headline font-bold text-[#0030B5] text-sm">{c.val}</span>
                    <span className="text-slate-400 text-xs">{c.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: inline ROI calculator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:block"
            >
              <InlineROICalc />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGO BAR */}
      <section className="bg-white py-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by leading commercial operators</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { name: "Amazon", sub: "Fulfillment Centers" },
              { name: "Four Seasons", sub: "Fort Lauderdale" },
              { name: "St. Regis", sub: "Toronto" },
              { name: "Caliber Car Wash", sub: "5-Site Network" },
              { name: "Grand Central", sub: "Multifamily" },
              { name: "Houstonian", sub: "Estates" },
              { name: "Labatt", sub: "Brewing" },
              { name: "Guinness", sub: "Production" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity">
                <span className="font-headline font-bold text-slate-700 text-base tracking-tight leading-tight">{c.name}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">{c.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BubbleValveSection />

      {/* 3. PROOF STATS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The numbers don't need spin.</h2>
            <p className="text-lg text-slate-500" style={{ fontWeight: 300 }}>Every site is measured before and after. 1-year sample of a small percentage of 32,000+ installs. Savings range: 15% to 58%.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Avg. Water Savings", value: summary?.portfolioAvgSavings || 23, suffix: "%", desc: "Across 19 M&V-verified sites", icon: TrendingDown },
              { label: "Guaranteed Minimum", value: summary?.guaranteedMinSavings || 15, suffix: "%", desc: "In writing. In your contract.", icon: ShieldCheck },
              { label: "Active Deployments", value: summary?.activeSites || 32000, suffix: "+", desc: "Sites across North America", icon: Building2 },
              { label: "Typical Annual Value", value: 50, prefix: "Up to $", suffix: "K", desc: "Saved per year, per location", icon: CheckCircle2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-[#0374A7]/20 hover:shadow-2xl transition-all group"
                style={{ '--tw-shadow-color': 'rgba(3,116,167,0.05)' } as React.CSSProperties}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all" style={{ background: 'var(--brand-bg)', color: '#0374A7' }}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="font-headline text-4xl font-bold text-slate-900 mb-2 flex items-center">
                  {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
                </div>
                <div className="font-semibold text-slate-800 mb-1 text-sm">{stat.label}</div>
                <div className="text-sm text-slate-400" style={{ fontWeight: 300 }}>{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FROM ASSESSMENT TO SAVINGS */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--brand-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Assessment to Guaranteed Savings</h2>
            <p className="text-lg text-slate-500" style={{ fontWeight: 300 }}>Installed in under 2 hours. Zero downtime. Savings verified by independent M&V data.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center mb-14">
            <div className="space-y-4 lg:text-right">
              <div className="w-12 h-12 lg:ml-auto rounded-full flex items-center justify-center font-bold text-xl mb-4 text-white font-headline" style={{ background: '#0030B5' }}>1</div>
              <h3 className="font-headline text-2xl font-bold text-slate-900">The Problem</h3>
              <p className="text-slate-500 text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                Commercial facilities typically waste 20–40% of their metered water volume to trapped air and pressure inefficiency. You're billed for every cubic foot — air included.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 flex justify-center items-center">
              <div className="absolute inset-0 rounded-3xl opacity-40" style={{ background: 'linear-gradient(135deg, var(--brand-bg), #ffffff)' }} />
              <img src={howItWorksSrc} alt="How Smart Valve Works" className="relative z-10 w-full h-auto object-contain max-h-[400px]" />
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 text-white font-headline" style={{ background: '#0374A7' }}>2</div>
              <h3 className="font-headline text-2xl font-bold text-slate-900">The Fix</h3>
              <p className="text-slate-500 text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                Smart Valve™ installs upstream of your meter and mechanically purges air before it's counted. Your meter reads true water volume. You pay for what you actually use.
              </p>
            </div>
          </div>

          {/* 4-step flow */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Site Assessment", desc: "We look at your bills and usage data to confirm viability before anything else." },
              { step: 2, title: "Installation", desc: "Licensed tech installs in 2 hours or less. You stay open. No fixtures touched." },
              { step: 3, title: "M&V Monitoring", desc: "We pull pre/post data and hand you the receipts. Independent measurement & verification." },
              { step: 4, title: "Guaranteed ROI", desc: "Didn't hit 15%? We remove it at no cost to you. That's the deal — in writing." }
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl border border-slate-100 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="font-headline text-4xl font-black text-slate-100 absolute top-4 right-5 pointer-events-none">0{s.step}</div>
                <h4 className="font-headline font-bold text-slate-900 mb-2 relative z-10">{s.title}</h4>
                <p className="text-sm text-slate-500 relative z-10 leading-relaxed" style={{ fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES */}
      <section id="case-studies" className="py-20 lg:py-28 text-white relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-20 blur-[100px] rounded-full pointer-events-none" style={{ background: '#0374A7' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold mb-4">What clients actually say.</h2>
            <p className="text-lg text-slate-400" style={{ fontWeight: 300 }}>Numbers from real sites. All M&V-verified. No cherry-picking.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-slate-900 hover:border-white/20 transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-headline", t.color)}>
                    {t.logo}
                  </div>
                  <div>
                    <div className="font-bold text-white font-headline">{t.client}</div>
                    <div className="text-xs text-slate-400 font-medium">{t.industry}</div>
                  </div>
                </div>
                <blockquote className="text-slate-300 text-base leading-relaxed flex-grow" style={{ fontWeight: 300 }}>
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-medium text-slate-400">{t.author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT PORTFOLIO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-slate-900 mb-4">32,000+ facilities and counting.</h2>
            <p className="text-lg text-slate-500" style={{ fontWeight: 300 }}>From Amazon fulfillment centers to boutique hotels — Smart Valve™ works across every commercial water-consuming facility.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deployments ? deployments.map((client) => (
              <div key={client.id} className="p-4 rounded-xl border border-slate-100 hover:border-[#0374A7]/20 hover:bg-[#E8EFF7]/50 hover:shadow-md transition-all flex items-center gap-4 group bg-slate-50/50">
                <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-all shrink-0 font-headline" style={{ background: '#0374A7' }}>
                  {client.logoLetter}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate font-headline text-sm" title={client.clientName}>{client.clientName}</div>
                  <div className="text-xs text-slate-400 truncate mt-0.5" style={{ fontWeight: 300 }}>{client.deploymentScope}</div>
                </div>
              </div>
            )) : (
              Array(8).fill(0).map((_, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-4 animate-pulse">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 7. VIDEO ADS */}
      <section className="py-20" style={{ background: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0374A7] mb-3">See It In Action</p>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white">
              Two minutes. Watch the valve work.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <video src={ad1Src} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <video src={ad2Src} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ + GEO */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              The Perfect Water Valve Smart Valve™ is a commercial water pressure device that eliminates air entrapment in municipal supply lines, reducing metered water billing by 15% to 58%. It requires no electricity, no moving parts, and no ongoing maintenance.
            </p>
          </div>
          <MicrositeFAQ />
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24 text-white text-center px-4" style={{ background: 'linear-gradient(135deg, #0374A7, #0030B5)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-5">See your number.</h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'rgba(232,239,247,0.85)', fontWeight: 300 }}>
            Tell us your industry and square footage. We'll pull the M&V data from comparable sites and show you what you'd likely save — no commitment, no sales pitch.
          </p>
          <Link
            href="/proposal"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all"
            style={{ background: '#ffffff', color: '#0030B5' }}
          >
            Get My Savings Estimate <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MicrositeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How does the Smart Valve™ reduce my water bill?", a: "Municipal water systems trap air bubbles that travel through your pipes and register as volume on your meter. You're billed for every cubic foot — including the ones that were never liquid. The Smart Valve™ installs upstream of your meter and purges that air before it's counted. Your meter reads only actual water." },
    { q: "Is the 15% reduction really guaranteed?", a: "Yes. It's in writing, in your contract. If your facility doesn't achieve at least 15% reduction in metered water consumption, we make it right. Every installation comes with this commitment." },
    { q: "How long does installation take?", a: "Typically 2–4 hours. No disruption to your operations, no fixtures touched, no permits required in most jurisdictions. Our licensed technicians work around your schedule." },
    { q: "Does it need electricity or ongoing maintenance?", a: "Neither. The Smart Valve™ is entirely passive — no power, no moving parts that wear out, no subscriptions or service visits. It works continuously once installed." },
    { q: "What's the upfront cost?", a: "There's a one-time installation fee based on property size and line diameter. Most sites recover the full cost within 2–4 billing cycles through water savings alone. We'll show you the math before you commit." },
    { q: "Does it affect water pressure or quality?", a: "No. Pressure and water quality are completely unaffected. The Smart Valve™ only changes what your meter counts — it removes phantom air volume, not actual water flow." },
    { q: "What certifications does it have?", a: "NSF 61 and NSF 372 certified — the gold standard for drinking water system components in North America. Compatible with 99% of commercial water meters." },
  ];
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl transition-all duration-200 ${open === i ? "border-[#0374A7]/30 bg-[#E8EFF7]" : "border-slate-100 bg-white hover:border-slate-200"}`}>
          <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" onClick={() => setOpen(open === i ? null : i)}>
            <span className={`font-headline font-bold ${open === i ? "text-[#0030B5]" : "text-slate-800"}`}>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-[#0374A7]" : "text-slate-400"}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed" style={{ fontWeight: 300 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
