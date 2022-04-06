import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Divider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './NavBar'
import HeroUnit from './HeroUnit'
import { yellow, blue } from '@mui/material/colors'

const cards = [1, 2, 3, 4, 5]

const theme = createTheme({
  palette: {
    primary: {
      main: yellow['700'],
    },
    secondary: {
      main: blue['700'],
    },
  },
})

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <HeroUnit />
        <Divider variant='middle' />
        <Container sx={{ py: 3 }} maxWidth='lg'>
          <Typography component='h1' align='center' variant='h3'>
            Your Favorites
          </Typography>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={3}
            mt={2}
          >
            {cards.map((card) => (
              <Grid item sm={6} xs={10} md={2} key={card}>
                <Card>
                  <CardMedia
                    component='img'
                    image='https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  )
}
