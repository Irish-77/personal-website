"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

interface DiffusionTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  /** Wait until the component scrolls into view before animating. */
  triggerOnInView?: boolean;
}

export default function DiffusionText({
  children,
  className,
  duration = 1.8,
  delay = 0,
  as: Component = "div",
  triggerOnInView = false,
}: DiffusionTextProps) {
  const filterId = `diffusion-${useId().replace(/:/g, "")}`;
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const reduced = useReducedMotion();

  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });
  const shouldStart = reduced || !triggerOnInView || isInView;

  const [filterActive, setFilterActive] = useState(false);

  // Stable motion component reference so re-renders don't remount the text.
  const MotionComponent = useMemo(
    () => motion(Component as React.ElementType) as React.ComponentType<any>,
    [Component]
  );

  useEffect(() => {
    if (reduced) return;
    if (!shouldStart) return;

    setFilterActive(true);
    const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

    const turbCtrl = animate(0.9, 0.01, {
      duration,
      delay,
      ease,
      onUpdate: (v) => {
        turbulenceRef.current?.setAttribute("baseFrequency", String(v));
      },
    });

    const dispCtrl = animate(70, 0, {
      duration,
      delay,
      ease,
      onUpdate: (v) => {
        displacementRef.current?.setAttribute("scale", String(v));
      },
    });

    const timeout = setTimeout(
      () => setFilterActive(false),
      (duration + delay) * 1000 + 80
    );

    return () => {
      turbCtrl.stop();
      dispCtrl.stop();
      clearTimeout(timeout);
    };
  }, [shouldStart, duration, delay, reduced]);

  return (
    <span ref={wrapperRef} style={{ display: "contents" }}>
      {filterActive ? (
        <svg
          width="0"
          height="0"
          aria-hidden
          style={{ position: "absolute", pointerEvents: "none" }}
        >
          <filter id={filterId}>
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              scale="70"
            />
          </filter>
        </svg>
      ) : null}
      <MotionComponent
        className={className}
        style={
          filterActive
            ? { filter: `url(#${filterId})`, willChange: "filter, opacity" }
            : undefined
        }
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: shouldStart ? 1 : 0 }}
        transition={{
          duration: Math.max(0.3, duration * 0.7),
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </MotionComponent>
    </span>
  );
}
