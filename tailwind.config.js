/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkUnsaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        softVioletBlur: "rgb(117 0 190 / 54%)",
        mainWhite: "hsl(0, 0%, 100%)",
        mainTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        statTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lexend: ['"Lexend Deca"', 'sans-serif'],
    },
  },
  plugins: [],
};
