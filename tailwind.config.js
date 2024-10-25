/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ["Anton", 'sans-serif'],
        'bebas-neue': ["Bebas Neue", 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif'],
      },
      colors: {
        "tint_blue": "#1230C3",
        "soft_blue": "#1288C3",
        "purple": "#4D12C3"
      }
    },
  },
  plugins: [],
}

