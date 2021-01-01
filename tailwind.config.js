module.exports = {
  purge: false,
  darkMode: "class",
  theme: {
    zIndex: Object.fromEntries(['auto',100,75,50,25,0,-25,-50,-75,-100].map(n=>[n,n])),
    extend: {
      flex: {
        'expand':"1 0 auto"
      },
      fontFamily: {
        'comic': ["Comic Sans MS", "Comic Sans", "cursive"]
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
