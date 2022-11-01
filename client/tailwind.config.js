/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fasthand :["Fasthand"],
        homefont: ["Permanent Marker"]
      },
      colors: {
        arvin: 
        {
          50: '#ffeeee',
          100: '#e2d4d4',
          200: '#c7b9b9',
          300: '#af9d9d',
          400: '#978181',
          500: '#7d6767',
          600: '#625050',
          700: '#473939',
          800: '#2d2121',
          900: '#170707',
        },
        bgarvin: 
        {
          50: '#ffeaea',
          100: '#ecc8c8',
          200: '#daa5a5',
          300: '#ca8281',
          400: '#ba5e5e',
          500: '#a04444',
          600: '#7d3534',
          700: '#5a2525',
          800: '#381515',
          900: '#190404',
        },
      },
    },
  },
  plugins: [],
}