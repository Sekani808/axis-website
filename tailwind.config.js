/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axis-blue': '#00d4ff',
        'axis-green': '#10b981',
        'axis-dark': '#0a2540',
      },
    },
  },
  plugins: [],
}