import {
  Divider,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  TextField,
  Button,
  Box,
} from '@mui/material'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector } from '../store/useSelector'
import SearchResults from '../components/SearchResults'

const Search = () => {
  const location = useLocation()
  const searchTerm = decodeURI(location.search.slice(1))

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth='lg'
    >
      <Typography variant='h2' component='h1'>
        Search
      </Typography>
      <Grid
        padding={1}
        alignItems='center'
        justifyContent='center'
        container
        // spacing={2}
        direction={{ xs: 'column', md: 'row', lg: 'row' }}
      >
        <Grid item xs={6}>
          <TextField sx={{ display: 'flex', flex: 1, margin: 1 }} size='small' />
        </Grid>
        <Grid item xs={1}>
          <Button color='secondary' variant='outlined' size='medium'>
            Search
          </Button>
        </Grid>
      </Grid>
      <SearchResults />
    </Container>
  )
}

export default Search
