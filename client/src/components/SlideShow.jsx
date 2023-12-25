import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../css/SlideShow.css";
const SlideShow = () => {
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
      arrows: false

  };

  return (
    <div className="slide-container">
        <Slide {...properties}>
            {images.map((image, index) => (
                <div key={index} className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image})` }}></div>
                </div>
            ))}
        </Slide>
    </div>
);
};


export default SlideShow;