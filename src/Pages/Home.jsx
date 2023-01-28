import React from 'react'
import Aboutme from '../Components/Aboutme'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import HomeFrag from '../Components/HomeFrag'
import Navbar from '../Components/Navbar/Navbar'
import Projects from '../Components/Projects'

const Home = () => {
  return (
    <div >
    <div className='leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed homenav'>
    <Navbar/>
    <HomeFrag/>
    </div>
    <Projects/>
    <Aboutme/>
    <ContactUs/>
    <Footer/>
   
    </div>
  )
}

export default Home
