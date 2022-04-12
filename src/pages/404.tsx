import { Box, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        userSelect: 'none',
      }}
    >
      <Box width='sm'>
        <Typography variant='h2' fontWeight='600'>
          404
        </Typography>
        <Typography variant='h3'>Page Not Found</Typography>
      </Box>
    </Box>
  )
}

export default NotFound
