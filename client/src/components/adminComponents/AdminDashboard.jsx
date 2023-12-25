import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashBoard.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [sellerCount, setSellerCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserCounts() {
      try {
        const userResponse = await axios.get('http://localhost:3000/api/admin/countUsers');
        setUserCount(userResponse.data.userCount);
        const response = await axios.get('http://localhost:3000/api/admin/countUsers');
        const filteredSellers = response.data.filter(user => user.role === 'seller');
        setSellerCount(filteredSellers);
      } catch (error) {
        console.error('Error fetching user/seller counts:', error);
      }
    }
    fetchUserCounts();
  }, []);


  return (
    <>
      <header role="banner">
        <h1>OmniMarket Admin Panel</h1>
        <ul className="utilities">
          <li className="users"><a href="#">My Account</a></li>
          <li><a onClick={()=> navigate(`/Login`)} href="">Logout</a></li>
        </ul>
      </header>

      <nav role='navigation'>
        <ul className="main">
          <li className="dashboard"><a href="admin">Dashboard</a></li>
          <li className="users"><Link to="/clients">Clients</Link></li>
          <li className="comments"><Link to="/sellers">Sellers</Link></li>
          <li className="write"><Link to="/products">Products</Link></li>
          <li className="users"><Link to="/users">Manage Users</Link></li>
        </ul>
      </nav>

      <main role="main">
        <section className="panel important">
          <h2>Welcome To Admin DashBoard!</h2>
          <ul>
          <li>All Users: {userCount}</li>
          <li>Sellers: {sellerCount}</li>
          <li>Clients: {userCount}</li>

          </ul>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
