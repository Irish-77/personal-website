"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ConvKernelProps {
  className?: string;
  /** Total size of the grid in pixels. Default 40. */
  size?: number;
  delay?: number;
  triggerOnInView?: boolean;
}

/**
 * A small 3x3 grid of cells that flash in row-major order — like a convolution
 * kernel sliding/activating. One-shot.
 */
export default function ConvKernel({
  className,
  size = 40,
  delay = 0,
  triggerOnInView = false,
}: ConvKernelProps) {
  const reduced = useReducedMotion();
  const cell = size / 3;
  const inset = cell * 0.12;
  const cellSize = cell - inset * 2;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      aria-hidden
      className={className}
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const x = col * cell + inset;
        const y = row * cell + inset;
        const target = { opacity: [0, 0.9, 0.25] };
        return (
          <motion.rect
            key={i}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            rx={cellSize * 0.18}
            fill="hsl(var(--primary))"
            initial={reduced ? { opacity: 0.25 } : { opacity: 0 }}
            {...(triggerOnInView
              ? {
                  whileInView: target,
                  viewport: { once: true, amount: 0.5 },
                }
              : { animate: target })}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.07,
              times: [0, 0.45, 1],
              ease: "easeOut",
            }}
          />
        );
      })}
    </svg>
  );
}
