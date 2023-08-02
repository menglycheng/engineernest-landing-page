/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#2F80ED",
      white: "#FFF",
      black: "#000",
      gray: "#FAFAFA",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
