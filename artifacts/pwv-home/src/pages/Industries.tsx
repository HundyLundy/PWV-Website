import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const INDUSTRIES = [
  {
    name: "Data Centers",
    path: "/industries/data-centers",
    emoji: "🖥️",
    teaser: "Data centers use up to 5M gallons/day — Smart Valve™ cuts that by 15%–35% annually",
    color: "#0374A7",
  },
  {
    name: "Hotels & Hospitality",
    path: "/industries/hotels",
    emoji: "🏨",
    teaser: "Hotels lose thousands monthly in undetected water waste — guaranteed savings from day one",
    color: "#3C6E7F",
  },
  {
    name: "Car Washes",
    path: "/industries/car-washes",
    emoji: "🚗",
    teaser: "High-volume car washes see 15–30% water savings without impacting wash quality or throughput",
    color: "#0374A7",
  },
  {
    name: "Multifamily",
    path: "/industries/multifamily",
    emoji: "🏢",
    teaser: "Apartment communities overpay on shared bills — Smart Valve™ typically pays back in under 12 months",
    color: "#3C6E7F",
  },
  {
    name: "Hospitals & Healthcare",
    path: "/industries/hospitals",
    emoji: "🏥",
    teaser: "Healthcare facilities face strict compliance and rising costs — NSF 61 & 372 certified, guaranteed results",
    color: "#0374A7",
  },
  {
    name: "Golf Courses",
    path: "/industries/golf-courses",
    emoji: "⛳",
    teaser: "Golf courses on city water save 15%–35% on irrigation, clubhouse, pool, and facilities — guaranteed in writing",
    color: "#3C6E7F",
  },
];

export default function IndustriesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Commercial Water Savings by Industry | Hotels, Hospitals, Data Centers | Perfect Water Valve</title>
      </Helmet>
      <Navbar />

      {/* HERO + INDUSTRY CARDS (unified) */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 60%, #0A1F3A 100%)" }}>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <span>💧</span> Industry-Specific Water Savings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              High-Volume Industries That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
                Overpay for Water Every Month
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Click your industry to see case studies, local rebates, and guaranteed savings data.
            </p>
            <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              NSF 61 & 372 certified — no electricity, no moving parts, and every installation carries a written guarantee of ≥15% water bill reduction.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.a
                key={ind.path}
                href={ind.path}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#1A2540] transition-all flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{ind.emoji}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{ind.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{ind.teaser}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-auto">
                  See case studies & savings data
                  <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </div>
              </motion.a>
            ))}

            {/* CTA card */}
            <motion.a
              href="/savings/"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-gradient-to-br from-[#0374A7] to-[#025888] border border-primary/30 rounded-2xl p-8 hover:border-primary/60 transition-all flex flex-col gap-4 justify-between"
            >
              <div>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">Not Sure Which Fits?</h3>
                <p className="text-white/80 text-sm leading-relaxed">Use our instant ROI calculator — enter your monthly water bill and industry to see your guaranteed savings in 30 seconds.</p>
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-semibold mt-auto">
                Calculate my savings now
                <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why These Industries Overpay</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">High-volume commercial water users face the same problem: mineral scale accumulation in pipes reduces flow efficiency and inflates bills by 15–40% above what the actual water usage requires. The Smart Valve™ eliminates that waste permanently.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "No Electricity", desc: "Passive technology — no power required, no moving parts, no maintenance cycles" },
              { icon: "📋", title: "NSF 61 & 372 Certified", desc: "Drinking water safe. Approved for all commercial applications including healthcare" },
              { icon: "✍️", title: "Guaranteed in Writing", desc: "Every installation carries a legally binding ≥15% water bill reduction guarantee" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for Your Free Assessment?</h2>
          <p className="text-slate-400 mb-8">We'll review your water bills, identify savings opportunities, and put the guarantee in writing — at no cost and no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:7209373004" className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: "#0374A7", boxShadow: "0 4px 20px rgba(3,116,167,0.35)" }}>
              Call (720) 937-3004
            </a>
            <a href="mailto:info@perfectwatervalve.com" className="border-2 border-white/25 hover:border-white/45 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              info@perfectwatervalve.com
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Zero Obligation</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> All Industries + All US Markets</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
