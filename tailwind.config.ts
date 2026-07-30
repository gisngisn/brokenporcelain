import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: [
    "class",
  ],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
      },

      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans",
          "Arial",
          "sans-serif",
        ],

        gothic: [
          "Cinzel",
          "Times New Roman",
          "serif",
        ],
      },

      letterSpacing: {
        museum: "0.35em",
        title: "0.5em",
      },

      boxShadow: {
        museum:
          "0 40px 120px rgba(0,0,0,.8)",
      },

      animation: {
        float:
          "float 8s ease-in-out infinite",
        glow:
          "glow 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform:
              "translateY(0)",
          },
          "50%": {
            transform:
              "translateY(-10px)",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "0.7",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;