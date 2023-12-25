import React from 'react';

const FilteredProducts = ({ products }) => {
  return (
    <div>
      {products.map((el, i) => (
        <div className="bigcontainer" key={i}>
        <div className="product-container" >
          <div className="product-image">
            <img src={el.imageUrl[0]} alt="" />
            <button className="buy-button">Buy Now</button>
          </div>
          <div className="product-details">
            <div className="product-name">{el.productName}</div>
            <div className="product-price">{el.price}DT</div>
          </div>
        </div></div>
      ))}
    </div>
  );
};

export default FilteredProducts;