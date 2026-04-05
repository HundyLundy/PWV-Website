import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, BarChart3, FileText, Wrench, Globe, Phone, Mail, Droplets, Gauge, Zap, RefreshCw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";
import awsLogoSrc from "@assets/Screenshot_2026-04-04_at_11.11.03_PM_1775365869639.png";
import cwsLogoSrc from "@assets/Screenshot_2026-04-04_at_11.11.54_PM_1775365918231.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const partnersSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Perfect Water Valve",
  "url": "https://perfectwatervalve.com",
  "partner": [
    { "@type": "Organization", "name": "American Water Savings Inc. (AWS)", "url": "https://americanwatersavings.com" },
    { "@type": "Organization", "name": "Canadian Water Savings Inc. (CWS)" }
  ]
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Our Partners — AWS & CWS | Perfect Water Valve</title>
        <meta name="description" content="Smart Valve™ is exclusively distributed by American Water Savings (AWS) in the U.S. and Canadian Water Savings (CWS) in Canada — the organizations that verify savings, issue written guarantees, and provide 10 years of service, repair, and replacement." />
        <link rel="canonical" href="https://perfectwatervalve.com/partners" />
        <meta property="og:title" content="Our Partners — AWS & CWS | Perfect Water Valve" />
        <meta property="og:description" content="Smart Valve™ is exclusively distributed by American Water Savings (AWS) in the U.S. and Canadian Water Savings (CWS) in Canada — the organizations that verify savings, issue written guarantees, and provide 10 years of service, repair, and replacement." />
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
              Distribution & Verification Partners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              The Organizations{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Behind the Guarantee</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Smart Valve™ is exclusively distributed by American Water Savings Inc. (AWS) in the United States and Canadian Water Savings Inc. (CWS) in Canada. AWS and CWS conduct measurement and verification, issue the written performance guarantee, and include full service, repair, replacement, analytics, and reporting for 10 years — all inclusive in the program fee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THREE PARTNERS SHOWCASE */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>The Organizations Behind Smart Valve™</span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold" style={{ color: "#0A1F3A" }}>
              Three Organizations. One Guarantee.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Flow Dynamics */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
              className="rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: "#C5D8E8" }}>
              <div className="flex items-center justify-center bg-gradient-to-br from-[#0A1F3A] to-[#0374A7] h-44 p-4">
                <img src={smartValveSrc} alt="Smart Valve™ by Flow Dynamics LLC" className="h-36 w-auto object-contain drop-shadow-2xl" />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-1" style={{ background: "#0A1F3A" }}>
                  Developer &amp; Patent Holder
                </div>
                <h3 className="text-base font-headline font-bold" style={{ color: "#0A1F3A" }}>Flow Dynamics LLC</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4A7085" }}>
                  Developed and patented the Smart Valve™ technology. Holds US Patents 8,707,981 · 10,544,569 · 11,016,512. Initial design and development began in 2008; first US patent awarded 2014.
                </p>
              </div>
            </motion.div>

            {/* AWS */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: "#C5D8E8" }}>
              <div className="flex items-center justify-center bg-white h-44 p-6 border-b" style={{ borderColor: "#E8EFF7" }}>
                <img src={awsLogoSrc} alt="American Water Savings Inc." className="max-h-24 w-auto object-contain" />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-1" style={{ background: "#0374A7" }}>
                  U.S. Exclusive Distributor
                </div>
                <h3 className="text-base font-headline font-bold" style={{ color: "#0A1F3A" }}>American Water Savings Inc.</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4A7085" }}>
                  Exclusive distributor and partner of Smart Valve™ for all U.S. installations. Conducts M&V, issues written guarantees, and manages all service, repair, and replacement. 42,000+ customers. 1800 Pembrook Drive, Suite 300, Orlando FL 32810.
                </p>
              </div>
            </motion.div>

            {/* CWS */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl border overflow-hidden flex flex-col" style={{ borderColor: "#C5D8E8" }}>
              <div className="flex items-center justify-center bg-white h-44 p-6 border-b" style={{ borderColor: "#E8EFF7" }}>
                <img src={cwsLogoSrc} alt="Canadian Water Savings Inc." className="max-h-24 w-auto object-contain" />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-1" style={{ background: "#3C6E7F" }}>
                  Canada Exclusive Distributor
                </div>
                <h3 className="text-base font-headline font-bold" style={{ color: "#0A1F3A" }}>Canadian Water Savings Inc.</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4A7085" }}>
                  Exclusive distributor for all Canadian installations. Applies the same M&V methodology and written guarantee terms across all Canadian provinces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW SMART VALVE WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>Device Overview</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              What Smart Valve™ Does
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              Smart Valve™ takes long-established principles of pressure and fluid dynamics — including Boyle's Law regarding gas pressure and volume, and Le Chatelier's Principle of volumetric dynamics — and applies them in a financially rewarding application.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Gauge,
                title: "Air Compression",
                body: "Maintains city (static) pressure upstream of the water meter to prevent air volume expansion during water usage, ensuring the meter measures only actual water volume — not air mixed in.",
                color: "#0374A7"
              },
              {
                icon: Droplets,
                title: "Flow Stabilization",
                body: "Uses its externally adjustable, variable technology to create a smooth, even flow. This leads to more accurate meter readings and protects against damage from pressure surges.",
                color: "#3C6E7F"
              },
              {
                icon: Zap,
                title: "Reduced Consumption",
                body: "Creates back pressure upstream resulting in a downstream pressure drop, which reduces actual water consumption in non-volumetric uses such as showers and sinks.",
                color: "#0A1F3A"
              },
              {
                icon: Gauge,
                title: "Pressure Reduction",
                body: "Achieves significant pressure reduction in high-PSI water systems. Water fixtures are designed for no more than 65 PSI — municipal delivery often far exceeds this, driving waste and fixture wear.",
                color: "#0374A7"
              },
              {
                icon: ShieldCheck,
                title: "Secondary Backflow Prevention",
                body: "Acts as a secondary backflow preventer, protecting the municipal water supply from contamination — an additional benefit built into the same device.",
                color: "#3C6E7F"
              },
              {
                icon: RefreshCw,
                title: "Externally Adjustable",
                body: "The 2nd Generation Smart Valve™ is the first and only externally adjustable flow management device available. Settings can be changed in seconds without turning off the water or removing the device — a patented breakthrough.",
                color: "#0A1F3A"
              },
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
                  "Valve body, plunger, and backplate: Acetron GP — a precision-grade, self-lubricating, moisture-resistant space-age resin",
                  "Shaft and spring: food-grade stainless steel",
                  "Acetron GP eliminates the need for seals and gaskets that would wear out",
                  "Available in sizes: 5/8\", 3/4\", 1\", 1.5\", 2\", 3\", 4\", 6\", 8\", 10\", 12\" (larger on custom order)",
                  "Double flanged (3\" and larger) or female threaded (2\" and smaller) configurations",
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
                  "NSF/ANSI/CAN 61 certified — meets regulatory requirements across North America",
                  "NSF/ANSI 372 certified — strict compliance for municipal water supply products",
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

      {/* WHAT AWS & CWS DO */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>Program Details</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              What AWS and CWS Provide
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              Perfect Water Valve is an authorized sales and installation coordination partner. The guarantee, measurement, and service infrastructure is operated by AWS and CWS.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "The Smart Valve™ Device", body: "AWS exclusively distributes and supplies the Smart Valve™ — a US-patented mechanical device (Patents 8,707,981 · 10,544,569 · 11,016,512) built from Acetron GP and food-grade stainless steel. Available in sizes 5/8\" to 12\". American Made and Operated.", color: "#0374A7" },
              { icon: BarChart3, title: "Pre-Installation Assessment", body: "Before every installation, AWS or CWS requests 12 months of water billing data for each potential site and generates a proposal with an accurate projected savings figure based on the current consumption baseline.", color: "#3C6E7F" },
              { icon: FileText, title: "Measurement & Verification", body: "Once the calibration phase is complete, AWS and CWS closely monitor usage data. Every 6–12 months, they complete a comprehensive M&V process to verify savings against the pre-installation baseline and deliver formal PDF reports.", color: "#0A1F3A" },
              { icon: ShieldCheck, title: "The Written Guarantee", body: "AWS guarantees a minimum 15% savings in writing. If results fall short, AWS will uninstall at their expense — no penalties, no hidden fees, no questions asked. Alternatively, AWS will reduce the monthly payment to never exceed 50% of verified savings.", color: "#0374A7" },
              { icon: CheckCircle2, title: "10-Year Full Service Coverage", body: "Full service, repair, replacement, analytics, and reporting for 10 years — inclusive in the program fee. NSF/ANSI/CAN 61 and NSF/ANSI 372 certified for all North American water systems.", color: "#3C6E7F" },
              { icon: Globe, title: "North American Coverage", body: "AWS (American Water Savings Inc.) covers all U.S. installations — 42,000+ customers, 65+ years combined in Commodity Management, 1800 Pembrook Drive Suite 300, Orlando FL 32810, 1-877-709-2837. CWS (Canadian Water Savings Inc.) covers all Canadian installations.", color: "#0A1F3A" },
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

      {/* AWS vs CWS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              AWS vs. CWS — Which Applies to You?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                org: "American Water Savings Inc.", abbr: "AWS", territory: "United States", color: "#0374A7",
                points: [
                  "Exclusive distributor and partner of Smart Valve™",
                  "42,000+ customers on Guaranteed Water Savings programs",
                  "65+ years combined in Commodity Management",
                  "American Made and Operated",
                  "1800 Pembrook Drive, Suite 300, Orlando FL 32810",
                  "Phone: 1-877-709-2837 (1-877-70WATER)",
                  "M&V every 6–12 months — formal PDF report per installation",
                  "Written guarantee per site — 6-month money-back period",
                  "Service, repair, replacement, analytics & reporting for 10 years — inclusive in program fee"
                ]
              },
              {
                org: "Canadian Water Savings Inc.", abbr: "CWS", territory: "Canada", color: "#3C6E7F",
                points: [
                  "Exclusive distributor for all Canadian installations",
                  "All Canadian provinces covered",
                  "Same M&V methodology and written guarantee terms as AWS",
                  "M&V every 6–12 months — formal PDF report per installation",
                  "Written guarantee issued per site",
                  "Service, repair, and replacement included"
                ]
              }
            ].map((org, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 border" style={{ borderColor: org.color + "40", backgroundColor: org.color + "08" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-4" style={{ background: org.color }}>
                  {org.abbr}
                </div>
                <h3 className="text-xl font-headline font-bold mb-1" style={{ color: "#0A1F3A" }}>{org.org}</h3>
                <p className="text-sm font-semibold mb-5" style={{ color: org.color }}>{org.territory}</p>
                <ul className="space-y-2">
                  {org.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#2E4A5A" }}>
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: org.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS PROCESS — from Hybrid Guide */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              The AWS Program Process
            </h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              Every installation follows this structured process — no exceptions. Perfect Water Valve coordinates steps 1–3 with you; AWS handles the rest.
            </p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Provide 12 Months of Water Bills",
                body: "Submit 12 months of usage data (water bills) for each site where you would like to install Smart Valve™. This is the baseline AWS uses to project savings."
              },
              {
                step: "02",
                title: "AWS Generates a Proposal",
                body: "AWS generates a proposal presenting an accurate projected savings figure based on your current consumption baseline and the analytics of the program."
              },
              {
                step: "03",
                title: "Sign the Agreement",
                body: "Upon approval, AWS sends an executable agreement detailing the 6-month money-back guarantee period, the installation process, and full terms and conditions."
              },
              {
                step: "04",
                title: "No-Cost Site Assessment",
                body: "AWS schedules a site assessment to qualify the property — no water shutdown required. If the site is deemed ineligible, no costs are incurred and AWS will not proceed with installation."
              },
              {
                step: "05",
                title: "Installation — One Water Shutdown",
                body: "Installation is performed by a licensed plumber on the client side of the water meter. The installation process requires a water shutdown for up to 3.5 hours. This is the only time a water shutdown will ever be requested."
              },
              {
                step: "06",
                title: "Calibration — 4 Weeks Later",
                body: "AWS returns within 4 weeks to begin the calibration phase. Calibration is done in phases to match the specific pressure profile of the building — this avoids any pressure change issues for tenants. Calibration can be done with the strength of a fingertip, and future adjustments require no water shutdown."
              },
              {
                step: "07",
                title: "Ongoing M&V Every 6–12 Months",
                body: "Once calibration is complete, AWS closely monitors usage data. Every 6–12 months, a comprehensive Measurement & Verification process is completed to verify savings against the pre-installation baseline — delivered as a formal PDF report."
              },
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
              Ready to Get Your Written Guarantee?
            </h2>
            <p className="text-base mb-8" style={{ color: "#4A7085" }}>
              Contact Perfect Water Valve — we'll coordinate with AWS or CWS to assess your facility and issue your site-specific savings projection.
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
