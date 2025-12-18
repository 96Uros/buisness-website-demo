import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'rgba(24, 57, 43, 1)', // deep green in RGBA
      paper: 'rgba(36, 82, 60, 1)', // earthy green in RGBA
    },
    primary: {
      main: 'rgba(46, 125, 50, 1)', // green[700] in RGBA
      dark: 'rgba(20, 83, 45, 1)',
      light: 'rgba(102, 187, 106, 1)', // green[400] in RGBA
      contrastText: 'rgba(255,255,255,1)',
    },
    secondary: {
      main: 'rgba(38, 166, 154, 1)', // teal[400] in RGBA
      contrastText: 'rgba(255,255,255,1)',
    },
    text: {
      primary: 'rgba(232, 245, 233, 1)', // #e8f5e9 in RGBA
      secondary: 'rgba(183, 203, 179, 1)', // #b7cbb3 in RGBA
    },
    divider: 'rgba(188, 170, 164, 1)', // brown[200] in RGBA
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(46, 125, 50, 1)',
          color: 'rgba(255,255,255,1)',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
})
