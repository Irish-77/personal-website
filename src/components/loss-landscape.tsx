"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { mulberry32 } from "@/lib/random";

interface LossLandscapeProps {
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  triggerOnInView?: boolean;
  /** Number of concentric contour rings. Default 5. */
  rings?: number;
  seed?: number;
}

const STEPS = 90;

function buildContour(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  distortion: number[]
): string {
  const points: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const theta = (i / STEPS) * Math.PI * 2;
    // Apply a low-frequency distortion to make the contour organic.
    const w =
      1 +
      0.12 *
        (Math.sin(theta * 2 + distortion[0]) +
          0.4 * Math.cos(theta * 3 + distortion[1]));
    const x = cx + rx * w * Math.cos(theta);
    const y = cy + ry * w * Math.sin(theta);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  points.push("Z");
  return points.join(" ");
}

/**
 * A 2D contour plot of a fictional loss surface. Rings draw in from inside-out
 * one after another. One-shot.
 */
export default function LossLandscape({
  className,
  width = 220,
  height = 140,
  duration = 1.3,
  delay = 0,
  triggerOnInView = false,
  rings = 5,
  seed = 47,
}: LossLandscapeProps) {
  const reduced = useReducedMotion();

  const contours = useMemo(() => {
    const rnd = mulberry32(seed);
    const cx = width * 0.5 + (rnd() - 0.5) * width * 0.15;
    const cy = height * 0.55 + (rnd() - 0.5) * height * 0.2;
    const maxR = Math.min(width, height) * 0.42;
    const out: { d: string }[] = [];
    for (let i = 0; i < rings; i++) {
      const fraction = (i + 1) / rings;
      const rx = maxR * fraction;
      const ry = maxR * fraction * (0.6 + rnd() * 0.2);
      out.push({
        d: buildContour(cx, cy, rx, ry, [rnd() * Math.PI * 2, rnd() * Math.PI * 2]),
      });
    }
    return out;
  }, [width, height, rings, seed]);

  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden
      className={className}
    >
      {contours.map((c, i) => {
        const opacity = 0.7 - i * 0.1;
        const target = { pathLength: 1, opacity };
        return (
          <motion.path
            key={i}
            d={c.d}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={1.2}
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            {...(triggerOnInView
              ? {
                  whileInView: target,
                  viewport: { once: true, amount: 0.3 },
                }
              : { animate: target })}
            transition={{
              duration: duration * 0.9,
              delay: delay + i * 0.18,
              ease,
            }}
          />
        );
      })}
    </svg>
  );
}
