import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'
import Product from './components/Product.jsx';
import Home from './components/ProductDetails.jsx'
import WhishList from './components/WhishList.jsx';
import Cart from "./components/Cart.jsx"
import Contact from './components/Contact.jsx';
import Categories from "./components/Categories.jsx"
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbarre.jsx'
import Team from './components/team.jsx'


function App() {

    return (
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wishlist" element={<WhishList />} />
      <Route path="/sign" element={<SignUp />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Team/>} />
    </Routes>
    <Footer/>
</BrowserRouter>
    );
  }

export default App;
