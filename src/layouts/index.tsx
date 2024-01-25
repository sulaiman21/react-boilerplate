import React from 'react'
import { Box, Container } from '@mui/material'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface ILayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: 'bw.grey' }}>
      <Header />
      <Container sx={{ minHeight: '100dvh' }}>{children}</Container>
      <Footer />
    </Box>
  )
}

export default BaseLayout
