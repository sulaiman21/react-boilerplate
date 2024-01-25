import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { store } from './libs'
import routes from './route'
import theme from './theme'

import './App.css'

const App: React.FC = () => {
  const content = useRoutes(routes)
  return (
    <HelmetProvider>
      <Helmet title="CSCS SmartCheck App" defaultTitle="CSCS SmartCheck App" />
      <Provider store={store}>
        <ThemeProvider theme={theme}>{content}</ThemeProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default App
