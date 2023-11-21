

const Navbar = () => {
    return (
        <div className=''>
            <nav>
                <ul className='flex flex-row justify-evenly items-center bg-sky-300 h-14'>
                    <li className='font-semibold text-xl'><a href="">Home</a> </li>
                    <li className='font-semibold text-xl' ><a href="">Product</a></li>
                    <li className='font-semibold text-xl' ><a href="">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar