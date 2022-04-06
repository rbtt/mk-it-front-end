import { Container, Box, Typography, Stack, Button } from '@mui/material'

export default function HeroUnit() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 6,
          pb: 4,
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h3'
            align='center'
            color='text.primary'
            gutterBottom
          >
            MK-IT Pre Intervew 'Hero Unit'
          </Typography>
          <Typography variant='h5' align='center' color='text.secondary' paragraph>
            Hey this my Hero Element. Hope you like it. TODO: add background image
          </Typography>
          <Stack sx={{ pt: 1 }} direction='row' spacing={2} justifyContent='center'>
            <Button variant='contained'>GitHub</Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
