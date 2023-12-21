import React, { useState } from 'react';
import Rating from './Rating.jsx'; // Import the new RatingComponent
import '../css/ProdDetails.css';
import Product from './Product';

function ProductDetails() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div>
    <div className='alldetails'>
      <div className='image-container'>
        <img
          src='https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg'
          alt=''
          className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg')}
          onMouseLeave={handleImageLeave}
        />
        <img src='https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg' alt='' className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg')}
          onMouseLeave={handleImageLeave}
        />
        <img src='https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg' alt='' className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg')}
          onMouseLeave={handleImageLeave}
        />
        <img
          src='https://i.pinimg.com/736x/8b/8a/26/8b8a26cef978562faa328441b3cf5b80.jpg'
          alt=''
          className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/736x/8b/8a/26/8b8a26cef978562faa328441b3cf5b80.jpg')}
          onMouseLeave={handleImageLeave}
        />
      </div>
      <img src={hoveredImage || 'https://i.pinimg.com/564x/57/3f/d9/573fd901859c60c923c5de260c2a896a.jpg'} alt='' className='display-image' />
      <div className="product-info-container">
      <div className="productname">Product Name</div>
      <div className="productrating">
        <span className="reviews"> (150 reviews)</span>
        <span className="separator"> | </span>
        <span className="in-stock">In Stock</span>
      </div>
      <div className="productprice">$99.99</div>
      <div className="productdescription">qdqsdqsdsqdsqdsqdqdqsdqsdsqdsqdddqsdqsvdgfdhfdhfdfdsfsfdfsd</div>
      <div className="bottomborder"></div>
    </div>
    </div>
    <div className='related'>
    <div class="square"></div>
  <h2 class="jfy">just for you</h2>
  </div>
    <Product/>
    <Rating/>

    </div>
  );
}

export default ProductDetails;
