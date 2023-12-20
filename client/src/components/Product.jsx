import React, { useEffect, useState } from 'react';
import '../css/Allprod.css';
import axios from 'axios';
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
   axios.get(`http://localhost:3000/api/products`).then(ress=>{
    setProducts(ress.data)
   }).catch(err=>{console.error(err)})
    },[])
    console.log(products);
 return (
    <div>
        <div className="product-timer1">
          <span>daysd</span>
          <span>hoursh</span>
          <span>minutesm</span>
          <span>secondss</span>
        </div>
        <div class="allprod">
        {products.map((el,i)=>(
    <div class="product-container">
    <div class="product-image">
      <img src={el.imageUrl} alt="" />
      <button class="buy-button">Buy Now</button>
    </div>
    <div class="product-details">
      <div class="product-name">{el.productName}</div>
      <div class="product-price">{el.price}DT</div>
    </div>
  </div>
  
    ))}
    </div>
    </div>
 );
};

export default Product;