const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      db_blue: {
        light: '#baddd7',
        DEFAULT: '#304a5a',
        dark: '#2c3549'
      },
      db_green: {
        DEFAULT: '#87ab70',
        dark: '#5e836'
      },
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    }
  }
}
