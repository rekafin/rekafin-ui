/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
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
        neutral: "#2D2D2D",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "640px",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen lg": {
            maxWidth: "1024px",
            paddingLeft: "2.25rem",
            paddingRight: "2.25rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            paddingLeft: "10rem",
            paddingRight: "10rem",
          },
        },
      });
    }),
  ],
};
