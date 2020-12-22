module.exports = {
  purge: ['./pages/**/*.tsx','./components/**/*.tsx'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'inner-btn': 'inset 0 0 0.5em 0 rgba(0, 0, 0, 0.2)'
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: theme => ({
        //'hero-pattern': "url('/img/hero-pattern.svg')",
        //'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
