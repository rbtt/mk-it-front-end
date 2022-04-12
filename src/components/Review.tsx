import { Typography, Rating, TextField, Grid } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import { apiUrl } from '../env'

interface Props {
  movieId: number
  initialRating: number
  initialNotes: string
}

const Review = ({ movieId, initialRating, initialNotes }: Props) => {
  const [ratingValue, setRatingValue] = useState(initialRating)
  const [notesValue, setNotesValue] = useState(initialNotes)

  const ratingChangeHandler = useCallback(
    async (e: React.SyntheticEvent, newValue: number | null): Promise<void> => {
      const response = await fetch(`${apiUrl}/ratings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: movieId, rating: newValue }),
      })
      const newRating = await response.json()
      newRating && setRatingValue(newRating.rating)
    },
    [movieId]
  )

  const notesChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setNotesValue(e.target.value)
    },
    []
  )

  useEffect(() => {
    let timer = setTimeout(async () => {
      await fetch(`${apiUrl}/notes`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: movieId, notes: notesValue }),
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [notesValue, movieId])

  return (
    <Grid
      maxWidth='lg'
      container
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      spacing={2}
      mt={1}
    >
      <Grid item>
        <Typography variant='h4'>Your Review</Typography>
      </Grid>
      <Grid item>
        <Rating
          size='large'
          precision={0.5}
          value={ratingValue}
          onChange={ratingChangeHandler}
        />
      </Grid>
      <Grid item sx={{ width: { md: 600, sm: '90%', xs: '100%' } }}>
        <TextField
          multiline
          rows={6}
          fullWidth
          placeholder='Your private notes and comments about the movie...'
          value={notesValue}
          onChange={notesChangeHandler}
        />
      </Grid>
    </Grid>
  )
}

export default Review
