import HeroUnit from '../components/UI/HeroUnit'
import { Divider, Container, Typography, Grid, Card, CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { title } = useParams()

  return (
    <>
      <Typography variant='h1'>The Movie Details Page</Typography>
      <Typography variant='h2'>Movie Title: {title}</Typography>
    </>
  )
}

export default MovieDetails
