import { Link } from "wouter";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <img src={logoSrc} alt="PWV" className="w-8 h-8 object-contain brightness-0 invert" />
            <span className="font-bold text-xl text-white tracking-tight">Perfect Water Valve</span>
          </Link>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Serving 32,000+ commercial and industrial facilities across North America. Guaranteed minimum 15% water savings through precision M&V verified technology.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            Partner: <span className="text-white">American Water Savings Inc. (AWS) | CWS</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">Contact Us</h4>
          <a href="tel:3615851111" className="flex items-center gap-3 hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-medium text-lg">(361) 585-1111</span>
          </a>
          <a href="mailto:support@PerfectWaterValve.com" className="flex items-center gap-3 hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-medium">support@PerfectWaterValve.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
