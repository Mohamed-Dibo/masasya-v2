/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7e6",
          100: "#ffe4b3",
          200: "#ffd180",
          300: "#ffbe4d",
          400: "#ffab1a",
          500: "#e69500", // Main brand color
          600: "#b37400",
          700: "#805300",
          800: "#4d3200",
          900: "#1a1100",
        },
        wood: {
          DEFAULT: "#2a1810",
          dark: "#1a0f0a",
          light: "#3d251a",
        },
        dark: {
          bg: "#1a0f0a",
          card: "#2a1810",
          text: "#e8e0d8",
          border: "#3d251a",
        },
      },
      fontFamily: {
        arabic: ["Noto Sans Arabic", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(230, 149, 0, 0.1), 0 10px 20px -2px rgba(230, 149, 0, 0.05)",
        glow: "0 0 20px rgba(230, 149, 0, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(230, 149, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-shine":
          "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
