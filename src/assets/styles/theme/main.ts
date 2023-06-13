import { DefaultTheme } from 'styled-components'

export const mainTheme: DefaultTheme = {
  colors: {
    base: {
      white: '#FEFEFE',
      100: '#ECEDEC',
      200: '#CDCECD',
      300: '#AFB0AF',
      400: '#929392',
      500: '#767776',
      600: '#5B5C5B',
      700: '#424242',
    },
    primary: {
      '500': '#89B53C',
    },
  },
  gradients: {
    main: 'radial-gradient(133.18% 191.41% at 116.86% 70.52%, #669933 0%, #ADD144 100%)',
    card: 'linear-gradient(220.92deg, #EDEFF2 -4.16%, #FEFEFE 111.32%)',
  },
  shadows: {
    card: '-8px 8px 8px rgba(0, 0, 0, 0.1)',
    input: '-4px 4px 8px rgba(0, 0, 0, 0.1)',
  },
}
