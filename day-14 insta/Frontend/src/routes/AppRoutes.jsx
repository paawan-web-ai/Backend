import { Routes, Route, Navigate } from "react-router-dom"

import React from 'react'
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import Feed from "../features/post/pages/Feed"
import CreatePost from "../features/post/pages/CreatePost"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    )
}

export default AppRoutes
