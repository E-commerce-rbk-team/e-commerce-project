import React,{useState} from 'react';
import '../css/edit.css';
import { NavLink} from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const EditUser=({data})=> {
const [pass, setPass] = useState("");
const [newPass1, setNewPass1] = useState("");
const [newPass2, setNewPass2] = useState("");
const [firstName, setFirstName] = useState("");
const [address, setAddress] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [refresh, setRefresh] = useState(false);
const [bool, setbool] = useState(false);
const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState('');




const passw= async ()=>{
  const ob={email:email,
    password:pass}

try {
  setRefresh(true);
  const response = await axios.post("http://localhost:3000/api/pass",ob);
   console.log(response.data);
   setbool(response.data)
    setRefresh(false);
    navigate(`/`);
  
  }
 catch (error) {
  setErrorMessage('Error during login. Please try again.');
  setRefresh(false);
  console.error('Error during login:', error);
}

};

   

  const update = () => {

    const obj={
      email:email,
     password:newPass2,
     address:address,
     firstName:firstName,
     lastName:lastName,
  
    //  updatedAt:new Date
    }
    console.log(data.id);
    console.log('obj',obj);
    
         axios.put(`http://localhost:3000/api/users/${data.id}`, obj).then((result=>{
        console.log("fhgfghf");
        console.log(result)
        setRefresh(!refresh);
        }))
    .catch ((error)=>{console.error('Error during update:', error)}) }
  


const updateuser = async () => {
  try {
console.log(bool);
    if (bool) {
      return alert("Unmatched Password");
    } else if (newPass1 !== newPass2) {
      return alert("Unmatched Passwords");
    } else {
      update();
      navigate(`/`);
      return alert("User Updated !!")
    }
  } catch (error) {
    console.error('Error during update:', error);
  }
};
    
  
  return (
    <div class="bigFlex">
  <div class="menu">
    <div>
    <NavLink to={`/`} className="link">Home</NavLink>/
    <NavLink to={'/EditUser'} className="link1">My Account</NavLink><br />
    </div>
    <br />
    <h2 class="gras">Manage My Account</h2> 
    <h3 class="notGras">My Profile</h3>
    <h3 class="notGras">Address Book</h3><br />
    <h3 class="notGras">My Payment Options</h3>
    <h2 class="notGras">My Orders</h2> 
    <h3 class="notGras">My Returns</h3>
    <h3 class="notGras">My Cancellations</h3><br />
    <h2 class="gras">My Wishlist</h2>
  </div>
<br />
  <div class="user-flex">
    <div class="flex1">
      <h3 class="user">Edit Your Profile :</h3><br />
      <div class="user-flex1">
        <div class="one">
          <h4>First Name:</h4>
          <input type="text" className="inputUser" onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div class="two">
          <h4>Last Name:</h4>
          <input type="text" className="inputUser" onChange={(e)=>{setLastName(e.target.value)}}/>
        </div></div>
        <div class="flex1">
      <div class="user-flex1">
      <div class="one">
        <h4>Email:</h4>
        <input type="text" className="inputUser"  onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div class="two">
        <br /><h4>Address:</h4>
        <input type="text" className="inputUser" onChange={(e)=>{setAddress(e.target.value)}}/>
      </div>
      </div>
    </div>
    </div>

    <div class="flex1">
      <h3 class="user">Edit Your Password :</h3><br />
      
        <div class="one">
          <h4>Current pssword:</h4>
          <input type="password" className="inputUser1" placeholder="current Password..." onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div > 
          <h4>New password :</h4>
          <input type="password" className="inputUser1" placeholder="New Passsword..." onChange={(e)=>{setNewPass1(e.target.value)}}/>
          </div>
          <div >
          <h4>Confirm your password :</h4>
          <input type="password" className="inputUser1" placeholder="Confirm Password..." onChange={(e)=>{setNewPass2(e.target.value)}}/>
          </div>
          <div><br /> <button className="but" onClick={()=>updateuser()}>Save Changes</button>
          <NavLink to={`/`} className="cancel" >cancel</NavLink><br /></div>
          </div>
    
  </div>
</div>
           
  );
}

export default EditUser;