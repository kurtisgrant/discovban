module.exports = {
  theme: {
    extend: {
      colors: {
        db_blue: {
          light: '#baddd7',
          DEFAULT: '#304a5a',
          dark: '#2c3549',
          dark2: '#243845'
        },
        db_green: {
          DEFAULT: '#62826E',
          dark: '#54705F',
          dark2: '#5C7A68',
          dark3: '#395242',
          dark4: '#344A3C'
        }
      },
      transitionProperty: {
        'height': 'height'
      },
      fontSize: {
        '10xl': ['10rem', '1'],
        '11xl': ['13rem', '1'],
        '12xl': ['16rem', '1'],
        '13xl': ['20rem', '1'],
        '14xl': ['24rem', '1']
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-20%)' },
        }
      },
      animation: {
        'header-scroll-5': 'scroll 5s linear infinite',
        'header-scroll-10': 'scroll 10s linear infinite',
        'header-scroll-20': 'scroll 20s linear infinite',
        'header-scroll-30': 'scroll 30s linear infinite',
        'header-scroll-35': 'scroll 35s linear infinite',
        'header-scroll-40': 'scroll 40s linear infinite',
        'header-scroll-45': 'scroll 45s linear infinite',
        'header-scroll-50': 'scroll 50s linear infinite',
        'header-scroll-60': 'scroll 60s linear infinite',
      }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-hamburgers')
  ]
}
