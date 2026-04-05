import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Cross, Building2, Droplets, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

const hospitalsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Does Smart Valve™ affect sterile water systems or clinical water pressure?", "acceptedAnswer": { "@type": "Answer", "text": "No. Smart Valve™ installs on the building's main supply line upstream of all clinical systems. It does not alter water chemistry, pressure, or temperature in clinical areas. NSF 61 and NSF 372 certified." } },
    { "@type": "Question", "name": "Is Smart Valve™ compliant with ASHRAE 188 and Joint Commission Water Management Programs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Smart Valve™ reduces air entrainment in water supply lines, which is a documented Legionella risk factor. It supports compliance with ASHRAE 514 and Joint Commission Water Management Program requirements." } },
    { "@type": "Question", "name": "What water savings have hospitals documented?", "acceptedAnswer": { "@type": "Answer", "text": "RWJ Barnabas Health verified 19% savings. Hospitals typically see 15%–30% reduction in metered water consumption. Installation takes under 4 hours with no disruption to clinical operations." } },
    { "@type": "Question", "name": "What is the minimum savings guarantee for hospitals?", "acceptedAnswer": { "@type": "Answer", "text": "Every installation includes a written guarantee of a minimum 15% reduction in metered water consumption. If your facility does not reach 15%, we make it right at no cost." } }
  ]
};

