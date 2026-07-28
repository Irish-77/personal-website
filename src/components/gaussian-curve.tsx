"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useMemo } from "react";

interface Gaussian {
  mu: number;       // center on the unit x-axis ([-3, 3])
  sigma: number;    // standard deviation
  weight?: number;  // peak height multiplier (defaults to 1)
}

interface GaussianCurveProps {
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  /** When true, also fill the area under each curve with a soft gradient. */
  fill?: boolean;
  /** Multiple Gaussians overlay as a mixture. Defaults to a single standard normal. */
  components?: Gaussian[];
  /** Wait until the component scrolls into view before animating. */
  triggerOnInView?: boolean;
}

const DEFAULT_COMPONENTS: Gaussian[] = [{ mu: 0, sigma: 1 }];
const X_MIN = -3.5;
const X_MAX = 3.5;
const STEPS = 100;

function pdf({ mu, sigma, weight = 1 }: Gaussian, x: number): number {
  return weight * Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma));
}

function buildPath(g: Gaussian, width: number, height: number, closed = false) {
  const top = height * 0.08;
  const bottom = height * 0.92;
  const span = bottom - top;

  // Normalize so peak height = 1 across the unit y-range.
  const peak = pdf(g, g.mu);

  const points: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const x = X_MIN + (X_MAX - X_MIN) * (i / STEPS);
    const y = pdf(g, x) / peak;
    const sx = ((x - X_MIN) / (X_MAX - X_MIN)) * width;
    const sy = bottom - y * span;
    points.push(`${i === 0 ? "M" : "L"} ${sx.toFixed(2)} ${sy.toFixed(2)}`);
  }
  if (closed) {
    points.push(`L ${width.toFixed(2)} ${bottom.toFixed(2)}`);
    points.push(`L 0 ${bottom.toFixed(2)}`);
    points.push("Z");
  }
  return points.join(" ");
}

export default function GaussianCurve({
  className,
  width = 240,
  height = 56,
  duration = 1.4,
  delay = 0,
  strokeWidth = 1.5,
  fill = false,
  components = DEFAULT_COMPONENTS,
  triggerOnInView = false,
}: GaussianCurveProps) {
  const gradId = `gauss-grad-${useId().replace(/:/g, "")}`;
  const reduced = useReducedMotion();

  const paths = useMemo(
    () =>
      components.map((g) => ({
        stroke: buildPath(g, width, height, false),
        fill: fill ? buildPath(g, width, height, true) : null,
      })),
    [components, width, height, fill]
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
      {fill ? (
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      ) : null}

      {paths.map((p, i) => (
        <g key={i}>
          {p.fill ? (
            <motion.path
              d={p.fill}
              fill={`url(#${gradId})`}
              stroke="none"
              initial={reduced ? false : { opacity: 0 }}
              {...(triggerOnInView
                ? {
                    whileInView: { opacity: 1 },
                    viewport: { once: true, amount: 0.3 },
                  }
                : { animate: { opacity: 1 } })}
              transition={{
                duration: duration * 0.8,
                delay: delay + i * 0.1,
                ease,
              }}
            />
          ) : null}
          <motion.path
            d={p.stroke}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeOpacity={0.55}
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            {...(triggerOnInView
              ? {
                  whileInView: { pathLength: 1, opacity: 0.55 },
                  viewport: { once: true, amount: 0.3 },
                }
              : { animate: { pathLength: 1, opacity: 0.55 } })}
            transition={{ duration, delay: delay + i * 0.15, ease }}
          />
        </g>
      ))}
    </svg>
  );
}
