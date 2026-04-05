import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { AlertTriangle, ShieldCheck, CheckCircle, FileText, Droplets } from "lucide-react";

export default function HospitalsLegionella() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Legionella & Biofilm Risk in Hospital Water Systems | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Air entrainment in hospital water pipes creates stagnant dead zones where Legionella colonizes. Smart Valve™ reduces air entrainment — supporting ASHRAE 188/514 and Joint Commission WMP compliance. NSF 61 & 372 certified.");
    setMeta("og:title", "Hospital Legionella Risk & Air Entrainment | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hospitals/legionella-biofilm-risk", "property");
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
          <span className="text-gray-600">Legionella &amp; Biofilm Risk</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 rounded-full px-4 py-2 text-red-300 text-sm font-semibold mb-6">
              🏥 Hospital Water Safety &amp; Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Air Pockets in Hospital Water Pipes Create Legionella Risk</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Air entrainment in water pipes creates the stagnant dead zones where Legionella colonizes and biofilm forms. Smart Valve™ reduces air entrainment — addressing one contributing factor to Legionella risk while simultaneously reducing your metered water bill by a guaranteed 15%.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "10K–18K", label: "Legionella hospitalizations/yr — US (CDC)" },
                { value: "1 in 4", label: "Healthcare-acquired Legionella fatality rate (CDC)" },
                { value: "ASHRAE 514", label: "2023 hospital water management standard" },
                { value: "JC EC.02.05.02", label: "Joint Commission WMP requirement — effective 2022" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-red-300">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: How Air Pockets Create Legionella Risk */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">How Air Pockets in Water Pipes Create Legionella Risk</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: AlertTriangle, title: "Legionella Thrives in Stagnant, Warm Dead Zones", body: "Legionella bacteria thrive in stagnant, warm water — specifically in dead zones where water does not circulate. These conditions allow the bacteria to multiply to dangerous concentrations without the dilution effect of flowing water." },
              { icon: Droplets, title: "Air Entrainment Creates Exactly These Dead Zones", body: "Air pockets trapped in water pipes displace water, creating stagnant zones where Legionella can colonize. These dead zones form at pipe bends, low-flow branches, and underutilized fixtures — all common in large hospital water distribution systems." },
              { icon: AlertTriangle, title: "Biofilm Forms in Stagnant Zones — Making Treatment Harder", body: "Biofilm — the protective matrix that Legionella hides inside — forms preferentially in stagnant zones. Once established, biofilm protects bacteria from chemical treatment. Hospitals with air-entrained water systems have higher Legionella colonization risk even with standard chemical protocols." },
              { icon: ShieldCheck, title: "Reducing Air Entrainment Reduces Dead Zone Formation", body: "Smart Valve™ uses a passive electrochemical process that reduces dissolved air and oxygen in the water supply. By reducing air entrainment, it eliminates a primary condition for stagnant dead zone formation in hospital water distribution systems." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-600" />
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

      {/* Section 2: Regulatory Compliance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">The Regulatory Compliance Landscape</h2>
          </div>
          <div className="space-y-4">
            {[
              { standard: "ASHRAE Standard 188", body: "Minimum requirements for Legionella risk management in building water systems. Requires a Water Management Plan (WMP) with documented hazard analysis — including identification and control of conditions that promote Legionella growth, such as air entrainment dead zones." },
              { standard: "ASHRAE Standard 514 (2023)", body: "Expands beyond Legionella to all microbial, physical, and chemical hazards in building water systems. Healthcare facilities must comply with this newer, broader standard. Air entrainment is a documented physical hazard under this framework." },
              { standard: "Joint Commission EC.02.05.02", body: "Requires all hospitals and nursing care centers to have a Water Management Program that addresses Legionella and other waterborne pathogens. Effective January 1, 2022. Non-compliance risks Joint Commission citations, CMS conditions of participation violations, and significant liability exposure." },
              { standard: "CDC Toolkit for Healthcare Facilities", body: "Recommends identifying areas where Legionella might grow and implementing controls. Air entrainment zones are a primary concern identified in CDC guidance. Smart Valve™ addresses this specific risk factor." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#E8EFF7] rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-[#0A1F3A] mb-2">{item.standard}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How Smart Valve Addresses Air Entrainment */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ IMPORTANT DISCLAIMER</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">How Smart Valve™ Addresses Air Entrainment</h2>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-left mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  Smart Valve™ is NOT a water treatment device and does NOT add chemicals to the water supply. It does not replace a Water Management Program, chemical treatment, or Legionella testing. It addresses one contributing factor — air entrainment — that creates conditions favorable to Legionella colonization.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "What Smart Valve™ Addresses", items: ["Reduces dissolved air and oxygen in water supply", "Eliminates conditions that create stagnant dead zones", "Reduces mineral scaling that creates biofilm accumulation sites", "NSF 61 and 372 certified — safe for healthcare water supply systems"] },
                { label: "What Smart Valve™ Does NOT Replace", items: ["Chemical treatment programs", "Temperature management protocols", "Flushing protocols", "Legionella testing programs"] },
              ].map((col, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20 text-left">
                  <h3 className="text-white font-bold mb-3">{col.label}</h3>
                  {col.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Supporting Your WMP */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Supporting Your Water Management Program</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documentable Risk Reduction Measure for ASHRAE 188/514 WMP", body: "Smart Valve™ installation can be documented as a risk reduction measure within your facility's ASHRAE 188/514 Water Management Program. M&V documentation provides an auditable record of installation and ongoing performance." },
              { step: "2", title: "Independently Verifiable Documentation", body: "Savings are measured by the utility's own commercial meter. M&V documentation is independently auditable — satisfying the evidence requirements of Joint Commission EC.02.05.02 compliance audits." },
              { step: "3", title: "NSF 61 and 372 Certified for Healthcare Applications", body: "NSF 61 and 372 certification means Smart Valve™ is safe for installation in any hospital water supply system without additional regulatory approval — including systems serving patient care areas, central sterile processing, and dialysis support." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-[#E8EFF7] rounded-xl">
                <div className="w-10 h-10 bg-[#0374A7] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{step.step}</div>
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
              { label: "Hospitals Hub", href: "/industries/hospitals", desc: "Bed-count ROI tiers, NSF certification, full overview" },
              { label: "Hospital Water Costs", href: "/industries/hospitals/water-costs", desc: "Where healthcare facilities spend their water budget" },
              { label: "Sterile Water & Compliance", href: "/industries/hospitals/sterile-water-compliance", desc: "CSP, dialysis, and medical equipment water quality" },
              { label: "Data Center WUE & Risk", href: "/industries/data-centers/wue-regulatory-risk", desc: "Shared angle: air entrainment and regulatory risk" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Contact Us to Discuss Hospital Water Safety and Cost Reduction</h2>
            <p className="text-gray-600">We can discuss how Smart Valve™ addresses air entrainment in hospital water systems and how it supports your ASHRAE 188/514 Water Management Program documentation.</p>
          </div>
          <ContactForm source="hospitals-legionella" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
