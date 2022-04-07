import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import Layout from './components/UI/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='movies/:title' element={<MovieDetails />} />
      </Routes>
    </Layout>
  )
}

export default App
