import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Box, InputBaseProps } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovie, clearSearchResults } from '../../store/actions'

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
            }}
          >
            My Movies Collection
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fillOpacity={0.5} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
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
              onClick={async () => {
                await dispatch(clearSearchResults())
                dispatch(searchMovie(value))
                value.length === 0
                  ? navigate('/search')
                  : navigate(`/search?title=${encodeURI(value)}`)
                setValue('')
              }}
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
