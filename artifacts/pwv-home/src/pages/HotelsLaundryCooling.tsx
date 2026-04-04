import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingDown, DollarSign, CheckCircle, Server } from "lucide-react";

export default function HotelsLaundryCooling() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hotel Laundry & Cooling Tower Water Waste | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Hotel laundry and cooling towers account for 50–70% of total water consumption. Smart Valve™ cuts both simultaneously — 15%–35% annually guaranteed. Four Seasons 26% savings verified.");
    setMeta("og:title", "Hotel Laundry & Cooling Tower Water | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hotels/laundry-cooling-towers", "property");
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
          <span className="text-gray-600">Laundry &amp; Cooling Towers</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏨 Hotel Laundry &amp; Cooling Tower Water
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">The Two Biggest Drivers of Hotel Water Bills</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Hotel laundry and cooling towers together account for 50–70% of total water consumption. Both are reduced simultaneously when Smart Valve™ treats the main supply line — one installation, two major cost centers addressed.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "50K–100K lbs", label: "Linen per year — 200-room hotel" },
                { value: "3–5 gal/lb", label: "Water per pound of laundry" },
                { value: "30–40%", label: "Cooling towers — share of hotel water budget" },
                { value: "50–70%", label: "Combined laundry + cooling share" },
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

      {/* Section 1: Laundry */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Hotel Laundry: The Water Cost Nobody Talks About</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Droplets, title: "Volume: 150,000–500,000 Gallons Per Year Just for Laundry", body: "A 200-room hotel processes 50,000–100,000 lbs of linen per year — sheets, towels, robes, restaurant linens. Each pound requires 3–5 gallons of water. That's 150,000–500,000 gallons per year in laundry water alone, all metered and billed at commercial rates." },
              { icon: TrendingDown, title: "Hard Water Scale Increases Laundry Water Consumption", body: "Hard water mineral scale reduces detergent effectiveness, requiring more chemical and more rinse cycles to achieve the same cleaning result. More rinse cycles mean more water consumed per pound of linen processed — a direct cost driver that compounds over time." },
              { icon: CheckCircle, title: "Smart Valve™ Improves Detergent Activation", body: "Smart Valve™ electrochemical treatment improves detergent activation in treated water, reducing the number of rinse cycles needed to achieve clean results. This directly cuts laundry water consumption — and the effect applies automatically to every load processed." },
              { icon: DollarSign, title: "Estimated Annual Laundry Savings", body: "For a 200-room hotel, reduced laundry water consumption translates to an estimated $3,000–$8,000/year in savings, depending on local water rates and current laundry volume. These are estimates based on the Four Seasons 26% benchmark." },
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

      {/* Section 2: Cooling Towers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Cooling Tower Makeup Water: The Largest Single Hotel Water Cost</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Server, title: "Why Cooling Towers Consume So Much Water", body: "Hotel HVAC cooling towers require continuous makeup water to replace losses from evaporation, drift, and blowdown. The more mineral-laden the incoming water, the more frequent blowdown must occur — because minerals concentrate rapidly and damage the system if not purged." },
              { icon: TrendingDown, title: "Smart Valve™ Optimizes Cooling Tower Chemistry", body: "Smart Valve™ modifies the electrochemical properties of incoming water, allowing higher cycles of concentration before blowdown is required. This means less makeup water consumed per ton of cooling delivered — directly reducing the largest single component of your hotel's water bill." },
              { icon: CheckCircle, title: "The Same Mechanism as Amazon YYZ3", body: "This is the same cooling water chemistry mechanism that produced the Amazon YYZ3 58.69% peak result in data centers. The physics are identical. Hotel cooling towers benefit from the same electrochemical water treatment — the scale of the result depends on incoming water mineral content and current blowdown frequency." },
              { icon: DollarSign, title: "Estimated Annual Cooling Savings for a 200-Room Property", body: "Estimated annual savings on cooling tower makeup water: $8,000–$20,000/year for a 200-room property, depending on property size, local rates, and current blowdown frequency. These are estimates based on the Four Seasons 26% benchmark — actual results depend on local conditions." },
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
          <div className="mt-8 p-4 bg-[#0374A7]/10 border border-[#0374A7]/20 rounded-xl text-sm text-gray-600">
            For data center cooling tower detail, see our <a href="/industries/data-centers/cooling-water-costs" className="text-[#0374A7] hover:underline font-semibold">Data Center Cooling Water Costs page</a>.
          </div>
        </div>
      </section>

      {/* Section 3: Combined Impact */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ COMBINED IMPACT — 200-ROOM PROPERTY</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Combined Savings Estimate: $15,000–$40,000/Year</h2>
            <p className="text-xl text-white/80 mb-8">Laundry + cooling tower + guest room + kitchen savings combined. These are estimates based on the Four Seasons 26% benchmark. Actual results depend on property size and local rates.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "$3K–$8K", label: "Laundry water savings/yr" },
                { value: "$8K–$20K", label: "Cooling tower savings/yr" },
                { value: "$15K–$40K", label: "Total combined savings/yr" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-[#DEC600]">{stat.value}</div>
                  <div className="text-white/70 mt-2">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">One Installation — All Uses Treated</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on Main Supply Line", body: "Smart Valve™ installs on the main water supply line. All water downstream — laundry, cooling, guest rooms, kitchen — is treated simultaneously. No separate installation for each use." },
              { step: "2", title: "Electrochemical Treatment — No Chemicals, No Maintenance", body: "Passive electrochemical process. No chemicals added, no power required, no maintenance after installation. NSF 61 and 372 certified safe for all hotel water applications." },
              { step: "3", title: "15% Guaranteed Minimum — 26% Hospitality Average", body: "Every hotel installation carries a written guarantee of at least 15% reduction in metered water consumption. The Four Seasons Fort Lauderdale benchmark is 26% average daily savings." },
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
              { label: "Hotels Hub", href: "/industries/hotels", desc: "Four Seasons $27K/yr case study and full overview" },
              { label: "Hotel Water Costs", href: "/industries/hotels/water-costs", desc: "Where hotel water budgets go — full breakdown" },
              { label: "Green Certification", href: "/industries/hotels/green-certification", desc: "LEED, Green Key, and OTA sustainability documentation" },
              { label: "Data Center Cooling", href: "/industries/data-centers/cooling-water-costs", desc: "Same cooling tower mechanism — data center scale" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Hotel Water Assessment</h2>
            <p className="text-gray-600">We'll calculate your hotel's savings potential from laundry and cooling tower water reduction — based on verified results at properties like the Four Seasons. Zero obligation.</p>
          </div>
          <ContactForm source="hotels-laundry-cooling" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
