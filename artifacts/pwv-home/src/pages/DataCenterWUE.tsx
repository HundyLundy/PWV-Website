import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BarChart2, ShieldCheck, CheckCircle, AlertTriangle, FileText, Globe } from "lucide-react";

export default function DataCenterWUE() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Data Center WUE & Water Regulatory Compliance | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Smart Valve™ directly improves data center WUE scores and satisfies ESG water reporting. Reduce the WUE numerator 15%–35% annually. Regulatory pressure is accelerating in every major market.");
    setMeta("og:title", "Data Center WUE & Regulatory Risk | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/data-centers/wue-regulatory-risk", "property");
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
          <a href="/industries/data-centers" className="text-[#0374A7] hover:underline">Data Centers</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">WUE & Regulatory Risk</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🖥️ Data Center WUE &amp; Regulatory Risk
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Data Center WUE &amp; Regulatory Risk</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Water Usage Effectiveness (WUE) is now an ESG disclosure metric, a permit condition, and a competitive differentiator. Smart Valve™ reduces the WUE numerator — liters consumed — without touching IT load, delivering measurable, auditable improvement that satisfies ESG, regulatory, and investor requirements.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "1.8 L/kWh", label: "Industry Avg WUE (older facilities)" },
                { value: "0.27 L/kWh", label: "Microsoft Global WUE — FY25" },
                { value: "Mar 2025", label: "Loudoun County By-Right Zoning Eliminated" },
                { value: "2025–26", label: "Phoenix Water-Use Ordinances Active" },
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

      {/* Section 1: What Is WUE */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">What Is WUE and Why It Matters Now</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">WUE is the new PUE. ESG investors, regulators, and permit agencies are all tracking it — and operators who can demonstrate measurable improvement have a documented competitive advantage.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: BarChart2, title: "The Green Grid Definition", body: "WUE = annual liters of water used for humidification and cooling ÷ total annual kWh used to power IT equipment. Lower is better. Microsoft achieved 0.27 L/kWh globally in FY25. The industry average for older facilities is 1.5–2.0 L/kWh." },
              { icon: FileText, title: "WUE in ESG Disclosures", body: "WUE is now reported in ESG investor disclosures, sustainability reports, and is referenced in the EU Code of Conduct for Data Centers. Institutional investors require it. Hyperscalers track it portfolio-wide and cascade requirements to colocation tenants." },
              { icon: BarChart2, title: "Smart Valve™ Reduces the Numerator Directly", body: "Smart Valve™ reduces metered water consumption — the numerator in the WUE formula — without affecting IT load (the denominator). Every percentage point of metered consumption reduction is a direct, measurable WUE improvement that shows up in ESG reporting." },
              { icon: ShieldCheck, title: "Independently Auditable", body: "Savings are measured by the utility's own commercial meter, not a proprietary sensor. M&V documentation provides the auditable baseline and post-installation data required for ESG reporting. No third-party auditor required — utility bills are the evidence." },
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

      {/* Section 2: Regulatory Pressure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Regulatory Pressure Is Accelerating</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The markets with the highest data center density face the most aggressive regulatory response. Operators who can demonstrate reduced water intensity have a measurable permitting advantage.</p>
          </div>
          <div className="space-y-4">
            {[
              { location: "Loudoun County, VA — World's Largest Data Center Market", icon: AlertTriangle, body: "The Board of Supervisors eliminated by-right data center zoning on March 18, 2025. New facilities now require a full public approval process. Drought conditions in 2024 triggered mandatory water restrictions. Northern Virginia data centers collectively demand 1.7 billion gallons per day." },
              { location: "Phoenix & Tucson, AZ", icon: AlertTriangle, body: "Phoenix City Council approved ordinances making it harder to build new data centers near neighborhoods. Tucson is using water-use ordinances as de facto construction limits. Arizona's finite groundwater supply is under acute pressure from the data center construction boom." },
              { location: "Northern Virginia — Virginia DEQ", icon: AlertTriangle, body: "Virginia DEQ regulates water withdrawals and requires permits for large-scale users. Operators seeking expansion permits increasingly face conditions requiring demonstrated water efficiency improvements — exactly what Smart Valve™ M&V documentation provides." },
              { location: "State-Level Moratorium Bills — 2025–2026", icon: AlertTriangle, body: "Multiple states introduced bills in 2025–2026 requiring environmental impact assessments for new data center construction. The pattern: regulatory pressure is highest in the markets where data center density is highest. Water use is the primary political concern driving these efforts." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-[#E8EFF7] rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A1F3A] mb-1">{item.location}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: M&V Documentation */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ AUDIT-READY DOCUMENTATION</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">M&V Documentation Satisfies ESG and Permit Requirements</h2>
            <p className="text-xl text-white/80 mb-8">Every Smart Valve™ installation includes Measurement &amp; Verification documentation. Savings are measured by the utility's own commercial meter — independently verifiable by any third party.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "ESG Water Reduction Reporting", desc: "Auditable baseline and post-installation metered data for investor sustainability disclosures" },
                { label: "Regulatory Permit Conditions", desc: "Documented water efficiency improvement that satisfies permit conditions requiring measurable reductions" },
                { label: "CDP & GRESB Water Metrics", desc: "Quarter-by-quarter metered comparison data formatted for institutional ESG reporting frameworks" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20 text-left">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-white font-bold">{item.label}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-left">
              <p className="text-white/80 text-sm leading-relaxed">
                For ROI calculations at your spend level, see our <a href="/industries/data-centers/hyperscale-roi" className="text-[#DEC600] hover:underline font-semibold">Hyperscale ROI page</a>. For cooling tower mechanism detail, see <a href="/industries/data-centers/cooling-water-costs" className="text-[#DEC600] hover:underline font-semibold">Cooling Water Costs</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: How Smart Valve Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Improves WUE</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on the User Side of the Meter", body: "Smart Valve™ is installed on the main supply line between the water meter and the pressure regulator. All downstream water use — cooling towers, humidification, domestic — is affected by the pressure stabilization and Phantom Volume elimination." },
              { step: "2", title: "Phantom Volume Elimination Reduces Metered Consumption", body: "Smart Valve™ maintains upstream compression using a patent-protected spring-loaded mechanical mechanism, preventing dissolved air from expanding through the meter. The utility meter records only real water — reducing the numerator in your WUE calculation with no operational changes required." },
              { step: "3", title: "Utility Meter Records the Reduction", body: "Every reduction is measured by the utility's own commercial meter. No proprietary sensor. The same meter that determines your water bill is the meter that documents your WUE improvement." },
              { step: "4", title: "15% Guaranteed in Writing", body: "Every installation — including data center installations — carries a written guarantee of at least 15% reduction in metered water consumption. If the guarantee is not met, we resolve it at no cost." },
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
              { label: "Data Centers Hub", href: "/industries/data-centers", desc: "Overview of Smart Valve™ in data center environments" },
              { label: "Cooling Water Costs", href: "/industries/data-centers/cooling-water-costs", desc: "Where data centers spend their water budget — cooling tower breakdown" },
              { label: "Hyperscale ROI", href: "/industries/data-centers/hyperscale-roi", desc: "ROI at scale: $50K/mo, $250K/mo, $1M/mo spend tiers" },
              { label: "Hospitals & Legionella Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "Shared mechanism: air entrainment and waterborne pathogen risk" },
              { label: "Plumbing Protection Benefits", href: "/benefits/plumbing-protection", desc: "Scale, pressure stabilization, and pipe protection details" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Get a Data Center WUE Assessment</h2>
            <p className="text-gray-600">Contact us to discuss how Smart Valve™ can improve your facility's WUE score, satisfy ESG reporting requirements, and provide the documented water efficiency record needed for permit compliance.</p>
          </div>
          <ContactForm source="data-centers-wue" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
