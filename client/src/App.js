import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route,useLocation} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Product from './components/Product.jsx';
import Home from './components/Home.jsx'
import WhishList from './components/WhishList.jsx';
import Cart from "./components/Cart.jsx"
import Contact from './components/Contact.jsx';
import Categories from "./components/Categories.jsx"
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbarre.jsx'
import Team from './components/team.jsx'
import Login from './components/Login.jsx';
import Sign from './components/Sign.jsx';
import EditUser from './components/EditUser.jsx';
// import Slider from './components/Slider.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import AdminDashboard from './components/adminComponents/AdminDashboard.jsx'
import Products from './components/adminComponents/Products.jsx'
import UserList from './components/adminComponents/Users.jsx'
import SellerList from './components/adminComponents/SellerList.jsx'
import ClientList from './components/adminComponents/ClientList.jsx'
import AllProd from './components/AllProd.jsx';
import axios from 'axios';
import { useRadioGroup } from '@mui/material';

import AddressForm from './components/Checkout.jsx';


import ProductsSeller from './components/sellerComponent/ProductsSeller.jsx'

function App() {
const [id,setId]=useState(0)
const [userData, setUserData] = useState(null);
const location = useLocation();
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
     
      setUserData(response.data);
      
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  fetchUserData();
  
}, [id]); 
console.log("userdata",userData);
    return (
    <div>
      <Header/>
      {location.pathname !== '/admin' && <Navbar user={userData} setUserData={setUserData} />}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wishlist" element={<WhishList user={userData}/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Team/>} />
      <Route path="/EditUser" element={<EditUser/>} />
      <Route path="/Login" element={<Login userData={userData}  setId={setId}/>} />
      <Route path="/cart" element={<Cart user={userData}/>} />
      <Route path="/Admin" element={<AdminDashboard/>} />
      <Route path="/Products" element={<Products id={id}/>} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/sellers" element={<SellerList/>} />
      <Route path="/clients" element={<ClientList/>} />
      <Route path="/Sign" element={<Sign setId={setId}/>} />
      <Route path="/details" element={<ProductDetails user={userData}/>} />

      <Route
          path="/AddressForm"
          element={<AddressForm />}
        />

      <Route path="/seller" element={<ProductsSeller id={id}/>} />

    </Routes>
    <Footer/>
    </div>
    
    );
  }


export default App;
