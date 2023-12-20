import React from 'react'
import "../css/category.css"
function Categories() {
  return (<div>
    <div class="sqandtxt">
    <div class="square"></div>
    <h2 class="jfy">Ckeck our Categories:</h2>
  </div>
    <div className="category-flex">
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/camera-retro-icon.png" alt="icon" className="category-icon"/>
             <h3>Technology</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/clothes-and-accessories/wedding-dress-icon.png" alt="icon" className="category-icon"/>
             <h3>Women Fashion</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/clothes-and-accessories/man-tie-icon.svg" alt="icon" className="category-icon"/>
             <h3>Men Fashion</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/dish-spoon-knife-icon.png" alt="icon" className="category-icon"/>
             <h3>Food Supplies</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/house-icon.png" alt="icon" className="category-icon"/>
             <h3>Home Supplies</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/gaming-gamepad-icon.png" alt="icon" className="category-icon"/>
             <h3>Videogames</h3>
        </div>
        <div className="category-flex1">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/clothes-and-accessories/diamond-icon.png" alt="icon" className="category-icon"/>
             <h3>Jewellery</h3>
        </div>
    </div>
    </div>)
}

export default Categories