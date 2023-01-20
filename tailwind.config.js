/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkUnsaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        softVioletBlur: "rgba(170, 92, 219, 0.5)",
        mainWhite: "hsl(0, 0%, 100%)",
        mainTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        statTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
      },
      hueRotate: {
        300: '300deg',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lexend: ['"Lexend Deca"', 'sans-serif'],
    },
  },
  plugins: [],
};
