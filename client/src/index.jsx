import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'
import Product from './components/Product.jsx';
import Home from './components/Home.jsx'
import WhishList from './components/WhishList.jsx';
import Cart from "./components/Cart.jsx"
import EditUser from "./components/EditUser.jsx"
import Slider from "./components/Slider.jsx"

function App() {

    return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Slider/>} />
      <Route path="/wishlist" element={<Home />} />
      <Route path="/sign" element={<Slider />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
</BrowserRouter>
    );
  }


ReactDOM.render(<App />, document.getElementById('App'))