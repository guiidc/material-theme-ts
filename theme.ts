import { createTheme } from '@mui/material/styles'
import { PaletteColor, PaletteColorOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }

  interface Palette {
    green: PaletteColor
  }

  interface PaletteOptions {
    blue?: PaletteColorOptions
    red?: PaletteColorOptions
    orange?: PaletteColorOptions
    green: PaletteColorOptions
  }
  // interface PaletteOptions {
  //   green: PaletteColor
  // }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    green: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#33A0EB',
      main: '#1485D3',
      dark: '#0469AF',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      dark: '#3C3C3C',
      contrastText: '#FFF'
    },
    green: {
      dark: '#8f9a27',
      main: '#cddc39',
      light: '##d7e36',
      contrastText: ''
    }
  }
})

export default theme
