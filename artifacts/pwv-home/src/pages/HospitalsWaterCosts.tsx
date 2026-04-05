import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingUp, DollarSign, ShieldCheck, CheckCircle } from "lucide-react";

export default function HospitalsWaterCosts() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hospital Water Costs — Full Facility Breakdown | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Where hospital water budgets go and why healthcare costs are rising faster than CPI. Smart Valve™ cuts hospital water bills 15%–35% annually — NSF 61 & 372 certified safe for all healthcare applications.");
    setMeta("og:title", "Hospital Water Costs | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hospitals/water-costs", "property");
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
          <span className="text-gray-600">Water Costs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏥 Hospital Water Cost Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Where Healthcare Facilities Spend Their Water Budget</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Hospitals are among the highest-intensity water users in any commercial real estate category — and unlike hotels or offices, hospital water demand is non-discretionary. Smart Valve™ is NSF 61 and 372 certified, safe for all healthcare water applications, and guaranteed to reduce your metered bill by at least 15%.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "150–600 gal", label: "Per bed per day" },
                { value: "35%", label: "Cooling equipment — largest hospital water cost" },
                { value: "Both", label: "Water + sewer charged on virtually every gallon" },
                { value: "$108K/yr", label: "15% min savings on $60K/month bill" },
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

      {/* Section 1: Where Hospital Water Budgets Go */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Where Hospital Water Budgets Go</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All of these draws from the same metered supply line. Smart Valve™ installs once and reduces the metered total across all uses simultaneously.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { category: "Cooling Equipment (HVAC, Cooling Towers)", pct: "35%", desc: "The single largest hospital water cost. Continuous cooling demand from operating rooms, server infrastructure, and patient environment systems requires high-volume makeup water." },
              { category: "Domestic and Sanitary", pct: "20%", desc: "Restrooms, patient rooms, staff areas, and visitor facilities. Unlike residential, hospital domestic use is non-discretionary — patient care requires it regardless of conservation measures." },
              { category: "Medical Equipment Support", pct: "15%", desc: "Central sterile processing, dialysis water systems, laboratory equipment, and pharmacy water systems all require continuous high-quality water supply." },
              { category: "Laundry and Linen Processing", pct: "15%", desc: "Hospital laundry volumes are comparable to hotel laundry at scale — but gowns, surgical linens, and patient bedding require higher temperatures and more rinse cycles." },
              { category: "Kitchen and Food Service", pct: "10%", desc: "Patient meal service, staff cafeteria, and food preparation equipment. All metered and billed at commercial rates." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#0A1F3A]">{item.category}</h3>
                  <span className="text-xl font-bold text-[#0374A7]">{item.pct}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Hospital Water Costs Are Rising */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Hospital Water Costs Are Rising Faster Than CPI</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Aging Municipal Infrastructure Surcharges", body: "Hospitals in older urban markets face rate surcharges for infrastructure replacement — lead pipe remediation, PFAS treatment, and transmission line upgrades are all being passed to commercial ratepayers. Healthcare facilities, as high-volume users, bear disproportionate cost." },
              { icon: TrendingUp, title: "Drought Surcharges in Western Markets", body: "Hospitals in California, Arizona, Nevada, and Colorado face tiered rate structures where high-volume users pay premium rates in the top tiers. Healthcare facilities cannot reduce consumption below clinical minimums — they absorb the highest tier costs automatically." },
              { icon: DollarSign, title: "Regulatory Compliance Costs Passed to Ratepayers", body: "PFAS remediation, lead pipe replacement, and source water protection programs represent hundreds of billions in infrastructure investment — all being recovered through commercial water rate increases that compound annually." },
              { icon: Droplets, title: "The Dual Meter Problem", body: "Hospitals pay water charges AND sewer charges on virtually every gallon consumed. In urban markets, sewer rates often exceed water rates. Combined water + sewer is the true cost — and Smart Valve™ reduces both simultaneously by reducing metered consumption." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-[#E8EFF7] rounded-xl">
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

      {/* Section 3: Smart Valve on Hospital Main Supply */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ HEALTHCARE-CERTIFIED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Smart Valve™ on a Hospital Main Supply Line</h2>
            <p className="text-xl text-white/80 mb-8">Installed upstream of the commercial meter — every gallon saved is a gallon not billed. Reduces metered consumption across all hospital uses simultaneously. NSF 61 and 372 certified safe for healthcare water supply systems.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { value: "≥15%", label: "Guaranteed minimum savings" },
                { value: "$108K/yr", label: "Min on $60K/month bill" },
                { value: "NSF 61 & 372", label: "Healthcare-safe certification" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-[#DEC600]">{stat.value}</div>
                  <div className="text-white/70 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">
                  For NSF certification detail and bed-count ROI calculations, see the <a href="/industries/hospitals" className="text-[#DEC600] hover:underline font-semibold">Hospitals &amp; Healthcare hub page</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: How Smart Valve Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Works in a Healthcare Facility</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Passive Installation — 2 to 4 Hours, Zero Clinical Disruption", body: "Smart Valve™ is installed on the main supply line by a licensed technician. No service interruption. No changes to water pressure, flow rate, or quality in any clinical area. Zero impact on operations during or after installation." },
              { step: "2", title: "No Electricity, No Chemicals, No Maintenance", body: "US-patented mechanical device — no electricity required, no chemical inputs, and no maintenance schedule after installation. NSF/ANSI/CAN 61 and NSF/ANSI 372 certified safe for all healthcare water supply systems including patient areas." },
              { step: "3", title: "15% Guaranteed in Writing", body: "Every healthcare installation carries a written guarantee of at least 15% reduction in metered water consumption. On a hospital spending $60,000/month, that is $108,000/year in minimum guaranteed savings — applied to both water and sewer charges." },
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
              { label: "Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk", desc: "How air pockets in pipes create Legionella risk" },
              { label: "Sterile Water & Compliance", href: "/industries/hospitals/sterile-water-compliance", desc: "CSP, dialysis, and medical equipment water quality" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Hospital Water Cost Assessment</h2>
            <p className="text-gray-600">We'll analyze your facility's water consumption and calculate your projected savings — with NSF-certified documentation safe for all healthcare applications. Zero obligation.</p>
          </div>
          <ContactForm source="hospitals-water-costs" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
