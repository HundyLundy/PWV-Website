import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

// 1121 Steeles Ave — 6-month post-install savings (benchmark 4,400 m³/month)
const STEELES_MONTHLY = [
  { month: "Sep 2018", pct: 10 },
  { month: "Oct 2018", pct: 23 },
  { month: "Nov 2018", pct: 29 },
  { month: "Dec 2018", pct: 48.9 },
  { month: "Jan 2019", pct: 48.77 },
  { month: "Feb 2019", pct: 24.4 },
];

// 797 Don Mills — 5-month post-install savings (benchmark 2,802 m³/month)
const DONMILLS_MONTHLY = [
  { month: "Oct 2018", pct: 14 },
  { month: "Nov 2018", pct: 14 },
  { month: "Dec 2018", pct: 14 },
  { month: "Jan 2019", pct: 28 },
  { month: "Feb 2019", pct: 21.3 },
];

// Portfolio summary comparison
const PORTFOLIO_COMPARISON = [
  { property: "1121 Steeles Ave", avg: 31 },
  { property: "797 Don Mills", avg: 18 },
  { property: "21 & 23 Carlton", avg: 15 },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function PctTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value}%</strong></span>
        </div>
      ))}
    </div>
  );
}

function ChartCard({ title, caption, children }: { title: string; caption?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
      <div className="text-sm font-bold mb-4" style={{ color: "#0A1F3A" }}>{title}</div>
      {children}
      {caption && (
        <p className="text-[10px] text-center mt-3 uppercase tracking-widest" style={{ color: "#4A7085" }}>{caption}</p>
      )}
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────

export default function TorontoMultifamily() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Toronto Multi-Residential Portfolio — 18–31% Water Savings | Smart Valve™ Case Study | Perfect Water Valve</title>
        <meta name="description" content="Three Toronto multi-residential properties achieved 15–31% verified water savings with Smart Valve™ — including 1121 Steeles Ave at 31% average over 6 months. IPMVP-verified by CWS." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/toronto-multifamily" />
        <meta property="og:title" content="Toronto Multi-Residential Portfolio — 15–31% Water Savings | Smart Valve™ Case Study" />
        <meta property="og:description" content="Three Toronto multi-residential properties achieved 15–31% verified water savings with Smart Valve™ — including 1121 Steeles Ave at 31% average over 6 months. IPMVP-verified by CWS." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/toronto-multifamily" />
        <meta property="og:image" content="https://www.perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #1a2a1a 0%, #276749 100%)" }}>
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              Multi-Residential Portfolio
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">Toronto, Ontario — 3 Properties</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Toronto Multi-Residential Portfolio
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Three Toronto high-rise residential properties verified 15%–31% water savings using IPMVP Option B methodology — formal reports issued by Canadian Water Savings (CWS).
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { val: "31%", label: "Peak Site Avg (1121 Steeles)" },
              { val: "18%", label: "797 Don Mills Avg" },
              { val: "3", label: "Verified Properties" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl px-5 py-4 text-center" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="text-3xl font-bold mb-1">{s.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SUMMARY */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Portfolio Summary</h2>
          <ChartCard
            title="Average Water Savings % by Property"
            caption="IPMVP Option B verification · CWS formal reports · Toronto, Ontario"
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={PORTFOLIO_COMPARISON} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="property" tick={{ fontSize: 11, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 40]} />
                <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15% Guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <Tooltip content={<PctTooltip />} />
                <Bar dataKey="avg" name="Avg Savings %" radius={[6, 6, 0, 0]}
                  label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 13, fontWeight: 700, fill: "#276749" }}>
                  {PORTFOLIO_COMPARISON.map((_, i) => (
                    <Cell key={i} fill={["#0374A7", "#3C6E7F", "#5BBFE0"][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* PROPERTY 1: 1121 Steeles */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Property 1</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0A1F3A" }}>1121 Steeles Avenue, Toronto</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>4&quot; Smart Valve™ · Benchmark 4,400 m³/month · 6-month post-install M&V · Avg 31% savings</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <ChartCard
              title="Monthly Savings % — Post-Install (Sep 2018 – Feb 2019)"
              caption="Months 1–6 post-installation · Benchmark: 4,400 m³/month · 31% overall average"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={STEELES_MONTHLY} margin={{ top: 8, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 60]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="pct" name="Monthly Savings %" fill="#0374A7" radius={[4, 4, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 10, fill: "#0374A7", fontWeight: 600 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100 bg-white">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Key Facts</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>31% average savings over 6 consecutive months</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Peak months: Dec 2018 (48.9%) and Jan 2019 (48.77%)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Benchmark: 4,400 m³/month at $3.80/m³ (CAD)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Estimated annual savings: ~$61,600 CAD</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Savings grew progressively as valve optimized to building profile</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY 2: 797 Don Mills */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(60,110,127,0.12)", color: "#3C6E7F", border: "1px solid rgba(60,110,127,0.25)" }}>Property 2</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0A1F3A" }}>797 Don Mills Road, Toronto</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>4&quot; Smart Valve™ · Benchmark 2,802 m³/month · 5-month post-install M&V · 18% overall average</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <ChartCard
              title="Monthly Savings % — Post-Install (Oct 2018 – Feb 2019)"
              caption="Months 1–5 post-installation · Benchmark: 2,802 m³/month · 18% overall average"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={DONMILLS_MONTHLY} margin={{ top: 8, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 35]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="pct" name="Monthly Savings %" fill="#3C6E7F" radius={[4, 4, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 10, fill: "#3C6E7F", fontWeight: 600 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Key Facts</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>18% average savings across all 5 measured months</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Peak month: January 2019 at 28% savings</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Benchmark: 2,802 m³/month at $3.80/m³ (CAD)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Savings increased in later months as valve profile stabilized</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY 3: 21 & 23 Carlton */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(91,191,224,0.15)", color: "#0374A7", border: "1px solid rgba(91,191,224,0.4)" }}>Property 3</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0A1F3A" }}>21 &amp; 23 Carlton Street, Toronto</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Smart Valve™ installed 2018 · Pre-install demand trending +16% vs prior year · Post-install stabilized to ~15% savings vs trend</p>

          <div className="rounded-2xl p-6 border border-slate-100 bg-white max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Key Facts</div>
            <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Pre-installation: water demand trending +16.25% above 2017 baseline</span></li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Post-installation: consumption moderated back toward 2017 levels</span></li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Net savings vs demand trajectory: approximately 15%</span></li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>IPMVP-compliant measurement — CWS formal report on file</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW CWS VERIFIES */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0A1F3A" }}>About the M&V Methodology</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "IPMVP Option B", body: "Measurement and Verification follows IPMVP Option B — all energy- and water-affecting parameters are continuously metered. Results are not estimated or extrapolated." },
              { title: "CWS verification", body: "Canadian Water Savings (CWS) is the AWS partner for Canadian installations. They conduct independent M&V, issue formal PDF reports, and provide the written performance guarantee." },
              { title: "Conservative benchmarking", body: "Each property's baseline was established from multiple prior billing cycles. Savings are compared against the adjusted baseline — not cherry-picked low months." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl p-5 border border-slate-100" style={{ background: "#F7FAFD" }}>
                <div className="font-bold text-sm mb-2" style={{ color: "#0374A7" }}>{c.title}</div>
                <p className="text-sm" style={{ color: "#2E4A5A" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1a2a1a, #276749)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-3">Get verified savings for your residential portfolio</h2>
          <p className="text-white/80 mb-8">Whether you manage one building or twenty, CWS and AWS will conduct site assessment, formal M&V, and issue written guarantees for every verified installation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/industries/multifamily" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              Multifamily Industry Hub
            </a>
            <a href="/partners" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              About CWS &amp; AWS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
