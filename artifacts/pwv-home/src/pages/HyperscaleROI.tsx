import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { DollarSign, TrendingUp, CheckCircle, Server, Zap, BarChart3 } from "lucide-react";

const ROI_SCENARIOS = [
  {
    label: "Enterprise Data Center",
    monthlyWater: "$50,000",
    annualWater: "$600,000",
    savings15: "$90,000/yr",
    savings30: "$180,000/yr",
    peak: "$352,140/yr",
    note: "Based on 15%, 30%, and 58.69% peak reduction scenarios"
  },
  {
    label: "Large Hyperscale Campus",
    monthlyWater: "$250,000",
    annualWater: "$3,000,000",
    savings15: "$450,000/yr",
    savings30: "$900,000/yr",
    peak: "$1,760,700/yr",
    note: "At peak, annual savings exceed operating cost of the Smart Valve™ system by orders of magnitude"
  },
  {
    label: "Mega Hyperscale (Multi-Building)",
    monthlyWater: "$1,000,000",
    annualWater: "$12,000,000",
    savings15: "$1,800,000/yr",
    savings30: "$3,600,000/yr",
    peak: "$7,042,800/yr",
    note: "At hyperscale water volumes, even the guaranteed minimum produces transformative returns"
  },
];

export default function HyperscaleROI() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hyperscale Data Center Water ROI | Smart Valve™ | Perfect Water Valve";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "At hyperscale data center water volumes, Smart Valve™'s guaranteed 15% reduction produces millions in annual savings. Amazon YYZ3 verified at 58.69% peak. ROI analysis for data center operators.");
    setMeta("og:title", "Hyperscale Data Center Water ROI | Smart Valve™", "property");
    setMeta("og:url", "https://www.perfectwatervalve.com/industries/data-centers/hyperscale-roi", "property");
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
              📊 Hyperscale ROI Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Hyperscale Data Center Water ROI</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              At hyperscale water volumes, Smart Valve™'s guaranteed 15% reduction does not produce incremental savings — it produces transformative financial returns. The Amazon YYZ3 benchmark at 58.69% peak is the proof of concept at scale.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "58.69%", label: "Amazon YYZ3 Peak" },
                { value: "≥15%", label: "Guaranteed Minimum" },
                { value: "$7M+", label: "Peak Savings — $1M/mo Scenario" },
                { value: "6 Qtrs", label: "Amazon Verification" },
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

      {/* ROI Table */}
      <section className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F3A] mb-4">ROI at Scale — Water Spend vs. Guaranteed Savings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All figures based on metered consumption reduction. Guaranteed minimum is 15%. All calculations are illustrative based on the listed scenarios.</p>
          </div>
          <div className="space-y-6">
            {ROI_SCENARIOS.map((scenario, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F3A]">{scenario.label}</h3>
                    <p className="text-sm text-gray-500 mt-1">Monthly Water Spend: {scenario.monthlyWater} | Annual: {scenario.annualWater}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">15% Guaranteed in Writing</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                    <div className="text-xs font-semibold text-green-600 uppercase mb-1">15% Guaranteed</div>
                    <div className="text-2xl font-bold text-green-700">{scenario.savings15}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                    <div className="text-xs font-semibold text-blue-600 uppercase mb-1">30% Scenario</div>
                    <div className="text-2xl font-bold text-blue-700">{scenario.savings30}</div>
                  </div>
                  <div className="bg-[#DEC600]/10 rounded-lg p-4 text-center border border-[#DEC600]/30">
                    <div className="text-xs font-semibold text-[#a8960a] uppercase mb-1">58.69% Peak (YYZ3)</div>
                    <div className="text-2xl font-bold text-[#a8960a]">{scenario.peak}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">{scenario.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the Numbers Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Why Hyperscale ROI Is Categorically Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: BarChart3, title: "Scale Amplifies Every Percentage Point", body: "At a facility spending $50,000/month on water, 1% savings means $6,000/year. At $1,000,000/month, 1% means $120,000/year. The same Smart Valve™ installation — same technology, same guarantee — produces dramatically different financial outcomes depending on scale. Hyperscale data centers are at the top of this curve." },
              { icon: TrendingUp, title: "Rising Rates Compound the Value Each Year", body: "Commercial water rates in every major US data center market are rising annually. As rates rise, the dollar value of each percentage point of consumption reduction increases. A 15% reduction locked in today saves 15% off a higher number every year rates increase — the absolute savings grow without any change in installation or technology." },
              { icon: Zap, title: "AI Workloads Are Increasing Cooling Water Demand", body: "The transition to AI-heavy infrastructure is increasing heat density and cooling water requirements at hyperscale campuses. As cooling water demand grows, and rates rise, the OpEx trajectory for data center water is sharply upward. Smart Valve™ cuts that trajectory from day one." },
              { icon: DollarSign, title: "The Guarantee Converts ROI From Estimated to Contractual", body: "Unlike efficiency projects that project savings without accountability, Smart Valve™'s written 15% guarantee converts projected ROI to contractual ROI. For hyperscale operators managing billion-dollar infrastructure budgets, contractual accountability from a vendor is a meaningful financial benefit." },
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
            <div className="text-[#DEC600] text-sm font-semibold mb-2">★ THE ONLY VERIFIED HYPERSCALE BENCHMARK</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Amazon YYZ3 — Setting the Standard</h2>
            <p className="text-lg text-white/80 mb-8">
              Amazon's YYZ3 data center is the only publicly referenced hyperscale data center installation with verified Smart Valve™ savings data. The 58.69% peak result — achieved over 6 consecutive quarters of metered measurement — establishes what is achievable at scale.
            </p>
            <div className="bg-white/10 rounded-xl p-8 border border-white/20 mb-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#DEC600]">58.69%</div>
                  <div className="text-white/70 mt-2">Peak Savings Verified</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#DEC600]">6</div>
                  <div className="text-white/70 mt-2">Consecutive Quarters Measured</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#DEC600]">Amazon</div>
                  <div className="text-white/70 mt-2">Customer</div>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Savings at other hyperscale facilities will vary based on cooling tower configuration, local water chemistry, current cycles of concentration, and other operational factors. The 15% guaranteed minimum applies to all installations regardless of scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#E8EFF7]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F3A] mb-4">Request a Hyperscale ROI Analysis</h2>
            <p className="text-gray-600">Provide your current monthly water spend and we will prepare a projected savings analysis based on the Amazon YYZ3 benchmark and your facility's operational profile.</p>
          </div>
          <ContactForm source="data-centers-hyperscale-roi" />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>📧 info@perfectwatervalve.com &nbsp;|&nbsp; 📞 (720) 937-3004</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
