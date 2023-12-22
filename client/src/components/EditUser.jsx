import React from 'react';
import '../css/edit.css';
import { NavLink} from 'react-router-dom';

function EditUser() {
  return (
    <div class="bigFlex">
  <div class="menu">
    <div>
    <NavLink to={`/`} className="link">Home</NavLink>/
    <NavLink to={'/EditUser'} className="link">My Account</NavLink>
    </div>
    <h2 class="gras">Manage My Account</h2> 
    <h3 class="notGras">My Profile</h3>
    <h3 class="notGras">Address Book</h3>
    <h3 class="notGras">My Payment Options</h3>
    <h2 class="gras">My Orders</h2> 
    <h3 class="notGras">My Returns</h3>
    <h3 class="notGras">My Cancellations</h3>
    <h2 class="gras">My Wishlist</h2>
  </div>
<br />
  <div class="user-flex">
    <div class="flex1">
      <h3 class="user">Edit Your Profile :</h3>
      <div class="user-flex1">
        <div class="one">
          <h4>First Name:</h4>
          <input type="text" className="inputUser" />
        </div>
        <div class="two">
          <h4>Last Name:</h4>
          <input type="text" className="inputUser" />
        </div></div>
        <div class="flex1">
      <div class="user-flex1">
      <div class="one">
        <h4>Email:</h4>
        <input type="text" className="inputUser" />
      </div>
      <div class="two">
        <h4>Address:</h4>
        <input type="text" className="inputUser" />
      </div>
      </div>
    </div>
    </div>

    <div class="flex1">
      <h3 class="user">Edit Your Password :</h3>
      
        <div class="one">
          <h4>Current pssword:</h4>
          <input type="password" className="inputUser1" placeholder="current Password..."/>
        </div><br />
        <div >
          <h4>New password :</h4>
          <input type="password" className="inputUser1" placeholder="New Passsword..."/>
          </div>
          <div >
          <h4>Confirm your password :</h4>
          <input type="password" className="inputUser1" placeholder="Confirm Password..."/>
          </div>
          </div>

          <div> <NavLink to={`/`} className="link">cancel</NavLink><button className="but">Save Changes</button></div>
    
    <br /><br />
    
  </div>
</div>
           
  );
}

export default EditUser;