import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './NavBar'
import { yellow, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: yellow['700'],
    },
    secondary: {
      main: blue['700'],
    },
  },
})

const Layout: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>{props.children}</main>
    </ThemeProvider>
  )
}

export default Layout
