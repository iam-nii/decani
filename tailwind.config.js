/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // pyellow: "#F4A950",
        pyellow: "#E39E4B",
        pblack: "#161B21",
      },
      fontFamily: {
        sans: ['"Google Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
