import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Product from './Product';
import FilteredProducts from './FilteredProducts'; 
import '../css/home.css';
import axios from 'axios';
function Home() {
  const [products, setProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.ibb.co/q5xmSrs/abb69c62-8b6f-409d-8c16-17ee11e65044.png",
    "https://images2.imgbox.com/2e/05/FIVuJlGH_o.jpg",
    "https://i.ibb.co/wLxgQRL/resize-1703240989234827213spiderman2featured-1.jpg"
  ];  

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  const filt = (text) => {

    const filteredProducts = products.filter((el) => {
      return (
        el.categories[0].toUpperCase().includes(text.toUpperCase()) ||
        el.categories[1].toUpperCase().includes(text.toUpperCase()) ||
        el.productName.toUpperCase().includes(text.toUpperCase())
      );
    });

    return <Link to={'/filtered-products'}><FilteredProducts products={filteredProducts} /></Link>;
  };

  

  
  return (


   <div>
  <div className='catandimg'> <div className="Allcategory">
  <div className="div">
  <div className='text-wrapper-2'onClick={()=>{return filt("woman")}}>Woman's Fashion &gt;</div>
      
  </div>
  <div className="div-2"> 
  <div className='text-wrapper-2'onClick={()=>{return filt("men")}}>Men's Fashion &gt;</div>
  </div>
  <div className="text-wrapper-2" onClick={()=>{return filt("electronics")}}>Electronics-</div>
  <div className="text-wrapper-2"onClick={()=>{return filt("home")}}>Home &amp; Lifestyle</div>
  <div className="text-wrapper-2" onClick={()=>{return filt("medecine")}}>Medicine</div>
  <div className="text-wrapper-2" onClick={()=>{return filt("sports")}}>Sports &amp; Outdoor</div>
  <div className="text-wrapper-2" onClick={()=>{return filt("toys")}}>Baby’s &amp; Toys</div>
  <div className="text-wrapper-2" onClick={()=>{return filt("groceries")}}>Groceries &amp; Pets</div>
  <div className="text-wrapper-2" onClick={()=>{return filt("health")}}>Health &amp; Beauty</div>
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