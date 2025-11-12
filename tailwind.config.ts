import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2F6FF",
          100: "#E2E9FF",
          200: "#C2D2FF",
          300: "#9FB8FF",
          400: "#6E91FF",
          500: "#3A63FF",
          600: "#2746DB",
          700: "#1D35AC",
          800: "#15277D",
          900: "#0E1B59"
        },
        accent: {
          500: "#FF7A45",
          600: "#FF5C20"
        },
        success: {
          500: "#00D87E"
        }
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at top, rgba(58,99,255,0.18), transparent 55%), radial-gradient(circle at 20% 70%, rgba(0,216,126,0.12), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,122,69,0.12), transparent 50%)"
      },
      boxShadow: {
        "glow-primary": "0 10px 40px rgba(58, 99, 255, 0.35)",
        "glow-accent": "0 8px 30px rgba(255, 92, 32, 0.25)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.55" },
          "70%": { transform: "scale(1.05)", opacity: "0.1" },
          "100%": { transform: "scale(0.95)", opacity: "0.0" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 4s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
