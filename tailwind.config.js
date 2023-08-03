/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite ",
      },
      keyframes: {
        blob: {
          "0%": {
            transfrom: "scale(1)",
          },
          "33%": {
            transfrom: "scale(1.2)",
          },
          "66%": {
            transfrom: "scale(0.8)",
          },
          "100%": {
            transfrom: "scale(1)",
          },
        },
      },
    },
    colors: {
      blue: "#2F80ED",
      lightblue: "#1845E6",
      white: "#FFF",
      black: "#000",
      gray: "#FAFAFA",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
