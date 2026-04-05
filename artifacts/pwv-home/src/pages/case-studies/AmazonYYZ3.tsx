import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, Legend,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

// Year-over-year quarterly comparison — Source: PWV Amazon Case Study 2025
const YYZ3_QUARTERLY = [
  { period: "Q3 2024 (Jul–Sep)", savings: 58.69 },
  { period: "Q4 2024 (Oct–Dec)", savings: 29.27 },
];

const YYZ4_QUARTERLY = [
  { period: "Q3 2024 (Jul–Sep)", savings: 17.36 },
  { period: "Q4 2024 (Oct–Dec)", savings: -14.44 }, // valve removed Sept 5, reinstalled Oct 25
];

const PORTFOLIO_COMPARISON = [
  { period: "Q3 2024 (Jul–Sep)", YYZ3: 58.69, YYZ4: 17.36 },
  { period: "Q4 2024 (Oct–Dec)", YYZ3: 29.27, YYZ4: -14.44 },
];

// Peak monthly usage — YYZ3 (m³). Source: Historical Usage Analysis section
const YYZ3_VOLUME = [
  { label: "Q3 2023\n(baseline)", period: "Q3 2023", value: 1107 },
  { label: "Q3 2024\n(post-install)", period: "Q3 2024", value: 457.3 },
];

// Flow rate in gallons per minute — YYZ3
const GPM_DATA = [
  { label: "Q3/Q4 2023 (Pre-Install)", gpm: 5.26 },
  { label: "Q3/Q4 2024 (Post-Install)", gpm: 2.74 },
];

// Q3/Q4 2024 average savings % per site — Source: PWV Amazon Case Study 2025
const PORTFOLIO_AVG = [
  { site: "YYZ3", avg: 43.98 },
  { site: "YYZ4", avg: 14.6 },
  { site: "Portfolio", avg: 29.3 },
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
          <span>{p.name ?? p.dataKey}: <strong>{p.value > 0 ? "+" : ""}{p.value}%</strong></span>
        </div>
      ))}
    </div>
  );
}

function VolumeTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill }} />
          <span>{p.name}: <strong>{p.value?.toLocaleString()} m³</strong></span>
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

