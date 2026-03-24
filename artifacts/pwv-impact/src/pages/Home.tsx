import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Droplet, ShieldCheck, Mail, Phone, Factory, Building2, Hotel, Car, ArrowUpRight, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { LiveCounter } from "@/components/LiveCounter";

// Hardcoded verified data as requested by implementation notes
const HERO_STATS = [
  { value: 36.8, label: "Gallons Conserved Per Year", prefix: "", suffix: "B+", decimals: 1 },
  { value: 440, label: "Estimated Annual Savings", prefix: "$", suffix: "M+", decimals: 0 },
  { value: 19.2, label: "Average Reduction", prefix: "", suffix: "%", decimals: 1 }
];

const CLIENTS = [
  { name: "Amazon", sector: "Logistics", stat: "17%", substat: "Avg Savings", extra: "58.69% peak reduction", icon: Factory },
  { name: "Caliber Car Wash", sector: "Automotive", stat: "23%", substat: "Avg Savings", extra: "Across 5 GA/FL sites", icon: Car },
  { name: "St. Regis Toronto", sector: "Hospitality", stat: "$49K+", substat: "CAD / Year", extra: "20%+ volume reduction", icon: Hotel },
  { name: "Four Seasons FTL", sector: "Hospitality", stat: "26%", substat: "Avg Savings", extra: "~$27,000/yr savings", icon: Hotel },
  { name: "Grand Central Tampa", sector: "Real Estate", stat: "23%", substat: "Avg Savings", extra: "~$50,000/yr savings", icon: Building2 },
  { name: "Houstonian Estates", sector: "Real Estate", stat: "16%", substat: "Avg Savings", extra: "6,000 gallons/day", icon: Building2 },
];

