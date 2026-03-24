import { Link } from "wouter";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { ArrowRight, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ dark = false }: { dark?: boolean }) {
  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      dark
        ? "bg-slate-950/85 backdrop-blur-md border-white/10 text-white"
        : "bg-white/90 backdrop-blur-md border-slate-200/60 text-slate-900"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center p-1.5 border",
            dark
              ? "bg-white/10 border-white/20 backdrop-blur-sm"
              : "bg-[#E8EFF7] border-[#0374A7]/20"
          )}>
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <div>
            <div className="font-headline font-semibold text-lg leading-none tracking-tight">Perfect Water Valve</div>
            <div className={cn("text-xs font-medium mt-0.5", dark ? "text-blue-300" : "text-[#0374A7]")}>
              Guaranteed 15% Savings
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="tel:3615851111"
            className={cn("text-sm font-medium hover:text-[#0374A7] transition-colors", dark ? "text-slate-300" : "text-slate-600")}
          >
            (361) 585-1111
          </a>
          <Link
            href="/proposal"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all font-headline"
            style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.28)' }}
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate ROI</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
