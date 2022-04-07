import { AnyAction } from 'redux'
import { Favorites } from './actions'
interface State {
  favorites: Favorites[]
}

const initialState: State = {
  favorites: [],
}

export const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: action.favorites,
      }
    default:
      return state
  }
}
