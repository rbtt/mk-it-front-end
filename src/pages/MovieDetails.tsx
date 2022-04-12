import { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import SearchItem from '../components/SearchItem'
import Review from '../components/Review'
import { SearchResults } from '../store/actions'
import noImage from '../assets/noImage'
import { apiUrl } from '../env'

const MovieDetails = () => {
  const { title } = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<SearchResults | null>(null)
  const [review, setReview] = useState<{ rating: number; notes: string } | null>(null)

  useEffect(() => {
    ;(async function () {
      setIsLoading(true)
      const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${title}`)
      const resData = await response.json()
      setData({
        genres: (resData.genres && resData.genres) || [],
        id: resData.id,
        imageUri: (resData.image && resData.image.medium) || noImage,
        length: resData.runtime,
        summary:
          (resData.summary &&
            resData.summary.replace(/<\/?[^>]+(>|$)/g, '').replace(/&amp;/g, '&')) ||
          'No description.',
        title: resData.name,
        url: resData.officialSite || `https://google.com/search?q=${resData.name}`,
        year: new Date(resData.premiered).getFullYear(),
      })

      // console.log(JSON.stringify({ id: resData.id }))

      const ratingResp = await fetch(`${apiUrl}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: resData.id }),
      })
      const notesResp = await fetch(`${apiUrl}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: resData.id }),
      })

      if (ratingResp.ok && notesResp.ok) {
        const { rating } = await ratingResp.json()
        const { notes } = await notesResp.json()
        setReview({ notes, rating })
      } else {
        setReview({ rating: 0, notes: '' })
      }

      setIsLoading(false)
    })()
  }, [title])

  if (isLoading) {
    return (
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <CircularProgress />
      </Container>
    )
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
      maxWidth='lg'
    >
      {data && (
        <SearchItem
          navigateToDetails={false}
          id={data.id}
          title={data.title}
          image={data.imageUri}
          description={data.summary}
          genres={data.genres}
          length={data.length}
          url={data.url}
          year={data.year}
        />
      )}
      {review && data && (
        <Review
          movieId={data.id}
          initialRating={review.rating}
          initialNotes={review.notes}
        />
      )}
    </Container>
  )
}

export default MovieDetails
