// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#AF9F8C',
        aqua:'#5F7880',
        tan:'#CAA78D',
        cloud:'#D3D5D4',
        steel:'#4B5556',
        sun:'#CCA085'
      }
    },
  },
  variants: {},
  plugins: [],
}