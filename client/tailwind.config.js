/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT"); 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif']
      },

      colors: {
        'light-blue': '#f4f9fd',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
})
