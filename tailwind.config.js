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
        primary: '#CAA78D',
        secondary:'#D3D5D4',
        ternary:'#5F7880',
        aqua:'#5F7880',
        tan:'#CAA78D',
        cloud:'#D3D5D4',
        steel:'#4B5556',
        sun:'#CCA085',
        
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}