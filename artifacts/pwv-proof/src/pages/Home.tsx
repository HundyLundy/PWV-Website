import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Droplets, CheckCircle, ArrowRight, Percent, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center selection:bg-primary/30">
      
      {/* SECTION 1: OPENING HOOK */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Cinematic background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">The Smart Valve™</span>
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-6"
          >
            Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air</span> in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Water</span>.
          </motion.p>
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold tracking-tight text-glow leading-[1.1]"
          >
            What if you could guarantee your utility bill would drop by <br className="hidden md:block"/>
            <span className="gradient-text italic pr-2">at least 15%?</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            The Smart Valve™ does exactly that — delivering 15% to 58% reductions in metered water billing. Based on a 1-year sample of a small percentage of the 32,000+ installs. Guaranteed floor of 15%.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to see the proof</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="w-full py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#0374A7' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-semibold">
              Water meters lie. <br/>
              <span className="text-muted-foreground">You're paying for air.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-12 h-1 bg-white/60 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Municipal water systems trap air in pipes. Your meter measures volume, counting that air as water. You pay for every cubic foot — even the ones that were never liquid.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              The Smart Valve™ eliminates this. Mounted upstream, it maintains city pressure and purges air before it reaches your meter. You pay strictly for the water you use.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] w-full rounded-3xl border border-border overflow-hidden box-glow"
            style={{ background: "linear-gradient(180deg,#08102A 0%,#050C1E 100%)" }}
          >
            {/* Before / After labels */}
            <div className="absolute top-4 left-5 z-20">
              <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-slate-500 mb-0.5">Before</span>
              <span className="text-base font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air</span>
                <span className="text-slate-400"> + </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Water</span>
              </span>
            </div>
            <div className="absolute top-4 right-5 z-20 text-right">
              <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-teal-500/60 mb-0.5">After</span>
              <span className="text-base font-bold text-slate-300">100% </span>
              <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Water</span>
            </div>

            {/* Pipe */}
            <div className="absolute inset-0 flex items-center px-6 py-14">
              <div
                className="w-full relative overflow-hidden"
                style={{
                  height: 120,
                  borderRadius: 14,
                  background: "linear-gradient(180deg,#111C38 0%,#0B1428 55%,#0E1832 100%)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {/* Clean water glow right */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg,transparent 0%,rgba(20,200,120,0.04) 52%,rgba(20,200,120,0.10) 100%)" }} />

                {/* Bubbles — hard-clipped at 50% */}
                <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: "50%" }}>
                  {[
                    { id:0,  w:18,h:14,lp:4,  tp:18,delay:0,    dur:1.9,op:0.55 },
                    { id:1,  w:9, h:7, lp:16, tp:62,delay:0.25, dur:1.4,op:0.38 },
                    { id:2,  w:14,h:11,lp:30, tp:35,delay:0.5,  dur:2.2,op:0.50 },
                    { id:3,  w:7, h:6, lp:8,  tp:78,delay:0.75, dur:1.3,op:0.30 },
                    { id:4,  w:20,h:16,lp:44, tp:22,delay:0.1,  dur:2.1,op:0.54 },
                    { id:5,  w:10,h:8, lp:60, tp:58,delay:0.6,  dur:1.6,op:0.40 },
                    { id:6,  w:16,h:13,lp:20, tp:80,delay:0.9,  dur:1.8,op:0.46 },
                    { id:7,  w:8, h:6, lp:76, tp:40,delay:1.1,  dur:1.2,op:0.32 },
                    { id:8,  w:17,h:14,lp:10, tp:50,delay:0.4,  dur:2.0,op:0.52 },
                    { id:9,  w:12,h:10,lp:40, tp:68,delay:1.3,  dur:1.7,op:0.42 },
                    { id:10, w:6, h:5, lp:56, tp:28,delay:0.2,  dur:1.1,op:0.27 },
                    { id:11, w:22,h:18,lp:14, tp:44,delay:0.7,  dur:2.3,op:0.58 },
                    { id:12, w:9, h:8, lp:70, tp:72,delay:1.2,  dur:1.5,op:0.35 },
                    { id:13, w:16,h:13,lp:32, tp:14,delay:0.05, dur:1.9,op:0.48 },
                    { id:14, w:7, h:6, lp:52, tp:55,delay:1.5,  dur:1.3,op:0.29 },
                    { id:15, w:13,h:10,lp:80, tp:32,delay:0.55, dur:1.6,op:0.44 },
                    { id:16, w:18,h:14,lp:4,  tp:86,delay:1.0,  dur:2.1,op:0.53 },
                    { id:17, w:8, h:7, lp:48, tp:18,delay:0.35, dur:1.2,op:0.33 },
                    { id:18, w:11,h:9, lp:66, tp:76,delay:1.7,  dur:1.7,op:0.41 },
                    { id:19, w:15,h:12,lp:12, tp:58,delay:0.8,  dur:1.9,op:0.47 },
                  ].map((b) => (
                    <motion.div
                      key={b.id}
                      className="absolute"
                      style={{
                        left: `${b.lp}%`,
                        top: `${b.tp}%`,
                        width: b.w,
                        height: b.h,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 30% 28%, rgba(210,235,255,${b.op * 0.55}), rgba(120,195,255,${b.op * 0.18}) 60%, transparent)`,
                        border: `1px solid rgba(160,215,255,${b.op * 0.5})`,
                        boxShadow: `inset 1px 1px 3px rgba(230,248,255,${b.op * 0.35})`,
                      }}
                      animate={{
                        x: [0, 600],
                        y: [0, -b.h * 0.5, b.h * 0.4, -b.h * 0.2, 0],
                        opacity: [0, b.op, b.op, b.op * 0.6, 0],
                      }}
                      transition={{
                        duration: b.dur,
                        delay: b.delay,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.07, 0.70, 0.88, 1],
                      }}
                    />
                  ))}
                </div>

                {/* Water ripple stripes right side */}
                {[0, 1, 2].map((i) => (
                  <motion.div key={`stripe-${i}`} className="absolute top-0 bottom-0"
                    style={{ left: `${52 + i * 15}%`, right: 0, background: `linear-gradient(90deg,transparent,rgba(20,200,120,${0.05 + i * 0.03}))` }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5 + i * 0.8, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}

                {/* Center divider */}
                <div className="absolute top-0 bottom-0 w-px"
                  style={{ left: "50%", background: "linear-gradient(180deg,transparent,rgba(80,200,160,0.35),transparent)" }} />
              </div>
            </div>

            {/* Smart Valve — rotated 90° so flow passes through horizontally */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative flex items-center justify-center">
                  <div className="absolute rounded-full bg-blue-500/25 blur-2xl" style={{ width: 90, height: 90 }} />
                  <motion.div className="absolute rounded-full border border-blue-400/30" style={{ width: 80, height: 80 }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div className="absolute rounded-full border border-teal-300/15" style={{ width: 100, height: 100 }}
                    animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  <img src={smartValveSrc} alt="Smart Valve™"
                    className="relative z-10 object-contain drop-shadow-[0_0_26px_rgba(0,140,255,0.75)]"
                    style={{ height: 84, width: "auto", filter: "brightness(1.05) saturate(1.15)", transform: "rotate(90deg)" }}
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-blue-300/55">Smart Valve™</span>
              </div>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-3 left-0 right-0 text-center z-20">
              <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                Air purged upstream of meter — you pay only for water
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE GUARANTEE */}
      <section className="w-full py-32 px-6 flex justify-center items-center" style={{ backgroundColor: '#E8EFF7' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-10"
        >
          <div className="inline-flex items-center justify-center p-6 rounded-full border mb-4" style={{ backgroundColor: 'rgba(3,116,167,0.1)', borderColor: 'rgba(3,116,167,0.3)' }}>
            <CheckCircle className="w-16 h-16" style={{ color: '#0374A7' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold" style={{ color: '#0A1F3A' }}>
            &ge;15% Guaranteed Water Bill Reduction
          </h2>
          <p className="text-xl md:text-3xl font-light leading-snug" style={{ color: '#2E4A5A' }}>
            Not a projection. Not an estimate. A guarantee. Every Smart Valve™ installation is backed by a minimum 15% reduction in metered water consumption — <span className="font-semibold" style={{ color: '#0A1F3A' }}>or we make it right.</span>
          </p>
          <div className="pt-8" style={{ borderTop: '1px solid #B0C5D5' }}>
            <p className="text-sm uppercase tracking-widest" style={{ color: '#4A7085' }}>
              Distributed exclusively through American Water Savings (AWS) & Canadian Water Savings (CWS)
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: CLIENT STORIES */}
      <section className="w-full py-20 overflow-hidden relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 space-y-32">
          
          {/* Card A */}
          <ClientCard 
            align="left"
            category="Logistics"
            title="Amazon YYZ3 Fulfillment Center"
            subtitle="The World's Largest Retailer Trusts the Smart Valve™"
            stat1={{ label: "Average Savings", value: "17%" }}
            stat2={{ label: "Peak Savings", value: "58.69%" }}
            quote="Amazon's rigorous operational standards require measurable, repeatable results. The Smart Valve™ delivered across six consecutive quarters."
          />

          {/* Card B */}
          <ClientCard 
            align="right"
            category="Automotive"
            title="Caliber Car Wash Network"
            subtitle="23% Savings Across 5 High-Volume Sites"
            stat1={{ label: "Weighted Average", value: "23%" }}
            stat2={{ label: "Locations", value: "Georgia & Florida" }}
            quote="Car washes use enormous volumes of water. Caliber saw consistent double-digit savings across every location in the program."
          />

          {/* Card C */}
          <ClientCard 
            align="left"
            category="Luxury Hospitality"
            title="St. Regis Toronto"
            subtitle="$49,889 CAD Saved in Year One"
            stat1={{ label: "Total Reduction", value: "20%+" }}
            stat2={{ label: "Application", value: "Luxury Hotel" }}
            quote="Luxury properties can't afford equipment that disrupts guest experience. The Smart Valve™ installs invisibly and saves invisibly — except on the utility bill."
          />

          {/* Card D */}
          <ClientCard 
            align="right"
            category="Luxury Hospitality"
            title="Four Seasons Fort Lauderdale"
            subtitle="26% — Our Best Hospitality Result"
            stat1={{ label: "Annual Savings", value: "~$27,000" }}
            stat2={{ label: "Total Reduction", value: "26%" }}
            quote="The Four Seasons expects perfection. 26% savings exceeds even our own guaranteed minimums."
          />

          {/* Card E */}
          <ClientCard 
            align="left"
            category="Real Estate"
            title="Grand Central at Kennedy"
            subtitle="$50,000/Year — Saving at Scale"
            stat1={{ label: "Total Reduction", value: "23%" }}
            stat2={{ label: "Application", value: "Multifamily Complex" }}
            quote="Large multifamily properties have the most to gain. At Grand Central, $50,000 in annual savings translates directly to NOI improvement."
          />
        </div>
      </section>

      {/* CLIENT LOGO BAR */}
      <section className="w-full py-10 px-6 border-y" style={{ backgroundColor: '#E8EFF7', borderColor: '#C5D8E8' }}>
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#4A7085' }}>Results verified at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-w-4xl mx-auto">
          {[
            { name: "Amazon", sub: "YYZ3 & YYZ4" },
            { name: "Four Seasons", sub: "Fort Lauderdale · 26%" },
            { name: "St. Regis", sub: "Toronto · $49K saved" },
            { name: "Caliber Car Wash", sub: "5 sites · 23%" },
            { name: "Grand Central", sub: "Kennedy · $50K/yr" },
            { name: "Houstonian", sub: "Estates · 16%" },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center text-center">
              <span className="font-headline font-bold text-base tracking-tight" style={{ color: '#0A1F3A' }}>{c.name}</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: '#4A7085' }}>{c.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BY THE NUMBERS */}
      <section className="w-full py-32 px-6" style={{ backgroundColor: '#3C6E7F' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            <StatItem value={19.2} suffix="%" decimals={1} label="Average savings across all sites" />
            <StatItem value={58} suffix="%" label="Peak single-site reduction documented" />
            <StatItem value={320} prefix="$" suffix="K+" label="Estimated annual savings generated" />
            <StatItem value={15} prefix="&ge;" suffix="%" label="Minimum guaranteed savings" />
          </motion.div>
          <p className="text-center text-xs text-muted-foreground/50 mt-8 uppercase tracking-widest">
            1-year sample of a small percentage of 32,000+ installs · results vary; 15% is the contractual floor
          </p>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY PERFORMANCE */}
      <section className="w-full py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">Every Industry. Every Time.</h2>
            <p className="text-muted-foreground text-lg">Consistent performance across completely different water profiles.</p>
            <p className="text-sm text-muted-foreground/50 uppercase tracking-widest pt-2">1-year sample · 32,000+ installs</p>
          </div>

          <div className="space-y-8">
            <IndustryBar name="Automotive (Car Wash)" value={23} range="23%" />
            <IndustryBar name="Luxury Hospitality" value={24} range="22–26%" />
            <IndustryBar name="Multifamily Real Estate" value={20} range="16–23%" />
            <IndustryBar name="Food & Beverage" value={19} range="19%" />
            <IndustryBar name="Logistics / Warehouse" value={17} range="16–17%" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-24 px-6" style={{ backgroundColor: '#E8EFF7' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3" style={{ color: '#0A1F3A' }}>Common Questions</h2>
            <p className="text-base leading-relaxed" style={{ color: '#2E4A5A', fontWeight: 300 }}>
              The Perfect Water Valve Smart Valve™ is a commercial water pressure device that eliminates air entrapment in municipal supply lines, reducing metered water billing by 15% to 58%. NSF 61 and NSF 372 certified. No electricity. No moving parts.
            </p>
          </div>
          <ProofFAQ />
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="w-full py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#0374A7' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-10 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white" style={{ textShadow: '0 0 60px rgba(255,255,255,0.2)' }}>Ready to see your numbers?</h2>
          <p className="text-2xl font-light text-white/80">
            Get a free site assessment and see exactly how much your facility can save.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a 
              href="tel:3615851111" 
              className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg"
              style={{ backgroundColor: '#DEC600', color: '#0A1F3A' }}
            >
              Schedule Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="mailto:support@PerfectWaterValve.com"
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.45)' }}
            >
              Email Us
            </a>
          </div>

          <div className="pt-16 space-y-2">
            <p className="text-lg font-medium text-white">(361) 585-1111 | support@PerfectWaterValve.com</p>
            <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: '#DEC600' }}>Guaranteed &ge;15% water savings or we make it right.</p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(24,119,242,0.15)', border: '1px solid rgba(24,119,242,0.25)', color: '#4b96f3' }}>
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.2)', color: '#e1306c' }}>
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(10,102,194,0.14)', border: '1px solid rgba(10,102,194,0.22)', color: '#0a66c2' }}>
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// --- HELPER COMPONENTS ---

function ClientCard({ align, category, title, subtitle, stat1, stat2, quote }: any) {
  const isLeft = align === "left";
  
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-12 relative z-10",
      isLeft ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      
      {/* Timeline Node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-20 box-glow" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "w-full md:w-1/2 flex flex-col space-y-6",
          isLeft ? "md:pr-16 md:text-right md:items-end" : "md:pl-16 md:text-left md:items-start"
        )}
      >
        <span className="text-primary text-sm font-bold tracking-widest uppercase">{category}</span>
        
        <div className={cn("space-y-2", isLeft ? "md:items-end" : "md:items-start")}>
          <h3 className="text-3xl md:text-4xl font-display font-semibold">{title}</h3>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className={cn("flex flex-wrap gap-4", isLeft ? "md:justify-end" : "md:justify-start")}>
          <div className="bg-secondary/50 border border-border px-4 py-2 rounded-lg">
            <span className="block text-xs text-muted-foreground uppercase">{stat1.label}</span>
            <span className="block text-xl font-bold text-foreground">{stat1.value}</span>
          </div>
          <div className="bg-secondary/50 border border-border px-4 py-2 rounded-lg">
            <span className="block text-xs text-muted-foreground uppercase">{stat2.label}</span>
            <span className="block text-xl font-bold text-foreground">{stat2.value}</span>
          </div>
        </div>

        <blockquote className={cn(
          "text-lg text-muted-foreground italic border-primary relative",
          isLeft ? "md:border-r-4 md:pr-6" : "md:border-l-4 md:pl-6",
          "border-l-4 pl-6 md:border-l-0" // Mobile always left bordered
        )}>
          "{quote}"
        </blockquote>
      </motion.div>

      {/* Empty space for the other side of the timeline */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}

function StatItem({ value, prefix, suffix, decimals, label }: any) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <div className="text-5xl md:text-7xl font-display font-bold text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-lg uppercase tracking-wide font-medium text-white/70">{label}</p>
    </motion.div>
  );
}

function ProofFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is the Perfect Water Valve Smart Valve™?", a: "The Smart Valve™ is a commercial water pressure device that eliminates air entrapment in municipal supply lines, reducing metered water billing by 15% to 58%. It installs upstream of your meter, requires no electricity or moving parts, and is NSF 61 and NSF 372 certified." },
    { q: "Who has used it and what were the results?", a: "Amazon YYZ3 (17% average, 58.69% peak). Four Seasons Fort Lauderdale (26%, $27,000/yr). St. Regis Toronto ($49,889 CAD in year one). Caliber Car Wash (23% across 5 sites in GA & FL). Grand Central at Kennedy ($50,000/yr saved). All results are M&V-verified." },
    { q: "Is the 15% guarantee real?", a: "Yes. It is in your contract. Every installation includes a written guarantee of at least 15% reduction in metered water consumption. If your site does not reach 15%, we make it right at no cost to you." },
    { q: "How long does installation take?", a: "Typically 2–4 hours. No disruption to operations, no fixtures touched, no downtime. Licensed technicians work around your schedule." },
    { q: "Does it need electricity or maintenance?", a: "Neither. The Smart Valve™ is entirely passive — no power, no moving parts, no subscriptions or service calls. It works continuously from day one." },
    { q: "How quickly does it pay back?", a: "Most facilities recover the full installation cost within 2–4 water billing cycles purely through reduced water bills. Year-one savings typically far exceed the one-time fee." },
  ];
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl transition-all duration-200 ${open === i ? "border-[#0374A7]/40 bg-white" : "bg-white/70 border-[#C5D8E8] hover:border-[#0374A7]/30"}`}>
          <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" onClick={() => setOpen(open === i ? null : i)}>
            <span className={`font-headline font-bold ${open === i ? "text-[#0030B5]" : "text-[#0A1F3A]"}`}>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-[#0374A7]" : "text-[#4A7085]"}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 leading-relaxed" style={{ color: '#2E4A5A', fontWeight: 300 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const INDUSTRY_MAX = 24; // Luxury Hospitality is highest at 24%

function IndustryBar({ name, value, range }: { name: string, value: number, range: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{name}</span>
        <span className="text-xl font-bold text-primary">{range}</span>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / INDUSTRY_MAX) * 100}%` }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="h-3 rounded-full relative overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #025888, #0374A7, #3C6E7F)' }}
      >
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[4px]" />
      </motion.div>
    </div>
  );
}
