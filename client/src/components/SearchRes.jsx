import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/searchprods.css';
import { useLocation } from 'react-router-dom';

function SearchRes() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]); 

  const filt = () => {
    return (
      <div className="allprod">
        {products
          .filter((el) => {
            return (
              el.categories[0].toUpperCase().includes(search.toUpperCase()) ||
              el.categories[1].toUpperCase().includes(search.toUpperCase()) ||
              el.productName.toUpperCase().includes(search.toUpperCase())
            );
          })
          .map((el, i) => (
            <div className="bigcontainer" key={i}>
              <div className="product-container">
                <div className="product-image">
                  <img src={el.imageUrl[0]} alt="" />
                  <button className="buy-button">Buy Now</button>
                </div>
                <div className="product-details">
                  <div className="product-name">{el.productName}</div>
                  <div className="product-price">{el.price}DT</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return <div>{filt()}</div>;
}

export default SearchRes;

