import { createTheme, PaletteColorOptions } from '@mui/material'

declare module '@mui/material' {
  interface PaletteOptions {
    blue: PaletteColorOptions
    red: PaletteColorOptions
    orange: PaletteColorOptions
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blue: true
    red: true
    orange: true
  }

  interface ButtonPropsVariantOverrides {
    bordered: true
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'bordered' },
          style: {
            padding: '15px'
          }
        }
      ]
    }
  },
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
    blue: {
      main: '#42569A',
      dark: '#213888',
      contrastText: '#FFF'
    },
    red: {
      main: '#ba3333',
      dark: '#822323',
      light: '#c75b5b'
    },
    orange: {
      main: '#ff9800',
      dark: '#b26a00',
      light: '#ffac33'
    }
  }
})

export default theme
