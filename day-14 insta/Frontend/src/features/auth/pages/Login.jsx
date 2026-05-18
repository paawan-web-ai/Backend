import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import "../style/form.scss"
import axios from "axios"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const { handleLogin, loading } = useAuth()
    const navigate = useNavigate()

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()

        handleLogin(username, password)
            .then(res => {
                console.log(res)
                navigate("/")
            }
            )
    }
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onInput={(e) => {
                            setusername(e.target.value)
                        }}
                        value={username}
                        type="text"
                        name="username"
                        placeholder='Enter Username' />
                    <input
                        onInput={(e) => {
                            setpassword(e.target.value)
                        }}
                        value={password}
                        type="password"
                        name="password"
                        placeholder='Enter Password' />
                    <button>Login</button>
                </form>
                <div className='link'>
                    <p>Don't have an account? <Link to="/register" >Register</Link></p>
                </div>

            </div>
        </main>
    )
}

export default Login
