import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ArrowRight, CheckCircle2, TrendingDown, Building2, ShieldCheck, Factory, Hotel, Truck, Store, MapPin, Droplet } from "lucide-react";
import { useGetSummary, useGetEnterpriseDeployments } from "@workspace/api-client-react";

import howItWorksSrc from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";
import ad1Src from "@assets/PWV_-_FINAL_Ad1_logo,water,sound_10sec_1774334086059.mp4";
import ad2Src from "@assets/PWV_save_water_bill_ad_FINAL_1774334097077.mp4";
import { BubbleValveSection } from "@/components/BubbleValveSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
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
    quote: "16% reduction in metered water consumption on a 13M+ gallon/year building — ~6,000 gallons/day conserved.",
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
      <Navbar dark />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#004b96] opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" /> 100% Performance Guarantee
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Air</span><br/>
                in Your Water.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10">
                Guaranteed ≥15% reduction in your water bill. Your meter stops counting air as volume — you stop overpaying. Verified M&V data. Operationally proven at scale.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-12">
                <Link 
                  href="/proposal" 
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
                >
                  Calculate My Savings <ArrowRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg backdrop-blur-sm transition-all"
                >
                  View Case Studies
                </button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white flex items-center gap-1">
                    <AnimatedNumber value={summary?.portfolioAvgSavings || 23} suffix="%" />
                  </div>
                  <div className="text-sm text-blue-200 mt-1 font-medium">Average Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white flex items-center gap-1">
                    <AnimatedNumber value={32} suffix="k+" />
                  </div>
                  <div className="text-sm text-blue-200 mt-1 font-medium">Facilities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white flex items-center gap-1">
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <div className="text-sm text-blue-200 mt-1 font-medium">M&V Verified</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 blur-3xl rounded-full" />
              <img 
                src={smartValveSrc} 
                alt="Smart Valve Product" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-slate-50 py-6 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-8">Trusted by</div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
            <div className="flex gap-16 items-center w-max animate-marquee text-slate-400 font-bold text-lg md:text-xl grayscale opacity-60">
              <span>Amazon</span> • <span>Four Seasons Hotels & Resorts</span> • <span>St. Regis</span> • <span>Labatt Brewing</span> • <span>Guinness</span> • <span>Linamar</span> • <span>Starlight Investments</span> • <span>Akelius</span> • <span>Kerry Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 VIDEO ADS */}
      <section className="py-20 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-3">See It In Action</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Stop Paying for Air in Your Water.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <video
                src={ad1Src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <video
                src={ad2Src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY PROOF STATS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The numbers speak for themselves</h2>
            <p className="text-lg text-slate-600">Every installation is backed by rigorous Measurement & Verification data.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Portfolio Avg Savings", value: summary?.portfolioAvgSavings || 23, suffix: "%", desc: "Across all measured facilities", icon: TrendingDown },
              { label: "Guaranteed Min", value: summary?.guaranteedMinSavings || 15, suffix: "%", desc: "Contractually underwritten", icon: ShieldCheck },
              { label: "Active Deployments", value: summary?.activeSites || 32000, prefix: "", suffix: "+", desc: "Installed across North America", icon: Building2 },
              { label: "Typical Value", value: 50, prefix: "Up to $", suffix: "K", desc: "Annual savings per location", icon: CheckCircle2 },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
                  {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
                </div>
                <div className="font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How Smart Valve™ Works</h2>
            <p className="text-lg text-slate-600">Eliminating waste at the point of distribution without touching a single fixture.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="space-y-6 lg:text-right">
              <div className="w-12 h-12 lg:ml-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Commercial facilities waste 20–40% of their water through pressure inefficiency and distribution loss. High street pressure forces excess water through fixtures.
              </p>
            </div>
            
            <div className="relative p-6 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-teal-50 rounded-3xl opacity-50" />
              <img src={howItWorksSrc} alt="How Smart Valve Works" className="relative z-10 w-full h-auto object-contain max-h-[400px]" />
            </div>
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-2xl font-bold text-slate-900">The Solution</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Smart Valve™ uses precision pressure regulation and flow optimization to eliminate waste at the point of distribution, compressing air pockets and creating laminar flow.
              </p>
            </div>
          </div>
          
          {/* Step flow */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Site Assessment", desc: "We analyze your usage and confirm viability." },
              { step: 2, title: "Installation", desc: "Zero downtime. Takes less than 2 hours." },
              { step: 3, title: "M&V Monitoring", desc: "Rigorous pre/post data analysis." },
              { step: 4, title: "Guaranteed ROI", desc: "If you don't save 15%, we remove it for free." }
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl border border-slate-100 relative">
                <div className="text-4xl font-black text-slate-100 absolute top-4 right-6 pointer-events-none">0{s.step}</div>
                <h4 className="font-bold text-slate-900 mb-2 relative z-10">{s.title}</h4>
                <p className="text-sm text-slate-600 relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BubbleValveSection />

      {/* 5. CASE STUDIES */}
      <section id="case-studies" className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Performance Across Industries</h2>
            <p className="text-lg text-slate-400">Read what facility managers and engineers have to say about the results.</p>
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
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg", t.color)}>
                    {t.logo}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.client}</div>
                    <div className="text-xs text-slate-400 font-medium">{t.industry}</div>
                  </div>
                </div>
                <blockquote className="text-slate-300 text-lg leading-relaxed flex-grow italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    {t.author}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT PORTFOLIO GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Enterprise Deployments</h2>
            <p className="text-lg text-slate-600">32,000+ businesses served across North America — Smart Valve™ is institutionally adopted and operationally proven at scale.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deployments ? deployments.map((client) => (
              <div key={client.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {client.logoLetter}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate" title={client.clientName}>{client.clientName}</div>
                  <div className="text-xs text-slate-500 truncate mt-0.5">{client.deploymentScope}</div>
                </div>
              </div>
            )) : (
              // Loading state
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

      {/* 7. PROPOSAL CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#004b96] text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to calculate your savings?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Use our interactive tool to generate a personalized ROI projection based on verified M&V data for your industry.
          </p>
          <Link 
            href="/proposal" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all"
          >
            Get My Savings Estimate <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
