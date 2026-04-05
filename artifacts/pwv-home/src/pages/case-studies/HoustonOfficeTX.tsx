import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  HOUSTON_OFFICE,
  HOUSTON_OFFICE_LABELS,
  HOUSTON_MONTHLY_COST,
  HOUSTON_MONTHLY_GPD,
} from "@/data/houstonOfficeVerified";

// ─── DATA (sourced from houstonOfficeVerified.ts — DO NOT hardcode here) ──

const MONTHLY_COST = HOUSTON_MONTHLY_COST as unknown as { month: string; before: number; after: number }[];
const MONTHLY_GPD  = HOUSTON_MONTHLY_GPD  as unknown as { month: string; before: number; after: number }[];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function CostTooltip({ active, payload, label }: any) {
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

export default function HoustonOfficeTX() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Houston TX Office Building: 39% Bill Reduction, 37% Less Water | Smart Valve™ Case Study</title>
        <meta name="description" content="Smart Valve case study: 10-story, 180,000 SF Houston TX office building. 4-inch main meter. 39% average bill reduction, 37% daily usage reduction. Less than 12-month payback." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/houston-office-tx" />
        <meta property="og:title" content="Houston TX Office Building: 39% Water Bill Reduction, 37% Less Usage" />
        <meta property="og:description" content="180,000 SF multi-tenant office. 4-inch main meter. 39% bill reduction, 37% GPD reduction, under 12-month payback. Oct–Dec 2018 vs 2017 YOY." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/houston-office-tx" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Commercial Office · Houston, TX · Year-over-Year Verified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            Ten Story Office Building — Houston, TX<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">39% Bill Reduction · 37% Less Water · {HOUSTON_OFFICE_LABELS.costPerSF} Savings</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            {HOUSTON_OFFICE.squareFeet.toLocaleString()} SF, {HOUSTON_OFFICE.stories}-story multi-tenant commercial office. {HOUSTON_OFFICE.mainValveSize} main meter + {HOUSTON_OFFICE.irrigValveSize} irrigation meter.
            Year-over-year comparison: Oct–Dec 2018 vs Oct–Dec 2017.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value={HOUSTON_OFFICE_LABELS.billReduction}  label="Bill Reduction"       sub="39% average, Oct–Dec YOY" />
            <StatPill value={HOUSTON_OFFICE_LABELS.gpdReduction}   label="Daily Usage Reduction" sub="37% average, gallons/day" />
            <StatPill value={HOUSTON_OFFICE_LABELS.payback}        label="Payback Period"         sub="Less than 12 months" />
            <StatPill value={HOUSTON_OFFICE_LABELS.costPerSF}      label="Reduction in W+S Cost"  sub="Per square foot per year" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">

            <ChartCard
              title="Monthly Water Bill — 2017 vs 2018 (4-inch Main Meter)"
              caption="Oct–Dec 2017 (before) vs Oct–Dec 2018 (after) · Main meter only"
              note={`Average monthly bill dropped from ${HOUSTON_OFFICE_LABELS.avgBeforeCost} to ${HOUSTON_OFFICE_LABELS.avgAfterCost} — a 39% reduction. Oct savings alone: $2,014/month.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={MONTHLY_COST} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(1)}K`} domain={[0, 5500]} />
                  <Tooltip content={<CostTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="before" name="2017 (Before)"  fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after"  name="2018 (After)"   fill="#0374A7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Daily Water Usage — 2017 vs 2018 (4-inch Main Meter)"
              caption="Oct–Dec 2017 (before) vs Oct–Dec 2018 (after) · Gallons per day"
              note={`Average daily usage dropped from ${HOUSTON_OFFICE_LABELS.avgBeforeGPD} to ${HOUSTON_OFFICE_LABELS.avgAfterGPD} gal/day — a 37% reduction.`}
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={MONTHLY_GPD} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} domain={[0, 18000]} />
                  <Tooltip content={<GpdTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="before" name="2017 (Before)"  fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after"  name="2018 (After)"   fill="#0374A7" radius={[4, 4, 0, 0]} />
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
              <div className="text-4xl font-black mb-2" style={{ color: "#0374A7" }}>{HOUSTON_OFFICE_LABELS.billReduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Avg Bill Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>{HOUSTON_OFFICE_LABELS.avgBeforeCost} → {HOUSTON_OFFICE_LABELS.avgAfterCost}/mo</div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-200 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>{HOUSTON_OFFICE_LABELS.gpdReduction}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0A1F3A" }}>Daily Usage Reduction</div>
              <div className="text-xs" style={{ color: "#4A7085" }}>{HOUSTON_OFFICE_LABELS.avgBeforeGPD} → {HOUSTON_OFFICE_LABELS.avgAfterGPD} gal/day</div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: "#0374A7" }}>
              <div className="text-4xl font-black mb-2 text-white">{HOUSTON_OFFICE_LABELS.costPerSF}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-white">Water + Sewer Reduction</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>Per square foot, per year</div>
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
              { title: "39% bill reduction on a 4-inch commercial meter", body: `The three-month year-over-year comparison (Oct–Dec 2018 vs 2017) showed average monthly bills drop from ${HOUSTON_OFFICE_LABELS.avgBeforeCost} to ${HOUSTON_OFFICE_LABELS.avgAfterCost} — a 39% reduction in water and sewer cost across all three months.` },
              { title: "Office buildings provide exceptionally clean measurement", body: "The report notes that office building tenants have more consistent water consumption patterns than irrigation meters. This makes the 37%/39% result highly reliable — occupancy-driven variation is minimal in a commercial multi-tenant setting." },
              { title: "$0.10/SF/year — a metric CFOs understand", body: `For a 180,000 SF building, ${HOUSTON_OFFICE_LABELS.costPerSF} reduction in water and sewer cost represents $18,000/year in recovered operating expense — making this a compelling line item for NNN lease and asset management discussions.` },
              { title: "Irrigation meter also achieved 40% bill reduction", body: `A separate ${HOUSTON_OFFICE.irrigation.valveSize} valve on the irrigation meter achieved a ${HOUSTON_OFFICE_LABELS.irrigBill} bill reduction and ${HOUSTON_OFFICE_LABELS.irrigGPD} daily usage reduction — also with a payback under 12 months.` },
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

      {/* MONTHLY DETAIL TABLE */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Monthly Detail — 4″ Main Meter</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#0A1F3A", color: "white" }}>
                  <th className="text-left px-5 py-3 font-semibold">Month</th>
                  <th className="text-right px-5 py-3 font-semibold">2017 Cost</th>
                  <th className="text-right px-5 py-3 font-semibold">2018 Cost</th>
                  <th className="text-right px-5 py-3 font-semibold">2017 Gal/Day</th>
                  <th className="text-right px-5 py-3 font-semibold">2018 Gal/Day</th>
                </tr>
              </thead>
              <tbody>
                {HOUSTON_OFFICE.monthly.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3 font-medium" style={{ color: "#0A1F3A" }}>{row.month}</td>
                    <td className="px-5 py-3 text-right" style={{ color: "#4A7085" }}>${row.before.costUSD.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right font-bold" style={{ color: "#0374A7" }}>${row.after.costUSD.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right" style={{ color: "#4A7085" }}>{row.before.gpd.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right font-bold" style={{ color: "#0374A7" }}>{row.after.gpd.toLocaleString()}</td>
                  </tr>
                ))}
                <tr style={{ background: "#E8EFF7" }}>
                  <td className="px-5 py-3 font-bold" style={{ color: "#0A1F3A" }}>Average</td>
                  <td className="px-5 py-3 text-right font-bold" style={{ color: "#4A7085" }}>$3,857</td>
                  <td className="px-5 py-3 text-right font-bold" style={{ color: "#0374A7" }}>$2,363</td>
                  <td className="px-5 py-3 text-right font-bold" style={{ color: "#4A7085" }}>12,262</td>
                  <td className="px-5 py-3 text-right font-bold" style={{ color: "#0374A7" }}>7,784</td>
                </tr>
                <tr style={{ background: "#0374A7" }}>
                  <td className="px-5 py-3 font-bold text-white">YOY Reduction</td>
                  <td className="px-5 py-3 text-right text-white/60" colSpan={1}></td>
                  <td className="px-5 py-3 text-right font-black text-white">−39%</td>
                  <td className="px-5 py-3 text-right text-white/60" colSpan={1}></td>
                  <td className="px-5 py-3 text-right font-black text-white">−37%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IRRIGATION NOTE */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 border" style={{ background: "rgba(3,116,167,0.05)", borderColor: "rgba(3,116,167,0.2)" }}>
            <div className="text-sm font-bold mb-2" style={{ color: "#0374A7" }}>Irrigation Meter — 2″ Valve (Separate)</div>
            <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>
              A separate {HOUSTON_OFFICE.irrigation.valveSize} Smart Valve on the irrigation meter achieved a <strong>{HOUSTON_OFFICE_LABELS.irrigBill} bill reduction</strong> and <strong>{HOUSTON_OFFICE_LABELS.irrigGPD} daily usage reduction</strong> over a two-month sample (Jun–Jul 2017 vs Jun–Jul 2018), also with a payback under 12 months. As the report notes, irrigation results can be influenced by scheduling changes — the main meter's 37%/39% is the primary verified figure.
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
              { label: "All Case Studies",              href: "/results",               desc: "Full M&V portfolio — Amazon, Four Seasons, Grand Central and more" },
              { label: "Grand Central Tampa — 25%",     href: "/results/grand-central-tampa", desc: "Commercial 14-story · Tampa, FL · $50,000/yr savings" },
              { label: "All Industries",               href: "/industries",                  desc: "Multifamily, hotels, car washes, hospitals, data centers and more" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Free Water Assessment for Your Commercial Building</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Same program, same guarantee. Minimum 15% water savings in writing. Works on 1″ through 8″ meters.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
