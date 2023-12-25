import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function Product() {
    // Your image URLs for the slideshow
    const images = [
      "https://i.ibb.co/q5xmSrs/abb69c62-8b6f-409d-8c16-17ee11e65044.png    ",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ];
  
    // Slideshow properties
    const properties = {
      duration: 5000, // Time between slides in milliseconds
      transitionDuration: 1000, // Duration of slide transition in milliseconds
      infinite: true, // Loop the slideshow infinitely
      indicators: true, // Show slide indicators
      arrows: true, // Show navigation arrows
    };
  
    return (
      <div className="product-slideshow">
        <Slide {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <div style={{ 'backgroundImage': `url(${image})` }}>
                {/* You can add any additional content or styles for each slide */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
  
  export default Product;
  