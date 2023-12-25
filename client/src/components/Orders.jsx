import React, { useEffect, useState,useContext } from 'react'
import '../css/orders.css'
import axios from 'axios'
import { DataContext } from '../context.js'
function Orders({user}) {
    const { products} = useContext(DataContext);
    const [myCart,setCart]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api//cart/${user.id}`)
          .then((response) => {
            setCart(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
  return (
    <div className='orders'>
        <h1>your orders</h1>
        <div className='orderstable'>
            <span>productName</span>
            <span>total</span>
            <span>quantity</span>
            <span>created-at</span>
        </div>
            {myCart.map((e,i)=>( <div className='orderedproduct'>
            <span>{}</span>
            <span>500</span>
            <span>4</span>
            <span>date...</span>  
            </div>))}
    </div>
  )
}

export default Orders