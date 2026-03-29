import { Link } from "wouter";

const CASE_STUDIES = [
  {
    name: "Caliber Car Wash",
    location: "Denver, CO",
    type: "High-Volume Car Wash",
    savings: "47%",
    annual: "$38,400/year",
    payback: "9 months",
    quote: "We were skeptical at first. The numbers seemed too good. But we're 14 months in and the savings have been consistent every single month.",
    author: "Operations Manager, Caliber Car Wash Denver",
    accent: "#06b6d4",
  },
  {
    name: "Multi-Family Complex",
    location: "Aurora, CO",
    type: "240-Unit Apartment Complex",
    savings: "31%",
    annual: "$22,800/year",
    payback: "13 months",
    quote: "Our water bill dropped from $7,400/month to $5,100/month. That's real money going back to the bottom line.",
    author: "Property Manager",
    accent: "#0ea5e9",
  },
  {
    name: "Office Park",
    location: "Englewood, CO",
    type: "3-Building Office Campus",
    savings: "22%",
    annual: "$14,200/year",
    payback: "16 months",
    quote: "The installation was completely non-disruptive. Done in a day, savings started immediately.",
    author: "Facilities Director",
    accent: "#38bdf8",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Back nav */}
      <div className="px-6 pt-6">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </a>
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/40 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
          Verified Results
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Real Results.<br />
          <span className="text-cyan-400">Real Properties.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          Every installation is backed by a written performance guarantee. Here's what our clients are actually seeing.
        </p>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-20 max-w-5xl mx-auto flex flex-col gap-10">
        {CASE_STUDIES.map((cs, i) => (
          <div
            key={cs.name}
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${cs.accent}, transparent)` }} />
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-1">Case Study {i + 1}</div>
                  <h2 className="text-2xl font-bold">{cs.name}</h2>
                  <p className="text-slate-400 text-sm">{cs.location} · {cs.type}</p>
                </div>
                <div className="flex gap-6 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-cyan-400">{cs.savings}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Water Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-cyan-400">{cs.annual}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-cyan-400">{cs.payback}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Payback Period</div>
                  </div>
                </div>
              </div>
              <blockquote className="border-l-2 border-cyan-400/50 pl-6">
                <p className="text-slate-300 text-lg italic leading-relaxed mb-3">"{cs.quote}"</p>
                <cite className="text-sm text-slate-500 not-italic">— {cs.author}</cite>
              </blockquote>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        className="px-6 py-20 text-center"
        style={{ background: "rgba(6,182,212,0.05)", borderTop: "1px solid rgba(6,182,212,0.12)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want results like these?</h2>
          <p className="text-slate-300 text-lg mb-10">
            We'll audit your property for free and show you the projected savings before you commit.
          </p>
          <Link href="/#contact">
            <a
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}
            >
              Get My Free Audit
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
