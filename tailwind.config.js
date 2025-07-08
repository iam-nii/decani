/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pyellow: "#F4A950",
        pblack: "#161B21",
      },
    },
    // screens: {
    //   xs: "540px",
    // },
    // screens: {
    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    // },
  },
  plugins: [],
};
