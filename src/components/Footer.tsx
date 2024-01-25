import React from 'react'
import { Stack, Typography } from '@mui/material'

import Image from './Image'
import Link from './Link'

const Footer: React.FC = () => {
  return (
    <Stack
      component="div"
      sx={{
        background: (theme) => theme.palette.gradient?.default,
        color: 'common.white',
      }}
      p={4}
      justifyContent="center"
      alignItems="center"
    >
      <Image src="/images/logos/logo-shadow.png" />
      <Typography variant="h6">
        Construction Skills Certification Scheme
      </Typography>

      <Typography>
        Designed and Developed by{' '}
        <Link
          to="https://stablelogic.com"
          target="_blank"
          rel="noreferrer"
          sx={{
            color: 'common.white',
            fontWeight: (theme) => theme.typography.fontWeightBold,
          }}
        >
          StableLogic
        </Link>
      </Typography>
    </Stack>
  )
}

export default Footer
