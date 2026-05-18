/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F2F7',
          100: '#DDE2EF',
          200: '#BAC4DE',
          300: '#8E9EC5',
          400: '#6479AA',
          500: '#43588D',
          600: '#2E406F',
          700: '#202D52',
          800: '#141D38',
          900: '#0B1026',
          950: '#050814',
        },
        gold: {
          50: '#FBF9F4',
          100: '#F5EFE3',
          200: '#E7D9B8',
          300: '#D5C089',
          400: '#C0A358',
          500: '#AB8731',
          600: '#896C27',
          700: '#66511D',
          800: '#443613',
          900: '#251D09',
          950: '#130E03',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FBF7EF',
          200: '#F5EDD8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/patterns/islamic-pattern.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
