import { FC, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

import { ChosenTheme } from './ChosenTheme'

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useContext(ChosenTheme)
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const brandColor = '#00b8d4'
const createThemeHelper = (theme: 'dark' | 'light') => {
  return createTheme({
    palette: {
      mode: theme,
      primary: {
        main: brandColor
      },
      error: {
        main: 'rgb(232, 51, 51)'
      },
      success: {
        main: 'rgb(76,175,80)'
      },
      warning: {
        main: '#c9b458'
      }
    }
  })
}
