import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: {
        white: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
      }
      primary: {
        500: string
      }
    }
    gradients: {
      main: string
      card: string
    }
    shadows: {
      card: string
      input: string
    }
  }
}
