/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/background.png')",
      },
      textUnderlineOffset: {
        12: '12px', // Add a custom value (e.g., 12px)
        16: '16px', // Add another custom value (e.g., 16px)
        '2rem': '2rem', // Add a rem-based value
      },
      fontFamily: {
        imperial: ['Imperial Script', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
      colors:{
        'primary': '#ffd900',
        'secondary': 'rgb(1, 179, 239)',
        'secondary-2': '#0079a2',
        'secondary-3': '#0f576e',
        'dark-1': '#12151C',
        'dark-2': '#1c1f27',
        'dark-3': '#0F2E3C'


      }
    },
  },
  plugins: [],
}