export default function AmazonYYZ3() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Amazon YYZ3 & YYZ4 Case Study: Verified Water Savings Q3/Q4 2024 | Perfect Water Valve</title>
        <meta name="description" content="Full M&V data for Amazon YYZ3 and YYZ4 fulfillment centres in Brampton, ON. 58.69% peak Q3 2024. YYZ3 Q3/Q4 average 43.98%. Year-over-year verified." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/amazon-yyz3" />
        <meta property="og:title" content="Amazon YYZ3 & YYZ4: Verified Water Savings — Q3/Q4 2024 M&V Data" />
        <meta property="og:description" content="Full M&V case study — Amazon YYZ3 & YYZ4, Brampton ON. 58.69% peak Q3 2024. YYZ3 Q3/Q4 average 43.98%. Independent year-over-year verification." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/amazon-yyz3" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Logistics · Brampton, Ontario · Smart Valve™ Install June 2024</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Amazon YYZ3 & YYZ4<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Q3/Q4 2024 — Verified M&V Results</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            Two Amazon fulfillment centres. Q3 and Q4 2024 independent Measurement &amp; Verification. Year-over-year comparison against Q3/Q4 2023 baseline.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value="58.69%" label="Peak — YYZ3 Q3 2024" sub="Year-over-year vs Q3 2023" />
            <StatPill value="43.98%" label="YYZ3 Avg — Q3/Q4 2024" sub="Year-over-year average" />
            <StatPill value="14.6%" label="YYZ4 Avg — Q3/Q4 2024" sub="Year-over-year average" />
            <StatPill value="29.3%" label="Portfolio Average" sub="Both sites combined" />
          </div>
        </div>
      </section>

      {/* CHARTS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ── Chart 1: YYZ3 Quarterly Savings ── */}
          <ChartCard
            title="YYZ3 — Quarterly Water Savings % (Year-over-Year vs 2023)"
            caption="Q3 & Q4 2024 · Green dashed = 15% guaranteed minimum · Source: PWV Amazon Case Study 2025"
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={YYZ3_QUARTERLY} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 65]} />
                <ReferenceLine y={15} stroke="#059669" strokeDasharray="5 3" label={{ value: "≥15% Guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <ReferenceLine y={0} stroke="#cbd5e1" />
                <Tooltip content={<PctTooltip />} />
                <Bar dataKey="savings" name="Water Savings %" radius={[4, 4, 0, 0]}>
                  {YYZ3_QUARTERLY.map((entry, i) => (
                    <Cell key={i} fill={entry.savings >= 0 ? "#0374A7" : "#ef4444"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 2: YYZ4 Quarterly Savings ── */}
          <ChartCard
            title="YYZ4 — Quarterly Water Savings % (Year-over-Year vs 2023)"
            caption="Q3 & Q4 2024 · *Valve removed Sept 5, reinstalled Oct 25, 2024 — Q4 increase is removal-related, not performance-related"
            note="YYZ4 Q3 2024 shows 17.36% reduction. Q4 2024 shows a 14.44% usage increase — directly caused by valve removal on Sept 5 and not reinstalled until Oct 25, 2024. The Q3/Q4 average of 14.6% reflects this interruption."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={YYZ4_QUARTERLY} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[-20, 25]} />
                <ReferenceLine y={15} stroke="#059669" strokeDasharray="5 3" label={{ value: "≥15% Guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <ReferenceLine y={0} stroke="#cbd5e1" />
                <Tooltip content={<PctTooltip />} />
                <Bar dataKey="savings" name="Water Savings %" radius={[4, 4, 0, 0]}>
                  {YYZ4_QUARTERLY.map((entry, i) => (
                    <Cell key={i} fill={entry.savings >= 0 ? "#3C6E7F" : "#ef4444"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 3: Portfolio Comparison ── */}
          <ChartCard
            title="YYZ3 vs YYZ4 — Side-by-Side Portfolio Comparison"
            caption="Blue = YYZ3 · Teal = YYZ4 · Year-over-year vs Q3/Q4 2023 baseline"
            note="YYZ4 Q4 2024 shows a usage increase due to valve removal (Sept 5–Oct 25, 2024), not a performance failure."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={PORTFOLIO_COMPARISON} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[-20, 65]} />
                <ReferenceLine y={15} stroke="#059669" strokeDasharray="5 3" label={{ value: "≥15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <ReferenceLine y={0} stroke="#cbd5e1" />
                <Tooltip content={<PctTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="YYZ3" name="YYZ3" radius={[4, 4, 0, 0]}>
                  {PORTFOLIO_COMPARISON.map((e, i) => <Cell key={i} fill={e.YYZ3 >= 0 ? "#0374A7" : "#ef4444"} />)}
                </Bar>
                <Bar dataKey="YYZ4" name="YYZ4" radius={[4, 4, 0, 0]}>
                  {PORTFOLIO_COMPARISON.map((e, i) => <Cell key={i} fill={e.YYZ4 >= 0 ? "#3C6E7F" : "#fca5a5"} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 4: Peak Monthly Volume ── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="YYZ3 — Peak Monthly Water Usage (m³)"
              caption="Peak summer months (Jul–Sep) · Before: 2023 baseline · After: 2024 post-installation"
              note="Without the Smart Valve™, YYZ3 peaked at 1,107 m³/month. Post-installation the peak reduced to 457.30 m³ — a 58.69% reduction at the highest-use point in the year."
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={YYZ3_VOLUME} margin={{ top: 10, right: 24, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}m³`} domain={[0, 1300]} />
                  <Tooltip content={<VolumeTooltip />} />
                  <Bar dataKey="value" name="Peak Usage (m³)" radius={[4, 4, 0, 0]}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="YYZ3 — Flow Rate Reduction (gal/min)"
              caption="Q3/Q4 average · Source: AWS Measurement & Verification Report"
              note="YYZ3 shows a 2.52 gal/min reduction in average water flow over the 6-month post-installation period. At $3.00/m³, that sustained reduction drives thousands of dollars in avoided costs every month."
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={GPM_DATA} margin={{ top: 10, right: 24, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v} gpm`} domain={[0, 7]} />
                  <Tooltip formatter={(v: any) => [`${v} gal/min`, "Flow Rate"]} />
                  <Bar dataKey="gpm" name="Flow Rate (gal/min)" radius={[4, 4, 0, 0]}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* ── Chart 5: Portfolio Average Comparison ── */}
          <ChartCard
            title="Average Savings % by Site — Q3/Q4 2024"
            caption="Year-over-year average · Contractual minimum = 15% · YYZ4 Q4 affected by valve removal"
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={PORTFOLIO_AVG} layout="vertical" margin={{ top: 5, right: 60, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 50]} />
                <YAxis type="category" dataKey="site" tick={{ fontSize: 12, fill: "#0A1F3A", fontWeight: 600 }} width={80} />
                <ReferenceLine x={15} stroke="#059669" strokeDasharray="5 3" label={{ value: "Min 15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                <Tooltip formatter={(v: any) => [`${v}%`, "Average Savings"]} />
                <Bar dataKey="avg" name="Average Savings %" radius={[0, 4, 4, 0]} fill="#0374A7" label={{ position: "right", formatter: (v: any) => `${v}%`, fontSize: 12, fontWeight: 700, fill: "#0374A7" }} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Key Findings</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "YYZ3 far exceeded contractual minimum both quarters", body: "YYZ3 achieved 58.69% in Q3 2024 and 29.27% in Q4 2024 — a Q3/Q4 average of 43.98%, nearly three times the 15% contractual floor." },
              { title: "YYZ4 Q4 increase caused by valve removal, not performance", body: "The valve was removed from YYZ4 on Sept 5, 2024 and not reinstalled until Oct 25, 2024. The 14.44% Q4 usage increase is a direct result of the site operating without the valve for most of Q4." },
              { title: "YYZ4 Q3 result confirms technology works at both sites", body: "With the valve in place for all of Q3 2024, YYZ4 achieved a 17.36% year-over-year reduction — comfortably above the 15% guarantee. The technology performance was consistent across both facilities." },
              { title: "58.69% YoY peak validates the technology ceiling", body: "YYZ3's Q3 2024 result of 58.69% year-over-year reduction represents the highest independently verified single-quarter result in the Smart Valve™ portfolio." },
              { title: "Flow rate reduction is structural, not seasonal", body: "YYZ3 shows a 2.52 gal/min reduction in average flow across Q3/Q4 2024 — from 5.26 to 2.74 gal/min. This is a structural reduction in water draw that translates directly to lower metered consumption." },
              { title: "Peak volume reduction confirms savings at the highest-use point", body: "Without Smart Valve™, YYZ3 peaked at 1,107 m³/month (Jul–Sep 2023). With Smart Valve™ installed, that peak dropped to 457.30 m³ — the most impactful savings occur exactly when water costs are highest." },
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

      {/* METHODOLOGY NOTE */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 border" style={{ background: "rgba(3,116,167,0.05)", borderColor: "rgba(3,116,167,0.2)" }}>
            <div className="text-sm font-bold mb-2" style={{ color: "#0374A7" }}>Methodology Note</div>
            <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>
              All data is year-over-year quarterly comparison against Q3/Q4 2023 baseline. YYZ3 Q3 2024: 58.69% reduction. YYZ3 Q4 2024: 29.27% reduction. YYZ3 Q3/Q4 average: 43.98%. YYZ4 Q3 2024: 17.36% reduction. YYZ4 Q4 2024: 14.44% usage increase (valve removed Sept 5, reinstalled Oct 25). YYZ4 Q3/Q4 average: 14.6%. Smart Valve™ installed at both sites June 2024. Cost estimations based on $3.00/m³ for water only, excluding sewer fees. Source: PWV Amazon Case Study 2025.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Related Pages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "All Case Studies", href: "/results", desc: "Full M&V portfolio — Five case studies with charts" },
              { label: "Four Seasons Fort Lauderdale", href: "/results/four-seasons", desc: "26% daily avg · $27K/yr · October peak 56%" },
              { label: "Data Centers Industry Page", href: "/industries/data-centers", desc: "Why data centers see the highest Smart Valve™ results" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Get a Free Water Assessment for Your Facility</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same guarantee that backed the Amazon pilot. Minimum 15% in writing. Results verified by independent M&V.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
