import React, { useEffect, useState } from 'react';
import '../../dist/css/product.css';
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
        <div className="product-timer">
          <span>daysd</span>
          <span>hoursh</span>
          <span>minutesm</span>
          <span>secondss</span>
        </div>
        {products.map((el,i)=>(
    <div className="product">
       <div className='pro'>
      <img className="product-image" src={el.imageUrl}  />
      <div className="product-info">
        <h2 className="product-name">{el.productName}</h2>
        <p className="product-original-price">$price1</p>
        <p className="product-price">{el.price}DT</p>
        
        <button className="product-add-to-cart" >Add To Cart</button>
        </div>
      </div>
    </div>
    ))}
    </div>
 );
};

export default Product;