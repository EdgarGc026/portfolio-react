/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    { pattern: /^(.*?)/ }
  ],
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        //grid mobile layout
        'grid-layout-mobile': 'repeat(auto-fit, minmax(170px, 1fr))'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        "eerie-black": "#151515",
        "just-white": "#ffffff",
        "gray": "#808080",
        "vuejs": "#41b883",
        "flickr-blue": "#065fd4",
        "yale-blue": "#174888",
        "gray-c": "#cccccc",
        "gray-warm-light": "#F9F7F4",
      },
      boxShadow: {
        "card-shadow": "0 0 6px rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
};