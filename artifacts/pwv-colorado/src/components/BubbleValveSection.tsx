import { useEffect, useRef } from "react";
import valveImg from "@assets/PWV_-_how_valve_works_image_1774323165404.png";

interface Bubble {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
  phase: number;
}

export function BubbleValveSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const bubbles: Bubble[] = [];
    const N = 40;

    function resize() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    function mkBubble(): Bubble {
      const w = canvas.width;
      const h = canvas.height;
      return {
        x: Math.random() * w * 0.38,
        y: Math.random() * h,
        r: 3 + Math.random() * 9,
        vx: 0.28 + Math.random() * 0.65,
        vy: (Math.random() - 0.5) * 0.25,
        opacity: 0.2 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
      };
    }

    for (let i = 0; i < N; i++) bubbles.push(mkBubble());

    function draw(t: number) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const midX = w * 0.5;
      const fadeZone = w * 0.13;

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.x += b.vx;
        b.y += b.vy + Math.sin(t * 0.0009 + b.phase) * 0.18;

        const dist = midX - b.x;
        let alpha = b.opacity;
        if (dist < fadeZone) alpha = b.opacity * Math.max(0, dist / fadeZone);

        if (alpha > 0.005) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(120,190,255,${alpha * 0.85})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.fillStyle = `rgba(180,220,255,${alpha * 0.07})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230,245,255,${alpha * 0.5})`;
          ctx.fill();
        }

        if (b.x > midX || alpha <= 0.005) {
          bubbles.splice(i, 1);
          bubbles.push(mkBubble());
        }
      }

      for (let i = 0; i < 5; i++) {
        const baseY = (h / 6) * (i + 1);
        const wave = Math.sin(t * 0.0007 + i * 1.3) * 5;
        ctx.beginPath();
        ctx.moveTo(midX + 20, baseY + wave);
        ctx.bezierCurveTo(
          w * 0.67, baseY + wave + 7,
          w * 0.82, baseY + wave - 7,
          w * 0.97, baseY + wave
        );
        ctx.strokeStyle = `rgba(56,182,255,${0.07 + i * 0.012})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#07091A] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400/70">
            The Smart Valve™ — How It Works
          </p>
        </div>
        <div
          ref={containerRef}
          className="relative h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30"
          style={{ background: "linear-gradient(135deg,#07091A 0%,#0A1628 100%)" }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          <div className="absolute top-4 left-5 text-[10px] font-semibold uppercase tracking-widest text-blue-300/50">
            Air + Water
          </div>
          <div className="absolute top-4 right-5 text-[10px] font-semibold uppercase tracking-widest text-blue-400/50">
            Water Only
          </div>

          <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative flex flex-col items-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <img
                src={valveImg}
                alt="Smart Valve™"
                className="relative z-10 h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_0_22px_rgba(0,121,242,0.65)]"
              />
              <span className="relative z-10 mt-1 text-[9px] font-bold uppercase tracking-widest text-blue-300/60">
                Smart Valve™
              </span>
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-gray-600 uppercase tracking-wider">
            Air exits before the meter reads — you only pay for water
          </div>
        </div>
      </div>
    </section>
  );
}
