import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/cart.css';
import Order from './Order.jsx'


const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const userId = 1; // Replace '1' with the actual user ID
    axios.get(`http://localhost:3000/api/cart/${userId}`)
      .then((response) => {
        console.log(response.data);
        setCart(response.data); // Assuming the response contains an array of cart items for the user
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, cartItem) => {
      return acc + cartItem.Product.price * cartItem.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 7; // Fixed shipping cost

    return subtotal + shipping;
  };



  
  return (
    <div>
      <strong>Home / Cart</strong>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>{cartItem.Product.productName}</td>
              <td>${cartItem.Product.price}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleQuantityChange(cartItem.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>${cartItem.Product.price * cartItem.quantity}</td>
              <td>
                <img
                  src={cartItem.Product.imageUrl[0]}
                  alt={cartItem.Product.productName}
                  style={{ maxWidth: '70px', maxHeight: '70px', position: 'relative', left: '-950px', top: '0px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class="summary-box">
        <div>
          <p>Cart Total</p>
          <p>Subtotal: ${calculateSubtotal()}</p>
          <p>Shipping: $7</p>
          <p>Total: ${calculateTotal()}</p>
          <button className='bn14'>Process To CheckOut</button>
          <div class="placebox-info">
        <div class="input-container">
          <input placeholder="Coupon Code" class="input-field" type="text" />
          <span class="input-highlight"></span>
        </div>
        <button class="bn15">Apply Coupon</button>


      <br /><br />
      <div className="vl"></div>
      <div className="wrapper">
      <div className="box">
      <h4 className="title">Cart Total:</h4>
        <div className="center">

<h5 className="center">Insert your Email And Get your Discount:</h5>
<input className="inp" type="text" />
<button className="but">Use Coupon</button></div><br /><br />
<div className="left">subtotal:</div>
<div className="right">650Dt</div>
<div className="left">shipping:</div>
<div className="right">free</div>
<div className="left">total:</div>
<div className="right">650Dt</div>
<div className="center"><button className="but">BUY NOW !</button></div>

      </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;