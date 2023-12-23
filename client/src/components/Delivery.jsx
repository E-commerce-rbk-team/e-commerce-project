import React from 'react';
import "../css/Delivery.css"
const Delivery = () => {
  const imageUrl = 'https://i.postimg.cc/VsSPBfDY/e87e5165-1214-471a-8b28-b590f7ae311a.png'; 

  return (
    <div className="image-container">
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default Delivery;
