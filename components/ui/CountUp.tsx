"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: boolean;
  decimals?: number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
  separator = true,
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(eased * end);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration]);

  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : separator
    ? Math.round(value).toLocaleString("en-IN")
    : Math.round(value).toString();

  return (
    <span className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
