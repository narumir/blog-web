/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1280px",
    },
  },
  plugins: [],
}
