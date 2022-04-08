import { AnyAction } from 'redux'
import { RootState } from '../App'
import { ThunkAction } from 'redux-thunk'

export type Favorites = { id: number; title: string; imageUri: string }
export type SearchResults = {
  id: number
  imageUri: string
  title: string
  year: number
  genres: string[]
  length: number
  summary: string
  url: string
}

export const searchMovie = (
  searchTerm: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

      if (!response.ok) {
        throw new Error('Error while fetching search results.')
      }

      const resData = await response.json()
      // console.log('resData from action: ', resData)

      const transformedData: SearchResults[] = resData.map((item: any) => ({
        id: item.show.id,
        imageUri:
          (item.show.image && item.show.image.medium) ||
          'data:image/png;base64,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',
        title: item.show.name,
        year: new Date(item.show.premiered).getFullYear(),
        genres: item.show.genres,
        length: item.show.runtime,
        summary: item.show.summary && item.show.summary.replace(/<\/?[^>]+(>|$)/g, ''),
        url: item.show.officialSite || `https://google.com/search?q=${item.show.name}`,
      }))

      // console.log('transformedData: ', transformedData)
      await dispatch({
        type: 'SEARCH_MOVIE',
        searchResults: transformedData,
      })
      console.log('Successfully fetched search results.')
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export const clearSearchResults = () => {
  console.log('cleared search results')
  return {
    type: 'CLEAR_SEARCH_RESULTS',
  }
}

export const loadFavorites = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=breaking%20bad')

      if (!response.ok) {
        // console.log(response.json())
        throw new Error('Error while fetching Favorites.')
      }

      const resData = await response.json()
      const transformedData: Favorites = resData.map((item: any) => ({
        id: item.show.id,
        title: item.show.name,
        imageUri: item.show.image.medium,
      }))
      await dispatch({
        type: 'LOAD_FAVORITES',
        favorites: transformedData,
      })
      console.log('Successfully fetched Favorites.')
    } catch (err) {
      throw new Error(err as any)
    }
  }
}
