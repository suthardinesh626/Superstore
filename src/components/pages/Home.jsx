import React from 'react'
import Navbar from './Navbar'
import HomeCarousel from './HomeCarousel'
import Product from './Product'
import Footer from './Footer'
const Home = () => {
  return (
    <>
          <HomeCarousel />
          <Product />
          <hr></hr>
          <Footer />
    </>
  )
}

export default Home
