import { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import SearchItem from '../components/SearchItem'
import Review from '../components/Review'
import { SearchResults } from '../store/actions'
import noImage from '../assets/noImage'

const MovieDetails = () => {
  const { title } = useParams()
  console.log('title: ', title)

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<SearchResults>({
    genres: [],
    id: 0,
    imageUri: '',
    length: 0,
    summary: '',
    title: '',
    url: '',
    year: 0,
  })

  useEffect(() => {
    ;(async function () {
      setIsLoading(true)
      const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${title}`)
      const resData = await response.json()
      setData({
        genres: resData.genres,
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
      setIsLoading(false)
    })()
  }, [])
  console.log(data)
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
      {/* <Typography variant='h2'>The Movie Details Page</Typography> */}
      {/* <Typography variant='h2'>Movie Title: {title}</Typography> */}
      <SearchItem
        navigateToDetails={false}
        title={data.title}
        image={data.imageUri}
        description={data.summary}
        genres={data.genres}
        length={data.length}
        url={data.url}
        year={data.year}
      />
      <Review />
    </Container>
  )
}

export default MovieDetails
