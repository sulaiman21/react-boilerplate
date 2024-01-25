import React from 'react'
import { Stack, Typography } from '@mui/material'

import { SmartCheckForm } from './components'

const HomePage: React.FC = () => {
  return (
    <Stack
      component="div"
      direction={{ md: 'row', xs: 'column' }}
      spacing={5}
      flex="1"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flex="1">
        <Typography>Some Content</Typography>
      </Stack>
      <Stack flex="0.7">
        <SmartCheckForm />
      </Stack>
    </Stack>
  )
}

export default HomePage
