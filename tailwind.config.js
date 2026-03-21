/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#282973',
        secondary: '#008080',


        background: '#f9fcfc',
        backgroundOne: '#dfdfea',
        backgroundDark: '#0e0e28',
        backgroundDarkOne: '#1e293b',

        servicesCardDark: '#0e0e28',
        servicesCardLight: '#f9fcfc',


        a: '#e6f2f2',
        b: '#e6f2f2',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


// 1, dfdfea 2, d9ecec  