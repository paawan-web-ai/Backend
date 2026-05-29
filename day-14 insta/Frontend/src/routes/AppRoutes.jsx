import { Routes, Route } from "react-router-dom"


import React from 'react'
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import Feed from "../features/post/pages/Feed"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes
