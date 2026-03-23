/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#282973',
        secondary: '#008080',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        'primary-container': '#282973',
        'secondary-container': '#90efef',
        'on-secondary-container': '#006e6e',
        'secondary-fixed': '#93f2f2',
        'secondary-fixed-dim': '#76d6d5',
        'on-secondary-fixed': '#002020',
        'on-secondary-fixed-variant': '#004f4f',
        'primary-fixed': '#e1e0ff',
        'primary-fixed-dim': '#c1c1ff',
        'on-primary-fixed': '#0e0c5c',
        'on-primary-fixed-variant': '#3d3e88',
        'on-primary-container': '#9294e4',
        'inverse-primary': '#c1c1ff',
        tertiary: '#361400',
        'tertiary-container': '#562500',
        'tertiary-fixed': '#ffdbc8',
        'tertiary-fixed-dim': '#ffb68b',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#d38a5c',
        'on-tertiary-fixed': '#321300',
        'on-tertiary-fixed-variant': '#6f3811',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        background: '#fdf9f4',
        'on-background': '#1c1c19',
        surface: '#fdf9f4',
        'on-surface': '#1c1c19',
        'surface-variant': '#e6e2dd',
        'on-surface-variant': '#464651',
        'surface-bright': '#fdf9f4',
        'surface-dim': '#ddd9d5',
        'surface-tint': '#5556a2',
        'surface-container': '#f1ede8',
        'surface-container-low': '#f7f3ee',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#ebe8e3',
        'surface-container-highest': '#e6e2dd',
        outline: '#777682',
        'outline-variant': '#c7c5d2',
        'inverse-surface': '#31302d',
        'inverse-on-surface': '#f4f0eb',


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