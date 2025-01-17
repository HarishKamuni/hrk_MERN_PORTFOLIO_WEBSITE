/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1b1d52',
        secondary: '#f58d0f',
        tertiary: '#05fcbf',
        bg: '#284863',
      },
    },
    screens: {
      lg: { max: '2023px' },
      // => @media (max-width: 1023px) { ... }

      // md: { max: '767px' },
      // // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
