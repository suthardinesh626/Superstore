import Login from './components/pages/Login'
import Navbar from './components/pages/Navbar';
import Product from './components/pages/Product';
import Signup from './components/pages/Signup';
import './input.css'


function App() {
  return (
    <div className='w-full bg-blue-300'>
     {/* <Login/>
     <Signup/> */}
     <Navbar/>
     <Product/>
    </div>
  );
}

export default App;
