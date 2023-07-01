/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '500px',
      },

      fontFamily:{
        roboto: "'Roboto', 'sans'"
      },

      done:{
        done: 'background-color: green, text-decoration: underline'
      }

    },
  },
  plugins: [],
}