const INDUSTRIES = [
  { name: "Automotive", value: 23 },
  { name: "Hospitality", value: 22 },
  { name: "Food & Beverage", value: 19 },
  { name: "Logistics / Warehouse", value: 17 },
  { name: "Real Estate", value: 16 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      
      {/* Decorative ambient lights */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-secondary/10 blur-[150px] pointer-events-none" />

      {/* 1. HERO TICKER SECTION */}
      <section className="relative pt-32 pb-24 px-6 sm:px-12 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 w-full max-w-6xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30">
            <Droplet className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/80">
              Verified Impact Data
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air</span> in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Water</span>.
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Estimated savings across <strong className="text-white">~32,000 installations</strong> globally — based on a 1-year sample of a small percentage of those installs, with results ranging from 15% to 58%.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
            {HERO_STATS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center relative group"
              >
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-white text-glow-primary tracking-tighter tabular-nums mb-4">
                  <AnimatedNumber 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </h2>
                <p className="text-lg md:text-xl font-medium text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground/60 text-sm max-w-md mx-auto uppercase tracking-widest mt-8">
            Across 15+ verified Smart Valve™ commercial & industrial deployments
          </p>
        </motion.div>
      </section>

      {/* 2a. LIVE GALLONS TRACKER — light blue / royal blue */}
      <section className="relative py-24 border-y" style={{ backgroundColor: '#D4EDFF', borderColor: '#A8D4F5' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="font-bold uppercase tracking-[0.2em] mb-6 text-sm flex items-center gap-3" style={{ color: '#1965B1' }}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#1965B1' }} />
              Live Impact Tracker
            </p>
            <div className="font-display text-6xl sm:text-8xl md:text-[10rem] font-bold tracking-tighter tabular-nums leading-none mb-6" style={{ color: '#1965B1' }}>
              <LiveCounter />
            </div>
            <p className="text-xl md:text-3xl font-light" style={{ color: '#2E4A5A' }}>
              Gallons conserved since you arrived — metered, verified, EPA-recognized
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2b. PERSONAL LOSS COUNTER — dark navy / red */}
      <section className="relative py-24 border-b border-red-900/30" style={{ backgroundColor: '#060D1A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="font-bold uppercase tracking-[0.2em] mb-3 text-sm flex items-center gap-3" style={{ color: '#EF4444' }}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Your Facility's Estimated Loss — Year to Date
            </p>
            <p className="text-white/50 text-sm mb-8 uppercase tracking-wider">Select your monthly water bill</p>
            <LossCounter />
          </motion.div>
        </div>
      </section>

      <BubbleValveSection />

      {/* 3. CLIENT IMPACT GRID */}
      <section className="py-32 relative z-10 px-6" style={{ background: 'linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Deployments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real numbers from our most demanding commercial partners.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((client, i) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-panel rounded-2xl p-8 group hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_rgba(0,121,242,0.3)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />
                  
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{client.name}</h3>
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">{client.sector}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground group-hover:text-primary transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-5xl font-bold text-white">{client.stat}</span>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground mb-4">{client.substat}</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-muted-foreground/80 flex items-center gap-2">
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                        {client.extra}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SAVINGS BAR CHART */}
      <section className="py-24 border-y" style={{ backgroundColor: '#E8EFF7', borderColor: '#C5D8E8' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: '#0A1F3A' }}>Average Savings by Industry</h2>
          <p className="text-center text-xs mb-12 uppercase tracking-widest" style={{ color: '#4A7085' }}>
            1-year sample · 32,000+ installs
          </p>
          
          <div className="space-y-6">
            {INDUSTRIES.map((ind, i) => {
              const maxVal = Math.max(...INDUSTRIES.map(x => x.value));
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#0A1F3A' }}>{ind.name}</span>
                    <span className="text-sm font-bold ml-4" style={{ color: '#0374A7' }}>{ind.value}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(ind.value / maxVal) * 100}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    className="h-4 rounded-full relative overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #025888, #0374A7, #3C6E7F)' }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] w-[200%] animate-marquee-slow" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATION BADGE SECTION */}
      <section className="py-32 px-6 relative flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative box-glow-primary rounded-full w-72 h-72 sm:w-96 sm:h-96 flex flex-col items-center justify-center p-8 text-center border border-primary/50 bg-background/50 backdrop-blur-xl">
            <ShieldCheck className="w-16 h-16 text-primary mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">≥15%</h2>
            <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-2">Guaranteed</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest max-w-[200px]">Water Volume Reduction</p>
          </div>
        </motion.div>
      </section>

      {/* LOGO BAR */}
      <section className="py-12 px-6 border-y" style={{ backgroundColor: '#E8EFF7', borderColor: '#C5D8E8' }}>
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: '#4A7085' }}>Results verified at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 max-w-4xl mx-auto">
          {[
            { name: "Amazon", sub: "YYZ3 · 17% avg, 58.69% peak" },
            { name: "Four Seasons", sub: "Fort Lauderdale · 26%" },
            { name: "St. Regis", sub: "Toronto · $49K saved" },
            { name: "Caliber Car Wash", sub: "5 sites · 23%" },
            { name: "Grand Central", sub: "Kennedy · $50K/yr" },
            { name: "Houstonian", sub: "Estates · 16%" },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center text-center">
              <span className="font-bold text-base tracking-tight" style={{ color: '#0A1F3A' }}>{c.name}</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: '#4A7085' }}>{c.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #0374A7 0%, #025888 60%, #3C6E7F 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Common Questions</h2>
            <p className="text-white/80 leading-relaxed" style={{ fontWeight: 300 }}>
              The Smart Valve™ is a commercial water pressure device that eliminates air entrapment in municipal supply lines, reducing metered water billing by 15% to 58%. NSF 61 and NSF 372 certified. No electricity. No moving parts. No ongoing maintenance.
            </p>
          </div>
          <ImpactFAQ />
        </div>
      </section>

      {/* 6. CTA FOOTER */}
      <footer className="border-t border-white/10 pt-24 pb-12 px-6 bg-black/60 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to see your numbers?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Join the industry leaders cutting their water bills — guaranteed. Request a free site assessment today.
          </p>
          
          <button 
            onClick={() => window.location.href = 'mailto:support@PerfectWaterValve.com'}
            className="px-10 py-5 rounded-full font-bold text-lg bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,121,242,0.5)] mb-16 hover:-translate-y-1"
          >
            Request Assessment
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl border-t border-white/10 pt-12">
            <a href="tel:3615851111" className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-display text-xl">(361) 585-1111</span>
            </a>
            <a href="mailto:support@PerfectWaterValve.com" className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">support@PerfectWaterValve.com</span>
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
            <p>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <p className="uppercase tracking-widest text-xs">Official Partner: AWS / CWS</p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebook className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LossCounter() {
  const MIN = 5000;
  const MAX = 100000;
  const [bill, setBill] = useState(15000);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const SAVINGS_RATE = 0.192;
    const ratePerMs = (bill * SAVINGS_RATE) / (30 * 24 * 3600 * 1000);
    const jan1 = new Date(new Date().getFullYear(), 0, 1).getTime();
    let frameId: number;
    const update = () => {
      setAmount((Date.now() - jan1) * ratePerMs);
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [bill]);

  const pct = ((bill - MIN) / (MAX - MIN)) * 100;

  const fmtBill = (v: number) =>
    v >= 1000 ? `$${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K` : `$${v}`;

  const formatted = amount.toLocaleString('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: 2, maximumFractionDigits: 2,
  });

  const perMonth = (bill * 0.192).toLocaleString('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Slider label */}
      <div className="flex justify-between items-baseline mb-2 px-1">
        <span className="text-white/40 text-xs uppercase tracking-widest">Monthly water bill</span>
        <span className="text-white font-bold text-lg tabular-nums">{fmtBill(bill)} / mo</span>
      </div>

      {/* Slider track */}
      <div className="relative mb-2">
        <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-2 rounded-full transition-all duration-75"
            style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #991b1b, #EF4444)' }}
          />
        </div>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={1000}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
          style={{ height: '100%' }}
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-red-500 shadow-lg pointer-events-none transition-all duration-75"
          style={{ left: `calc(${pct}% - 10px)`, background: '#0A0F1A', boxShadow: '0 0 12px rgba(239,68,68,0.6)' }}
        />
      </div>

      {/* Tick labels */}
      <div className="flex justify-between text-[10px] text-white/25 px-0 mb-10 uppercase tracking-wider">
        <span>$5K</span>
        <span>$25K</span>
        <span>$50K</span>
        <span>$75K</span>
        <span>$100K</span>
      </div>

      {/* Counter */}
      <div className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter tabular-nums leading-none mb-6" style={{ color: '#EF4444' }}>
        {formatted}
      </div>

      <p className="text-white/50 text-lg mt-4">
        wasted this year — that's <span className="text-red-400 font-semibold">{perMonth}/month</span> going straight to the water authority
      </p>
      <p className="text-white/30 text-xs mt-3 uppercase tracking-widest">
        Based on 19.2% avg savings rate · 32,000+ verified installs · 15% guaranteed minimum
      </p>
    </div>
  );
}

function ImpactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is the Smart Valve™ and how does it work?", a: "The Smart Valve™ is a commercial water pressure device that eliminates air entrapment in municipal supply lines. Air bubbles in your pipes register as volume on your meter — you pay for every cubic foot, including the ones that were never liquid. The Smart Valve™ purges that air before it reaches the meter. Your meter reads only actual water." },
    { q: "Is this savings really guaranteed?", a: "Yes. Every installation comes with a written guarantee of at least 15% reduction in metered water consumption. If your site does not hit 15%, we make it right — at no cost to you." },
    { q: "How accurate is the live counter on this page?", a: "The counter estimates real-time gallons saved across ~32,000 installations globally, based on a 1-year sample of a small percentage of those installs. Results range from 15% to 58% per site. It uses the pilot cohort average as a baseline." },
    { q: "Does it need electricity or maintenance?", a: "No. The Smart Valve™ is entirely passive — no power source, no moving parts that wear out, no service visits or subscriptions. It works continuously from installation day onward." },
    { q: "What types of facilities use it?", a: "Hotels, resorts, Amazon fulfillment centers, car washes, multifamily buildings, breweries, food production facilities, industrial manufacturers, and municipal buildings. Any commercial property with a water meter can benefit." },
    { q: "What certifications does it have?", a: "NSF 61 and NSF 372 certified — the gold standard for drinking water system components in the United States and Canada. Compatible with 99% of commercial water meters." },
  ];
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl transition-all duration-200 ${open === i ? "border-primary/40 bg-primary/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}>
          <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" onClick={() => setOpen(open === i ? null : i)}>
            <span className={`font-bold text-base ${open === i ? "text-white" : "text-white/80"}`}>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
