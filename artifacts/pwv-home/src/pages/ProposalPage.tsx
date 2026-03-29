import { Link } from "wouter";

const PROCESS_STEPS = [
  { step: "01", title: "Free Water Audit", desc: "1 hour, on-site. We assess your current water usage, pressure, and meter setup." },
  { step: "02", title: "Custom Savings Projection", desc: "Delivered within 48 hours. Exact numbers for your property — no generic estimates." },
  { step: "03", title: "Installation", desc: "4–6 hours, no operational disruption. Only a brief water shutoff required." },
  { step: "04", title: "Monthly Savings Reports", desc: "We track and document your savings every month, verified against your utility bills." },
];

const FAQ = [
  {
    q: "Do we need to shut down operations during installation?",
    a: "No. Installation takes 4–6 hours and requires only a brief water shutoff.",
  },
  {
    q: "What if we don't hit the guaranteed savings?",
    a: "We refund the difference. It's in writing.",
  },
  {
    q: "Is this a lease or a purchase?",
    a: "Purchase. You own the valve. No ongoing fees.",
  },
  {
    q: "How long does the valve last?",
    a: "20+ year lifespan with no maintenance required.",
  },
];

export default function ProposalPage() {
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
          Full Proposal
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          The Perfect Water Valve<br />
          <span className="text-cyan-400">Proposal</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Everything you need to make a confident decision. No pressure, no gimmicks — just the numbers.
        </p>
      </section>

      {/* Section 1: The Problem */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-3">The Problem</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Commercial Water Costs Are Rising</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Commercial water costs are rising 5–8% per year. Most property managers don't know exactly how much they're wasting — or that there's a proven, non-invasive fix.
        </p>
      </section>

      <div className="border-t border-white/5 max-w-5xl mx-auto" />

      {/* Section 2: The Solution */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-3">The Solution</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The AWS Smart Valve™</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          The AWS Smart Valve™ is a patented water pressure optimization device installed on your main water line. It takes 4–6 hours to install. Zero operational changes required.
        </p>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">How It Works</h3>
        <ul className="flex flex-col gap-3 mb-10">
          {[
            "Optimizes water pressure at the point of entry",
            "Eliminates micro-bursts that waste water",
            "Maintains full water pressure and flow for all fixtures",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 block" />
              </span>
              <span className="text-slate-300">{item}</span>
            </li>
          ))}
        </ul>

        <div
          className="rounded-2xl p-6 border border-cyan-400/20"
          style={{ background: "rgba(6,182,212,0.06)" }}
        >
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-2">Written Guarantee</div>
          <p className="text-slate-200 font-medium">
            Every installation comes with a written performance guarantee. If you don't save at least 15%, we refund the difference.
          </p>
        </div>
      </section>

      <div className="border-t border-white/5 max-w-5xl mx-auto" />

      {/* Section 3: Investment & ROI */}
      <section
        className="px-6 py-16"
        style={{ background: "rgba(6,182,212,0.04)", borderTop: "1px solid rgba(6,182,212,0.1)", borderBottom: "1px solid rgba(6,182,212,0.1)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-3">Investment & ROI</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Typical Installation Cost", value: "$18k–$45k" },
              { label: "Typical Annual Savings", value: "$14k–$55k" },
              { label: "Average Payback", value: "9–16 mo" },
              { label: "10-Year ROI", value: "400–900%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Process */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-3">The Process</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col gap-6">
          {PROCESS_STEPS.map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-cyan-400 border border-cyan-400/40"
                style={{ background: "rgba(6,182,212,0.08)" }}
              >
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/5 max-w-5xl mx-auto" />

      {/* Section 5: FAQ */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-3">FAQ</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Common Questions</h2>
        <div className="flex flex-col gap-6">
          {FAQ.map((item) => (
            <div key={item.q} className="border-b border-white/8 pb-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="px-6 py-20 text-center"
        style={{ background: "rgba(6,182,212,0.05)", borderTop: "1px solid rgba(6,182,212,0.12)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see your numbers?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Schedule a free audit and we'll deliver a custom proposal within 48 hours.
          </p>
          <Link href="/#contact">
            <a
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}
            >
              Schedule My Free Audit
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
