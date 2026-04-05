import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

export default function CarWashesWaterCosts() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Car Wash Water Costs — Gallons, Rates & True Bill Anatomy | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Car wash water costs by wash type: gallons, rates, and where the money goes. Smart Valve™ cuts car wash water bills 15%–35% annually — 23% Caliber Car Wash benchmark across 5 verified sites.");
    setMeta("og:title", "Car Wash Water Costs | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/car-washes/water-costs", "property");
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
          <span className="text-gray-600">Water Costs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🚗 Car Wash Water Cost Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Car Wash Water Costs — Gallons, Rates, and Where the Money Goes</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              A 400-car/day tunnel wash uses 1.44 million gallons per month. At commercial water + sewer rates, that's $11,500/month in water costs before any rate increases. Smart Valve™ cuts that bill 15%–35% annually — guaranteed in writing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "50–120 gal", label: "Tunnel car wash per car (EPA data)" },
                { value: "1.44M gal", label: "400-car/day tunnel wash per month" },
                { value: "~$11,500", label: "Monthly water cost at $0.008/gal combined" },
                { value: "$20,700/yr", label: "Minimum 15% savings on that bill" },
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

      {/* Section 1: Water Usage by Car Wash Type */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Water Usage by Car Wash Type</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { type: "Friction In-Bay Automatic", usage: "~35 gal/car", source: "EPA WaterSense data", desc: "Lower per-car consumption than tunnel washes, but in-bay automatics often run continuously during peak hours with shorter cycle times — monthly totals can rival tunnel volumes at busy locations." },
              { type: "Tunnel / Conveyor Wash", usage: "50–120 gal/car", source: "EPA: 65.8 gpv friction, 85.3 gpv frictionless", desc: "The highest per-car water use and the highest-volume car wash format. A 400-car/day tunnel wash uses approximately 1.44 million gallons per month — all subject to commercial metering." },
              { type: "Self-Serve Bay", usage: "15–20 gal/car", source: "EPA WaterSense", desc: "Lowest per-car consumption, but self-serve revenue per car is also lowest. Water cost as a percentage of revenue is often comparable to tunnel washes." },
              { type: "Reclaim Systems", usage: "Varies — reduces but does not eliminate", source: "Reclaim reduces fresh water use", desc: "Reclaim systems reduce fresh water consumption by recycling wash water, but they do not eliminate fresh water use. All fresh makeup water is metered and billed at commercial rates — Smart Valve™ reduces this metered consumption." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-[#0A1F3A]">{item.type}</h3>
                  <span className="text-xl font-bold text-[#0374A7]">{item.usage}</span>
                </div>
                <div className="text-xs text-gray-400 mb-3">{item.source}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The True Cost */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ WATER + SEWER = TRUE COST</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">The True Cost: Water + Sewer</h2>
            <p className="text-xl text-white/80 mb-8">Car washes pay both water charges and sewer charges on consumed water. Combined rate: $0.006–$0.012 per gallon in most US markets. Smart Valve™ reduces both charges simultaneously.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { value: "$11,500/mo", label: "Water cost — 1.44M gal @ $0.008/gal" },
                { value: "$1,725/mo", label: "15% Smart Valve™ minimum savings" },
                { value: "$31,740/yr", label: "23% Caliber benchmark savings" },
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
                  For the full Caliber Car Wash 5-site case study and multi-location ROI analysis, see the <a href="/industries/car-washes" className="text-[#DEC600] hover:underline font-semibold">Car Washes hub page</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Rate Increases Compounding */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Rate Increases Are Compounding</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "4–8% Annual Rate Increases in Most US Markets", body: "Municipal commercial water rates are rising 4–8% annually across the country. Car washes, as high-volume commercial users, are often classified in the highest rate tiers — meaning their exposure to rate increases is compounded by tiered pricing." },
              { icon: TrendingUp, title: "Tiered Rate Structures Penalize High-Volume Users", body: "Car washes consume water at rates that place them in the highest utility billing tiers in most markets. The top tiers charge premium rates — meaning every gallon above the tier threshold costs significantly more than the base rate." },
              { icon: DollarSign, title: "Every Rate Increase Delivers More Dollar Savings From the Same %", body: "Smart Valve™ cuts the underlying consumption. So every rate increase automatically delivers more absolute dollar savings from the same percentage reduction. A 15% reduction on a $11,500/month bill saves $1,725/month — but on a $12,500/month bill (after rate increases), it saves $1,875/month." },
              { icon: DollarSign, title: "$6,900 Per Year Added by a Single 5% Rate Increase", body: "Every 5% rate increase on a $11,500/month water bill adds $6,900/year in operating costs without any change in consumption. Smart Valve™ reduces the consumption base — so future rate increases affect a smaller number of gallons." },
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

      {/* Section 4: How Smart Valve Works */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Reduces Car Wash Water Costs</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on Main Supply Line — No Changes to Wash Process", body: "Smart Valve™ installs on the main water supply line. No changes to wash process, equipment, chemistry, or operations. Installation is completed in 2–4 hours." },
              { step: "2", title: "15% Guaranteed Minimum — 23% Caliber Benchmark", body: "Every car wash installation carries a written guarantee of at least 15% reduction in metered water consumption. The Caliber Car Wash benchmark across 5 verified Georgia and Florida sites is 23% weighted average." },
              { step: "3", title: "Link to Full Case Study", body: "For the complete Caliber Car Wash 5-site M&V case study and multi-location ROI breakdown, see our Car Washes hub page." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200">
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
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#0A1F3A] mb-6">Related Pages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Car Washes Hub", href: "/industries/car-washes", desc: "Caliber Car Wash 5-site case study and full overview" },
              { label: "Hard Water & Equipment", href: "/industries/car-washes/hard-water-equipment", desc: "How mineral scale destroys car wash equipment" },
              { label: "Multifamily Irrigation", href: "/industries/multifamily/irrigation-common-areas", desc: "Shared angle: scale and mineral water waste" },
            ].map((link, i) => (
              <a key={i} href={link.href} className="bg-[#E8EFF7] rounded-xl p-5 border border-gray-200 hover:border-[#0374A7]/50 hover:shadow-md transition-all group">
                <div className="text-[#0374A7] font-bold group-hover:underline mb-1">{link.label}</div>
                <div className="text-gray-500 text-sm">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Car Wash Water Assessment</h2>
            <p className="text-gray-600">We'll calculate your car wash's water cost savings potential — by wash type, volume, and local rates. Based on the Caliber Car Wash 23% verified benchmark. Zero obligation.</p>
          </div>
          <ContactForm source="car-washes-water-costs" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
