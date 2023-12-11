
const Signup = () => {
    return (
        <div className='flex flex-col justify-center items-center m-10  ' >
            <div className='flex flex-col items-center gap-4 rounded-xl shadow-xl border-2 p-5 w-1/4 '>
                <div className='w-full flex flex-row justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Username</label>
                    <input className='m-2 rounded-md p-1 border-2' type="text" placeholder='Username' />
                </div>
                <div className='w-full flex flex-row  justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Password</label>
                    <input className='m-2 rounded-md p-1 border-2' type="password" placeholder='Password' />
                </div>
                <div className='w-full flex flex-row  justify-evenly items-center'>
                    <label className='text-lg font-medium' htmlFor="">Confirm Password</label>
                    <input className='m-2 rounded-md p-1 border-2' type="password" placeholder='Confirm Password' />
                </div>
                <button className="w-full rounded-lg border-2 p-1 font-sans font-bold bg-blue-200  shadow-md"  >Sign Up</button>
            </div>

        </div >
    )
}

export default Signup
