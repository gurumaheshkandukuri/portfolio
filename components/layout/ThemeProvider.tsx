"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  readonly theme: ThemeMode;
  readonly setTheme: (mode: ThemeMode) => void;
  readonly toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

const STORAGE_KEY = "gmk-portfolio-theme";

function applyDocumentTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", mode);
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { readonly children: React.ReactNode }) {
  // Light mode is the PRIMARY experience by default
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      const initial: ThemeMode = saved === "dark" ? "dark" : "light";
      setThemeState(initial);
      applyDocumentTheme(initial);
    } catch {
      applyDocumentTheme("light");
    }
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    applyDocumentTheme(mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      applyDocumentTheme(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
