import React from 'react'

import Home from './pages/home'

interface IRoutes {
  element: React.ReactNode
  path: string
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <Home />,
  },
]

export default routes
