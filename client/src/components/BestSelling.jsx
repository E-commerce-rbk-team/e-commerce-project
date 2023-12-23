import React, { useState, useContext } from 'react';
import { DataContext } from '../context.js';
import '../css/bestselling.css';
import Rating from './Rating.jsx';

function BestSelling() {
  const { handleOneProd, products } = useContext(DataContext);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const initialDisplayLimit = 5;
  const prodCopie = showAllProducts ? [...products] : products.slice(0, initialDisplayLimit);
  return (
    <div className="allprodds">
      {prodCopie.length > 0 ? (
        prodCopie.sort((a, b) => b.rating - a.rating).map((el, i) => (
          <div className="product-container" key={i}>
            <div className="product-image">
              <img src={el.imageUrl && el.imageUrl[0]} alt="" onClick={() => handleOneProd(el.id)} />
              <button className="buy-button">Add To Cart</button>
            </div>
            <div className="product-details">
              <div id="product-name">{el.productName}</div>
              <div className="product-price">{el.price}DT </div>
              <Rating />
            </div>
          </div>
        ))
      ) : (
        <p>No products to display</p>
      )}
      {!showAllProducts && (
        <div className="button-container">

        </div>
      )}
    </div>
  );
}

export default BestSelling;
