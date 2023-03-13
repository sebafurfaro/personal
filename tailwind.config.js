/** @type {import('tailwindcss').Config} */
//const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      monumentBold: ['MonumentExtended-UltraBold','sans-serif'],
      monumentRegular: ['MonumentExtended-Regular','sans-serif'],
      unbounded: ['Unbounded', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-color': '#060e1a',
        'light-color': '#d1ddef'
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-dark-mode'),
  ],
}
