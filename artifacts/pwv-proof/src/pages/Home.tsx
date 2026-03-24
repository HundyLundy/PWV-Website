import React from "react";
import { motion } from "framer-motion";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import { ArrowDown, Droplets, CheckCircle, ArrowRight, Percent } from "lucide-react";
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
            className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6"
          >
            Stop Paying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Air</span> in Your Water.
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
            The Smart Valve™ does exactly that — verified across 15+ commercial deployments. No estimates. Just guaranteed reduction.
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

      <BubbleValveSection />

      {/* SECTION 2: THE PROBLEM */}
      <section className="w-full py-32 px-6 bg-secondary/30 border-y border-border relative overflow-hidden">
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
            <motion.div variants={fadeInUp} className="w-12 h-1 bg-primary rounded-full" />
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
            className="relative h-[300px] w-full bg-background rounded-3xl border border-border p-8 flex items-center justify-center overflow-hidden box-glow"
          >
            {/* Animated Pipe CSS Representation */}
            <div className="absolute inset-0 flex items-center w-full px-8 opacity-60">
              <div className="w-full h-24 bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-xl relative overflow-hidden flex items-center">
                {/* Flowing Water Background */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                
                {/* Air Bubbles (Left to right) */}
                {[
                  { size:18, top:20, dur:3.2, delay:0   },
                  { size:10, top:65, dur:2.5, delay:0.8 },
                  { size:22, top:38, dur:4.0, delay:1.5 },
                  { size:8,  top:78, dur:2.2, delay:2.3 },
                  { size:16, top:15, dur:3.7, delay:0.4 },
                  { size:12, top:55, dur:3.0, delay:1.1 },
                  { size:20, top:42, dur:3.5, delay:2.8 },
                  { size:9,  top:28, dur:2.8, delay:1.7 },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: b.size,
                      height: b.size,
                      top: `${b.top}%`,
                      background: `radial-gradient(circle at 30% 28%, rgba(210,235,255,0.55), rgba(120,195,255,0.18) 60%, transparent)`,
                      border: "1px solid rgba(160,215,255,0.5)",
                      boxShadow: "inset 1px 1px 3px rgba(230,248,255,0.35)",
                    }}
                    animate={{
                      x: ["-60px", "160px"],
                      y: [0, -b.size * 0.4, b.size * 0.3, 0],
                      opacity: [0, 0.75, 0.75, 0],
                    }}
                    transition={{
                      duration: b.dur,
                      repeat: Infinity,
                      delay: b.delay,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* The Smart Valve™ */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl scale-150" />
                    <motion.div className="absolute inset-0 rounded-full border border-blue-400/40"
                      animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2.8, repeat: Infinity }}
                    />
                    <img src={smartValveSrc} alt="Smart Valve™"
                      className="relative z-10 object-contain drop-shadow-[0_0_22px_rgba(0,140,255,0.8)]"
                      style={{ height: 80, width: "auto" }}
                    />
                  </div>
                </div>

                {/* Pure Water (Right of valve) */}
                <motion.div 
                  className="absolute left-1/2 right-0 h-full bg-blue-500/10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
            
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 block mb-0.5">Before</span>
              <span className="text-base font-bold text-slate-300">Air + Water</span>
            </div>
            <div className="absolute top-4 right-4 z-10 text-right">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-blue-400/60 block mb-0.5">After</span>
              <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">100% Water</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE GUARANTEE */}
      <section className="w-full py-32 px-6 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-10"
        >
          <div className="inline-flex items-center justify-center p-6 rounded-full bg-primary/10 border border-primary/30 mb-4 box-glow">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            &ge;15% Guaranteed Water Bill Reduction
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-light leading-snug">
            Not a projection. Not an estimate. A guarantee. Every Smart Valve™ installation is backed by a minimum 15% reduction in metered water consumption — <span className="text-foreground font-medium">or we make it right.</span>
          </p>
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              Distributed exclusively through America's Water Solutions (AWS) & Commercial Water Solutions (CWS)
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

      {/* SECTION 5: BY THE NUMBERS */}
      <section className="w-full py-32 px-6 bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            <StatItem value={19.2} suffix="%" decimals={1} label="Average savings across all sites" />
            <StatItem value={15} suffix="+" label="Commercial sites verified" />
            <StatItem value={320} prefix="$" suffix="K+" label="Estimated annual savings generated" />
            <StatItem value={15} prefix="&ge;" suffix="%" label="Minimum guaranteed savings" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY PERFORMANCE */}
      <section className="w-full py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">Every Industry. Every Time.</h2>
            <p className="text-muted-foreground text-lg">Consistent performance across completely different water profiles.</p>
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

      {/* SECTION 7: CLOSING CTA */}
      <section className="w-full py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-10 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-glow">Ready to see your numbers?</h2>
          <p className="text-2xl text-muted-foreground font-light">
            Get a free site assessment and see exactly how much your facility can save.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a 
              href="tel:3615851111" 
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center gap-2"
            >
              Schedule Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="mailto:support@PerfectWaterValve.com"
              className="px-8 py-4 rounded-full bg-secondary border border-border text-foreground font-semibold text-lg hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300"
            >
              Email Us
            </a>
          </div>

          <div className="pt-16 space-y-2">
            <p className="text-lg font-medium">(361) 585-1111 | support@PerfectWaterValve.com</p>
            <p className="text-primary text-sm uppercase tracking-widest font-semibold">Guaranteed &ge;15% water savings or we make it right.</p>
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
      <div className="text-5xl md:text-7xl font-display font-bold text-primary text-glow">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-lg text-muted-foreground uppercase tracking-wide font-medium">{label}</p>
    </motion.div>
  );
}

function IndustryBar({ name, value, range }: { name: string, value: number, range: string }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-xl font-medium">{name}</span>
        <span className="text-xl font-bold text-primary">{range}</span>
      </div>
      <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / 30) * 100}%` }} // Normalizing roughly to max 30% for visual scale
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full relative"
        >
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[4px]" />
        </motion.div>
      </div>
    </div>
  );
}
