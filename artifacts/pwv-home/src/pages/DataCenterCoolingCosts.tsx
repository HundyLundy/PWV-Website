import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingUp, DollarSign, Server, Zap, CheckCircle } from "lucide-react";

const COST_BREAKDOWN = [
  { category: "Cooling Tower Makeup Water", pct: "40–60%", desc: "The largest single water cost at most data centers. Evaporation, drift, and blowdown require continuous makeup water to maintain system chemistry." },
  { category: "Condenser Water Circulation", pct: "20–35%", desc: "Chilled water loop and condenser water systems require continuous metered supply to offset losses and maintain system pressure." },
  { category: "Domestic and Sanitary", pct: "5–10%", desc: "Campus facilities, cafeterias, locker rooms, and administrative areas contribute a smaller but measurable share of total consumption." },
  { category: "Fire Suppression Reserve", pct: "5–10%", desc: "Stored fire suppression water and testing volumes are metered and charged at commercial rates in most jurisdictions." },
];

export default function DataCenterCoolingCosts() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Data Center Cooling Water Costs | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Data center cooling water costs are the fastest-growing OpEx line item in hyperscale infrastructure. Smart Valve™ cuts cooling water bills 15–58%, guaranteed in writing. Amazon YYZ3 verified.");
    setMeta("og:title", "Data Center Cooling Water Costs | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/data-centers/cooling-water-costs", "property");
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={(id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }} />

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              💧 Data Center Water Cost Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Data Center Cooling Water Costs</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Cooling water is the fastest-growing operational expense in hyperscale data center infrastructure — and it is the one that Smart Valve™ is specifically proven to reduce. Amazon YYZ3 cut peak cooling water costs 58.69% over 6 verified quarters.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "58.69%", label: "Peak Savings — Amazon YYZ3" },
                { value: "40–60%", label: "Water as % of Cooling OpEx" },
                { value: "≥15%", label: "Guaranteed Minimum" },
                { value: "6 Qtrs", label: "Amazon Verification Period" },
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

      {/* Cost Breakdown */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Where Data Centers Spend Their Water Budget</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cooling tower makeup water is the dominant cost. Smart Valve™ targets this directly — reducing metered consumption at the point of measurement.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {COST_BREAKDOWN.map((item, i) => (
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

      {/* The Cost Driver */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Cooling Water Costs Are Accelerating</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Commercial Water Rates Rising Annually in Every Data Center Market", body: "Every major US data center market — Virginia, Texas, Georgia, Iowa, Nevada, Oregon, Ohio — is raising commercial water rates. Infrastructure investment, PFAS remediation, drought resilience, and demand growth from the data center sector itself are driving rate increases that compound year over year." },
              { icon: Zap, title: "AI Workloads Are Dramatically Increasing Cooling Demands", body: "The transition from general-purpose compute to AI inference and training workloads significantly increases heat density and cooling demand. Higher cooling demand means higher cooling water consumption — and at rising commercial rates, this directly compounds the cost of water operations." },
              { icon: Droplets, title: "Drought and Supply Restrictions in Prime Data Center Markets", body: "Northern Virginia (the world's largest data center market) faces permit restrictions and supply constraints driven by 1.7 billion gallons of daily data center water demand. Iowa, Nevada, and Arizona markets face drought conditions. Conservation mandates are becoming standard in tier-1 and tier-2 data center markets." },
              { icon: Server, title: "Cooling Tower Chemistry Inefficiency — The Hidden Driver", body: "Cooling towers lose water through evaporation, drift, and blowdown to manage mineral concentration. Smart Valve™ optimizes the electrochemical properties of incoming water, reducing the frequency of blowdown required and allowing higher cycles of concentration — directly reducing makeup water consumption." },
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

      {/* Amazon YYZ3 */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ HIGHEST VERIFIED RESULT IN PORTFOLIO</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Amazon YYZ3 — The Industry Benchmark</h2>
            <p className="text-xl text-white/80 mb-8">Amazon's YYZ3 data center achieved 58.69% peak savings on cooling water using Smart Valve™ — verified over 6 consecutive quarters of metered measurement.</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { value: "58.69%", label: "Peak Savings Verified" },
                { value: "6 Qtrs", label: "Verification Period" },
                { value: "Amazon", label: "Customer Name" },
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
                  The YYZ3 result demonstrates that hyperscale data center cooling water savings are real, measurable, and substantial. At scale — where a facility may spend $500,000–$2,000,000/month on cooling water — even the guaranteed 15% minimum represents $900,000–$3,600,000 in annual savings. The 58.69% peak result implies potential annual savings of $3.5M–$14M for a hyperscale facility at those spend levels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Smart Valve Does */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Reduces Cooling Water Costs</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed Upstream of the Commercial Meter", body: "Smart Valve™ is installed on the main supply line upstream of the commercial water meter — the point at which every gallon consumed is billed. All consumption downstream of this point, including cooling tower makeup, is reduced by the device." },
              { step: "2", title: "Electrochemical Water Treatment — No Chemicals, No Power", body: "Smart Valve™ uses a passive, certified electrochemical process to modify the properties of incoming water. This treatment increases the efficiency of cooling tower chemistry, reduces mineral scaling, and allows cooling towers to run at higher cycles of concentration — meaning less blowdown and less makeup water consumed." },
              { step: "3", title: "Metered Reduction Is Recorded and Documented", body: "Every reduction in metered consumption is recorded by the utility's own commercial meter — not a third-party measuring device. This means the savings are independently verifiable through your utility billing data, not proprietary sensors or estimates." },
              { step: "4", title: "15% Guaranteed in Writing — For Every Data Center Installation", body: "Every Smart Valve™ installation — including data center installations — carries a written guarantee of at least 15% reduction in metered water consumption. If the guarantee is not met, we resolve it at no cost to the facility operator." },
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

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Get a Data Center Water Cost Assessment</h2>
            <p className="text-gray-600">Contact us to discuss how Smart Valve™ applies to your data center's cooling water infrastructure. We can provide a projected savings analysis based on your current monthly water spend.</p>
          </div>
          <ContactForm source="data-centers-cooling-costs" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
