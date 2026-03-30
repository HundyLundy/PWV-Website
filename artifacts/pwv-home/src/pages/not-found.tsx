import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 border border-white/15 bg-white/5">
              <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="text-8xl font-black mb-6" style={{ color: "#0374A7" }}>404</div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            This page doesn't exist — but your water savings do.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg transition-all hover:-translate-y-0.5"
            style={{ background: "#0374A7", boxShadow: "0 4px 20px rgba(3,116,167,0.4)" }}
          >
            Back to Homepage
          </a>

          <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a href="/locations/usa" className="hover:text-white transition-colors">Locations</a>
            <a href="/industries" className="hover:text-white transition-colors">Industries</a>
            <a href="/results/" className="hover:text-white transition-colors">Case Studies</a>
            <a href="/savings/" className="hover:text-white transition-colors">Get a Proposal</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
