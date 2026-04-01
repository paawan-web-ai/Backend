import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-green-200'>
            <div className='bg-gray-200 flex flex-col items-center gap-10 justify-center w-[50%] h-[50%] rounded shadow-2xl'>
                <div className='text-2xl font-bold text-blue-500'>
                    <h1>Login Form</h1>
                </div>
                <div className='flex flex-col  gap-2 text-xl'>
                    <input className='border border-blue-300 px-5 py-4' type="email" name="" id="" placeholder='Enter Email' />
                    <input className='border border-blue-300 px-5 py-4' type="password" name="" id="" placeholder='Enter Password' />
                    <div className='text-sm flex justify-center'>
                        <p> Don't have an account? <a href="">Register</a></p>
                    </div>
                    <button className=' mx-auto mt-4 bg-blue-500 text-white px-5 rounded py-2 w-fit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login
