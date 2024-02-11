/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "540px",
      // => @media (min-width: 540px) { ... }

      desktop: "874px",
      // => @media (min-width: 874px) { ... }
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
