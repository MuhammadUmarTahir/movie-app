import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to = "/"><img  className = "header_icon" src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo'/></Link>
            <Link to="/movies/popular"><span>Popular</span></Link>
            <Link to="/movies/top_rated"><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"><span>Upcoming</span></Link>



        </div>
    </div>
  )
}

export default Header