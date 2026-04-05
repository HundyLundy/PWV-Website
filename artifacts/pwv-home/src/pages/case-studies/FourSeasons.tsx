import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, Legend,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

// Monthly occupancy-normalized reduction — 6" primary domestic service
const MONTHLY_REDUCTION = [
  { month: "August 2025", reduction: 35 },
  { month: "September 2025", reduction: 10 },
  { month: "October 2025", reduction: 56 },
];

// Summary metrics across service lines
const SERVICE_COMPARISON = [
  { metric: "6-inch Service — Daily Avg", reduction: 26 },
  { metric: "6-inch Service — Occ. Normalized", reduction: 34 },
  { metric: "Full System — Occ. Normalized", reduction: 17 },
];

// Daily cost before vs after
const DAILY_COST = [
  { label: "Pre-Install", cost: 348.21 },
  { label: "Post-Install", cost: 274.07 },
];

// Annual cost projection
const ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: 127097 },
  { label: "After Smart Valve™", cost: 100073 },
];

// Cost saving breakdown — visualization
const COST_SAVINGS_SUMMARY = [
  { name: "Daily Cost Reduction", value: 21, fill: "#0374A7" },
  { name: "Water Cost After Install", value: 79, fill: "#E8EFF7" },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function PctTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey || p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name ?? p.dataKey}: <strong>{p.value}%</strong></span>
        </div>
      ))}
    </div>
  );
}

function DollarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey || p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name ?? p.dataKey}: <strong>${Number(p.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></span>
        </div>
      ))}
    </div>
  );
}

function AnnualTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey || p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name ?? p.dataKey}: <strong>${Number(p.value).toLocaleString()}</strong></span>
        </div>
      ))}
    </div>
  );
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────

function StatPill({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center text-center px-5 py-5 rounded-2xl" style={{ background: "rgba(3,116,167,0.08)", border: "1px solid rgba(3,116,167,0.2)" }}>
      <span className="text-3xl font-black leading-none mb-1" style={{ color: "#0374A7" }}>{value}</span>
      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F3A" }}>{label}</span>
      {sub && <span className="text-[10px] mt-1" style={{ color: "#4A7085" }}>{sub}</span>}
    </div>
  );
}

