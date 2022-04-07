import HeroUnit from '../components/UI/HeroUnit'
import { Divider, Container, Typography, Grid, Card, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const cards = [1, 2, 3, 4, 5]

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
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
              <Card
                onClick={() => navigate('/movies/breaking bad')}
                style={{ cursor: 'pointer' }}
              >
                <CardMedia
                  component='img'
                  image='https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg'
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
