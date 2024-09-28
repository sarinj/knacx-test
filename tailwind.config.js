/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        blue: {
          DEFAULT: '#2f4169',
          1: '#d8e8f5',
        },
        green: {
          DEFAULT: '#1cb99a',
          1: '#9dddcc',
          2: '#cff4d3',
        },
        red: {
          1: '#fc8b8b',
        },
        orange: {
          DEFAULT: '#fe9902',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
