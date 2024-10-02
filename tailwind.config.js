/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Custom medium breakpoint
        lg: '1280px', // Custom large breakpoint
      },
    },
  },
  plugins: [],
}