import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Droplets, AlertTriangle, CheckCircle, ShieldCheck, TrendingDown } from "lucide-react";

export default function MultifamilyIrrigation() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Common Area Irrigation Is the Biggest Water Waste in Multifamily Properties | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Outdoor irrigation accounts for 30–50% of total multifamily water use. Most systems apply 2x what plants need. Smart Valve™ improves irrigation efficiency and reduces total metered consumption 15%–35% annually.");
    setMeta("og:title", "Multifamily Irrigation Water Waste | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/multifamily/irrigation-common-areas", "property");
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
          <span className="text-gray-600">Irrigation &amp; Common Areas</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏢 Multifamily Irrigation &amp; Common Area Water
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Common Area Irrigation Is the Biggest Water Waste in Multifamily Properties</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              In warm climates, outdoor irrigation accounts for 30–50% of total multifamily water consumption. Most commercial irrigation systems are set-and-forget — applying 2x what plants actually need. Smart Valve™ treats the entire supply line, reducing irrigation waste along with every other metered use.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "30–50%", label: "Outdoor irrigation share — warm climates" },
                { value: "2×", label: "Water most commercial landscapes actually receive vs. need" },
                { value: "15+", label: "US states with mandatory commercial irrigation restrictions" },
                { value: "Above avg", label: "Savings for properties with heavy irrigation" },
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

      {/* Section 1: Why Irrigation Is the Biggest Opportunity */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Irrigation Is the Biggest Opportunity</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Droplets, title: "30–50% of Total Water Use — In One Category", body: "In multifamily properties with landscaping — virtually all Class A and Class B properties — outdoor irrigation accounts for 30–50% of total water consumption in warm months. This is the single largest reducible category." },
              { icon: AlertTriangle, title: "Set-and-Forget Irrigation Is the Default", body: "Most commercial irrigation systems are programmed at installation and rarely adjusted for weather, season, or actual plant water needs. The result: overwatering is the norm. Most commercial landscapes receive 2x the water they actually need to thrive." },
              { icon: AlertTriangle, title: "Drought Restrictions Are Making Overwatering a Compliance Issue", body: "California, Arizona, Colorado, Texas, and 10+ other states have mandatory commercial irrigation restrictions. Overwatering is no longer just a cost issue — in many markets it is a compliance issue with fines and service interruption consequences." },
              { icon: TrendingDown, title: "Properties With Heavy Irrigation See Above-Average Savings", body: "Smart Valve™ reduces metered consumption across all uses — indoor and outdoor. Properties with significant irrigation see above-average savings because irrigation is a high-waste application where air reduction and flow consistency improvements deliver amplified results." },
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

      {/* Section 2: How Smart Valve Improves Irrigation Efficiency */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Improves Irrigation Efficiency</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Droplets, title: "Air Reduction Means More Consistent Irrigation Pressure", body: "Smart Valve™ reduces air entrainment in the water supply. Irrigation systems with treated water experience more consistent pressure and flow — because there are no air pockets creating pressure irregularities in the lines." },
              { icon: CheckCircle, title: "Consistent Pressure Means More Even Coverage", body: "Air pockets in irrigation lines cause pressure irregularities that result in uneven coverage — some zones get too much water, others too little. Operators compensate by running more water to ensure the dry spots get enough coverage. Consistent pressure eliminates this over-application pattern." },
              { icon: ShieldCheck, title: "No Separate Irrigation System Modification Required", body: "All irrigation water is treated because Smart Valve™ is installed on the main supply line — not in-line with the irrigation system specifically. No separate installation, no irrigation system modification, no additional equipment." },
              { icon: TrendingDown, title: "15% Guaranteed on Total Metered Consumption", body: "The 15% guaranteed minimum applies to total metered consumption — not just indoor use. Properties with heavy irrigation typically see total savings above the guaranteed minimum because irrigation is a high-waste, high-volume application category." },
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

      {/* Section 3: Drought Restrictions and HOA Liability */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ REGULATORY AND LIABILITY RISK</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Drought Restrictions and HOA Liability</h2>
            <p className="text-xl text-white/80 mb-8">Overwatering is increasingly a compliance issue — not just a cost issue. Smart Valve™ reduces total irrigation consumption, helping properties stay within restriction limits without sacrificing landscape quality.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "15+", label: "US states with mandatory commercial irrigation restrictions" },
                { value: "Fines", label: "Violations result in fines and potential water service interruptions" },
                { value: "HOA Claims", label: "Overwatering damage (foundation, mold) increasingly subject to homeowner claims" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-[#DEC600]">{stat.value}</div>
                  <div className="text-white/70 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white/10 rounded-xl p-6 border border-white/20 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">
                  Smart Valve™ M&V documentation provides evidence of water reduction for regulatory compliance — helpful when demonstrating good-faith compliance efforts to regulators and in HOA liability disputes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Combined Indoor + Outdoor Savings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Combined Savings: Indoor + Outdoor</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "One Installation Reduces All Metered Consumption", body: "Smart Valve™ is installed on the main supply line — all water downstream, whether going to unit fixtures, common area amenities, laundry, or irrigation, is treated. One installation reduces total metered consumption across all categories." },
              { step: "2", title: "Properties With Heavy Irrigation Exceed the Guaranteed Minimum", body: "The 15% guaranteed minimum applies to total metered consumption. Properties with significant irrigation — where 30–50% of consumption is in the highest-waste category — typically see total savings above the guaranteed minimum." },
              { step: "3", title: "15% Guaranteed — 23% Grand Central Tampa Average", body: "Every multifamily installation carries a written guarantee of at least 15% reduction in metered water consumption. The Grand Central at Kennedy Tampa benchmark is 23% average over 2 years — with heavy irrigation as part of the total." },
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
              { label: "Multifamily Hub", href: "/industries/multifamily", desc: "Grand Central Tampa $50K/yr case study and cap rate analysis" },
              { label: "Multifamily Water Costs", href: "/industries/multifamily/water-costs", desc: "The master meter problem — why owners overpay" },
              { label: "Car Wash Hard Water", href: "/industries/car-washes/hard-water-equipment", desc: "Shared mechanism: mineral scale and water efficiency" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Multifamily Water Assessment</h2>
            <p className="text-gray-600">We'll calculate your property's irrigation and total water savings potential — including outdoor use analysis. Zero obligation.</p>
          </div>
          <ContactForm source="multifamily-irrigation" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
