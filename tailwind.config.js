/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5ED',
        cream: '#F1EBDD',
        sand: '#D9C8AD',
        clay: '#A65C44',
        olive: '#293B32',
        forest: '#1F3029',
        gold: '#B49B69',
        ink: '#2E302B',
        muted: '#77766C'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Arial', 'sans-serif']
      },
      letterSpacing: { editorial: '.24em' },
      boxShadow: { soft: '0 22px 75px rgba(27,31,26,.09)' },
      maxWidth: { editorial: '1440px' }
    }
  },
  plugins: []
};
