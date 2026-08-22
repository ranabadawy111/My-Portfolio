/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#151312",
          900: "#1B1918",
          800: "#242120",
          700: "#332E2C",
          600: "#4A433F",
        },
        bone: {
          50: "#F7F5F1",
          200: "#E7E2D9",
          400: "#A39C92",
          500: "#84796E",
        },
        periwinkle: {
          300: "#B4BFFB",
          400: "#8E9EF8",
          500: "#7280F0",
          600: "#5A66D6",
        },
        gold: {
          400: "#E8B75C",
          500: "#D6A247",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.2), 0 16px 40px -16px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(114,128,240,0.25), 0 8px 30px -8px rgba(114,128,240,0.35)",
      },
    },
  },
  plugins: [],
}
