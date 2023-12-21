import React from 'react'
import Product from './Product'
import ProductDetails from './ProductDetails.jsx'
import '../css/home.css'
function Home() {
  return (
   <div>
  <div className='catandimg'> <div className="Allcategory">
  <div className="div">
    <div className="text-wrapper">Woman’s Fashion</div>
      
  </div>
  <div className="div-2"> 
    <div className="text-wrapper">Men’s Fashion</div>
  </div>
  <div className="text-wrapper-2">Electronics</div>
  <div className="text-wrapper-2">Home &amp; Lifestyle</div>
  <div className="text-wrapper-2">Medicine</div>
  <div className="text-wrapper-2">Sports &amp; Outdoor</div>
  <div className="text-wrapper-2">Baby’s &amp; Toys</div>
  <div className="text-wrapper-2">Groceries &amp; Pets</div>
  <div className="text-wrapper-2">Health &amp; Beauty</div>
   </div>
   <img className='ad1img' src="https://th.bing.com/th/id/OIP.g2rnLw4LpnUHLBl3LjCKQAHaEs?rs=1&pid=ImgDetMain" alt="" />
    </div>
    <Product/>
    </div>
  )
}

export default Home