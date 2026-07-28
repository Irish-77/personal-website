"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Page transition. App-Router `template.tsx` files are remounted on every
 * navigation (unlike `layout.tsx`), so this is the right place for a per-page
 * intro animation.
 *
 * To avoid a flash on the *first* load (SSR'd content briefly hiding then
 * re-fading), we skip the animation on the very first mount of the session
 * and only animate on subsequent navigations.
 */

// Module-scoped so it survives template remounts across navigations.
let hasMountedBefore = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const skipAnimation = useRef(!hasMountedBefore);
  const reduced = useReducedMotion();

  useEffect(() => {
    hasMountedBefore = true;
  }, []);

  const animateIn = skipAnimation.current || reduced;

  return (
    <motion.div
      initial={animateIn ? false : { opacity: 0, filter: "blur(6px)", y: 8 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
