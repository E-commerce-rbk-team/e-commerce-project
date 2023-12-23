import React from 'react'

function SalesProduct() {
  return (
    <div className="allprod">
    {products.filter((e,i)=>e.categories[0]===oneProduct.categories[0]).map((el, i) => {
           return (
             <div className="product-container" key={i}>
               <div className="product-image" >
                 <img src={el.imageUrl&&el.imageUrl[0]} alt="" onClick={()=>handleOneProd(el.id)} />
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
  )
}

export default SalesProduct