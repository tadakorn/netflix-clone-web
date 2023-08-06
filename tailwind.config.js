/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg,transparent,#14141400 0,#14141426 15%,#14141459 29%,rgb(20 20 20 / 58%) 44%,#141414 68%,#141414)",
      },
    },
  },
  plugins: [],
};
