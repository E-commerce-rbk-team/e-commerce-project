import React,{useContext} from 'react'
import '../css/sales.css'
import { DataContext } from '../context.js'
function SalesProduct() {
    const { handleOneProd,products } = useContext(DataContext);
  return (
    <div className="allprod">
    {products.filter((e,i)=>e.sales!==0).map((el, i) => {
           return (
            <div className="product-container" key={i}>
            <div className="product-image">
              <div className="sales-ticket">-{el.sales}%</div>
              <img src={el.imageUrl && el.imageUrl[0]} alt="" onClick={() => handleOneProd(el.id)} />
              <button className="buy-button">Add To Chart</button>
            </div>
            <div className="product-details">
              <div className="product-name">{el.productName}</div>
              <div className="product-old-price">{(el.price/(1-(el.sales/100))).toFixed(2)}DT</div>
              <div className="product-price">{el.price}DT</div>
            </div>
          </div>
           );
         })}
 </div>
  )
}

export default SalesProduct