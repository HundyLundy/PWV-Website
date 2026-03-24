const DROPS = [
  { id:0,  left:3,   w:8,  h:12, dur:9,  delay:0,   op:0.12 },
  { id:1,  left:9,   w:5,  h:8,  dur:7,  delay:1.8, op:0.09 },
  { id:2,  left:17,  w:10, h:15, dur:11, delay:0.6, op:0.14 },
  { id:3,  left:24,  w:6,  h:10, dur:8,  delay:3.2, op:0.10 },
  { id:4,  left:31,  w:9,  h:13, dur:10, delay:1.0, op:0.12 },
  { id:5,  left:39,  w:5,  h:8,  dur:6,  delay:4.0, op:0.08 },
  { id:6,  left:46,  w:11, h:16, dur:12, delay:0.4, op:0.14 },
  { id:7,  left:53,  w:7,  h:11, dur:9,  delay:2.5, op:0.11 },
  { id:8,  left:60,  w:9,  h:14, dur:10, delay:1.3, op:0.13 },
  { id:9,  left:67,  w:5,  h:8,  dur:7,  delay:2.8, op:0.09 },
  { id:10, left:74,  w:8,  h:12, dur:9,  delay:0.2, op:0.11 },
  { id:11, left:81,  w:12, h:18, dur:13, delay:2.1, op:0.14 },
  { id:12, left:88,  w:6,  h:10, dur:8,  delay:4.5, op:0.10 },
  { id:13, left:93,  w:8,  h:12, dur:10, delay:0.9, op:0.11 },
  { id:14, left:56,  w:4,  h:7,  dur:6,  delay:5.2, op:0.08 },
];

export function WaterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      <style>{`
        @keyframes dropletFall {
          0%   { transform: translateY(-8vh); opacity: 0; }
          6%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translateY(108vh); opacity: 0; }
        }
        @keyframes dropSway {
          0%   { margin-left: 0px; }
          30%  { margin-left: 6px; }
          65%  { margin-left: -5px; }
          100% { margin-left: 0px; }
        }
      `}</style>
      {DROPS.map((d) => (
        <div
          key={d.id}
          style={{
            position: "absolute",
            top: 0,
            left: `${d.left}%`,
            width: d.w,
            height: d.h,
            opacity: d.op,
            /* teardrop: rounded fat bottom, tapered top */
            borderRadius: `${d.w * 0.5}px ${d.w * 0.5}px ${d.w * 0.45}px ${d.w * 0.45}px / ${d.h * 0.35}px ${d.h * 0.35}px ${d.h * 0.65}px ${d.h * 0.65}px`,
            background: `radial-gradient(ellipse at 38% 35%, rgba(180,230,255,0.9), rgba(60,170,230,0.5) 55%, rgba(30,140,200,0.2))`,
            boxShadow: `inset 0 1px 2px rgba(220,245,255,0.5), 0 0 4px rgba(80,180,255,0.2)`,
            animation: `dropletFall ${d.dur}s ease-in ${d.delay}s infinite, dropSway ${d.dur * 0.8}s ease-in-out ${d.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
