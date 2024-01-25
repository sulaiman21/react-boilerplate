import { Link as defaultLink } from 'react-router-dom'
import { styled } from '@mui/material'

const Link = styled(defaultLink)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: 'none',
}))

export default Link
