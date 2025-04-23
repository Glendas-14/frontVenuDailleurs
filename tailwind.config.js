/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainOrange': '#D83000',
        'secondaryOrange': '#7C2D12',
        'orangeChoco':'#5c0000',
        'simpleGray': '#E5E5E5',
        'darkGray': '#333333',
        'lightGray': '#A0A0A0',
      },
      backgroundImage: {
        'heroPattern': "url('/images/Bg.png')",
        'mainGradient': 'linear-gradient(to bottom right, #FF8A00, #D83000)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}