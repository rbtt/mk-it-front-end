import { Container, Typography, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from '../store/useSelector'
import { useEffect } from 'react'
import SearchItem from './SearchItem'

const SearchResults = () => {
  const results = useSelector((state) => state.searchResults)

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
        {results.map((item) => (
          <SearchItem
            navigateToDetails
            key={item.id}
            title={item.title}
            image={item.imageUri}
            description={item.summary}
            genres={item.genres}
            length={item.length}
            url={item.url}
            year={item.year}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default SearchResults
