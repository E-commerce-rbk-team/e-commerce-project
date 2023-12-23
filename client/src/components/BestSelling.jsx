import React, { useState,useContext } from 'react'
import { DataContext } from '../context.js'
import '../css/bestselling.css'
import Rating from './Rating.jsx'
function BestSelling() {
    const { handleOneProd,products } = useContext(DataContext);
    const [prodCopie,setCopie]=useState([...products])
  return (
    <div className="allprod">
    {prodCopie.sort((a, b) => b.rating - a.rating).map((el, i) => {
           return (
            <div className="product-container" key={i}>
            <div className="product-image">
              <img src={el.imageUrl && el.imageUrl[0]} alt="" onClick={() => handleOneProd(el.id)} />
              <button className="buy-button">Add To Chart</button>
            </div>
            <div className="product-details">
              <div className="product-name">{el.productName}</div>
              <div className="product-price">{el.price}DT </div>
              <Rating/>
            </div>
          </div>
           );
         })}
 </div>
  )
}

export default BestSelling