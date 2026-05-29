import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const { loading, handleRegister } = useAuth()

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await handleRegister(username, email, password)
            .then(res => {
                console.log(res)
                navigate("/")
            })
    }

    return (
        <div>
            <main>
                <div className="form-container">
                    <h1>Register</h1>
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
                                setemail(e.target.value)
                            }}
                            value={email}
                            type="email"
                            name="email"
                            placeholder='Enter Email' />
                        <input
                            onInput={(e) => {
                                setpassword(e.target.value)
                            }}
                            value={password}
                            type="password"
                            name="password"
                            placeholder='Enter Password' />
                        <button>Register</button>
                    </form>
                    <div className='link'>
                        <p>Don't have an account? <Link to="/login" >Login</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register
