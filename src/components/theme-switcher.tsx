"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className={`inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-background shadow transition-transform ${
          mounted && isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {mounted ? (
          isDark ? (
            <FaSun className="h-3 w-3 text-yellow-500" />
          ) : (
            <FaMoon className="h-3 w-3 text-blue-500" />
          )
        ) : null}
      </span>
    </button>
  );
}