function ChartCard({ title, caption, children, note }: { title: string; caption?: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
      <div className="text-sm font-bold mb-4" style={{ color: "#0A1F3A" }}>{title}</div>
      {children}
      {caption && <p className="text-[10px] text-center mt-3 uppercase tracking-widest" style={{ color: "#4A7085" }}>{caption}</p>}
      {note && <p className="text-[11px] mt-3 leading-relaxed" style={{ color: "#6B8FA0" }}>{note}</p>}
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────

export default function FourSeasons() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Four Seasons Fort Lauderdale: 26% Water Reduction, $27K/yr Saved | Smart Valve™ Case Study</title>
        <meta name="description" content="Third-party M&V verified: Four Seasons Fort Lauderdale achieved 26% daily water reduction, 34% occupancy-normalized, and $27,000/yr in avoided water and sewer costs." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/four-seasons" />
        <meta property="og:title" content="Four Seasons Fort Lauderdale: 26% Water Reduction, $27K/yr Saved" />
        <meta property="og:description" content="Full M&V case study. 26% daily avg, 56% October peak, $348.21 → $274.07/day. Verified December 2025." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/four-seasons" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Luxury Hospitality · Fort Lauderdale, FL · M&V Verified December 2025</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Four Seasons Fort Lauderdale<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">26% Daily Reduction · $27,000/yr Saved</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            Smart Valve™ pilot verified by independent third-party Measurement &amp; Verification. Water and sewer savings confirmed across the primary domestic 6-inch service and the full combined system.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value="26%" label="Daily Water Reduction" sub="6″ primary service" />
            <StatPill value="34%" label="Occupancy-Normalized" sub="6″ primary service" />
            <StatPill value="21%" label="Cost Reduction/Day" sub="Water + sewer combined" />
            <StatPill value="~$27K" label="Annual Avoided Cost" sub="USD · Current tariffs" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ── Chart 1: Monthly Occupancy-Normalized Reduction ── */}
          <ChartCard
            title="Monthly Reduction % — 6-inch Service (Occupancy-Normalized)"
            caption="August–October 2025 · Normalized for occupied room-nights per day"
            note="October's 56% reduction reflects full system calibration. The pilot demonstrates the system's ability to significantly improve water efficiency without impacting guest experience."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={MONTHLY_REDUCTION} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 70]} />
                <ReferenceLine y={26} stroke="#0374A7" strokeDasharray="5 3" label={{ value: "26% Daily Avg", position: "insideTopRight", fontSize: 9, fill: "#0374A7" }} />
                <Tooltip content={<PctTooltip />} />
                <Bar dataKey="reduction" name="Occupancy-Normalized Reduction %" radius={[4, 4, 0, 0]}>
                  <Cell fill="#3C6E7F" />
                  <Cell fill="#0374A7" />
                  <Cell fill="#059669" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 2: Service Line Comparison ── */}
          <ChartCard
            title="Reduction % by Measurement Method"
            caption="6-inch primary domestic service vs full combined domestic system"
            note="The full-system figure (17%) includes a second 4-inch domestic service line that was not part of the pilot, which dilutes the combined average. The 6-inch service alone — where the Smart Valve™ was installed — shows 26%–34% reduction."
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={SERVICE_COMPARISON} layout="vertical" margin={{ top: 5, right: 60, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 50]} />
                <YAxis type="category" dataKey="metric" tick={{ fontSize: 11, fill: "#0A1F3A" }} width={200} />
                <ReferenceLine x={15} stroke="#059669" strokeDasharray="5 3" label={{ value: "Min 15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <Tooltip content={<PctTooltip />} />
                <Bar dataKey="reduction" name="Reduction %" radius={[0, 4, 4, 0]} label={{ position: "right", formatter: (v: any) => `${v}%`, fontSize: 12, fontWeight: 700, fill: "#0374A7" }}>
                  <Cell fill="#0374A7" />
                  <Cell fill="#3C6E7F" />
                  <Cell fill="#4A7085" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 3 & 4: Cost comparison side by side ── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Daily Water & Sewer Cost — Before vs After"
              caption="USD per day · Water + sewer combined · Source: AWS M&V Report Dec 2025"
              note="A $74.14 reduction per day. Compounded over a full operating year, this drives over $27,000 in avoided costs at current utility tariffs."
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={DAILY_COST} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${v}`} domain={[200, 400]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="cost" name="Daily Cost (USD)" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `$${Number(v).toFixed(2)}`, fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Annualized Water & Sewer Cost — Before vs After"
              caption="Projected annual cost at current tariffs · USD"
              note="Based on $348.21/day pre-install and $274.07/day post-install, annualized to 365 days. Actual savings will vary with seasonal occupancy."
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={ANNUAL_COST} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[80000, 150000]} />
                  <Tooltip content={<AnnualTooltip />} />
                  <Bar dataKey="cost" name="Annual Cost (USD)" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `$${Number(v).toLocaleString()}`, fontSize: 11, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

        </div>
      </section>

      {/* FINANCIAL CALLOUT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>$348.21</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Daily Cost — Pre-Install</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Water + sewer combined</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>$274.07</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Daily Cost — Post-Install</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>21% reduction per day</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">~$27,000</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-white">Annual Avoided Cost</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>At current tariffs · USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Key Findings</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "56% reduction in October — post-calibration peak", body: "After the system calibrated during August and September, October 2025 showed a 56% occupancy-normalized reduction on the 6\" service — the strongest single-month result in the pilot." },
              { title: "Guest experience unaffected", body: "The Four Seasons Fort Lauderdale is a property with zero tolerance for pressure or flow disruption. The M&V report confirmed no impact to guest water pressure or service quality throughout the pilot." },
              { title: "Both water and sewer costs reduced", body: "The 21% daily cost reduction applies to the combined water + sewer bill. Sewer charges in South Florida are typically metered to water consumption — so every gallon saved reduces both line items." },
              { title: "Results position the brand for portfolio-wide rollout", body: "Following the pilot M&V confirmation, the Four Seasons Fort Lauderdale result has been used as the basis for a portfolio-wide engagement across the brand's global flagship properties." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-5 bg-white border border-slate-200">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#059669" }} />
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: "#0A1F3A" }}>{f.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Related Pages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "All Case Studies", href: "/results", desc: "Full M&V portfolio — Amazon, St. Regis, Grand Central and more" },
              { label: "St. Regis Toronto", href: "/results/st-regis-toronto", desc: "$49,889 CAD/yr · 20%+ reduction · Marriott-approved" },
              { label: "Hotels & Hospitality", href: "/industries/hotels", desc: "Why luxury hotels are deploying Smart Valve™ portfolio-wide" },
              { label: "About AWS & CWS", href: "/partners", desc: "Who conducts M&V, issues the guarantee & supplies the valve" },
              { label: "Compare Alternatives", href: "/compare", desc: "Smart Valve™ vs. low-flow, leak detection, PRVs & more" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="block rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                <div className="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors" style={{ color: "#0374A7" }}>{l.label} →</div>
                <div className="text-xs" style={{ color: "#4A7085" }}>{l.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#0A1F3A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Free Water Assessment for Your Hotel</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program that delivered $27,000/yr at Fort Lauderdale. Results guaranteed in writing. Minimum 15% reduction contractually secured.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
