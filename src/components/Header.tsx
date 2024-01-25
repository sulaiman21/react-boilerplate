import React from 'react'
import { AppBar, styled, Toolbar, Typography } from '@mui/material'

import Image from './Image'

const Appbar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  backgroundColor: theme.palette.common.white,
  zIndex: 999,
  marginBottom: theme.spacing(5),
  color: theme.palette.common.black,
}))

const Header: React.FC = () => {
  return (
    <Appbar variant="outlined" elevation={0}>
      <Toolbar>
        <Image
          src="/images/logos/logo-shadow.png"
          alt="CSCS smartcheck web app"
          sx={{
            width: 60,
            height: 60,
          }}
        />
        <Typography variant="h6">CSCS SmartCheck</Typography>
      </Toolbar>
    </Appbar>
  )
}

export default Header
