import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, Hotel, Star, DollarSign, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const HOTELS_FAQ_ITEMS = [
  { q: "How much water does a typical hotel use per month?", a: "A full-service hotel uses 100–300 gallons per occupied room per day. For a 200-room hotel running at 70% occupancy, that's 14,000–42,000 gallons per day — or $8,000–$25,000+ per month depending on local rates and tiered pricing." },
  { q: "How does Smart Valve™ work in a hotel water system?", a: "Smart Valve™ installs on the main water supply line serving the hotel. It reduces turbulence and optimizes flow characteristics so that less water passes through the meter to deliver the same service. Guest water pressure, temperature, and quality are completely unaffected." },
  { q: "Will Smart Valve™ affect guest experience — pressure, hot water, or flow rates?", a: "No. Smart Valve™ does not affect water pressure, flow rate, or temperature in any way. Guests experience identical service. The only change is what the meter records — and therefore what you pay." },
  { q: "How do I get a hotel water savings assessment?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your hotel's current water billing, calculate projected savings based on your property size and market rates, and provide a written savings guarantee before any installation." },
];

const hotelsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOTELS_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

function HotelsFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#D5E3EE" }}>
      {HOTELS_FAQ_ITEMS.map((faq, i) => (
        <div key={i}>
          <button className="w-full flex items-start justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="font-semibold text-base leading-snug" style={{ color: open === i ? "#0374A7" : "#0A1F3A" }}>{faq.q}</span>
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors" style={{ borderColor: open === i ? "#0374A7" : "#B0C8D8", background: open === i ? "#0374A7" : "transparent", color: open === i ? "#fff" : "#4A7085" }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && <div className="pb-6 text-sm leading-relaxed" style={{ color: "#2E4A5A", fontWeight: 300 }}>{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Hotels() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(hotelsFaqSchema)}</script>
      </Helmet>
      <Navbar onScrollTo={scrollTo} />

      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>🏨</span> Hotels &amp; Hospitality Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Four Seasons — $27K/yr Verified
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Hotels Use More Water Than Almost Any Commercial Property —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Smart Valve™ Cuts Bills 15–58% Without Touching Guest Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Hotels cut water bills 15–58% with Smart Valve™ — installed on the main supply line in under 4 hours with zero impact on guest water pressure or experience. The Four Seasons Fort Lauderdale saved $27,000/year with a 26% reduction. Guaranteed minimum 15% — in writing, every installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Hotel Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> $27K/yr — Four Seasons Fort Lauderdale</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> Zero Guest Impact</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Installed in 2–4 Hours</div>
          </div>
        </div>
      </section>

      {/* WHY HOTELS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Why Hotels Are One of Smart Valve™'s Highest ROI Applications</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Hotels consume enormous volumes of water — in kitchens, laundry, pools, cooling towers, and guestrooms. Every gallon that passes through your meter costs money. Smart Valve™ reduces what your meter reads, not what your guests use.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Hotel, color: "blue", title: "Water Is Your #3 Operating Cost", body: "After labor and energy, water is the third-largest variable operating expense for most hotels. A $27,000/year reduction at the Four Seasons — equivalent to several luxury room-nights per month — shows what's possible." },
              { icon: Star, color: "yellow", title: "Zero Impact on Guest Experience", body: "The Smart Valve™ only changes what your meter reads. It does not affect water pressure, flow rate, or quality. Your guests experience exactly the same service. Savings are completely invisible to them." },
              { icon: DollarSign, color: "green", title: "Multiple High-Consumption Points", body: "Hotels have multiple commercial water applications — HVAC cooling, laundry, kitchen, pools, and guestrooms. All draw from the same metered supply. Smart Valve™ reduces the metered total across all of them simultaneously." },
              { icon: Users, color: "orange", title: "Rising Rates = Compounding Savings", body: "As utility rates rise 6–8% annually in major US hotel markets, the dollar value of each percentage point of savings grows every year. A 26% reduction on a $30,000/month bill delivers $93,600/year in savings — compounding annually." },
              { icon: Activity, color: "teal", title: "ESG & Sustainability Reporting", body: "Hotel brands and investors increasingly require sustainability reporting that includes water use intensity metrics. Smart Valve™ M&V documentation provides auditable data that satisfies GRESB, CDP, and brand ESG reporting requirements." },
              { icon: ShieldCheck, color: "red", title: "NSF 61 & 372 Certified — Safe for Guest Water", body: "The Smart Valve™ is NSF 61 and NSF 372 certified — the gold standard for drinking water system components. It is completely safe for installation in any hotel water supply system serving guests." }
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

      {/* CASE STUDY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Verified Hotel Case Study</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Four Seasons Fort Lauderdale — $27,000/Year Verified</h2>
          </div>
          <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-6">Luxury Hospitality — 5-Star Property</span>
                <div className="text-6xl font-black text-primary mb-4">$27,000/yr</div>
                <div className="text-2xl text-white mb-6">26% Metered Water Reduction</div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> 26% sustained average water bill reduction</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> $27,000 annual savings — independently verified</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero impact to guest experience at any point</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> No operational changes or process modifications</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Zero maintenance required post-installation</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Installation completed without disruption to hotel operations</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-gray-400 text-sm mb-1">Property Type</div>
                  <div className="text-white font-semibold">5-Star Luxury Hotel — Fort Lauderdale, FL</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-gray-400 text-sm mb-1">Water Reduction</div>
                  <div className="text-primary font-bold text-2xl">26% Average</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-gray-400 text-sm mb-1">Annual Savings Verified</div>
                  <div className="text-primary font-bold text-2xl">$27,000/year</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-green-400 font-semibold">Exceeds guaranteed 15% minimum by 73%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: "#0374A7" }}>Common Questions</span>
            <h2 className="text-3xl font-bold" style={{ color: "#0A1F3A" }}>Hotel Water Savings — Frequently Asked Questions</h2>
          </div>
          <HotelsFAQ />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Hotel Water Assessment</h2>
          <p className="text-white/80 mb-8">We'll analyze your hotel's water consumption and calculate your exact savings — based on verified results at properties like the Four Seasons. Zero obligation.</p>
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
