/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fc',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'xs': ['14px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
        'sm': ['16px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        'base': ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        'lg': ['20px', { lineHeight: '32px', letterSpacing: '-0.03em' }],
        'xl': ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
        '2xl': ['30px', { lineHeight: '44px', letterSpacing: '-0.03em' }],
        '3xl': ['36px', { lineHeight: '52px', letterSpacing: '-0.03em' }],
        '4xl': ['48px', { lineHeight: '64px', letterSpacing: '-0.03em' }],
        '5xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.03em' }],
        '6xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.03em' }],
      },
      fontFamily: {
        'vietnam': ['Be Vietnam Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
