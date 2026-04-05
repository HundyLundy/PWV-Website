import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { TrendingUp, Droplets, Building2, Hotel, MapPin, CheckCircle, ArrowRight, ShieldCheck, CheckCircle2, ZapOff, Activity } from "lucide-react";

const EUROPEAN_MARKETS = [
  { city: "London", country: "United Kingdom", flag: "🇬🇧", context: "Thames Water raises commercial rates annually. London water is among the most expensive in Europe per commercial unit." },
  { city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", context: "Waternet serves Amsterdam's commercial market. The Netherlands faces groundwater depletion and increasing sustainability mandates." },
  { city: "Frankfurt", country: "Germany", flag: "🇩🇪", context: "Frankfurt is Europe's data center capital. Commercial water demand from cooling systems is straining Stadtwerke Frankfurt's infrastructure." },
  { city: "Paris", country: "France", flag: "🇫🇷", context: "Eau de Paris serves the commercial market. France's commercial water rates are rising as infrastructure investment accelerates." },
  { city: "Dublin", country: "Ireland", flag: "🇮🇪", context: "Irish Water serves commercial customers across Ireland. Data center growth is placing exceptional demand on Ireland's water supply." },
  { city: "Stockholm", country: "Sweden", flag: "🇸🇪", context: "Stockholm Vatten och Avfall. Sweden's commercial sustainability mandates include water efficiency targets for large commercial operators." },
];

const CASE_STUDIES = [
  { name: "Amazon YYZ3", location: "Toronto, Canada", result: "58.69% peak Q3 2024 — 43.98% Q3/Q4 avg, M&V verified", industry: "Data Center" },
  { name: "Four Seasons Fort Lauderdale", location: "Florida, USA", result: "26% metered reduction, $27,000/year savings", industry: "Luxury Hotel" },
  { name: "Grand Central at Kennedy", location: "New Jersey, USA", result: "23% metered reduction, $50,000/year savings", industry: "Commercial Property" },
];

export default function Europe() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "European Commercial Water Savings | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Smart Valve™ delivers 15%–35% annually commercial water savings across Europe. London, Frankfurt, Dublin, Amsterdam and beyond. Guaranteed in writing. NSF certified. Free commercial assessment.");
    setMeta("og:title", "European Commercial Water Savings | Smart Valve™", "property");
    setMeta("og:description", "Smart Valve™ cuts commercial water bills 15%–35% annually across Europe. Guaranteed in writing. Amazon YYZ3 benchmark verified.", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/locations/europe", "property");
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScrollTo={(id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }} />

      {/* Hero */}
      <section className="relative bg-[#0A1F3A] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#DEC600]/20 border border-[#DEC600]/40 rounded-full px-4 py-2 text-[#DEC600] text-sm font-semibold mb-6">
              🌍 European Market Expansion
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">European Commercial Water Savings</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Smart Valve™ is expanding across Europe. Commercial water rates are rising across the UK, EU, and Ireland — driven by aging infrastructure, drought, and data center demand. The same technology that saved Amazon YYZ3 58.69% now serves European commercial properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm sm:text-base">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 58.69% Peak Savings Recorded</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Savings Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> 99% Meter Compatible</div>
          </div>
        </div>
      </section>

      {/* European Markets */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">European Markets We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From London's commercial core to Frankfurt's data center alley, Smart Valve™ delivers verified savings in every market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EUROPEAN_MARKETS.map((market, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{market.flag}</span>
                  <div>
                    <div className="text-lg font-bold text-[#0A1F3A]">{market.city}</div>
                    <div className="text-sm text-gray-500">{market.country}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{market.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Europe Now */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Why Europe — Why Now</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Rising Water Tariffs Across the EU and UK", body: "European commercial water rates are rising across all major markets. Infrastructure investment programs, drought resilience mandates, and sustainability requirements are driving annual increases in the UK, Netherlands, Germany, France, and Ireland. The cost trajectory is upward and long-term." },
              { icon: Droplets, title: "Drought Conditions Across Southern and Western Europe", body: "Europe is experiencing its most severe drought conditions in recorded history, with multiple member states declaring water emergencies in consecutive years. Commercial properties in affected regions face mandatory conservation targets, usage restrictions, and tiered pricing that penalizes high-volume users." },
              { icon: Building2, title: "Data Center Demand Straining European Water Supply", body: "Europe is one of the world's fastest-growing data center markets, with Frankfurt, Dublin, Amsterdam, London, and Stockholm (FIADLS) hosting hyperscale facilities that consume enormous water volumes for cooling. Smart Valve™'s Amazon YYZ3 benchmark — 58.69% peak savings — is directly applicable to European data centers." },
              { icon: Hotel, title: "Hospitality — Europe's Highest-ROI Application", body: "European luxury hotels are experiencing the same water cost pressure as their North American counterparts. The Four Seasons Fort Lauderdale case study (26% savings, $27,000/yr) is directly applicable to European luxury properties where water costs are similarly high and guest experience is paramount." },
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

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[#0374A7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Verified Results — The Proof of Concept</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Every result listed is metered, verified, and documented. These are the benchmarks that apply to European commercial properties.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-sm font-semibold text-[#DEC600] mb-1">{cs.industry}</div>
                <div className="text-lg font-bold text-white mb-1">{cs.name}</div>
                <div className="text-sm text-white/60 mb-3">{cs.location}</div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80">{cs.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-4">European Distribution Partners</h2>
          <p className="text-gray-600 mb-8">Smart Valve™ is expanding across Europe through partnerships with established commercial water management firms. Contact us to discuss partnership and distribution opportunities in your European market.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#0A1F3A]">AWS — American Water Savings</div>
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#0A1F3A]">CWS — Canadian Water Savings</div>
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#3C6E7F]">European Partners — Enquire Now</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Connect With Our European Team</h2>
            <p className="text-gray-600">Whether you are a commercial property owner, operator, or interested in European partnership and distribution, reach out to start the conversation.</p>
          </div>
          <ContactForm source="europe" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
