module.exports = {
  theme: {
    extend: {
      colors: {
        db_blue: {
          light: '#baddd7',
          DEFAULT: '#304a5a',
          dark: '#2c3549'
        },
        db_green: {
          DEFAULT: '#62826E',
          dark: '#54705F',
          dark2: '#5C7A68'
        }
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-hamburgers')
  ]
}
