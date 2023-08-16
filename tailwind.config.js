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
      black: "#000",
      slate: {
        50: "hsl(202, 30%, 93%)",
        100: "hsl(202, 30%, 84%)",
        200: "hsl(202, 30%, 73%)",
        300: "hsl(202, 30%, 64%)",
        400: "hsl(202, 30%, 52%)",
        500: "hsl(202, 30%, 40%)",
        600: "hsl(202, 30%, 24%)",
        700: "hsl(202, 30%, 16%)",
        800: "hsl(202, 30%, 12%)",
        900: "hsl(202, 30%, 7%)",
        950: "hsl(202, 30%, 5%)",
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
