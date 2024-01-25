import { createTheme } from '@mui/material'

const defaultTheme = createTheme({
  typography: {
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightLight: 500,
    fontWeightRegular: 400,
  },
  palette: {
    bw: {
      black: '#000000',
      blackLight: '#222122',
      white: '#ffffff',
      grey: '#F8F8F8',
      greyLight: '#00000080',
      greyLightest: '#000000BF',
      backgroundColor: '#F7F7F7',
      blackLightest: '#00000040',
      green: '#7CC08B',
      greybtn: '#DCDCDC',
    },
    primary: {
      light: '#757ce8',
      main: '#0375BB',
      dark: '#002884',
    },
    secondary: {
      light: '#004F70',
      main: '#004F70',
      dark: '#004F70',
    },
    gradient: {
      default:
        'linear-gradient(0deg, rgba(0,85,136,1) 0%, rgba(3,136,217,1) 100%)',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 2,
})

export default defaultTheme
