import React from 'react'

const theme = {
  colors: {
    blue: {
      light: '#baddd7',
      default: '#304a5a',
      dark: '#2c3549'
    },
    green: {
      light: '#62826E',
      default: '#54705F',
      dark: '#5C7A68'
    }
  }
}

export default function ThemeProvider(props) {
  return (
    <div theme={theme}>
      {props.children}
    </div>
  )
}
