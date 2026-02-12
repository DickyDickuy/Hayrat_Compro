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
          50: '#eef0f8',
          100: '#d8dced',
          200: '#b8bfdb',
          300: '#959ec9',
          400: '#7481b9',
          500: '#5565a8',
          600: '#434f8d',
          700: '#2d2b74',
          800: '#252459',
          900: '#1b1940',
          950: '#0f0e25',
        },
        gold: {
          50: '#f9f7f0',
          100: '#f3eed9',
          200: '#e8ddb3',
          300: '#dcc888',
          400: '#d0b566',
          500: '#b4975a',
          600: '#9a7d4a',
          700: '#7d633d',
          800: '#695237',
          900: '#594532',
          950: '#32241a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
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
