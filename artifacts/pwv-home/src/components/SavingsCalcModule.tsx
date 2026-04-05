import { useState } from "react";

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

const MIN = 5000;
const MAX = 100000;
const AVG_RATE = 0.192;

interface SavingsCalcModuleProps {
  defaultBill?: number;
}

export function SavingsCalcModule({ defaultBill = 15000 }: SavingsCalcModuleProps) {
  const [bill, setBill] = useState(defaultBill);

  const monthly = bill * AVG_RATE;
  const annual = monthly * 12;

  const pct = ((bill - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#E8EFF7" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#059669" }}>
            What Could You Save?
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: "#4A7085" }}>
            Select Your Monthly Water Bill
          </p>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4A7085" }}>
              Monthly Water Bill
            </span>
            <span className="text-2xl font-black" style={{ color: "#0A1F3A" }}>
              {fmt(bill)} / mo
            </span>
          </div>

          {/* Slider */}
          <div className="relative h-6 flex items-center">
            <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "#C5D8E8" }}>
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: "#059669" }}
              />
            </div>
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-6"
              style={{ zIndex: 2 }}
            />
            {/* Thumb */}
            <div
              className="absolute w-5 h-5 rounded-full border-2 border-white shadow-md pointer-events-none transition-all"
              style={{
                left: `calc(${pct}% - 10px)`,
                backgroundColor: "#059669",
                zIndex: 1,
              }}
            />
          </div>

          {/* Scale labels */}
          <div className="flex justify-between mt-2 text-xs font-medium" style={{ color: "#6A8A9A" }}>
            <span>$5K</span>
            <span>$25K</span>
            <span>$50K</span>
            <span>$75K</span>
            <span>$100K</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#D1FAE5", border: "1px solid #A7F3D0" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#065F46" }}>
              Monthly Savings
            </p>
            <p className="text-4xl font-black" style={{ color: "#047857" }}>
              {fmt(monthly)}
            </p>
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#D1FAE5", border: "1px solid #A7F3D0" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#065F46" }}>
              Annual Savings
            </p>
            <p className="text-4xl font-black" style={{ color: "#047857" }}>
              {fmt(annual)}
            </p>
          </div>
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "#6A8A9A" }}>
          Based on 19.2% avg savings rate · 15% guaranteed minimum · 32,000+ verified installs
        </p>
      </div>
    </section>
  );
}
