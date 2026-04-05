import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import {
  PARK_AVE,
  PARK_AVE_LABELS,
  PARK_AVE_CONSUMPTION,
} from "@/data/parkAveVerified";

// ─── DATA (sourced from parkAveVerified.ts — DO NOT hardcode here) ───────────

const CONSUMPTION = PARK_AVE_CONSUMPTION as unknown as { period: string; gpd: number }[];

const ANNUAL_CONTEXT = [
  { label: "Before Smart Valve™", cost: Math.round(PARK_AVE.beforeGalPerDay * 365 * PARK_AVE.utilityRatePerGal) },
  { label: "After Smart Valve™",  cost: Math.round(PARK_AVE.afterGalPerDay  * 365 * PARK_AVE.utilityRatePerGal) },
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

export default function ParkAveNJ() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>5100 Park Avenue, West New York NJ: 30% Water Reduction, $3,100/yr Saved | Smart Valve™ Case Study</title>
        <meta name="description" content="Flow Dynamics case study: 5100 Park Avenue (Park Avenue Apartments), West New York NJ — mixed-use property achieved 30% metered water reduction, $3,100/yr savings, 7-month payback." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/park-ave-nj" />
        <meta property="og:title" content="5100 Park Avenue, West New York NJ: 30% Water Reduction, $3,100/yr" />
        <meta property="og:description" content="Park Avenue Apartments, West New York NJ — 30% reduction, 285,000 gal/yr saved, $3,100 annual savings, 7-month payback." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/park-ave-nj" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Mixed-Use Residential · West New York, NJ · Installed January 2014</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Park Avenue Apartments — West New York, NJ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">30% Water Reduction · $3,100/yr Saved</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            Mixed-use apartment and commercial building on a 1-inch municipal meter.
            Flow Dynamics M&V-verified — vacancy held constant below 2.5% throughout the measurement period.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value={PARK_AVE_LABELS.reduction}      label="Water Reduction"     sub="Metered, M&V verified" />
            <StatPill value={PARK_AVE_LABELS.gallonsSaved}   label="Gallons Saved/Year"  sub="285K gal annually" />
            <StatPill value={PARK_AVE_LABELS.annualSavings}  label="Annual Savings"       sub="Water + sewer" />
            <StatPill value={PARK_AVE_LABELS.payback}        label="Payback Period"       sub="From install date" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chart 1: Daily consumption before vs after */}
            <ChartCard
              title="Daily Water Consumption — Before vs After"
              caption={`Before: Sep 2013–Jan 2014 · After: Jan–Sep 2014 · Utility rate ${PARK_AVE_LABELS.utilityRate} (water & sewer)`}
              note={`Consumption dropped from ${PARK_AVE_LABELS.beforeGPD} to ${PARK_AVE_LABELS.afterGPD} gallons per day — a ${PARK_AVE_LABELS.reduction} reduction. Vacancy remained below 2.5% throughout both measurement periods, confirming the reduction is attributable to the valve.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={CONSUMPTION} margin={{ top: 10, right: 24, left: 10, bottom: 0 }}>
                  <Tooltip content={<GpdTooltip />} />
                  <Bar dataKey="gpd" name="Gallons Per Day" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `${Number(v).toLocaleString()}`, fontSize: 12, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#94a3b8" />
                    <Cell fill="#0374A7" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Chart 2: Annualized cost comparison */}
            <ChartCard
              title="Annualized Water & Sewer Cost — Before vs After"
              caption={`Projected at ${PARK_AVE_LABELS.utilityRate} (water + sewer) · USD`}
              note={`At ${PARK_AVE_LABELS.utilityRate}, the ${PARK_AVE_LABELS.reduction} reduction saves ${PARK_AVE_LABELS.annualSavings} annually — with a ${PARK_AVE_LABELS.payback} payback on the valve investment.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={ANNUAL_CONTEXT} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
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
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>{PARK_AVE_LABELS.reduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Water Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>Metered consumption</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>{PARK_AVE_LABELS.annualSavings}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Annual Savings</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>{PARK_AVE_LABELS.gallonsSaved} gallons/yr</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">{PARK_AVE_LABELS.payback}</div>
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
              { title: "30% reduction — strongest NJ residential result", body: "5100 Park Avenue achieved a 30% metered reduction on a 1-inch municipal supply — the highest single-property percentage reduction in the New Jersey multifamily portfolio." },
              { title: "Vacancy held below 2.5% — no occupancy distortion", body: "The management company confirmed vacancy remained constant under 2.5% throughout both the pre- and post-installation measurement periods. This eliminates vacancy as a confounding variable in the savings calculation." },
              { title: "No central AC — savings are pure water efficiency", body: "The property has no central air conditioning system, which means there are no cooling tower or evaporative cooling losses in the water system. The full 30% reduction reflects direct Smart Valve™ impact on domestic water consumption." },
              { title: "7-month payback on a 1-inch installation", body: `At ${PARK_AVE_LABELS.utilityRate} combined water and sewer, the ${PARK_AVE_LABELS.annualSavings}/yr savings produced a ${PARK_AVE_LABELS.payback} return on investment — well within a single budget year.` },
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
              { label: "Location",       value: `${PARK_AVE.address}, ${PARK_AVE.city}` },
              { label: "Property Name",  value: PARK_AVE.propertyName },
              { label: "Property Type",  value: PARK_AVE.propertyType },
              { label: "Meter Size",     value: PARK_AVE.meterSize },
              { label: "Water Source",   value: PARK_AVE.waterSource },
              { label: "Utility Rate",   value: `${PARK_AVE_LABELS.utilityRate} (water & sewer)` },
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
              { label: "All Case Studies",         href: "/results",                    desc: "Full M&V portfolio — Amazon, Four Seasons, Grand Central and more" },
              { label: "Jefferson Arms — 14.7%",   href: "/results/jefferson-arms-nj",   desc: "Orange, NJ · 28-unit apartment · $3,700/yr · 15-month payback" },
              { label: "Toronto Multifamily",      href: "/results/toronto-multifamily", desc: "3 CWS-verified properties · 15–31% avg · IPMVP Option B" },
              { label: "Multifamily Industry Hub", href: "/industries/multifamily",     desc: "Grand Central Tampa $50K/yr — master meter savings overview" },
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
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program verified at 5100 Park Avenue, Grand Central Tampa, and Toronto's multi-residential portfolio. Minimum 15% savings guaranteed in writing.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
