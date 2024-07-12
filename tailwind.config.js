/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#1B1C1E',
      },
      fontFamily:{
        bodyFont:['Inter", sans-serif']
      }
    },
  },
  plugins: [require('daisyui'),],
}

