import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <div className='flex flex-col items-center gap-4 rounded-xl shadow-xl border-2 p-5 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <div className='w-full flex flex-row max-sm:flex-col sm:text-sm justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Username</label>
                    <input className='m-2 rounded-md p-1 border-2' type="text" placeholder='Username' />
                </div>
                <div className='w-full flex flex-row max-sm:flex-col justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Password</label>
                    <input className='m-2 rounded-md p-1 border-2' type="password" placeholder='Password' />
                </div>
                <div className='w-full flex flex-row max-sm:flex-col  justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Confirm Password</label>
                    <input className='m-2 rounded-md p-1 border-2' type="password" placeholder='Confirm Password' />
                </div>
                <p className="font-serif cursor-pointer font-normal underline"> <Link to='/login' >Already have account ?</Link> </p>
                <button className="w-full rounded-lg border-2 p-1 font-sans font-bold bg-blue-200  shadow-md"  >Sign Up</button>
            </div>
        </div>
    )
}

export default Signup
