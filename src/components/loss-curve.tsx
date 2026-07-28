"use client";

import { useId, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { mulberry32 } from "@/lib/random";

interface LossCurveProps {
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  triggerOnInView?: boolean;
  /** When true, the curve diverges upward instead of converging to a plateau. */
  diverging?: boolean;
  /** Show faint x/y axis lines. */
  showAxes?: boolean;
  seed?: number;
}

const STEPS = 90;

function buildPath(
  width: number,
  height: number,
  diverging: boolean,
  seed: number
): string {
  const rnd = mulberry32(seed);
  const padTop = height * 0.08;
  const padBottom = height * 0.92;
  const span = padBottom - padTop;

  // Underlying signal: exponential decay 0.9 → 0.1, or growth 0.2 → 1.0 if diverging.
  const points: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const base = diverging
      ? Math.min(1.0, 0.18 + Math.pow(t, 1.4) * 0.9)
      : 0.85 * Math.exp(-t * 3.6) + 0.08;
    // Noise that decays over time for converging; stays choppy for diverging.
    const noiseAmp = diverging ? 0.05 + t * 0.15 : 0.32 * Math.exp(-t * 2.4);
    const noise = (rnd() - 0.5) * 2 * noiseAmp;
    const y = Math.max(0, Math.min(1, base + noise));
    const sx = t * width;
    const sy = padBottom - y * span;
    points.push(`${i === 0 ? "M" : "L"} ${sx.toFixed(2)} ${sy.toFixed(2)}`);
  }
  return points.join(" ");
}

export default function LossCurve({
  className,
  width = 280,
  height = 90,
  duration = 1.6,
  delay = 0,
  strokeWidth = 1.5,
  triggerOnInView = false,
  diverging = false,
  showAxes = false,
  seed = 31,
}: LossCurveProps) {
  const reduced = useReducedMotion();
  const gradId = `loss-grad-${useId().replace(/:/g, "")}`;

  const d = useMemo(
    () => buildPath(width, height, diverging, seed),
    [width, height, diverging, seed]
  );

  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showAxes ? (
        <g stroke="hsl(var(--border))" strokeWidth="0.5">
          <line x1="0" y1={height - 4} x2={width} y2={height - 4} />
          <line x1="2" y1="0" x2="2" y2={height} />
        </g>
      ) : null}

      <motion.path
        d={d}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeOpacity={0.65}
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        {...(triggerOnInView
          ? {
              whileInView: { pathLength: 1, opacity: 0.65 },
              viewport: { once: true, amount: 0.3 },
            }
          : { animate: { pathLength: 1, opacity: 0.65 } })}
        transition={{ duration, delay, ease }}
      />
    </svg>
  );
}
