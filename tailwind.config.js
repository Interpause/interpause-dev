/* https://tailwindcss.com/docs/configuration
 * https://tailwindcss.com/docs/theme
 * https://tailwindcss.com/docs/configuring-variants
 * https://tailwindcss.com/docs/plugins
 * https://tailwindcss.com/docs/optimizing-for-production
 * Don't: class="text-{{  error  ?  'red'  :  'green'  }}-600"
 * Do:    class="{{  error  ?  'text-red-600'  :  'text-green-600'  }}"
 * AKA all CSS classes should only be present in .tsx, stuff like toggling display
 * should be done similar to above rather than in code
 */
module.exports = {
  purge: ['./pages/**/*.tsx','./components/**/*.tsx'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
