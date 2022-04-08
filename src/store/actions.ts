import { AnyAction } from 'redux'
import { RootState } from '../App'
import { ThunkAction } from 'redux-thunk'

import noImage from '../assets/noImage'

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
        imageUri: (item.show.image && item.show.image.medium) || noImage,
        title: item.show.name,
        year: new Date(item.show.premiered).getFullYear(),
        genres: item.show.genres,
        length: item.show.runtime,
        summary:
          item.show.summary &&
          item.show.summary.replace(/<\/?[^>]+(>|$)/g, '').replace(/&amp;/g, '&'),
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
