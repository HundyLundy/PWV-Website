import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell,
} from "recharts";
import {
  RWJ_BARNABAS,
  RWJ_LABELS,
  RWJ_DAILY_USAGE,
  RWJ_ANNUAL_COST,
} from "@/data/rwjBarnabasVerified";

// ─── DATA (sourced from rwjBarnabasVerified.ts — DO NOT hardcode here) ──────

const DAILY_USAGE = RWJ_DAILY_USAGE as unknown as { period: string; gallons: number }[];
const ANNUAL_COST = RWJ_ANNUAL_COST as unknown as { label: string; cost: number }[];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function GalTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value?.toLocaleString()} gal/day</strong></span>
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
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>${p.value?.toLocaleString()}/yr</strong></span>
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

export default function RWJBarnabas() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>RWJ Barnabas Health — 19% Water Savings | Smart Valve™ Case Study | Perfect Water Valve</title>
        <meta name="description" content="RWJ Barnabas Ambulatory Care Center achieved 19% water reduction and $15,500/year savings with Smart Valve™ — payback under 6 months. Formal M&V case study." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/rwj-barnabas" />
        <meta property="og:title" content="RWJ Barnabas Health — 19% Water Savings, $15,500/yr | Smart Valve™ Case Study" />
        <meta property="og:description" content="RWJ Barnabas Ambulatory Care Center achieved 19% water reduction and $15,500/year savings with Smart Valve™ — payback under 6 months. Formal M&V case study." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/rwj-barnabas" />
        <meta property="og:image" content="https://www.perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #0374A7 100%)" }}>
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              Healthcare / Ambulatory Care
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">Livingston, New Jersey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            RWJ Barnabas Health
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            A multi-purpose ambulatory care center reduced daily water consumption by 19% — saving $15,500 per year with a payback period under 6 months.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { val: RWJ_LABELS.reduction,     label: "Water Reduction" },
              { val: RWJ_LABELS.annualSavings, label: "Annual Savings (USD)" },
              { val: RWJ_LABELS.payback,       label: "Payback Period" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl px-5 py-4 text-center" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="text-3xl font-bold mb-1">{s.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION DETAILS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Installation Details</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Property</div>
              <div className="space-y-2 text-sm" style={{ color: "#2E4A5A" }}>
                <div><strong style={{ color: "#0A1F3A" }}>Facility:</strong> Multi-Purpose Medical — Ambulatory Care Center</div>
                <div><strong style={{ color: "#0A1F3A" }}>Location:</strong> 200 S. Orange Ave, Livingston, NJ</div>
                <div><strong style={{ color: "#0A1F3A" }}>Valve Configuration:</strong> Two 2&quot; Smart Valve™ units</div>
                <div><strong style={{ color: "#0A1F3A" }}>Measurement Period:</strong> Nov 2015 – Mar 2017 (17 months)</div>
                <div><strong style={{ color: "#0A1F3A" }}>Water Rate:</strong> $7.70 per CCF</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border border-slate-100 bg-white">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Verified Results</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>19% reduction in daily water consumption</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Daily usage: 19,625 gal/day &rarr; 15,425 gal/day</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Annual cost: $72,700 &rarr; $57,200 (saves $15,500/yr)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>1,533,000 gallons saved annually</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Payback period under 6 months</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Pressure and flow met all medical equipment requirements</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Before vs After — Measured Results</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <ChartCard
              title="Daily Water Consumption (gallons/day)"
              caption="Pre-install avg: Nov 2015–Nov 2016 · Post-install avg: Dec 2016–Mar 2017"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={DAILY_USAGE} margin={{ top: 8, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 9, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} domain={[0, 25000]} />
                  <ReferenceLine y={15000} stroke="#059669" strokeDasharray="4 4" label={{ value: "After", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<GalTooltip />} />
                  <Bar dataKey="gallons" name="Gallons/Day" radius={[6, 6, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `${(v / 1000).toFixed(1)}K`, fontSize: 12, fontWeight: 700, fill: "#0374A7" }}>
                    {DAILY_USAGE.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Annual Water + Sewer Cost — Before vs After"
              caption="Based on $7.70/CCF rate · formal case study documentation"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={ANNUAL_COST} margin={{ top: 8, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 85000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="cost" name="Annual Cost" radius={[6, 6, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `$${(v / 1000).toFixed(1)}K`, fontSize: 12, fontWeight: 700, fill: "#0374A7" }}>
                    {ANNUAL_COST.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "#94a3b8" : "#0374A7"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <blockquote className="rounded-2xl p-8 border-l-4 text-lg italic leading-relaxed" style={{ background: "#F0F7FF", borderColor: "#0374A7", color: "#2E4A5A" }}>
            &ldquo;Pressure and flow met requirements for all equipment.&rdquo;
            <footer className="mt-4 text-sm font-bold not-italic" style={{ color: "#0374A7" }}>
              — J. Flanagan, Facility Engineer, RWJ Barnabas Health
            </footer>
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: "#4A7085" }}>
            Critical in healthcare environments, the Smart Valve™ was verified to maintain full pressure and flow requirements for all medical equipment — a non-negotiable requirement for ambulatory care facilities.
          </p>
        </div>
      </section>

      {/* ROI SUMMARY */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>5-Year Financial Projection</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { val: "$15,500", label: "Year 1 Savings" },
              { val: "$77,500", label: "5-Year Cumulative" },
              { val: "<6 Mo", label: "Payback Period" },
              { val: "1.53M", label: "Gallons Saved/Year" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center border border-slate-100 bg-white shadow-sm">
                <div className="text-3xl font-bold mb-1" style={{ color: "#0374A7" }}>{s.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4A7085" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTHCARE NOTE */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-5" style={{ color: "#0A1F3A" }}>Why Healthcare Facilities Are a Strong Fit</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "High 24/7 water consumption", body: "Hospitals and ambulatory centers run water-intensive operations around the clock — laundry, sterilization, HVAC, restrooms. Baseline usage is high and consistent." },
              { title: "NSF 61 certified", body: "Smart Valve™ is NSF 61 certified — meaning it meets the national standard for materials that contact potable water. Safe for medical-grade water supply lines." },
              { title: "No pressure loss — clinically verified", body: "J. Flanagan confirmed that pressure and flow met all equipment requirements. No operational disruption during or after installation." },
              { title: "Sub-6-month payback", body: "High water bills mean faster payback periods. RWJ Barnabas recovered the full valve cost in under 6 months — and continues saving over $15K annually." },
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
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #0A1F3A, #0374A7)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-3">Get a hospital-specific proposal</h2>
          <p className="text-white/80 mb-8">We&apos;ll calculate projected savings based on your facility&apos;s water bills and usage data. Proposals include payback period, 5-year ROI, and written guarantee terms.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/industries/hospitals" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              Healthcare Industry Hub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
