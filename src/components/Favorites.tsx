import { Container, Typography, Grid } from '@mui/material'
import FavoriteItem from './FavoriteItem'
// import { parsedJSON as favorites } from '../dummy_data'
import { useDispatch } from 'react-redux'
import { loadFavorites } from '../store/actions'
import { useSelector } from '../store/useSelector'
import { useEffect } from 'react'

const Favorites = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadFavorites())
  }, [])
  const favorites = useSelector((state) => state.favorites)
  return (
    <Container sx={{ py: 3 }} maxWidth='lg'>
      <Typography component='h2' align='center' variant='h3'>
        Your Favorites
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={3}
        mt={2}
      >
        {favorites.map((item) => (
          <FavoriteItem key={item.id} title={item.title} image={item.imageUri} />
        ))}
      </Grid>
    </Container>
  )
}

export default Favorites
