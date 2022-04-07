import { Container, Typography, Grid, Link, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  year: number
  genres: string[]
  length: number
  description: string
  url: string
  image: string
}

const SearchItem = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Grid item maxWidth='90%'>
      <Grid container direction='row' rowSpacing={1}>
        <Grid item xs={2.3}>
          <img src={props.image} loading='lazy' />
        </Grid>
        <Grid item xs={8} sx={{ p: 2 }}>
          <Typography gutterBottom variant='h4' component='div'>
            {props.title} ({props.year})
          </Typography>
          <Typography variant='h6'>
            {props.genres.toString()} | {props.length} minutes
          </Typography>
          <Typography variant='body1' marginY={1}>
            {props.description}
          </Typography>
          <Typography marginBottom={1.5}>
            <Link href={props.url} color='secondary'>
              Visit official site
            </Link>
          </Typography>
          <Button variant='contained' color='success'>
            Add To Favorites
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchItem
