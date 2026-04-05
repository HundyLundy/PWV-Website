import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, CheckCircle, Wrench, DollarSign, Droplets } from "lucide-react";

export default function CarWashesHardWater() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hard Water & Equipment Damage at Car Washes | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Hard water mineral scale reduces car wash pump efficiency, clogs nozzles, and damages reclaim systems. Smart Valve™ stops scale buildup without chemicals — 15%–35% water savings plus lower maintenance costs.");
    setMeta("og:title", "Hard Water & Car Wash Equipment Scale | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/car-washes/hard-water-equipment", "property");
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
          <a href="/industries/car-washes" className="text-[#0374A7] hover:underline">Car Washes</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Hard Water &amp; Equipment</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🚗 Car Wash Hard Water &amp; Equipment
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Hard Water Is Destroying Your Car Wash Equipment</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              85% of US car wash markets have hard water. Mineral scale accumulates on pumps, nozzles, and reclaim systems — reducing efficiency, increasing maintenance costs, and shortening equipment life. Smart Valve™ stops scale buildup without salt, without chemicals, and without maintenance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "85%", label: "US car wash markets with hard water (>7 GPG)" },
                { value: "10–25%", label: "Pump efficiency loss from scale buildup" },
                { value: "$500–$2K", label: "Nozzle replacement/yr — high-volume tunnel" },
                { value: "Zero", label: "Chemicals, salt, or maintenance added" },
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

      {/* Section 1: How Hard Water Damages Equipment */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">How Hard Water Damages Car Wash Equipment</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Wrench, title: "Pump Impellers — Efficiency Loss of 10–25%", body: "Mineral scale accumulates on pump impellers, reducing flow efficiency. The pump works harder to deliver the same pressure — increasing energy consumption, generating more heat, and accelerating mechanical wear. Scale-damaged pumps fail earlier and cost more to run." },
              { icon: Wrench, title: "Nozzle Clogging — Uneven Spray and Water Waste", body: "Scale-clogged nozzles produce uneven spray patterns. To compensate for dry spots from underperforming nozzles, operators run higher flow rates — using more water to achieve the same wash quality. This directly increases the metered consumption that appears on your water bill." },
              { icon: Wrench, title: "Reclaim System Degradation", body: "Mineral scale in reclaim systems reduces reclaim efficiency — requiring more fresh water makeup and more frequent tank cleanouts. The reclaim system that was designed to reduce your water costs becomes increasingly less effective as scale accumulates." },
              { icon: DollarSign, title: "The Hidden Cost: Equipment Damage Exceeds Water Bill Savings", body: "The total cost of scale damage — pump replacement, nozzle replacement, reclaim maintenance, and energy inefficiency — often exceeds the water bill savings potential from conventional conservation measures. Smart Valve™ addresses both simultaneously." },
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

      {/* Section 2: Why Smart Valve Stops Scale Without Chemicals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Reduces Car Wash Water Bills — And Maintenance Costs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Droplets, title: "Phantom Volume — The Primary Savings Mechanism", body: "City water travels at ≈250 psi in distribution mains, keeping dissolved air fully compressed. At your pressure regulator, the line drops to 50–110 psi and air expands 4–5×, inflating meter readings. Smart Valve™ maintains upstream compression so only real water registers — directly reducing your metered bill." },
              { icon: ShieldCheck, title: "No Salt, No Chemicals, No Regeneration", body: "Unlike water softeners, Smart Valve™ requires no salt, adds no chemicals, and has no regeneration cycles. There is nothing to maintain after installation. NSF/ANSI/CAN 61 and NSF/ANSI 372 certified — safe for car wash systems that reclaim and recycle water." },
              { icon: Wrench, title: "Pressure Stabilization Reduces Scale Deposition Rate", body: "Smart Valve™ stabilizes supply line pressure using a spring-loaded mechanism, reducing the pressure-driven turbulence that accelerates mineral scale deposition on nozzles, pump surfaces, and pipe walls. Lower turbulence means slower scale buildup — a secondary benefit of the same pressure stabilization mechanism." },
              { icon: ShieldCheck, title: "Safe for Reclaim Systems", body: "Smart Valve™ does not add any substances to the water supply and does not alter water chemistry. NSF/ANSI/CAN 61 and NSF/ANSI 372 certification covers all car wash water applications including reclaimed water makeup systems." },
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

      {/* Section 3: Dual Benefit */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ DUAL BENEFIT</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Lower Bill AND Lower Maintenance Costs</h2>
            <p className="text-xl text-white/80 mb-8">The primary benefit is guaranteed water bill savings. The scale reduction benefit is additional — not included in the 15% guarantee calculation.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Primary Benefit — Guaranteed", items: ["15% minimum reduction in metered water consumption", "Applies to both water and sewer charges", "Written guarantee with every installation", "23% Caliber benchmark (5 verified sites)"] },
                { label: "Secondary Benefit — Additional", items: ["Fewer nozzle replacements", "Longer pump life", "Less frequent reclaim system cleanouts", "Reduced energy consumption from scale-free pumps"] },
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

      {/* Section 4: How Smart Valve Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Installation — No Changes to Wash Process</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on Main Supply Line", body: "Smart Valve™ installs on the main water supply line. No changes to wash process, equipment chemistry, or operations. Installation completed in 2–4 hours." },
              { step: "2", title: "15% Guaranteed Minimum — 23% Caliber Benchmark", body: "Every installation carries a written guarantee of at least 15% reduction in metered water consumption. The Caliber Car Wash benchmark is 23% weighted average across 5 verified sites." },
              { step: "3", title: "Zero Maintenance Post-Installation", body: "No salt. No chemicals. No regeneration cycles. No maintenance required after installation. Smart Valve™ operates passively for the lifetime of the device." },
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
              { label: "Car Washes Hub", href: "/industries/car-washes", desc: "Caliber Car Wash 5-site case study and full overview" },
              { label: "Car Wash Water Costs", href: "/industries/car-washes/water-costs", desc: "Gallons, rates, and where the money goes" },
              { label: "Multifamily Irrigation", href: "/industries/multifamily/irrigation-common-areas", desc: "Shared mechanism: mineral scale and water efficiency" },
              { label: "Plumbing Protection Benefits", href: "/benefits/plumbing-protection", desc: "Full breakdown of scale, pressure, and flow protection" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Car Wash Assessment</h2>
            <p className="text-gray-600">We'll calculate your water bill savings and equipment protection value — based on your wash type, volume, and local water hardness. Zero obligation.</p>
          </div>
          <ContactForm source="car-washes-hard-water" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
