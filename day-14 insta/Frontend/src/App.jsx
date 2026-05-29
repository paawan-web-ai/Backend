import React from 'react'
import AppRoutes from "./routes/AppRoutes"
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'
import Feed from './features/post/pages/Feed.jsx'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
        <Feed />
      </AuthProvider>
    </div>
  )
}

export default App
