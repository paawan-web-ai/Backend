import React from 'react'
import AppRoutes from "./routes/AppRoutes"
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'
import { PostContextProvider } from './features/post/post.context.jsx'
const App = () => {
  return (
    <div>
      <AuthProvider>
        <PostContextProvider>
          <AppRoutes />
        </PostContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App
