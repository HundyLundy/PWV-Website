import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IapmoBadge } from "@/components/IapmoBadge";

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
              Serving 32,000+ commercial and industrial facilities across North America. The Smart Valve™ is NSF 61 & 372 certified — no electricity required, guaranteed results.
            </p>
            <div className="text-xs text-slate-600 uppercase tracking-wider mb-6">
              Partner: American Water Savings (AWS) · Canadian Water Savings (CWS)
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61583769211912"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(24,119,242,0.15)', border: '1px solid rgba(24,119,242,0.2)', color: '#4b96f3' }}
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/perfectwatervalve/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.2)', color: '#e1306c' }}
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/113022552"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(10,102,194,0.14)', border: '1px solid rgba(10,102,194,0.22)', color: '#0a66c2' }}
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">This Page</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {[
                  ["How It Works", "/#how-it-works"],
                  ["Industries", "/#industries"],
                  ["Client Results", "/#clients"],
                  ["FAQ", "/#faq"],
                  ["Request Assessment", "/#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {[
                  ["Blog", "/blog"],
                  ["Case Studies & Proof", "/results/"],
                  ["Locations", "/locations/usa"],
                  ["Industries", "/industries"],
                  ["Data Centers", "/industries/data-centers"],
                  ["Hyperscale ROI", "/industries/data-centers/hyperscale-roi"],
                  ["Live Savings Counter", "/impact/"],
                  ["Get a Full Proposal", "/savings/"],
                  ["Smart Valve™ Info Sheet", "/infosheet/"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Locations</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {[
                  ["Colorado", "/locations/colorado"],
                  ["Texas", "/locations/texas"],
                  ["California", "/locations/california"],
                  ["Virginia", "/locations/virginia"],
                  ["Pennsylvania", "/locations/pennsylvania"],
                  ["Indiana", "/locations/indiana"],
                  ["Ohio", "/locations/ohio"],
                  ["Missouri", "/locations/missouri"],
                  ["Delaware", "/locations/delaware"],
                  ["Europe", "/locations/europe"],
                  ["Asia-Pacific", "/locations/asia"],
                  ["All Locations →", "/locations/usa"],
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
                <a href="tel:7209373004" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  (720) 937-3004
                </a>
                <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  info@perfectwatervalve.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 mb-6">
          <div className="text-xs text-slate-600 uppercase tracking-wider mb-4">Third-Party Certifications</div>
          <div className="flex flex-wrap items-start gap-8">
            <IapmoBadge size="xl" />
            <div className="flex flex-col justify-center gap-2">
              <a
                href="https://thesmartvalve.com/technical-specs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                CE Declaration of Conformity →
              </a>
              <a href="/certifications" className="text-sm text-slate-500 hover:text-white transition-colors">
                View All Certifications →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-0 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-700">
          <span>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>NSF 61 · NSF 372 · 32,000+ Verified Installations</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61583769211912"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/perfectwatervalve/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/113022552"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
