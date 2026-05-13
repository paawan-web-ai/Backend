import React from 'react'
import { Link } from 'react-router'
import "../style/form.scss"
const Register = () => {
    return (
        <div>
            <main>
                <div className="form-container">
                    <h1>Register</h1>
                    <form >
                        <input type="text" name="username" placeholder='Enter Username' />
                        <input type="email" name="email" placeholder='Enter Email' />
                        <input type="password" name="password" placeholder='Enter Password' />
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
