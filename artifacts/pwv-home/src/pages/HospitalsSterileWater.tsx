import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, CheckCircle, Droplets, Activity, DollarSign } from "lucide-react";

export default function HospitalsSterileWater() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Sterile Water Compliance — CSP, Dialysis & Lab Systems | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Smart Valve™ reduces mineral scaling in hospital CSP, dialysis, and lab water systems without chemicals. NSF 61 & 372 certified. 15% guaranteed metered savings — plus scale reduction as an additional operational benefit.");
    setMeta("og:title", "Hospital Sterile Water & Medical Equipment Water Quality | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hospitals/sterile-water-compliance", "property");
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={(id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }} />

      {/* Breadcrumb */}
      <div className="bg-[#E8EFF7] py-3 px-4 border-b border-gray-200 pt-20">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <a href="/industries" className="text-[#0374A7] hover:underline">Industries</a>
          <span className="text-gray-400">/</span>
          <a href="/industries/hospitals" className="text-[#0374A7] hover:underline">Hospitals &amp; Healthcare</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Sterile Water &amp; Compliance</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏥 Hospital Sterile Water &amp; Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Medical Equipment Water Quality &amp; Healthcare Compliance</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Mineral scale accumulation in hospital CSP, dialysis, and laboratory water systems is both a cost problem and a compliance problem. Smart Valve™ reduces scale without chemicals — NSF 61 and 372 certified safe for all healthcare water applications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "CSP", label: "High-pressure hot water — continuous scale buildup risk" },
                { value: "AAMI/ANSI", label: "Dialysis water standards — mineral scale is the enemy" },
                { value: "NSF 61 & 372", label: "Smart Valve™ certified safe for all healthcare applications" },
                { value: "Zero Chemicals", label: "No additives to water supply — passive process" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-[#DEC600]">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Medical Equipment Water Quality Matters */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Medical Equipment Water Quality Matters</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Activity, title: "Central Sterile Processing (CSP)", body: "CSP uses high-pressure hot water and steam for surgical instrument sterilization. Mineral scale buildup in CSP equipment reduces sterilization effectiveness and shortens equipment life — requiring longer cycles or higher temperatures to achieve the same result." },
              { icon: Droplets, title: "Dialysis Water Systems — AAMI/ANSI Standards", body: "Dialysis water must meet AAMI/ANSI standards for purity. Mineral contamination is a direct patient safety issue — dialysis patients receive water directly into their bloodstream through the dialyzing solution. Scale buildup also requires more frequent filter replacement and system maintenance." },
              { icon: Activity, title: "Laboratory and Pharmacy Water", body: "Laboratory and pharmacy water systems require consistent quality for accurate test results and safe drug compounding. Scale and mineral variation affect both. Consistent water chemistry from Smart Valve™ reduces this variation source." },
              { icon: ShieldCheck, title: "The Common Thread: Scale Is Both a Cost and Compliance Problem", body: "Mineral scale accumulation in medical water systems shortens equipment life, increases maintenance frequency, and can compromise sterilization and purification effectiveness. Addressing scale at the source — the main supply line — protects every system downstream." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0374A7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#0374A7]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A1F3A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How Mineral Scale Affects Hospital Water Systems */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">How Mineral Scale Affects Hospital Water Systems</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { category: "Sterilizers and CSP Equipment", impact: "Scale reduces heat transfer in sterilizers — requiring longer cycles or higher temperatures. Higher temperatures consume more energy and accelerate equipment wear." },
              { category: "Dialysis Water Systems", impact: "Scale requires more frequent filter replacement and system maintenance. Increased maintenance frequency raises operating costs and creates additional compliance documentation requirements." },
              { category: "Cooling Towers", impact: "Scale in cooling towers reduces heat exchange efficiency — increasing cooling water consumption. This is the same mechanism Smart Valve™ addresses in data centers." },
              { category: "Pipes and Heat Exchangers", impact: "Scale accumulation in distribution pipes reduces flow efficiency and increases the dead zones where biofilm — including Legionella biofilm — can form." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#E8EFF7] rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A1F3A] mb-2">{item.category}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Smart Valve Reduces Scale Without Chemicals */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ NO CHEMICALS — NSF CERTIFIED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Smart Valve™ Reduces Mineral Scaling Without Chemicals</h2>
            <p className="text-xl text-white/80 mb-8">Smart Valve™ maintains stable upstream pressure throughout the supply line — stabilizing flow characteristics, reducing pressure-driven turbulence that contributes to scale deposition, and eliminating the air entrainment that creates stagnant dead zones where biofilm forms. Nothing is added to the water.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {[
                { label: "Longer Equipment Life", desc: "Reduced scale means fewer maintenance cycles for CSP, dialysis, and cooling equipment" },
                { label: "More Consistent Water Chemistry", desc: "Mineral modification reduces variation at laboratory and pharmacy draw points" },
                { label: "Zero Chemical Additives", desc: "NSF 61 and 372 certified — nothing added to the water supply, safe for all medical applications" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20 text-left">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-white font-bold">{item.label}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 text-sm text-white/70">
              Note: Scale reduction is a secondary benefit. The primary benefit is metered consumption reduction — 15% guaranteed in writing on your water and sewer bill.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: NSF Certification */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">NSF Certification and Healthcare Compliance</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "NSF 61", title: "Safe for Drinking Water System Components", body: "NSF 61 certifies that Smart Valve™ does not leach harmful substances into drinking water — required for any device installed in a potable water system. Includes patient-area water supply systems." },
              { step: "NSF 372", title: "Lead-Free Compliance", body: "NSF 372 certifies lead-free compliance — required for healthcare facility installations in most US states. Smart Valve™ meets or exceeds all lead-free requirements for hospital water supply systems." },
              { step: "→", title: "No Additional Regulatory Approval Required", body: "These certifications mean Smart Valve™ can be installed in any hospital water supply system without additional regulatory approval — including systems serving CSP, dialysis support, laboratory, and patient care areas. For full NSF detail and bed-count ROI, see the Hospitals hub." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-[#E8EFF7] rounded-xl">
                <div className="w-14 h-10 bg-[#0374A7] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 px-2">{step.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A1F3A] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 px-4 bg-[#E8EFF7] border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#0A1F3A] mb-6">Related Pages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Hospitals Hub", href: "/industries/hospitals", desc: "NSF certification detail and bed-count ROI calculations" },
              { label: "Hospital Water Costs", href: "/industries/hospitals/water-costs", desc: "Where healthcare facilities spend their water budget" },
              { label: "Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "How air pockets in pipes create Legionella risk" },
              { label: "Plumbing Protection Benefits", href: "/benefits/plumbing-protection", desc: "How Smart Valve™ affects pressure, scale, and pipe systems" },
            ].map((link, i) => (
              <a key={i} href={link.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#0374A7]/50 hover:shadow-md transition-all group">
                <div className="text-[#0374A7] font-bold group-hover:underline mb-1">{link.label}</div>
                <div className="text-gray-500 text-sm">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Hospital Water Assessment</h2>
            <p className="text-gray-600">Contact us to discuss how Smart Valve™ reduces mineral scaling in your medical equipment water systems — with NSF-certified documentation for all healthcare applications.</p>
          </div>
          <ContactForm source="hospitals-sterile-water" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
