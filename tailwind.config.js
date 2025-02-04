/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          // "primary-color" : "#eee",
          "secondary-color" : "#fff",
          // "website-bg" : "#f8fafc"
        }
    },
  },
  plugins: [],
}

