/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    colors: {
      ocean: '#16c0b0',
      leaf: '#84cf6a',
      mist: '#d8d8d8',
      midnight: '#39495c',
      white: '#ffffff',
    },
    screens: {
      md: '860px',
    },
  },
  plugins: [],
}
