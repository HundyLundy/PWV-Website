import { motion } from "framer-motion";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";

// AIR  = blue-400 → sky-300   (cool, airy blue)
// WATER = teal-400 → emerald-300 (cool, liquid teal-green)
const AIR_CLASS   = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300";
const WATER_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300";

const BUBBLES = [
  { id:0,  w:22, h:18, lp:4,  tp:18, delay:0,    dur:4.2, op:0.55 },
  { id:1,  w:10, h:8,  lp:12, tp:62, delay:0.7,  dur:3.1, op:0.35 },
  { id:2,  w:16, h:14, lp:20, tp:38, delay:1.4,  dur:5.0, op:0.48 },
  { id:3,  w:8,  h:6,  lp:7,  tp:75, delay:2.1,  dur:2.8, op:0.28 },
  { id:4,  w:24, h:20, lp:28, tp:22, delay:0.3,  dur:4.7, op:0.52 },
  { id:5,  w:12, h:10, lp:35, tp:55, delay:1.8,  dur:3.5, op:0.38 },
  { id:6,  w:18, h:15, lp:15, tp:82, delay:0.9,  dur:4.0, op:0.44 },
  { id:7,  w:9,  h:7,  lp:40, tp:40, delay:2.6,  dur:2.6, op:0.30 },
  { id:8,  w:20, h:16, lp:6,  tp:50, delay:1.1,  dur:4.5, op:0.50 },
  { id:9,  w:14, h:11, lp:23, tp:68, delay:3.2,  dur:3.8, op:0.40 },
  { id:10, w:7,  h:6,  lp:30, tp:28, delay:0.5,  dur:2.4, op:0.25 },
  { id:11, w:26, h:22, lp:10, tp:45, delay:1.6,  dur:5.2, op:0.58 },
  { id:12, w:11, h:9,  lp:38, tp:72, delay:2.9,  dur:3.3, op:0.33 },
  { id:13, w:19, h:16, lp:18, tp:12, delay:0.2,  dur:4.3, op:0.47 },
  { id:14, w:8,  h:7,  lp:32, tp:58, delay:3.8,  dur:2.9, op:0.27 },
  { id:15, w:15, h:12, lp:43, tp:35, delay:1.3,  dur:3.6, op:0.42 },
  { id:16, w:21, h:17, lp:2,  tp:88, delay:2.4,  dur:4.8, op:0.53 },
  { id:17, w:9,  h:8,  lp:27, tp:20, delay:0.8,  dur:2.7, op:0.31 },
  { id:18, w:13, h:11, lp:36, tp:80, delay:4.1,  dur:3.9, op:0.39 },
  { id:19, w:17, h:14, lp:8,  tp:60, delay:1.9,  dur:4.1, op:0.46 },
];

export function BubbleValveSection() {
  return (
    <section className="bg-[#060A1A] py-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400/50 mb-3">
            How the Smart Valve™ Works
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            Stop Paying for{" "}
            <span className={AIR_CLASS}>Air</span>{" "}
            in Your{" "}
            <span className={WATER_CLASS}>Water</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/8"
          style={{
            background: "linear-gradient(180deg,#08102A 0%,#050C1E 100%)",
            minHeight: 340,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,80,180,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,180,120,0.06),transparent_55%)]" />

          {/* BEFORE label */}
          <div className="absolute top-5 left-6 z-20">
            <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-slate-500 mb-1">Before</span>
            <div className="text-xl sm:text-2xl font-bold leading-tight">
              <span className={AIR_CLASS}>Air</span>
              <span className="text-slate-400"> + </span>
              <span className={WATER_CLASS}>Water</span>
            </div>
          </div>

          {/* AFTER label */}
          <div className="absolute top-5 right-6 z-20 text-right">
            <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-teal-500/60 mb-1">After</span>
            <div className="text-xl sm:text-2xl font-bold leading-tight">
              <span className="text-slate-300">100% </span>
              <span className={WATER_CLASS}>Water</span>
            </div>
          </div>

          {/* Pipe */}
          <div className="absolute inset-0 flex items-center px-6 sm:px-10 py-16">
            <div
              className="w-full relative overflow-hidden"
              style={{
                height: 140,
                borderRadius: 16,
                background: "linear-gradient(180deg,#111C38 0%,#0B1428 55%,#0E1832 100%)",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(0,0,0,0.4)",
              }}
            >
              {/* Clean water glow right side */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg,transparent 0%,rgba(20,200,120,0.04) 52%,rgba(20,200,120,0.10) 100%)",
                }}
              />

              {/* Bubbles flowing left → valve */}
              {BUBBLES.map((b) => (
                <motion.div
                  key={b.id}
                  className="absolute"
                  style={{
                    left: `${b.lp}%`,
                    top: `${b.tp}%`,
                    width: b.w,
                    height: b.h,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 30% 28%, rgba(210,235,255,${b.op * 0.55}), rgba(120,195,255,${b.op * 0.18}) 60%, transparent)`,
                    border: `1px solid rgba(160,215,255,${b.op * 0.5})`,
                    boxShadow: `inset 1px 1px 3px rgba(230,248,255,${b.op * 0.35})`,
                  }}
                  animate={{
                    x: ["0%", "120%", "260%"],
                    y: [0, b.h * -0.6, b.h * 0.4, 0],
                    opacity: [0, b.op, b.op, b.op * 0.4, 0],
                  }}
                  transition={{
                    duration: b.dur,
                    delay: b.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Water ripple stripes right side */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`stripe-${i}`}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: `${52 + i * 15}%`,
                    right: 0,
                    background: `linear-gradient(90deg,transparent,rgba(20,200,120,${0.05 + i * 0.03}))`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5 + i * 0.8, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}

              {/* Center divider */}
              <div
                className="absolute top-0 bottom-0 w-px"
                style={{
                  left: "50%",
                  background: "linear-gradient(180deg,transparent,rgba(80,200,160,0.35),transparent)",
                }}
              />
            </div>
          </div>

          {/* Smart Valve center */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute rounded-full bg-blue-500/25 blur-2xl"
                  style={{ width: 110, height: 110 }} />
                <motion.div
                  className="absolute rounded-full border border-blue-400/30"
                  style={{ width: 95, height: 95 }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute rounded-full border border-teal-300/15"
                  style={{ width: 118, height: 118 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <img
                  src={smartValveSrc}
                  alt="Smart Valve™"
                  className="relative z-10 object-contain drop-shadow-[0_0_30px_rgba(0,140,255,0.75)]"
                  style={{ height: 100, width: "auto", filter: "brightness(1.05) saturate(1.15)" }}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300/60">
                Smart Valve™
              </span>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center z-20">
            <p className="text-[11px] text-slate-600 uppercase tracking-widest">
              Air purged upstream of meter — you pay only for water
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