export default function Hospitals() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Hospital &amp; Healthcare Water Savings | NSF 61 Certified | Perfect Water Valve</title>
        <meta name="description" content="NSF 61 certified water savings for hospitals. Smart Valve™ reduces metered consumption 15%–35% and supports ASHRAE 188/514 Water Management Programs." />
        <link rel="canonical" href="https://perfectwatervalve.com/industries/hospitals" />
        <meta property="og:title" content="Hospital &amp; Healthcare Water Savings | NSF 61 Certified | Perfect Water Valve" />
        <meta property="og:description" content="NSF 61 certified water savings for hospitals. Smart Valve™ reduces metered consumption 15%–35% and supports ASHRAE 188/514 Water Management Programs." />
        <meta property="og:url" content="https://perfectwatervalve.com/industries/hospitals" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(hospitalsFaqSchema)}</script>
      </Helmet>
      <Navbar onScrollTo={scrollTo} />

      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>🏥</span> Hospital &amp; Healthcare Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                NSF 61 &amp; 372 Certified — Safe for Medical Facilities
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Hospitals Are Among the Highest Water-Intensity Buildings on Earth —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Smart Valve™ Delivers 15%–35% annually Savings with Zero Clinical Risk</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Hospitals use 150–600+ gallons per bed per day. Central sterile processing, HVAC cooling, laundry, food service, and patient care each draw enormous volumes. Smart Valve™ is NSF 61 and 372 certified, reduces metered consumption by a guaranteed 15% minimum, and has zero impact on clinical operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Hospital Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified — Drinking Water Safe</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Zero Operational Disruption</div>
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> Installed in 2–4 Hours</div>
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
              { step: '01', title: 'Free Hospital Assessment', body: 'We review 12 months of water billing data and coordinate with AWS to project your facility-specific savings — before any commitment. NSF 61 & 372 certified for clinical environments.' },
              { step: '02', title: 'Guarantee Issued & Installation', body: 'Your written 15% savings guarantee is issued before work begins. A licensed plumber installs Smart Valve™ on the main supply line in under 4 hours. Zero disruption to clinical operations.' },
              { step: '03', title: 'IPMVP-Compliant M&V Reports', body: 'AWS conducts independent measurement and verification quarterly, issued as formal PDF reports. ASHRAE 188 and Joint Commission compatible documentation available.' },
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
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a href="/industries/hospitals/water-costs"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-blue-500/10 text-blue-400 border-blue-500/20 shrink-0">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">Module 1</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">Hospital Water Costs — Full Facility Breakdown</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Where healthcare facilities spend their water budget — central sterile, HVAC cooling, laundry, food service, and patient care — fully itemized with ROI by category.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Explore Water Costs <ArrowRight className="w-4 h-4" /></span>
            </motion.a>

            <motion.a href="/industries/hospitals/legionella-biofilm-risk"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-red-500/10 text-red-400 border-red-500/20 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-red-500/60 mb-2">Module 2</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors leading-snug">Legionella & Biofilm Risk — ASHRAE 188 & Joint Commission</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">How air pockets in hospital pipes create Legionella colonization conditions — and how Smart Valve™ eliminates the air entrapment that drives both billing inflation and infection risk.</p>
              <span className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm group-hover:gap-3 transition-all">See the Risk Guide <ArrowRight className="w-4 h-4" /></span>
            </motion.a>

            <motion.a href="/industries/hospitals/sterile-water-compliance"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-[#DEC600]/40 hover:bg-[#1A2540] transition-all flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DEC600]/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-yellow-500/10 text-yellow-400 border-yellow-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#DEC600]/70 mb-2">Module 3</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-snug">Sterile Water & Compliance — CSP, Dialysis & Lab Quality</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">NSF 61 & 372 certified for medical facilities. How Smart Valve™ reduces mineral scale in central sterile processing, dialysis supply, and laboratory water systems without chemicals.</p>
              <span className="inline-flex items-center gap-2 text-[#DEC600] font-semibold text-sm group-hover:gap-3 transition-all">See Compliance Guide <ArrowRight className="w-4 h-4" /></span>
            </motion.a>
          </div>
        </div>
      </section>

      <SavingsCalcModule defaultBill={50000} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Why Hospitals Are One of the Strongest Smart Valve™ ROI Applications</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>A 500-bed hospital can use 100,000+ gallons per day. At commercial water rates, that's $50,000–$100,000+/month in water costs. A 15% reduction is worth $90,000–$180,000/year.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cross, color: "blue", title: "150–600 Gallons Per Bed Per Day", body: "Hospitals are among the most water-intensive buildings on earth. Steam sterilization, cooling towers, laundry, food service, and patient care each consume enormous volumes — all metered and billed at commercial rates." },
              { icon: ShieldCheck, color: "green", title: "NSF 61 & 372 — Medically Certified Safe", body: "The Smart Valve™ is NSF 61 and NSF 372 certified — the gold standard for drinking water system components. This is not an approximation: it's full NSF certification, meeting the requirements for healthcare facility installation." },
              { icon: AlertTriangle, color: "red", title: "Zero Clinical Operational Impact", body: "Smart Valve™ is fully passive — no moving parts, no power, no control systems. Installation takes 2–4 hours on the main supply line and does not affect water pressure, flow, or quality to any clinical area." },
              { icon: Building2, color: "orange", title: "Healthcare System Scale Savings", body: "For hospital systems with multiple facilities, Smart Valve™ delivers consistent, scalable results. One installation per facility. No recurring fees. Portfolio-level savings are additive across all campuses." },
              { icon: Droplets, color: "teal", title: "Central Sterile Processing — High ROI", body: "Central sterile processing uses high-pressure hot water continuously. This application is especially prone to air entrapment billing inflation — and Smart Valve™ eliminates it, delivering some of its strongest results in CSP environments." },
              { icon: Activity, color: "yellow", title: "Sustainability & ESG Reporting", body: "Healthcare systems face increasing pressure from accreditation bodies, investors, and community stakeholders to demonstrate water use reduction. Smart Valve™ M&V documentation satisfies sustainability reporting requirements." }
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

      {/* ROI ILLUSTRATION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hospital Water Savings — Illustrative ROI</h2>
            <p className="text-gray-400">Based on verified Smart Valve™ performance data. Exact savings depend on facility size, meter configuration, and local rates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "Community Hospital", beds: "200 beds", bill: "$20,000/mo", savings15: "$3,000/mo", annual: "$36,000/yr" },
              { size: "Regional Medical Center", beds: "500 beds", bill: "$60,000/mo", savings15: "$9,000/mo", annual: "$108,000/yr" },
              { size: "Academic Medical Center", beds: "1,000+ beds", bill: "$120,000/mo", savings15: "$18,000/mo", annual: "$216,000/yr" },
            ].map((row, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-1">{row.size}</h3>
                <div className="text-gray-400 text-sm mb-6">{row.beds}</div>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">Est. Monthly Bill</span><span className="text-white font-medium">{row.bill}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">15% Monthly Savings</span><span className="text-primary font-bold">{row.savings15}</span></div>
                  <div className="flex justify-between border-t border-white/10 pt-3"><span className="text-gray-400 text-sm">Annual Minimum</span><span className="text-primary font-black text-lg">{row.annual}</span></div>
                </div>
                <p className="text-gray-600 text-xs mt-4">*15% guaranteed minimum. Actual results typically 17–26%.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Hospital Water Assessment</h2>
          <p className="text-white/80 mb-8">We'll analyze your facility's water consumption and provide an exact savings estimate. NSF 61 and 372 certified. Zero clinical risk. Zero obligation.</p>
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
