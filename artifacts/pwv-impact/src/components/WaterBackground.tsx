const DROPS = [
  { id:0,  left:3,   w:7,  h:14, dur:9.9,  delay:0,   op:0.11 },
  { id:1,  left:11,  w:5,  h:10, dur:7.7,  delay:2.0, op:0.09 },
  { id:2,  left:19,  w:9,  h:18, dur:12.1, delay:0.7, op:0.13 },
  { id:3,  left:27,  w:6,  h:12, dur:8.8,  delay:3.5, op:0.09 },
  { id:4,  left:35,  w:8,  h:16, dur:11.0, delay:1.1, op:0.11 },
  { id:5,  left:43,  w:10, h:20, dur:13.2, delay:0.4, op:0.13 },
  { id:6,  left:51,  w:6,  h:12, dur:9.9,  delay:2.7, op:0.10 },
  { id:7,  left:59,  w:8,  h:16, dur:11.0, delay:1.4, op:0.12 },
  { id:8,  left:67,  w:5,  h:10, dur:7.7,  delay:3.1, op:0.09 },
  { id:9,  left:75,  w:7,  h:14, dur:9.9,  delay:0.3, op:0.10 },
  { id:10, left:83,  w:11, h:22, dur:14.3, delay:2.3, op:0.13 },
  { id:11, left:90,  w:6,  h:12, dur:8.8,  delay:4.9, op:0.09 },
  { id:12, left:96,  w:7,  h:14, dur:11.0, delay:1.0, op:0.10 },
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
          5%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translateY(108vh); opacity: 0; }
        }
        @keyframes dropSway {
          0%   { margin-left: 0px; }
          35%  { margin-left: 5px; }
          70%  { margin-left: -4px; }
          100% { margin-left: 0px; }
        }
      `}</style>
      {DROPS.map((d) => {
        const rx = d.w * 0.5;
        /* Teardrop: very pointed top, rounded fat bottom */
        const borderRadius = `${rx}px ${rx}px ${rx * 0.9}px ${rx * 0.9}px / ${d.h * 0.18}px ${d.h * 0.18}px ${d.h * 0.82}px ${d.h * 0.82}px`;
        return (
          <div
            key={d.id}
            style={{
              position: "absolute",
              top: 0,
              left: `${d.left}%`,
              width: d.w,
              height: d.h,
              opacity: d.op,
              borderRadius,
              background: `radial-gradient(ellipse 60% 55% at 40% 60%, rgba(190,235,255,0.95), rgba(70,175,235,0.55) 55%, rgba(30,130,200,0.15))`,
              boxShadow: `inset 0 1px 2px rgba(230,248,255,0.6), 0 1px 5px rgba(80,180,255,0.15)`,
              animation: `dropletFall ${d.dur}s ease-in ${d.delay}s infinite, dropSway ${d.dur * 0.75}s ease-in-out ${d.delay}s infinite`,
              willChange: "transform, opacity",
            }}
          />
        );
      })}
    </div>
  );
}
