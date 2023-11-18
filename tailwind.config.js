/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'arapey' : ['Basilia Compress D Medium', 'serif'],
      'open-sans' : ['Open sans', 'sans-serif']
    },
    extend: {
      colors : {
        'logo' : "#9C9259"
      },
      backgroundColor : {
        'menu' : '#00000080'
      }
    },
  },
  plugins: [],
}

