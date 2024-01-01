/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./src/**/*.{js,tsx,jsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      ...colors,
      primary: '#2d3047ff',
      secondary: '#2a9d8fff',
      pink: '#d90368ff',
      yellow: '#e09f3eff',
    },
  },
  plugins: [],
};
