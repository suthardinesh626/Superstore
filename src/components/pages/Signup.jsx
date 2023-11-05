
const Signup = () => {
    return (
        <div className="flex flex-col items-center gap-6 my-8 ">
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Username' />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='password' />
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder='confirmpass' />
            </div>
        </div>
    )
}

export default Signup
