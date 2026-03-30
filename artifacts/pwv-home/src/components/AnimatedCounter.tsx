import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  className = "" 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
    duration: 2500
  });
  
  const display = useTransform(spring, (current) => {
    let formatted = current.toFixed(decimals);
    // Add commas for thousands if no decimals and value > 999
    if (decimals === 0 && current >= 1000) {
      formatted = Math.floor(current).toLocaleString();
    }
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
