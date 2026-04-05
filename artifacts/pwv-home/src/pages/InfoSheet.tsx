import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import phantomVolumeSrc from "@assets/Screenshot_2026-04-04_at_11.06.35_PM_1775365598095.png";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, Legend,
} from "recharts";
import { AMAZON_LABELS, AMAZON_QUARTERLY_CHART as AMAZON_QUARTERLY } from "@/data/amazonVerified";
// All Amazon figures → edit @/data/amazonVerified.ts (not this file)

// ─── DATA ──────────────────────────────────────────────────────────────────

const TOP_STATS = [
  { val: AMAZON_LABELS.guarantee, label: "Guaranteed Minimum", sub: "In writing — in your contract" },
  { val: AMAZON_LABELS.peak, label: "Peak Verified Savings", sub: "Amazon YYZ3 — independently measured" },
  { val: "20%+", label: "Portfolio Average", sub: "Across 20+ documented installations" },
  { val: "$50K+", label: "Max Annual Savings", sub: "Per location, per year (Grand Central Tampa)" },
];

const HOTEL_DATA = [
  { name: "Four Seasons\nFt Lauderdale\nDaily Avg", pct: 26 },
  { name: "Four Seasons\nOct Peak", pct: 56 },
  { name: "St. Regis\nToronto Avg", pct: 20 },
];

const MULTIFAMILY_DATA = [
  { name: "Grand Central\nTampa FL", pct: 23 },
  { name: "Houstonian\nEstates TX", pct: 16 },
  { name: "1121 Steeles Ave\nToronto ON", pct: 31 },
  { name: "797 Don Mills\nToronto ON", pct: 18 },
  { name: "Orange Apt Bldg\nOrange NJ", pct: 26 },
  { name: "Park Gardens\nE. Orange NJ", pct: 21 },
];

const CARWASH_DATA = [
  { site: "Caliber Portfolio\nWeighted Avg", savings: 23 },
];

const HOSPITAL_DATA = [
  { period: "Before", cost: 72700 },
  { period: "After", cost: 57200 },
];

const INDUSTRY_COMPARISON = [
  { industry: "Car Washes", avg: 23 },
  { industry: "Hospitality", avg: 22 },
  { industry: "Multifamily", avg: 21 },
  { industry: "Food & Bev", avg: 17 },
  { industry: "Industrial", avg: 17 },
  { industry: "Logistics / DC", avg: 29.3 },
];

// ─── SHARED COMPONENTS ─────────────────────────────────────────────────────

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

function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="rounded-2xl p-6 text-center border border-slate-100 shadow-sm bg-white">
      <div className="text-4xl font-bold mb-1" style={{ color: "#0374A7" }}>{value}</div>
      <div className="font-semibold text-sm mb-1" style={{ color: "#0A1F3A" }}>{label}</div>
      <div className="text-xs" style={{ color: "#4A7085" }}>{sub}</div>
    </div>
  );
}

