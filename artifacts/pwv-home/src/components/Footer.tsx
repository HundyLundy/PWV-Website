import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoSrc} alt="PWV" className="w-8 h-8 object-contain brightness-0 invert" />
              <span className="font-bold text-xl text-white tracking-tight">Perfect Water Valve</span>
            </div>
            <p className="text-slate-400 mb-5 leading-relaxed text-sm">
              Serving 32,000+ commercial and industrial facilities across North America. The Smart Valve™ is NSF 61 & 372 certified — no electricity, no moving parts, guaranteed results.
            </p>
            <div className="text-xs text-slate-600 uppercase tracking-wider">
              Partner: American Water Savings (AWS) · CWS
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {[
                  ["How It Works", "#how-it-works"],
                  ["Industries", "#industries"],
                  ["Client Results", "#clients"],
                  ["Request Assessment", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:3615851111" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  (361) 585-1111
                </a>
                <a href="mailto:support@PerfectWaterValve.com" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  support@PerfectWaterValve.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-700">
          <span>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</span>
          <span>NSF 61 · NSF 372 · 32,000+ Verified Installations</span>
        </div>
      </div>
    </footer>
  );
}
