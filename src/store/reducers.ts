import { AnyAction } from 'redux'
import { Favorites, SearchResults } from './actions'
interface State {
  favorites: Favorites[]
  searchResults: SearchResults[]
}

const initialState: State = {
  favorites: [],
  searchResults: [],
}

export const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: action.favorites,
      }
    case 'SEARCH_MOVIE':
      return {
        ...state,
        searchResults: action.searchResults,
      }
    case 'CLEAR_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: [],
      }
    default:
      return state
  }
}
