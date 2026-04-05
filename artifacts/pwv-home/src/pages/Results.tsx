import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, Legend,
} from "recharts";
import { AMAZON_LABELS, AMAZON_QUARTERLY_CHART as AMAZON_QUARTERLY } from "@/data/amazonVerified";
// All Amazon figures → edit @/data/amazonVerified.ts (not this file)

// ─── DATA ──────────────────────────────────────────────────────────────────

const AGGREGATE_STATS = [
  { val: "24", label: "M&V-Verified Case Studies" },
  { val: AMAZON_LABELS.peak, label: "Peak Reduction — Amazon YYZ3" },
  { val: "$50K/yr", label: "Max Annual Savings — Single Site" },
  { val: AMAZON_LABELS.guarantee, label: "Contractual Minimum Guaranteed" },
];

const FOUR_SEASONS_DATA = [
  { period: "Daily Avg", reduction: 26 },
  { period: "Oct Peak", reduction: 56 },
];

const CALIBER_DATA = [
  { site: "Portfolio Weighted Avg", savings: 23 },
];

const GRAND_CENTRAL_DATA = [
  { label: "Year 1", before: 217000, after: 167000 },
  { label: "Year 2", before: 220000, after: 170000 },
];

const RWJ_DATA = [
  { period: "Before", cost: 72700 },
  { period: "After", cost: 57200 },
];

// Confirmed peak quarterly volumes from Amazon Case Study PDF
const AMAZON_VOLUME = [
  { site: "YYZ3", before: 1107, after: 457 },
  { site: "YYZ4", before: 3933, after: 3250 },
];

const FOUR_SEASONS_ANNUAL = [
  { label: "Before Smart Valve™", cost: 103846 },
  { label: "After Smart Valve™", cost: 76846 },
];


const GRAND_CUMUL = [
  { year: "Year 1", cumulative: 50000 },
  { year: "Year 2", cumulative: 100000 },
];

const RWJ_DAILY = [
  { period: "Before", gallons: 19625 },
  { period: "After", gallons: 15425 },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function PctTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: "#fff", border: "1px solid #e0e0e0", color: "#1a1a1a" }}>
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value}%</strong></span>
        </div>
      ))}
    </div>
  );
}

function DollarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: "#fff", border: "1px solid #e0e0e0", color: "#1a1a1a" }}>
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>${p.value?.toLocaleString()}</strong></span>
        </div>
      ))}
    </div>
  );
}

function VolumeTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: "#fff", border: "1px solid #e0e0e0", color: "#1a1a1a" }}>
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value?.toLocaleString()} {p.unit || ""}</strong></span>
        </div>
      ))}
    </div>
  );
}

// ─── STAT PILL ─────────────────────────────────────────────────────────────

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center px-5 py-4 rounded-2xl" style={{ background: "rgba(3,116,167,0.1)", border: "1px solid rgba(3,116,167,0.2)" }}>
      <span className="text-3xl font-bold leading-none mb-1" style={{ color: "#0374A7" }}>{value}</span>
      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#4A7085" }}>{label}</span>
    </div>
  );
}

// ─── SECTION LABEL ─────────────────────────────────────────────────────────

function IndustryTag({ label, href }: { label: string; href: string }) {
  return (
    <a href={href}
      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors hover:opacity-80"
      style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>
      {label} <ExternalLink className="w-3 h-3" />
    </a>
  );
}

// ─── CHART WRAPPER ─────────────────────────────────────────────────────────

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

