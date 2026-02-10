/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3EFE9",        // warm paper
        sand: "#ECE7DF",      // surface
        ink: "#1F2933",       // headings
        steel: "#4B5563",     // body text
        steelSoft: "#6B7280",
        line: "#D6D0C6",
        orange: "#D97706",
        orangeSoft: "#F1C27D",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
