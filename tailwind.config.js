/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dentisttheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          neutral: "#3D4451",
          accent: '#3A4256',
          "base-100": '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

