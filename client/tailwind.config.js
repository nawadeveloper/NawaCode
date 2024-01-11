/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nawa: {
          100: "#cce5df",
          200: "#7ae7c7",
          300: "#058489",
          400: "#2a4e4e",
          500: "#283030",
        },
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ultra: ["Ultra", "serif"],
      },
    },
  },
  plugins: [],
};
