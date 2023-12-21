import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'
import Product from './components/Product.jsx';
import Home from './components/Home.jsx'
import WhishList from './components/WhishList.jsx';
import Cart from "./components/Cart.jsx"
import Headers from './components/Header.jsx'
import Contact from './components/Contact.jsx';
function App() {

    return (
      <BrowserRouter>
      <Headers/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wishlist" element={<WhishList />} />
      <Route path="/sign" element={<SignUp />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
</BrowserRouter>
    );
  }

export default App;
