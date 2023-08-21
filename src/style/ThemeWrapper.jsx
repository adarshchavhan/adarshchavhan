import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { darkTheme, lightTheme } from './Constants'

const ThemeWrapper = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme==='dark' ? darkTheme : lightTheme}>
        <GlobalStyle/>
        {children}
    </ThemeProvider> 
  )
}

export default ThemeWrapper