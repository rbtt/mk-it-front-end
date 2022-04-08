import { Container, Typography, Grid, Link, Button, Box } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  navigateToDetails: boolean
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
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <Grid item maxWidth='90%'>
      <Grid container direction='row' rowSpacing={1}>
        <Grid item xs={2.5}>
          {props.navigateToDetails ? (
            <Box
              onClick={() => {
                navigate(`/movies/${props.title}`)
              }}
              sx={{ cursor: 'pointer' }}
            >
              <img src={props.image} loading='lazy' />
            </Box>
          ) : (
            <img src={props.image} loading='lazy' />
          )}
        </Grid>
        <Grid item xs={8} sx={{ p: 2 }}>
          <Typography gutterBottom variant='h4' component='div'>
            {`${props.title} (${props.year})`}
          </Typography>
          <Typography variant='h6'>
            {props.genres.length > 0 && `${props.genres.toString()}`}
            {props.genres.length > 0 && props.length && ' | '}
            {props.length && `${props.length} minutes`}
          </Typography>
          <Typography variant='body1' marginY={1}>
            {props.description}
          </Typography>
          <Typography marginBottom={1.5}>
            <Link href={props.url} color='secondary'>
              Visit official site
            </Link>
          </Typography>
          <Button
            variant='contained'
            color={isFavorite ? 'error' : 'success'}
            onClick={() => setIsFavorite((v) => !v)}
          >
            {`${isFavorite ? 'remove from' : 'add to'} favorites`}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchItem
