import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#667085",
        line: "#e6e8ee",
        brand: {
          coral: "#ff6b6b",
          mint: "#2dd4bf",
          blue: "#4f8cff",
          violet: "#8b5cf6"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.10)",
        glass: "0 18px 50px rgba(16, 24, 40, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
