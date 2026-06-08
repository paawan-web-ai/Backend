import React from 'react'
import { Link } from 'react-router-dom'
import "../Nav.scss"
const Nav = () => {
    return (
        <div className='nav-bar'>
            <p>Instagram</p>
            <Link to="/create-post">
                <button className='button primary-button'>New Post</button>
            </Link>
        </div>
    )
}

export default Nav
