import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import {
  CHATEAU_TOWER,
  CHATEAU_TOWER_LABELS,
  CHATEAU_TOWER_QUOTE,
  CHATEAU_TOWER_MONTHLY_CHART,
} from "@/data/chateauTowerVerified";

// ─── DATA (sourced from chateauTowerVerified.ts — DO NOT hardcode here) ────

const MONTHLY_CHART = CHATEAU_TOWER_MONTHLY_CHART as unknown as { label: string; gallons: number }[];

const ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: Math.round(CHATEAU_TOWER.beforeMonthlyGal * 12 / 748 * (CHATEAU_TOWER.annualSavings / (CHATEAU_TOWER.beforeMonthlyGal * 12 * CHATEAU_TOWER.reductionPct / 100 / 748))) },
  { label: "After Smart Valve™",  cost: Math.round(CHATEAU_TOWER.beforeMonthlyGal * 12 / 748 * (CHATEAU_TOWER.annualSavings / (CHATEAU_TOWER.beforeMonthlyGal * 12 * CHATEAU_TOWER.reductionPct / 100 / 748)) - CHATEAU_TOWER.annualSavings) },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function GalTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill }} />
          <span>{p.name}: <strong>{Number(p.value).toLocaleString()} gal/mo</strong></span>
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

export default function ChateauTowerFL() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Chateau Tower Condominiums, Tampa FL: 16% Water Reduction, $11,028/yr Saved | Smart Valve™ Case Study</title>
        <meta name="description" content="Flow Dynamics case study: Chateau Tower Condominiums near Tampa, Florida — HOA condominium achieved 16% water & sewer reduction, $11,028/yr savings, 9.2-month payback." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/chateau-tower-fl" />
        <meta property="og:title" content="Chateau Tower Condominiums, Tampa FL: 16% Reduction, $11,028/yr" />
        <meta property="og:description" content="Condominium HOA, near Tampa, FL — 16% reduction, $11,028 annual savings, 9.2-month payback, $45,112 5-year profit." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/chateau-tower-fl" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Condominium HOA · Tampa, Florida · Installed {CHATEAU_TOWER.installMonth}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Chateau Tower Condominiums — Tampa, FL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">16% Water Reduction · $11,028/yr Saved</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            Condominium HOA on a 3″ Smart Valve™. Savings realized immediately on first bill.
            Installed and verified by energy efficiency consultants Gone Green Earth.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value={CHATEAU_TOWER_LABELS.reduction}      label="Water Reduction"    sub="Immediate — first bill" />
            <StatPill value={CHATEAU_TOWER_LABELS.annualSavings}  label="Annual Savings"      sub="Water + sewer" />
            <StatPill value={CHATEAU_TOWER_LABELS.payback}        label="Payback Period"      sub="Return on investment" />
            <StatPill value={CHATEAU_TOWER_LABELS.fiveYearProfit} label="5-Year Net Profit"   sub="After valve cost" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid lg:grid-cols-2 gap-6">

            <ChartCard
              title="Monthly Water Usage — Before vs After"
              caption="Before: 550,000 gal/month · After: 462,000 gal/month · 3″ Smart Valve™"
              note={`A ${CHATEAU_TOWER_LABELS.reduction} reduction on ${CHATEAU_TOWER_LABELS.beforeMonthly} delivers ${CHATEAU_TOWER_LABELS.annualSavings} in annual water & sewer savings.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={MONTHLY_CHART} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} domain={[400000, 600000]} />
                  <Tooltip content={<GalTooltip />} />
                  <Bar dataKey="gallons" name="Gallons/Month" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `${(Number(v) / 1000).toFixed(0)}K`, fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100 bg-white flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold mb-5" style={{ color: "#0A1F3A" }}>5-Year Financial Summary</div>
                <div className="space-y-4">
                  {[
                    { label: "Annual Water + Sewer Savings", value: CHATEAU_TOWER_LABELS.annualSavings, color: "#059669" },
                    { label: "Simple Payback Period",         value: CHATEAU_TOWER_LABELS.payback,       color: "#0374A7" },
                    { label: "5-Year Net Profit",             value: CHATEAU_TOWER_LABELS.fiveYearProfit, color: "#DEC600" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                      <span className="text-sm" style={{ color: "#2E4A5A" }}>{s.label}</span>
                      <span className="text-xl font-black" style={{ color: s.color }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] mt-4 uppercase tracking-widest" style={{ color: "#A0B5C5" }}>3″ Smart Valve™ · Installed July 2020 · HOA confirmed</p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#0A1F3A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 mx-auto mb-4 opacity-40 text-white" />
          <blockquote className="text-xl font-light text-white leading-relaxed mb-4">
            "{CHATEAU_TOWER_QUOTE.text}"
          </blockquote>
          <p className="text-sm font-semibold" style={{ color: "#DEC600" }}>— {CHATEAU_TOWER_QUOTE.attribution}</p>
        </div>
      </section>

      {/* FINANCIAL CALLOUT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>{CHATEAU_TOWER_LABELS.reduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Water Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Immediate — first bill</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>{CHATEAU_TOWER_LABELS.annualSavings}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Annual Savings</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Water + sewer combined</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">{CHATEAU_TOWER_LABELS.payback}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-white">Payback Period</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>Full ROI in under 10 months</div>
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
              { title: "16% savings realized on first bill", body: "Savings were immediate — the first bill after the July 2020 installation already reflected the full 16% reduction. No adjustment period or break-in required." },
              { title: "No pressure change detected by residents", body: "Despite a 16% reduction in metered consumption, no change in water pressure was detected by residents — confirming that the Smart Valve™ eliminates over-spinning without affecting supply." },
              { title: "9.2-month ROI on a 3″ installation", body: `At ${CHATEAU_TOWER_LABELS.annualSavings}/yr savings, the HOA recovered the full valve cost in just ${CHATEAU_TOWER_LABELS.payback} — making this the fastest payback of any HOA deployment in this case study portfolio.` },
              { title: "$45,112 net profit over 5 years", body: `The 5-year profit of ${CHATEAU_TOWER_LABELS.fiveYearProfit} accounts for the valve purchase price, making this a straightforward infrastructure investment with a confirmed positive return.` },
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
              { label: "Location",       value: CHATEAU_TOWER.city },
              { label: "Property Type",  value: CHATEAU_TOWER.propertyType },
              { label: "Valve Size",     value: CHATEAU_TOWER.valveSize },
              { label: "Install Date",   value: CHATEAU_TOWER.installMonth },
              { label: "Consulting Partner", value: CHATEAU_TOWER.partner },
              { label: "Before Usage",   value: CHATEAU_TOWER_LABELS.beforeMonthly },
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
              { label: "Grand Central Tampa — 23%",    href: "/results/grand-central-tampa",   desc: "Tampa, FL · $50K/yr · 2-year GM-confirmed multifamily" },
              { label: "Courtyard Apts — 18%",         href: "/results/courtyard-hackensack",  desc: "Hackensack, NJ · 80-unit mid-rise · $4,549/yr" },
              { label: "Multifamily Industry Hub",     href: "/industries/multifamily",        desc: "Master meter savings — overview for all property types" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Free Water Assessment for Your HOA or Condo</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program verified at Chateau Tower, Grand Central Tampa, and Toronto's multi-residential portfolio. Minimum 15% savings guaranteed in writing.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
