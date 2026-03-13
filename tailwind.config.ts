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
          primary: "#8AE600",   // lime green (main color in headings & highlights)
          secondary: "#72BE00", // darker lime for hover
          accent: "#067A63",    // teal accent for secondary buttons
        },

        dark: {
          DEFAULT: "#0A0A0A",   // header/footer background
          soft: "#111111",      // sections
          card: "#1a1a1a",      // cards
        },

        text: {
          primary: "#111111",
          secondary: "#444444",
          muted: "#666666",
        },

        border: {
          subtle: "#e0e0e0",
        },
      },

      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #8AE600 0%, #72BE00 100%)",
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
