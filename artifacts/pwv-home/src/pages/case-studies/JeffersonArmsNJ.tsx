import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import {
  JEFFERSON_ARMS,
  JEFFERSON_ARMS_LABELS,
  JEFFERSON_ARMS_CONSUMPTION,
} from "@/data/jeffersonArmsVerified";

// ─── DATA (sourced from jeffersonArmsVerified.ts — DO NOT hardcode here) ────

const CONSUMPTION = JEFFERSON_ARMS_CONSUMPTION as unknown as { period: string; gpd: number }[];

const ANNUAL_CONTEXT = [
  { label: "Before Smart Valve™", cost: Math.round(JEFFERSON_ARMS.beforeGalPerDay * 365 / 748 * JEFFERSON_ARMS.utilityRatePerCCF) },
  { label: "After Smart Valve™",  cost: Math.round(JEFFERSON_ARMS.afterGalPerDay  * 365 / 748 * JEFFERSON_ARMS.utilityRatePerCCF) },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function GpdTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill }} />
          <span>{p.name}: <strong>{Number(p.value).toLocaleString()} gal/day</strong></span>
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
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill }} />
          <span>{p.name}: <strong>${Number(p.value).toLocaleString()}</strong></span>
        </div>
      ))}
    </div>
  );
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────

function StatPill({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center text-center px-5 py-5 rounded-2xl" style={{ background: "rgba(3,116,167,0.08)", border: "1px solid rgba(3,116,167,0.2)" }}>
      <span className="text-3xl font-black leading-none mb-1" style={{ color: "#0374A7" }}>{value}</span>
      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F3A" }}>{label}</span>
      {sub && <span className="text-[10px] mt-1" style={{ color: "#4A7085" }}>{sub}</span>}
    </div>
  );
}

