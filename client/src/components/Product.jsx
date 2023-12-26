import React, { useEffect, useState,useContext } from 'react';
import '../css/Allprod.css';
import axios from 'axios';
import CountdownTimer from './countdown';
import Categories from './Categories';
import { DataContext } from '../context.js'
import BestSelling from "./BestSelling.jsx"
const Product = ({user}) => {
  
  const [showAll, setShowAll] = useState(false);
  const {handleOneProd,products,handleAddToChartBtn } = useContext(DataContext);
 

  return (
    <div>
      <div className="product-timer1">
        <CountdownTimer />
        {!showAll && <Categories />}
      </div>
      <div className="allprod">
        {products.map((el, i) => {
          if (!showAll && el.sales <= 1) {
            return null; 
          }
          return (
            <div className="product-container" key={i}>
              <div className="product-image" >
              {el.sales && <div className="sales-ticket">-{el.sales}%</div>}
                <img src={el.imageUrl[0]} alt="" onClick={()=>handleOneProd(el.id)} />
                <button className="buy-button" onClick={()=>handleAddToChartBtn(user.id,el)}>Add To Chart</button>
              </div>
              <div className="product-details" >
                <div className="product-nameee">{el.productName}</div>
                <div className="product-priceeee">{el.price}DT</div>
                <div className="product-old-price">{(el.price/(1-(el.sales/100))).toFixed(2)}DT</div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
