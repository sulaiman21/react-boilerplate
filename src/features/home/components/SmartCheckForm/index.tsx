import React from 'react'
import { Button, Card, CardActions, CardContent, Stack } from '@mui/material'

const SmartCheckForm: React.FC = () => {
  return (
    <Card sx={{ borderRadius: (theme) => theme.shape.borderRadius / 13 }}>
      <form>
        <CardContent>Smart Check app</CardContent>
        <CardActions>
          <Stack
            flex="1"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
            direction={{ md: 'row', xs: 'column-reverse' }}
          >
            <Button variant="outlined" fullWidth disabled>
              Check
            </Button>
          </Stack>
        </CardActions>
      </form>
    </Card>
  )
}

export default SmartCheckForm
