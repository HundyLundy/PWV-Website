import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from "recharts";

// ─── DATA ──────────────────────────────────────────────────────────────────

const PORTFOLIO_SUMMARY = [
  { site: "Portfolio\nWeighted Avg", savings: 23 },
];

// ─── TOOLTIP HELPERS ──────────────────────────────────────────────────────

function PctTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl bg-white border border-slate-200 text-slate-900">
      <div className="font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value}%</strong></span>
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

export default function CaliberCarWash() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Caliber Car Wash — 23% Water Savings Across 5 Locations | Smart Valve™ Case Study | Perfect Water Valve</title>
        <meta name="description" content="Caliber Car Wash achieved a 23% weighted-average water savings across 5 Georgia and Florida locations — independently verified with formal M&V reports. Hard water scale reduced at all sites." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/results/caliber-car-wash" />
        <meta property="og:title" content="Caliber Car Wash — 23% Water Savings Across 5 Locations | Smart Valve™ Case Study" />
        <meta property="og:description" content="Caliber Car Wash achieved a 23% weighted-average water savings across 5 Georgia and Florida locations — independently verified with formal M&V reports." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/results/caliber-car-wash" />
        <meta property="og:image" content="https://www.perfectwatervalve.com/opengraph.jpg" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #2d1515 0%, #E53E3E 100%)" }}>
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              Automotive / Car Washes
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">Georgia &amp; Florida — 5 Locations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Caliber Car Wash
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            A multi-site car wash operator achieved a 23% weighted-average water savings across all five Georgia and Florida locations — each independently M&V verified over 3+ consecutive quarters.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { val: "23%", label: "Weighted Avg Savings" },
              { val: "5", label: "M&V-Verified Locations" },
              { val: "3+ Qtrs", label: "Consecutive M&V Data" },
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>Portfolio Overview</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F7FAFD" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Portfolio Details</div>
              <div className="space-y-2 text-sm" style={{ color: "#2E4A5A" }}>
                <div><strong style={{ color: "#0A1F3A" }}>Operator:</strong> Caliber Car Wash</div>
                <div><strong style={{ color: "#0A1F3A" }}>Locations:</strong> 5 sites across Georgia and Florida</div>
                <div><strong style={{ color: "#0A1F3A" }}>Valve Type:</strong> Smart Valve™ (size per site)</div>
                <div><strong style={{ color: "#0A1F3A" }}>M&V Methodology:</strong> Independent, site-by-site</div>
                <div><strong style={{ color: "#0A1F3A" }}>M&V Report Date:</strong> March 2026</div>
                <div><strong style={{ color: "#0A1F3A" }}>Measurement Duration:</strong> 3+ consecutive billing quarters per site</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border border-slate-100 bg-white">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A7085" }}>Verified Results</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>23% weighted-average water savings across all 5 locations</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Each site independently measured — no aggregate blending</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Hard water scale reduction observed as secondary benefit at all sites</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Consistent results over 3+ consecutive billing quarters — no seasonal outliers</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#059669" }} /><span>Formal M&V report available on request</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: "#F7FAFD" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0A1F3A" }}>M&V-Verified Savings</h2>
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <ChartCard
              title="Portfolio Weighted Average — Water Savings %"
              caption="23% weighted average · M&V verified at each of 5 GA &amp; FL locations · March 2026"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={PORTFOLIO_SUMMARY} margin={{ top: 8, right: 40, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="site" tick={{ fontSize: 11, fill: "#4A7085" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#4A7085" }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                  <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15% Guarantee", position: "insideTopRight", fontSize: 9, fill: "#059669" }} />
                  <Tooltip content={<PctTooltip />} />
                  <Bar dataKey="savings" name="Savings %" fill="#E53E3E" radius={[8, 8, 0, 0]}
                    label={{ position: "top", formatter: (v: number) => `${v}%`, fontSize: 20, fontWeight: 700, fill: "#E53E3E" }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="rounded-2xl p-6 border border-slate-100 bg-white">
              <div className="text-sm font-bold mb-4" style={{ color: "#0A1F3A" }}>Why Car Washes Save More</div>
              <ul className="space-y-3 text-sm" style={{ color: "#2E4A5A" }}>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E53E3E" }} /><span><strong>High-volume, high-pressure water use</strong> — conveyors, spot-free rinse systems, and undercarriage sprayers consume thousands of gallons daily</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E53E3E" }} /><span><strong>Scale reduction extends equipment life</strong> — softer water means less mineral buildup in nozzles, pumps, and rinse arches</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E53E3E" }} /><span><strong>Chemical efficiency improves</strong> — better water chemistry means soaps and chemicals work more effectively, reducing chemical spend</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E53E3E" }} /><span><strong>Multi-site operators compound the benefit</strong> — verified savings at every location amplify ROI across the portfolio</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW M&V WORKS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0A1F3A" }}>How the M&V Verification Worked</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Baseline established", body: "Pre-installation water consumption was measured across 3+ billing cycles at each of the 5 locations to establish a statistically reliable baseline." },
              { step: "02", title: "Smart Valve™ installed", body: "A Smart Valve™ sized for each site was installed on the main supply line. No operational changes were required to car wash equipment or processes." },
              { step: "03", title: "Post-install M&V tracked", body: "Post-installation consumption was tracked for 3+ consecutive billing quarters per site. The weighted average across all 5 sites was 23%." },
            ].map((c) => (
              <div key={c.step} className="rounded-2xl p-5 border border-slate-100" style={{ background: "#F7FAFD" }}>
                <div className="text-2xl font-bold mb-2" style={{ color: "#E53E3E" }}>{c.step}</div>
                <div className="font-bold text-sm mb-2" style={{ color: "#0A1F3A" }}>{c.title}</div>
                <p className="text-sm" style={{ color: "#2E4A5A" }}>{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: "#4A7085" }}>
            Results shown are weighted averages across the portfolio. Individual site results vary. Only sites with ≥15% verified savings are included in reported results. Full M&V report is available on request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #2d1515, #E53E3E)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-3">Get verified savings for your car wash</h2>
          <p className="text-white/80 mb-8">We&apos;ll calculate projected savings for your location based on your water bills — backed by a written guarantee in your contract.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/industries/car-washes" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              Car Wash Industry Hub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
