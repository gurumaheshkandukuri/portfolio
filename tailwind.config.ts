import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "414px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        foreground: "rgb(var(--color-text-primary-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        serif: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        hand: ["var(--font-hand)", "Segoe Print", "Bradley Hand", "cursive"],
      },
      maxWidth: {
        editorial: "1280px",
        ultrawide: "1440px",
        prose: "65ch",
      },
      transitionDuration: {
        fast: "var(--motion-fast)",
        base: "var(--motion-base)",
        slow: "var(--motion-slow)",
      },
      transitionTimingFunction: {
        editorial: "var(--ease-editorial)",
      },
    },
  },
  plugins: [],
};

export default config;
