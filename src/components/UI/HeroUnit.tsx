import { Box, Typography, Stack, Button } from '@mui/material'
import { GitHub } from '@mui/icons-material'

export default function HeroUnit() {
  return (
    <>
      <Box
        sx={{
          p: 6,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ar=3:1&fit=crop')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box maxWidth='sm' marginRight={{ lg: 9 }}>
          <Typography
            component='h1'
            variant='h3'
            align='center'
            color='text.primary'
            gutterBottom
          >
            <Typography
              color={{ xs: 'secondary.main', md: 'text.primary' }}
              variant='h3'
              component='span'
            >
              MK-IT{' '}
            </Typography>{' '}
            Pre Intervew 'Hero Section'
          </Typography>
          <Typography variant='h5' align='center' color='text.secondary' paragraph>
            Hey this my Hero Element. Hope you like it.
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
            <Typography variant='h5' color='text.secondary'>
              Check the app at{' '}
            </Typography>
            <Button
              href='https://github.com/rbtt/mk-it-front-end'
              color='secondary'
              startIcon={<GitHub />}
              variant='text'
              size='large'
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
