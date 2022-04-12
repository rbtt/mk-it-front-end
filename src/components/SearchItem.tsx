import { Typography, Grid, Link, Button, Box } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from '../store/useSelector'
import { apiUrl } from '../env'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../store/actions'

interface Props {
  navigateToDetails: boolean
  id: number
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
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)
  const [isFavorite, setIsFavorite] = useState<boolean>(
    !!favorites.find((item) => item.id === props.id)
  )
  const changeFavoriteHandler = async () => {
    if (isFavorite) {
      await fetch(`${apiUrl}/favorites`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: props.id }),
      })
      await dispatch(removeFromFavorites(props.id))
    } else {
      await fetch(`${apiUrl}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: props.id,
          title: props.title,
          imageUri: props.image,
        }),
      })
      await dispatch(addToFavorites(props.id, props.title, props.image))
    }
    setIsFavorite((prevValue) => !prevValue)
  }
  console.log('isFavorite:', isFavorite)
  return (
    <Grid item width='100%'>
      <Grid container direction='row' rowSpacing={1}>
        <Grid item xs={6} sm={4} md={3}>
          {props.navigateToDetails ? (
            <Box
              onClick={() => {
                navigate(`/movies/${props.title}`)
              }}
              sx={{ cursor: 'pointer' }}
            >
              <img src={props.image} loading='lazy' alt={props.title} />
            </Box>
          ) : (
            <img src={props.image} loading='lazy' alt={props.title} />
          )}
        </Grid>
        <Grid item xs={12} sm={8} md={9} sx={{ p: 2 }}>
          <Typography gutterBottom variant='h4' component='div'>
            {`${props.title} (${props.year})`}
          </Typography>
          <Typography variant='h6' marginBottom={1.5}>
            {props.genres.length > 0 &&
              `${props.genres.toString().replaceAll(',', ', ')}`}
            {props.genres.length > 0 && props.length && ' | '}
            {props.length && `${props.length} minutes`}
          </Typography>
          <Typography variant='body1'>{props.description}</Typography>
          <Typography marginBottom={1}>
            <Link href={props.url} color='secondary'>
              Visit official site
            </Link>
          </Typography>
          <Button
            variant='contained'
            color={isFavorite ? 'error' : 'success'}
            onClick={changeFavoriteHandler}
          >
            {`${isFavorite ? 'remove from' : 'add to'} favorites`}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchItem
