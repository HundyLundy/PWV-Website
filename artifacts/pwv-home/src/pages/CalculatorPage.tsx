import { useState } from "react";
import { Link } from "wouter";

const PROPERTY_TYPES = [
  { label: "Car Wash", rate: 0.45 },
  { label: "Hotel", rate: 0.35 },
  { label: "Multi-Family", rate: 0.28 },
  { label: "Office", rate: 0.22 },
  { label: "Other", rate: 0.25 },
];

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`;
  return `$${Math.round(n).toLocaleString()}`;
}

export default function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [propertyTypeIdx, setPropertyTypeIdx] = useState(0);
  const [numProperties, setNumProperties] = useState(1);

  const rate = PROPERTY_TYPES[propertyTypeIdx].rate;
  const annualSavings = monthlyBill * 12 * rate * numProperties;
  const fiveYearSavings = annualSavings * 5;
  const installCost = annualSavings * 0.9;
  const monthlySavings = annualSavings / 12;
  const paybackMonths = monthlySavings > 0 ? Math.round(installCost / monthlySavings) : 0;

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
      <section className="px-6 py-16 text-center max-w-2xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/40 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
          Savings Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          How Much Will You <span className="text-cyan-400">Save?</span>
        </h1>
        <p className="text-slate-300 text-lg">
          Adjust the inputs below to see a real-time estimate based on your property.
        </p>
      </section>

      {/* Calculator */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 border border-white/10"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="flex flex-col gap-8">
              {/* Monthly Bill */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  Monthly Water Bill
                  <span className="ml-2 text-cyan-400 font-bold text-base">${monthlyBill.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$500</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">Property Type</label>
                <select
                  value={propertyTypeIdx}
                  onChange={(e) => setPropertyTypeIdx(Number(e.target.value))}
                  className="w-full rounded-xl px-4 py-3 text-white text-sm font-medium border border-white/10 focus:outline-none focus:border-cyan-400/60 cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  {PROPERTY_TYPES.map((p, i) => (
                    <option key={p.label} value={i} style={{ background: "#0a1628" }}>
                      {p.label} ({Math.round(p.rate * 100)}% savings rate)
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Properties */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  Number of Properties
                  <span className="ml-2 text-cyan-400 font-bold text-base">{numProperties}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={numProperties}
                  onChange={(e) => setNumProperties(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl p-6 border border-cyan-400/20"
                style={{ background: "rgba(6,182,212,0.06)" }}
              >
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">Estimated Annual Savings</div>
                <div className="text-5xl font-extrabold text-cyan-400">{formatCurrency(annualSavings)}</div>
              </div>
              <div
                className="rounded-2xl p-6 border border-cyan-400/20"
                style={{ background: "rgba(6,182,212,0.06)" }}
              >
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">5-Year Savings</div>
                <div className="text-5xl font-extrabold text-cyan-400">{formatCurrency(fiveYearSavings)}</div>
              </div>
              <div
                className="rounded-2xl p-6 border border-cyan-400/20"
                style={{ background: "rgba(6,182,212,0.06)" }}
              >
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">Estimated Payback Period</div>
                <div className="text-5xl font-extrabold text-cyan-400">{paybackMonths} <span className="text-2xl font-semibold">mo</span></div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-500 text-center">
            These are conservative estimates based on real installations. Most properties see results at the high end of the range.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link href="/#contact">
            <a
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}
            >
              Get My Exact Savings Quote
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
