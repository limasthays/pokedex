/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3156C6',
        neutral: {
          black: '#2B3140',
          700: '#4F586E',
          500: '#6E7A96',
          300: '#99A2B8',
          100: '#D1D7E5',
          50: '#EDEEF8',
          white: '#FFFFFF',
        },

        bug: '#5BC468',
        dragon: '#FF5775',
        fairy: '#F19AB5',
        fire: '#EF8148',
        ghost: '#7E67F6',
        ground: '#B94D2A',
        normal: '#C5CCDC',
        psychic: '#F5629D',
        steel: '#8698C6',
        dark: '#687289',
        electric: '#F6C94F',
        fight: '#E3524A',
        flying: '#599BD9',
        grass: '#3F8A84',
        ice: '#78B6FF',
        poison: '#A87EF7',
        rock: '#A3A3AB',
        water: '#77D4F5',
      },
    },
  },
  plugins: [],
}
