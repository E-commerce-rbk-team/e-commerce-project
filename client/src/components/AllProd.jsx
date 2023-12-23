import React,{useContext} from 'react'
import '../css/allp.css'    
import { DataContext } from '../context.js'
import Rating from './Rating.jsx'
function AllProd() {
    const { handleOneProd,products } = useContext(DataContext);
  return (
    <div className="allprod">
    {products.map((el, i) => {
           return (
            <div className="product-container" key={i}>
            <div className="product-image">
                {el.sales&&<div className="sales-ticket">-{el.sales}%</div>}
              <img src={el.imageUrl && el.imageUrl[0]} alt="" onClick={() => handleOneProd(el.id)} />
              <button className="buy-button">Add To Chart</button>
            </div>
            <div className="product-details">
              <div className="product-name">{el.productName}</div>
              <div className="product-price">{el.price}DT <Rating/></div>
            </div>
          </div>
           );
         })}
 </div>
  )
}

export default AllProd