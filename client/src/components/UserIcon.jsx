import React,{useState} from 'react'
import '../css/UserIcon.css'
import { NavLink} from 'react-router-dom';
import Logout from './Logout';
function UserIcon({setUserData}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  return (
    <div className="userDropdown"><img src="https://images-ext-1.discordapp.net/external/XjoCJLwMNJQrMq0DTYawsY9vY5xN64W8eyoIOoLqT1k/https/cdn-icons-png.flaticon.com/512/149/149071.png?format=webp&quality=lossless&width=581&height=581" alt="" onClick={toggleDropdown}/>
        <div className={`userdropcontent ${dropdownVisible ? 'visible' : ''}`}>
            
            <NavLink to={`/EditUser`} className="nav-link1">Manage My Account</NavLink>
           
            <NavLink to={`/wishlist`} className="nav-link1">WishList</NavLink>
            
            <NavLink to={`/`} className="nav-link1">My Orders</NavLink>
         
            <NavLink to={`/`} className="nav-link1">My Reviews</NavLink>
            
            <Logout setUserData={setUserData}/>
            
        </div>
    </div>
  )
}

export default UserIcon