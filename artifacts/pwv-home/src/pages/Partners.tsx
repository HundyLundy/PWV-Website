import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, BarChart3, FileText, Wrench, Globe, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
              Every Smart Valve™ installation is backed by two independent certification organizations — American Water Savings (AWS) and Canadian Water Savings (CWS). They provide the valve, conduct measurement and verification, calculate the savings, and issue the written guarantee.
            </p>
          </motion.div>
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
              { icon: Wrench, title: "The Smart Valve™ Device", body: "AWS and CWS manufacture and supply the Smart Valve™ — a passive hydrodynamic device installed on commercial main supply lines. No electricity, no moving parts, no maintenance.", color: "#0374A7" },
              { icon: BarChart3, title: "Pre-Installation Assessment", body: "Before every installation, AWS or CWS analyzes 12+ months of water billing data to project site-specific savings. The projection becomes the basis for the written guarantee.", color: "#3C6E7F" },
              { icon: FileText, title: "Measurement & Verification", body: "AWS and CWS conduct independent M&V using IPMVP-compliant methodology. Savings are calculated against a baseline, reviewed at quarter intervals, and reported in a formal M&V document.", color: "#0A1F3A" },
              { icon: ShieldCheck, title: "The Written Guarantee", body: "AWS and CWS issue the performance guarantee — a written contract specifying the minimum 15% savings. If the verified reduction falls short, they make it right at no cost to the facility.", color: "#0374A7" },
              { icon: CheckCircle2, title: "NSF Certification Backing", body: "Smart Valve™ is certified under NSF 61 (drinking water system components) and NSF 372 (lead-free materials). These certifications are maintained and administered through the AWS/CWS quality program.", color: "#3C6E7F" },
              { icon: Globe, title: "North American Coverage", body: "AWS covers all U.S. installations. CWS covers all Canadian installations. Both organizations apply the same M&V methodology and guarantee terms across their respective territories.", color: "#0A1F3A" },
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
                org: "American Water Savings", abbr: "AWS", territory: "United States", color: "#0374A7",
                points: [
                  "All 50 U.S. states covered",
                  "Denver Water rebate program approved supplier",
                  "IPMVP-compliant M&V reporting",
                  "Formal M&V PDF report per installation",
                  "Written guarantee issued per site"
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
              { step: "03", title: "Installation", body: "A licensed plumber installs Smart Valve™ on your main supply line. Under 4 hours. Zero downtime." },
              { step: "04", title: "M&V Reporting", body: "AWS or CWS conducts independent measurement and verification quarterly, delivering formal PDF reports." },
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
