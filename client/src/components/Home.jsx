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

function Home({userdata}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../css/SlideShow.css";


  const images = [
    "https://images2.imgbox.com/60/fd/ItaLWild_o.png",
      "https://cdn.neowin.com/news/images/uploaded/2023/10/1697743744_xbox-power-your-dreams.jpg",
      "https://pbs.twimg.com/media/FqmfweYaAAAJwr_.jpg",
  ];

  const properties = {
    duration: 5000, 
    transitionDuration: 1000, 
    autoplay: true, 
    indicators: true ,
    arrows: false,
    easing: "ease-out",
    pauseOnHover: true,

};

  
  
  return (


   <div>
        <div className="slide-container">
        <Slide  {...properties}>
            {images.map((image, index) => (
                <div key={index} className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image})` }}></div>
                </div>
            ))}
        </Slide>
    </div>
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
    <Product user={userdata}/>

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