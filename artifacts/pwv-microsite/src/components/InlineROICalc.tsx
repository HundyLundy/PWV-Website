import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight, DollarSign } from "lucide-react";

const INDUSTRY_RATES: Record<string, { avg: number; label: string }> = {
  hospitality:  { avg: 0.22, label: "Hotels & Resorts" },
  automotive:   { avg: 0.23, label: "Car Wash / Automotive" },
  realEstate:   { avg: 0.16, label: "Multi-Family Real Estate" },
  logistics:    { avg: 0.17, label: "Logistics & Warehousing" },
  foodBeverage: { avg: 0.19, label: "Food & Beverage" },
  commercial:   { avg: 0.15, label: "Commercial Retail" },
  industrial:   { avg: 0.16, label: "Industrial / Manufacturing" },
  municipal:    { avg: 0.15, label: "Municipal / Government" },
};

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function InlineROICalc() {
  const [industry, setIndustry] = useState("hospitality");
  const [billStr, setBillStr] = useState("5000");

  const bill = Math.max(0, parseInt(billStr.replace(/[^0-9]/g, "")) || 0);

  const { guaranteed, expected, fiveYear } = useMemo(() => {
    const annual = bill * 12;
    const rate = INDUSTRY_RATES[industry].avg;
    return {
      guaranteed: annual * 0.15,
      expected:   annual * rate,
      fiveYear:   annual * rate * 5,
    };
  }, [industry, bill]);

  const hasValue = bill >= 500;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, #0374A7, #0030B5, #3C6E7F)" }} />

      <h3 className="font-headline font-bold text-slate-900 text-xl mb-1">See your number — right now.</h3>
      <p className="text-slate-400 text-sm mb-6" style={{ fontWeight: 300 }}>
        No commitment. Instant estimate based on industry M&V data.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0374A7] focus:ring-4 focus:ring-[#0374A7]/10 transition-all appearance-none cursor-pointer text-sm"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
              paddingRight: "2.5rem",
            }}
          >
            {Object.entries(INDUSTRY_RATES).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Monthly Water Bill</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <DollarSign className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={billStr}
              onChange={(e) => setBillStr(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-lg text-slate-900 focus:outline-none focus:border-[#0374A7] focus:ring-4 focus:ring-[#0374A7]/10 transition-all"
              placeholder="5,000"
            />
          </div>
        </div>
      </div>

      <div className={`mt-6 rounded-2xl transition-all duration-500 overflow-hidden ${hasValue ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Guaranteed minimum</span>
            <span className="font-headline font-bold text-slate-700">{fmt(guaranteed)}<span className="text-xs font-normal text-slate-400">/yr</span></span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Expected savings</span>
            <span className="font-headline font-bold text-[#0374A7]">{fmt(expected)}<span className="text-xs font-normal text-slate-400">/yr</span></span>
          </div>
          <div className="flex items-center justify-between bg-[#E8EFF7] px-4 py-3 rounded-xl">
            <span className="text-sm font-semibold text-slate-700">5-year value</span>
            <span className="font-headline font-black text-[#0030B5] text-xl">{fmt(fiveYear)}</span>
          </div>
        </div>

        <Link
          href="/proposal"
          className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: "#0374A7" }}
        >
          Get this in writing <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-xs text-slate-400 mt-2">Free assessment · No commitment · Guaranteed in contract</p>
      </div>

      {!hasValue && (
        <p className="text-center text-sm text-slate-400 mt-4 italic">Enter your bill to see your savings →</p>
      )}
    </div>
  );
}
