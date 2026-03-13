/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        alarma: {
          primary: '#31111d',
          accent: '#ffd9e4',
          muted: '#633b48',
          border: '#e2e8f0',
          track: '#f1f5f9',
          'toggle-track': '#c4a0ab',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
