import React from 'react'

const Login = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-8 p-5 bg-green-300'>
                <div className=''>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Username' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Username' />
                </div>
            </div>
        </>
    )
}

export default Login