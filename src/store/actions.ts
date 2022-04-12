import { AnyAction } from 'redux'
import { RootState } from '../App'
import { ThunkAction } from 'redux-thunk'

import noImage from '../assets/noImage'
import { apiUrl } from '../env'

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

      await dispatch({
        type: 'SEARCH_MOVIE',
        searchResults: transformedData,
      })
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export const clearSearchResults = () => {
  return {
    type: 'CLEAR_SEARCH_RESULTS',
  }
}

export const loadFavorites = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${apiUrl}/favorites`)

      if (!response.ok) {
        throw new Error('Error while fetching Favorites.')
      }

      const resData = await response.json()

      await dispatch({
        type: 'LOAD_FAVORITES',
        favorites: resData,
      })
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export const addToFavorites = (
  id: number,
  title: string,
  imageUri: string
): AnyAction => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: { id, title, imageUri },
  }
}

export const removeFromFavorites = (id: number): AnyAction => {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    payload: { id },
  }
}
