import React, { useEffect, useState,useContext } from 'react';
import '../css/Allprod.css';
import axios from 'axios';
import CountdownTimer from './countdown';
import Categories from './Categories';
import { DataContext } from '../context.js'
const Product = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { handleOneProd } = useContext(DataContext);
  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="product-timer1">
        <CountdownTimer />
        {!showAll && <Categories />}

        <button class="bn632-hover bn28" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Flash Sales' : 'View All Products'}
        </button>
      </div>
      <div className="allprod">
        {products.map((el, i) => {
          if (!showAll && el.sales <= 1) {
            return null; 
          }
          return (
            <div className="product-container" key={i}>
              <div className="product-image" >
                <img src={el.imageUrl[0]} alt="" onClick={()=>handleOneProd(el.id)} />
                <button className="buy-button">Buy Now</button>
              </div>
              <div className="product-details" >
                <div className="product-name">{el.productName}</div>
                <div className="product-price">{el.price}DT</div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
