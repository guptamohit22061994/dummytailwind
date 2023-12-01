/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {},
    colors: {
      primarylight: '#6F7CB2',
      primarybutton: '#111B47',
      primarydark: '#091133',
      primarywhite: '#ffffff',
      primarygrey: '#5D6970',
      primaryblue: '#37447E',
      secondaryblue: '#222F65',

    },
    backgroundColor: {
      primarybutton: '#111B47',
      primarybackground: '#E7ECFF',
      white: '#ffffff',
    },
    backgroundImage: {
      'footer-texture': "url('/src/images/Rectangle.jpg')",
    },
    borderColor: {
      'border-slate-200': '#CDD1D4',
      primarydark: '#091133',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

