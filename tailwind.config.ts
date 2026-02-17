import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        "neon-cyan": "#00F5FF",
        "neon-violet": "#8B5CF6",
        "neon-amber": "#F59E0B",
        "neon-rose": "#FF2D78",
        "electric-blue": "#0080FF",
        // Backgrounds
        "void": "#03040A",
        "surface": "#0A0C15",
        "surface-raised": "#0F1120",
        "surface-overlay": "#141628",
        "glass": "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        "display": ["'Syne'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "monospace"],
        "body": ["'Outfit'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-sweep": "glowSweep 3s linear infinite",
        "count-up": "countUp 1.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "orbit": "orbit 12s linear infinite",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.7", filter: "brightness(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowSweep: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 245, 255, 0.4), 0 0 60px rgba(0, 245, 255, 0.15)",
        "neon-violet": "0 0 20px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.15)",
        "neon-amber": "0 0 20px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.15)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "glow-lg": "0 0 40px rgba(0, 245, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        "glass": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
