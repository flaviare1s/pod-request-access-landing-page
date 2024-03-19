/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Chivo': ['Chivo', 'sans-serif'],
      },
      colors: {
        dark: '#121725',
        green: '#54E6AF',
        dark_gray: '#2C344B',
      },
    },
  },
  plugins: [],
}