function IndustrySectionHeader({ label, href, subtitle }: { label: string; href: string; subtitle: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-8">
      <div>
        <a href={href}
          className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold hover:underline underline-offset-4 transition-colors group"
          style={{ color: "#0374A7" }}>
          {label}
          <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
        <p className="text-sm mt-1" style={{ color: "#4A7085" }}>{subtitle}</p>
      </div>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 py-2 border-b border-slate-100 last:border-0">
      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#059669" }} />
      <span className="text-sm font-semibold w-48 shrink-0" style={{ color: "#0374A7" }}>{label}</span>
      <span className="text-sm font-bold" style={{ color: "#0A1F3A" }}>{value}</span>
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

export default function InfoSheet() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Smart Valve™ Info Sheet — Verified Savings Data & Specifications | Perfect Water Valve</title>
        <meta name="description" content="Full Smart Valve™ data sheet: verified M&V results from Amazon, Four Seasons, RWJ Barnabas and more. Device specs, certifications, how it works, and the written guarantee explained." />
        <link rel="canonical" href="https://perfectwatervalve.com/infosheet" />
        <meta property="og:title" content="Smart Valve™ Info Sheet — Verified Savings Data & Specifications | Perfect Water Valve" />
        <meta property="og:description" content="Full Smart Valve™ data sheet: verified M&V results from Amazon, Four Seasons, RWJ Barnabas and more. Device specs, certifications, how it works, and the written guarantee explained." />
        <meta property="og:url" content="https://perfectwatervalve.com/infosheet" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "#E8EFF7" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-5">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-12 h-12 object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0374A7" }}>
            Smart Valve™ Industry Performance Data
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 leading-tight" style={{ color: "#0A1F3A" }}>
            Industry-by-Industry Results
          </h1>
          <p className="text-base max-w-xl mx-auto mb-7" style={{ color: "#2E4A5A" }}>
            Verified field data organized by sector. Click any industry heading to view the full hub page.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:7209373004" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm shadow" style={{ background: "#0374A7" }}>
              <Phone className="w-4 h-4" /> (720) 937-3004
            </a>
            <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2" style={{ borderColor: "#0374A7", color: "#0374A7" }}>
              <Mail className="w-4 h-4" /> info@perfectwatervalve.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* KEY STATS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8" style={{ color: "#0A1F3A" }}>Portfolio-Wide Performance Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TOP_STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <StatCard value={s.val} label={s.label} sub={s.sub} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHANTOM VOLUME EXPLAINED ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#0A1F3A" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: "rgba(92,191,224,0.15)", color: "#5BBFE0" }}>
              The Root Cause of Inflated Water Bills
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Phantom Volume — Why You Pay for Air</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              City water travels at ≈250 psi in distribution mains, keeping dissolved air fully compressed.
              At your building's PRV or pressure regulator, the line drops to 50–110 psi — creating an instant
              decompression zone. Air expands 4–5× its compressed volume, forming millions of micro-bubbles
              that displace water yet still spin the turbine or piston inside your meter. You're billed for air
              as if it were water. Smart Valve™ maintains upstream compression to prevent this.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-3xl">
            <img
              src={phantomVolumeSrc}
              alt="Phantom Volume diagram showing how air expansion inflates water meter readings"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: "City Main Pressure", value: "≈250 psi", desc: "Air stays compressed — fully dissolved in water" },
              { label: "Decompression Drop", value: "50–110 psi", desc: "At PRV/regulator — air expands 4–5× volume" },
              { label: "Meter Inflation", value: "Phantom Volume", desc: "Bubbles spin meter without delivering real water" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5 border border-white/10 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#5BBFE0" }}>{item.label}</div>
                <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-xs text-white/50">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA CENTERS ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-6xl mx-auto">
          <IndustrySectionHeader
            label="Data Centers"
            href="/industries/data-centers"
            subtitle="Amazon YYZ3 & YYZ4 · Brampton, Ontario · Installed June 2024 · IPMVP Option B"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>{AMAZON_LABELS.peak}</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>YYZ3 Peak (Q3 2024 YOY)</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>{AMAZON_LABELS.yyz3Avg}</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>YYZ3 Q3/Q4 2024 Average</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>{AMAZON_LABELS.portfolioAvg}</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Portfolio Avg — YYZ3 & YYZ4</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>2</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Independent M&V Methodologies</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Quarterly Savings % — YYZ3 vs YYZ4"
              caption="Blue = YYZ3 · Teal = YYZ4 · Red = below-baseline quarters · Green dashed = ≥15% guarantee"
            >
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={AMAZON_QUARTERLY} margin={{ top: 8, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[-20, 65]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <ReferenceLine y={0} stroke="#cbd5e1" />
                  <Tooltip content={<PctTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="YYZ3" name="YYZ3" radius={[3, 3, 0, 0]}>
                    {AMAZON_QUARTERLY.map((e, i) => <Cell key={i} fill={e.YYZ3 >= 0 ? "#0374A7" : "#ef4444"} />)}
                  </Bar>
                  <Bar dataKey="YYZ4" name="YYZ4" radius={[3, 3, 0, 0]}>
                    {AMAZON_QUARTERLY.map((e, i) => <Cell key={i} fill={e.YYZ4 >= 0 ? "#3C6E7F" : "#fca5a5"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <div className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Verified Data Points</div>
              <DataRow label="Peak reduction" value="58.69% — YYZ3, Q3 2024 (YOY)" />
              <DataRow label="YYZ3 Q3/Q4 avg" value="43.98% year-over-year" />
              <DataRow label="YYZ4 Q3/Q4 avg" value="14.6% (Q4 impacted by valve removal)" />
              <DataRow label="M&V standard" value="IPMVP Option B (Retrofit Isolation)" />
              <DataRow label="Monitoring period" value="Q3 2024 & Q4 2024 (year-over-year)" />
              <DataRow label="YYZ4 Q4 note" value="Valve removed Sept 5, reinstalled Oct 25" />
              <DataRow label="PDF available" value="Yes — formal report on request" />
              <a href="/industries/data-centers" className="inline-flex items-center gap-1 mt-4 text-sm font-bold hover:underline" style={{ color: "#0374A7" }}>
                Data Centers hub page <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOTELS & HOSPITALITY ─────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <IndustrySectionHeader
            label="Hotels & Hospitality"
            href="/industries/hotels"
            subtitle="Four Seasons Fort Lauderdale · St. Regis Toronto · Marriott-approved installation"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>26%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Four Seasons Daily Avg</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>56%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Four Seasons Oct Peak</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>$49,889</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>St. Regis Annual (CAD)</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>20%+</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>St. Regis Reduction</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Reduction % — Four Seasons Ft Lauderdale & St. Regis Toronto"
              caption="Four Seasons: third-party M&V Dec 2025 · St. Regis: chief engineer confirmed"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={HOTEL_DATA} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 65]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="pct" name="Reduction %" radius={[5, 5, 0, 0]} label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 12, fill: "#0374A7", fontWeight: 700 }}>
                    {HOTEL_DATA.map((_, i) => <Cell key={i} fill={["#0374A7", "#3C6E7F", "#5BBFE0"][i % 3]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <div className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Verified Data Points</div>
              <DataRow label="Four Seasons avg" value="26% daily reduction" />
              <DataRow label="Four Seasons peak" value="56% (October 2025)" />
              <DataRow label="Four Seasons savings" value="~$27,000/yr (USD)" />
              <DataRow label="St. Regis annual" value="$49,889 CAD saved" />
              <DataRow label="St. Regis reduction" value="20%+ YOY" />
              <DataRow label="Installation time" value="Under 1 hour (Marriott-approved)" />
              <a href="/industries/hotels" className="inline-flex items-center gap-1 mt-4 text-sm font-bold hover:underline" style={{ color: "#0374A7" }}>
                Hotels & Hospitality hub <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MULTIFAMILY ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-6xl mx-auto">
          <IndustrySectionHeader
            label="Multifamily"
            href="/industries/multifamily"
            subtitle="Grand Central Tampa · Houstonian Estates · Toronto Multi-Residential Portfolio · IPMVP Option B"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>$50K/yr</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Grand Central Tampa</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>15–31%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Toronto Portfolio Range</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>31%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>1121 Steeles Ave Peak</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>p&lt;0.01</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Statistical Significance</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Savings % by Property"
              caption="Grand Central & Houstonian: self-reported GM testimonials · Toronto Portfolio: IPMVP Option B, 95% confidence"
            >
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={MULTIFAMILY_DATA} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 35]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="pct" name="Reduction %" fill="#0374A7" radius={[5, 5, 0, 0]} label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 12, fill: "#0374A7", fontWeight: 700 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <div className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Verified Data Points</div>
              <DataRow label="Grand Central Tampa" value="23% avg · $50K/yr · 2 yrs" />
              <DataRow label="Houstonian Estates" value="16% · 6,000 gal/day saved" />
              <DataRow label="1121 Steeles Ave (TO)" value="31% avg · 6 months · IPMVP" />
              <DataRow label="797 Don Mills Rd (TO)" value="18% avg · 5 months · IPMVP" />
              <DataRow label="21 & 23 Carlton St (TO)" value="15%+ trend reversal · IPMVP" />
              <DataRow label="M&V methodology" value="IPMVP Option B · 95% confidence" />
              <a href="/industries/multifamily" className="inline-flex items-center gap-1 mt-4 text-sm font-bold hover:underline" style={{ color: "#0374A7" }}>
                Multifamily hub <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAR WASHES ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <IndustrySectionHeader
            label="Car Washes"
            href="/industries/car-washes"
            subtitle="Caliber Car Wash — 5 sites in Georgia & Florida · Independent M&V · 3+ quarters"
          />
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>23%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Weighted Average (5 sites)</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>5</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Independently Verified Sites</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>&gt;20%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Minimum at Any Single Site</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Savings % per Site — Caliber Car Wash Portfolio"
              caption="Independent M&V at each location · Georgia (Sites 1–2) · Florida (Sites 3–5)"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={CARWASH_DATA} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="site" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="savings" name="Savings %" fill="#0374A7" radius={[5, 5, 0, 0]} label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 12, fill: "#0374A7", fontWeight: 700 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <div className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Verified Data Points</div>
              <DataRow label="Weighted avg" value="23% across all 5 sites" />
              <DataRow label="Monitoring period" value="3+ consecutive quarters" />
              <DataRow label="Range" value="21%–24% (no site below 20%)" />
              <DataRow label="Site geography" value="2 Georgia · 3 Florida" />
              <DataRow label="Secondary benefit" value="Hard water scale reduction at all sites" />
              <DataRow label="M&V PDF" value="Available on request" />
              <a href="/industries/car-washes" className="inline-flex items-center gap-1 mt-4 text-sm font-bold hover:underline" style={{ color: "#0374A7" }}>
                Car Washes hub <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOSPITALS & HEALTHCARE ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-6xl mx-auto">
          <IndustrySectionHeader
            label="Hospitals & Healthcare"
            href="/industries/hospitals"
            subtitle="RWJ Barnabas Ambulatory Care · Livingston, NJ · Installed December 2016 · NSF 61 & 372"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>$15,500</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Annual Cost Savings</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>19%</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Total Metered Reduction</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>1.53M</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Gallons Saved Per Year</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white border border-slate-200">
              <div className="text-2xl font-bold" style={{ color: "#0374A7" }}>&lt;6 mo</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "#4A7085" }}>Simple Payback Period</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Annual Water Cost — Before vs After (RWJ Barnabas)"
              caption="$72,700 → $57,200 per year · Confirmed by Facility Engineer J. Flanagan"
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={HOSPITAL_DATA} margin={{ top: 8, right: 40, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 90000]} />
                  <Tooltip content={({ active, payload, label }: any) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: "#fff", border: "1px solid #e0e0e0" }}>
                        <div className="font-bold mb-1">{label}</div>
                        <div style={{ color: "#0374A7" }}>Annual cost: <strong>${payload[0].value?.toLocaleString()}</strong></div>
                      </div>
                    );
                  }} />
                  <Bar dataKey="cost" name="Annual Cost ($)" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: number) => `$${(v / 1000).toFixed(1)}K`, fontSize: 13, fontWeight: 700, fill: "#0A1F3A" }}>
                    {HOSPITAL_DATA.map((_, i) => <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <div className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm font-bold mb-3" style={{ color: "#0A1F3A" }}>Verified Data Points</div>
              <DataRow label="Annual cost before" value="$72,700" />
              <DataRow label="Annual cost after" value="$57,200 (-$15,500)" />
              <DataRow label="Volume reduction" value="19% metered" />
              <DataRow label="Gallons saved" value="1,533,000 per year" />
              <DataRow label="Payback period" value="Under 6 months" />
              <DataRow label="Certifications" value="NSF 61 · NSF 372 (drinking water safe)" />
              <DataRow label="Compliance" value="ASHRAE 188/514 · Joint Commission ready" />
              <a href="/industries/hospitals" className="inline-flex items-center gap-1 mt-4 text-sm font-bold hover:underline" style={{ color: "#0374A7" }}>
                Hospitals & Healthcare hub <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-INDUSTRY COMPARISON CHART */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#0374A7" }}>Cross-Industry Portfolio</p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#0A1F3A" }}>Average Savings by Industry (%)</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#2E4A5A" }}>
              Average independently verified savings rates across all documented Smart Valve™ installations.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={INDUSTRY_COMPARISON} layout="vertical" margin={{ top: 0, right: 70, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                <YAxis type="category" dataKey="industry" tick={{ fontSize: 12, fill: "#0A1F3A", fontWeight: 600 }} width={130} />
                <ReferenceLine x={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "top", fontSize: 9, fill: "#059669" }} />
                <Tooltip content={({ active, payload, label }: any) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: "#fff", border: "1px solid #e0e0e0" }}>
                      <div className="font-bold mb-1">{label}</div>
                      <div style={{ color: "#0374A7" }}>Avg savings: <strong>{payload[0].value}%</strong></div>
                    </div>
                  );
                }} />
                <Bar dataKey="avg" name="Avg Savings %" fill="#0374A7" radius={[0, 5, 5, 0]} label={{ position: "right", formatter: (v: number) => `${v}%`, fontSize: 12, fill: "#0374A7", fontWeight: 700 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center mt-3 uppercase tracking-widest" style={{ color: "#4A7085" }}>
            Figures represent verified averages across documented installations · ≥15% is the contractual floor for all installations
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center" style={{ background: "linear-gradient(135deg, #0A1F3A, #0374A7)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Site-Specific Proposal</h2>
          <p className="text-white/80 mb-7 text-sm">ROI calculator + projected savings by facility type. No commitment required.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all text-sm">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/results/" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all text-sm">
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
