/**
 * Seeded pseudo-random generator (mulberry32).
 * Use when you need deterministic randomness — e.g. SVG decorations that
 * must produce identical positions on the server and the client to avoid
 * hydration mismatches.
 */
export function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
