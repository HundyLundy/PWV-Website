import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, TrendingUp, DollarSign, CheckCircle, Building2 } from "lucide-react";

export default function MultifamilyWaterCosts() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Multifamily Water Costs | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Why apartment and HOA properties overpay for water — the master meter problem, math on 100-unit properties, and rate increase compounding. Smart Valve™ cuts bills 15%–35% annually guaranteed.");
    setMeta("og:title", "Multifamily Water Costs | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/multifamily/water-costs", "property");
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
          <a href="/industries/multifamily" className="text-[#0374A7] hover:underline">Multifamily</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Water Costs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏢 Multifamily Water Cost Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why Apartment &amp; HOA Properties Overpay for Water</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Master-metered multifamily properties pay 100% of every gallon consumed by tenants who have zero financial incentive to conserve. The result is structurally higher consumption — and structurally higher bills — that Smart Valve™ reduces without any tenant behavior change.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "85 gal/person", label: "US average residential daily consumption" },
                { value: "382,500 gal", label: "100-unit complex per month" },
                { value: "100%", label: "Owner absorbs — tenants have zero incentive" },
                { value: "$27K/yr", label: "15% min savings on $15K/month bill" },
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

      {/* Section 1: The Master Meter Problem */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">The Master Meter Problem</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Building2, title: "One Meter, One Bill — Paid Entirely by the Owner", body: "Most multifamily properties are master-metered: one commercial meter for the entire property, billed to the owner. Tenants pay a flat utility allowance or nothing — they have no financial incentive to conserve water." },
              { icon: TrendingUp, title: "Master-Metered Properties Consume More", body: "Water consumption in master-metered properties is consistently higher than in individually metered properties. Tenants who don't pay the water bill take longer showers, run dishwashers half-full, and ignore dripping faucets." },
              { icon: DollarSign, title: "The Owner Absorbs 100% of Every Dripping Faucet", body: "Every dripping faucet, running toilet, and long shower in the building is 100% absorbed by the property owner. The aggregate effect of tenant behavior across 50, 100, or 300 units is substantial — and it compounds with every rate increase." },
              { icon: CheckCircle, title: "Smart Valve™ — No Behavior Change Required", body: "Smart Valve™ reduces metered consumption at the supply line — before it reaches tenant units. No behavior change required from tenants. The reduction is mechanical, not behavioral, and it applies to every gallon consumed regardless of tenant actions." },
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

      {/* Section 2: The Math on a 100-Unit Property */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ THE MATH — 100-UNIT PROPERTY</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">A 100-Unit Property by the Numbers</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {[
                "100 units × 1.5 persons/unit = 150 residents",
                "150 residents × 85 gal/day = 12,750 gal/day",
                "12,750 × 30 days = 382,500 gal/month",
                "At $0.006/gal = ~$2,295/month water alone",
                "Plus sewer (80–120% of water) = $4,000–$5,000/month combined",
                "15% Smart Valve™ savings = $600–$750/month = $7,200–$9,000/year",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{line}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-[#DEC600] mb-2">$21,600–$27,000/yr minimum</div>
              <div className="text-white/70">At 15% guaranteed savings — 300-unit property</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Rate Increases Compound the Problem */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Rate Increases Compound the Problem</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "5% Rate Increase = $9,000 More Per Year on a $15K/Month Bill", body: "Every 5% municipal rate increase on a $15,000/month water bill adds $9,000/year to operating costs — without any change in consumption. Multifamily owners cannot pass these increases to tenants mid-lease in most markets." },
              { icon: TrendingUp, title: "Locked-In Percentage Saves More Every Year Rates Rise", body: "A 15% reduction locked in today saves 15% off a higher number every year rates increase. The absolute dollar value of a fixed percentage reduction grows automatically as rates rise — without any additional investment or action." },
              { icon: DollarSign, title: "Smart Valve™ Cuts the Underlying Consumption", body: "By reducing metered consumption, Smart Valve™ makes each future rate increase less damaging in absolute dollar terms. The higher the rate, the more each saved gallon is worth." },
              { icon: CheckCircle, title: "For Cap Rate Improvement Detail, See the Hub", body: "Reduced water operating expenses directly improve NOI and cap-rate-based property valuation. For the full Grand Central Tampa $50K/year case study and cap rate improvement analysis, see the Multifamily hub page." },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Works in Multifamily Properties</h2>
            <p className="text-gray-600">For the full Grand Central Tampa case study and cap rate improvement detail, see the <a href="/industries/multifamily" className="text-[#0374A7] hover:underline font-semibold">Multifamily hub page</a>.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Installed on Main Supply Line — Zero Resident Impact", body: "Smart Valve™ installs on the main water supply line serving the property. Installation is completed in 2–4 hours by a licensed technician. Zero impact on tenant water pressure, temperature, or flow rate at any time." },
              { step: "2", title: "15% Guaranteed — 23% Average (Grand Central Tampa Benchmark)", body: "Every multifamily installation carries a written guarantee of at least 15% reduction in metered water consumption. The Grand Central at Kennedy Tampa benchmark is 23% average savings over a 2-year period." },
              { step: "3", title: "Link to Hub for Full Case Study and Cap Rate Detail", body: "For the complete Grand Central Tampa $50,000/year case study and analysis of how water OpEx reduction improves NOI and cap-rate-based property valuation, see the Multifamily hub page." },
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
              { label: "Multifamily Hub", href: "/industries/multifamily", desc: "Grand Central Tampa $50K/yr case study and cap rate analysis" },
              { label: "Irrigation & Common Areas", href: "/industries/multifamily/irrigation-common-areas", desc: "30–50% of multifamily water use — biggest opportunity" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Multifamily Water Assessment</h2>
            <p className="text-gray-600">We'll analyze your property's water consumption and calculate your projected savings — based on unit count, local rates, and the Grand Central Tampa verified benchmark. Zero obligation.</p>
          </div>
          <ContactForm source="multifamily-water-costs" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
