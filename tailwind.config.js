/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    container: {
      screens: {
        '2xl': '1290px',
      },
      padding: '15px',
      center: true,
    },
    extend: {
      fontFamily: {
        main: 'Open Sans, sans-serif'
      },
      colors: {
        blue: '#132337',
        gold: '#978849',
        gray: '#AEBEB9'
      }
    },
  },
  plugins: [],
}

