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
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload.id),
      }
    default:
      return state
  }
}
