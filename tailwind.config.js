/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F6F9E8",
        "primary-200": "#ADADAA",
        "primary-400": "#999999",
        "primary-500": "#555555",
        "primary-700": "#2D2D2D",
        "primary-900": "#212121",
        "secondary-400": "#F9F39B",
      },
      backgroundImage: () => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolveText: "url('./assets/gym/EvolveText.png')"
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
