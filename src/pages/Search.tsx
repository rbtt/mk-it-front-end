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
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchResults from '../components/SearchResults'
import { useDispatch } from 'react-redux'
import { useSelector } from '../store/useSelector'
import { searchMovie, clearSearchResults } from '../store/actions'

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const searchTerm = decodeURI(location.search.slice(7))
  const dispatch = useDispatch()
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
      <Typography variant='h2' component='h1' paddingTop={2}>
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
          <TextField
            sx={{ display: 'flex', flex: 1, margin: 1 }}
            size='small'
            placeholder={searchTerm}
            color='secondary'
            value={searchInputValue}
            onChange={(e) => {
              setSearchInputValue(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={async () => {
              await dispatch(clearSearchResults())
              dispatch(searchMovie(searchInputValue))
              navigate(`/search?title=${searchInputValue}`)
            }}
            color='secondary'
            variant='outlined'
            size='medium'
            style={{ borderWidth: 2 }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <SearchResults />
    </Container>
  )
}

export default Search
