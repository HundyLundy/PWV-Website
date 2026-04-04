import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, FileText, Globe, CheckCircle, BarChart2 } from "lucide-react";

export default function HotelsGreenCertification() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hotel Green Certification & Water Reporting | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Smart Valve™ M&V documentation satisfies LEED Water Efficiency, Green Key, and Booking.com Travel Sustainable requirements. Auditable metered data — no third-party auditor required.");
    setMeta("og:title", "Hotel Green Certification & Water Reporting | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/hotels/green-certification", "property");
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
          <span className="text-gray-600">Green Certification</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🏨 Hotel Green Certification &amp; Water Reporting
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">LEED, Green Key, and OTA Sustainability Requirements — Satisfied</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Green certification is no longer just a marketing badge — it directly affects search ranking, booking conversion, brand compliance, and institutional asset valuation. Smart Valve™ M&amp;V documentation satisfies all major certification and reporting requirements.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "30%+", label: "Booking.com travelers filtering for eco-certified properties" },
                { value: "LEED WE", label: "Smart Valve™ M&V satisfies Water Efficiency credits" },
                { value: "Green Key", label: "Water management plan required — M&V documentation qualifies" },
                { value: "No Auditor", label: "Utility bills are the evidence — no third party required" },
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

      {/* Section 1: Why Green Certification Affects Revenue */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Green Certification Now Affects Hotel Revenue</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Globe, title: "OTA Search Visibility Depends on Sustainability Badges", body: "Booking.com, Expedia, and Google Hotels surface eco-certified properties more prominently in search results. Booking.com's Travel Sustainable badge requires documented water reduction — properties with the badge see measurably higher booking conversion rates." },
              { icon: Globe, title: "Brand Portfolio Water Commitments", body: "Marriott, Hilton, and IHG have portfolio-level water reduction commitments that individual properties must contribute to. Documented M&V data from Smart Valve™ directly satisfies brand-level reporting requirements — including Marriott's property-level water intensity tracking." },
              { icon: BarChart2, title: "REIT and Private Equity ESG Requirements", body: "Institutional hotel investors now require ESG water metrics in asset reporting. GRESB scores affect asset valuation and financing terms. Properties with documented water reduction programs command better terms." },
              { icon: ShieldCheck, title: "CDP Water Security Disclosure", body: "CDP Water Security requires disclosure of water consumption intensity and reduction initiatives. Smart Valve™ installation is a documented, auditable reduction initiative — with metered baseline and quarter-by-quarter improvement data." },
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

      {/* Section 2: What Each Certification Requires */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">What Each Certification Requires</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { cert: "LEED Water Efficiency (WE) Credits", requirement: "Requires metered baseline and documented % reduction from baseline", satisfied: "Smart Valve™ M&V documentation provides pre-installation baseline, post-installation metered results, and quarter-by-quarter comparison — directly satisfying WE credit requirements." },
              { cert: "Green Key Certification", requirement: "Requires a written water management plan with measurable targets", satisfied: "Smart Valve™ installation + M&V documentation constitutes a documented water management program with auditable, measurable metered targets." },
              { cert: "CDP Water Security", requirement: "Requires disclosure of water consumption intensity and reduction initiatives", satisfied: "Smart Valve™ is a documented, independently verifiable reduction initiative — metered by the utility's own meter, auditable by any third party." },
              { cert: "Brand ESG Reporting (Marriott, Hilton, IHG)", requirement: "Requires property-level water intensity data and documented reduction programs", satisfied: "M&V documentation provides auditable property-level data in the format required for brand-level sustainability reporting and portfolio aggregation." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#E8EFF7] rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A1F3A] mb-3">{item.cert}</h3>
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Requires: </span>
                  <span className="text-sm text-gray-600">{item.requirement}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{item.satisfied}</p>
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
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ WHAT YOU GET</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">M&V Documentation: Complete and Auditable</h2>
            <p className="text-xl text-white/80 mb-8">Savings are measured by the utility's own commercial meter — not a proprietary sensor. No third-party auditor required. Utility bills are the evidence.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: FileText, label: "Pre-Installation Baseline", desc: "Documented metered consumption before installation — the reference point for all savings claims" },
                { icon: FileText, label: "Post-Installation Metered Results", desc: "Quarter-by-quarter metered data from the utility's own meter — independently verifiable" },
                { icon: ShieldCheck, label: "Certification-Ready Format", desc: "Formatted to satisfy LEED, Green Key, CDP, and brand ESG reporting requirements" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <item.icon className="w-8 h-8 text-[#DEC600] mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">{item.label}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">How Smart Valve™ Works</h2>
            <p className="text-gray-600">For full case study detail, see the <a href="/industries/hotels" className="text-[#0374A7] hover:underline font-semibold">Hotels &amp; Hospitality hub</a>.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Passive Installation — 2 to 4 Hours, Zero Guest Impact", body: "Smart Valve™ installs on the main supply line by a licensed technician in 2–4 hours. No service interruption. No changes to water pressure, temperature, or flow rate anywhere in the property." },
              { step: "2", title: "15% Guaranteed Minimum — 26% Average for Hospitality", body: "Every hotel installation carries a written guarantee of at least 15% reduction in metered water consumption. The Four Seasons Fort Lauderdale achieved 26% average daily savings — exceeding the guaranteed minimum by 73%." },
              { step: "3", title: "M&V Documentation Included", body: "M&V documentation is provided with every installation. Pre-installation baseline, post-installation metered results, and quarter-by-quarter comparison data are all included — in certification-ready format." },
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
              { label: "Laundry & Cooling Towers", href: "/industries/hotels/laundry-cooling-towers", desc: "The two biggest drivers of hotel water bills" },
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
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Free Hotel Sustainability Assessment</h2>
            <p className="text-gray-600">Contact us to discuss how Smart Valve™ can satisfy your hotel's green certification and ESG water reporting requirements — with full M&V documentation included.</p>
          </div>
          <ContactForm source="hotels-green-certification" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
