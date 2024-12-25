/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#151312",
        white: "#FFFFFF",
        gray: "#998F8F",
        soft_gray: "#B6B4BD",
        dark_gray: "#6A6B6E",
        orange: "#F46C38",
        green: "#C5FF41",
      },
    },
  },
  plugins: [],
};