export default function Results() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Verified Water Savings Results | Amazon, Four Seasons, Caliber Car Wash | Perfect Water Valve</title>
        <meta name="description" content="Verified water savings results: Amazon YYZ3 (58.69%), Four Seasons (26%), Grand Central Tampa (23%), Caliber Car Wash (23%). All M&amp;V-verified." />
        <link rel="canonical" href="https://perfectwatervalve.com/results" />
        <meta property="og:title" content="Verified Water Savings Results | Amazon, Four Seasons, Caliber Car Wash | Perfect Water Valve" />
        <meta property="og:description" content="Verified water savings results: Amazon YYZ3 (58.69%), Four Seasons (26%), Grand Central Tampa (23%), Caliber Car Wash (23%). All M&V-verified." />
        <meta property="og:url" content="https://perfectwatervalve.com/results" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "#E8EFF7" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#0374A7" }}>
            Smart Valve™ — Verified Field Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            24 Verified Case Studies.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">15%–58.69% Savings.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#2E4A5A" }}>
            Independent M&V reports, IPMVP Option B methodology, third-party verification. Below are the five strongest installations on record.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {AGGREGATE_STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <StatPill value={s.val} label={s.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CASE STUDY 1: Amazon ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <IndustryTag label="Data Centers" href="/industries/data-centers" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Logistics / Fulfillment · Brampton, Ontario</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0A1F3A" }}>Amazon YYZ3 & YYZ4 Fulfillment Centres</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Smart Valve™ installed June 2024 · Independent IPMVP Option B M&V · Formal PDFs available</p>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <StatPill value={AMAZON_LABELS.peak}         label="YYZ3 Peak — Q3 2024 Year-over-Year" />
            <StatPill value={AMAZON_LABELS.yyz3Avg}      label="YYZ3 Q3/Q4 2024 Average" />
            <StatPill value={AMAZON_LABELS.portfolioAvg} label="Portfolio Avg — YYZ3 & YYZ4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Quarterly Savings % — YYZ3 vs YYZ4"
              caption="Blue = YYZ3 · Teal = YYZ4 · Red bar = YYZ4 Q4 (valve removed Sept 5–Oct 25) · Green dashed = ≥15% guarantee"
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={AMAZON_QUARTERLY} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[-20, 65]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <ReferenceLine y={0} stroke="#cbd5e1" />
                  <Tooltip content={<PctTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="YYZ3" name="YYZ3" radius={[4, 4, 0, 0]}>
                    {AMAZON_QUARTERLY.map((e, i) => <Cell key={i} fill={e.YYZ3 >= 0 ? "#0374A7" : "#ef4444"} />)}
                  </Bar>
                  <Bar dataKey="YYZ4" name="YYZ4" radius={[4, 4, 0, 0]}>
                    {AMAZON_QUARTERLY.map((e, i) => <Cell key={i} fill={e.YYZ4 >= 0 ? "#3C6E7F" : "#fca5a5"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Methodology Notes</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Year-over-year quarterly comparison vs Q3/Q4 2023 baseline</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>58.69% = YYZ3 Q3 2024 peak · 29.27% = YYZ3 Q4 2024 · 43.98% = YYZ3 avg</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>YYZ4 Q4 usage increase: valve removed Sept 5, reinstalled Oct 25 — not a performance issue</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>YYZ4 Q3: 17.36% · YYZ4 Q3/Q4 avg: 14.6% (weighted by volume, impacted by removal)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Both YYZ3 and YYZ4 formal PDF reports available on request</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <a href="/results/amazon-yyz3" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5" style={{ background: "rgba(3,116,167,0.1)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>
              Full Case Study — All 5 Charts &amp; Data <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4">
            <ChartCard
              title="Peak Monthly Water Volume (m³) — Q3 2023 Baseline vs Q3 2024 Post-Install"
              caption="YYZ3: 1,107m³ → 457m³ (58.69% reduction) · YYZ4: 3,933m³ → 3,250m³ (17.4% reduction) · Source: Amazon Case Study PDF"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={AMAZON_VOLUME} margin={{ top: 8, right: 24, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="site" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}m³`} />
                  <Tooltip content={<VolumeTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="before" name="Prior Year — Q3 2023 (m³)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="Post-Install — Q3 2024 (m³)" fill="#0374A7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY 2: Four Seasons ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <IndustryTag label="Hotels & Hospitality" href="/industries/hotels" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Luxury Hospitality · Fort Lauderdale, FL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0A1F3A" }}>Four Seasons Fort Lauderdale</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Third-party M&V completed December 2025 · Best hospitality result on record</p>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <StatPill value="26%" label="Daily Avg Water Reduction" />
            <StatPill value="56%" label="Oct Peak Single-Day Reduction" />
            <StatPill value="~$27K" label="Annual Cost Savings (USD)" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Reduction % — Daily Average vs October Peak"
              caption="Based on third-party M&V report, December 2025 · Indexed to 100% baseline"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={FOUR_SEASONS_DATA} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 65]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15% guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="reduction" name="Reduction %" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 13, fill: "#0374A7", fontWeight: 700 }}>
                    {FOUR_SEASONS_DATA.map((_, i) => <Cell key={i} fill={i === 0 ? "#0374A7" : "#3C6E7F"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-200 bg-white">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Key Facts</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>26% daily average reduction across full billing cycle</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>56% peak reduction recorded in October 2025</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>~$27,000 in avoided annual water costs</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Marriott-approved installation completed in under one hour</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Highest single-location hospitality result in the Smart Valve™ portfolio</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <a href="/results/four-seasons" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5" style={{ background: "rgba(3,116,167,0.1)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>
              Full Case Study — 4 Charts &amp; Monthly Data <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4">
            <ChartCard
              title="Annual Water Cost — Before vs After (USD)"
              caption="26% reduction on ~$103,846/yr baseline → ~$76,846/yr · saving $27,000/yr · Estimated from verified M&V"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={FOUR_SEASONS_ANNUAL} margin={{ top: 8, right: 60, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 130000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="cost" name="Annual Water Cost ($)" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: number) => `$${(v / 1000).toFixed(0)}K`, fontSize: 13, fontWeight: 700, fill: "#0A1F3A" }}>
                    {FOUR_SEASONS_ANNUAL.map((_, i) => <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY 3: Caliber Car Wash ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <IndustryTag label="Car Washes" href="/industries/car-washes" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Multi-site Network · Georgia & Florida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0A1F3A" }}>Caliber Car Wash (5-Site Portfolio)</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Independent M&V verified at each location · 3+ consecutive billing quarters · Georgia &amp; Florida</p>

          <div className="grid lg:grid-cols-2 gap-4 mb-8">
            <StatPill value="23%" label="Weighted Average Savings" />
            <StatPill value="5" label="M&V-Verified Locations" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Portfolio Weighted Average Savings"
              caption="23% weighted average · Independent M&V at each of 5 GA &amp; FL locations"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={CALIBER_DATA} margin={{ top: 8, right: 40, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="site" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15% Guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="savings" name="Savings %" fill="#0374A7" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 16, fill: "#0374A7", fontWeight: 700 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Portfolio Highlights</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>23% weighted-average savings across all 5 Georgia and Florida sites</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Every location independently measured and M&V verified — no aggregate blending</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Hard water scale reduction noted as secondary benefit at all sites</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>M&V tracked over 3+ consecutive billing quarters — no seasonal outliers</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Formal M&V report completed March 2026 — available on request</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <a href="/results/caliber-car-wash" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5" style={{ background: "rgba(3,116,167,0.1)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>
              Full Case Study <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY 4: Grand Central Tampa ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <IndustryTag label="Multifamily" href="/industries/multifamily" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Real Estate · Tampa, Florida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0A1F3A" }}>Grand Central at Kennedy</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Self-reported over 2-year period · Two 6″ Smart Valve™ units · Confirmed by General Manager</p>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <StatPill value="$50,000" label="Annual Savings (Water + Sewer)" />
            <StatPill value="23%" label="Avg Reduction vs Baseline" />
            <StatPill value='2× 6"' label="Smart Valve™ Units Installed" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Annual Water + Sewer Cost — Before vs After"
              caption="Figures approximated from 23% avg reduction on reported $217K pre-installation baseline"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={GRAND_CENTRAL_DATA} margin={{ top: 8, right: 40, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 250000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="before" name="Before Smart Valve™" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="After Smart Valve™" fill="#0374A7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-200 bg-white">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Key Facts</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>$50,000 annual reduction in the combined water and sewer line item</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>23% average vs. pre-installation baseline over 2 consecutive years</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Two 6″ Smart Valve™ units — one per master meter supply line</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Largest dollar-value savings of any single residential property on record</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Cumulative NOI Improvement — 2-Year Running Total"
              caption="$50,000/yr savings × 2 years = $100,000 cumulative water + sewer cost reduction"
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={GRAND_CUMUL} margin={{ top: 8, right: 60, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 120000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="cumulative" name="Cumulative Savings ($)" fill="#0374A7" radius={[6, 6, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `$${(v / 1000).toFixed(0)}K`, fontSize: 14, fill: "#0374A7", fontWeight: 700 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY 5: RWJ Barnabas ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <IndustryTag label="Hospitals & Healthcare" href="/industries/hospitals" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Healthcare · Livingston, New Jersey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0A1F3A" }}>RWJ Barnabas Ambulatory Care</h2>
          <p className="text-sm mb-8" style={{ color: "#4A7085" }}>Installed December 2016 · Confirmed by Facility Engineer J. Flanagan · Two 2″ Smart Valve™ units</p>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <StatPill value="$15,500" label="Annual Cost Savings" />
            <StatPill value="19%" label="Total Metered Reduction" />
            <StatPill value="<6 mo" label="Simple Payback Period" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Annual Water Cost — Before vs After"
              caption="From $72,700 → $57,200 per year · 1,533,000 gallons saved annually"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={RWJ_DATA} margin={{ top: 8, right: 40, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 90000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="cost" name="Annual Cost ($)" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: number) => `$${(v / 1000).toFixed(1)}K`, fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    {RWJ_DATA.map((e, i) => <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Key Facts</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Annual cost reduced from $72,700 to $57,200 — saving $15,500/yr</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>1,533,000 gallons saved per year — confirmed by facility engineer</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>NSF 61 & 372 certified — fully approved for healthcare and sterile-water environments</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Pressure and flow integrity confirmed — no impact on medical equipment operation</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Simple payback under 6 months from day of installation</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Daily Water Volume — Before vs After Installation"
              caption="19,625 gal/day → 15,425 gal/day · 4,200 gal saved daily · 1,533,000 gal/yr total reduction"
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={RWJ_DAILY} margin={{ top: 8, right: 60, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => v.toLocaleString()} domain={[0, 24000]} />
                  <Tooltip content={<VolumeTooltip />} />
                  <Bar dataKey="gallons" name="Daily Gallons" radius={[6, 6, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => v.toLocaleString(), fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    {RWJ_DAILY.map((_, i) => <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO BAR */}
      <section className="py-10 px-6 border-b" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4A7085" }}>Verified M&V Results</p>
        <p className="text-center text-[10px] uppercase tracking-widest mb-6" style={{ color: "#A0B5C5" }}>24 M&V-verified case studies — all reporting ≥15% savings</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-5xl mx-auto mb-8">
          {[
            { name: "Amazon", sub: "YYZ3 & YYZ4 · 43.98% YYZ3 avg / 58.69% peak" },
            { name: "Four Seasons", sub: "Fort Lauderdale · 26% avg / 56% peak" },
            { name: "St. Regis", sub: "Toronto · $49,889 CAD/yr" },
            { name: "Caliber Car Wash", sub: "5 sites · 23%" },
            { name: "Grand Central", sub: "Tampa · $50K/yr" },
            { name: "Houstonian", sub: "Estates · 16%" },
            { name: "Toronto Portfolio", sub: "1121 Steeles · 797 Don Mills · ~18–31%" },
            { name: "Chateau Tower", sub: "Tampa, FL · 16% · $11,028/yr" },
            { name: "Courtyard Apts", sub: "Hackensack, NJ · 18% · $4,549/yr" },
            { name: "451 Central Ave", sub: "Orange, NJ · 12.5% · $1,470/yr" },
            { name: "Jefferson Arms", sub: "Orange, NJ · 14.7% · $3,700/yr" },
            { name: "Houston Office", sub: "Houston, TX · 39% bill reduction · 37% GPD" },
            { name: "500 Main St", sub: "Orange, NJ · 26% · $3,566/yr" },
            { name: "Park Gardens", sub: "East Orange, NJ · 21% · $8,166/yr" },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center text-center">
              <span className="font-headline font-bold text-base tracking-tight" style={{ color: "#0A1F3A" }}>{c.name}</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: "#4A7085" }}>{c.sub}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-6" style={{ borderColor: "#C5D8E8" }}>
          <p className="text-center text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "#A0B5C5" }}>Also Installed (No Stats Published)</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-5xl mx-auto opacity-60">
            {["Linamar", "Labatt Brewing", "Guinness", "Commercial Bakeries", "Kerry Group (CA)", "Starlight Investments", "Akelius"].map((name) => (
              <span key={name} className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#4A7085" }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVE LINKS */}
      <section className="py-12 px-6" style={{ backgroundColor: "#F7FAFD" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#4A7085" }}>Full Case Study Pages — All Charts &amp; Data</p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Amazon YYZ3 & YYZ4", href: "/results/amazon-yyz3", desc: "5 charts · Q3/Q4 2024 · Year-over-year M&V · Flow rate data" },
              { label: "Four Seasons Fort Lauderdale", href: "/results/four-seasons", desc: "4 charts · Monthly breakdown · Daily + annual cost comparison" },
              { label: "St. Regis Toronto", href: "/results/st-regis-toronto", desc: "$49,889 CAD/yr · 20%+ · Marriott-approved · Chief Engineer quote" },
              { label: "Caliber Car Wash", href: "/results/caliber-car-wash", desc: "5-site portfolio · 23% avg · Hard water scale reduction · GA & FL" },
              { label: "Grand Central Tampa", href: "/results/grand-central-tampa", desc: "$50K/yr · 23% reduction · 2-year GM-confirmed · Tampa FL" },
              { label: "RWJ Barnabas Health", href: "/results/rwj-barnabas", desc: "19% reduction · $15,500/yr · <6-mo payback · Ambulatory care" },
              { label: "Toronto Multi-Residential", href: "/results/toronto-multifamily", desc: "3 properties · 15–31% avg · IPMVP Option B · CWS verified" },
              { label: "1625 Palisades Ave, NJ", href: "/results/palisades-nj", desc: "38-unit apartment · Union City, NJ · 14% reduction · $5,125/yr · 7-mo payback" },
              { label: "Park Ave Apartments, NJ", href: "/results/park-ave-nj", desc: "Mixed-use · West New York, NJ · 30% reduction · $3,100/yr · 7-mo payback" },
              { label: "Courtyard Apts, Hackensack NJ", href: "/results/courtyard-hackensack", desc: "80-unit mid-rise · Hackensack, NJ · 18% reduction · $4,549/yr · $45,490 over 10 yrs" },
              { label: "Chateau Tower Condos, Tampa FL", href: "/results/chateau-tower-fl", desc: "Condo HOA · Tampa, FL · 16% reduction · $11,028/yr · 9.2-mo payback · $45,112 5-yr profit" },
              { label: "451 Central Ave, Orange NJ", href: "/results/central-ave-nj", desc: "13-unit apartment · Orange, NJ · 12.5% reduction · $1,470/yr · 19-mo payback" },
              { label: "Jefferson Arms, Orange NJ", href: "/results/jefferson-arms-nj", desc: "28-unit apartment · Orange, NJ · 14.7% reduction · $3,700/yr · 15-mo payback" },
              { label: "Ten Story Office Building, Houston TX", href: "/results/houston-office-tx", desc: "180,000 SF multi-tenant office · Houston, TX · 39% bill reduction · 37% GPD reduction · <12-mo payback" },
              { label: "500 Main St, Orange NJ", href: "/results/orange-apartment-nj", desc: "16-unit apartment · Orange, NJ · 26% reduction · $3,566/yr · 8-mo payback" },
              { label: "Park Gardens, East Orange NJ", href: "/results/park-gardens-nj", desc: "48-unit apartment · East Orange, NJ · 21% reduction · $8,166/yr · 15-mo payback" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="block rounded-2xl p-5 border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group">
                <div className="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors" style={{ color: "#0374A7" }}>{l.label} →</div>
                <div className="text-xs" style={{ color: "#4A7085" }}>{l.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-6 px-6" style={{ backgroundColor: "#F4F8FC", borderBottom: "1px solid #C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] leading-relaxed" style={{ color: "#6A8A9A" }}>
            Results are based on verified M&V reports, third-party analyses, and customer testimonials. Individual savings vary based on property type, size, water pressure, usage patterns, and local utility rates.{" "}
            <strong>Formal M&V reports available for:</strong> Amazon (YYZ3/YYZ4), St. Regis Toronto, Four Seasons Fort Lauderdale, Caliber Car Wash (5 sites), RWJ Barnabas Health, Toronto Multi-Residential Portfolio, 1625 Palisades Avenue (Union City, NJ), and Park Avenue Apartments (West New York, NJ).{" "}
            Houstonian Estates and Grand Central at Kennedy results are self-reported customer testimonials confirmed by property management. Only installations reporting ≥14% savings are featured on this page.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #0A1F3A, #0374A7)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to see your numbers?</h2>
          <p className="text-white/80 mb-8">Get a site-specific proposal with projected savings and payback period.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/partners" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              About AWS &amp; CWS
            </a>
            <a href="/compare" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              Compare Alternatives
            </a>
            <a href="tel:7209373004" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              (720) 937-3004
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
