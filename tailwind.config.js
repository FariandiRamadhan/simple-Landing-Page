/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/*.{html,jsx,js}"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(./altumcode2.jpg)"
      }
    },
  },
  plugins: [],
}

