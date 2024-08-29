module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'], // Primary font, used in most element
      secondary: ['Roboto', 'sans-serif'] // Secondary font, alternate styling
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};