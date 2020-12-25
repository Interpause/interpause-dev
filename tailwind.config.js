const plugin = require('tailwindcss/plugin');

//very simplistic, probably should consider the multiple theming plugins available
function createThemePlugin(themeName){
  return plugin(({ addVariant, e }) => {
    addVariant(themeName, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${themeName} .${e(`${themeName}${separator}${className}`)},.${themeName}.${e(`${themeName}${separator}${className}`)}`
      })
    })
  })
}

function createGroupThemePlugin(themeName){
  return plugin(({ addVariant, e }) => {
    addVariant(themeName, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group .${e(`${themeName}${separator}${className}`)}`
      })
    })
  })
}

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
      fontFamily: {
        'comic':["Comic Sans MS", "Comic Sans", "cursive"]
      },
      backgroundImage: theme => ({
        //'hero-pattern': "url('/img/hero-pattern.svg')",
        //'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['light','disabled'],
      borderColor: ['light'],
      divideColor: ['light'],
      gradientColorStops: ['light'],
      placeholderColor: ['light'],
      ringColor: ['light'],
      ringOffsetColor: ['light'],
      textColor: ['light','disabled','group-disabled'],
      opacity: ['disabled'],
      textOpacity: ['disabled'],
      display: ['group-disabled'],
      cursor: ['hover','focus','disabled','group-disabled']
    },
  },
  plugins: [createThemePlugin('group-disabled'),createThemePlugin('light')],
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled', // Custom variant
    'disabled',
  ],
}