function ChartCard({ title, caption, note, children }: { title: string; caption?: string; note?: string; children: React.ReactNode }) {
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

export default function JeffersonArmsNJ() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Jefferson Arms, Orange NJ: 14.7% Water Reduction, $3,700/yr Saved | Smart Valve™ Case Study</title>
        <meta name="description" content="Flow Dynamics case study: Jefferson Arms, Orange NJ — 28-unit apartment achieved 14.7% metered water reduction, $3,700/yr savings, 15-month payback." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/jefferson-arms-nj" />
        <meta property="og:title" content="Jefferson Arms, Orange NJ: 14.7% Water Reduction, $3,700/yr" />
        <meta property="og:description" content="28-unit apartment, Orange NJ — 14.7% reduction, 420,000 gal/yr saved, $3,700 annual savings, 15-month payback." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/jefferson-arms-nj" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Multifamily Residential · Orange, NJ · Flow Dynamics M&V Verified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Jefferson Arms — Orange, NJ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">14.7% Water Reduction · $3,700/yr Saved</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            28-unit apartment building. Municipal water supply, 2″ meter.
            Occupancy constant and consumption consistent throughout measurement period.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value={JEFFERSON_ARMS_LABELS.reduction}     label="Water Reduction"    sub="Metered, M&V verified" />
            <StatPill value={JEFFERSON_ARMS_LABELS.gallonsSaved}  label="Gallons Saved/Year" sub="420K gal annually" />
            <StatPill value={JEFFERSON_ARMS_LABELS.annualSavings} label="Annual Savings"      sub="Water only" />
            <StatPill value={JEFFERSON_ARMS_LABELS.payback}       label="Payback Period"      sub="From install date" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid lg:grid-cols-2 gap-6">

            <ChartCard
              title="Daily Water Consumption — Before vs After"
              caption={`Before: Jan 2013–Nov 2014 · After: Nov–Dec 2014 · Rate: ${JEFFERSON_ARMS_LABELS.utilityRate}`}
              note={`Consumption dropped from ${JEFFERSON_ARMS_LABELS.beforeGPD} to ${JEFFERSON_ARMS_LABELS.afterGPD} gallons per day — a ${JEFFERSON_ARMS_LABELS.reduction} reduction. Occupancy was constant and consumption was consistent throughout.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={CONSUMPTION} margin={{ top: 10, right: 24, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} domain={[6000, 8000]} tickFormatter={(v) => v.toLocaleString()} />
                  <Tooltip content={<GpdTooltip />} />
                  <Bar dataKey="gpd" name="Gallons Per Day" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => Number(v).toLocaleString(), fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Annualized Water Cost — Before vs After"
              caption={`Projected at ${JEFFERSON_ARMS_LABELS.utilityRate} · USD`}
              note={`At ${JEFFERSON_ARMS_LABELS.utilityRate}, a ${JEFFERSON_ARMS_LABELS.reduction} reduction on 7,400 gal/day saves approximately ${JEFFERSON_ARMS_LABELS.annualSavings} per year — 420,000 gallons annually.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={ANNUAL_CONTEXT} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(1)}K`} domain={[20000, 30000]} />
                  <Tooltip content={<DollarTooltip />} />
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
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>{JEFFERSON_ARMS_LABELS.reduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Water Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Metered consumption</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>{JEFFERSON_ARMS_LABELS.annualSavings}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Annual Savings</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>{JEFFERSON_ARMS_LABELS.gallonsSaved} gallons/yr</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">{JEFFERSON_ARMS_LABELS.payback}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-white">Payback Period</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>From installation date</div>
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
              { title: "Occupancy constant — clean measurement", body: "Occupancy was constant and water consumption was consistent throughout both measurement periods, giving the 14.7% reduction strong statistical validity with no occupancy-driven variable." },
              { title: "Long pre-install baseline — Jan 2013 to Nov 2014", body: "The pre-installation baseline spans nearly two full years, providing exceptional measurement confidence. The 21-month window eliminates seasonal variation and establishes a highly reliable average." },
              { title: "2\" meter, 28-unit building — 420,000 gallons/yr saved", body: `At ${JEFFERSON_ARMS_LABELS.utilityRate}, ${JEFFERSON_ARMS_LABELS.gallonsSaved} gallons saved annually translates to ${JEFFERSON_ARMS_LABELS.annualSavings}/yr — with a ${JEFFERSON_ARMS_LABELS.payback} payback that fits inside most HOA and management company budget cycles.` },
              { title: "Consistent with Orange NJ portfolio pattern", body: "This result joins 451 Central Ave (12.5%) and 500 Main St (26%) as a third Flow Dynamics-verified case study in Orange, NJ — confirming consistent performance across the municipality's water infrastructure." },
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

      {/* PROPERTY DETAILS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Property Details</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { label: "Location",       value: `${JEFFERSON_ARMS.address}, ${JEFFERSON_ARMS.city}` },
              { label: "Property Type",  value: JEFFERSON_ARMS.propertyType },
              { label: "Meter Size",     value: JEFFERSON_ARMS.meterSize },
              { label: "Water Source",   value: JEFFERSON_ARMS.waterSource },
              { label: "Utility Rate",   value: `${JEFFERSON_ARMS_LABELS.utilityRate} (water only)` },
              { label: "Baseline Period", value: "Jan 2013 – Nov 2014 (21 months)" },
            ].map((d) => (
              <div key={d.label} className="rounded-xl p-4 bg-white border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#4A7085" }}>{d.label}</div>
                <div className="font-semibold" style={{ color: "#0A1F3A" }}>{d.value}</div>
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
              { label: "All Case Studies",               href: "/results",                        desc: "Full M&V portfolio — Amazon, Four Seasons, Grand Central and more" },
              { label: "500 Main St Orange — 26%",       href: "/results/orange-apartment-nj",    desc: "Orange, NJ · 16-unit apartment · $3,566/yr · 8-month payback" },
              { label: "451 Central Ave Orange — 12.5%", href: "/results/central-ave-nj",         desc: "Orange, NJ · 13-unit apartment · $1,470/yr" },
              { label: "Multifamily Industry Hub",       href: "/industries/multifamily",         desc: "Grand Central Tampa $50K/yr — master meter savings overview" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Free Water Assessment for Your Multifamily Property</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program verified across Orange NJ, Hackensack NJ, Tampa FL, and Toronto. Minimum 15% savings guaranteed in writing.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
