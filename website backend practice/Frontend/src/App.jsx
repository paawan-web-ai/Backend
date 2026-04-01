import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Nav />
    </BrowserRouter>

  )
}

export default App
