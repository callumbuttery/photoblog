/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './Pages/**/*.tsx',
  ],
  theme: {},
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark'],
  }
}