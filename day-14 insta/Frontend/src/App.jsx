import React from 'react'
import AppRoutes from "./routes/AppRoutes"
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
        <h1>Welcome to the App</h1>
      </AuthProvider>
    </div>
  )
}

export default App
