import React from 'react'
import { NavLink} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import '../css/nav.css'
function Head() {
  return (
    <header>
        <nav className="navbar">
          <img src="" alt="Logo" className="logo"/>
          <div className="nav-links">
            <NavLink to={`/`} className="nav-link">Home</NavLink>
            <NavLink to={'/Contact'} className="nav-link">Contact</NavLink>
            <NavLink to={'/About'} className="nav-link">About</NavLink>
            <NavLink to={'/Sign'} className="nav-link">Sign Up</NavLink>
          </div>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          <NavLink to={'/Cart'} className="navcart">cartLogo</NavLink>
          </div >
        </nav>
      </header>
  )
}

export default Head