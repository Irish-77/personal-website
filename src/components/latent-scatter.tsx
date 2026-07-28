"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { mulberry32 } from "@/lib/random";

interface LatentScatterProps {
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  triggerOnInView?: boolean;
  /** Number of clusters the points settle into. Default 3. */
  clusters?: number;
  /** Dots per cluster. Default 22. */
  dotsPerCluster?: number;
  seed?: number;
}

interface Dot {
  initX: number;
  initY: number;
  finalX: number;
  finalY: number;
  cluster: number;
}

export default function LatentScatter({
  className,
  width = 280,
  height = 110,
  duration = 1.8,
  delay = 0,
  triggerOnInView = false,
  clusters = 3,
  dotsPerCluster = 22,
  seed = 17,
}: LatentScatterProps) {
  const reduced = useReducedMotion();

  const dots = useMemo<Dot[]>(() => {
    const rnd = mulberry32(seed);
    const out: Dot[] = [];
    const margin = 0.15;
    const centers = Array.from({ length: clusters }, (_, c) => ({
      x: width * (margin + (1 - 2 * margin) * (c / Math.max(clusters - 1, 1))),
      y: height * (0.3 + 0.4 * rnd()),
    }));
    for (let c = 0; c < clusters; c++) {
      const spread = Math.min(width, height) * 0.16;
      for (let i = 0; i < dotsPerCluster; i++) {
        out.push({
          initX: rnd() * width,
          initY: rnd() * height,
          finalX: centers[c].x + (rnd() - 0.5) * spread * 2,
          finalY: centers[c].y + (rnd() - 0.5) * spread,
          cluster: c,
        });
      }
    }
    return out;
  }, [width, height, clusters, dotsPerCluster, seed]);

  const clusterOpacity = (c: number) => 0.85 - c * 0.18;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden
      className={className}
    >
      {dots.map((d, i) => {
        const target = { cx: d.finalX, cy: d.finalY, opacity: clusterOpacity(d.cluster) };
        return (
          <motion.circle
            key={i}
            r={1.6}
            fill="hsl(var(--primary))"
            initial={
              reduced
                ? target
                : { cx: d.initX, cy: d.initY, opacity: 0 }
            }
            {...(triggerOnInView
              ? { whileInView: target, viewport: { once: true, amount: 0.3 } }
              : { animate: target })}
            transition={{
              duration,
              delay: delay + (i % dotsPerCluster) * 0.012,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        );
      })}
    </svg>
  );
}
