/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Skema warna ProGear (dark neon gaming)
        "pg-bg": "#0e1116",
        "pg-surface": "#161b22",
        "pg-surface-2": "#1f2630",
        "pg-text": "#eaeef5",
        "pg-muted": "#a8b3c1",
        "pg-primary": "#22d3ee",
        "pg-primary-ink": "#05161a",
        "pg-accent": "#a855f7",
        "pg-border": "#2a323d",
        "pg-focus": "#facc15",
        "pg-error": "#ff5c7a",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        pg: "0 4px 16px rgba(0, 0, 0, 0.35)",
        "pg-neon": "0 0 0 1px #22d3ee, 0 0 24px rgba(34, 211, 238, 0.25)",
      },
      maxWidth: {
        pg: "1080px",
      },
      transitionDuration: {
        pg: "200ms",
      },
    },
  },
  plugins: [],
};
