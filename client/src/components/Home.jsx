import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductDetails from './ProductDetails.jsx';
import '../css/home.css';
import Delivery from './Delivery.jsx';
import Arrivals from './Arrivals.jsx';
import BestSelling from './BestSelling.jsx';
import BestSellers from './BestSellers.jsx';
import Jbl from './Jbl.jsx';
import Explore from './Explore.jsx';
import SalesProduct from './SalesProduct.jsx';  
function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.ibb.co/q5xmSrs/abb69c62-8b6f-409d-8c16-17ee11e65044.png",
    "https://i.ibb.co/j5xz9n1/ps5.jpg",
    "https://i.ibb.co/wLxgQRL/resize-1703240989234827213spiderman2featured-1.jpg"
  ];  

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval); 
  }, []);

  
  
  return (


   <div>
  <div className='catandimg'> <div className="Allcategory">
  <div className="div">
  <div className='text-wrapper-2'>Woman's Fashion &gt;</div>
      
  </div>
  <div className="div-2"> 
  <div className='text-wrapper-2'>Men's Fashion &gt;</div>
  </div>
  <div className="text-wrapper-2">Electronics-</div>
  <div className="text-wrapper-2">Home &amp; Lifestyle</div>
  <div className="text-wrapper-2">Medicine</div>
  <div className="text-wrapper-2">Sports &amp; Outdoor</div>
  <div className="text-wrapper-2">Baby’s &amp; Toys</div>
  <div className="text-wrapper-2">Groceries &amp; Pets</div>
  <div className="text-wrapper-2">Health &amp; Beauty</div>
   </div>
   <img
          className='ad1img'
          src={images[currentImageIndex]}
          alt=''
          onClick={changeImage} 
        />    </div>
    <Product/>
    <Delivery/>
    <Arrivals/>
    <BestSellers/>
    <BestSelling/>
    <Jbl/>
    <Explore/>

    </div>
  )
}

export default Home