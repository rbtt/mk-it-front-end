import { Container, Typography, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from '../store/useSelector'
import { useEffect } from 'react'
import SearchItem from './SearchItem'

const SearchResults = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)
  return (
    <Container sx={{ py: 3 }} maxWidth='lg'>
      <Grid
        // border='1px solid red'
        maxWidth='lg'
        container
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={2}
        mt={1}
      >
        {favorites.map((item) => (
          <SearchItem
            navigateToDetails
            key={item.id}
            title={item.title}
            image={item.imageUri}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum turpis eget finibus volutpat. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Cras condimentum eros sit amet pretium fermentum. Pellentesque euismod, massa
          non sollicitudin accumsan, elit nisi mollis erat, a vehicula est leo ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla nec nisi massa.'
            genres={['Drama', 'Thriller', 'Comedy']}
            length={90}
            url='https://youtube.com/'
            year={2009}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default SearchResults
