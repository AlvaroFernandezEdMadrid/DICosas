/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'miFuente': [ "Bebas Neue", "sans-serif"]
      },
      colors:{
        'verdeShrek': '#8cb04e'
      }
    },
  },
  plugins: [],
}