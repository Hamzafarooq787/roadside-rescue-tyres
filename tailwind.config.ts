import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00E0C6",   // neon teal (main color in headings & highlights)
          secondary: "#1ED4B5", // lighter teal
          accent: "#00BFA6",    // darker teal for hover
        },

        dark: {
          DEFAULT: "#000000",   // main background
          soft: "#1a1a1a",      // sections
          card: "#111111",      // cards
        },

        text: {
          primary: "#ffffff",
          secondary: "#d1d5db",
          muted: "#9ca3af",
        },

        border: {
          subtle: "#2a2a2a",
        },
      },

      backgroundImage: {
        "gradient-teal":
          "linear-gradient(135deg, #00E0C6 0%, #00BFA6 100%)",
      },

      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "grow": "grow 0.3s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;