import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { TrendingUp, Droplets, Building2, Server, CheckCircle, ArrowRight, ShieldCheck, CheckCircle2, ZapOff, Activity } from "lucide-react";

const ASIAN_MARKETS = [
  { city: "Tokyo", country: "Japan", flag: "🇯🇵", context: "Tokyo's commercial water rates are managed by the Tokyo Metropolitan Government. Infrastructure maintenance and aging pipe replacement are driving rate increases for commercial customers across the capital." },
  { city: "Singapore", country: "Singapore", flag: "🇸🇬", context: "Singapore's NEWater framework and PUB water rates are structured to encourage commercial conservation. Singapore's water security policy makes measurable reduction a commercial compliance priority." },
  { city: "Seoul", country: "South Korea", flag: "🇰🇷", context: "Seoul Metropolitan Government is investing heavily in water infrastructure. Commercial water rates are rising as South Korea's data center and semiconductor sector drives unprecedented cooling water demand." },
  { city: "Sydney", country: "Australia", flag: "🇦🇺", context: "Sydney Water raises commercial rates annually. Australia's recurring drought cycles and growing commercial demand make water efficiency critical for every commercial property manager." },
  { city: "Melbourne", country: "Australia", flag: "🇦🇺", context: "Melbourne Water and City West Water serve commercial customers across Greater Melbourne. Victoria's drought conditions and commercial water restrictions create strong demand for measurable savings." },
  { city: "Hong Kong", country: "SAR", flag: "🇭🇰", context: "Hong Kong commercial water costs are among the highest in Asia. Commercial properties in Central, Kowloon, and the New Territories face rising water and sewerage tariffs from the Water Supplies Department." },
];

const CASE_STUDIES = [
  { name: "Amazon YYZ3", location: "Toronto, Canada", result: "58.69% peak Q3 2024 — 43.98% Q3/Q4 2024 average, M&V verified", industry: "Data Center", highlight: true },
  { name: "Four Seasons Fort Lauderdale", location: "Florida, USA", result: "26% metered reduction, $27,000/year savings", industry: "Luxury Hospitality" },
  { name: "Grand Central at Kennedy", location: "New Jersey, USA", result: "23% metered reduction, $50,000/year savings", industry: "Commercial Property" },
];

export default function Asia() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Asia-Pacific Commercial Water Savings | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Smart Valve™ delivers 15%–35% annual commercial water savings across Asia-Pacific. Tokyo, Singapore, Seoul, Sydney, Melbourne and beyond. Guaranteed in writing. Amazon YYZ3 benchmark verified.");
    setMeta("og:title", "Asia-Pacific Commercial Water Savings | Smart Valve™", "property");
    setMeta("og:description", "Smart Valve™ cuts commercial water bills 15%–35% annually across Asia-Pacific. Guaranteed in writing. Amazon YYZ3 — 58.69% peak savings verified.", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/locations/asia", "property");
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
              🌏 Asia-Pacific Market Expansion
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Asia-Pacific Commercial Water Savings</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Smart Valve™ is expanding across Asia-Pacific. From Tokyo's aging infrastructure to Singapore's water security mandates, from Seoul's semiconductor cooling demand to Australia's recurring drought cycles — Smart Valve™ delivers the same verified savings in every market.
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

      {/* Asia-Pacific Markets */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Asia-Pacific Markets We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every market is facing rising commercial water costs from multiple directions simultaneously. Smart Valve™ delivers the same guaranteed results in each one.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASIAN_MARKETS.map((market, i) => (
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

      {/* Data Center Spotlight */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">Data Centers — Asia-Pacific's Highest-Stakes Application</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Asia-Pacific is the world's fastest-growing data center market. Seoul's semiconductor sector, Singapore's financial infrastructure, Tokyo's hyperscale campuses, and Australian cloud regions are all consuming unprecedented volumes of cooling water.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Server, title: "Amazon YYZ3 — The APAC Benchmark", body: "Amazon YYZ3 achieved 58.69% peak savings in Q3 2024 with a Q3/Q4 2024 average of 43.98% — the highest documented result in the Smart Valve™ portfolio. This benchmark is directly applicable to every hyperscale data center in Asia-Pacific. At this level, a facility spending $500,000/month on cooling water saves over $3.5 million annually." },
              { icon: Droplets, title: "Korea's Semiconductor Sector — Maximum Water Intensity", body: "South Korea's semiconductor fabrication and data center sectors are among the world's most water-intensive commercial operations. Smart Valve™'s proven data center results — anchored by the Amazon YYZ3 benchmark — are directly applicable to Seoul's hyperscale and enterprise data center market." },
              { icon: TrendingUp, title: "Singapore Water Security Mandates", body: "Singapore's PUB framework actively incentivizes commercial water reduction. Properties that demonstrate measurable consumption reduction gain advantages in permit renewals and rate tier classification. Smart Valve™'s metered, documented results provide the exact verification Singapore's regulatory framework requires." },
              { icon: Building2, title: "Australia's Drought-Driven Commercial Market", body: "Australia's recurring drought cycles have made water efficiency a permanent commercial priority, not a seasonal concern. Sydney and Melbourne commercial properties face both high base rates and tiered structures that penalize high-volume users. Smart Valve™'s 15–35% annual reduction directly addresses both cost dimensions (peak quarters have reached 58.69% at high-volume sites)." },
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
            <h2 className="text-3xl font-bold text-white mb-4">Verified Global Results</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Every result is metered, verified, and documented. These are the benchmarks that set the standard for Asia-Pacific implementations.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-6 border ${cs.highlight ? "bg-[#DEC600]/20 border-[#DEC600]/40" : "bg-white/10 border-white/20"}`}>
                <div className="text-sm font-semibold text-[#DEC600] mb-1">{cs.industry}</div>
                <div className="text-lg font-bold text-white mb-1">{cs.name}</div>
                <div className="text-sm text-white/60 mb-3">{cs.location}</div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80">{cs.result}</p>
                </div>
                {cs.highlight && <div className="mt-3 text-xs text-[#DEC600] font-semibold">★ HIGHEST VERIFIED RESULT</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0A1F3A] mb-4">Asia-Pacific Distribution Partners</h2>
          <p className="text-gray-600 mb-8">Smart Valve™ is building its Asia-Pacific distribution network. Contact us to discuss partnership and distribution opportunities in your market.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#0A1F3A]">AWS — American Water Savings</div>
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#0A1F3A]">CWS — Canadian Water Savings</div>
            <div className="bg-[#E8EFF7] px-6 py-3 rounded-full text-sm font-semibold text-[#3C6E7F]">APAC Partners — Enquire Now</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Connect With Our Asia-Pacific Team</h2>
            <p className="text-gray-600">Whether you are a commercial property owner, operator, or interested in Asia-Pacific partnership and distribution, reach out to start the conversation.</p>
          </div>
          <ContactForm source="asia-pacific" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
