import { motion } from "framer-motion";
import { Droplet, ShieldCheck, Mail, Phone, Factory, Building2, Hotel, Car, ArrowUpRight } from "lucide-react";
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
            Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Air</span> in Your Water.
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Estimated savings across <strong className="text-white">~32,000 installations</strong> globally, based on a verified 19.2% average reduction in metered water billing.
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

      {/* 2. LIVE RUNNING TOTAL TICKER */}
      <section className="relative py-24 border-y border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-primary font-bold uppercase tracking-[0.2em] mb-6 text-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Live Impact Tracker
            </p>
            <div className="font-display text-6xl sm:text-8xl md:text-[10rem] font-bold text-white tracking-tighter tabular-nums leading-none mb-6">
              <LiveCounter className="text-glow-white" />
            </div>
            <p className="text-xl md:text-3xl font-light text-muted-foreground">
              Gallons conserved since you arrived — metered, verified, EPA-recognized
            </p>
          </motion.div>
        </div>
      </section>

      <BubbleValveSection />

      {/* 3. CLIENT IMPACT GRID */}
      <section className="py-32 relative z-10 px-6">
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
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Average Savings by Industry</h2>
          
          <div className="space-y-8">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between text-sm font-semibold uppercase tracking-wider mb-3">
                  <span className="text-white">{ind.name}</span>
                  <span className="text-primary">{ind.value}%</span>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ind.value}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary/50 to-primary relative"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] w-[200%] animate-marquee-slow" />
                  </motion.div>
                </div>
              </div>
            ))}
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
            <p className="uppercase tracking-widest text-xs">Official Partner: AWS / CWS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
