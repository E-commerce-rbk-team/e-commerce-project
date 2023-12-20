import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'
import Product from './components/Product.jsx';
import Home from './components/Home.jsx'
import WhishList from './components/WhishList.jsx';
import Cart from "./components/Cart.jsx"
function App() {

    return (
      <div>
        <Product/>
      </div>
    );
  }


ReactDOM.render(<App />, document.getElementById('App'))