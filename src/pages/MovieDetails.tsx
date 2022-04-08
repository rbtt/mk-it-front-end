import HeroUnit from '../components/UI/HeroUnit'
import { Divider, Container, Typography, Grid, Card, CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'
import SearchItem from '../components/SearchItem'
import Review from '../components/Review'

const MovieDetails = () => {
  const { title } = useParams()
  console.log('title: ', title)
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
      maxWidth='lg'
    >
      {/* <Typography variant='h2'>The Movie Details Page</Typography> */}
      {/* <Typography variant='h2'>Movie Title: {title}</Typography> */}
      <SearchItem
        navigateToDetails={false}
        key={1}
        title='Breaking Bad'
        image='https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum turpis eget finibus volutpat. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Cras condimentum eros sit amet pretium fermentum. Pellentesque euismod, massa
          non sollicitudin accumsan, elit nisi mollis erat, a vehicula est leo ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla nec nisi massa.'
        genres={['Drama', 'Thriller', 'Comedy']}
        length={90}
        url='https://youtube.com/'
        year={2009}
      />
      <Review />
    </Container>
  )
}

export default MovieDetails
