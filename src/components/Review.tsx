import { Container, Typography, Rating, TextField, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

const Review = () => {
  const [ratingValue, setRatingValue] = useState(4.5)
  const [notesValue, setNotesValue] = useState('')
  console.log(`component re-rendered => value: ${notesValue}`)
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('dispatching action to update ratingValue')
      console.log('dispatching action to update notesValue')
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [ratingValue, notesValue])
  return (
    <Grid
      maxWidth='lg'
      container
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      spacing={2}
      mt={1}
      paddingLeft={7}
    >
      <Grid item>
        <Typography variant='h4'>Your Review</Typography>
      </Grid>
      <Grid item>
        <Rating
          size='large'
          precision={0.5}
          value={ratingValue}
          onChange={(e, newValue) => {
            newValue && setRatingValue(newValue)
          }}
        />
      </Grid>
      <Grid item sx={{ width: '50%' }}>
        <TextField
          multiline
          rows={5}
          fullWidth
          placeholder='Your private notes and comments about the movie...'
          value={notesValue}
          onChange={(e) => setNotesValue(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default Review