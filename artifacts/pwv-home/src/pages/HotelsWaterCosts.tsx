import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingUp, DollarSign, ShieldCheck, CheckCircle } from "lucide-react";

export default function HotelsWaterCosts() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hotel Water Budget Breakdown — HVAC, Laundry & Pools | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Where hotel water budgets go and why bills keep rising. Smart Valve™ cuts hotel water costs 15%–35% annually — water and sewer both. Four Seasons benchmark: 26% savings, $27K/yr.");
    setMeta("og:title", "Hotel Water Costs | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hotels/water-costs", "property");
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
          <a href="/industries/hotels" className="text-[#0374A7] hover:underline">Hotels &amp; Hospitality</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Water Costs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏨 Hotel Water Cost Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Where Hospitality Properties Spend Their Water Budget</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Hotels are among the highest per-square-foot water consumers in commercial real estate. When you add sewer charges — billed on the same metered volume — the true cost of water is often double what the water bill shows. Smart Valve™ reduces both simultaneously.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "100–300 gal", label: "Per occupied room per day" },
                { value: "15%", label: "Water + sewer of total hotel utility costs" },
                { value: "80–120%", label: "Sewer rate vs. water rate" },
                { value: "26%", label: "Four Seasons savings benchmark" },
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

      {/* Section 1: Where Hotel Water Budgets Go */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Where Hotel Water Budgets Go</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All of these draw from the same metered supply line. Smart Valve™ installs once and reduces the metered total across all uses simultaneously.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { category: "Cooling Towers / HVAC", pct: "30–40%", desc: "The largest single water cost. Continuous makeup water to replace evaporation and blowdown losses from HVAC cooling systems serving all guest areas." },
              { category: "Laundry Operations", pct: "20–30%", desc: "A 200-room hotel processes 50,000–100,000 lbs of linen per year. At 3–5 gallons per pound, laundry alone consumes 150,000–500,000 gallons annually." },
              { category: "Pools and Spas", pct: "10–15%", desc: "Continuous evaporation, filter backwash, and guest splash losses require regular fresh water makeup — metered at commercial rates." },
              { category: "Guest Room Fixtures", pct: "15–20%", desc: "Showers, sinks, and toilets in all guest rooms. Unlike metered properties, hotel operators absorb 100% of this cost regardless of guest behavior." },
              { category: "Kitchen and Food Service", pct: "10–15%", desc: "Commercial dishwashers, food preparation, steam equipment, and ice production all run from the same metered supply line." },
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

      {/* Section 2: The Sewer Multiplier */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ THE HIDDEN COST</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">The Sewer Multiplier — Why Hotel Water Bills Are Higher Than They Look</h2>
            <p className="text-xl text-white/80 mb-8">Hotels pay both water charges AND sewer charges on virtually every gallon consumed. Sewer rates in most US markets are 80–120% of water rates — meaning a $10,000 water bill often comes with a $8,000–$12,000 sewer bill.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { value: "$15,000/mo", label: "Water charge example" },
                { value: "$13,000/mo", label: "Sewer charge (87%)" },
                { value: "$50,400/yr", label: "Min savings at 15% on $28K combined" },
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
                  Combined water + sewer is the true cost of water consumption — and Smart Valve™ reduces both simultaneously by reducing metered consumption. A hotel spending $28,000/month combined saves a minimum of $4,200/month at 15% — $50,400/year. At the Four Seasons 26% benchmark, that same property saves $7,280/month — $87,360/year.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Rate Pressure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Rate Pressure in Major Hotel Markets</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Commercial Water Rates Rising 4–8% Annually", body: "Every major US hotel market is seeing commercial water rate increases. Infrastructure investment, PFAS remediation, drought resilience, and population growth are compounding rate pressure. A 5% rate increase on a $28,000/month bill adds $16,800/year in operating costs." },
              { icon: TrendingUp, title: "Above-Average Increases in Key Hotel Markets", body: "Miami, Las Vegas, Phoenix, Los Angeles, and Denver face above-average rate increases due to drought, infrastructure investment, and demand growth. These markets also have the highest hotel density — so the intersection of high usage and high rates creates outsized exposure." },
              { icon: ShieldCheck, title: "OTA Sustainability Requirements Affecting Revenue", body: "Booking.com, Expedia, and major hotel brands now require documented water reduction for green certification badges that directly affect search ranking and booking conversion. Documented M&V results from Smart Valve™ satisfy these requirements." },
              { icon: DollarSign, title: "Smart Valve™ Locks In Savings Before the Next Increase", body: "A 15% reduction locked in today saves 15% off a higher number every year rates increase. The absolute dollar value of a fixed percentage reduction grows automatically as rates rise — without any additional investment." },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Reduces Hotel Water Costs</h2>
            <p className="text-gray-600">For full case study detail, see the <a href="/industries/hotels" className="text-[#0374A7] hover:underline font-semibold">Hotels &amp; Hospitality hub page</a>.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on Main Supply Line — 2 to 4 Hours, Zero Guest Impact", body: "Smart Valve™ installs on the main water supply line serving the hotel. Installation is completed by a licensed technician in 2–4 hours. No service interruption. No impact on guest water pressure, temperature, or flow rate." },
              { step: "2", title: "15% Guaranteed Minimum — 26% Average for Hospitality", body: "Every hotel installation carries a written guarantee of at least 15% reduction in metered water consumption. The Four Seasons Fort Lauderdale benchmark is 26% — verified. Both water charges and sewer charges are reduced simultaneously." },
              { step: "3", title: "M&V Documentation for ESG and Brand Sustainability Reporting", body: "All installations include Measurement &amp; Verification documentation — pre-installation baseline, post-installation metered results, quarter-by-quarter comparison — satisfying ESG disclosure, brand sustainability reporting, and OTA certification requirements." },
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
              { label: "Hotels Hub", href: "/industries/hotels", desc: "Four Seasons $27K/yr case study and full overview" },
              { label: "Laundry & Cooling Towers", href: "/industries/hotels/laundry-cooling-towers", desc: "The two biggest drivers of hotel water bills" },
              { label: "Green Certification", href: "/industries/hotels/green-certification", desc: "LEED, Green Key, and OTA sustainability documentation" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Hotel Water Cost Assessment</h2>
            <p className="text-gray-600">We'll analyze your hotel's water consumption and calculate your exact savings potential — based on verified results at properties like the Four Seasons. Zero obligation.</p>
          </div>
          <ContactForm source="hotels-water-costs" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
