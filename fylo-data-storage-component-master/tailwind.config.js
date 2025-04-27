/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html, js}"],
    theme: {
      extend: {
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],  // Adding Raleway to fontFamily
        },
      },
    },
    plugins: [],
  }
