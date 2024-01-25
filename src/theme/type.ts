interface BlackAndWhiteSimple {
  black: string
  blackLight: string
  blackLightest: string
  white: string
  grey: string
  greyLight: string
  greyLightest: string
  backgroundColor: string
  green: string
  greybtn: string
}

interface Gradient {
  default: string
}

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    main: string
    dark: string
    light: string
  }

  interface PaletteColor {
    main: string
    dark: string
    light: string
  }

  interface SimplePaletteColorOptions {
    main: string
    dark?: string
    light?: string
  }

  interface Palette {
    bw: BlackAndWhiteSimple
    gradient?: Gradient
  }

  interface PaletteOptions {
    bw: BlackAndWhiteSimple
    gradient?: Gradient
  }
}

export {}
