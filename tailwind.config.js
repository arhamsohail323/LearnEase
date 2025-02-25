/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor:"#f6931c",
        SecondaryColor:"#f6931c",
        color3rd:"#3f3d56",
        color4th:"#c0c0c0",
        cardbg:"#fdf9f3"
      }
    },
  },
  plugins: [],
}