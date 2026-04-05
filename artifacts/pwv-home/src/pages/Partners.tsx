import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, BarChart3, FileText, Wrench, Phone, Mail, Droplets, Gauge, Zap, RefreshCw, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import awsLogoSrc from "@assets/Screenshot_2026-04-04_at_11.11.03_PM_1775365869639.png";
import cwsLogoSrc from "@assets/Screenshot_2026-04-04_at_11.11.54_PM_1775365918231.png";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const partnersSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Perfect Water Valve",
  "url": "https://perfectwatervalve.com",
  "description": "Perfect Water Valve is the authorized sales and account management partner for Smart Valve™ in partnership with American Water Savings Inc. (AWS).",
  "partner": [
    { "@type": "Organization", "name": "American Water Savings Inc. (AWS)", "url": "https://americanwatersavings.com" },
    { "@type": "Organization", "name": "Flow Dynamics LLC" }
  ]
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Partners & Process — Perfect Water Valve & American Water Savings</title>
        <meta name="description" content="Perfect Water Valve is your dedicated account manager for the life of the Smart Valve™ program — actively partnered with American Water Savings (AWS) at every stage, from your first proposal through every M&V cycle." />
        <link rel="canonical" href="https://perfectwatervalve.com/partners" />
        <meta property="og:title" content="Partners & Process — Perfect Water Valve & American Water Savings" />
        <meta property="og:description" content="Perfect Water Valve is your dedicated account manager for the life of the Smart Valve™ program — actively partnered with American Water Savings (AWS) at every stage, from your first proposal through every M&V cycle." />
        <meta property="og:url" content="https://perfectwatervalve.com/partners" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(partnersSchema)}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 60%, #0A1F3A 100%)" }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <Award className="w-4 h-4 text-yellow-300" />
              Your Account Manager &amp; The Team Behind the Guarantee
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              One Call.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">We Handle Everything Else.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Perfect Water Valve is your dedicated account manager — involved from your first conversation through every M&V cycle. We work hand-in-hand with American Water Savings Inc. (AWS), who runs the program, issues the written guarantee, and provides 10 years of full service. You have two organizations working for you, with one primary contact: us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS FOR YOU — PVW + AWS Partnership */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>How It Works for You</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-5" style={{ color: "#0A1F3A" }}>
              A Real Partnership — Start to Finish
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              Perfect Water Valve is your dedicated account manager for the life of the program. We are in active communication with AWS at every stage — from your first proposal through every M&V cycle — and you'll be kept in the loop throughout. This isn't a handoff. It's an ongoing three-way partnership between you, Perfect Water Valve, and AWS.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* PVW — Account Manager */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border-2" style={{ borderColor: "#0374A7", backgroundColor: "#F4F8FC" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5" style={{ background: "#0374A7" }}>
                <Phone className="w-3.5 h-3.5" /> Perfect Water Valve — Your Account Manager
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1F3A" }}>We're involved throughout — not just at the start.</h3>
              <p className="text-sm mb-5" style={{ color: "#4A7085", fontWeight: 300 }}>From the first call to your most recent M&V report, Perfect Water Valve is your relationship and your advocate. We stay in active communication with AWS on your behalf at every stage.</p>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                {[
                  "Your primary point of contact from day one through the life of the program",
                  "Active partner with AWS — we're in the loop on your assessment, install, and every M&V cycle",
                  "We walk you through your savings proposal and what to expect",
                  "We walk you through every M&V report and what the numbers mean",
                  "If anything comes up — you call us. We get it resolved with AWS.",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0374A7" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AWS — Program Operator */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl p-8 border" style={{ borderColor: "#C5D8E8", backgroundColor: "#0A1F3A" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5" style={{ background: "rgba(91,191,224,0.15)", color: "#5BBFE0", border: "1px solid rgba(91,191,224,0.3)" }}>
                <ShieldCheck className="w-3.5 h-3.5" /> American Water Savings — Program Operator
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">AWS runs the program and backs the guarantee.</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>AWS is the licensed program operator behind every Smart Valve™ installation. They carry 65+ years of combined experience in commodity management and are in communication with both you and Perfect Water Valve throughout.</p>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {[
                  "Conducts your no-cost site assessment and builds the savings projection",
                  "Installs the Smart Valve™ — one water shutdown of up to 3.5 hours",
                  "Calibrates the device 4 weeks later, in phases, at no additional cost",
                  "Issues and stands behind the written minimum 15% savings guarantee",
                  "Conducts M&V every 6–12 months and delivers formal PDF reports",
                  "Provides 10 years of full service, repair, and replacement",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#5BBFE0" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ORGANIZATIONS BEHIND IT */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>The Infrastructure</span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold" style={{ color: "#0A1F3A" }}>
              The Organizations Backing the Guarantee
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* AWS */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
              className="rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: "#C5D8E8" }}>
              <div className="flex items-center justify-center bg-white h-40 p-6 border-b" style={{ borderColor: "#E8EFF7" }}>
                <img src={awsLogoSrc} alt="American Water Savings Inc." className="max-h-20 w-auto object-contain" />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-1" style={{ background: "#0374A7" }}>
                  U.S. Program Operator
                </div>
                <h3 className="text-base font-headline font-bold" style={{ color: "#0A1F3A" }}>American Water Savings Inc.</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4A7085" }}>
                  Issues the written guarantee, installs and calibrates the device, conducts all M&V, and provides 10 years of full service, repair, and replacement. 42,000+ customers. 65+ years combined in Commodity Management. Orlando, FL.
                </p>
              </div>
            </motion.div>

            {/* CWS — logo only */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: "#C5D8E8" }}>
              <div className="flex items-center justify-center bg-white h-40 p-6 border-b" style={{ borderColor: "#E8EFF7" }}>
                <img src={cwsLogoSrc} alt="Canadian Water Savings Inc." className="max-h-20 w-auto object-contain" />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-1" style={{ background: "#3C6E7F" }}>
                  Canada Program Operator
                </div>
                <h3 className="text-base font-headline font-bold" style={{ color: "#0A1F3A" }}>Canadian Water Savings Inc.</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT AWS PROVIDES */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>What's Included</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Everything AWS Provides Behind the Scenes
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              None of this requires your time or management. Perfect Water Valve is your one point of contact — AWS handles all of the following as part of the program.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "The Smart Valve™ Device", body: "AWS supplies the Smart Valve™ — a US-patented mechanical device built from Acetron GP and food-grade stainless steel. Available in sizes 5/8\" to 12\". Compatible with 99% of all water meters in North America. No electricity required. No maintenance.", color: "#0374A7" },
              { icon: BarChart3, title: "Pre-Installation Projection", body: "AWS reviews 12 months of your water billing data and generates a proposal presenting your accurate projected savings figure — specific to your building's consumption baseline.", color: "#3C6E7F" },
              { icon: ShieldCheck, title: "The Written Guarantee", body: "AWS guarantees a minimum 15% reduction in metered water consumption in writing. If results fall short, AWS uninstalls at their expense — no penalties, no hidden fees, no questions asked. Or your monthly payment is capped at 50% of verified savings.", color: "#0A1F3A" },
              { icon: FileText, title: "Measurement & Verification", body: "Every 6–12 months, AWS completes a comprehensive M&V process — comparing metered consumption against your pre-installation baseline — and delivers a formal PDF report per installation.", color: "#0374A7" },
              { icon: CheckCircle2, title: "10-Year Full Service Coverage", body: "Full service, repair, replacement, analytics, and reporting for 10 years — all inclusive in the program fee. NSF/ANSI/CAN 61 and NSF/ANSI 372 certified for all North American water systems.", color: "#3C6E7F" },
              { icon: Zap, title: "Installation & Calibration", body: "AWS installs the device on the user side of your water meter — one water shutdown of up to 3.5 hours, the only interruption ever required. Calibration follows 4 weeks later, done in phases to match your building's pressure profile.", color: "#0A1F3A" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border" style={{ borderColor: "#C5D8E8" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: item.color + "15" }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE: HOW SMART VALVE WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>The Technology</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              What Smart Valve™ Actually Does
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              Smart Valve™ applies long-established principles of pressure and fluid dynamics — Boyle's Law and Le Chatelier's Principle — to eliminate Phantom Volume and reduce actual water consumption.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gauge, title: "Air Compression", body: "Maintains city pressure upstream of the water meter to prevent air volume expansion during water usage — so the meter measures only actual water, not air mixed in.", color: "#0374A7" },
              { icon: Droplets, title: "Flow Stabilization", body: "Uses externally adjustable variable technology to create a smooth, even flow — more accurate meter readings and protection against damage from pressure surges.", color: "#3C6E7F" },
              { icon: Zap, title: "Reduced Consumption", body: "Creates back pressure upstream resulting in a downstream pressure drop, which reduces actual water consumption in non-volumetric uses like showers and sinks.", color: "#0A1F3A" },
              { icon: Gauge, title: "Pressure Reduction", body: "Reduces high water pressure in systems where municipal delivery far exceeds the 65 PSI fixtures are designed for — reducing waste, fixture wear, and seal failures.", color: "#0374A7" },
              { icon: ShieldCheck, title: "Secondary Backflow Prevention", body: "Acts as a secondary backflow preventer, protecting the municipal water supply from contamination — an additional benefit built into the same device.", color: "#3C6E7F" },
              { icon: RefreshCw, title: "Externally Adjustable", body: "The 2nd Generation Smart Valve™ is the first and only externally adjustable flow management device available. Settings change in seconds without turning off the water — a patented breakthrough.", color: "#0A1F3A" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border" style={{ borderColor: "#C5D8E8" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: item.color + "15" }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE SPECS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>Technical Specifications</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Smart Valve™ Device Details
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-8 border" style={{ borderColor: "#C5D8E8", backgroundColor: "#F4F8FC" }}>
              <h3 className="text-lg font-bold mb-5" style={{ color: "#0A1F3A" }}>Construction &amp; Materials</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                {[
                  "Valve body, plunger, and backplate: Acetron GP — precision-grade, self-lubricating, moisture-resistant",
                  "Shaft and spring: food-grade stainless steel",
                  "No seals or gaskets required — Acetron GP self-seals",
                  "Sizes: 5/8\", 3/4\", 1\", 1.5\", 2\", 3\", 4\", 6\", 8\", 10\", 12\" (larger on custom order)",
                  "Double flanged (3\" and larger) or female threaded (2\" and smaller)",
                  "Compatible with 99% of all water meters in North America",
                ].map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0374A7" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl p-8 border" style={{ borderColor: "#C5D8E8", backgroundColor: "#F4F8FC" }}>
              <h3 className="text-lg font-bold mb-5" style={{ color: "#0A1F3A" }}>Certifications &amp; Warranty</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                {[
                  "NSF/ANSI/CAN 61 — meets regulatory requirements across North America",
                  "NSF/ANSI 372 — strict compliance for municipal water supply products",
                  "10-year manufacturer's warranty",
                  "Service, repair, or replacement at no cost for as long as Smart Valve™ is installed",
                  "No electricity required — operates entirely on the flow and pressure of the water system",
                  "No maintenance required — designed to operate 24/7/365",
                ].map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3C6E7F" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER YOU CONTACT US — 7-step process reframed */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              What Happens After You Contact Us
            </h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              You make one call or send one email. Here's everything that follows — all coordinated by Perfect Water Valve and AWS on your behalf.
            </p>
          </motion.div>
          <div className="space-y-4">
            {[
              { step: "01", title: "You share 12 months of water bills", body: "That's the only thing we'll ask you for upfront. Perfect Water Valve submits this to AWS, who uses it to build your site-specific savings projection." },
              { step: "02", title: "We present your savings proposal", body: "AWS generates a proposal with an accurate projected savings figure based on your current consumption baseline. Perfect Water Valve walks you through it." },
              { step: "03", title: "You sign the agreement — the guarantee is in it", body: "The agreement details your 6-month money-back guarantee period, the installation process, and full terms. The written guarantee is included — minimum 15% savings." },
              { step: "04", title: "AWS conducts a no-cost site assessment", body: "AWS visits your property to qualify it for the program. No water shutdown required. If your site isn't eligible, there's no cost and we don't proceed — no risk to you." },
              { step: "05", title: "Installation — one water shutdown, up to 3.5 hours", body: "A licensed plumber installs Smart Valve™ on the user side of your water meter. This is the only time a water shutdown will ever be requested. That's it." },
              { step: "06", title: "Calibration 4 weeks later — no shutdown needed", body: "AWS returns to calibrate the valve in phases, matching your building's specific pressure profile. Calibration can be done with the strength of a fingertip, with the water still running." },
              { step: "07", title: "Ongoing M&V — we report results to you", body: "Every 6–12 months, AWS completes a full Measurement & Verification process comparing your metered consumption against the baseline. Perfect Water Valve delivers the formal PDF report to you." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex gap-5 p-6 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="text-2xl font-black font-headline flex-shrink-0 w-10" style={{ color: "#DEC600" }}>{item.step}</div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#E8EFF7" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Ready to See Your Savings Projection?
            </h2>
            <p className="text-base mb-8" style={{ color: "#4A7085" }}>
              Contact Perfect Water Valve. We'll take it from there.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a href="/#contact" className="px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5"
                style={{ background: "#0374A7", boxShadow: "0 6px 24px rgba(3,116,167,0.4)" }}>
                Request Free Assessment
              </a>
              <a href="/results" className="px-7 py-3.5 rounded-full font-semibold text-base border transition-all hover:-translate-y-0.5"
                style={{ borderColor: "#0374A7", color: "#0374A7" }}>
                View Verified Results
              </a>
              <a href="/compare" className="px-7 py-3.5 rounded-full font-semibold text-base border transition-all hover:-translate-y-0.5"
                style={{ borderColor: "#3C6E7F", color: "#3C6E7F" }}>
                Compare Alternatives
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#4A7085" }}>
              <a href="tel:7209373004" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Phone className="w-4 h-4" /> (720) 937-3004
              </a>
              <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Mail className="w-4 h-4" /> info@perfectwatervalve.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
