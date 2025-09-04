/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
    theme: {
    extend: {
      colors: {
        orange: {
          400: "#FB923C",
        },
        yellow: {
          300: "#FCD34D",
        },
        red: {
          500: "#EF4444",
          700: "#B91C1C",
          800: "#991B1B",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

