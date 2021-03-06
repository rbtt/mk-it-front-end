import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovie, clearSearchResults } from '../../store/actions'
import { Home } from '@mui/icons-material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchAppBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: 1,
          }}
        >
          <Typography
            onClick={() => {
              dispatch(clearSearchResults())
              navigate('/')
            }}
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: { xs: 'none', sm: 'block' },
              userSelect: 'none',
              cursor: 'pointer',
              backgroundColor: 'primary.main',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            My Movies Collection
          </Typography>
          <IconButton
            onClick={() => navigate('/')}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <Home sx={{ fontSize: 33 }} />
          </IconButton>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              await dispatch(clearSearchResults())
              dispatch(searchMovie(value))
              value.length === 0
                ? navigate('/search')
                : navigate(`/search?title=${encodeURI(value)}`)
              setValue('')
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: { xs: '100%', sm: 'inherit' },
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon fillOpacity={0.5} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search???'
                  inputProps={{ 'aria-label': 'search' }}
                  spellCheck='false'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Search>
              <Button
                sx={{ marginLeft: 1 }}
                variant='outlined'
                color='secondary'
                type='submit'
              >
                Search
              </Button>
            </Box>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
