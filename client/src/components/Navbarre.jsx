import React from 'react'
import { NavLink} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Home from './Home';
import Cart from './Cart';
function Head() {
  return (
    <header>
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo"/>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          </div>
          <div className="nav-links">
            <NavLink to={'/'} className="nav-link">Login</NavLink>
            <NavLink to={`/Home`} className="nav-link">Home</NavLink>
            <NavLink to={'/Contact'} className="nav-link">Contact</NavLink>
            <NavLink to={'/About'} className="nav-link">About</NavLink>
            <NavLink to={'/Sign'} className="nav-link">Sign Up</NavLink>
            <NavLink to={'/Cart'} className="nav-link">cartLogo</NavLink>

          </div>
        </nav>
      </header>
  )
}

export default Head