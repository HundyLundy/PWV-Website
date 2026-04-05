import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import {
  COURTYARD,
  COURTYARD_LABELS,
  COURTYARD_CONSUMPTION,
  COURTYARD_PER_UNIT,
  COURTYARD_MONTHLY_COST,
} from "@/data/courtyardVerified";

// ─── DATA (sourced from courtyardVerified.ts — DO NOT hardcode here) ────────

const CONSUMPTION  = COURTYARD_CONSUMPTION  as unknown as { period: string; gpd: number }[];
const PER_UNIT     = COURTYARD_PER_UNIT     as unknown as { period: string; gal: number }[];
const MONTHLY_COST = COURTYARD_MONTHLY_COST as unknown as { period: string; cost: number }[];

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

function UnitTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill }} />
          <span>{p.name}: <strong>{p.value} gal/unit/day</strong></span>
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
          <span>{p.name}: <strong>${Number(p.value).toLocaleString()}/mo</strong></span>
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

export default function CourtyardHackensack() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Courtyard Apartments, Hackensack NJ: 18% Water Reduction, $4,549/yr Saved | Smart Valve™ Case Study</title>
        <meta name="description" content="Flow Dynamics case study: Courtyard Apartments, Hackensack NJ — 80-unit mid-rise achieved 18% metered water reduction, $4,549/yr savings, 10-year projection of $45,490." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/courtyard-hackensack" />
        <meta property="og:title" content="Courtyard Apartments, Hackensack NJ: 18% Water Reduction, $4,549/yr" />
        <meta property="og:description" content="80-unit apartment, Hackensack NJ — 18% reduction, 842,928 gal/yr saved, $4,549 annual savings, $45,490 over 10 years." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/courtyard-hackensack" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Multifamily Residential · Hackensack, NJ · Installed {COURTYARD.installDate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Courtyard Apartments — Hackensack, NJ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">18% Water Reduction · $4,549/yr Saved</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            80-unit mid-rise apartment building. Municipal water supply, 3″ meter. No sewerage charge.
            Flow Dynamics M&V-verified — 11-month billing period comparison with raw meter data.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value={COURTYARD_LABELS.reduction}     label="Water Reduction"     sub="18% metered" />
            <StatPill value={COURTYARD_LABELS.gallonsSaved}  label="Gallons Saved/Year"  sub="Annualized" />
            <StatPill value={COURTYARD_LABELS.annualSavings} label="Annual Savings"       sub="Water only — no sewer charge" />
            <StatPill value={COURTYARD_LABELS.tenYear}       label="10-Year Projection"   sub="At current rates" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          <div className="grid lg:grid-cols-2 gap-6">

            <ChartCard
              title="Per-Unit Daily Consumption — Before vs After"
              caption="Before: Apr 2014–Mar 2015 · After: Apr 2015–Mar 2016 · 80 Units"
              note={`Per-unit consumption fell from ${COURTYARD_LABELS.beforePerUnit} to ${COURTYARD_LABELS.afterPerUnit} — an 18% reduction. No change in occupancy.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={PER_UNIT} margin={{ top: 10, right: 24, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} domain={[80, 170]} tickFormatter={(v) => `${v}`} />
                  <Tooltip content={<UnitTooltip />} />
                  <Bar dataKey="gal" name="Gal/Unit/Day" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `${v}`, fontSize: 14, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Total Building Daily Usage — Before vs After"
              caption="80 units × per-unit daily consumption · 3″ meter"
              note={`Total building usage dropped from ${COURTYARD_LABELS.beforeGPD} to ${COURTYARD_LABELS.afterGPD} gallons per day — ${COURTYARD_LABELS.gallonsSaved} gallons saved annually.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={CONSUMPTION} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} domain={[7000, 13000]} tickFormatter={(v) => v.toLocaleString()} />
                  <Tooltip content={<GpdTooltip />} />
                  <Bar dataKey="gpd" name="Gallons Per Day" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => Number(v).toLocaleString(), fontSize: 11, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

          </div>

          <ChartCard
            title="Average Monthly Water Cost — 11-Month Billing Comparison"
            caption="Same 11-month billing windows — one year before install vs. one year after"
            note={`Monthly water cost dropped from $${COURTYARD.avgMonthlyCostBefore.toLocaleString()} to $${COURTYARD.avgMonthlyCostAfter.toLocaleString()} — saving $${(COURTYARD.avgMonthlyCostBefore - COURTYARD.avgMonthlyCostAfter).toFixed(2)}/month · $${COURTYARD_LABELS.annualSavings}/yr annualized.`}
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={MONTHLY_COST} margin={{ top: 10, right: 60, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 11, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${v.toLocaleString()}`} domain={[1400, 2400]} />
                <Tooltip content={<DollarTooltip />} />
                <Bar dataKey="cost" name="Avg Monthly Cost" radius={[6, 6, 0, 0]} label={{ position: "top", formatter: (v: any) => `$${Number(v).toLocaleString()}`, fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                  <Cell fill="#94a3b8" />
                  <Cell fill="#0374A7" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
      </section>

      {/* FINANCIAL CALLOUT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>{COURTYARD_LABELS.reduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Water Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Metered · 18% verified</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>{COURTYARD_LABELS.annualSavings}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Annual Savings</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>{COURTYARD_LABELS.gallonsSaved} gal/yr · water only</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">{COURTYARD_LABELS.tenYear}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-white">10-Year Projection</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>At current water rates</div>
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
              { title: "11-month raw billing data — strongest possible evidence", body: "The case study uses raw water meter readings across 26 individual billing periods — 14 months before and 12 months after installation. This is IPMVP-grade measurement, not a single-period estimate." },
              { title: "18% reduction on an 80-unit mid-rise", body: `Per-unit daily consumption dropped from ${COURTYARD_LABELS.beforePerUnit} to ${COURTYARD_LABELS.afterPerUnit} — consistent across all post-install billing periods, confirming the savings are structural, not seasonal.` },
              { title: "No sewerage charge — pure water savings", body: `This property is not subject to a sewerage charge, meaning the ${COURTYARD_LABELS.annualSavings}/yr savings comes entirely from reduced water consumption. Properties with sewer charges would see proportionally higher total savings.` },
              { title: "$45,490 over 10 years at current rates", body: `At current water rates, the 10-year projection is ${COURTYARD_LABELS.tenYear}. If water rates increase (which they historically do annually), the actual savings will be higher.` },
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
              { label: "Location",       value: COURTYARD.city },
              { label: "Property Type",  value: COURTYARD.propertyType },
              { label: "Meter Size",     value: COURTYARD.meterSize },
              { label: "Install Date",   value: COURTYARD.installDate },
              { label: "Water Source",   value: COURTYARD.waterSource },
              { label: "Sewer Charge",   value: "None — water only billing" },
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
              { label: "All Case Studies",             href: "/results",                      desc: "Full M&V portfolio — Amazon, Four Seasons, Grand Central and more" },
              { label: "1625 Palisades Ave — 14%",     href: "/results/palisades-nj",         desc: "Union City, NJ · 38-unit apartment · $5,125/yr · 7-month payback" },
              { label: "451 Central Ave — 12.5%",      href: "/results/central-ave-nj",       desc: "Orange, NJ · 13-unit apartment · $1,470/yr" },
              { label: "Multifamily Industry Hub",     href: "/industries/multifamily",       desc: "Grand Central Tampa $50K/yr — master meter savings overview" },
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
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program verified at Courtyard Apartments, 1625 Palisades, Grand Central Tampa, and Toronto's multi-residential portfolio. Minimum 15% savings guaranteed in writing.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
