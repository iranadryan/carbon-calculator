import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import { mainTheme } from './assets/styles/theme/main'

import { Home } from './pages/Home'
import { Calculator } from './pages/Calculator'
import { Result } from './pages/Result'
import { Admin } from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
  {
    path: '/result',
    element: <Result />,
  },
  {
    path: '/admin',
    element: <Admin />,
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
