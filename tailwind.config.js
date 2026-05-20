/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F3F2FB',
          100: '#E6E4F6',
          200: '#CDC9EE',
          300: '#B0AAE3',
          400: '#7F77DD',
          500: '#6960D2',
          600: '#534AB7',
          700: '#443D96',
          800: '#363074',
          900: '#292554',
          950: '#16133A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
