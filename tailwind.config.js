/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      base: 'tailwindcss/base',
      components: 'tailwindcss/components',
      utilities: 'tailwindcss/utilities',
    },
  },
  plugins: [],
  darkMode: 'class',
};
