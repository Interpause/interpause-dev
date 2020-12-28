// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  sourceMaps: true,
  plugins: ['@emotion/babel-plugin', 'babel-plugin-macros'],
}