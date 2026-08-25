"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-slate-200/80 dark:bg-slate-800/80 animate-pulse ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark/Light Theme"
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-slate-800/90 text-amber-300 hover:bg-slate-700 border border-amber-400/20 shadow-md shadow-amber-900/10"
          : "bg-slate-100 text-blue-900 hover:bg-slate-200 border border-slate-200 shadow-sm"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100 text-slate-800" />
        )}
      </div>
    </button>
  );
}
