import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between items-center py-3 p-7 bg-blue-950 text-white '>
            <div className='text-2xl font-bold cursor-pointer'>
                <h1>Head</h1>
            </div>
            <div className='flex gap-4 font-semibold cursor-pointer'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Nav
