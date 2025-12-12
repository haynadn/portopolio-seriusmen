/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f172a', // Slate 900
          dark: '#020617', // Slate 950
          accent: '#38bdf8', // Sky 400
        },
        tani: {
          primary: '#16a34a', // Green 600
        },
        wedding: {
          primary: '#db2777', // Pink 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
