/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue' : "#0742AA",
      'pink' : "#D31975",
      'yellow' : "#ECE316",
      'white' : "#FFFFFF",
      'dark-yellow' : "#FFDE00"
    },
    fontFamily: {
      'bungee': ['Bungee', 'sans-serif'],
      'francois-one': ['"Francois One"', 'sans-serif'],
      'fredoka': ["Fredoka", 'sans-serif'],
      'blinker' : ["Blinker", 'sans-serif'],
      'porter' : ["Porter", 'sans-serif'],
      'podkova' : ["Podkova", 'sans-serif'],
      'cantarell' : ["Cantarell", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

