import { Container, Grid } from '@mui/material'
import { useSelector } from '../store/useSelector'
import SearchItem from './SearchItem'

const SearchResults = () => {
  const results = useSelector((state) => state.searchResults)

  return (
    <Container sx={{ py: 3 }} maxWidth='lg'>
      <Grid
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
            id={item.id}
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
