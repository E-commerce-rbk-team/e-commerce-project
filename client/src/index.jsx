import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'
import Product from './components/Product.jsx';

function App() {

    return (
      <div>
    <Product/>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('App'))