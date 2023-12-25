import React,{useContext} from 'react'
import { NavLink} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Search from "./Search.jsx"
import '../css/nav.css'
import UserIcon from './UserIcon';
import { DataContext } from '../context.js'
function Head({user,setUserData}  ) {
  const { cartList } = useContext(DataContext);
  return (
    <header>
        <nav className="navbar">
        <NavLink to={`/`} className="nav-link"><img className="logo" src="https://media.discordapp.net/attachments/1186723460072865853/1187531378980573304/image-removebg-preview.png?ex=659739c8&is=6584c4c8&hm=165c6ac25e9118be3713903e3e9f8abb01bd00cc7b8ff15f8d88e0a03ad14f5f&=&quality=lossless&width=375&height=248" alt="Logo"/></NavLink>
          <div className="nav-links">
            <NavLink to={`/`} className="nav-link">Home</NavLink>
            <NavLink to={'/Contact'} className="nav-link">Contact</NavLink>
            <NavLink to={'/About'} className="nav-link">About</NavLink>
            <NavLink to={'/Login'} className="nav-link">Login</NavLink>
            <NavLink to={'/Sign'} className="nav-link"></NavLink>

          </div>
          <div className="nav-search">
          <Search/>
          
          <NavLink to="/Cart" >
          <img className="navcartt" src="https://static.thenounproject.com/png/1074958-200.png" alt="Cart" />
          <span id="item-count" class="item-count">{cartList.length}</span>
          </NavLink> 
          {user? <UserIcon setUserData={setUserData}/>:""}
         </div >
        </nav>
      </header>
  )
}

export default Head