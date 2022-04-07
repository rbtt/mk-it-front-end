import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux'
import type { RootState } from '../App'

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
