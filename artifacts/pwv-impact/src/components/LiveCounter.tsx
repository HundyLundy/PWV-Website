import { useEffect, useState } from "react";

interface LiveCounterProps {
  className?: string;
}

export function LiveCounter({ className = "" }: LiveCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    // 28,000,000 gallons / year = ~0.8878 gallons per second
    const ratePerMs = 0.8878 / 1000;
    let frameId: number;

    const update = () => {
      const now = Date.now();
      const elapsedMs = now - start;
      setCount(elapsedMs * ratePerMs);
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <span className={className}>
      {count.toLocaleString('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      })}
    </span>
  );
}
