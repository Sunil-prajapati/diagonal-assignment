/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        regular:['Regular'],
        semiBold:['SemiBold'],
        light:['Light'],
        bold:['Bold'],
        extraLight:['ExtraLight']
      }
    },
  },
  plugins: [],
}

