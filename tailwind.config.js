/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#095073',
        'custom-green': '#2CB96C',
        'dark-green':'#019966'
      },
    },
  },
  plugins: [],
}

