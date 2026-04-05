import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

const ANNUAL_SAVINGS = [
  { year: "Year 1", before: 240000, after: 190000 },
  { year: "Year 2", before: 240000, after: 190000 },
];

const CUMULATIVE = [
  { year: "Year 1", cumulative: 50000 },
  { year: "Year 2", cumulative: 100000 },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function DollarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>${p.value?.toLocaleString()}</strong></span>
        </div>
      ))}
    </div>
  );
}

function CumulTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.color }} />
          <span>{p.name}: <strong>${p.value?.toLocaleString()}</strong></span>
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

export default function GrandCentralTampa() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Grand Central at Kennedy — $50,000/yr Water Savings | Smart Valve™ Case Study | Perfect Water Valve</title>
        <meta name="description" content="Grand Central at Kennedy in Tampa, FL cut water and sewer costs by 23% — saving $50,000 per year with two 6-inch Smart Valve™ units. Confirmed by General Manager Bob Pack." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/grand-central-tampa" />
        <meta property="og:title" content="Grand Central at Kennedy — $50,000/yr Water Savings | Smart Valve™ Case Study" />
        <meta property="og:description" content="Grand Central at Kennedy in Tampa, FL cut water and sewer costs by 23% — saving $50,000 per year with two 6-inch Smart Valve™ units. Confirmed by General Manager Bob Pack." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/grand-central-tampa" />
        <meta property="og:image" content="https://www.perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #1a2f2f 0%, #319795 100%)" }}>
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              Multifamily Real Estate
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">Tampa, Florida</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Grand Central at Kennedy
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            A luxury multifamily property in Tampa achieved a 23% reduction in combined water and sewer charges — saving $50,000 every year over a verified 2-year period.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { val: "$50,000", label: "Annual Savings" },
              { val: "23%", label: "Water + Sewer Reduction" },
              { val: '2 × 6"', label: "Smart Valve™ Units" },
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
                <div><strong style={{ color: "#0A1F3A" }}>Property:</strong> Grand Central at Kennedy</div>
                <div><strong style={{ color: "#0A1F3A" }}>Location:</strong> Tampa, Florida</div>
                <div><strong style={{ color: "#0A1F3A" }}>Property Type:</strong> Luxury Multifamily / Mixed-Use</div>
                <div><strong style={{ color: "#0A1F3A" }}>Valve Configuration:</strong> Two 6&quot; Smart Valve™ units</div>
                <div><strong style={{ color: "#0A1F3A" }}>Verification Period:</strong> 2-year customer-confirmed period</div>
                <div><strong style={{ color: "#0A1F3A" }}>Source:</strong> GM testimonial — Bob Pack, General Manager</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border border-slate-100 bg-white">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Verified Results</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>23% reduction in combined water and sewer charges</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Annual bill: ~$240,000 &rarr; ~$190,000 (saves $50,000/yr)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Consistent savings maintained across 2-year period</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>$100,000 cumulative savings over first two years</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>No resident complaints or service disruption reported</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Financial Impact</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <ChartCard
              title="Annual Water + Sewer Cost — Before vs After"
              caption="~$240K/yr baseline · 23% reduction · Confirmed by GM over 2-year period"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={ANNUAL_SAVINGS} margin={{ top: 8, right: 20, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 280000]} />
                  <Tooltip content={<DollarTooltip />} />
                  <Bar dataKey="before" name="Before Smart Valve™" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="After Smart Valve™" fill="#319795" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Cumulative Savings Over 2 Years"
              caption="$50K/yr × 2 years = $100,000 total savings confirmed"
            >
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={CUMULATIVE} margin={{ top: 8, right: 20, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} domain={[0, 120000]} />
                  <Tooltip content={<CumulTooltip />} />
                  <Line type="monotone" dataKey="cumulative" name="Cumulative Savings" stroke="#319795" strokeWidth={3} dot={{ r: 6, fill: "#319795" }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <blockquote className="rounded-2xl p-8 border-l-4 text-lg italic leading-relaxed" style={{ background: "#F0FAF9", borderColor: "#319795", color: "#2E4A5A" }}>
            &ldquo;We have seen a 23% reduction in our water and sewer charges since installing the Smart Valve™ — that&apos;s $50,000 per year we&apos;re no longer spending.&rdquo;
            <footer className="mt-4 text-sm font-bold not-italic" style={{ color: "#319795" }}>
              — Bob Pack, General Manager, Grand Central at Kennedy
            </footer>
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: "#4A7085" }}>
            Result is based on a 2-year self-reported period confirmed by the General Manager. Combined water and sewer billing was tracked before and after installation of two 6&quot; Smart Valve™ units.
          </p>
        </div>
      </section>

      {/* WHY MULTIFAMILY */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0A1F3A" }}>Why Multifamily Properties See Strong Results</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "High shared-facility usage", body: "Pools, laundry, irrigation, common restrooms, and HVAC cooling towers all run on shared water supply — exactly where Smart Valve™ delivers the biggest impact." },
              { title: "Single-valve coverage", body: "Grand Central used two 6&quot; units to cover the full property water supply. One installation, property-wide savings — no per-unit disruption needed." },
              { title: "No cap-ex for residents", body: "The valve installs on the main supply line. Residents experience no changes, no shut-downs, and no fee increases — while the property captures 100% of the savings." },
              { title: "Combined water + sewer impact", body: "Tampa utility billing includes sewer charges that scale with water consumption. A 23% water reduction translates directly to a 23% combined water-and-sewer bill reduction." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl p-5 border border-slate-100 bg-white">
                <div className="font-bold text-sm mb-2" style={{ color: "#319795" }}>{c.title}</div>
                <p className="text-sm" style={{ color: "#2E4A5A" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1a2f2f, #319795)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-3">Calculate your property&apos;s savings</h2>
          <p className="text-white/80 mb-8">Enter your water bill and we&apos;ll project exactly how much your multifamily property could save — with a written guarantee in your contract.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/industries/multifamily" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              Multifamily Industry Hub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
