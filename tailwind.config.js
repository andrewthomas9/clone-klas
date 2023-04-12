/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {

    extend: {
      colors: {
        'blue': {
          100: "#1127E3",
          200: '#1b2ae6'
        },
        'purple': {
          100: '#7344fc'
        },
        'gray': {
          100: '#00000080',
          200: '#000000CC',
          300: '#FFFFFF80',
          400: '#FFFFFCC'
        }
      },

      screens: {
        'tab': "950px",
        'tab-800': "800px",
        'lg-1150': "1150px"
      }
    },
  },
  plugins: [],
}

