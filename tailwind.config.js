/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction: {
        "slow-down": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "left-to-right": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      fontFamily: {
        heading: ["Tektur", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        semibold: 900,
      },
      colors: { white: "#FCFCFC", skin: "#1D232A" },
      animation: {
        "slow-spin": "spin 10s linear infinite",
      },
      dropShadow: {
        yellow: "0 0 1px rgba(255, 255, 0, 1)",
        white: "0 0 1px rgba(255, 255, 255, 1)",
        "yellow-md": "0 6px 6px rgba(255, 255, 0, 0.5)",
        "yellow-lg": "0 10px 8px rgba(255, 255, 0, 0.7)",
        "white-md": "0 4px 4px rgba(255, 255, 255, 1)",
        "white-lg": "0 0 20px rgba(255, 255, 255, 1)",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
