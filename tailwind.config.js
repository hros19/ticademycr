/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customMaroon: "#4a192c",
        hoverMaroon: "#6b2b3e"
      },
    },
  },
  plugins: [],
}