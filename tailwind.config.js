/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,css,js}",
    "./public/**/*.{html,css,js}",
    "./src/**/*.{html,css,js}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1c1c1c",
        secondary: "#efefef",
      },
    },
  },
  plugins: [],
};
