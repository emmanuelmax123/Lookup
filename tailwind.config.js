/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["lato", "sans-serif"],
      },
      screens: {
        xs: "375px",
        "xs-higher": "376px",
        "lg-fit": "920px",
        "sm-fit": "568px",
        "s-phone": "480px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
