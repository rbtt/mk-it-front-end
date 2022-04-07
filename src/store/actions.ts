import { AnyAction } from 'redux'
import { RootState } from '../App'
import { ThunkAction } from 'redux-thunk'

export type Favorites = { id: number; title: string; imageUri: string }

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
