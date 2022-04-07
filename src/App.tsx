import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import Layout from './components/UI/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './store/reducers'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export type RootState = ReturnType<typeof store.getState>

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='movies/:title' element={<MovieDetails />} />
        </Routes>
      </Layout>
    </Provider>
  )
}

export default App
