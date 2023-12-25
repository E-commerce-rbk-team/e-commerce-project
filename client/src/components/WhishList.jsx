import React,{useState,useEffect,useContext} from 'react'
import '../css/Allprod.css'
import axios from 'axios'
import { DataContext } from '../context.js'
function WhishList({user}) {
  const [loggedId,setId]=useState(user.id)
  const [wish,setWish]=useState([])
  const { handleAddToChartBtn,products } = useContext(DataContext);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/wish/${loggedId&&loggedId}`
      )
      .then((result) => {
        
        const wishPromises = result.data.map((wish) => {
          
          return axios.get(
            `http://localhost:3000/api/products/${wish.ProductId}`
          );
        });
        Promise.all(wishPromises)
          .then((responses) => {
            
            const productsData = responses.map((response) => response.data);
            setWish(productsData)})
      .catch((err) => {
        console.error(err); 
      })});
  }, []);
  console.log("wishh",wish);
  return (
    <div className="allWish">
    <div >
      <div className="wishAndBtn">
        <span>Wishlist(4)</span>
        <button className='wishbtn'>Move All To Bag</button>
      </div>
      </div>
      <div class="allprod">
        {wish.map((e,i)=>(<div class="product-container">
      <div class="product-image">
        <img src={e.imageUrl[0]} alt="" />
        <button class="buy-button" onClick={()=>handleAddToChartBtn(loggedId,wish[i])}>Add To Cart</button>
      </div>
      <div class="product-details">
        <div class="product-namedqdq">{e.productName}</div>
        <div class="product-priceqdqd">{e.price}</div>
      </div>
    </div>))}
  </div>
  <div className="wishAndBtn">
  <div class="sqandtxt">
  <div class="square"></div>
  <h2 class="jfy">just for you</h2>
</div>
        <button className='wishbtn'>see All</button>
      </div>
      <div class="allprod">
        {products.map((e,i)=>(
          <div class="product-container">
          <div class="product-image">
            <img src={e.imageUrl} alt="" />
            <button class="buy-button">Add To Cart</button>
          </div>
          <div class="product-details">
            <div class="product-namessssss">{e.productName}</div>
            <div class="product-pricedqdq">{e.price}Dt</div>
          </div>
        </div>
        ))}
  </div>
  </div>
  )
}
export default WhishList;