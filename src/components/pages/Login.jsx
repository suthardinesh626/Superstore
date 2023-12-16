import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {



    return (
        <div className='flex flex-col justify-center items-center m-10  ' >
                <div className='flex flex-col justify-center items-center gap-4 rounded-xl shadow-xl border-2 p-5 w-1/4 '>
                    <div className=''>
                        <label className='text-lg font-medium' htmlFor="">Username</label>
                        <input className='m-2 rounded-md p-1 border-2' type="text" placeholder='Username' />
                    </div>
                    <div className='gap-2'>
                        <label className='text-lg font-medium' htmlFor="">Password</label>
                        <input className='m-2 rounded-md p-1 border-2' type="password" placeholder='Username' />
                    </div>
                    <p className=' font-serif cursor-pointer font-normal underline'><Link to='/signup' >Forgot Paasword ?</Link></p>
                <button className="w-full rounded-lg border-2 p-1 font-sans font-bold bg-blue-200  shadow-md"  >Login</button>
                </div>
                
        </div >
    )
}

export default Login