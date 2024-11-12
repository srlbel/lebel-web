/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "eb-garamond": ['"EB Garamond"', "serif"],
      },
      colors: {
        base: {
          light: "#eff1f5",
          dark: "#1e1e2e",
        },
        text: {
          light: "#4c4f69",
          dark: "#cdd6f4",
        },
        crust: {
          light: "#dce0e8",
          dark: "#11111b",
        },
        accent: {
          light: "#df8e1d",
          dark: "#f9e2af",
        },
        surface: {
          light: "#ccd0da",
          dark: "#313244",
        },
      },
    },
  },
  plugins: [],
};
