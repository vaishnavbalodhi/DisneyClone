/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': 'rgb(0 0 0 / 69%) 0px 26px 30px -10px',
        'custom-2': 'rgb(0 0 0 / 73%) 0px 16px 10px -10px',
      },
    },
    fontFamily: {
      'avenir': ['Avenir LT Std','sans-serif'],
    }
  },
  plugins: [],
}

