import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, BarChart3, FileText, Wrench, Globe, Phone, Mail } from "lucide-react";
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
    { "@type": "Organization", "name": "American Water Savings (AWS)", "url": "https://americanwatersavings.com" },
    { "@type": "Organization", "name": "Canadian Water Savings (CWS)" }
  ]
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Our Certification Partners — AWS & CWS | Perfect Water Valve</title>
        <meta name="description" content="Smart Valve™ is certified and backed by American Water Savings (AWS) and Canadian Water Savings (CWS) — the organizations that verify savings, issue guarantees, and provide the valve." />
        <link rel="canonical" href="https://perfectwatervalve.com/partners" />
        <meta property="og:title" content="Our Certification Partners — AWS & CWS | Perfect Water Valve" />
        <meta property="og:description" content="Smart Valve™ is certified and backed by American Water Savings (AWS) and Canadian Water Savings (CWS) — the organizations that verify savings, issue guarantees, and provide the valve." />
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
              Certification & Verification Partners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              The Science Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">the Guarantee</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Smart Valve™ is exclusively distributed through American Water Savings (AWS) in the U.S. and Canadian Water Savings (CWS) in Canada — the organizations that conduct measurement and verification, issue the written performance guarantee, and include 10 years of service, repair, and replacement at no additional cost.
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
                  Developed and patented the Smart Valve™ technology. Holds US Patents 8,707,981 · 10,544,569 · 11,016,512. American Made and Operated — production since 2008.
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
                  Exclusive distributor for all U.S. installations. Conducts M&V, issues written guarantees, and manages all service, repair, and replacement. 42,000+ customers. Orlando, FL.
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
                  Exclusive distributor for all Canadian installations. Applies the same IPMVP-compliant M&V methodology and written guarantee terms across all Canadian provinces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT AWS & CWS DO */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "#0374A7" }}>Behind the Scenes</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: "#0A1F3A" }}>
              What AWS and CWS Provide
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#4A7085", fontWeight: 300 }}>
              Perfect Water Valve is an authorized dealer and installation partner. The certification, measurement, and guarantee infrastructure is operated by AWS and CWS.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "The Smart Valve™ Device", body: "AWS exclusively distributes and supplies the Smart Valve™ — a US-patented mechanical device (US Patents 8,707,981 · 10,544,569 · 11,016,512) built from Acetron GP and food-grade stainless steel. Available in sizes 5/8\" to 12\". No electricity required. No maintenance.", color: "#0374A7" },
              { icon: BarChart3, title: "Pre-Installation Assessment", body: "Before every installation, AWS or CWS analyzes 12+ months of water billing data to project site-specific savings. The projection becomes the basis for the written guarantee.", color: "#3C6E7F" },
              { icon: FileText, title: "Measurement & Verification", body: "AWS and CWS conduct independent M&V every 6–12 months using IPMVP-compliant methodology. Savings are calculated against a verified baseline and delivered in a formal M&V PDF report per installation.", color: "#0A1F3A" },
              { icon: ShieldCheck, title: "The Written Guarantee", body: "AWS guarantees a minimum 15% savings in writing. If results fall short, AWS will uninstall at their expense — no penalties, no hidden fees — or will reduce your monthly payment to never exceed 50% of your verified savings.", color: "#0374A7" },
              { icon: CheckCircle2, title: "10-Year Service Coverage", body: "Backed by a 10-year manufacturer's warranty. Service, repair, and replacement are included at no cost for the life of the installation. NSF/ANSI/CAN 61 and NSF/ANSI 372 certified for all North American water systems.", color: "#3C6E7F" },
              { icon: Globe, title: "North American Coverage", body: "AWS (American Water Savings Inc.) covers all U.S. installations — 42,000+ customers on Guaranteed Water Savings programs, 65+ years combined in Commodity Management, American Made and Operated. CWS (Canadian Water Savings) covers all Canadian installations.", color: "#0A1F3A" },
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
                  "Exclusive distributor & partner of Smart Valve™",
                  "42,000+ customers on Guaranteed Water Savings programs",
                  "65+ years combined in Commodity Management",
                  "American Made and Operated",
                  "1800 Pembrook Drive, Suite 300, Orlando FL 32810",
                  "Denver Water rebate program approved supplier",
                  "IPMVP-compliant M&V every 6–12 months",
                  "Written guarantee issued per site — 6-month money-back period"
                ]
              },
              {
                org: "Canadian Water Savings", abbr: "CWS", territory: "Canada", color: "#3C6E7F",
                points: [
                  "All Canadian provinces covered",
                  "IPMVP Option B statistical methodology",
                  "95% confidence threshold reporting",
                  "Formal M&V PDF report per installation",
                  "Written guarantee issued per site"
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

      {/* HOW THE PARTNERSHIP WORKS */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              How the Partnership Works
            </h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              Perfect Water Valve handles sales, customer relationships, and installation coordination. AWS and CWS handle everything behind the science.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Free Assessment", body: "Perfect Water Valve analyzes your water bills and coordinates with AWS or CWS to project site-specific savings." },
              { step: "02", title: "Guarantee Issued", body: "AWS or CWS issues a formal written guarantee — minimum 15% savings — before installation begins." },
              { step: "03", title: "Site Assessment & Installation", body: "AWS conducts a site assessment at no cost (no water shutdown required). Installation by a licensed plumber takes up to 3.5 hours — the only time a water shutdown is needed. Calibration follows 4 weeks later." },
              { step: "04", title: "M&V Reporting", body: "AWS or CWS conducts independent measurement and verification every 6–12 months, delivering formal PDF reports against a verified baseline." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="text-2xl font-black font-headline mb-3" style={{ color: "#DEC600" }}>{item.step}</div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.body}</p>
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
