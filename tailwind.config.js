/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#FAFAFA",
        beige: "#F5F3F0",
        pastel: {
          rosa: "#F5E6E1",
          azul: "#E8F4F8",
          verde: "#E8F5E8",
          bege: "#F5F1E8",
        },
        gray: {
          light: "#F0F0F0",
          med: "#666666",
          dark: "#333333",
        },
        black: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;