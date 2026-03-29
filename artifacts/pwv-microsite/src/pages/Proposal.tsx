import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, Printer, Building2, Droplets, DollarSign, Calculator, ChevronRight, Phone } from "lucide-react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { cn } from "@/lib/utils";

const INDUSTRY_RATES = {
  logistics: { avg: 0.17, label: "Logistics & Warehousing" },
  hospitality: { avg: 0.22, label: "Hospitality (Hotels/Resorts)" },
  realEstate: { avg: 0.16, label: "Real Estate (Multi-Family)" },
  foodBeverage: { avg: 0.19, label: "Food & Beverage / Brewing" },
  automotive: { avg: 0.23, label: "Automotive (Car Wash)" },
  commercial: { avg: 0.15, label: "Commercial Retail" },
  industrial: { avg: 0.16, label: "Industrial Manufacturing" },
  municipal: { avg: 0.15, label: "Municipal & Government" },
} as const;

type IndustryKey = keyof typeof INDUSTRY_RATES;

export default function Proposal() {
  const [industry, setIndustry] = useState<IndustryKey>('hospitality');
  const [monthlyBillStr, setMonthlyBillStr] = useState("5000");
  const [numFacilities, setNumFacilities] = useState<number>(1);
  const [size, setSize] = useState("medium");

  const monthlyBill = Math.max(0, parseInt(monthlyBillStr.replace(/[^0-9]/g, '')) || 0);

  // Calculations
  const calc = useMemo(() => {
    const guaranteed = 0.15;
    const rate = INDUSTRY_RATES[industry].avg;
    
    const annualBill = monthlyBill * 12 * numFacilities;
    const guaranteedAnnual = annualBill * guaranteed;
    const expectedAnnual = annualBill * rate;
    const fiveYearValue = expectedAnnual * 5;
    
    // Cost estimation for ROI - rough heuristic based on size
    const costPerFacility = size === 'small' ? 2500 : size === 'large' ? 6500 : 4000;
    const totalInstallCost = costPerFacility * numFacilities;
    
    const paybackMonths = expectedAnnual > 0 ? Math.ceil((totalInstallCost / expectedAnnual) * 12) : 0;

    return {
      annualBill,
      guaranteedRate: guaranteed,
      expectedRate: rate,
      guaranteedAnnual,
      expectedAnnual,
      fiveYearValue,
      totalInstallCost,
      paybackMonths
    };
  }, [industry, monthlyBill, numFacilities, size]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Top Nav - Hidden when printing */}
      <div className="bg-white border-b border-slate-200 print:hidden sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full transition-colors"
          >
            <Printer className="w-4 h-4" /> Save PDF / Print
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-10 lg:pt-16">
        
        {/* Header - visible in print */}
        <div className="text-center mb-10 print:mb-8">
          <img src={logoSrc} alt="PWV Logo" className="w-16 h-16 mx-auto mb-6 object-contain" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Your Personalized Savings Estimate</h1>
          <p className="text-slate-500 text-lg">Based on real M&V data from 32,000+ deployments</p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
          
          {/* Form Panel - hidden in print */}
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 print:hidden">
            <div className="flex items-center gap-2 font-bold text-lg mb-6 pb-4 border-b border-slate-100">
              <Calculator className="w-5 h-5 text-primary" /> Facility Parameters
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Industry Sector</label>
                <select 
                  value={industry} 
                  onChange={(e) => setIndustry(e.target.value as IndustryKey)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                >
                  {Object.entries(INDUSTRY_RATES).map(([key, data]) => (
                    <option key={key} value={key}>{data.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Average Monthly Water Bill ($)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="text"
                    value={monthlyBillStr}
                    onChange={(e) => setMonthlyBillStr(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-lg"
                    placeholder="5000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Facilities</label>
                  <input 
                    type="number"
                    min="1" max="1000"
                    value={numFacilities}
                    onChange={(e) => setNumFacilities(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Avg. Facility Size</label>
                  <select 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                  >
                    <option value="small">&lt;50k sqft</option>
                    <option value="medium">50k-200k sqft</option>
                    <option value="large">&gt;200k sqft</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl flex gap-3 text-sm text-blue-800 font-medium">
              <Droplets className="w-5 h-5 shrink-0 text-blue-600" />
              Adjust the values above and your proposal will update instantly in real-time.
            </div>
          </div>

          {/* Results Panel - Prominent in print */}
          <div className="bg-slate-950 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border-2 print:border-slate-200 print:shadow-none">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] print:hidden" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/20 rounded-full blur-[60px] print:hidden" />
            
            <div className="relative z-10">
              <div className="mb-8 print:mb-4">
                <h3 className="text-lg font-medium text-slate-400 print:text-slate-600 mb-1">Expected Annual Savings</h3>
                <div className="text-5xl font-bold text-white print:text-slate-900 tracking-tight flex items-baseline gap-2">
                  {formatCurrency(calc.expectedAnnual)}
                  <span className="text-xl font-medium text-teal-400 print:text-primary">
                    ({(calc.expectedRate * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10 print:mb-8">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-400 print:text-slate-600">Current Bill: {formatCurrency(calc.annualBill)}/yr</span>
                  <span className="text-teal-400 print:text-primary">New Bill: {formatCurrency(calc.annualBill - calc.expectedAnnual)}/yr</span>
                </div>
                <div className="w-full h-3 bg-white/10 print:bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-slate-600 print:bg-slate-800" style={{ width: `${(1 - calc.expectedRate) * 100}%` }} />
                  <div className="h-full bg-teal-400 print:bg-primary" style={{ width: `${calc.expectedRate * 100}%` }} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 print:border-slate-200 print:bg-slate-50 backdrop-blur-sm">
                  <div>
                    <div className="text-sm text-slate-400 print:text-slate-500 font-medium">Guaranteed Minimum</div>
                    <div className="font-semibold print:text-slate-900">{(calc.guaranteedRate * 100).toFixed(0)}% Savings</div>
                  </div>
                  <div className="text-xl font-bold text-blue-300 print:text-primary">{formatCurrency(calc.guaranteedAnnual)}/yr</div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 print:border-slate-200 print:bg-slate-50 backdrop-blur-sm">
                  <div>
                    <div className="text-sm text-slate-400 print:text-slate-500 font-medium">5-Year Cumulative Value</div>
                    <div className="font-semibold print:text-slate-900">Total avoided costs</div>
                  </div>
                  <div className="text-xl font-bold text-teal-300 print:text-primary">{formatCurrency(calc.fiveYearValue)}</div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 print:border-slate-200 print:bg-slate-50 backdrop-blur-sm">
                  <div>
                    <div className="text-sm text-slate-400 print:text-slate-500 font-medium">Est. Payback Period</div>
                    <div className="font-semibold print:text-slate-900">Return on Investment</div>
                  </div>
                  <div className="text-xl font-bold text-white print:text-slate-900">{calc.paybackMonths} months</div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 print:border-slate-200 text-center">
                <p className="text-sm text-slate-400 print:text-slate-600 mb-6">
                  Ready to lock in these savings? Contact us for a precise site assessment.
                </p>
                <a 
                  href="tel:3615851111" 
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg hover:-translate-y-1 transition-all print:hidden"
                >
                  <Phone className="w-5 h-5" /> (361) 585-1111
                </a>
                <div className="hidden print:block font-bold text-xl text-primary text-center">
                  Call: (361) 585-1111 | support@PerfectWaterValve.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
