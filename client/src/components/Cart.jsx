import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../css/cart.css';
import { DataContext } from '../context.js';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ user }) => {
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const { cartList, setCartList } = useContext(DataContext);
  const [notification, setNotification] = useState(''); 
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState(''); 
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartList.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartList.reduce((acc, cartItem) => {
      return acc + cartItem.product.price * cartItem.quantity;
    }, 0);
  };


  const checkoutt = () => {
    navigate('/AddressForm'); 
  };

  const handleBothCheckouts = () => {
    checkoutt();
    checkout();
  };

  
  const checkout = () => {
    const axiosRequests = cartList.map((e, i) =>
      axios.post('http://localhost:3000/api/cart', {
        UserId: user.id,
        ProductId: e.product.id,
        quantity: e.quantity,
        total: calculateTotal(),
        
      })
    );
    Promise.all(axiosRequests)
      .then((responses) => {
        setCartList([]);
      })
      .catch((err) => console.log(err));
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 7; 
    const totalBeforeDiscount = subtotal + shipping;

    const discountedTotal = totalBeforeDiscount - totalBeforeDiscount * discount;

    return discountedTotal;
  };

  const handleCouponApply = () => {
    if (couponCode === 'RBK20') {
      setDiscount(0.2);
      setNotification('Congratulation: You got a 20% discount!'); 
    } else {
      setNotification('Invalid coupon code.'); 
    }
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
          {cartList.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.productName}</td>
              <td>${cartItem.product.price}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleQuantityChange(cartItem.product.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>${cartItem.product.price * cartItem.quantity}</td>
              <td>
                <img
                  src={cartItem.product.imageUrl[0]}
                  alt={cartItem.product.productName}
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
          <p>Subtotal: {calculateSubtotal()} DT </p>
          <p>Shipping: 7 DT</p>
          <p>Total: {calculateTotal()} DT </p>
          <button className="bn14" onClick={handleBothCheckouts}>
          Proceed To CheckOut
          </button>
          <div class="placebox-info">
            <div class="input-container">
              <input
                placeholder="Coupon Code"
                class="input-field"
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <span class="input-highlight"></span>
            </div>
            <button class="bn15" onClick={handleCouponApply}>
              Apply Coupon
            </button>
          </div>
          {notification && <p>{notification}</p>} 
        </div>
      </div>
    </div>
  );
};

export default CartPage;
