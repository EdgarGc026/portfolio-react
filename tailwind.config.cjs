/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#151515",
        "just-white": "#ffffff",
        "gray": "#808080",
        "vuejs": "#41b883",
        "flickr-blue": "#065fd4",
        "yale-blue": "#174888",
        "gray-c": "#cccccc"
      },
      boxShadow: {
        "card-shadow": "0 0 6px rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
};