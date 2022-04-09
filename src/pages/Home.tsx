import HeroUnit from '../components/UI/HeroUnit'
import { Divider } from '@mui/material'
import Favorites from '../components/Favorites'

const Home = () => {
  return (
    <>
      <HeroUnit />
      <Divider variant='middle' />
      <Favorites />
    </>
  )
}

export default Home
