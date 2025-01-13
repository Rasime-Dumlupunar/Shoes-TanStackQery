/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluee: "#4A69E2",
        yellow: "#FFA52F",

        white: {
          default: "#FFFFFF",
          fa: "#FAFAFA",
        },
        gray: {
          default: "#E7E7E3",
          main: "#70706E",
          dark: "#232321",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".writing-mode-vertical-rl": {
          writingMode: "vertical-rl",
        },
      });
    },
  ],
};
