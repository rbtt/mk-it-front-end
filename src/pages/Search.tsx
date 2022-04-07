import HeroUnit from '../components/UI/HeroUnit'
import { Divider, Container, Typography, Grid, Card, CardMedia } from '@mui/material'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector } from '../store/useSelector'

const Search = () => {
  const location = useLocation()
  const searchTerm = decodeURI(location.search.slice(1))

  return (
    <>
      <Typography variant='h1'>The Search Page</Typography>
      <Typography variant='h3'>Search term: {searchTerm}</Typography>
    </>
  )
}

export default Search
