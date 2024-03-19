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
        light_green: '#B3FFE2',
        dark_gray: '#2C344B',
        light_gray: '#C2CBE5',
        red: '#FB3E3E',
      },
    },
  },
  plugins: [],
}
