/* eslint @typescript-eslint/no-var-requires: "off" */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      slate: {
        50: '#f1f3f4',
        100: '#e2e8e9',
        200: '#c5d0d3',
        300: '#a9b9bc',
        400: '#8ca1a5',
        500: '#6f8a90',
        600: '#596e73',
        700: '#435356',
        800: '#2c373a',
        900: '#161c1d',
        950: '#0b0e0e',
      },
      red: colors.red,
      blue: colors.blue,
      amber: colors.amber,
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
