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
        50: '#f0f1f4',
        100: '#e2e4e9',
        200: '#c6cad2',
        300: '#a9afbc',
        400: '#8d95a5',
        500: '#707b8f',
        600: '#5a6372',
        700: '#434a56',
        800: '#2c313a',
        900: '#21252b',
        950: '#0b0c0e',
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
        sans: ['var(--tf-sans)', ...fontFamily.sans],
        mono: ['var(--tf-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
