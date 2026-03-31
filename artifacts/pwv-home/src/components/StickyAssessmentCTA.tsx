import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ChevronRight } from "lucide-react";

export function StickyAssessmentCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 500 && !dismissed) setVisible(true);
      else if (window.scrollY <= 500) setVisible(false);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-auto md:right-4 md:max-w-sm"
        >
          <div
            className="flex items-center justify-between gap-3 px-4 py-3 md:rounded-2xl shadow-2xl border border-white/10"
            style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #0374A7 100%)" }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-snug">Guaranteed ≥15% Water Savings</p>
              <p className="text-white/60 text-xs mt-0.5 truncate">Free assessment — no obligation</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:7209373004"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "#DEC600", color: "#0A1F3A" }}
              >
                Free Assessment
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => { setDismissed(true); setVisible(false); }}
                className="text-white/40 hover:text-white/70 transition-colors ml-1"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
