/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:        "#0d0d0d",
        paper:     "#131313",
        ink:       "#edeae4",
        steel:     "#7a7672",
        steelSoft: "#4a4846",
        line:      "#1c1c1c",
        orange:    "#e85d26",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        display: ["Instrument Serif", "serif"],
        mono:    ["DM Mono", "monospace"],
      },
      maxWidth: { reading: "68ch" },
    },
  },
  plugins: [],
}
