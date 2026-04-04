import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, AlertTriangle, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const COMPARISON = [
  { feature: "Reduces water meter reading", pwv: true, other: false },
  { feature: "Eliminates air from billing", pwv: true, other: false },
  { feature: "NSF 61 & NSF 372 certified", pwv: true, other: false },
  { feature: "Written savings guarantee", pwv: "≥15% in writing", other: "None" },
  { feature: "No electricity required", pwv: true, other: "N/A" },
  { feature: "Zero moving parts / maintenance", pwv: true, other: false },
  { feature: "Installs right after main shutoff", pwv: true, other: false },
];

const LOW_FLOW_COMPARISON = [
  { feature: "Reduces metered water consumption", pwv: true, other: false },
  { feature: "Reduces utility bill", pwv: true, other: "Marginal at best" },
  { feature: "Affects occupant experience", pwv: false, other: true },
  { feature: "Works on commercial master meter", pwv: true, other: false },
  { feature: "Covers all downstream uses (HVAC, laundry, pool)", pwv: true, other: false },
  { feature: "Written savings guarantee", pwv: "≥15% in writing", other: "None" },
  { feature: "ROI measurable from utility bill", pwv: true, other: false },
];

const PRV_COMPARISON = [
  { feature: "Reduces metered water consumption", pwv: true, other: false },
  { feature: "Reduces utility bill", pwv: true, other: false },
  { feature: "Reduces pressure only (not volume)", pwv: false, other: true },
  { feature: "Addresses air entrainment billing", pwv: true, other: false },
  { feature: "Written savings guarantee", pwv: "≥15% in writing", other: "None" },
  { feature: "Covers all meter categories simultaneously", pwv: true, other: false },
  { feature: "ROI measurable from utility bill", pwv: true, other: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ComparisonTable({ rows, col2Label }: { rows: typeof COMPARISON; col2Label: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: "#C5D8E8" }}>
      <div className="grid grid-cols-3 text-sm font-bold border-b" style={{ borderColor: "#C5D8E8", backgroundColor: "#D4E9F7" }}>
        <div className="px-6 py-4" style={{ color: "#4A7085" }}>Feature</div>
        <div className="px-6 py-4 text-center" style={{ color: "#0374A7" }}>Smart Valve™</div>
        <div className="px-6 py-4 text-center" style={{ color: "#9CA3AF" }}>{col2Label}</div>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.feature}
          className="grid grid-cols-3 text-sm border-b last:border-b-0"
          style={{ borderColor: "#C5D8E8", backgroundColor: i % 2 === 0 ? "#ffffff" : "#F0F7FF" }}
        >
          <div className="px-6 py-4 font-medium" style={{ color: "#2E4A5A" }}>{row.feature}</div>
          <div className="px-6 py-4 flex items-center justify-center">
            {row.pwv === true ? (
              <CheckCircle2 className="w-5 h-5" style={{ color: "#0374A7" }} />
            ) : row.pwv === false ? (
              <XCircle className="w-5 h-5 text-slate-300" />
            ) : (
              <span className="text-xs font-semibold" style={{ color: "#0374A7" }}>{row.pwv as string}</span>
            )}
          </div>
          <div className="px-6 py-4 flex items-center justify-center">
            {row.other === false ? (
              <XCircle className="w-5 h-5 text-slate-300" />
            ) : row.other === true ? (
              <CheckCircle2 className="w-5 h-5 text-slate-400" />
            ) : (
              <span className="text-xs font-semibold text-slate-400">{row.other as string}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CommonMisconceptions() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Common Water Savings Misconceptions | Smart Valve™ vs Check Valves, Low-Flow Fixtures & PRVs</title>
        <meta name="description" content="Three common misconceptions about commercial water savings — check valves, low-flow fixtures, and pressure reducing valves — and why none of them reduce your meter reading or utility bill." />
        <link rel="canonical" href="https://perfectwatervalve.com/common-misconceptions" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #0A1F3A 0%, #0374A7 60%, #0A1F3A 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              <AlertTriangle className="w-4 h-4 text-yellow-400" /> Common Water Savings Misconceptions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Three Products That Won't{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-sky-300">Reduce Your Water Bill</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Facilities managers are routinely sold on products that sound like water savings solutions but do nothing to reduce metered consumption. Here's exactly why — and what the difference looks like on your utility bill.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISCONCEPTION 1 — CHECK VALVE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#C5D8E8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <span className="text-red-400 font-black text-sm">01</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border" style={{ color: "#DC2626", borderColor: "#DC2626", backgroundColor: "rgba(220,38,38,0.06)" }}>
                Misconception #1
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              "A Check Valve Will Reduce Our Water Costs"
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1F3A" }}>What a Check Valve Actually Does</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  A check valve is a one-way flow control device. Its only function is to prevent backflow — water flowing backward through the pipe. It does not reduce water pressure. It does not reduce water volume. It does not affect what your meter records.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  A check valve installed on your supply line will have exactly zero impact on your water utility bill. Your meter will read the same volume before and after installation. This is not a design limitation — it is what the product is designed to do.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>
                  The confusion arises because Smart Valve™ is sometimes described as a "flow control valve" — which is accurate but incomplete. The critical difference is that Smart Valve™ uses an electrochemical process to reduce dissolved air in the water supply. Air entrained in commercial water systems is metered and billed as water. Eliminating it reduces what the meter reads. A check valve does none of this.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-700">What Check Valves Cannot Do</span>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" /> Reduce metered water consumption</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" /> Lower your utility bill</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" /> Eliminate air from the billing system</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" /> Provide a written savings guarantee</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" /> Reduce downstream scaling or mineral buildup</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-blue-700">What Smart Valve™ Actually Delivers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" /> 15%–58.69% reduction in metered consumption</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" /> Written guarantee of ≥15% minimum — every site</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" /> Savings verified by utility billing data</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" /> NSF 61 & 372 certified — drinking water safe</li>
                  </ul>
                </div>
              </div>
            </div>
            <ComparisonTable rows={COMPARISON} col2Label="Standard Check Valve" />
          </motion.div>
        </div>
      </section>

      {/* MISCONCEPTION 2 — LOW-FLOW FIXTURES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <span className="text-orange-500 font-black text-sm">02</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border" style={{ color: "#EA580C", borderColor: "#EA580C", backgroundColor: "rgba(234,88,12,0.06)" }}>
                Misconception #2
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              "Low-Flow Fixtures and Aerators Will Cut Our Commercial Water Bill"
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1F3A" }}>What Low-Flow Fixtures Actually Do</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  Low-flow showerheads, faucet aerators, and low-flush toilets reduce flow rate at individual fixtures — meaning occupants get less water per minute or per flush. This does create some reduction in consumption at residential scale, which is why municipalities recommend them for household use.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  At commercial scale, the math falls apart. A hotel, hospital, or apartment building has thousands of individual fixtures. Retrofitting all of them is expensive, disruptive, and delivers marginal results — typically 5–10% at best, with significant occupant complaints about pressure and experience. For high-volume uses like HVAC cooling towers, laundry, pool fill, and kitchen operations, low-flow fixtures offer zero benefit. These applications consume the bulk of a commercial water budget, and no aerator touches them.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>
                  Smart Valve™ installs once on the main supply line and reduces the metered total across every downstream use simultaneously — including HVAC, laundry, pool, and all fixtures — without restricting pressure or flow at any point.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-orange-700">The Commercial Reality</span>
                  </div>
                  <ul className="space-y-2 text-sm text-orange-800">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" /> HVAC cooling towers: low-flow fixtures don't touch them</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" /> Laundry operations: no fixture to retrofit</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" /> Pool fill and backwash: unaffected by aerators</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" /> Irrigation systems: not fixture-dependent</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" /> Retrofit cost is high; savings are minimal and unguaranteed</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#C5D8E8] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-bold" style={{ color: "#0A1F3A" }}>Where Commercial Water Budgets Actually Go</span>
                  </div>
                  <div className="space-y-2 text-sm" style={{ color: "#4A7085" }}>
                    <div className="flex justify-between"><span>HVAC cooling towers</span><span className="font-bold text-orange-500">30–40%</span></div>
                    <div className="flex justify-between"><span>Laundry & industrial processes</span><span className="font-bold text-orange-500">20–30%</span></div>
                    <div className="flex justify-between"><span>Kitchen & food service</span><span className="font-bold text-orange-500">10–20%</span></div>
                    <div className="flex justify-between"><span>Guest/occupant fixtures (max)</span><span className="font-bold" style={{ color: "#059669" }}>15–20%</span></div>
                  </div>
                  <p className="text-xs mt-3" style={{ color: "#6A8A9A" }}>Low-flow fixtures target the smallest category. Smart Valve™ reduces all categories from one installation.</p>
                </div>
              </div>
            </div>
            <ComparisonTable rows={LOW_FLOW_COMPARISON} col2Label="Low-Flow Fixtures / Aerators" />
          </motion.div>
        </div>
      </section>

      {/* MISCONCEPTION 3 — PRESSURE REDUCING VALVES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <span className="text-yellow-500 font-black text-sm">03</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border" style={{ color: "#CA8A04", borderColor: "#CA8A04", backgroundColor: "rgba(202,138,4,0.06)" }}>
                Misconception #3
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              "A Pressure Reducing Valve (PRV) Will Lower Our Water Bill"
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1F3A" }}>What a PRV Actually Does</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  A pressure reducing valve (PRV) lowers the water pressure delivered to a building or system. It is a legitimate plumbing device — it protects pipes and fixtures from high-pressure damage and is often required by code in buildings where incoming main pressure exceeds safe operating levels.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  However, a PRV does not reduce metered water volume. It reduces pressure — the force at which water arrives — but the same volume of water still flows through the meter. Your utility charges you for volume, not pressure. After a PRV installation, your water bill will be the same.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A7085" }}>
                  The misconception is particularly persistent in facilities management because PRV vendors occasionally suggest that lower pressure means less water consumption. This is only partially true: at lower pressure, some fixtures deliver slightly less flow per minute. But the net effect on a commercial water bill is negligible — typically less than 2–3% — and it comes at the cost of reduced pressure throughout the building.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>
                  Smart Valve™ addresses a completely different mechanism: air entrainment. Commercial water systems carry dissolved and entrained air that is metered and billed as water. Removing that air reduces what the meter reads — which is what actually appears on your bill.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="font-bold text-yellow-800">What PRVs Cannot Guarantee</span>
                  </div>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" /> A measurable reduction in your utility bill</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" /> Any reduction in metered water volume</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" /> Written savings guarantee of any kind</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" /> Elimination of air entrainment billing</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" /> M&V-verifiable results through utility data</li>
                  </ul>
                </div>
                <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="font-bold text-white">The Core Difference</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Utility meters measure <strong className="text-white">volume</strong>, not pressure. PRVs reduce pressure. Smart Valve™ reduces volume by eliminating entrained air that is metered as water. Only one of these appears on your bill.
                  </p>
                </div>
              </div>
            </div>
            <ComparisonTable rows={PRV_COMPARISON} col2Label="Pressure Reducing Valve (PRV)" />
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Smart Valve™ Is Different in One Specific Way</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Every installation comes with a written guarantee of at least 15% reduction in metered water consumption — verified through your utility's own billing data. No other water product in this category offers that.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { n: "19", label: "M&V-Verified Case Studies", sub: "Independently confirmed through utility billing" },
              { n: "15%", label: "Guaranteed Minimum Reduction", sub: "In writing — every installation" },
              { n: "58.69%", label: "Peak Recorded Reduction", sub: "Amazon YYZ3 — formally verified" },
            ].map((s, i) => (
              <div key={i} className="text-center rounded-2xl p-6 border border-white/15" style={{ background: "rgba(255,255,255,0.07)" }}>
                <div className="text-4xl font-black text-white mb-2">{s.n}</div>
                <div className="text-sm font-bold text-white/80 mb-1">{s.label}</div>
                <div className="text-xs text-white/50">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/results" className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-lg text-center flex items-center justify-center gap-2">
              View All 19 Case Studies <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:info@perfectwatervalve.com" className="bg-transparent border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-lg text-center">
              Get a Free Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
