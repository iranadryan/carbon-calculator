import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import { mainTheme } from './assets/styles/theme/main'

import { Home } from './pages/Home'
import { Calculator } from './pages/Calculator'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
])

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
