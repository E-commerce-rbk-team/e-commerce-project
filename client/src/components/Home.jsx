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