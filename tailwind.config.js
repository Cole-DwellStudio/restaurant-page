/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        LobsterTwo: ["LobsterTwo", "serif"],
      },
      colors: {
        'pale-yellow': '#FFF9E5',
        'basil-green': '#315F39',
        'dark-grey': '#303030',
        'deep-blue': '#242C2F'
      },
      letterSpacing: {
        extrawide: "0.2em",
      }
    },
  },
  plugins: [],
};
