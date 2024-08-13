"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 dark:bg-gray-600 focus:outline-none"
      >
        <span className="sr-only">Toggle Theme</span>
        <span
          className={`${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        >
          {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;