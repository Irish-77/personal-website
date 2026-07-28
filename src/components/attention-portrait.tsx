"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { createNoise2D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface AttentionPortraitProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number; // milliseconds
}

const PATCH_COUNT = 6;

function parsePrimaryHsl(): [number, number, number] {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .trim();
  if (!raw) return [210, 60, 50];
  const parts = raw.split(/\s+/);
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]);
  const l = parseFloat(parts[2]);
  if ([h, s, l].some(Number.isNaN)) return [210, 60, 50];
  return [h, s, l];
}

export default function AttentionPortrait({
  src,
  alt,
  className,
  duration = 2200,
}: AttentionPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const [overlayDone, setOverlayDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setOverlayDone(true);
      return;
    }
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const [hue, sat, light] = parsePrimaryHsl();

    const noise = createNoise2D();
    const patches = Array.from({ length: PATCH_COUNT }, (_, i) => ({
      phaseX: i * 7.31,
      phaseY: i * 11.19,
      baseRadius: Math.max(w, h) * (0.32 + (i % 3) * 0.08),
      speed: 0.5 + (i % 2) * 0.25,
    }));

    let raf = 0;
    const start = performance.now();
    const totalSec = duration / 1000;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / totalSec, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      const fadeIn = Math.min(t * 6, 1);
      const fadeOut = t < 0.7 ? 1 : Math.max(0, 1 - (t - 0.7) / 0.3);
      const overall = Math.min(fadeIn, fadeOut);

      ctx.clearRect(0, 0, w, h);

      if (overall > 0) {
        ctx.globalCompositeOperation = "screen";
        patches.forEach((p, idx) => {
          const nx = noise(eased * p.speed + p.phaseX, idx * 0.5);
          const ny = noise(eased * p.speed + p.phaseY, idx * 0.5 + 13.7);
          const cx = w * (0.5 + nx * 0.42);
          const cy = h * (0.5 + ny * 0.42);
          const r = p.baseRadius * (0.55 + eased * 0.4);
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          grad.addColorStop(
            0,
            `hsla(${hue}, ${sat}%, ${light}%, ${0.55 * overall})`
          );
          grad.addColorStop(1, `hsla(${hue}, ${sat}%, ${light}%, 0)`);
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        });
      }

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOverlayDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, reduced]);

  const totalSec = duration / 1000;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-2xl", className)}
    >
      <motion.div
        initial={
          reduced
            ? false
            : { opacity: 0, filter: "blur(8px) saturate(0.5)" }
        }
        animate={{ opacity: 1, filter: "blur(0px) saturate(1)" }}
        transition={{ duration: totalSec * 0.85, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
        />
      </motion.div>

      {!overlayDone ? (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        />
      ) : null}
    </div>
  );
}
