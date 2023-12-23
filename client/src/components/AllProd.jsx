import React, { useContext, useState } from 'react';
import '../css/allp.css';
import { DataContext } from '../context.js';
import Rating from './Rating.jsx';

function AllProd() {
  const { handleOneProd, products } = useContext(DataContext);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const showLimitedProducts = () => {
    setShowAllProducts(false);
  };

  const showAll = () => {
    setShowAllProducts(true);
  };

  const productsToShow = showAllProducts ? products : products.slice(0, 8);

  return (
    <div className="allprodd">
      {productsToShow.map((el) => {
        return (
          <div className="container">

          <div className="product-container" key={el.id}>
            <div className="product-image">
              {el.sales && <div className="sales-ticket">-{el.sales}%</div>}
              <img src={el.imageUrl && el.imageUrl[0]} alt="" onClick={() => handleOneProd(el.id)} />
              <button className="buy-button">Add To Cart</button>
            </div>
            </div>

            <div className="product-details">
              <div className="product-name">{el.productName}</div>
              <div className="product-price">{el.price}DT</div>
            </div>
          </div>
        );
      })}
      {!showAllProducts && (
        <div className="button-container">
          <button className = "showw" onClick={showAll}>Show All Products</button>
        </div>
      )}
      {showAllProducts && (
        <div className="button-container">
          <button className = "show"onClick={showLimitedProducts}>Show Less Products</button>
        </div>
      )}
    </div>
  );
}
export default AllProd;
