/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lessblack: "rgb(var(--color-bg))",
        overlay: "rgb(var(--color-overlay))",
      },
    },
  },
  plugins: [],
};
