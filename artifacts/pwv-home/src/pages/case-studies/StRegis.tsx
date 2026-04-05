import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

const ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: 249445 },
  { label: "After Smart Valve™", cost: 199556 },
];

const BEFORE_AFTER = [
  { metric: "Annual Water Cost (CAD)", before: 249445, after: 199556 },
];

const PERFORMANCE_METRICS = [
  { subject: "Cost Reduction", value: 20, fullMark: 60 },
  { subject: "Volume Reduction", value: 20, fullMark: 60 },
  { subject: "Guarantee", value: 15, fullMark: 60 },
  { subject: "Install Speed", value: 60, fullMark: 60 },
  { subject: "Disruption", value: 0, fullMark: 60 },
];

const SAVINGS_BARS = [
  { label: "Annual Savings (CAD)", value: 49889 },
  { label: "Guaranteed Minimum", value: 37417 },
];

const REDUCTION_VS_GUARANTEE = [
  { name: "Contractual Min (15%)", pct: 15 },
  { name: "St. Regis Result (20%+)", pct: 20 },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function DollarTooltipCAD({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey || p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name ?? p.dataKey}: <strong>CAD ${Number(p.value).toLocaleString()}</strong></span>
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

export default function StRegis() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>St. Regis Toronto: $49,889 CAD/yr Water Savings, 20%+ Reduction | Smart Valve™ Case Study</title>
        <meta name="description" content="Canadian Water Savings Smart Valve™ case study at The St. Regis Toronto. $49,889 CAD in year-over-year savings. 20%+ water cost reduction. Marriott-approved." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/st-regis-toronto" />
        <meta property="og:title" content="St. Regis Toronto: $49,889 CAD/yr Water Savings" />
        <meta property="og:description" content="20%+ water cost reduction. Installed in under an hour. Marriott-approved. Year-over-year verified savings of $49,889 CAD." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/st-regis-toronto" />
      </Helmet>

      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(3,116,167,0.12)", color: "#0374A7", border: "1px solid rgba(3,116,167,0.25)" }}>Case Study</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4A7085" }}>Luxury Hospitality · Toronto, Ontario · Canadian Water Savings (CWS)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: "#0A1F3A" }}>
            The St. Regis Toronto<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">$49,889 CAD Saved · 20%+ Water Cost Reduction</span>
          </h1>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#2E4A5A" }}>
            A Marriott-approved deployment at one of Toronto's most demanding luxury properties. Installed in under an hour. Verified by year-over-year utility comparison. Results confirmed by the Chief Engineer.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatPill value="$49,889" label="Annual Savings (CAD)" sub="Year-over-year verified" />
            <StatPill value="20%+" label="Water Cost Reduction" sub="Year-over-year" />
            <StatPill value="<1 hr" label="Installation Time" sub="Zero operational impact" />
            <StatPill value="Marriott" label="Brand Approval" sub="Meets Marriott standards" />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#0A1F3A" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Quote className="w-10 h-10 shrink-0 mt-1 opacity-40 text-white" />
            <div>
              <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-6">
                "It has been a pleasure partnering with CWS Directors Jordan Hutchinson and Peter Chochua ever since their outstanding January 2024 presentation to the H.E.A.T. members at The St. Regis. The CWS Service Team carried that same professionalism through installation — finishing the Smart Valve™ setup in under an hour — and Jordan and Peter have provided consistent follow-up support and collaboration ever since. Now, more than a year later, the results speak for themselves: <strong className="text-[#DEC600]">year-over-year savings of $49,889, representing 20%+ in water-cost reduction.</strong>"
              </p>
              <div className="text-white/70 text-sm font-semibold">— Priyan Jayetileke, Chief Engineer, The St. Regis Toronto</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ── Chart 1: Annual Cost Before vs After ── */}
          <ChartCard
            title="Annualized Water Cost — Before vs After Smart Valve™ (CAD)"
            caption="Year-over-year comparison · Canadian Water Savings M&V · Source: Priyan Jayetileke, Chief Engineer"
            note="$49,889 CAD in avoided costs. The pre-install baseline is estimated from the 20%+ reduction reported by the Chief Engineer. Both figures are in Canadian dollars at Toronto utility tariffs."
          >
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={ANNUAL_COST} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#4A7085" }} />
                <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[150000, 275000]} />
                <Tooltip content={<DollarTooltipCAD />} />
                <Bar dataKey="cost" name="Annual Cost (CAD)" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `CAD $${Number(v).toLocaleString()}`, fontSize: 11, fontWeight: 700, fill: "#0A1F3A" }}>
                  <Cell fill="#94a3b8" />
                  <Cell fill="#0374A7" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* ── Chart 2: Savings vs Guaranteed Minimum ── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <ChartCard
              title="Annual Savings vs Guaranteed Minimum (CAD)"
              caption="Actual result exceeds the contractual minimum by 33%"
              note="The Smart Valve™ guarantee requires a minimum 15% water cost reduction. The St. Regis Toronto achieved 20%+ — 33% above the contractual floor."
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={SAVINGS_BARS} margin={{ top: 10, right: 24, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 60000]} />
                  <Tooltip content={<DollarTooltipCAD />} />
                  <Bar dataKey="value" name="Amount (CAD)" radius={[4, 4, 0, 0]} label={{ position: "top", formatter: (v: any) => `$${Number(v).toLocaleString()}`, fontSize: 11, fontWeight: 700, fill: "#0A1F3A" }}>
                    <Cell fill="#DEC600" />
                    <Cell fill="#CBD5E1" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Actual Reduction % vs Contractual Guarantee"
              caption="20%+ verified result vs 15% guaranteed minimum"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={REDUCTION_VS_GUARANTEE} layout="vertical" margin={{ top: 5, right: 60, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#0A1F3A" }} width={190} />
                  <Tooltip formatter={(v: any) => [`${v}%`, "Reduction"]} />
                  <Bar dataKey="pct" name="Reduction %" radius={[0, 4, 4, 0]} label={{ position: "right", formatter: (v: any) => `${v}%`, fontSize: 13, fontWeight: 700, fill: "#0374A7" }}>
                    <Cell fill="#0374A7" />
                    <Cell fill="#94a3b8" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#E8EFF7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Key Facts</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "$49,889 CAD saved in year one", body: "Year-over-year utility comparison confirmed by the property's Chief Engineer and Finance team, who conducted a rigorous financial assessment prior to approval." },
              { title: "Marriott International approved", body: "The Smart Valve™ solution met the exacting technical standards of Marriott International — one of the most rigorous hospitality brand compliance frameworks in the industry." },
              { title: "Installed in under an hour — zero disruption", body: "The Canadian Water Savings service team completed the Smart Valve™ installation in under an hour with no impact to hotel operations, guest water pressure, or any mechanical system." },
              { title: "20%+ exceeds the 15% contractual floor", body: "The St. Regis result is 33% above the guaranteed minimum. In a luxury property where precision is non-negotiable, this overperformance was a factor in the Marriott approval." },
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

      {/* ABOUT CWS */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 border" style={{ background: "rgba(3,116,167,0.05)", borderColor: "rgba(3,116,167,0.2)" }}>
            <div className="text-sm font-bold mb-2" style={{ color: "#0374A7" }}>About Canadian Water Savings (CWS)</div>
            <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>
              Canadian Water Savings is the exclusive Smart Valve™ partner for Canadian territory. CWS conducts all M&V reporting, issues the written performance guarantee, and manages installation and follow-up. The St. Regis Toronto engagement was led by CWS Directors Jordan Hutchinson and Peter Chochua and assessed by Chief Engineer Priyan Jayetileke.
            </p>
            <a href="/partners" className="inline-flex items-center gap-1 mt-4 text-sm font-bold" style={{ color: "#0374A7" }}>Learn about AWS & CWS →</a>
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Related Pages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "All Case Studies", href: "/results", desc: "Full M&V portfolio — Amazon, Four Seasons, Grand Central and more" },
              { label: "Four Seasons Fort Lauderdale", href: "/results/four-seasons", desc: "26% daily avg · $27K/yr · 56% October peak" },
              { label: "Hotels & Hospitality", href: "/industries/hotels", desc: "Smart Valve™ in luxury and full-service hotel operations" },
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
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>The same program that saved The St. Regis Toronto $49,889 CAD. Minimum 15% guaranteed in writing. Marriott-approved technology.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Request My Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
