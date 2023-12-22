import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductDetails from './ProductDetails.jsx';
import '../css/home.css';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://media.discordapp.net/attachments/1186723460072865853/1187446990280327300/images.jpg?ex=6596eb30&is=65847630&hm=1a9ce03659e20a66539ec1f237baaeccf9c63cd3569cbaccf43f9b2c7a0a19f4&=&width=905&height=347",
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
    </div>
  )
}

export default Home