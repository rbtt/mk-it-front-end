import { Grid, Card, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  image: string
}

const FavoriteItem = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Grid item xs={10} sm={6} md={2}>
      <Card
        onClick={() => navigate(`/movies/${props.title}`)}
        style={{ cursor: 'pointer' }}
      >
        <CardMedia component='img' image={props.image} />
      </Card>
    </Grid>
  )
}

export default FavoriteItem
