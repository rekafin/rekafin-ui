/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(120deg, #FFFFFF 1%, #BCEDFF 54.55%, #D9E0FE 84.89%, #FFFFFF 105%)",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "form-border": "#D7E6F0",
        "form-text": "#536471",
        "btn-primary": "#3A519D",
        "underline-color": "#249CD9",
      },
    },
  },
  plugins: [],
};
