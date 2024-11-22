/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "custom-red": "#EF554A",
        "custom-beige": "#F9F4E9",
        "custom-red-title": "#E92349",
        "custom-purple": "#D94F7D",
        "custom-orange": "#F05922",
        "custom-gray": "#5C6670",
        "custom-magenta": "#EA2549",
        "custom-turquesa": "#00A99D",
      },
      fontFamily: {
        sansita: ["Sansita"],
        mulish: ["Mulish"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out",
      },
    },
  },
  plugins: [],
};
