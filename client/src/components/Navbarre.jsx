import React from 'react'
import { NavLink} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import '../css/nav.css'
function Head() {
  return (
    <header>
        <nav className="navbar">
          <img className="logo" src="https://media.discordapp.net/attachments/1173529999295381524/1187087546820333608/image.png?ex=65959c6e&is=6583276e&hm=df9e9f1513c9b52dba719168ad71a4655e6c4eab87cd9f17edc9b97a54b0aee6&=&quality=lossless&width=375&height=248" alt="Logo" className="logo"/>
          <div className="nav-links">
            <NavLink to={`/`} className="nav-link">Home</NavLink>
            <NavLink to={'/Contact'} className="nav-link">Contact</NavLink>
            <NavLink to={'/About'} className="nav-link">About</NavLink>
            <NavLink to={'/Sign'} className="nav-link">Sign Up</NavLink>
          </div>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          <NavLink to="/Cart" >
  <img className="navcartt" src="https://static.thenounproject.com/png/1074958-200.png" alt="Cart" />
</NavLink>          </div >
        </nav>
      </header>
  )
}

export default Head