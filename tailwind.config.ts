export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f00ff',
        surface: '#f7f7f7',
      },
    },
  },
}
