import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
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

function App() {

    return (
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wishlist" element={<WhishList />} />
      <Route path="/Login" element={<EditUser/>} />
      <Route path="/cart" element={<Categories/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Team/>} />
      <Route path="/Sign" element={<Sign/>} />
      <Route path="/EditUser" element={<EditUser/>} />
    </Routes>
    <Footer/>
</BrowserRouter>
    );
  }

export default App;
