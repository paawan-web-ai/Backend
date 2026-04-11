import React from 'react'

const Nav = () => {
    return (
        <div className='flex px-10 py-4 justify-between bg-purple-800 text-xl font-bold items-center text-white'>
            <div className='text-3xl'>
                Nav
            </div>
            <div className='flex items-center gap-6'>
                <p>HOME</p>
                <p>ABOUT </p>
                <button className='bg-red-500 px-6 py-2 rounded-xl active:bg-red-700 '>Login</button>
            </div>
        </div>
    )
}

export default Nav
