import { Container, Typography, Grid, Card, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  image: string
}

const FavoriteItem = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Grid item sm={6} xs={10} md={2}>
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
