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
          primary: "#25E2F4",   // cyan (main accent color)
          secondary: "#1BBECE", // darker cyan for hover
          accent: "#0D6B7A",    // deep teal for secondary buttons
        },

        dark: {
          DEFAULT: "#102122",   // main background
          soft: "#132728",      // section backgrounds
          card: "#1C3537",      // card backgrounds
        },

        text: {
          primary: "#e0f7fa",
          secondary: "#a0c4c6",
          muted: "#6a9fa3",
        },

        border: {
          subtle: "#2a4a4c",
        },
      },

      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #25E2F4 0%, #1BBECE 100%)",
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
