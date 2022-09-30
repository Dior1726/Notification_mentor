/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(1, 90%, 64%)',
        'primary-blue': 'hsl(219, 85%, 26%)',
        'light-gray-blue-1': 'hsl(210, 60%, 98%)',
        'light-gray-blue-2': 'hsl(211, 68%, 94%)',
        'light-gray-blue-3': 'hsl(205, 33%, 90%)',
        'gray-blue': 'hsl(219, 14%, 63%)',
        'dark-gray-blue-1': 'hsl(219, 12%, 42%)',
        'dark-gray-blue-2': 'hsl(224, 21%, 14%)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}