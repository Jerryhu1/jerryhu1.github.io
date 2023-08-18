/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      'primary': {
        100: "#E8EDE3",
        200: "#D0DDC3",
        300: "#B7C5A9",
        400: "#A0AA97",
        500: "#8A9282",
        600: "#808A75",
        700: "#646D5A",
        800: "#4C5643",
        900: "#343F29",
      },
      'grey': {
        100: '#FBFFF8',
        200: '#F5F8F2',
        300: '#EAEAEA',
        400: '#DEDEDE',
        500: '#D4D4D4',
        600: '#BBBBBB',
        700: '#9B9B9B',
        800: '#696969',
        900: '#252624',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Inconsolata', 'serif'],
    },
  },
  plugins: [],
}

