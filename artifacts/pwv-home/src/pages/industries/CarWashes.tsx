import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Droplets, DollarSign, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { IapmoBadge } from "@/components/IapmoBadge";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

const carWashesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Will Smart Valve™ reduce pressure or affect wash quality?", "acceptedAnswer": { "@type": "Answer", "text": "No. Smart Valve™ removes dissolved air from the water stream — it does not restrict flow or reduce pressure. Caliber Car Wash verified 23% savings across 5 locations with zero impact on wash quality or throughput." } },
    { "@type": "Question", "name": "What savings do car washes typically see?", "acceptedAnswer": { "@type": "Answer", "text": "High-volume car washes typically see 15%–30% reduction in metered water consumption. Caliber Car Wash achieved a 23% weighted average across a 5-site portfolio in Georgia and Florida — all M&V verified." } },
    { "@type": "Question", "name": "Does Smart Valve™ work with reclaim or water recycling systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Smart Valve™ installs on the building's main supply line. It is fully compatible with reclaim, recycling, or softening systems." } },
    { "@type": "Question", "name": "What is the installation process for a car wash?", "acceptedAnswer": { "@type": "Answer", "text": "Installation requires a single water shutdown of up to 3.5 hours — the only interruption ever required. A licensed plumber fits Smart Valve™ on the user side of the water meter. No electricity required, no ongoing maintenance." } }
  ]
};

export default function CarWashes() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Car Wash Water Bill Savings | 23% Avg — Caliber Car Wash Verified | Perfect Water Valve</title>
        <meta name="description" content="High-volume car washes save 15%–30% on water bills with Smart Valve™. Verified 23% savings at Caliber Car Wash. No impact on wash quality or throughput." />
        <link rel="canonical" href="https://perfectwatervalve.com/industries/car-washes" />
        <meta property="og:title" content="Car Wash Water Bill Savings | 23% Avg — Caliber Car Wash Verified | Perfect Water Valve" />
        <meta property="og:description" content="High-volume car washes save 15%–30% on water bills with Smart Valve™. Verified 23% savings at Caliber Car Wash. No impact on wash quality or throughput." />
        <meta property="og:url" content="https://perfectwatervalve.com/industries/car-washes" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(carWashesFaqSchema)}</script>
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
              Caliber Car Wash achieved 23% weighted average savings across 5 Georgia and Florida sites — independently M&V verified over 3+ consecutive quarters per location. Continuous high-volume water use means Smart Valve™ delivers its maximum ROI in car wash applications. Results are consistent across all locations.
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

      {/* HOW IT WORKS — 3 STEPS */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F4F8FC' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-2" style={{ color: '#0374A7' }}>Simple Process</span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold" style={{ color: '#0A1F3A' }}>Up and running in 3 steps.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Free Car Wash Assessment', body: 'We analyze 12 months of your water billing data and project your site-specific savings — before any commitment. High-volume tunnel washes typically see 20%–30% reduction.' },
              { step: '02', title: 'Guarantee Issued & Installation', body: 'Your written 15% savings guarantee is issued before work begins. A licensed plumber installs Smart Valve™ on the main supply line in under 4 hours. No process changes, no downtime.' },
              { step: '03', title: 'M&V Every 6–12 Months', body: 'AWS conducts independent measurement and verification every 6–12 months, comparing metered consumption against your baseline. Formal PDF reports delivered per verification cycle. compatible with reclaim systems.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-7 border bg-white" style={{ borderColor: '#C5D8E8' }}>
                <div className="text-3xl font-black font-headline mb-3" style={{ color: '#DEC600' }}>{item.step}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0A1F3A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A7085' }}>{item.body}</p>
              </motion.div>
            ))}
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
              { icon: DollarSign, color: "green", title: "23% Weighted Average — M&V Verified at Caliber", body: "Caliber Car Wash's 23% weighted average across 5 Georgia and Florida sites was independently M&V verified over 3+ consecutive quarters per location. For a high-volume car wash, a 23% reduction on a $15,000–$20,000/month water bill represents substantial operating cost improvement." },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Caliber Car Wash — 5 Sites, 23% Weighted Average</h2>
          </div>
          <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Car Wash Chain — Georgia &amp; Florida</span>
                <div className="text-6xl font-black text-primary mb-4">23%</div>
                <div className="text-2xl text-white mb-6">Weighted Average Across 5 Sites</div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 23% weighted average savings across all 5 locations</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> M&V verified over 3+ consecutive billing quarters per site</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Consistent results across all sites — no outliers</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> High-volume continuous water use environment</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero changes to wash process or equipment</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Exceeds 15% guaranteed minimum by 53%</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Number of Sites</div><div className="text-white font-bold text-xl">5 Georgia &amp; Florida Locations</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Average Water Reduction</div><div className="text-primary font-bold text-2xl">23% Weighted Average</div></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6"><div className="text-gray-400 text-sm mb-1">Verification Method</div><div className="text-primary font-bold text-2xl">Independent M&V</div></div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center"><div className="text-green-400 font-semibold">Consistent results across all 5 geographically dispersed sites</div></div>
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

      <div className="bg-[#05080F] px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
        <IapmoBadge size="small" />
      </div>
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
