const DROPS = [
  { id:0,  left:3,   size:10, dur:12, delay:0,   op:0.06 },
  { id:1,  left:9,   size:6,  dur:9,  delay:2.1, op:0.05 },
  { id:2,  left:17,  size:14, dur:15, delay:0.8, op:0.07 },
  { id:3,  left:24,  size:8,  dur:10, delay:3.5, op:0.05 },
  { id:4,  left:31,  size:12, dur:13, delay:1.3, op:0.06 },
  { id:5,  left:39,  size:7,  dur:8,  delay:4.2, op:0.04 },
  { id:6,  left:46,  size:16, dur:16, delay:0.5, op:0.07 },
  { id:7,  left:53,  size:9,  dur:11, delay:2.8, op:0.05 },
  { id:8,  left:60,  size:13, dur:14, delay:1.6, op:0.06 },
  { id:9,  left:67,  size:6,  dur:9,  delay:3.1, op:0.04 },
  { id:10, left:74,  size:11, dur:12, delay:0.3, op:0.06 },
  { id:11, left:81,  size:15, dur:17, delay:2.4, op:0.07 },
  { id:12, left:88,  size:8,  dur:10, delay:4.8, op:0.05 },
  { id:13, left:93,  size:10, dur:13, delay:1.0, op:0.05 },
  { id:14, left:56,  size:5,  dur:7,  delay:5.5, op:0.04 },
];

export function WaterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      <style>{`
        @keyframes floatBubble {
          0%   { transform: translateY(105vh) scale(1); opacity: 0; }
          8%   { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(-12vh) scale(1.08); opacity: 0; }
        }
        @keyframes driftX {
          0%   { margin-left: 0px; }
          33%  { margin-left: 18px; }
          66%  { margin-left: -10px; }
          100% { margin-left: 0px; }
        }
      `}</style>
      {DROPS.map((d) => (
        <div
          key={d.id}
          style={{
            position: "absolute",
            bottom: 0,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: `radial-gradient(circle at 32% 28%, rgba(200,235,255,${d.op * 0.8}), rgba(80,180,255,${d.op * 0.3}) 60%, transparent)`,
            border: `1px solid rgba(140,210,255,${d.op * 0.7})`,
            animation: `floatBubble ${d.dur}s ease-in-out ${d.delay}s infinite, driftX ${d.dur * 0.7}s ease-in-out ${d.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
