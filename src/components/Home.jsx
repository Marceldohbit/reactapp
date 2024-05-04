
import React from 'react'
import Footer from './Footer.jsx'
import Blogs from './Blogs.jsx'
import   './css/Blogs.css'
import Login from './Login.jsx'
import HorizontalLine from './HorizontalLine.jsx'
import Welcome from './Welcome.jsx'
import FlightAff from './FlightAff.jsx'
import LogeAff from './LogeAff.jsx'

const Home = () => {
  return (
      <div className='home'>  
      
      <div>
        <Welcome/>
      </div>
      <div>
        
      </div>
      <div>
        <Blogs/>
      </div>
      <div>
        <HorizontalLine/>
      </div>
      <div>
    <Footer/>
      </div>
      <div>
        <Login/>
      </div>

    </div>
    
  )
}

export default Home
